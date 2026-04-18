import { useState, useEffect, useRef } from 'react'

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
    blogTitle: "Blog",
    blogSubtitle: "Tips, guides, and insights for your breastfeeding journey",
    blogComingSoon: "More articles coming soon!",
    bookingTitle: "Book a Consultation",
    bookingSubtitle: "Choose a service and let's find a time that works for you",
    selectService: "Select a service",
    yourName: "Your Name",
    yourPhone: "Your Phone Number",
    preferredTime: "Preferred time",
    morning: "Morning (9AM-12PM)",
    afternoon: "Afternoon (12PM-5PM)",
    evening: "Evening (5PM-8PM)",
    anyTime: "Any time",
    additionalNotes: "Additional notes (optional)",
    bookViaWhatsapp: "Book via WhatsApp",
    contactTitle: "Ready to Connect?",
    contactText: "I'm here to support you on your breastfeeding journey. Whether you have questions or just need someone to talk to, don't hesitate to reach out.",
    contactCta: "Message Me on WhatsApp",
    footerTitle: "Esther Edri",
    footerSubtitle: "IBCLC Certified Breastfeeding Consultant",
    rights: "© 2026 All rights reserved",
    lang: "עברית",
    skipLink: "Skip to main content",
    langToggleLabel: "Switch to Hebrew",
    whatsappAriaLabel: "Contact via WhatsApp",
    themeLight: "Light mode",
    themeDark: "Dark mode",
    accessibilityMenu: "Accessibility options",
    fontSizeNormal: "Normal",
    fontSizeLarge: "Large",
    fontSizeXLarge: "Extra Large",
    highContrast: "High contrast",
    reduceMotion: "Reduce motion",
    resetA11y: "Reset to default",
    close: "Close"
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
    blogTitle: "בלוג",
    blogSubtitle: "טיפים, מדריכים ותובנות למסע ההנקה שלך",
    blogComingSoon: "מאמרים נוספים בקרוב!",
    bookingTitle: "קביעת ייעוץ",
    bookingSubtitle: "בחרו שירות ונמצא זמן שמתאים לכן",
    selectService: "בחרו שירות",
    yourName: "השם שלך",
    yourPhone: "מספר הטלפון",
    preferredTime: "הזמן המועדף",
    morning: "בוקר (9:00-12:00)",
    afternoon: "צהריים (12:00-17:00)",
    evening: "ערב (17:00-20:00)",
    anyTime: "כל זמן",
    additionalNotes: "הערות נוספות (אופציונלי)",
    bookViaWhatsapp: "קבעו דרך וואטסאפ",
    contactTitle: "מוכנים להתחבר?",
    contactText: "אני כאן לתמוך בך במסע ההנקה שלך. בין אם יש לך שאלות או שאת פשוט צריכה מישהו לדבר איתו, אל תהססי לפנות.",
    contactCta: "שלחי לי הודעה בוואטסאפ",
    footerTitle: "אסתר אדרי",
    footerSubtitle: "יועצת הנקה מוסמכת IBCLC",
    rights: "© 2026 כל הזכויות שמורות",
    lang: "English",
    skipLink: "דלג לתוכן הראשי",
    langToggleLabel: "החלף לאנגלית",
    whatsappAriaLabel: "צרי קשר בוואטסאפ",
    themeLight: "מצב בהיר",
    themeDark: "מצב כהה",
    accessibilityMenu: "אפשרויות נגישות",
    fontSizeNormal: "רגיל",
    fontSizeLarge: "גדול",
    fontSizeXLarge: "גדול מאוד",
    highContrast: "ניגודיות גבוהה",
    reduceMotion: "הפחתת תנועה",
    resetA11y: "איפוס לברירת מחדל",
    close: "סגור"
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
    "הנקה בלילה היא נורמלית ועוזרת לבסס ייצור",
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
    { name: "Sarah M.", photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face", quote: "Esther helped me overcome my biggest challenges with patience and gentle guidance. I finally feel confident in my breastfeeding journey.", babyAge: "First-time mom, baby 3 months" },
    { name: "Rachel T.", photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face", quote: "The virtual sessions were a lifesaver. From the comfort of my home, I got the support I needed to establish a good latch.", babyAge: "Baby 6 weeks" },
    { name: "Dana K.", photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face", quote: "Gentle, evidence-based support that made all the difference. I recommend Esther to every new mom I know.", babyAge: "Mom of two, baby 4 months" },
    { name: "Your Name", photo: "https://images.unsplash.com/photo-1487412720507-e7ab37617c45?w=200&h=200&fit=crop&crop=face", quote: "Your testimonial could be here! Share your experience with others.", babyAge: "Your baby's age" }
  ],
  he: [
    { name: "שרה מ.", photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face", quote: "אסתר עזרה לי להתגבר על האתגרים הגדולים שלי בסבלנות והכוונה עדינה. לבסוף אני מרגישה ביטחון במסע ההנקה שלי.", babyAge: "אמא לראשונה, תינוקת 3 חודשים" },
    { name: "רחל ת.", photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face", quote: "הפגישות בוידאו היו מ спаса חיים. מהנוחיות של הבית שלי קיבלתי את התמיכה שהייתי צריכה כדי לבסס יניקה טובה.", babyAge: "תינוקת 6 שבועות" },
    { name: "דנה ק.", photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face", quote: "תמיכה עדינה ומבוססת ראיות שעשתה את כל ההבדל. אני ממליצה על אסתר לכל אמא חדשה שאני מכירה.", babyAge: "אמא לשניים, תינוקת 4 חודשים" },
    { name: "השם שלך", photo: "https://images.unsplash.com/photo-1487412720507-e7ab37617c45?w=200&h=200&fit=crop&crop=face", quote: "ההמלצה שלך יכולה להיות כאן! שתפי את החוויה שלך עם אחרים.", babyAge: "גיל התינוק שלך" }
  ]
}

const blogPosts = {
  en: [
    { title: "Getting Started with Breastfeeding", excerpt: "Everything you need to know to begin your breastfeeding journey with confidence.", category: "Basics", readTime: "5 min" },
    { title: "Latch 101: How to Get a Good Latch", excerpt: "The foundation of successful breastfeeding starts with a good latch.", category: "Basics", readTime: "7 min" },
    { title: "Understanding Baby's Hunger Cues", excerpt: "Learn to recognize when your baby is ready to eat.", category: "Basics", readTime: "4 min" },
    { title: "Common Breastfeeding Challenges", excerpt: "Navigating the hurdles every new breastfeeding parent faces.", category: "Challenges", readTime: "8 min" },
    { title: "Pumping 101: Building Your Stash", excerpt: "Tips for effective pumping and building a milk supply.", category: "Pumping", readTime: "6 min" }
  ],
  he: [
    { title: "התחלת ההנקה", excerpt: "כל מה שאת צריכה לדעת כדי להתחיל את מסע ההנקה שלך בביטחון.", category: "בסיס", readTime: "5 דקות" },
    { title: "יניקה נכונה", excerpt: "הבסיס להנקה מוצלחת מתחיל ביניקה נכונה.", category: "בסיס", readTime: "7 דקות" },
    { title: "סימני רעב אצל התינוק", excerpt: "למדי לזהות מתי התינוק שלך מוכן לאכול.", category: "בסיס", readTime: "4 דקות" },
    { title: "אתגרים נפוצים בהנקה", excerpt: "התמודדות עם המכשולות שכל הורה חדש מתמודד איתם.", category: "אתגרים", readTime: "8 דקות" },
    { title: "חליבה 101", excerpt: "טיפים לחליבה יעילה ובניית מאגר חלב.", category: "חליבה", readTime: "6 דקות" }
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
  const [theme, setTheme] = useState('light')
  const [showA11yMenu, setShowA11yMenu] = useState(false)
  const [a11ySettings, setA11ySettings] = useState({
    fontSize: 'normal',
    highContrast: false,
    reduceMotion: false
  })
  const [displayedMyths, setDisplayedMyths] = useState([])
  const [displayedTips, setDisplayedTips] = useState([])
  const [currentTipIndex, setCurrentTipIndex] = useState(0)
  const [bookingForm, setBookingForm] = useState({ name: '', phone: '', service: '', time: '', notes: '' })
  const t = translations[lang]
  const menuRef = useRef(null)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setTheme(savedTheme)
      document.documentElement.setAttribute('data-theme', savedTheme)
    }
    
    const savedA11y = localStorage.getItem('a11ySettings')
    if (savedA11y) {
      const parsed = JSON.parse(savedA11y)
      setA11ySettings(parsed)
      applyA11ySettings(parsed)
    }
  }, [])

  const applyA11ySettings = (settings) => {
    const root = document.documentElement
    root.style.fontSize = settings.fontSize === 'large' ? '112%' : settings.fontSize === 'x-large' ? '120%' : '100%'
    root.setAttribute('data-high-contrast', settings.highContrast)
    if (settings.reduceMotion) {
      root.style.setProperty('--animation-duration', '0.01ms')
    } else {
      root.style.setProperty('--animation-duration', '0.5s')
    }
  }

  useEffect(() => {
    setDisplayedMyths(shuffleArray(myths[lang]))
    setDisplayedTips(shuffleArray(tips[lang]))
  }, [lang])

  useEffect(() => {
    if (displayedTips.length === 0) return
    const interval = setInterval(() => {
      setCurrentTipIndex((prev) => (prev + 1) % displayedTips.length)
    }, a11ySettings.reduceMotion ? 0 : 4000)
    return () => clearInterval(interval)
  }, [displayedTips.length, a11ySettings.reduceMotion])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowA11yMenu(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
  }

  const updateA11ySetting = (key, value) => {
    const newSettings = { ...a11ySettings, [key]: value }
    setA11ySettings(newSettings)
    localStorage.setItem('a11ySettings', JSON.stringify(newSettings))
    applyA11ySettings(newSettings)
  }

  const resetA11y = () => {
    const defaultSettings = { fontSize: 'normal', highContrast: false, reduceMotion: false }
    setA11ySettings(defaultSettings)
    localStorage.setItem('a11ySettings', JSON.stringify(defaultSettings))
    applyA11ySettings(defaultSettings)
  }

  const handleBooking = (e) => {
    e.preventDefault()
    const serviceNames = { en: { initial: "Initial Consultation", followup: "Follow-up Session", prenatal: "Prenatal Preparation", pumping: "Pumping Consultation" }, he: { initial: "ייעוץ ראשוני", followup: "מפגש מעקב", prenatal: "הכנה להנקה", pumping: "ייעוץ חליבה" }}
    const timeLabels = { en: { morning: "Morning", afternoon: "Afternoon", evening: "Evening", any: "Any time" }, he: { morning: "בוקר", afternoon: "צהריים", evening: "ערב", any: "כל זמן" }}
    
    const message = lang === 'en' 
      ? `Hi Esther! I'd like to book a consultation.\n\nName: ${bookingForm.name}\nPhone: ${bookingForm.phone}\nService: ${serviceNames.en[bookingForm.service]}\nPreferred Time: ${timeLabels.en[bookingForm.time]}\nNotes: ${bookingForm.notes || 'None'}`
      : `היי אסתר! אני רוצה לקבוע ייעוץ.\n\nשם: ${bookingForm.name}\nטלפון: ${bookingForm.phone}\nשירות: ${serviceNames.he[bookingForm.service]}\nזמן מועדף: ${timeLabels.he[bookingForm.time]}\nהערות: ${bookingForm.notes || 'אין'}`
    
    window.open(`https://wa.me/972549171033?text=${encodeURIComponent(message)}`)
    setBookingForm({ name: '', phone: '', service: '', time: '', notes: '' })
  }

  const whatsappLink = `https://wa.me/972549171033`
  const isRTL = lang === 'he'
  const bgClass = theme === 'dark' ? 'bg-dark-cream' : 'bg-cream'
  const sectionBgClass = theme === 'dark' ? 'bg-dark-linen' : 'bg-linen'

  return (
    <div 
      className={`min-h-screen ${bgClass} ${a11ySettings.highContrast ? 'high-contrast' : ''}`} 
      dir={isRTL ? 'rtl' : 'ltr'} 
      lang={lang}
      style={a11ySettings.reduceMotion ? { '--animation-duration': '0.01ms' } : {}}
    >
      <a href="#main-content" className="skip-link">{t.skipLink}</a>

      <header className="py-4 px-4 flex justify-between items-center max-w-6xl mx-auto" role="banner">
        <h1 className={`text-2xl font-heading ${theme === 'dark' ? 'text-dark-charcoal' : 'text-charcoal'}`}>{t.name}</h1>
        <div className="flex items-center gap-3">
          <button onClick={toggleTheme} className="p-3 rounded-full bg-linen hover:bg-peach transition-colors" aria-label={theme === 'light' ? t.themeDark : t.themeLight}>
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
          <button onClick={() => setLang(lang === 'en' ? 'he' : 'en')} className="bg-linen text-charcoal px-4 py-2 rounded-full font-semibold hover:bg-peach hover:text-white transition-colors" aria-label={t.langToggleLabel}>
            {t.lang}
          </button>
          <div className="relative" ref={menuRef}>
            <button onClick={() => setShowA11yMenu(!showA11yMenu)} className="p-3 rounded-full bg-linen hover:bg-peach transition-colors" aria-label={t.accessibilityMenu} aria-expanded={showA11yMenu}>
              ♿
            </button>
            {showA11yMenu && (
              <div className="absolute right-0 mt-2 w-64 bg-cream rounded-xl shadow-lg p-4 z-50 border border-linen" role="menu">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-heading text-charcoal">{t.accessibilityMenu}</h3>
                  <button onClick={() => setShowA11yMenu(false)} className="text-warm-gray hover:text-charcoal">✕</button>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-warm-gray mb-2">Font Size</label>
                    <div className="flex gap-2">
                      {['normal', 'large', 'x-large'].map((size) => (
                        <button key={size} onClick={() => updateA11ySetting('fontSize', size)} className={`px-3 py-2 rounded-lg text-sm ${a11ySettings.fontSize === size ? 'bg-peach text-white' : 'bg-linen text-charcoal'}`}>
                          {size === 'normal' ? t.fontSizeNormal : size === 'large' ? t.fontSizeLarge : t.fontSizeXLarge}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <label className="text-charcoal">{t.highContrast}</label>
                    <button onClick={() => updateA11ySetting('highContrast', !a11ySettings.highContrast)} className={`w-12 h-6 rounded-full transition-colors ${a11ySettings.highContrast ? 'bg-peach' : 'bg-sage'}`} role="switch" aria-checked={a11ySettings.highContrast}>
                      <span className={`block w-5 h-5 bg-white rounded-full shadow transform transition-transform ${a11ySettings.highContrast ? 'translate-x-6' : 'translate-x-0.5'}`} />
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <label className="text-charcoal">{t.reduceMotion}</label>
                    <button onClick={() => updateA11ySetting('reduceMotion', !a11ySettings.reduceMotion)} className={`w-12 h-6 rounded-full transition-colors ${a11ySettings.reduceMotion ? 'bg-peach' : 'bg-sage'}`} role="switch" aria-checked={a11ySettings.reduceMotion}>
                      <span className={`block w-5 h-5 bg-white rounded-full shadow transform transition-transform ${a11ySettings.reduceMotion ? 'translate-x-6' : 'translate-x-0.5'}`} />
                    </button>
                  </div>
                  <button onClick={resetA11y} className="w-full py-2 bg-linen text-charcoal rounded-lg hover:bg-peach hover:text-white transition-colors">{t.resetA11y}</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      <main id="main-content">
        <section className="py-16 px-4 text-center" aria-labelledby="hero-title">
          <div className="max-w-4xl mx-auto">
            <img src="https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=800&h=500&fit=crop" alt="Mother breastfeeding her baby" className="w-full h-72 md:h-96 object-cover rounded-2xl mb-8 shadow-lg" />
            <p className="text-peach font-semibold mb-2">{t.title}</p>
            <h2 id="hero-title" className={`text-4xl md:text-5xl font-heading ${theme === 'dark' ? 'text-dark-charcoal' : 'text-charcoal'} mb-4 max-w-3xl mx-auto`}>{t.heroTitle}</h2>
            <p className={`text-xl ${theme === 'dark' ? 'text-dark-warm-gray' : 'text-warm-gray'} mb-8 max-w-2xl mx-auto`}>{t.heroSubtitle}</p>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-block bg-peach hover:bg-peach-dark text-white font-semibold py-4 px-8 rounded-full transition-colors duration-300" aria-label={t.whatsappAriaLabel}>{t.cta}</a>
          </div>
        </section>

        <div className="h-16 bg-gradient-to-b from-cream to-linen" aria-hidden="true"></div>

        <section className={`py-16 px-4 ${sectionBgClass}`} aria-labelledby="about-title">
          <div className="max-w-4xl mx-auto">
            <h3 id="about-title" className={`text-3xl font-heading ${theme === 'dark' ? 'text-dark-charcoal' : 'text-charcoal'} text-center mb-8`}>{t.aboutTitle}</h3>
            <div className={`grid md:grid-cols-2 gap-8 items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
              <div>
                <img src="https://images.unsplash.com/photo-1544126592-807ade215a0b?w=600&h=500&fit=crop" alt="Mother breastfeeding newborn" className="w-full h-72 object-cover rounded-xl shadow-md" />
              </div>
              <div className={theme === 'dark' ? 'text-dark-warm-gray' : 'text-warm-gray'}>
                <p className="mb-4">{t.aboutText1}</p>
                <p className="mb-4">{t.aboutText2}</p>
                <p>{t.aboutText3}</p>
              </div>
            </div>
          </div>
        </section>

        <div className="h-16 bg-gradient-to-b from-linen to-cream" aria-hidden="true"></div>

        <section className="py-16 px-4" aria-labelledby="services-title">
          <div className="max-w-5xl mx-auto">
            <h3 id="services-title" className={`text-3xl font-heading ${theme === 'dark' ? 'text-dark-charcoal' : 'text-charcoal'} text-center mb-4`}>{t.servicesTitle}</h3>
            <p className={`text-center ${theme === 'dark' ? 'text-dark-warm-gray' : 'text-warm-gray'} mb-12 max-w-2xl mx-auto`}>{t.servicesSubtitle}</p>
            <div className="grid md:grid-cols-2 gap-6" role="list">
              {services[lang].map((service, index) => (
                <div key={index} className="bg-linen p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow" role="listitem">
                  <span className="text-4xl mb-4 block" aria-hidden="true">{service.icon}</span>
                  <h4 className={`text-xl font-heading ${theme === 'dark' ? 'text-dark-charcoal' : 'text-charcoal'} mb-2`}>{service.title}</h4>
                  <p className={theme === 'dark' ? 'text-dark-warm-gray' : 'text-warm-gray'}>{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={`py-16 px-4 ${sectionBgClass}`} aria-labelledby="booking-title">
          <div className="max-w-2xl mx-auto">
            <h3 id="booking-title" className={`text-3xl font-heading ${theme === 'dark' ? 'text-dark-charcoal' : 'text-charcoal'} text-center mb-4`}>{t.bookingTitle}</h3>
            <p className={`text-center ${theme === 'dark' ? 'text-dark-warm-gray' : 'text-warm-gray'} mb-8`}>{t.bookingSubtitle}</p>
            <form onSubmit={handleBooking} className="space-y-4 bg-linen p-8 rounded-xl">
              <div>
                <label className="block text-charcoal mb-2">{t.selectService}</label>
                <select value={bookingForm.service} onChange={(e) => setBookingForm({...bookingForm, service: e.target.value})} className="w-full p-3 rounded-lg bg-cream text-charcoal border border-sage" required>
                  <option value="">{t.selectService}</option>
                  <option value="initial">{services[lang][0].title}</option>
                  <option value="followup">{services[lang][1].title}</option>
                  <option value="prenatal">{services[lang][2].title}</option>
                  <option value="pumping">{services[lang][3].title}</option>
                </select>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-charcoal mb-2">{t.yourName}</label>
                  <input type="text" value={bookingForm.name} onChange={(e) => setBookingForm({...bookingForm, name: e.target.value})} className="w-full p-3 rounded-lg bg-cream text-charcoal border border-sage" required />
                </div>
                <div>
                  <label className="block text-charcoal mb-2">{t.yourPhone}</label>
                  <input type="tel" value={bookingForm.phone} onChange={(e) => setBookingForm({...bookingForm, phone: e.target.value})} className="w-full p-3 rounded-lg bg-cream text-charcoal border border-sage" required />
                </div>
              </div>
              <div>
                <label className="block text-charcoal mb-2">{t.preferredTime}</label>
                <select value={bookingForm.time} onChange={(e) => setBookingForm({...bookingForm, time: e.target.value})} className="w-full p-3 rounded-lg bg-cream text-charcoal border border-sage" required>
                  <option value="">{t.preferredTime}</option>
                  <option value="morning">{t.morning}</option>
                  <option value="afternoon">{t.afternoon}</option>
                  <option value="evening">{t.evening}</option>
                  <option value="any">{t.anyTime}</option>
                </select>
              </div>
              <div>
                <label className="block text-charcoal mb-2">{t.additionalNotes}</label>
                <textarea value={bookingForm.notes} onChange={(e) => setBookingForm({...bookingForm, notes: e.target.value})} className="w-full p-3 rounded-lg bg-cream text-charcoal border border-sage" rows="3"></textarea>
              </div>
              <button type="submit" className="w-full bg-peach hover:bg-peach-dark text-white font-semibold py-4 px-8 rounded-full transition-colors duration-300">{t.bookViaWhatsapp}</button>
            </form>
          </div>
        </section>

        <section className="py-16 px-4" aria-labelledby="myths-title">
          <div className="max-w-4xl mx-auto">
            <h3 id="myths-title" className={`text-3xl font-heading ${theme === 'dark' ? 'text-dark-charcoal' : 'text-charcoal'} text-center mb-12`}>{t.mythsTitle}</h3>
            <div className="grid md:grid-cols-2 gap-6" role="list">
              {displayedMyths.map((item, index) => (
                <div key={index} className="bg-cream p-6 rounded-xl shadow-sm" role="listitem">
                  <p className="font-semibold text-peach-dark mb-2">{item.myth}</p>
                  <p className="text-sage font-medium">{item.fact}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={`py-16 px-4 ${sectionBgClass}`} aria-labelledby="tips-title">
          <div className="max-w-4xl mx-auto text-center">
            <h3 id="tips-title" className={`text-3xl font-heading ${theme === 'dark' ? 'text-dark-charcoal' : 'text-charcoal'} mb-8`}>{t.tipsTitle}</h3>
            <div className="bg-linen rounded-xl p-8 min-h-[120px] flex items-center justify-center" role="status" aria-live="polite" aria-atomic="true">
              <p className={`text-xl ${theme === 'dark' ? 'text-dark-charcoal' : 'text-charcoal'} animate-fade-in`}>{displayedTips[currentTipIndex]}</p>
            </div>
            <div className="flex justify-center gap-2 mt-4" role="tablist" aria-label="Tip navigation">
              {displayedTips.map((_, index) => (
                <span key={index} role="tab" aria-selected={index === currentTipIndex} className={`w-2 h-2 rounded-full transition-colors ${index === currentTipIndex ? 'bg-peach' : 'bg-sage/30'}`} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4" aria-labelledby="blog-title">
          <div className="max-w-5xl mx-auto">
            <h3 id="blog-title" className={`text-3xl font-heading ${theme === 'dark' ? 'text-dark-charcoal' : 'text-charcoal'} text-center mb-4`}>{t.blogTitle}</h3>
            <p className={`text-center ${theme === 'dark' ? 'text-dark-warm-gray' : 'text-warm-gray'} mb-12 max-w-2xl mx-auto`}>{t.blogSubtitle}</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts[lang].map((post, index) => (
                <article key={index} className="bg-linen p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-xs font-semibold text-peach bg-cream px-3 py-1 rounded-full">{post.category}</span>
                  <h4 className={`text-lg font-heading ${theme === 'dark' ? 'text-dark-charcoal' : 'text-charcoal'} mt-3 mb-2`}>{post.title}</h4>
                  <p className={`text-sm ${theme === 'dark' ? 'text-dark-warm-gray' : 'text-warm-gray'} mb-3`}>{post.excerpt}</p>
                  <span className="text-xs text-sage">{post.readTime}</span>
                </article>
              ))}
            </div>
            <p className={`text-center mt-8 ${theme === 'dark' ? 'text-dark-warm-gray' : 'text-warm-gray'}`}>{t.blogComingSoon}</p>
          </div>
        </section>

        <section className={`py-16 px-4 ${sectionBgClass}`} aria-labelledby="faq-title">
          <div className="max-w-4xl mx-auto">
            <h3 id="faq-title" className={`text-3xl font-heading ${theme === 'dark' ? 'text-dark-charcoal' : 'text-charcoal'} text-center mb-4`}>{t.faqTitle}</h3>
            <p className={`text-center ${theme === 'dark' ? 'text-dark-warm-gray' : 'text-warm-gray'} mb-12 max-w-2xl mx-auto`}>{t.faqSubtitle}</p>
            <dl className="space-y-4">
              {faqs[lang].map((faq, index) => (
                <div key={index} className="bg-cream rounded-xl p-6 shadow-sm">
                  <dt className={`text-lg font-heading ${theme === 'dark' ? 'text-dark-charcoal' : 'text-charcoal'} mb-2`}>{faq.question}</dt>
                  <dd className={theme === 'dark' ? 'text-dark-warm-gray' : 'text-warm-gray'}>{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="py-16 px-4" aria-labelledby="testimonials-title">
          <div className="max-w-5xl mx-auto">
            <h3 id="testimonials-title" className={`text-3xl font-heading ${theme === 'dark' ? 'text-dark-charcoal' : 'text-charcoal'} text-center mb-12`}>{t.testimonialsTitle}</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" role="list">
              {testimonials[lang].map((testimonial, index) => (
                <div key={index} className="bg-linen p-6 rounded-xl shadow-sm text-center" role="listitem">
                  <img src={testimonial.photo} alt={testimonial.name} className="w-20 h-20 rounded-full mx-auto mb-4 object-cover" />
                  <p className={`${theme === 'dark' ? 'text-dark-warm-gray' : 'text-warm-gray'} text-sm italic mb-3`}>"{testimonial.quote}"</p>
                  <p className={`font-semibold ${theme === 'dark' ? 'text-dark-charcoal' : 'text-charcoal'}`}>{testimonial.name}</p>
                  <p className="text-xs text-sage mt-1">{testimonial.babyAge}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-olive text-cream text-center" aria-labelledby="contact-title">
          <h3 id="contact-title" className="text-3xl font-heading mb-4">{t.contactTitle}</h3>
          <p className="text-lg mb-8 opacity-90 max-w-xl mx-auto">{t.contactText}</p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-block bg-cream text-olive font-semibold py-4 px-8 rounded-full hover:bg-peach transition-colors duration-300" aria-label={t.whatsappAriaLabel}>{t.contactCta}</a>
        </section>
      </main>

      <footer className={`py-8 px-4 text-center ${theme === 'dark' ? 'text-dark-warm-gray bg-dark-linen' : 'text-warm-gray bg-linen'}`} role="contentinfo">
        <p className="font-heading text-lg">{t.footerTitle}</p>
        <p className="text-sm mt-1">{t.footerSubtitle}</p>
        <p className="text-sm mt-4">{t.rights}</p>
      </footer>
    </div>
  )
}

export default App
