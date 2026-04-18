import { useState, useEffect } from 'react'

const myths = [
  {
    myth: "You must nurse every 2-3 hours",
    fact: "Feed on demand instead. Babies know how much milk they need."
  },
  {
    myth: "Small breasts produce less milk",
    fact: "Breast size doesn't affect milk production. All breasts can make plenty of milk."
  },
  {
    myth: "Some pain is normal",
    fact: "While mild tenderness early on is common, severe pain is not normal and should be addressed."
  },
  {
    myth: "You can't breastfeed while sick",
    fact: "Most illnesses are actually safe and beneficial to continue breastfeeding."
  },
  {
    myth: "Breastfeeding should hurt",
    fact: "It shouldn't be painful. Pain often indicates a latch issue that can be corrected."
  },
  {
    myth: "Formula is equal to breast milk",
    fact: "Breast milk contains unique antibodies and nutrients that formula cannot replicate."
  }
]

const tips = [
  "Stay hydrated - your body needs extra fluids to produce milk",
  "Find positions that work for you and your baby",
  "Skin-to-skin contact boosts milk production and bonding",
  "Don't compare your journey to others - every baby is different",
  "Rest is just as important as nutrition for milk supply",
  "Eat nutrient-rich foods to support your body",
  "Ask for help - you don't have to do this alone",
  "Trust your body - it's designed for this",
  "Cluster feeding is normal and temporary",
  "Laid-back positions can make latching easier"
]

const services = [
  {
    title: "One-on-One Consultations",
    description: "Personalized support for latching, positioning, and milk supply concerns",
    icon: "🤱"
  },
  {
    title: "Virtual Sessions",
    description: "Convenient online consultations from the comfort of your home",
    icon: "💻"
  },
  {
    title: "Prenatal Education",
    description: "Preparing for a successful breastfeeding journey before baby arrives",
    icon: "📚"
  },
  {
    title: "Pumping & Return-to-Work",
    description: "Guidance on pumping strategies and maintaining supply when returning to work",
    icon: "🍼"
  }
]

const shuffleArray = (array) => {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

function App() {
  const [displayedMyths, setDisplayedMyths] = useState([])
  const [displayedTips, setDisplayedTips] = useState([])
  const [currentTipIndex, setCurrentTipIndex] = useState(0)

  useEffect(() => {
    setDisplayedMyths(shuffleArray(myths))
    setDisplayedTips(shuffleArray(tips))
  }, [])

  useEffect(() => {
    if (displayedTips.length === 0) return
    const interval = setInterval(() => {
      setCurrentTipIndex((prev) => (prev + 1) % displayedTips.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [displayedTips.length])

  const whatsappLink = `https://wa.me/972549171033`

  return (
    <div className="min-h-screen bg-cream">
      <header className="py-6 px-4 flex justify-center">
        <h1 className="text-2xl font-heading text-charcoal">Esther Edri</h1>
      </header>

      <section className="py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <img 
            src="https://images.unsplash.com/photo-1555244162-803834f70033?w=600&h=400&fit=crop" 
            alt="Mother and baby" 
            className="w-full h-64 md:h-80 object-cover rounded-2xl mb-8 shadow-lg"
          />
          <p className="text-peach font-semibold mb-2">IBCLC Certified Lactation Consultant</p>
          <h2 className="text-4xl md:text-5xl font-heading text-charcoal mb-4 max-w-3xl mx-auto">
            Gentle support for your breastfeeding journey
          </h2>
          <p className="text-xl text-warm-gray mb-8 max-w-2xl mx-auto">
            Evidence-based care that meets you where you are. Every family is welcome here.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-peach hover:bg-peach-dark text-white font-semibold py-4 px-8 rounded-full transition-colors duration-300"
          >
            Let's Connect
          </a>
        </div>
      </section>

      <section className="py-16 px-4 bg-linen">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-heading text-charcoal text-center mb-8">
            About Me
          </h3>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?w=500&h=400&fit=crop" 
                alt="Breastfeeding support" 
                className="w-full h-64 object-cover rounded-xl shadow-md"
              />
            </div>
            <div className="text-warm-gray">
              <p className="mb-4">
                I'm passionate about helping families navigate their unique breastfeeding journey with confidence and joy. With gentle, evidence-based support, I meet you where you are.
              </p>
              <p>
                Whether you're expecting your first baby or facing challenges with your current journey, I'm here to provide the guidance and encouragement you need.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-heading text-charcoal text-center mb-4">
            How Can I Help?
          </h3>
          <p className="text-center text-warm-gray mb-12 max-w-2xl mx-auto">
            Every breastfeeding journey is unique. Here are some of the ways I can support you:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
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
            Let's Clear Some Myths
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
            Tips for Your Breastfeeding Journey
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

      <section className="py-16 px-4 bg-olive text-cream text-center">
        <h3 className="text-3xl font-heading mb-4">Ready to Connect?</h3>
        <p className="text-lg mb-8 opacity-90 max-w-xl mx-auto">
          I'm here to support you on your breastfeeding journey. Whether you have questions or just need someone to talk to, don't hesitate to reach out.
        </p>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-cream text-olive font-semibold py-4 px-8 rounded-full hover:bg-peach transition-colors duration-300"
        >
          Message Me on WhatsApp
        </a>
      </section>

      <footer className="py-8 px-4 text-center text-warm-gray bg-linen">
        <p className="font-heading text-lg">Esther Edri</p>
        <p className="text-sm mt-1">IBCLC Certified Breastfeeding Consultant</p>
        <p className="text-sm mt-4">© 2026 All rights reserved</p>
      </footer>
    </div>
  )
}

export default App
