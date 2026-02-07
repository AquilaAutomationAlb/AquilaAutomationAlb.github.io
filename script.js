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
        'hero-title-1': { sq: 'Automatizo Biznesin.', en: 'Automate Your Business.' },
        'hero-title-2': { sq: 'Ruaj të Dhënat.', en: 'Keep Your Data.' },
        'hero-title-3': { sq: 'Paguaj Një Herë.', en: 'Pay Once.' },
        'hero-subtitle': {
            sq: 'Ndërtojmë automatizime private me AI për bizneset shqiptare. Pa tarifa mujore të fshehura. Ju zotëroni kodin, llogarinë dhe të dhënat.',
            en: 'We build private AI workflows for Albanian businesses. No hidden monthly fees. You own the code, the account, and the data.'
        },
        'hero-btn-1': { sq: 'Shiko Zgjidhjet', en: 'View Solutions' },
        'hero-btn-2': { sq: 'Si Funksionon', en: 'How it Works' },
        'floating-1': { sq: 'Me AI', en: 'AI Powered' },
        'floating-2': { sq: 'GDPR i Sigurt', en: 'GDPR Safe' },
        'floating-3': { sq: 'Pagesë Një Herë', en: 'One-Time Fee' },

        // Why Us Section
        'why-tag': { sq: 'Pse Ne', en: 'Why Choose Us' },
        'why-title-1': { sq: 'Mënyra e Vjetër vs.', en: 'The Old Way vs.' },
        'why-title-2': { sq: 'Mënyra Jonë', en: 'Our Way' },
        'why-subtitle': { sq: 'Agjencitë tradicionale ju bllokojnë. Ne ju lirojmë.', en: 'Traditional agencies lock you in. We set you free.' },
        'old-way-title': { sq: 'Agjencitë Tradicionale', en: 'Traditional Agencies' },
        'old-1-title': { sq: 'Tarifa Mujore', en: 'Monthly Fees' },
        'old-1-desc': { sq: 'Kosto të vazhdueshme që nuk mbarojnë kurrë', en: 'Recurring costs that never end' },
        'old-2-title': { sq: 'Ata Zotërojnë të Dhënat', en: 'They Own Your Data' },
        'old-2-desc': { sq: 'Të bllokuara në sistemet e tyre', en: 'Locked in their systems' },
        'old-3-title': { sq: 'Rrezik GDPR', en: 'GDPR Risk' },
        'old-3-desc': { sq: 'Të dhënat tuaja në serverat e tyre', en: 'Your data on their servers' },
        'old-4-title': { sq: 'Varësi nga Furnitori', en: 'Vendor Lock-in' },
        'old-4-desc': { sq: 'Ik dhe humb gjithçka', en: 'Leave and lose everything' },
        'our-1-title': { sq: 'Pagesë Një Herë', en: 'One-Time Setup Fee' },
        'our-1-desc': { sq: 'Paguaj një herë, zotëro përgjithmonë', en: 'Pay once, own forever' },
        'our-2-title': { sq: 'Ju Zotëroni Gjithçka', en: 'You Own The Assets' },
        'our-2-desc': { sq: 'Kodin, llogarinë, të gjitha', en: 'Code, account, everything' },
        'our-3-title': { sq: 'GDPR i Sigurt', en: 'GDPR Safe' },
        'our-3-desc': { sq: 'Të dhënat qëndrojnë në llogarinë TUAJ Make.com', en: 'Data stays in YOUR Make.com account' },
        'our-4-title': { sq: 'Liri e Plotë', en: 'Complete Freedom' },
        'our-4-desc': { sq: 'Modifikoni, zgjeroni, ose largohuni kurdo', en: 'Modify, extend, or leave anytime' },

        // Products Section
        'products-tag': { sq: 'Zgjidhjet Tona', en: 'Our Solutions' },
        'products-title-1': { sq: 'Produkte', en: 'Automation' },
        'products-title-2': { sq: 'Automatizimi', en: 'Products' },
        'products-subtitle': { sq: 'Paketa automatizimi gati për t\'u vendosur për bizneset shqiptare', en: 'Ready-to-deploy automation packages for Albanian businesses' },
        'product1-badge': { sq: 'Pasuritë', en: 'Real Estate' },
        'product1-desc': { sq: 'Mos humbni asnjë klient. AI përgjigjet menjëherë në WhatsApp/Instagram dhe rezervon takime automatikisht ndërsa ju flini.', en: 'Never miss a lead. AI replies instantly on WhatsApp/Instagram and books meetings automatically while you sleep.' },
        'product1-f1': { sq: 'Përgjigje 24/7', en: '24/7 Instant Responses' },
        'product1-f2': { sq: 'WhatsApp & Instagram', en: 'WhatsApp & Instagram' },
        'product1-f3': { sq: 'Rezervim Automatik', en: 'Auto Meeting Booking' },
        'product2-badge': { sq: 'Kontabilistë / Ndërtim', en: 'Accountants / Construction' },
        'product2-popular': { sq: 'Më Popullor', en: 'Most Popular' },
        'product2-desc': { sq: 'Tërhiq & lësho PDF. AI nxjerr të dhënat dhe i fut në Excel menjëherë. Orë punë manuale të bëra në sekonda.', en: 'Drag & drop PDFs. AI extracts data and types it into Excel instantly. Hours of manual work done in seconds.' },
        'product2-f1': { sq: 'Nxjerrje të Dhënash nga PDF', en: 'PDF Data Extraction' },
        'product2-f2': { sq: 'Mbushje Automatike Excel', en: 'Excel Auto-Fill' },
        'product2-f3': { sq: 'Procesim Faturash', en: 'Invoice Processing' },
        'product3-badge': { sq: 'Dyqane Instagram', en: 'Instagram Shops' },
        'product3-desc': { sq: 'Përgjigju automatikisht DM-ve "Sa kushton?" dhe gjenero etiketa dërgimi automatikisht. Rrit dyqanin tuaj në Instagram pa mund.', en: 'Auto-reply to "Price?" DMs and generate shipping labels automatically. Scale your Instagram shop effortlessly.' },
        'product3-f1': { sq: 'Përgjigje Automatike DM', en: 'Auto DM Responses' },
        'product3-f2': { sq: 'Etiketa Dërgimi', en: 'Shipping Labels' },
        'product3-f3': { sq: 'Gjurmim Porosish', en: 'Order Tracking' },
        'price-note': { sq: 'Pagesë një herë', en: 'One-time payment' },
        'get-started': { sq: 'Fillo Tani', en: 'Get Started' },

        // Security Section
        'security-tag': { sq: 'Siguria e Parë', en: 'Security First' },
        'security-title-1': { sq: 'Arkitekturë', en: 'Zero-Trust' },
        'security-title-2': { sq: 'Zero-Trust', en: 'Architecture' },
        'security-desc': { sq: 'Ndërtojmë brenda llogarisë TUAJ Make.com. Kur mbarojmë, transferojmë pronësinë e plotë tek ju dhe fshijmë aksesin tonë. Ju jeni i vetmi që shikon të dhënat tuaja.', en: 'We build inside YOUR Make.com account. Once finished, we transfer complete ownership to you and delete our access. You are the only one who sees your data.' },
        'security-f1-title': { sq: 'Llogaria Juaj, Kontrolli Juaj', en: 'Your Account, Your Control' },
        'security-f1-desc': { sq: 'Gjithçka ndërtohet në llogarinë tuaj Make.com', en: 'Everything is built in your own Make.com account' },
        'security-f2-title': { sq: 'Dorëzim i Plotë', en: 'Complete Handover' },
        'security-f2-desc': { sq: 'Transferim i plotë i pronësisë pas përfundimit të projektit', en: 'Full ownership transfer upon project completion' },
        'security-f3-title': { sq: 'Aksesi Fshihet', en: 'Access Revoked' },
        'security-f3-desc': { sq: 'Fshijmë kredencialet tona të aksesit menjëherë', en: 'We delete our access credentials immediately' },

        // How It Works Section
        'process-tag': { sq: 'Procesi', en: 'Process' },
        'process-title-1': { sq: 'Si', en: 'How It' },
        'process-title-2': { sq: 'Funksionon', en: 'Works' },
        'process-subtitle': { sq: 'Nga thirrja e parë në pronësi të plotë në 4 hapa të thjeshtë', en: 'From first call to full ownership in 4 simple steps' },
        'step1-title': { sq: 'Audit', en: 'Audit' },
        'step1-desc': { sq: 'Thirrje falas 15-minuta për të kuptuar procesin tuaj dhe identifikuar mundësitë automatizimi.', en: 'Free 15-minute call to understand your workflow and identify automation opportunities.' },
        'step2-title': { sq: 'Projekt', en: 'Blueprint' },
        'step2-desc': { sq: 'Dizenjojmë rrjedhën e plotë të automatizimit të përshtatur për nevojat tuaja specifike.', en: 'We design the complete automation flow tailored to your specific business needs.' },
        'step3-title': { sq: 'Ndërtim', en: 'Build' },
        'step3-desc': { sq: 'Ndërtojmë dhe testojmë automatizimin duke përdorur të dhëna demo në llogarinë tuaj Make.com.', en: 'We build and test the automation using dummy data in your Make.com account.' },
        'step4-title': { sq: 'Dorëzim', en: 'Handover' },
        'step4-desc': { sq: 'Transferojmë kontroll të plotë tek ju, ofrojmë dokumentacion, dhe fshijmë aksesin tonë.', en: 'We transfer full control to you, provide documentation, and remove our access.' },

        // Contact Section
        'contact-tag': { sq: 'Fillo Tani', en: 'Get Started' },
        'contact-title-1': { sq: 'Gati për', en: 'Ready to' },
        'contact-title-2': { sq: 'Automatizim?', en: 'Automate?' },
        'contact-desc': { sq: 'Rezervo thirrjen falas 15-minuta. Do të identifikojmë ku automatizimi mund t\'ju kursejë orë çdo javë.', en: 'Book your free 15-minute audit call. We\'ll identify where automation can save you hours every week.' },
        'whatsapp-btn': { sq: 'Bisedo në WhatsApp', en: 'Chat on WhatsApp' },
        'email-btn': { sq: 'Dërgo Email', en: 'Send Email' },

        // Footer
        'footer-tagline': { sq: 'Automatizime private me AI për bizneset shqiptare.', en: 'Private AI workflows for Albanian businesses.' },
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
