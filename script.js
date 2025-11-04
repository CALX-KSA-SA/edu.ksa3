// Bilingual Support Script for CALX Website

let currentLang = 'en';

// Translation dictionary
const translations = {
    'CALX': 'كالكس',
    'Academic Expansion Partners': 'شريك التوسع الأكاديمي',
    'About': 'عن كالكس',
    'Why Saudi Arabia': 'لماذا السعودية',
    'Services': 'خدماتنا',
    'Contact': 'تواصل معنا',
    'Opening Horizons for Academic Expansion in Saudi Arabia': 'نفتح آفاق التوسع الأكاديمي في السعودية',
    'CALX empowers universities, colleges, and global educational institutions to establish their headquarters, branches, and operate academic programs in the Kingdom with confidence and sustainability, through an integrated system of services including licensing, planning, design, and operations.': 'كالكس تمكّن الجامعات والكليات والمؤسسات التعليمية العالمية من تأسيس مقراتها وفروعها وتشغيل برامجها الأكاديمية في المملكة بثقة واستدامة، عبر منظومة خدمات متكاملة تشمل الترخيص والتخطيط والتصميم والتشغيل',
    'Start Your Journey': 'ابدأ رحلتك الآن',
    'Our Services': 'خدماتنا',
    'Your Ideal Partner for Academic Success': 'الشريك الأمثل للتوسع الأكاديمي',
    'Whether the goal is to establish a new university or college, open a branch of an existing institution, launch a branch of an international university, or add specialized academic programs, CALX is the ideal partner for successful academic expansion aligned with Saudi Arabia\'s educational aspirations.': 'سواء كان الهدف إنشاء جامعة أو كلية جديدة، أو افتتاح فرع لمؤسسة قائمة، أو إطلاق فرع لجامعة دولية، أو إضافة برامج أكاديمية متخصصة، فإن كالكس هي الشريك الأمثل لتوسّع أكاديمي ناجح ومتوافق مع تطلعات التعليم في السعودية',
    'Why Saudi Arabia?': 'لماذا السعودية؟',
    'Attractive Educational Environment': 'بيئة تعليمية جاذبة',
    'Attractive educational and regulatory environment supporting global academic investment': 'بيئة تعليمية وتنظيمية جاذبة تدعم الاستثمار الأكاديمي العالمي',
    'Ambitious National Vision': 'رؤية وطنية طموحة',
    'An ambitious national vision that makes education, research, and innovation the core of development': 'رؤية وطنية طموحة تجعل التعليم والبحث والابتكار محور التنمية',
    'Continuous Government Support': 'دعم حكومي مستمر',
    'Continuous government support for knowledge localization and attracting prestigious universities': 'دعم حكومي مستمر لتوطين المعرفة واستقطاب الجامعات المرموقة',
    'Unprecedented Growth Opportunities': 'فرص نمو غير مسبوقة',
    'Unprecedented growth opportunities in higher education, scientific research, and technology': 'فرص نمو غير مسبوقة في التعليم العالي والبحث العلمي والتقنية',
    'Our Services': 'خدماتنا',
    'Academic Licensing': 'التراخيص الأكاديمية',
    'We support universities in obtaining all types of approved licenses in the Kingdom, including:': 'ندعم الجامعات في الحصول على جميع أنواع التراخيص المعتمدة في المملكة، وتشمل:',
    'License to establish a new university or college': 'ترخيص إنشاء جامعة أو كلية جديدة',
    'License to establish a new branch for an existing university or college within the Kingdom': 'ترخيص إنشاء فرع جديد لجامعة أو كلية قائمة داخل المملكة',
    'License to establish a new branch for a foreign university': 'ترخيص إنشاء فرع جديد لجامعة أجنبية',
    'License to add new academic programs': 'ترخيص إضافة برامج أكاديمية جديدة',
    'We deliver them with high regulatory expertise and ensure full compliance with the requirements of the Ministry of Education and relevant authorities.': 'نُنجزها بخبرة تنظيمية عالية، ونضمن التوافق الكامل مع متطلبات وزارة التعليم والجهات المعنية',
    'Strategic & Feasibility Studies': 'الدراسات الاستراتيجية ودراسات الجدوى',
    'We analyze the Saudi educational market and prepare accurate feasibility studies that reflect real expansion opportunities and guide academic and investment decisions toward the highest possible returns.': 'نحلل السوق التعليمي السعودي ونُعد دراسات جدوى دقيقة تعكس فرص التوسع الحقيقي وتوجّه القرارات الأكاديمية والاستثمارية نحو أعلى مردود ممكن',
    'Campus Design & Setup': 'تصميم وتجهيز المقر الجامعي',
    'We provide comprehensive design and implementation solutions for university campuses, including academic and administrative buildings, laboratories, and innovation centers, ensuring immediate operational readiness according to the highest international standards.': 'نُقدّم حلول تصميم وتنفيذ شاملة للمقرات الجامعية، تشمل المباني الأكاديمية والإدارية والمختبرات ومراكز الابتكار، مع ضمان جاهزية تشغيل فورية وفق أعلى المعايير العالمية',
    'Operations & Institutional Launch': 'التشغيل والإطلاق المؤسسي',
    'We manage the entire launch phase to ensure comprehensive and smooth operation of academic programs, administrative and technical systems, while building an institutional identity compatible with the educational environment in the Kingdom.': 'ندير مرحلة الإطلاق بالكامل لضمان تشغيل متكامل وسلس للبرامج الأكاديمية والأنظمة الإدارية والتقنية، مع بناء هوية مؤسسية متوافقة مع البيئة التعليمية في المملكة',
    'What Sets CALX Apart': 'ما يميز كالكس',
    'Deep Expertise': 'خبرة عميقة',
    'Deep expertise in Saudi higher education systems and requirements': 'خبرة عميقة في أنظمة التعليم العالي السعودية ومتطلباتها',
    'Extensive Network': 'شبكة علاقات واسعة',
    'Extensive network of relationships with government entities and investors': 'شبكة علاقات واسعة مع الجهات الحكومية والمستثمرين',
    'Integrated Solutions': 'حلول متكاملة',
    'Integrated solutions that save time and accelerate establishment and operations': 'حلول متكاملة تختصر الوقت وتُسرّع التأسيس والتشغيل',
    'Quality Commitment': 'التزام بالجودة',
    'Commitment to quality and sustainability standards to ensure long-term success': 'التزام بمعايير الجودة والاستدامة لضمان نجاح طويل الأمد',
    'Our Vision': 'رؤيتنا',
    'To be CALX the trusted partner for global universities in building an effective and sustainable academic presence in the Kingdom of Saudi Arabia.': 'أن تكون كالكس الشريك الموثوق للجامعات العالمية في بناء حضور أكاديمي فاعل ومستدام في المملكة العربية السعودية',
    'Start Your Journey Now': 'ابدأ رحلتك الآن',
    'Join global academic institutions confidently heading to Saudi Arabia, and begin your expansion in a thriving educational environment with promising growth opportunities.': 'انضم إلى المؤسسات الأكاديمية العالمية التي تتجه بثقة نحو السعودية، وابدأ توسّعك في بيئة تعليمية مزدهرة وفرص واعدة للنمو',
    'Contact Us Today': 'تواصل معنا اليوم',
    'Contact': 'التواصل',
    'Location': 'الموقع',
    'Riyadh – Kingdom of Saudi Arabia': 'الرياض – المملكة العربية السعودية',
    'Contact Person': 'للتواصل',
    'Muhammad Abdulfattah': 'محمد عبد الفتاح',
    'Phone': 'الهاتف',
    'Email': 'البريد الإلكتروني',
    '© 2025 CALX – All Rights Reserved': '© 2025 كالكس – جميع الحقوق محفوظة'
};

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    const langToggle = document.getElementById('langToggle');
    
    // Set initial language
    updateContent();
    
    // Language toggle event
    langToggle.addEventListener('click', function() {
        currentLang = currentLang === 'en' ? 'ar' : 'en';
        updateContent();
    });
    
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
        }
    });
    
    // Scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all cards
    document.querySelectorAll('.feature-card, .service-card, .diff-card, .contact-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

function updateContent() {
    const html = document.documentElement;
    const langToggle = document.getElementById('langToggle');
    
    if (currentLang === 'ar') {
        html.setAttribute('lang', 'ar');
        html.setAttribute('dir', 'rtl');
        langToggle.textContent = 'English';
    } else {
        html.setAttribute('lang', 'en');
        html.setAttribute('dir', 'ltr');
        langToggle.textContent = 'العربية';
    }
    
    // Update all elements with data attributes
    document.querySelectorAll('[data-en]').forEach(element => {
        const enText = element.getAttribute('data-en');
        const arText = element.getAttribute('data-ar');
        
        if (currentLang === 'ar' && arText) {
            // For hero blocks, update only the span text
            if (element.classList.contains('hero-block')) {
                const span = element.querySelector('span');
                if (span) {
                    span.textContent = arText;
                }
            } else {
                element.textContent = arText;
            }
        } else if (enText) {
            // For hero blocks, update only the span text
            if (element.classList.contains('hero-block')) {
                const span = element.querySelector('span');
                if (span) {
                    span.textContent = enText;
                }
            } else {
                element.textContent = enText;
            }
        }
    });
}
