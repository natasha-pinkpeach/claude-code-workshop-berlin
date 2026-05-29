// ────────────────────────────────────────────────────────────────
// EDIT THIS FILE TO PERSONALIZE YOUR LANDING PAGE
// Almost every text change you'll want to make lives here.
// You don't need to touch the components — they read from this file.
// ────────────────────────────────────────────────────────────────

export const business = {
  name: "Hartmann Coffee Roasters",
  shortName: "Hartmann",
  tagline: "Small-batch coffee, roasted in Kreuzberg.",
};

export const nav = {
  links: [
    { label: "Services", href: "#services" },
    { label: "How it works", href: "#how" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],
  ctaLabel: "Order beans",
  ctaHref: "#contact",
};

export const hero = {
  eyebrow: "Berlin · since 2018",
  heading: "Coffee that tastes like someone made a choice.",
  subheading:
    "We source single-origin beans from farms we've actually visited, roast them in small batches at our Kreuzberg studio, and deliver them to cafés and homes across Germany.",
  ctaPrimary: { label: "Order beans", href: "#contact" },
  ctaSecondary: { label: "See our services", href: "#services" },
};

export const services = {
  heading: "What we do",
  intro:
    "Three things, done seriously.",
  items: [
    {
      title: "Wholesale roasting",
      summary:
        "Custom roast profiles for cafés and restaurants. We work with 23 venues across Berlin, Hamburg, and Munich. Weekly fresh delivery, transparent pricing.",
    },
    {
      title: "Direct-to-home subscriptions",
      summary:
        "Choose your beans, your frequency, and your grind. We ship within 48 hours of roasting. Pause or cancel anytime, no friction.",
    },
    {
      title: "Barista training",
      summary:
        "Two-day intensive workshops for new café staff. Covers extraction, milk technique, and how to taste. Held in our Kreuzberg studio one Saturday a month.",
    },
  ],
};

export const howItWorks = {
  heading: "How it works",
  steps: [
    {
      title: "Tell us what you like",
      summary:
        "Bright and fruity? Deep and chocolatey? Send us a message or take our 60-second taste quiz.",
    },
    {
      title: "We send a tasting flight",
      summary:
        "Three 100g bags, each from a different origin. €18 including shipping. No subscription required.",
    },
    {
      title: "We dial in your favorite",
      summary:
        "Tell us which you preferred and we'll send 250g or 1kg bags of that one, roasted to order.",
    },
  ],
};

export const benefits = {
  heading: "Why us, honestly",
  items: [
    {
      title: "We taste everything we send",
      summary:
        "Every batch is cupped before it leaves the roastery. If we wouldn't drink it, you don't get it.",
    },
    {
      title: "We know our farmers",
      summary:
        "We work directly with seven farms across Ethiopia, Colombia, and Honduras. Two of them we visit in person each year.",
    },
    {
      title: "We deliver fast or it's free",
      summary:
        "Beans ship within 48 hours of roasting. If your order is late, we refund the shipping. We haven't had to do that in 14 months.",
    },
  ],
};

export const testimonials = {
  heading: "What our customers say",
  quotes: [
    {
      text:
        "We switched to Hartmann two years ago and our regulars notice. The roasts are consistent and Andre actually visits the café to taste with us. That's not normal.",
      author: "Lina Brückner",
      role: "Owner, Café Erna",
    },
    {
      text:
        "I tried four roasters before settling on these guys. The Ethiopian Yirgacheffe they sent in March is the best coffee I've made at home.",
      author: "Tomás Reiter",
      role: "Home subscriber, Hamburg",
    },
  ],
};

export const faq = {
  heading: "Common questions",
  items: [
    {
      q: "Do you ship outside Germany?",
      a: "Yes — we ship across the EU. Delivery takes 3–5 business days. Shipping costs vary by country.",
    },
    {
      q: "How fresh are the beans when they arrive?",
      a: "Roasted within 48 hours of shipping. We recommend brewing them within 6 weeks of the roast date printed on the bag.",
    },
    {
      q: "Can I pause my subscription?",
      a: "Anytime. Log in, pause as long as you want, restart when you're ready. No questions asked.",
    },
    {
      q: "Do you do training for individuals?",
      a: "Our group workshops are for professional baristas, but we offer one-on-one sessions on request. Email us and we'll work out a date.",
    },
  ],
};

export const contact = {
  heading: "Get in touch",
  body:
    "Wholesale questions, subscriptions, training enquiries — drop us a line. We reply within one business day.",
  email: "hello@hartmann-coffee.example",
  phone: "+49 30 1234 5678",
  hours: "Mon–Fri · 09:00 — 17:00 CET",
  address: "Oranienstraße 42, 10999 Berlin",
};

export const meta = {
  title: "Hartmann Coffee Roasters — Small-batch coffee, Kreuzberg",
  description:
    "Single-origin beans, custom roasts, and barista training in Berlin.",
};
