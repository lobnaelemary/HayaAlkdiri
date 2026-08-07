import { Project, Service, Certification, WorkflowStep, FAQItem } from '../types';

export const PERSONAL_INFO = {
  nameAr: 'هيا القديري',
  nameEn: 'Haya Alkdiri',
  titleAr: 'مصممة أزياء & أخصائية تصميم 3D',
  titleEn: 'Fashion Designer & 3D Fashion Specialist',
  diplomaAr: 'دبلوم في تقنية الموضة وتصميم الأزياء',
  diplomaEn: 'Diploma in Fashion Technology & Fashion Design',
  uspAr: 'أصمم أزياء تجمع بين الإبداع، الأناقة، والاهتمام بأدق التفاصيل.',
  uspEn: 'Crafting fashion that merges innovation, elegance, and meticulous attention to detail.',
  bioAr: 'أنا هيا القديري، مصممة أزياء حاصلة على دبلوم في تقنية الموضة وتصميم الأزياء. أسعى لتقديم تصاميم مبتكرة تعكس الهوية والجمال بأسلوب عصري، وأهتم بإخراج كل مشروع بأعلى جودة واحترافية.',
  bioEn: 'I am Haya Alkdiri, a fashion designer holding a diploma in Fashion Technology and Garment Design. I strive to deliver innovative designs reflecting identity and beauty with a contemporary approach, ensuring every project achieves the highest standards of luxury and execution.',
  phone: '0549878796',
  formattedPhone: '+966 54 987 8796',
  email: 'hyaalqdyry@gmail.com',
  locationAr: 'المملكة العربية السعودية',
  locationEn: 'Saudi Arabia',
  visionAr: 'أن أكون مصممة أزياء مؤثرة تقدم تصاميم مبتكرة تجمع بين الإبداع والهوية العصرية.',
  visionEn: 'To be an influential fashion designer delivering innovative creations that harmoniously combine creative artistry with modern heritage identity.',
  missionAr: 'تقديم تصاميم عالية الجودة تعبر عن شخصية العميل واهتمامه بالتفاصيل.',
  missionEn: 'Delivering exceptional, high-quality garments that reflect the unique personality of clients with impeccable attention to every detail.',
  whyChooseMe: [
    {
      titleAr: 'اهتمام دقيق بالتفاصيل',
      titleEn: 'Meticulous Attention to Detail',
      descAr: 'دراسة حثيثة للقصات والتطريز ونوعة القماش لضمان الجودة العالية.',
      descEn: 'Rigorous study of cuts, embroidery, and fabric texture ensuring perfection.',
      icon: 'Sparkles'
    },
    {
      titleAr: 'تصاميم مبتكرة ومميزة',
      titleEn: 'Innovative & Unique Concepts',
      descAr: 'دمج تقنيات 3D الحديثة مع الفخامة لخلق قطع استثنائية غير مكررة.',
      descEn: 'Blending modern 3D simulation with luxury to create non-replicated couture.',
      icon: 'Palette'
    },
    {
      titleAr: 'جودة فائقة في التنفيذ',
      titleEn: 'Superior Craft Quality',
      descAr: 'الالتزام بأساليب الحياكة الفاخرة واستخراج الموديل بأعلى النماذج.',
      descEn: 'Adherence to fine tailor craft standards and realistic 3D prototypes.',
      icon: 'Crown'
    },
    {
      titleAr: 'الالتزام الصارم بالمواعيد',
      titleEn: 'Strict Punctuality',
      descAr: 'إدارة الوقت باحترافية لتسليم المشاريع والتصاميم في موعدها المتفق عليه.',
      descEn: 'Professional time management guaranteeing on-time project handover.',
      icon: 'Clock'
    }
  ]
};

export const SKILLS = [
  { nameAr: 'تصميم الأزياء', nameEn: 'Fashion Design', level: 95, category: 'core', icon: 'Scissors' },
  { nameAr: 'التصميم ثلاثي الأبعاد 3D', nameEn: '3D Fashion Simulation', level: 90, category: 'tech', icon: 'Box' },
  { nameAr: 'Fashion Illustration', nameEn: 'Fashion Illustration', level: 92, category: 'art', icon: 'PenTool' },
  { nameAr: 'Procreate', nameEn: 'Procreate Digital Art', level: 88, category: 'tech', icon: 'Tablet' },
  { nameAr: 'Adobe Photoshop', nameEn: 'Adobe Photoshop', level: 85, category: 'tech', icon: 'Image' },
];

export const PROJECTS: Project[] = [
  {
    id: 'olympia',
    titleAr: 'مشروع أوليمبيا ',
    titleEn: 'Olympia Collection',
    subtitleAr: 'مجموعة أزياء فاخرة مستوحاة من العظمة الكلاسيكية الإغريقية',
    subtitleEn: 'Luxury Haute Couture collection inspired by classical Greek grandeur',
    category: '3d-fashion',
    categoryLabelAr: 'تصميم 3D & أزياء راقية',
    categoryLabelEn: '3D Fashion & Haute Couture',
    descriptionAr: 'مشروع أوليمبيا يجسد القوة والأنوثة الكلاسيكية عبر دمج قصات الدرابيه الانسيابية مع زركشات ذهبية فاخرة. تم المحاكاة الكاملة للمشروع بتقنيات 3D لإظهار حركة القماش الحريري وحيوية الثنيات قبل التنفيذ.',
    descriptionEn: 'The Olympia project embodies strength and classic femininity by blending fluid draped cuts with opulent gold accents. Fully simulated in 3D to visualize natural silk motion and pleat dynamics before physical garment creation.',
    conceptAr: 'استوحيت الفكرة من التيجان الذهبية والأعمدة الإغريقية القديمة، حيث تعاود الثنيات الحريرية التشكل في قوالب عصرية تناسب منصات العرض الفاخرة.',
    conceptEn: 'Inspired by golden laurels and ancient classical pillars, fluid silk folds reform into contemporary structures tailored for luxury runways.',
    detailsAr: [
      'محاكاة ثلاثية الأبعاد خامات الحرير والشيفون بتأثير الجاذبية',
      'تطريز يدوي رقمي مستوحى من أوراق الغار الإغريقية الذهبية',
      'دراسة انسيابية الحركة أثناء المشي بدقة 100%'
    ],
    detailsEn: [
      '3D simulation of silk and chiffon under physics gravity',
      'Digital hand-embroidery inspired by golden laurel motifs',
      '100% precision garment drape & runway walk movement study'
    ],
    fabricSwatches: [
      { name: 'حرير رويال بنفسجي', hex: '#6B3B87', texture: 'Silk Satin' },
      { name: 'ذهب أوليمبي مطفي', hex: '#D4AF37', texture: 'Gold Metallic Thread' },
      { name: 'عاجي أوف وايت', hex: '#FAF5EF', texture: 'Organza' }
    ],
    images: [
      {
        url: 'public/assets/img/project/olympia/2.jpg',
        captionAr: 'لوحة التصميم المبدئي والمحاكاة ثلاثية الأبعاد لمشروع أوليمبيا',
        captionEn: 'Initial 3D Fashion simulation render for Olympia project'
      },
      {
        url: 'public/assets/img/project/olympia/1.jpg',
        captionAr: 'عرض تفاصيل التطريز الذهبي وثنيات القماش الحريري',
        captionEn: 'Detailed view of golden thread embroidery & draped silk pleats'
      },
      {
        url: 'public/assets/img/project/olympia/3.jpg',
        captionAr: 'إطلالة عصرية متكاملة على منصة العرض الرقمية',
        captionEn: 'Full contemporary runway look in digital environment'
      }
    ],
    featured: true,
    year: '2025'
  },
  {
    id: 'marabet-al-ezz',
    titleAr: 'مشروع مرابط العز',
    titleEn: 'Marabet Al-Ezz Couture',
    subtitleAr: 'مجموعة أصالة وفخامة مستوحاة من الهوية والخيول العربية الأصيلة',
    subtitleEn: 'Royal couture celebrating Arabian equine heritage and noble prestige',
    category: 'heritage',
    categoryLabelAr: 'تراث & هويّة فاخرة',
    categoryLabelEn: 'Heritage & Royal Couture',
    descriptionAr: 'مشروع مرابط العز هو تكريم فني وثقافي للهيبة والشموخ الذي تتسم به الخيول العربية. تتألق التصاميم بأنسجة المخمل الرويال والأكتاف البارزة المزينة بالمقصب الذهبي الشبيه بالسروج والتجهيزات التراثية الفاخرة.',
    descriptionEn: 'Marabet Al-Ezz is an artistic homage to the majesty and pride of purebred Arabian horses. Featuring structured royal velvet, sharp shoulders, and gold braid embellishments reminiscent of heritage equestrian saddlery.',
    conceptAr: 'استخلاص العناصر البصرية من خطوط القوة في جسم الخيل العربي وألوان الصحراء الدافئة مع دمج شريط السايس والمقصب السعودي.',
    conceptEn: 'Extracting visual cues from the musculature of Arabian horses and warm desert tones, merged with traditional Saudi metallic braid work.',
    detailsAr: [
      'تصميم أكتاف هيكلية بارزة تعبر عن الشموخ والقوة',
      'زركشات بالقصب والأسلاك الذهبية على القماش المخملي الداكن',
      'لوحة ألوان مستوحاة من ليل الصحراء وأصيل الخيل'
    ],
    detailsEn: [
      'Structured shoulder silhouettes representing nobility and power',
      'Gold wire braid embroidery over deep midnight velvet',
      'Color palette drawn from desert night skies and golden steeds'
    ],
    fabricSwatches: [
      { name: 'مخمل ليلي داكن', hex: '#2A1A35', texture: 'Royal Velvet' },
      { name: 'قصب ذهبي سعودي', hex: '#C5A059', texture: 'Gold Zari Braid' },
      { name: 'شيفون صحراوي', hex: '#E2C290', texture: 'Desert Chiffon' }
    ],
    images: [
      {
        url: 'public/assets/img/project/marabet-al-ezz/1.jpg',
        captionAr: 'التصميم الرئيسي لمجموعة مرابط العز بالتركيب الهيكلي',
        captionEn: 'Hero garment design for Marabet Al-Ezz with structured accents'
      },

      {
        url: 'public/assets/img/project/marabet-al-ezz/2.jpg',
        captionAr: 'التصميم الرئيسي لمجموعة مرابط العز بالتركيب الهيكلي',
        captionEn: 'Hero garment design for Marabet Al-Ezz with structured accents'
      },

      {
        url: 'public/assets/img/project/marabet-al-ezz/3.jpg',
        captionAr: 'التصميم الرئيسي لمجموعة مرابط العز بالتركيب الهيكلي',
        captionEn: 'Hero garment design for Marabet Al-Ezz with structured accents'
      },

      {
        url: 'public/assets/img/project/marabet-al-ezz/4.jpg',
        captionAr: 'التصميم الرئيسي لمجموعة مرابط العز بالتركيب الهيكلي',
        captionEn: 'Hero garment design for Marabet Al-Ezz with structured accents'
      },

      {
        url: 'public/assets/img/project/marabet-al-ezz/5.jpg',
        captionAr: 'التصميم الرئيسي لمجموعة مرابط العز بالتركيب الهيكلي',
        captionEn: 'Hero garment design for Marabet Al-Ezz with structured accents'
      },

      {
        url: 'public/assets/img/project/marabet-al-ezz/6.jpg',
        captionAr: 'تفاصيل الخياطة الفاخرة والتطريز بالقصب الذهبي',
        captionEn: 'Fine craftsmanship detail and golden thread embroidery'
      }
    ],
    featured: true,
    year: '2025'
  },
  {
    id: 'majestic-circus',
    titleAr: 'سيرك الماجستيك',
    titleEn: 'Majestic Circus Collection',
    subtitleAr: 'مجموعة أزياء درامية مبتكرة تجمع الجرأة بالأشكال الهندسية الساحرة',
    subtitleEn: 'Avant-garde theatrical fashion merging dramatic volume with geometric art',
    category: 'concept',
    categoryLabelAr: 'تصميم فني درامي (Concept)',
    categoryLabelEn: 'Avant-Garde & Conceptual',
    descriptionAr: 'مجموعة أزياء مسرحية وتجريدية تتحدى المألوف، حيث تم استخدام قصات هندسية حادة وياقات مكشكشة ضخمة تعبر عن بهجة وحيوية السيرك الملكي بلمسة High Fashion عصرية وجريئة.',
    descriptionEn: 'A theatrical and abstract collection breaking conventional bounds, utilizing sharp geometric cuts and exaggerated layered ruffs embodying the wonder of a royal circus rendered in contemporary high fashion.',
    conceptAr: 'تحويل الخدع البصرية والتناغم الأكروباتي إلى طبقات متراكبة من القماش، مع تباين ألوان قوي يشد البصر.',
    conceptEn: 'Translating visual illusions and acrobatic harmony into layered textile folds with striking chromatic contrasts.',
    detailsAr: [
      'ياقات هندسية ثلاثية الأبعاد بخصائص مرونة محاكاة',
      'دمج أقمشة التافتا مع التول المضلع لخلق أشكال متموجة',
      'الرسم التوضيحي الرقمي المباشر عبر Procreate و3D Garment Design'
    ],
    detailsEn: [
      '3D geometric collars with simulated structural flexibility',
      'Merging stiff taffeta with pleated tulle for dramatic wavy shapes',
      'Digital illustration workflow using Procreate and 3D Garment Design'
    ],
    fabricSwatches: [
      { name: 'أرجواني ماجستيك', hex: '#583370', texture: 'Stiff Taffeta' },
      { name: 'أسود فحمي فاخر', hex: '#19131D', texture: 'Plissé Tulle' },
      { name: 'وردي سيرك مياليك', hex: '#D896C7', texture: 'Lurex Metallic' }
    ],
    images: [
      {
        url: 'public/assets/img/project/majestic-circus/1.jpg',
        captionAr: 'مظهر درامي متألق من مجموعة سيرك الماجستيك',
        captionEn: 'Dramatic editorial look from the Majestic Circus collection'
      },
      
      {
        url: 'public/assets/img/project/majestic-circus/2.jpg',
        captionAr: 'مظهر درامي متألق من مجموعة سيرك الماجستيك',
        captionEn: 'Dramatic editorial look from the Majestic Circus collection'
      },
      
      {
        url: 'public/assets/img/project/majestic-circus/3.jpg',
        captionAr: 'مظهر درامي متألق من مجموعة سيرك الماجستيك',
        captionEn: 'Dramatic editorial look from the Majestic Circus collection'
      },
      
      {
        url: 'public/assets/img/project/majestic-circus/4.jpg',
        captionAr: 'مظهر درامي متألق من مجموعة سيرك الماجستيك',
        captionEn: 'Dramatic editorial look from the Majestic Circus collection'
      },
      
      {
        url: 'public/assets/img/project/majestic-circus/5.jpg',
        captionAr: 'لوحة رسم توضيحي رقمي وتجربة الخامات والأبعاد',
        captionEn: 'Digital illustration board experimenting with volume and form'
      }
    ],
    featured: true,
    year: '2024'
  },
  {
    id: 'whispers-of-ivory',
    titleAr: 'همسات العاج | Whispers of Ivory',
    titleEn: 'Whispers of Ivory Collection',
    subtitleAr: 'تشكيلة أزياء سهرة وزفاف راقية باللون العاجي بتطريز لؤلؤي انسيابي',
    subtitleEn: 'High bridal and evening collection in ivory silk and pearl lace',
    category: 'haute-couture',
    categoryLabelAr: 'أزياء سهرة وزفاف',
    categoryLabelEn: 'Bridal & Evening Wear',
    descriptionAr: 'مشروع همسات العاج يعكس النقاوة، الأنوثة، والهدوء الفاخر. تعتمد المجموعة على درجات اللون العاجي والدانتيل المصنوع يدويًا، والمطرز باللؤلؤ والكرستال الدقيق ليعطي مظهراً ملكياً هادئاً وسامياً.',
    descriptionEn: 'Whispers of Ivory exudes purity, grace, and subtle luxury. Built upon shades of ivory silk and handcrafted lace encrusted with delicate pearls and crystals for a serene, regal aesthetic.',
    conceptAr: 'همسات ناعمة من الضوء تنعكس على اللؤلؤ، حيث يمتد ذيل الفستان بانسيابية قطرات الماء.',
    conceptEn: 'Soft whispers of light reflecting on pearls, where gown trains float seamlessly like fluid droplets.',
    detailsAr: [
      'تداخل طبقات الدانتيل الفرنسي مع الحرير الطبيعي العاجي',
      'توزيع يدوي وحسابي لحبيبات اللؤلؤ على الظهر والأكمام',
      'نمذجة 3D ثلاثية الأبعاد لاختبار الانسيابية والمقاسات المثالية'
    ],
    detailsEn: [
      'Layering French lace with pure ivory silk satin',
      'Hand and calculated placement of pearls along the spine and sleeves',
      '3D modeling to test drape, fit, and movement'
    ],
    fabricSwatches: [
      { name: 'عاجي ملكي', hex: '#FFFBF5', texture: 'Pure Silk Satin' },
      { name: 'دانتيل فرنسي مطرز', hex: '#F7F0E6', texture: 'Chantilly Lace' },
      { name: 'لؤلؤ طبيعي', hex: '#EBE5D8', texture: 'Pearl Embellishment' }
    ],
    images: [
      {
        url: 'public/assets/img/project/whispers-of-ivory/1.jpg',
        captionAr: 'فستان سهرة عاجي متألق من مجموعة همسات العاج',
        captionEn: 'Breathtaking ivory evening gown from Whispers of Ivory'
      },

      {
        url: 'public/assets/img/project/whispers-of-ivory/2.jpg',
        captionAr: 'فستان سهرة عاجي متألق من مجموعة همسات العاج',
        captionEn: 'Breathtaking ivory evening gown from Whispers of Ivory'
      },

      {
        url: 'public/assets/img/project/whispers-of-ivory/3.jpg',
        captionAr: 'فستان سهرة عاجي متألق من مجموعة همسات العاج',
        captionEn: 'Breathtaking ivory evening gown from Whispers of Ivory'
      },

      {
        url: 'public/assets/img/project/whispers-of-ivory/4.jpg',
        captionAr: 'فستان سهرة عاجي متألق من مجموعة همسات العاج',
        captionEn: 'Breathtaking ivory evening gown from Whispers of Ivory'
      },

      {
        url: 'public/assets/img/project/whispers-of-ivory/5.jpg',
        captionAr: 'تفاصيل تطريز اللؤلؤ والدانتيل على قماش الحرير',
        captionEn: 'Close-up on hand-embroidered pearls and delicate lace'
      }
    ],
    featured: true,
    year: '2024'
  }
];

export const SERVICES: Service[] = [
  {
    id: 'collection-design',
    titleAr: 'تصميم وتطوير مجموعات الأزياء',
    titleEn: 'Fashion Collection Development',
    descAr: 'ابتكار مفاهيم وتصاميم متكاملة للمجموعات الموسمية أو الخاصة بدءاً من المودبورد وحتى الرسوم النهائية.',
    descEn: 'Creating complete seasonal or capsule collection concepts from moodboards to production specs.',
    pricingAr: 'حسب متطلبات وحجم المشروع',
    pricingEn: 'Tailored to project scope',
    icon: 'Layers',
    featuresAr: [
      'بناء فكرة وفلسفة المجموعة (Moodboard)',
      'توفير الرسوم التوضيحية وتحديد الأقمشة',
      'مخطط الخياطة والمواصفات الفنية'
    ],
    featuresEn: [
      'Moodboard & theme philosophy creation',
      'Fashion illustrations & fabric sourcing recommendations',
      'Technical tech-pack & seam specifications'
    ]
  },
  {
    id: '3d-garment-simulation',
    titleAr: 'التصميم ثلاثي الأبعاد والمحاكاة الرقمية',
    titleEn: '3D Garment Simulation & Prototyping',
    descAr: 'تحويل الأفكار والرسومات إلى تصاميم 3D تفاعلية واقعية تجسد انسيابية القماش والمقاسات قبل التنفيذ الفعلي.',
    descEn: 'Transforming sketches into photorealistic 3D garmin visualizers, testing fabric drape & fit beforehand.',
    pricingAr: 'يبدأ حسب تفاصيل وتعقيد القطعة',
    pricingEn: 'Starts based on garment complexity',
    icon: 'Box',
    featuresAr: [
      'محاكاة القماش وحركته بالفيزياء ثلاثية الأبعاد',
      'معاينة القطعة 360 درجة وتقليل التكلفة والهدر',
      'توفير صور وفيديوهات عالية الجودة للعرض'
    ],
    featuresEn: [
      'Physics-based fabric motion simulation',
      '360-degree virtual garment fitting reducing fabric waste',
      'High-resolution render output for marketing & presentations'
    ]
  },
  {
    id: 'fashion-illustration',
    titleAr: 'الرسم التوضيحي ولوحات الإلهام',
    titleEn: 'Fashion Illustration & Concept Art',
    descAr: 'رسومات توضيحية رقمية فاخرة تبرز تفاصيل القماش والتطريز بأسلوب فني مبهر يستعرض روح الموديل.',
    descEn: 'High-end digital illustrations highlighting drape, embroidery, and textures for editorials & presentations.',
    pricingAr: 'مرن حسب عدد الإطلالات',
    pricingEn: 'Flexible per look/illustration',
    icon: 'PenTool',
    featuresAr: [
      'رسومات رقمية بدقة عالية عبر Procreate & Photoshop',
      'توضيح التفاصيل الدقيقة للتطريز والإكسسوارات',
      'تسليم الملفات بصيغ جاهزة للطباعة والعرض'
    ],
    featuresEn: [
      'High-res digital artwork via Procreate & Photoshop',
      'Clear embroidery and embellishment callouts',
      'Ready-to-print vector/raster format files'
    ]
  },
  {
    id: 'fashion-consulting',
    titleAr: 'الاستشارات وتنسيق الإطلالات الخاصة',
    titleEn: 'Fashion Consulting & Custom Styling',
    descAr: 'تقديم استشارات مخصصة لتطوير القطع الحصرية للمناسبات الراقية بما يتناسب مع شخصية العميل.',
    descEn: 'Tailored design consultation for bespoke high-fashion garments aligned with client identity.',
    pricingAr: 'استشارة مخصصة',
    pricingEn: 'Custom consultation session',
    icon: 'Sparkles',
    featuresAr: [
      'تحليل الهوية الشخصية وتحديد الأسلوب الأنسب',
      'اختيار الألوان والأقمشة المناسبة للشكل والقصة',
      'متابعة التعديلات لضمان الجودة المثالية'
    ],
    featuresEn: [
      'Personal identity & style silhouette analysis',
      'Color palette & fabric selection for client skin tone and posture',
      'Step-by-step guidance for perfect fitting'
    ]
  }
];

export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    step: 1,
    titleAr: 'فهم الفكرة والتحليل',
    titleEn: 'Concept & Brief Understanding',
    descAr: 'جلسة استكشافية لفهم رؤية العميل، تطلعات المشروع، تحديد الهوية والاتجاه الفني العام.',
    descEn: 'Exploratory session to outline client vision, project requirements, and artistic direction.',
    icon: 'Search'
  },
  {
    step: 2,
    titleAr: 'التصميم المبدئي والمحاكاة 3D',
    titleEn: 'Drafting & 3D Garment Simulation',
    descAr: 'ترجمة الفكرة إلى رسم توضيحي ونموذج ثلاثي الأبعاد تفاعلي يعرض الشكل الواقعي والانسيابية.',
    descEn: 'Translating concepts into fashion illustrations & photorealistic 3D Garment simulations.',
    icon: 'Compass'
  },
  {
    step: 3,
    titleAr: 'المراجعة والتعديلات الدقيقة',
    titleEn: 'Review & Fine Refinements',
    descAr: 'عرض النموذج على العميل وأخذ الملاحظات وإجراء التعديلات الدقيقة على التفاصيل والألوان.',
    descEn: 'Presenting the digital model, gathering feedback, and perfecting details and color tones.',
    icon: 'Sliders'
  },
  {
    step: 4,
    titleAr: 'التسليم النهائي وتجهيز الملفات',
    titleEn: 'Final Delivery & Technical Handover',
    descAr: 'تسليم الملفات الكاملة، التصاميم ثلاثية الأبعاد عالية الدقة، والمواصفات الجاهزة للتنفيذ.',
    descEn: 'Handing over complete production files, 3D high-res renders, and technical spec-sheets.',
    icon: 'CheckCircle2'
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'diploma-fashion-tech',
    titleAr: 'دبلوم تقنية الموضة وتصميم الأزياء',
    titleEn: 'Diploma in Fashion Technology & Garment Design',
    categoryAr: 'مؤهل أكاديمي رئيسي',
    categoryEn: 'Main Academic Qualification',
    isMain: true,
    icon: 'GraduationCap'
  },
  {
    id: 'cert-3d-fashion',
    titleAr: 'شهادة احترافية في تصميم الأزياء ثلاثي الأبعاد (3D Fashion Design)',
    titleEn: 'Certified 3D Fashion Design Specialist',
    categoryAr: 'تخصص تقني متقدم',
    categoryEn: 'Advanced Tech Specialization',
    isMain: true,
    icon: 'Box'
  },
  {
    id: 'cert-dev-best-practices',
    titleAr: 'أفضل الممارسات لاشتراك المطورين والمصممين',
    titleEn: 'Best Practices for Developer & Designer Collaboration',
    categoryAr: 'إدارة وتطوير',
    categoryEn: 'Management & Dev',
    isMain: false,
    icon: 'Code'
  },
  {
    id: 'cert-procurement',
    titleAr: 'إدارة المشتريات وأصحاب مصلحة المشروع',
    titleEn: 'Procurement Management & Project Stakeholders',
    categoryAr: 'إدارة وتخطيط',
    categoryEn: 'Management & Operations',
    isMain: false,
    icon: 'Briefcase'
  },
  {
    id: 'cert-entrepreneurship',
    titleAr: 'العقلية الريادية وإدارة الأزمات',
    titleEn: 'Entrepreneurial Mindset & Crisis Management',
    categoryAr: 'قيادة واستراتيجية',
    categoryEn: 'Leadership Strategy',
    isMain: false,
    icon: 'Lightbulb'
  },
  {
    id: 'cert-presentations',
    titleAr: 'إعداد العروض التقديمية الاحترافية',
    titleEn: 'Professional Presentation Preparation',
    categoryAr: 'مهارات العرض والتواصل',
    categoryEn: 'Communication Skills',
    isMain: false,
    icon: 'Presentation'
  },
  {
    id: 'cert-cv-interview',
    titleAr: 'إعداد السيرة الذاتية واجتياز المقابلات الشخصية',
    titleEn: 'Resume Crafting & Interview Mastery',
    categoryAr: 'تطوير مهني',
    categoryEn: 'Career Development',
    isMain: false,
    icon: 'FileText'
  },
  {
    id: 'cert-career-planning',
    titleAr: 'المستقبل المهني بين القلق والتخطيط الاستراتيجي',
    titleEn: 'Career Future: From Anxiety to Strategic Planning',
    categoryAr: 'تخطيط مهني',
    categoryEn: 'Strategic Career Planning',
    isMain: false,
    icon: 'Compass'
  },
  {
    id: 'cert-networking',
    titleAr: 'بناء العلاقات المهنية والشبكات الاحترافية',
    titleEn: 'Professional Networking & Relationship Building',
    categoryAr: 'علاقات عامة',
    categoryEn: 'Professional Networking',
    isMain: false,
    icon: 'Users'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    questionAr: 'كيف أطلب خدمة تصميم أزياء أو محاكاة 3D؟',
    questionEn: 'How do I place a request for a design or 3D simulation?',
    answerAr: 'يمكنك البدء بسهولة عبر ملء نموذج التواصل أسفل الصفحة مع اختيار نوع الخدمة والميزانية المتوقعة، أو التواصل المباشر عبر الواتساب على الرقم (0549878796) أو البريد الإلكتروني. سنقوم بترتيب جلسة مناقشة أولية لفهم كافة التفاصيل.',
    answerEn: 'You can easily request a service by filling out the contact form below, choosing your required service and budget, or directly contacting via WhatsApp (+966 54 987 8796) or email. We will schedule an initial briefing session.',
    categoryAr: 'الطلبات والبدء'
  },
  {
    id: 'faq-2',
    questionAr: 'كم تبلغ مدة تنفيذ المشروع عادةً؟',
    questionEn: 'What is the typical turnaround timeframe for a project?',
    answerAr: 'تختلف المدة بحسب حجم وتفاصيل المشروع: الرسوم التوضيحية وتصاميم القطع الفردية تستغرق عادة من 3 إلى 5 أيام عمل، بينما المجموعات الكاملة أو التصاميم ثلاثية الأبعاد المعقدة تتراوح بين 7 إلى 14 يوم عمل. ويتم الاتفاق على الموعد النهائي بدقة قبل البدء.',
    answerEn: 'Timeframes depend on scope: single garment illustrations take 3-5 business days, while full collections or complex 3D fashion simulations range from 7-14 business days. Exact deadlines are agreed upon beforehand.',
    categoryAr: 'المواعيد والتنفيذ'
  },
  {
    id: 'faq-3',
    questionAr: 'هل يتوفر تعديل على التصاميم المعتمدة؟',
    questionEn: 'Are revisions included in the design workflow?',
    answerAr: 'نعم بالتأكيد! نحرص على تقديم مرحلة مراجعة مخصصة نتيح فيها جولات من التعديلات الدقيقة على الألوان والقصات أو خطوط التطريز لضمان مطابقة التصميم النهائي لرؤيتك بنسبة 100%.',
    answerEn: 'Yes, absolutely! We include dedicated review cycles allowing precise adjustments to colors, cuts, and embroidery paths to ensure 100% alignment with your vision.',
    categoryAr: 'التعديلات والجودة'
  },
  {
    id: 'faq-4',
    questionAr: 'كيف يتم تسليم ومشاركة المخرجات للعميل؟',
    questionEn: 'How are final deliverables handed over to the client?',
    answerAr: 'يتم تسليم الملفات بصيغ رقمية عالية الجودة (PNG, PDF, 3D Garment formats, OBJ/FBX أو ملفات المصدر حسب الطلب) عبر روابط سحابية آمنة ومحمية قابلة للتحميل مباشرة.',
    answerEn: 'Deliverables are provided in high-resolution digital formats (PNG, PDF, 3D Garment formats, OBJ/FBX, or source files as requested) via secure cloud download links.',
    categoryAr: 'التسليم والملفات'
  }
];
