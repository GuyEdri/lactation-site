import { useState, useEffect } from 'react'

const translations = {
  en: {
    name: "Esther Edri",
    title: "IBCLC Certified Lactation Consultant",
    heroTitle: "Gentle support for your breastfeeding journey",
    heroSubtitle: "Evidence-based care that meets you where you are. Every family is welcome here.",
    cta: "Let's Connect",
    aboutTitle: "About Me",
    aboutText1: "I'm passionate about helping families navigate their unique breastfeeding journey with confidence and joy. With gentle, evidence-based support, I meet you where you are.",
    aboutText2: "Whether you're expecting your first baby or facing challenges with your current journey, I'm here to provide the guidance and encouragement you need.",
    aboutText3: "As an IBCLC certified consultant, I combine professional expertise with a warm, supportive approach. Let's work together to reach your goals.",
    servicesTitle: "How Can I Help?",
    servicesSubtitle: "Every breastfeeding journey is unique. Here are some of the ways I can support you:",
    mythsTitle: "Let's Clear Some Myths",
    tipsTitle: "Tips for Your Breastfeeding Journey",
    faqTitle: "Frequently Asked Questions",
    faqSubtitle: "Common questions I hear from families:",
    testimonialsTitle: "What Families Say",
    contactTitle: "Ready to Connect?",
    contactText: "I'm here to support you on your breastfeeding journey. Whether you have questions or just need someone to talk to, don't hesitate to reach out.",
    contactCta: "Message Me on WhatsApp",
    footerTitle: "Esther Edri",
    footerSubtitle: "IBCLC Certified Breastfeeding Consultant",
    rights: "© 2026 All rights reserved",
    lang: "עברית"
  },
  he: {
    name: "אסתר אדרי",
    title: "יועצת הנקה מוסמכת IBCLC",
    heroTitle: "תמיכה עדינה למסע ההנקה שלך",
    heroSubtitle: "טיפול מבוסס ראיות שמתאים לך. כל משפחה מוזמנת כאן.",
    cta: "בואו נתחבר",
    aboutTitle: "עליי",
    aboutText1: "אני מתמקדת בלעזור למשפחות לעבור את מסע ההנקה הייחודי שלהן בביטחון ובשמחה. עם תמיכה עדינה ומבוססת ראיות, אני פוגשת אותך במקום שבו את.",
    aboutText2: "בין אם את מצפה לתינוק הראשון שלך או מתמודדת עם אתגרים במסע ההנקה הנוכחי שלך, אני כאן כדי לספק לך את ההכוונה והעידוד שאת צריכה.",
    aboutText3: "כיועצת הנקה מוסמכת IBCLC, אני משלבת מומחיות מקצועית עם גישה חמימה ותומכת. בואי נעבוד יחד כדי להגיע ליעדים שלך.",
    servicesTitle: "איך אוכל לעזור?",
    servicesSubtitle: "כל מסע הנקה הוא ייחודי. הנה כמה מהדרכים שבהן אוכל לתמוך בך:",
    mythsTitle: "בואו ננפץ כמה מיתוסים",
    tipsTitle: "טיפים למסע ההנקה שלך",
    faqTitle: "שאלות נפוצות",
    faqSubtitle: "שאלות נפוצות שאני שומעת ממשפחות:",
    testimonialsTitle: "מה המשפחות אומרות",
    contactTitle: "מוכנים להתחבר?",
    contactText: "אני כאן לתמוך בך במסע ההנקה שלך. בין אם יש לך שאלות או שאת פשוט צריכה מישהו לדבר איתו, אל תהססי לפנות.",
    contactCta: "שלחי לי הודעה בוואטסאפ",
    footerTitle: "אסתר אדרי",
    footerSubtitle: "יועצת הנקה מוסמכת IBCLC",
    rights: "© 2026 כל הזכויות שמורות",
    lang: "English"
  }
}

const myths = {
  en: [
    { myth: "You must nurse every 2-3 hours", fact: "Feed on demand instead. Babies know how much milk they need." },
    { myth: "Small breasts produce less milk", fact: "Breast size doesn't affect milk production. All breasts can make plenty of milk." },
    { myth: "Some pain is normal", fact: "While mild tenderness early on is common, severe pain is not normal and should be addressed." },
    { myth: "You can't breastfeed while sick", fact: "Most illnesses are actually safe and beneficial to continue breastfeeding." },
    { myth: "Breastfeeding should hurt", fact: "It shouldn't be painful. Pain often indicates a latch issue that can be corrected." },
    { myth: "Formula is equal to breast milk", fact: "Breast milk contains unique antibodies and nutrients that formula cannot replicate." }
  ],
  he: [
    { myth: "צריך להניק כל 2-3 שעות", fact: "במקום זאת, הניקי לפי דרישה. תינוקות יודעים כמה חלב הם צריכים." },
    { myth: "חזה קטן מייצר פחות חלב", fact: "גודל החזה לא משפיע על ייצור החלב. כל החזיים יכולים לייצר הרבה חלב." },
    { myth: "קצת כאב זה נורמלי", fact: "אמנם רגישות קלה בהתחלה היא שכיחה, אבל כאב חזק אינו נורמלי ויש לטפל בו." },
    { myth: "אי אפשר להניק כשחולים", fact: "רוב המחלות בטוחות להמשך הנקה ואף מועילות." },
    { myth: "הנקה צריכה לכאוב", fact: "זה לא צריך לכאוב. כאב לעיתים קרובות מעיד על בעיית יניקה שניתן לתקן." },
    { myth: "תחליף חלב שווה לחלב אם", fact: "חלב אם מכיל נוגדנים וחומרי הזנה ייחודיים שאין בתחליפים." }
  ]
}

const tips = {
  en: [
    "Stay hydrated - your body needs extra fluids to produce milk",
    "Find positions that work for you and your baby",
    "Skin-to-skin contact boosts milk production and bonding",
    "Don't compare your journey to others - every baby is different",
    "Rest is just as important as nutrition for milk supply",
    "Eat nutrient-rich foods to support your body",
    "Ask for help - you don't have to do this alone",
    "Trust your body - it's designed for this",
    "Cluster feeding is normal and temporary",
    "Laid-back positions can make latching easier",
    "Watch for hunger cues - rooting, hand-to-mouth",
    "Night nursing is normal and helps establish supply",
    "A good latch should feel comfortable after initial adjustment",
    "Breast compression can help baby get more milk",
    "Paced bottle feeding helps if supplementing"
  ],
  he: [
    "שתי הרבה מים - הגוף שלך צריך נוזלים נוספים לייצור חלב",
    "מצאי תנוחות שמתאימות לך ולתינוק",
    "מגע עור לעור מגביר ייצור חלב וקשר",
    "אל תשוי את המסע שלך לאחרים - כל תינוק שונה",
    "מנוחה חשובה לא פחות מתזונה לייצור חלב",
    "אכלי מזון עשיר בחומרי הזנה לתמיכה בגוף",
    "בקשי עזרה - את לא צריכה לעשות את זה לבד",
    "סמכי על הגוף שלך - הוא תוכנן לזה",
    "הנקה מרובה בלילה היא נורמלית וזמנית",
    "תנוחות שכיבה יכולות להקל על היניקה",
    "שימי לב לסימני רעב - חיפוש, יד לפה",
    "הנקה בלילה היא נורמלית ועוזר לבסס ייצור",
    "יניקה טובה צריכה להרגיש נוח אחרי ההתאמה הראשונית",
    "לחיצה על השד יכולה לעזור לתינוק לקבל יותר חלב",
    "האכלה בקצב מבוקר עוזרת אם יש תוספת"
  ]
}

const services = {
  en: [
    { title: "One-on-One Consultations", description: "Personalized support for latching, positioning, and milk supply concerns", icon: "🤱" },
    { title: "Virtual Sessions", description: "Convenient online consultations from the comfort of your home", icon: "💻" },
    { title: "Prenatal Education", description: "Preparing for a successful breastfeeding journey before baby arrives", icon: "📚" },
    { title: "Pumping & Return-to-Work", description: "Guidance on pumping strategies and maintaining supply when returning to work", icon: "🍼" }
  ],
  he: [
    { title: "ייעוצים אישיים", description: "תמיכה מותאמת ליניקה, תנוחות ובעיות ייצור חלב", icon: "🤱" },
    { title: "פגישות וידאו", description: "ייעוצים מקוונים נוחים מהנוחיות של הבית שלך", icon: "💻" },
    { title: "הכנה להנקה", description: "הכנה למסע הנקה מוצלח לפני שהתינוק מגיע", icon: "📚" },
    { title: "חליבה וחזרה לעבודה", description: "הכוונה לאסטרטגיות חליבה ושמירה על ייצור בחזרה לעבודה", icon: "🍼" }
  ]
}

const faqs = {
  en: [
    { question: "How long should I breastfeed?", answer: "The World Health Organization recommends exclusive breastfeeding for the first 6 months, with continued breastfeeding up to 2 years or beyond. Every family is different - you decide what works for you." },
    { question: "What if my baby won't latch?", answer: "Latching difficulties are common and often temporary. We'll work together to find the right position and technique for you and your baby. Patience and practice make all the difference." },
    { question: "How do I know if my baby is getting enough milk?", answer: "Look for wet diapers (6+ per day after day 4), steady weight gain after initial loss, and your baby seems satisfied after feeds. I'm happy to help you assess this." },
    { question: "Can I breastfeed if I return to work?", answer: "Absolutely! With proper pumping planning and workplace support, many mothers successfully continue breastfeeding after returning to work. Let's create a plan that works for you." },
    { question: "What if I have pain while breastfeeding?", answer: "Pain isn't normal. It often indicates a latch issue or other solvable problem. Please reach out - I can help identify the cause and find relief." },
    { question: "Do I need to wean if I get sick?", answer: "Most illnesses don't require weaning. In fact, continuing to breastfeed often protects your baby. Just stay hydrated, rest, and consult your healthcare provider if needed." }
  ],
  he: [
    { question: "כמה זמן צריך להניק?", answer: "ארגון הבריאות העולמי ממליץ על הנקה בלעדית בחודשים הראשונים, עם המשך הנקה עד גיל שנתיים ומעלה. כל משפחה שונה - את מחליטה מה מתאים לך." },
    { question: "מה אם התינוק לא יונק?", answer: "קשיי יניקה הם נפוצים ולעיתים קרובות זמניים. נעבוד יחד כדי למצוא את התנוחה והטכניקה הנכונות. סבלנות ותרגול עושים את ההבדל." },
    { question: "איך אני יודעת שהתינוק מקבל מספיק חלב?", answer: "חפשי חיתולים רטובים (6+ ביום אחרי יום 4), עלייה יציבה במשקל אחרי הירידה הראשונית, והתינוק נראה שבע אחרי ההנקה. אשמח לעזור לך להעריך את זה." },
    { question: "אפשר להניק אם אני חוזרת לעבודה?", answer: "בהחלט! עם תכנון חליבה נכון ותמיכה במקום העבודה, אמהות רבות ממשיכות להניק בהצלחה אחרי החזרה לעבודה. בואי ניצור תוכנית שמתאימה לך." },
    { question: "מה אם יש לי כאב בזמן הנקה?", answer: "כאב אינו נורמלי. לעיתים קרובות זה מעיד על בעיית יניקה או בעיה אחרת שניתן לפתור. אנא פני - אוכל לעזור לזהות את הסיבה ולמצוא הקלה." },
    { question: "צריך לגמול אם אני חולה?", answer: "רוב המחלות לא דורשות גמילה. למעשה, המשך הנקה לעיתים קרובות מגן על התינוק שלך. פשוט שתי הרבה מים, נוחי, והתייעצי עם הרופא אם צריך." }
  ]
}

const testimonials = {
  en: [
    { quote: "Esther helped me overcome my biggest challenges with patience and gentle guidance. I finally feel confident in my breastfeeding journey.", name: "Sarah M." },
    { quote: "The virtual sessions were a lifesaver. From the comfort of my home, I got the support I needed to establish a good latch.", name: "Rachel T." },
    { quote: "Gentle, evidence-based support that made all the difference. I recommend Esther to every new mom I know.", name: "Dana K." }
  ],
  he: [
    { quote: "אסתר עזרה לי להתגבר על האתגרים הגדולים שלי בסבלנות והכוונה עדינה. לבסוף אני מרגישה ביטחון במסע ההנקה שלי.", name: "שרה מ." },
    { quote: "הפגישות בוידאו היו מ спаса חיים. מהנוחיות של הבית שלי קיבלתי את התמיכה שהייתי צריכה כדי לבסס יניקה טובה.", name: "רחל ת." },
    { quote: "תמיכה עדינה ומבוססת ראיות שעשתה את כל ההבדל. אני ממליצה על אסתר לכל אמא חדשה שאני מכירה.", name: "דנה ק." }
  ]
}

const shuffleArray = (array) => {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

function App() {
  const [lang, setLang] = useState('en')
  const [displayedMyths, setDisplayedMyths] = useState([])
  const [displayedTips, setDisplayedTips] = useState([])
  const [currentTipIndex, setCurrentTipIndex] = useState(0)
  const t = translations[lang]

  useEffect(() => {
    setDisplayedMyths(shuffleArray(myths[lang]))
    setDisplayedTips(shuffleArray(tips[lang]))
  }, [lang])

  useEffect(() => {
    if (displayedTips.length === 0) return
    const interval = setInterval(() => {
      setCurrentTipIndex((prev) => (prev + 1) % displayedTips.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [displayedTips.length])

  const whatsappLink = `https://wa.me/972549171033`
  const isRTL = lang === 'he'

  return (
    <div className="min-h-screen bg-cream" dir={isRTL ? 'rtl' : 'ltr'}>
      <header className="py-6 px-4 flex justify-between items-center max-w-6xl mx-auto">
        <h1 className="text-2xl font-heading text-charcoal">{t.name}</h1>
        <button
          onClick={() => setLang(lang === 'en' ? 'he' : 'en')}
          className="bg-linen text-charcoal px-4 py-2 rounded-full font-semibold hover:bg-peach hover:text-white transition-colors"
        >
          {t.lang}
        </button>
      </header>

      <section className="py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <img 
            src="https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=800&h=500&fit=crop" 
            alt="Mother breastfeeding her baby" 
            className="w-full h-72 md:h-96 object-cover rounded-2xl mb-8 shadow-lg"
          />
          <p className="text-peach font-semibold mb-2">{t.title}</p>
          <h2 className="text-4xl md:text-5xl font-heading text-charcoal mb-4 max-w-3xl mx-auto">
            {t.heroTitle}
          </h2>
          <p className="text-xl text-warm-gray mb-8 max-w-2xl mx-auto">
            {t.heroSubtitle}
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-peach hover:bg-peach-dark text-white font-semibold py-4 px-8 rounded-full transition-colors duration-300"
          >
            {t.cta}
          </a>
        </div>
      </section>

      <div className="h-16 bg-gradient-to-b from-cream to-linen"></div>

      <section className="py-16 px-4 bg-linen">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-heading text-charcoal text-center mb-8">
            {t.aboutTitle}
          </h3>
          <div className={`grid md:grid-cols-2 gap-8 items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1544126592-807ade215a0b?w=600&h=500&fit=crop" 
                alt="Mother breastfeeding her newborn" 
                className="w-full h-72 object-cover rounded-xl shadow-md"
              />
            </div>
            <div className="text-warm-gray">
              <p className="mb-4">{t.aboutText1}</p>
              <p className="mb-4">{t.aboutText2}</p>
              <p>{t.aboutText3}</p>
            </div>
          </div>
        </div>
      </section>

      <div className="h-16 bg-gradient-to-b from-linen to-cream"></div>

      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-heading text-charcoal text-center mb-4">
            {t.servicesTitle}
          </h3>
          <p className="text-center text-warm-gray mb-12 max-w-2xl mx-auto">
            {t.servicesSubtitle}
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {services[lang].map((service, index) => (
              <div key={index} className="bg-linen p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <span className="text-4xl mb-4 block">{service.icon}</span>
                <h4 className="text-xl font-heading text-charcoal mb-2">{service.title}</h4>
                <p className="text-warm-gray">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-linen">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-heading text-charcoal text-center mb-12">
            {t.mythsTitle}
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {displayedMyths.map((item, index) => (
              <div key={index} className="bg-cream p-6 rounded-xl shadow-sm">
                <p className="font-semibold text-peach-dark mb-2">{item.myth}</p>
                <p className="text-sage font-medium">{item.fact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-heading text-charcoal mb-8">
            {t.tipsTitle}
          </h3>
          <div className="bg-linen rounded-xl p-8 min-h-[120px] flex items-center justify-center">
            <p className="text-xl text-charcoal animate-fade-in">
              {displayedTips[currentTipIndex]}
            </p>
          </div>
          <div className="flex justify-center gap-2 mt-4">
            {displayedTips.map((_, index) => (
              <span
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentTipIndex ? 'bg-peach' : 'bg-sage/30'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-linen">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-heading text-charcoal text-center mb-4">
            {t.faqTitle}
          </h3>
          <p className="text-center text-warm-gray mb-12 max-w-2xl mx-auto">
            {t.faqSubtitle}
          </p>
          <div className="space-y-4">
            {faqs[lang].map((faq, index) => (
              <div key={index} className="bg-cream rounded-xl p-6 shadow-sm">
                <h4 className="text-lg font-heading text-charcoal mb-2">{faq.question}</h4>
                <p className="text-warm-gray">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-heading text-charcoal text-center mb-12">
            {t.testimonialsTitle}
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials[lang].map((testimonial, index) => (
              <div key={index} className="bg-linen p-8 rounded-xl shadow-sm">
                <p className="text-warm-gray italic mb-4">"{testimonial.quote}"</p>
                <p className="text-charcoal font-semibold">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-olive text-cream text-center">
        <h3 className="text-3xl font-heading mb-4">{t.contactTitle}</h3>
        <p className="text-lg mb-8 opacity-90 max-w-xl mx-auto">
          {t.contactText}
        </p>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-cream text-olive font-semibold py-4 px-8 rounded-full hover:bg-peach transition-colors duration-300"
        >
          {t.contactCta}
        </a>
      </section>

      <footer className="py-8 px-4 text-center text-warm-gray bg-linen">
        <p className="font-heading text-lg">{t.footerTitle}</p>
        <p className="text-sm mt-1">{t.footerSubtitle}</p>
        <p className="text-sm mt-4">{t.rights}</p>
      </footer>
    </div>
  )
}

export default App
