import { useState, useEffect, useRef } from 'react'

import './App.css'
import './enhancements.css'

import heroImage from './assets/ironcore/optimized/Hero.webp'
import aboutImage from './assets/ironcore/optimized/Dark_gym_interior.webp'

import strengthImage from './assets/ironcore/optimized/Pull_up_image.webp'
import weightImage from './assets/ironcore/optimized/Bicep_curl_image.webp'
import functionalImage from './assets/ironcore/optimized/Woman_with_battle_rope.webp'
import fatlossImage from './assets/ironcore/optimized/Abs_hoodie_image.webp'

import dumbbellsImage from './assets/ironcore/optimized/Dumbbells_closeup_blur.webp'
import machineRackImage from './assets/ironcore/optimized/Black_white_machine_rack.webp'
import equipmentRightImage from './assets/ironcore/optimized/right.webp'

import galleryOne from './assets/ironcore/optimized/Gym_interior.webp'
import galleryTwo from './assets/ironcore/optimized/Warm_dark_gym_interior.webp'

const PHONE = '919871624457'

const wa = (text) =>
  `https://wa.me/${PHONE}?text=${encodeURIComponent(text)}`

const NAV = [
  ['home', 'Home'],
  ['about', 'About'],
  ['programs', 'Programs'],
  ['equipment', 'Equipment'],
  ['plans', 'Membership'],
  ['trainers', 'Trainers'],
  ['gallery', 'Gallery'],
  ['faq', 'FAQ'],
  ['contact', 'Contact'],
]

/* =========================
   Demo-Safe Stats
========================= */

const STATS = [
  {
    n: 4,
    s: '',
    l: 'Training styles',
  },
  {
    n: 3,
    s: '',
    l: 'Membership options',
  },
  {
    n: 3,
    s: '',
    l: 'Demo trainer profiles',
  },
  {
    n: 2,
    s: '',
    l: 'Training sessions daily',
  },
]

const PROGRAMS = [
  [
    'Strength Training',
    'STRENGTH',
    strengthImage,
    'Build power, improve technique, and develop a stronger foundation with structured resistance training.',
    'program-card-large',
  ],
  [
    'Weight Training',
    'MUSCLE',
    weightImage,
    'Focused workouts around progressive resistance, muscle development, and consistent performance.',
    '',
  ],
  [
    'Functional Training',
    'FUNCTIONAL',
    functionalImage,
    'Improve endurance, movement, coordination, and full-body performance through dynamic training.',
    '',
  ],
  [
    'Fat Loss & Conditioning',
    'CONDITIONING',
    fatlossImage,
    'Resistance training, cardio, and conditioning to support better fitness and body-composition goals.',
    'program-card-wide',
  ],
]

const EQUIPMENT = [
  [
    'Dumbbell Zone',
    'FREE WEIGHTS',
    dumbbellsImage,
    'Flexible resistance training for strength, muscle development, and controlled movement.',
    'equipment-card-featured',
  ],
  [
    'Strength Stations',
    'STRENGTH',
    machineRackImage,
    'Structured equipment for major muscle groups and progressive resistance training.',
    '',
  ],
  [
    'Training Floor',
    'PERFORMANCE',
    equipmentRightImage,
    'A focused workout space for strength, conditioning, and functional sessions.',
    '',
  ],
]

const PLANS = [
  {
    badge: 'FLEX',
    name: 'Monthly Membership',
    sub: 'Flexible access for short-term goals and regular training.',
    old: '₹X,XXX',
    price: '₹XXX',
    perks: [
      'Gym floor access',
      'Strength & cardio areas',
      'Flexible training routine',
    ],
    cta: 'Get Offer Details',
  },
  {
    badge: 'PROGRESS',
    name: '3-Month Membership',
    sub: 'Designed for consistency, routine building, and measurable progress.',
    old: '₹X,XXX',
    price: '₹X,XXX',
    perks: [
      'Extended gym access',
      'Structured training support',
      'Better value commitment',
    ],
    cta: 'Unlock Current Offer',
    featured: true,
  },
  {
    badge: 'COMMIT',
    name: 'Annual Membership',
    sub: 'A long-term option for members focused on consistent training.',
    old: '₹XX,XXX',
    price: '₹X,XXX',
    perks: [
      'Long-term access',
      'Best membership value',
      'Consistency-focused plan',
    ],
    cta: 'Connect With Us',
  },
]

const TRAINERS = [
  [
    'Kirti Mehta',
    'FUNCTIONAL FITNESS',
    functionalImage,
    'Functional movement, conditioning, mobility, and sustainable training routines.',
    ['Mobility', 'Conditioning', 'Functional'],
    'trainer-card-main',
  ],
  [
    'Kabir Singh',
    'STRENGTH COACH',
    strengthImage,
    'Structured strength training with emphasis on movement quality and technique.',
    ['Strength', 'Technique', 'Performance'],
    '',
  ],
  [
    'Rohan Kapoor',
    'BODY TRANSFORMATION',
    weightImage,
    'Resistance workouts, consistency, muscle development, and body-composition goals.',
    ['Muscle', 'Fat Loss', 'Resistance'],
    '',
  ],
]

const GALLERY = [
  ['Training Floor', galleryOne, 'gallery-item-large'],
  ['Focused Environment', galleryTwo, ''],
  ['Equipment Zone', equipmentRightImage, ''],
  ['Functional Training', functionalImage, 'gallery-item-wide'],
]

const REVIEWS = [
  [
    'A',
    'Demo Member A',
    'Strength Training',
    'The training environment feels focused and motivating. The equipment layout makes workouts easy to follow.',
  ],
  [
    'B',
    'Demo Member B',
    'Functional Fitness',
    'I like the mix of strength, cardio, and guided training. Consistency feels easier here.',
  ],
  [
    'C',
    'Demo Member C',
    'General Fitness',
    'The membership section is clear and contact options are simple. Easy to understand before visiting.',
  ],
]

/* =========================
   Demo-Safe FAQs
========================= */

const FAQS = [
  [
    'Do I need experience to join?',
    'This demo shows how a fitness studio could welcome beginners and explain its onboarding and training options.',
  ],
  [
    'Can I try before I join?',
    'A real gym could use this section to offer trial visits, introductory sessions, or a facility tour before membership.',
  ],
  [
    'What are the gym timings?',
    'The timings shown on this website are sample operating hours created for portfolio demonstration purposes.',
  ],
  [
    'Do you offer personal training?',
    'A real fitness business could use this section to present personal training, guided workouts, and coaching options.',
  ],
]

const MARQUEE = [
  'STRENGTH',
  'CONDITIONING',
  'DISCIPLINE',
  'CONSISTENCY',
  'PROGRESS',
  'FOCUS',
]

/* =========================
   Animated Counter
========================= */

function Counter({ to, suffix }) {
  const ref = useRef(null)
  const [val, setVal] = useState(0)

  useEffect(() => {
    const el = ref.current

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return

        io.disconnect()

        const start = performance.now()

        const tick = (time) => {
          const progress = Math.min(
            (time - start) / 1400,
            1
          )

          setVal(
            Math.round(
              to * (1 - Math.pow(1 - progress, 3))
            )
          )

          if (progress < 1) {
            requestAnimationFrame(tick)
          }
        }

        requestAnimationFrame(tick)
      },
      {
        threshold: 0.4,
      }
    )

    if (el) {
      io.observe(el)
    }

    return () => {
      io.disconnect()
    }
  }, [to])

  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  )
}

/* =========================
   BMI Calculator
========================= */

function BmiCalculator() {
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')

  const heightMetres = parseFloat(height) / 100
  const weightKg = parseFloat(weight)

  const bmi =
    heightMetres > 0 && weightKg > 0
      ? weightKg / (heightMetres * heightMetres)
      : null

  const label =
    bmi === null
      ? ''
      : bmi < 18.5
        ? 'Underweight'
        : bmi < 25
          ? 'Healthy range'
          : bmi < 30
            ? 'Overweight'
            : 'Obese range'

  return (
    <div className="bmi-card reveal">
      <span className="section-label">
        BMI CALCULATOR
      </span>

      <h3>Check your starting point.</h3>

      <div className="bmi-inputs">
        <input
          type="number"
          placeholder="Height (cm)"
          value={height}
          onChange={(event) =>
            setHeight(event.target.value)
          }
          aria-label="Height in cm"
          min="1"
        />

        <input
          type="number"
          placeholder="Weight (kg)"
          value={weight}
          onChange={(event) =>
            setWeight(event.target.value)
          }
          aria-label="Weight in kg"
          min="1"
        />
      </div>

      <div
        className="bmi-result"
        aria-live="polite"
      >
        {bmi ? (
          <>
            <strong>{bmi.toFixed(1)}</strong>
            <span>{label}</span>
          </>
        ) : (
          <span>
            Enter height and weight to see your BMI.
          </span>
        )}
      </div>
    </div>
  )
}

/* =========================
   Main App
========================= */

function App() {
  const [menuOpen, setMenuOpen] =
    useState(false)

  const [progress, setProgress] =
    useState(0)

  const [showTop, setShowTop] =
    useState(false)

  const [openFaq, setOpenFaq] =
    useState(0)

  const [errors, setErrors] =
    useState({})

  const [sent, setSent] =
    useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  /* =========================
     Scroll Progress
  ========================= */

  useEffect(() => {
    const onScroll = () => {
      const max =
        document.documentElement.scrollHeight -
        window.innerHeight

      setProgress(
        max > 0
          ? (window.scrollY / max) * 100
          : 0
      )

      setShowTop(
        window.scrollY > 700
      )
    }

    onScroll()

    window.addEventListener(
      'scroll',
      onScroll,
      {
        passive: true,
      }
    )

    return () => {
      window.removeEventListener(
        'scroll',
        onScroll
      )
    }
  }, [])

  /* =========================
     Reveal Animation
  ========================= */

  useEffect(() => {
    const io =
      new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (
              entry.isIntersecting
            ) {
              entry.target.classList.add(
                'is-visible'
              )

              io.unobserve(
                entry.target
              )
            }
          })
        },
        {
          threshold: 0.12,
        }
      )

    const revealElements =
      document.querySelectorAll(
        '.reveal'
      )

    revealElements.forEach(
      (element) => {
        io.observe(element)
      }
    )

    return () => {
      io.disconnect()
    }
  }, [])

  /* =========================
     Demo Visit Form
  ========================= */

  const handleSubmit = (event) => {
    event.preventDefault()

    const form =
      new FormData(event.target)

    const err = {}

    const name =
      form.get('name')?.trim() || ''

    const phoneRaw =
      form.get('phone') || ''

    const phone =
      phoneRaw
        .replace(/\s/g, '')
        .replace(/^\+91/, '')

    const goal =
      form.get('goal')

    const timing =
      form.get('timing')

    if (!name) {
      err.name =
        'Please enter your name.'
    }

    if (
      !/^[6-9]\d{9}$/.test(phone)
    ) {
      err.phone =
        'Enter a valid 10-digit mobile number.'
    }

    if (!goal) {
      err.goal =
        'Select a goal.'
    }

    if (!timing) {
      err.timing =
        'Select a timing.'
    }

    setErrors(err)

    if (
      Object.keys(err).length === 0
    ) {
      setSent(true)

      event.target.reset()
    }
  }

  return (
    <div className="app">
      {/* Scroll progress */}

      <div
        className="scroll-progress"
        style={{
          width: `${progress}%`,
        }}
      />

      {/* =========================
          Navbar
      ========================= */}

      <header className="navbar">
        <a
          href="#home"
          className="logo"
          onClick={closeMenu}
        >
          IRON<span>CORE</span>
        </a>

        <nav
          className={
            menuOpen
              ? 'nav-menu nav-menu-open'
              : 'nav-menu'
          }
        >
          {NAV.map(
            ([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={closeMenu}
              >
                {label}
              </a>
            )
          )}
        </nav>

        <div className="navbar-actions">
          <a
            href="#contact"
            className="join-btn"
            onClick={closeMenu}
          >
            Join Now
          </a>

          <button
            type="button"
            className={
              menuOpen
                ? 'menu-toggle menu-toggle-open'
                : 'menu-toggle'
            }
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={() =>
              setMenuOpen(
                (current) => !current
              )
            }
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      <main>
        {/* =========================
            Hero
        ========================= */}

        <section
          className="hero"
          id="home"
          style={{
            backgroundImage: `
              linear-gradient(
                90deg,
                rgba(5,5,5,0.97) 0%,
                rgba(5,5,5,0.88) 38%,
                rgba(5,5,5,0.45) 68%,
                rgba(5,5,5,0.18) 100%
              ),
              url(${heroImage})
            `,
          }}
        >
          <div className="hero-overlay"></div>

          <div className="hero-content">
            <span className="hero-tag">
              PORTFOLIO DEMO • FITNESS STUDIO
            </span>

            <h1>
              BUILD STRENGTH.
              <br />
              BUILD DISCIPLINE.
              <br />
              <span className="glitch-text">
                BUILD YOURSELF.
              </span>
            </h1>

            <p>
              A modern training environment
              designed for strength,
              performance, consistency, and
              real progress.
            </p>

            <div className="hero-actions">
              <a
                href="#contact"
                className="primary-btn pulse-btn"
              >
                Join Now
              </a>

              <a
                href="#plans"
                className="secondary-btn"
              >
                View Memberships
              </a>
            </div>
          </div>

          <div className="hero-stats">
            <div>
              <strong>
                Strength
              </strong>

              <span>
                Focused Training
              </span>
            </div>

            <div>
              <strong>
                Modern
              </strong>

              <span>
                Equipment
              </span>
            </div>

            <div>
              <strong>
                Flexible
              </strong>

              <span>
                Training Hours
              </span>
            </div>
          </div>
        </section>

        {/* =========================
            Marquee
        ========================= */}

        <div
          className="marquee"
          aria-hidden="true"
        >
          <div className="marquee-track">
            {[
              ...MARQUEE,
              ...MARQUEE,
              ...MARQUEE,
              ...MARQUEE,
            ].map((word, index) => (
              <span key={index}>
                {word}
                <i>✦</i>
              </span>
            ))}
          </div>
        </div>

        {/* =========================
            Stats
        ========================= */}

        <section className="stats-band reveal">
          {STATS.map((stat) => (
            <div key={stat.l}>
              <strong>
                <Counter
                  to={stat.n}
                  suffix={stat.s}
                />
              </strong>

              <span>
                {stat.l}
              </span>
            </div>
          ))}
        </section>

        {/* =========================
            About
        ========================= */}

        <section
          className="about-section"
          id="about"
        >
          <div className="about-visual reveal">
            <div className="about-image-wrap">
              <img
                src={aboutImage}
                alt="Modern IronCore fitness studio interior"
                loading="lazy"
                decoding="async"
              />

              <div className="about-image-overlay"></div>

              <div className="about-floating-card">
                <span>
                  TRAIN WITH PURPOSE
                </span>

                <strong>
                  Built for focused training.
                </strong>
              </div>
            </div>

            <div className="about-outline-text">
              IRONCORE
            </div>
          </div>

          <div className="about-content reveal">
            <span className="section-label">
              ABOUT IRONCORE
            </span>

            <h2>
              More than a gym.
              <br />

              <span>
                A place to progress.
              </span>
            </h2>

            <p>
              IronCore Fitness Studio is a
              concept fitness space designed
              around strength, consistency,
              and focused training.
            </p>

            <p>
              From beginners building
              confidence to experienced
              lifters pushing performance,
              the environment makes every
              workout purposeful.
            </p>

            <div className="about-features">
              {[
                [
                  'Modern Equipment',
                  'Training equipment for strength, cardio, and functional workouts.',
                ],
                [
                  'Focused Environment',
                  'A clean and motivating space built around consistent progress.',
                ],
                [
                  'Guided Training',
                  'Support and structured options for different fitness goals.',
                ],
              ].map(
                ([title, description], index) => (
                  <div
                    className="about-feature"
                    key={title}
                  >
                    <span className="feature-number">
                      0{index + 1}
                    </span>

                    <div>
                      <strong>
                        {title}
                      </strong>

                      <p>
                        {description}
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>

            <a
              href="#programs"
              className="about-link"
            >
              Explore Training Programs
              <span>→</span>
            </a>
          </div>
        </section>

        {/* =========================
            Programs
        ========================= */}

        <section
          className="programs-section"
          id="programs"
        >
          <div className="programs-header reveal">
            <span className="section-label">
              TRAINING PROGRAMS
            </span>

            <h2>
              Train with a purpose.
              <br />

              <span>
                Choose your direction.
              </span>
            </h2>

            <p>
              Different goals need different
              training approaches. IronCore
              combines strength,
              conditioning, and structured
              workouts.
            </p>
          </div>

          <div className="programs-grid">
            {PROGRAMS.map(
              (
                [
                  title,
                  tag,
                  image,
                  text,
                  extraClass,
                ],
                index
              ) => (
                <article
                  className={`program-card ${extraClass} reveal`}
                  style={{
                    '--d': `${index * 90}ms`,
                  }}
                  key={title}
                >
                  <img
                    src={image}
                    alt={title}
                    loading="lazy"
                    decoding="async"
                  />

                  <div className="program-card-overlay"></div>

                  <div className="program-card-content">
                    <span className="program-number">
                      0{index + 1}
                    </span>

                    <div>
                      <span className="program-tag">
                        {tag}
                      </span>

                      <h3>
                        {title}
                      </h3>

                      <p>
                        {text}
                      </p>
                    </div>
                  </div>
                </article>
              )
            )}
          </div>

          <div className="programs-bottom">
            <p>
              Not sure which training style
              fits your goal?
            </p>

            <a href="#contact">
              Talk to a Trainer
              <span>→</span>
            </a>
          </div>
        </section>

        {/* =========================
            Equipment
        ========================= */}

        <section
          className="equipment-section"
          id="equipment"
        >
          <div className="equipment-header reveal">
            <span className="section-label">
              EQUIPMENT
            </span>

            <h2>
              Train with the right tools.
              <br />

              <span>
                Built for serious sessions.
              </span>
            </h2>

            <p>
              From free weights to guided
              resistance equipment, the
              floor supports strength,
              conditioning, and everyday
              fitness goals.
            </p>
          </div>

          <div className="equipment-grid">
            {EQUIPMENT.map(
              (
                [
                  title,
                  tag,
                  image,
                  text,
                  extraClass,
                ],
                index
              ) => (
                <article
                  className={`equipment-card ${extraClass} reveal`}
                  style={{
                    '--d': `${index * 90}ms`,
                  }}
                  key={title}
                >
                  <img
                    src={image}
                    alt={title}
                    loading="lazy"
                    decoding="async"
                  />

                  <div className="equipment-overlay"></div>

                  <div className="equipment-content">
                    <span className="equipment-index">
                      0{index + 1}
                    </span>

                    <div>
                      <span className="equipment-tag">
                        {tag}
                      </span>

                      <h3>
                        {title}
                      </h3>

                      <p>
                        {text}
                      </p>
                    </div>
                  </div>
                </article>
              )
            )}
          </div>

          <div className="equipment-strip">
            {[
              'Strength Machines',
              'Free Weights',
              'Cardio Equipment',
              'Functional Training',
              'Mobility Zone',
            ].map((item) => (
              <span key={item}>
                {item}
              </span>
            ))}
          </div>
        </section>

        {/* =========================
            Membership
        ========================= */}

        <section
          className="plans-section"
          id="plans"
        >
          <div className="plans-header reveal">
            <span className="section-label">
              MEMBERSHIP OFFERS
            </span>

            <h2>
              Choose your commitment.
              <br />

              <span>
                Unlock the current offer.
              </span>
            </h2>

            <p>
              Offers may vary by duration,
              goals, and facilities.
              Connect with the gym for the
              latest details.
            </p>
          </div>

          <div className="plans-grid">
            {PLANS.map(
              (plan, index) => (
                <article
                  className={`plan-card ${
                    plan.featured
                      ? 'plan-card-featured'
                      : ''
                  } reveal`}
                  style={{
                    '--d': `${index * 100}ms`,
                  }}
                  key={plan.name}
                >
                  {plan.featured && (
                    <span className="plan-popular">
                      MOST POPULAR
                    </span>
                  )}

                  <span className="plan-badge">
                    {plan.badge}
                  </span>

                  <h3>
                    {plan.name}
                  </h3>

                  <p className="plan-subtitle">
                    {plan.sub}
                  </p>

                  <div className="plan-price-wrap">
                    <span className="plan-old-price">
                      {plan.old}
                    </span>

                    <div className="plan-price">
                      {plan.price}

                      <span>
                        Offer
                      </span>
                    </div>
                  </div>

                  <ul>
                    {plan.perks.map(
                      (perk) => (
                        <li key={perk}>
                          {perk}
                        </li>
                      )
                    )}
                  </ul>

                  <a
                    href={wa(
                      `Hi IronCore Fitness, I am interested in the ${plan.name}.`
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className={
                      plan.featured
                        ? 'plan-btn plan-btn-featured'
                        : 'plan-btn'
                    }
                  >
                    {plan.cta}
                  </a>
                </article>
              )
            )}
          </div>

          <div className="plans-contact reveal">
            <div>
              <span>
                NEED THE LATEST OFFER?
              </span>

              <h3>
                Membership details are just
                one conversation away.
              </h3>
            </div>

            <div className="plans-contact-actions">
              <a
                href={`tel:+${PHONE}`}
              >
                Call Us
              </a>

              <a
                href={wa(
                  'Hi IronCore Fitness, I would like to know about the current membership offers.'
                )}
                target="_blank"
                rel="noreferrer"
                className="plans-whatsapp"
              >
                WhatsApp Us
              </a>
            </div>
          </div>

          <p className="plans-disclaimer">
            Sample membership offers shown
            for portfolio demonstration only.
          </p>
        </section>

        {/* =========================
            Trainers
        ========================= */}

        <section
          className="trainers-section"
          id="trainers"
        >
          <div className="trainers-header reveal">
            <div>
              <span className="section-label">
                COACHING TEAM
              </span>

              <h2>
                Guidance that keeps
                <br />

                <span>
                  you moving forward.
                </span>
              </h2>
            </div>

            <p>
              Sample trainer profiles
              showing how a real gym team
              can be presented online.
            </p>
          </div>

          <div className="trainers-grid">
            {TRAINERS.map(
              (
                [
                  name,
                  specialty,
                  image,
                  text,
                  tags,
                  extraClass,
                ],
                index
              ) => (
                <article
                  className={`trainer-card ${extraClass} reveal`}
                  style={{
                    '--d': `${index * 100}ms`,
                  }}
                  key={name}
                >
                  <img
                    src={image}
                    alt={`Demo trainer ${name}`}
                    loading="lazy"
                    decoding="async"
                  />

                  <div className="trainer-overlay"></div>

                  <div className="trainer-content">
                    <span className="trainer-number">
                      0{index + 1}
                    </span>

                    <span className="trainer-specialty">
                      {specialty}
                    </span>

                    <h3>
                      {name}
                    </h3>

                    <p>
                      {text}
                    </p>

                    <div className="trainer-tags">
                      {tags.map((tag) => (
                        <span key={tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              )
            )}
          </div>

          <div className="trainers-cta">
            <div>
              <span>
                NEED GUIDANCE?
              </span>

              <h3>
                Connect with the team and
                find the right training
                approach.
              </h3>
            </div>

            <a href="#contact">
              Talk to a Trainer
              <span>→</span>
            </a>
          </div>

          <p className="trainer-demo-note">
            Trainer names and profiles are
            fictional and shown for portfolio
            demonstration only.
          </p>
        </section>

        {/* =========================
            BMI Calculator
        ========================= */}

        <section className="tools-section">
          <BmiCalculator />
        </section>

        {/* =========================
            Gallery
        ========================= */}

        <section
          className="gallery-section"
          id="gallery"
        >
          <div className="gallery-header reveal">
            <span className="section-label">
              GALLERY
            </span>

            <h2>
              Inside the environment.
              <br />

              <span>
                Built to keep you moving.
              </span>
            </h2>

            <p>
              A visual look at the training
              floor, equipment, and
              atmosphere that shape the
              IronCore experience.
            </p>
          </div>

          <div className="gallery-grid">
            {GALLERY.map(
              (
                [
                  caption,
                  image,
                  extraClass,
                ],
                index
              ) => (
                <article
                  className={`gallery-item ${extraClass} reveal`}
                  style={{
                    '--d': `${index * 90}ms`,
                  }}
                  key={caption}
                >
                  <img
                    src={image}
                    alt={caption}
                    loading="lazy"
                    decoding="async"
                  />

                  <div className="gallery-overlay"></div>

                  <div className="gallery-caption">
                    <span>
                      0{index + 1}
                    </span>

                    <strong>
                      {caption}
                    </strong>
                  </div>
                </article>
              )
            )}
          </div>
        </section>

        {/* =========================
            Member Experience
        ========================= */}

        <section className="experience-section">
          <div className="experience-header reveal">
            <span className="section-label">
              MEMBER EXPERIENCE
            </span>

            <h2>
              What the experience
              <br />

              <span>
                could feel like.
              </span>
            </h2>

            <p>
              Sample member feedback shown
              to demonstrate how real reviews
              can be presented.
            </p>
          </div>

          <div className="experience-grid">
            {REVIEWS.map(
              (
                [
                  avatar,
                  name,
                  role,
                  quote,
                ],
                index
              ) => (
                <article
                  className={`experience-card ${
                    index === 1
                      ? 'experience-card-featured'
                      : ''
                  } reveal`}
                  style={{
                    '--d': `${index * 100}ms`,
                  }}
                  key={name}
                >
                  <div className="experience-top">
                    <span className="experience-demo">
                      SAMPLE REVIEW
                    </span>

                    <span className="experience-stars">
                      ★★★★★
                    </span>
                  </div>

                  <p className="experience-quote">
                    “{quote}”
                  </p>

                  <div className="experience-person">
                    <div className="experience-avatar">
                      {avatar}
                    </div>

                    <div>
                      <strong>
                        {name}
                      </strong>

                      <span>
                        {role}
                      </span>
                    </div>
                  </div>
                </article>
              )
            )}
          </div>

          <div className="experience-note">
            These reviews are fictional
            sample content created only for
            portfolio demonstration.
          </div>
        </section>

        {/* =========================
            FAQ
        ========================= */}

        <section
          className="faq-section"
          id="faq"
        >
          <div className="faq-wrap reveal">
            <span className="section-label">
              FAQ
            </span>

            <h2>
              Common questions.
            </h2>

            {FAQS.map(
              ([question, answer], index) => (
                <div
                  className={
                    openFaq === index
                      ? 'faq-item faq-open'
                      : 'faq-item'
                  }
                  key={question}
                >
                  <button
                    type="button"
                    aria-expanded={
                      openFaq === index
                    }
                    onClick={() =>
                      setOpenFaq(
                        openFaq === index
                          ? -1
                          : index
                      )
                    }
                  >
                    {question}

                    <span>
                      +
                    </span>
                  </button>

                  <div className="faq-answer">
                    <p>
                      {answer}
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
        </section>

        {/* =========================
            Timings + Visit
        ========================= */}

        <section
          className="visit-section"
          id="contact"
        >
          <div className="visit-grid">
            <div className="timings-card reveal">
              <span className="section-label">
                GYM TIMINGS
              </span>

              <h2>
                Train when it
                <br />

                <span>
                  works for you.
                </span>
              </h2>

              <p className="timings-intro">
                Sample operating hours shown
                for portfolio demonstration.
              </p>

              <div className="timings-list">
                {[
                  [
                    'Monday – Saturday',
                    'Morning Session',
                    '6:00 AM – 11:00 AM',
                  ],
                  [
                    'Monday – Saturday',
                    'Evening Session',
                    '4:00 PM – 10:00 PM',
                  ],
                  [
                    'Sunday',
                    'Recovery / Limited Hours',
                    'Contact Gym',
                  ],
                ].map(
                  ([
                    day,
                    session,
                    time,
                  ]) => (
                    <div
                      className="timing-row"
                      key={session}
                    >
                      <div>
                        <strong>
                          {day}
                        </strong>

                        <span>
                          {session}
                        </span>
                      </div>

                      <span className="timing-value">
                        {time}
                      </span>
                    </div>
                  )
                )}
              </div>

              <div className="timings-note">
                Demo timings only — actual
                gym hours may vary.
              </div>
            </div>

            <div
              className="visit-card reveal"
              style={{
                '--d': '120ms',
              }}
            >
              <span className="section-label">
                BOOK A VISIT
              </span>

              <h2>
                Ready to take
                <br />

                <span>
                  the first step?
                </span>
              </h2>

              <p>
                Share your basic details and
                preferred training goal.
              </p>

              {sent ? (
                <div
                  className="form-success"
                  role="status"
                >
                  <div className="check">
                    ✓
                  </div>

                  <h3>
                    Request received
                  </h3>

                  <p>
                    Demo only: no data was
                    sent. A real gym would
                    call you shortly.
                  </p>

                  <button
                    type="button"
                    className="visit-submit"
                    onClick={() =>
                      setSent(false)
                    }
                  >
                    Send another request
                  </button>
                </div>
              ) : (
                <form
                  className="visit-form"
                  onSubmit={handleSubmit}
                  noValidate
                >
                  <div className="form-row">
                    <div className="form-field">
                      <label htmlFor="name">
                        Name
                      </label>

                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your name"
                        aria-invalid={
                          !!errors.name
                        }
                      />

                      {errors.name && (
                        <small className="field-error">
                          {errors.name}
                        </small>
                      )}
                    </div>

                    <div className="form-field">
                      <label htmlFor="phone">
                        Phone
                      </label>

                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        aria-invalid={
                          !!errors.phone
                        }
                      />

                      {errors.phone && (
                        <small className="field-error">
                          {errors.phone}
                        </small>
                      )}
                    </div>
                  </div>

                  <div className="form-field">
                    <label htmlFor="goal">
                      Fitness Goal
                    </label>

                    <select
                      id="goal"
                      name="goal"
                      defaultValue=""
                    >
                      <option
                        value=""
                        disabled
                      >
                        Select your goal
                      </option>

                      <option value="strength">
                        Strength Training
                      </option>

                      <option value="muscle">
                        Muscle Building
                      </option>

                      <option value="fat-loss">
                        Fat Loss
                      </option>

                      <option value="general">
                        General Fitness
                      </option>
                    </select>

                    {errors.goal && (
                      <small className="field-error">
                        {errors.goal}
                      </small>
                    )}
                  </div>

                  <div className="form-field">
                    <label htmlFor="timing">
                      Preferred Timing
                    </label>

                    <select
                      id="timing"
                      name="timing"
                      defaultValue=""
                    >
                      <option
                        value=""
                        disabled
                      >
                        Choose preferred timing
                      </option>

                      <option value="morning">
                        Morning
                      </option>

                      <option value="evening">
                        Evening
                      </option>

                      <option value="flexible">
                        Flexible
                      </option>
                    </select>

                    {errors.timing && (
                      <small className="field-error">
                        {errors.timing}
                      </small>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="visit-submit"
                  >
                    Request a Free Visit
                  </button>
                </form>
              )}

              <div className="visit-divider">
                <span>
                  OR
                </span>
              </div>

              <div className="visit-actions">
                <a
                  href={`tel:+${PHONE}`}
                >
                  Call Us
                </a>

                <a
                  href={wa(
                    'Hi IronCore Fitness, I would like to book a visit.'
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="visit-whatsapp"
                >
                  WhatsApp Us
                </a>
              </div>

              <p className="visit-demo-note">
                This enquiry form is a
                frontend demo and does not
                submit data.
              </p>
            </div>
          </div>
        </section>

        {/* =========================
            Footer
        ========================= */}

        <footer className="site-footer">
          <div className="footer-top">
            <div className="footer-brand">
              <div className="footer-logo">
                IRON<span>CORE</span>
              </div>

              <p>
                A premium fitness studio
                concept built around
                strength, discipline,
                consistency, and focused
                training.
              </p>

              <span className="footer-demo">
                Portfolio Demo by K&P Tech
                Solutions
              </span>
            </div>

            <div className="footer-links">
              <div>
                <span className="footer-title">
                  Explore
                </span>

                <a href="#about">
                  About
                </a>

                <a href="#programs">
                  Programs
                </a>

                <a href="#equipment">
                  Equipment
                </a>

                <a href="#plans">
                  Membership
                </a>
              </div>

              <div>
                <span className="footer-title">
                  Connect
                </span>

                <a href="#trainers">
                  Trainers
                </a>

                <a href="#gallery">
                  Gallery
                </a>

                <a href="#contact">
                  Book a Visit
                </a>

                <a
                  href={wa(
                    'Hi IronCore Fitness, I would like to know more.'
                  )}
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <span>
              © 2026 IronCore Fitness Studio
              — Demo Concept
            </span>

            <span>
              Designed as a portfolio
              project by K&P Tech Solutions
            </span>
          </div>
        </footer>
      </main>

      {/* =========================
          Floating Buttons
      ========================= */}

      <a
        className={
          showTop
            ? 'fab fab-whatsapp fab-show'
            : 'fab fab-whatsapp'
        }
        href={wa(
          'Hi IronCore Fitness!'
        )}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
      >
        WA
      </a>

      <button
        type="button"
        className={
          showTop
            ? 'fab fab-top fab-show'
            : 'fab fab-top'
        }
        aria-label="Back to top"
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          })
        }
      >
        ↑
      </button>
    </div>
  )
}

export default App