/**
 * Aquila Automations - Landing Page JavaScript
 * Handles: Mobile navigation, scroll effects, fade-in animations, language toggle
 */

document.addEventListener('DOMContentLoaded', () => {
    // Elements
    const navbar = document.getElementById('navbar');
    const mobileToggle = document.getElementById('mobile-toggle');
    const navLinks = document.getElementById('nav-links');
    const fadeElements = document.querySelectorAll('.fade-in');
    const langToggle = document.getElementById('lang-toggle');

    // Current language state (default: Albanian)
    let currentLang = 'sq';

    // Translations dictionary
    const translations = {
        // Hero Section
        'hero-tagline': { sq: 'Agjensi Automatizimi me Make.com + Inteligjencë Artificiale', en: 'Automation Agency with Make.com + Artificial Intelligence' },
        'hero-title-1': { sq: 'Ndërtojmë Sisteme', en: 'We Build Systems' },
        'hero-title-2': { sq: 'që Punojnë për Ty 24/7', en: 'That Work For You 24/7' },
        'hero-subtitle': {
            sq: 'Krijojmë automatizime të personalizuara me Make.com dhe Inteligjencë Artificiale që ti të flesh rehat.',
            en: 'We create custom automations with Make.com and Artificial Intelligence so you can sleep soundly.'
        },
        'hero-btn-1': { sq: 'Shiko Zgjidhjet', en: 'View Solutions' },
        'hero-btn-2': { sq: 'Si Funksionon', en: 'How it Works' },
        'hero-f1': { sq: 'Automatizim WhatsApp & Instagram', en: 'WhatsApp & Instagram Automation' },
        'hero-f2': { sq: 'Procesim Dokumentesh me AI', en: 'AI Document Processing' },
        'hero-f3': { sq: 'Përgjigje Automatike 24/7', en: '24/7 Automated Responses' },
        'floating-1': { sq: 'Chatbot 24/7', en: '24/7 Chatbot' },
        'floating-2': { sq: 'PDF → Excel', en: 'PDF → Excel' },
        'floating-3': { sq: 'Make.com', en: 'Make.com' },

        // What We Do (New Section)
        'services-tag': { sq: 'Çfarë Bëjmë', en: 'What We Do' },
        'services-title-1': { sq: 'Zgjidhje për', en: 'Solutions for' },
        'services-title-2': { sq: 'Biznesin Tënd', en: 'Your Business' },
        'services-subtitle': { sq: 'Automatizojmë proceset e përditshme që ju marrin kohë.', en: 'We automate the daily processes that take up your time.' },

        'service-1-title': { sq: 'Komunikim Automatik', en: 'Automated Communication' },
        'service-1-desc': { sq: 'Përgjigjen automatikisht klientëve në WhatsApp dhe Instagram (në shqip ose anglisht) brenda sekondash.', en: 'Automatically reply to clients on WhatsApp and Instagram (in Albanian or English) within seconds.' },

        'service-2-title': { sq: 'Procesim Dokumentesh', en: 'Document Processing' },
        'service-2-desc': { sq: 'Klasifikojnë dhe procesojnë fatura, porosi, kontrata ose kërkesa me AI (pa punonjës shtesë natën ose fundjavë).', en: 'Classify and process invoices, orders, contracts, or requests with AI (no extra staff at night or weekends).' },

        'service-3-title': { sq: 'Menaxhim Porosish', en: 'Order Management' },
        'service-3-desc': { sq: 'Menaxhojnë porositë nga WooCommerce / Shopify / Facebook Shop / Instagram direkt në Excel, WhatsApp Business ose sistemin tuaj.', en: 'Manage orders from WooCommerce / Shopify / Facebook Shop / Instagram directly to Excel, WhatsApp Business, or your system.' },

        'service-4-title': { sq: 'Njoftime Automatike', en: 'Automated Notifications' },
        'service-4-desc': { sq: 'Dërgojnë njoftime automatike për pagesa, anulime, rikujtime pagese ose transport (me SMS ose WhatsApp).', en: 'Send automated notifications for payments, cancellations, payment reminders, or shipping (via SMS or WhatsApp).' },

        'service-5-title': { sq: 'Chatbot-e të Zgjuara', en: 'Smart Chatbots' },
        'service-5-desc': { sq: 'Krijohen chatbot-e të zgjuara që shesin, rezervojnë tavolina, marrin porosi ushqimi ose caktojnë takime — pa pasur nevojë për dikë pas telefonit.', en: 'Create smart chatbots that sell, book tables, take food orders, or schedule appointments — without needing someone on the phone.' },

        // Why Us Section (Updated)
        'why-tag': { sq: 'Përfitimet', en: 'Benefits' },
        'why-title-1': { sq: 'Përfitimet Reale', en: 'Real Benefits' },
        'why-title-2': { sq: 'Për Biznesin Tënd', en: 'For Your Business' },
        'why-subtitle': { sq: 'Kurseni kohë dhe para me automatizim inteligjent.', en: 'Save time and money with intelligent automation.' },

        'benefit-1-title': { sq: 'Kursen 10–40 Orë/Javë', en: 'Save 10–40 Hours/Week' },
        'benefit-1-desc': { sq: 'Punë manuale (përgjigje klientësh, shkrim faturash, ndjekje porosish).', en: 'Manual work (customer replies, invoicing, order tracking).' },

        'benefit-2-title': { sq: 'Ul Kostot', en: 'Reduce Costs' },
        'benefit-2-desc': { sq: 'Ul kostot e punonjësve për shërbim klientësh (sidomos natën dhe të dielave).', en: 'Reduce customer service staff costs (especially nights and Sundays).' },

        'benefit-3-title': { sq: 'Rrit Shpejtësinë', en: 'Increase Speed' },
        'benefit-3-desc': { sq: 'Rrit shpejtësinë e përgjigjes → klientët e kënaqur blejnë më shumë dhe kthehen sërish.', en: 'Increase response speed → satisfied customers buy more and return.' },

        'benefit-4-title': { sq: 'Pagesë Një Herë', en: 'One-Time Payment' },
        'benefit-4-desc': { sq: 'Ti zotëron automatizimin 100%, pa tarifa mujore të fshehura (vetëm kosto e Make.com).', en: 'You own the automation 100%, no hidden monthly fees (only Make.com cost).' },

        // Solutions (Examples) Section
        'products-tag': { sq: 'Shembuj Konkretë', en: 'Concrete Examples' },
        'products-title-1': { sq: 'Shembuj që', en: 'Examples that' },
        'products-title-2': { sq: 'Po Funksionojnë', en: 'Are Working' },
        'products-subtitle': { sq: 'Zgjidhje që tashmë po përdoren nga bizneset shqiptare.', en: 'Solutions already being used by Albanian businesses.' },

        'product1-badge': { sq: 'Shitje & Support', en: 'Sales & Support' },
        'product1-desc': { sq: 'Automatizim WhatsApp & Instagram për porosi direkt nga klientët. Përgjigje 24/7 dhe shitje automatike pa ndërhyrje njerëzore.', en: 'WhatsApp & Instagram automation for direct customer orders. 24/7 replies and automated sales without human intervention.' },
        'product1-f1': { sq: 'Porosi Direkt', en: 'Direct Orders' },
        'product1-f2': { sq: 'WhatsApp & Instagram', en: 'WhatsApp & Instagram' },
        'product1-f3': { sq: 'Pa Ndërhyrje', en: 'Zero Intervention' },

        'product2-badge': { sq: 'Administratë', en: 'Administration' },
        'product2-popular': { sq: 'Më i Kërkuari', en: 'Most Popular' },
        'product2-desc': { sq: 'Procesim i faturave / dokumenteve me AI (nxjerrja e të dhënave automatike). Nga PDF në Excel ose sistemin tuaj në sekonda.', en: 'Invoice / document processing with AI (automatic data extraction). From PDF to Excel or your system in seconds.' },
        'product2-f1': { sq: 'Nxjerrje të Dhënash', en: 'Data Extraction' },
        'product2-f2': { sq: 'Saktësi AI', en: 'AI Accuracy' },
        'product2-f3': { sq: 'Arkivim Automatik', en: 'Auto Archiving' },

        'product3-badge': { sq: 'E-Commerce', en: 'E-Commerce' },
        'product3-desc': { sq: 'Menaxhim i plotë i porosive. Sinkronizim inventari, njoftime për klientin dhe etiketa dërgimi automatike.', en: 'Complete order management. Inventory sync, customer notifications, and automatic shipping labels.' },
        'product3-f1': { sq: 'Sinkronizim', en: 'Synchronization' },
        'product3-f2': { sq: 'Njoftime SMS/WA', en: 'SMS/WA Notifications' },
        'product3-f3': { sq: 'Etiketa', en: 'Labels' },

        'price-note': { sq: 'Pagesë një herë', en: 'One-time payment' },
        'get-started': { sq: 'Fillo Tani', en: 'Get Started' },

        // Security Section
        'security-tag': { sq: 'Siguria', en: 'Security' },
        'security-title-1': { sq: 'Arkitektura', en: 'Zero-Trust' },
        'security-title-2': { sq: 'Zero-Trust', en: 'Architecture' },
        'security-desc': { sq: 'Ndërtojmë brenda llogarisë TUAJ Make.com. Kur mbarojmë, transferojmë pronësinë e plotë tek ju dhe fshijmë aksesin tonë.', en: 'We build inside YOUR Make.com account. Once finished, we transfer complete ownership to you and delete our access.' },
        'security-f1-title': { sq: 'Llogaria Juaj', en: 'Your Account' },
        'security-f1-desc': { sq: 'Gjithçka ndërtohet në llogarinë tuaj', en: 'Everything is built in your account' },
        'security-f2-title': { sq: 'Dorëzim i Plotë', en: 'Full Handover' },
        'security-f2-desc': { sq: 'Ju zotëroni kodin dhe të dhënat', en: 'You own the code and data' },
        'security-f3-title': { sq: 'Privatësi', en: 'Privacy' },
        'security-f3-desc': { sq: 'Ne fshijmë aksesin pas dorëzimit', en: 'We delete access after handover' },

        // How It Works Section
        'process-tag': { sq: 'Procesi', en: 'Process' },
        'process-title-1': { sq: 'Si', en: 'How It' },
        'process-title-2': { sq: 'Funksionon', en: 'Works' },
        'process-subtitle': { sq: 'Nga ideja në automatizim të plotë.', en: 'From idea to full automation.' },
        'step1-title': { sq: 'Audit', en: 'Audit' },
        'step1-desc': { sq: 'Analizojmë proceset tuaja aktuale.', en: 'We analyze your current processes.' },
        'step2-title': { sq: 'Plan', en: 'Plan' },
        'step2-desc': { sq: 'Propozojmë zgjidhjen automatike.', en: 'We propose the automated solution.' },
        'step3-title': { sq: 'Ndërtim', en: 'Build' },
        'step3-desc': { sq: 'Zhvillojmë sistemin në llogarinë tuaj.', en: 'We develop the system in your account.' },
        'step4-title': { sq: 'Dorëzim', en: 'Handover' },
        'step4-desc': { sq: 'Ju merrni kontrollin e plotë.', en: 'You take full control.' },

        // Contact Section
        'contact-tag': { sq: 'Fillo Tani', en: 'Get Started' },
        'contact-title-1': { sq: 'Gati për', en: 'Ready to' },
        'contact-title-2': { sq: 'Automatizim?', en: 'Automate?' },
        'contact-desc': { sq: 'Dërgo një mesazh "AUTO" dhe të tregojmë saktësisht si mund të kursesh kohë dhe para për biznesin tënd!', en: 'Send a message "AUTO" and we will show you exactly how you can save time and money for your business!' },
        'whatsapp-btn': { sq: 'Bisedo në WhatsApp', en: 'Chat on WhatsApp' },
        'email-btn': { sq: 'Dërgo Email', en: 'Send Email' },

        // Footer
        'footer-tagline': { sq: 'Automatizime me Inteligjencë Artificiale për bizneset shqiptare.', en: 'Artificial Intelligence Automations for Albanian businesses.' },
        'footer-copyright': { sq: 'Të gjitha të drejtat e rezervuara.', en: 'All rights reserved.' }
    };

    // Language Toggle Function
    const toggleLanguage = () => {
        currentLang = currentLang === 'sq' ? 'en' : 'sq';

        // Update toggle button
        const langFlag = langToggle.querySelector('.lang-flag');
        const langCode = langToggle.querySelector('.lang-code');

        if (currentLang === 'sq') {
            langFlag.textContent = '🇬🇧';
            langCode.textContent = 'EN';
        } else {
            langFlag.textContent = '🇦🇱';
            langCode.textContent = 'SQ';
        }

        // Update all translatable elements
        document.querySelectorAll('[data-translate]').forEach(el => {
            const key = el.getAttribute('data-translate');
            if (translations[key]) {
                el.textContent = translations[key][currentLang];
            }
        });

        // Update elements with data-sq and data-en attributes
        document.querySelectorAll('[data-sq][data-en]').forEach(el => {
            el.textContent = el.getAttribute(`data-${currentLang}`);
        });

        // Update document title
        document.title = currentLang === 'sq'
            ? 'Aquila Automations | Automatizim me AI për Bizneset Shqiptare'
            : 'Aquila Automations | AI Workflow Automation for Albanian Businesses';

        // Update html lang attribute
        document.documentElement.lang = currentLang;

        // Store preference
        localStorage.setItem('preferredLang', currentLang);
    };

    // Initialize language from localStorage
    const savedLang = localStorage.getItem('preferredLang');
    if (savedLang && savedLang !== currentLang) {
        toggleLanguage();
    }

    // Language toggle click handler
    if (langToggle) {
        langToggle.addEventListener('click', toggleLanguage);
    }

    // Mobile Navigation Toggle
    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', () => {
            mobileToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close mobile menu when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileToggle.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    // Navbar scroll effect
    const handleScroll = () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                fadeObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeElements.forEach(el => fadeObserver.observe(el));

    // Smooth scroll for anchor links (fallback for browsers without CSS scroll-behavior)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                const navbarHeight = navbar.offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});
