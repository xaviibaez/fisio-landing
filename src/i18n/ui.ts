export const languages = {
  ca: 'Català',
  es: 'Español',
  en: 'English',
};

export const defaultLang = 'ca';

export type LangKey = keyof typeof languages;

export const ui = {
  ca: {
    'nav.services': 'Serveis',
    'nav.about': 'Centre',
    'nav.aboutUs': 'Nosaltres',
    'nav.blog': 'Blog',
    'nav.contact': 'Contacte',
    'nav.opinions': 'Opinions',
    'nav.bookAppointment': 'Reservar Cita',
    
    // Hero
    'hero.title': 'El vostre Centre de Fisioteràpia a Cambrils',
    'hero.subtitle': `Al centre Axis trobaràs  el tractament més adequat per a tu.`,
    'hero.cta': 'Reservar Cita',
    
    // Services
    'services.title': 'La salut, en bones mans',
    'services.subtitle': `El nostre equip de fisioterapeutes formats/es i amb experiència t'oferiran els millors tractaments, de manera individualitzada.`,
    'services.viewAll': 'Veure tots els serveis',
    'services.viewLess': 'Veure menys',
    
    // What is Physiotherapy
    'whatIs.title': 'Què és la Fisioteràpia?',
    'whatIs.description': 'És una disciplina de la salut que s\'enfoca a prevenir, tractar i rehabilitar problemes físics i funcionals del cos humà. Els fisioterapeutes utilitzem una varietat de tècniques i modalitats per ajudar els pacients a recuperar o millorar el seu moviment i funció, alleujar el dolor i millorar la seva qualitat de vida.',
    'whatIs.conditions.title': 'Algunes de les condicions en què la fisioteràpia pot ser beneficiosa:',
    'whatIs.conditions.musculoskeletal': 'Lesions musculoesquelètiques',
    'whatIs.conditions.postop': 'Rehabilitació postoperatòria',
    'whatIs.conditions.neurological': 'Problemes neurològics',
    'whatIs.conditions.chronic': 'Dolor crònic',
    'whatIs.conditions.respiratory': 'Problemes respiratoris',
    'whatIs.conditions.sports': 'Lesions esportives',
    'whatIs.techniques': 'Utilitzem una varietat de tècniques: exercicis terapèutics, teràpia manual, electroteràpia, massatge, estiraments i modalitats de calor o fred. El tractament s\'adapta a les necessitats individuals de cada pacient.',

    // Service Pages
    'service.benefits': 'Beneficis',
    'service.process': 'Com funciona?',
    'service.duration': 'Durada',
    'service.price': 'Preu',
    'service.faqs': 'Preguntes Freqüents',
    'service.gallery': 'Galeria d\'imatges',
    'service.viewAll': 'Veure Tots els Serveis',
    
    // About
    'about.title': 'Per què triar-nos?',
    'about.subtitle': "L'Axis és un centre de fisioteràpia situat al casc antic de Cambrils. Som un equip de fisioterapeutes formats i amb experiència, compromesos amb la teva recuperació.",
    'about.intro': 'El centre disposa d\'unes còmodes instal·lacions totalment equipades per poder realitzar cada una de les nostres especialitats.',
    'about.professionals.title': 'Equip Expert',
    'about.professionals.description': 'Fisioterapeutes col·legiats amb formació contínua i especialitzada en diverses tècniques.',
    'about.technology.title': 'Instal·lacions Equipades',
    'about.technology.description': 'Còmodes instal·lacions amb equipament d\'última generació per a cada especialitat.',
    'about.personalized.title': 'Tractament Individualitzat',
    'about.personalized.description': 'Realitzem el tractament que més us convingui de manera totalment personalitzada.',
    'about.values.title': 'Els Nostres Valors',
    'about.values.excellence': 'Excel·lència:',
    'about.values.excellenceText': 'Compromís amb la qualitat en cada tractament',
    'about.values.empathy': 'Empatia:',
    'about.values.empathyText': 'Escoltem i entenem les teves necessitats',
    'about.values.innovation': 'Innovació:',
    'about.values.innovationText': 'Formació constant en noves tècniques',
    'about.values.results': 'Resultats:',
    'about.values.resultsText': 'La teva recuperació és el nostre objectiu',

    // Gallery
    'gallery.title': 'El Nostre Centre',
    'gallery.subtitle': 'Coneix les nostres instal·lacions',
    'gallery.viewAll': 'Veure totes les fotos',
    'gallery.pageTitle': 'Galeria del Centre',
    'gallery.pageSubtitle': 'Descobreix les nostres instal·lacions modernes i equipades amb la millor tecnologia per al teu tractament.',
    'gallery.cta.title': 'Vine a conèixer-nos!',
    'gallery.cta.subtitle': 'Reserva la teva cita i descobreix personalment les nostres instal·lacions.',
    'gallery.cta.button': 'Reservar Cita',
    
    // Blog
    'blog.title': 'Consells de Salut',
    'blog.subtitle': 'Articles escrits pel nostre equip de fisioterapeutes',
    'blog.readMore': 'Llegir més',
    'blog.viewAll': 'Veure Tots els Articles',
    'blog.noArticles': 'No hi ha blogs',
    'blog.backToHome': 'Tornar al inici',
    'blog.cta.title': 'Necessites ajuda professional?',
    'blog.cta.subtitle': 'Agenda la teva cita amb el nostre equip d\'especialistes.',

    '404.title': 'Pàgina no trobada',
    '404.message': 'La pàgina que cerques no existeix, s\'ha mogut o l\'enllaç és incorrecte.',
    '404.backHome': 'Tornar a l\'inici',
    
    // Categories
    'category.todos': 'Tots',
    'category.deportiva': 'esportiva',
    'category.traumatologica': 'traumatològica',
    'category.neurologica': 'neurològica',
    'category.pediatrica': 'pediàtrica',
    
    // Testimonials
    'testimonials.title': 'El Que Diuen els Nostres Pacients',
    'testimonials.patient1.text': 'Excel·lent tracte i professionalitat. Després de mesos amb dolor lumbar, he aconseguit recuperar la meva qualitat de vida gràcies a l\'equip d\'Axis Cambrils.',
    'testimonials.patient1.name': 'Maria Carmen R.',
    'testimonials.patient1.info': 'Pacient des de 2024',
    'testimonials.patient2.text': 'Com a corredor, les lesions són freqüents. La fisioteràpia esportiva d\'Axis m\'ha ajudat a prevenir problemes i a recuperar-me ràpid quan apareixen.',
    'testimonials.patient2.name': 'Jordi S.',
    'testimonials.patient2.info': 'Atleta Amateur',
    'testimonials.patient3.text': 'Instal·lacions modernes, personal atent i resultats visibles des de les primeres sessions. Totalment recomanable.',
    'testimonials.patient3.name': 'Ana G.',
    'testimonials.patient3.info': 'Post-Operatori Genoll',
    
    // Contact
    'contact.title': 'Contacta amb Nosaltres',
    'contact.subtitle': 'Som aquí per ajudar-te. Reserva la teva cita o consulta\'ns qualsevol dubte.',
    'contact.form.title': 'Envia\'ns un Missatge',
    'contact.form.name': 'Nom Complet',
    'contact.form.namePlaceholder': 'El teu nom',
    'contact.form.email': 'Email',
    'contact.form.emailPlaceholder': 'el.teu@email.com',
    'contact.form.phone': 'Telèfon',
    'contact.form.phonePlaceholder': '+34 600 000 000',
    'contact.form.message': 'Missatge',
    'contact.form.messagePlaceholder': 'Explica\'ns com podem ajudar-te...',
    'contact.form.submit': 'Enviar Missatge',
    'contact.info.title': 'Informació de Contacte',
    'contact.info.address': 'Adreça',
    'contact.info.phone': 'Telèfon',
    'contact.info.email': 'Email',
    'contact.info.whatsapp': 'WhatsApp',
    'contact.info.schedule': 'Horari',
    'contact.info.scheduleText': 'De Dilluns a Divendres de 9h a 21h',
    'contact.info.whatsappText': 'Escriu-nos per WhatsApp',
    'contact.map': 'Mapa d\'Ubicació',
    'thanks.title': 'Missatge enviat',
    'thanks.message': 'Gràcies per contactar-nos. Hem rebut el teu missatge i et respondrem el més aviat possible.',
    'thanks.backHome': 'Tornar a l\'inici',

    // Cookies
    'cookies.title': 'Utilitzem cookies',
    'cookies.message': 'Utilitzem cookies per millorar la teva experiència i serveis com Google Maps.',
    'cookies.accept': '✓ Acceptar tot',
    'cookies.reject': 'Només essencials',
    
    // Footer
    'footer.description': 'Centre de Fisioteràpia especialitzat en recuperació, prevenció i benestar. La teva salut és la nostra prioritat.',
    'footer.links': 'Enllaços',
    'footer.contact': 'Contacte',
    'footer.rights': 'Tots els drets reservats.',
    
    // About Us Page
    'aboutUs.team.title': 'El Nostre Equip',
    'aboutUs.team.subtitle': 'Professionals compromesos amb la teva salut',
    'aboutUs.team.education': 'Formació Acadèmica',
    'aboutUs.team.courses': 'Cursos de Formació',
    'aboutUs.cta.title': 'Vols conèixer-nos?',
    'aboutUs.cta.subtitle': 'Reserva la teva cita i descobreix per què som el centre de fisioterapèutic de confiança a Cambrils.',
  },
  es: {
    'nav.services': 'Servicios',
    'nav.about': 'Centro',
    'nav.aboutUs': 'Nosotros',
    'nav.blog': 'Blog',
    'nav.contact': 'Contacto',
    'nav.opinions': 'Opiniones',
    'nav.bookAppointment': 'Reservar Cita',
    
    // Hero
    'hero.title': 'Tu Centro de Fisioterapia en Cambrils',
    'hero.subtitle': 'En el centro Axis encontrarás el tratamiento más adecuado para ti.',
    'hero.cta': 'Reservar Cita',
    
    // Services
    'services.title': 'La salud, en buenas manos',
    'services.subtitle': 'Nuestro equipo de fisioterapeutas formados y con experiencia te ofrecerán los mejores tratamientos, de manera individualizada.',
'services.viewAll': 'Ver todos los servicios',
    'services.viewLess': 'Ver menos',
    
    // What is Physiotherapy
    'whatIs.title': '¿Qué es la Fisioterapia?',
    'whatIs.description': 'Es una disciplina de la salud que se enfoca en prevenir, tratar y rehabilitar problemas físicos y funcionales del cuerpo humano. Los fisioterapeutas utilizamos una variedad de técnicas y modalidades para ayudar a los pacientes a recuperar o mejorar su movimiento y función, aliviar el dolor y mejorar su calidad de vida.',
    'whatIs.conditions.title': 'Algunas de las condiciones en las que la fisioterapia puede ser beneficiosa:',
    'whatIs.conditions.musculoskeletal': 'Lesiones musculoesqueléticas',
    'whatIs.conditions.postop': 'Rehabilitación postoperatoria',
    'whatIs.conditions.neurological': 'Problemas neurológicos',
    'whatIs.conditions.chronic': 'Dolor crónico',
    'whatIs.conditions.respiratory': 'Problemas respiratorios',
    'whatIs.conditions.sports': 'Lesiones deportivas',
    'whatIs.techniques': 'Utilizamos una variedad de técnicas: ejercicios terapéuticos, terapia manual, electroterapia, masaje, estiramientos y modalidades de calor o frío. El tratamiento se adapta a las necesidades individuales de cada paciente.',

    // Service Pages
    'service.benefits': 'Beneficios',
    'service.process': '¿Cómo funciona?',
    'service.duration': 'Duración',
    'service.price': 'Precio',
    'service.faqs': 'Preguntas Frecuentes',
    'service.gallery': 'Galería de imágenes',
    'service.viewAll': 'Ver Todos los Servicios',
    
    // About
    'about.title': '¿Por qué elegirnos?',
    'about.subtitle': 'Axis es un centro de fisioterapia situado en el casco antiguo de Cambrils. Somos un equipo de fisioterapeutas formados y con experiencia, comprometidos con tu recuperación.',
    'about.intro': 'El centro dispone de unas cómodas instalaciones totalmente equipadas para poder realizar cada una de nuestras especialidades.',
    'about.professionals.title': 'Equipo Experto',
    'about.professionals.description': 'Fisioterapeutas colegiados con formación continua y especializada en diversas técnicas.',
    'about.technology.title': 'Instalaciones Equipadas',
    'about.technology.description': 'Cómodas instalaciones con equipamiento de última generación para cada especialidad.',
    'about.personalized.title': 'Tratamiento Individualizado',
    'about.personalized.description': 'Realizamos el tratamiento que más te convenga de manera totalmente personalizada.',
    'about.values.title': 'Nuestros Valores',
    'about.values.excellence': 'Excelencia:',
    'about.values.excellenceText': 'Compromiso con la calidad en cada tratamiento',
    'about.values.empathy': 'Empatía:',
    'about.values.empathyText': 'Escuchamos y comprendemos tus necesidades',
    'about.values.innovation': 'Innovación:',
    'about.values.innovationText': 'Formación constante en nuevas técnicas',
    'about.values.results': 'Resultados:',
    'about.values.resultsText': 'Tu recuperación es nuestro objetivo',

    // Gallery
    'gallery.title': 'Nuestro Centro',
    'gallery.subtitle': 'Conoce nuestras instalaciones',
    'gallery.viewAll': 'Ver todas las fotos',
    'gallery.pageTitle': 'Galería del Centro',
    'gallery.pageSubtitle': 'Descubre nuestras instalaciones modernas y equipadas con la mejor tecnología para tu tratamiento.',
    'gallery.cta.title': '¡Ven a conocernos!',
    'gallery.cta.subtitle': 'Reserva tu cita y descubre personalmente nuestras instalaciones.',
    'gallery.cta.button': 'Reservar Cita',
    
    // Blog
    'blog.title': 'Consejos de Salud',
    'blog.subtitle': 'Artículos escritos por nuestro equipo de fisioterapeutas',
    'blog.readMore': 'Leer más',
    'blog.viewAll': 'Ver Todos los Artículos',
    'blog.noArticles': 'No hay blogs',
    'blog.backToHome': 'Volver al inicio',
    'blog.cta.title': '¿Necesitas ayuda profesional?',
    'blog.cta.subtitle': 'Agenda tu cita con nuestro equipo de especialistas.',

    '404.title': 'Página no encontrada',
    '404.message': 'La página que buscas no existe, se ha movido o el enlace es incorrecto.',
    '404.backHome': 'Volver al inicio',
    
    // Categories
    'category.todos': 'Todos',
    'category.deportiva': 'deportiva',
    'category.traumatologica': 'traumatológica',
    'category.neurologica': 'neurológica',
    'category.pediatrica': 'pediátrica',
    
    // Testimonials
    'testimonials.title': 'Lo Que Dicen Nuestros Pacientes',
    'testimonials.patient1.text': 'Excelente trato y profesionalidad. Después de meses con dolor lumbar, he conseguido recuperar mi calidad de vida gracias al equipo de Axis Cambrils.',
    'testimonials.patient1.name': 'María Carmen R.',
    'testimonials.patient1.info': 'Paciente desde 2024',
    'testimonials.patient2.text': 'Como corredor, las lesiones son frecuentes. La fisioterapia deportiva de Axis me ha ayudado a prevenir problemas y a recuperarme rápido cuando aparecen.',
    'testimonials.patient2.name': 'Jordi S.',
    'testimonials.patient2.info': 'Atleta Amateur',
    'testimonials.patient3.text': 'Instalaciones modernas, personal atento y resultados visibles desde las primeras sesiones. Totalmente recomendable.',
    'testimonials.patient3.name': 'Ana G.',
    'testimonials.patient3.info': 'Post-Operatorio Rodilla',
    
    // Contact
    'contact.title': 'Contacta con Nosotros',
    'contact.subtitle': 'Estamos aquí para ayudarte. Reserva tu cita o consúltanos cualquier duda.',
    'contact.form.title': 'Envíanos un Mensaje',
    'contact.form.name': 'Nombre Completo',
    'contact.form.namePlaceholder': 'Tu nombre',
    'contact.form.email': 'Email',
    'contact.form.emailPlaceholder': 'tu@email.com',
    'contact.form.phone': 'Teléfono',
    'contact.form.phonePlaceholder': '+34 600 000 000',
    'contact.form.message': 'Mensaje',
    'contact.form.messagePlaceholder': 'Cuéntanos cómo podemos ayudarte...',
    'contact.form.submit': 'Enviar Mensaje',
    'contact.info.title': 'Información de Contacto',
    'contact.info.address': 'Dirección',
    'contact.info.phone': 'Teléfono',
    'contact.info.email': 'Email',
    'contact.info.whatsapp': 'WhatsApp',
    'contact.info.schedule': 'Horario',
    'contact.info.scheduleText': 'De Lunes a Viernes de 9h a 21h',
    'contact.info.whatsappText': 'Escríbenos por WhatsApp',
    'contact.map': 'Mapa de Ubicación',
    'thanks.title': 'Mensaje enviado',
    'thanks.message': 'Gracias por contactarnos. Hemos recibido tu mensaje y te responderemos lo antes posible.',
    'thanks.backHome': 'Volver al inicio',

    // Cookies
    'cookies.title': 'Utilizamos cookies',
    'cookies.message': 'Utilizamos cookies para mejorar tu experiencia y servicios como Google Maps.',
    'cookies.accept': '✓ Aceptar todo',
    'cookies.reject': 'Solo esenciales',
    
    // Footer
    'footer.description': 'Centro de Fisioterapia especializado en recuperación, prevención y bienestar. Tu salud es nuestra prioridad.',
    'footer.links': 'Enlaces',
    'footer.contact': 'Contacto',
    'footer.rights': 'Todos los derechos reservados.',
    
    // About Us Page
    'aboutUs.team.title': 'Nuestro Equipo',
    'aboutUs.team.subtitle': 'Profesionales comprometidos con tu salud',
    'aboutUs.team.education': 'Formación Académica',
    'aboutUs.team.courses': 'Cursos de Formación',
    'aboutUs.cta.title': '¿Quieres conocernos?',
    'aboutUs.cta.subtitle': 'Reserva tu cita y descubre por qué somos el centro de fisioterapia de confianza en Cambrils.',
  },
  en: {
    'nav.services': 'Services',
    'nav.about': 'Center',
    'nav.aboutUs': 'About Us',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    'nav.opinions': 'Opinions',
    'nav.bookAppointment': 'Book Appointment',
    
    // Hero
    'hero.title': 'Your Physiotherapy Center in Cambrils',
    'hero.subtitle': 'At Axis center you will find the most suitable treatment for you.',
    'hero.cta': 'Book Appointment',
    
    // Services
    'services.title': 'Health in Good Hands',
    'services.subtitle': 'Our team of trained and experienced physiotherapists will offer you the best treatments, individually tailored.',
'services.viewAll': 'View all services',
    'services.viewLess': 'View less',
    
    // What is Physiotherapy
    'whatIs.title': 'What is Physiotherapy?',
    'whatIs.description': 'It is a health discipline that focuses on preventing, treating and rehabilitating physical and functional problems of the human body. Physiotherapists use a variety of techniques and modalities to help patients recover or improve their movement and function, relieve pain and improve their quality of life.',
    'whatIs.conditions.title': 'Some of the conditions where physiotherapy can be beneficial:',
    'whatIs.conditions.musculoskeletal': 'Musculoskeletal injuries',
    'whatIs.conditions.postop': 'Post-operative rehabilitation',
    'whatIs.conditions.neurological': 'Neurological problems',
    'whatIs.conditions.chronic': 'Chronic pain',
    'whatIs.conditions.respiratory': 'Respiratory problems',
    'whatIs.conditions.sports': 'Sports injuries',
    'whatIs.techniques': 'We use a variety of techniques: therapeutic exercises, manual therapy, electrotherapy, massage, stretching and heat or cold modalities. Treatment is tailored to the individual needs of each patient.',

    // Service Pages
    'service.benefits': 'Benefits',
    'service.process': 'How does it work?',
    'service.duration': 'Duration',
    'service.price': 'Price',
    'service.faqs': 'Frequently Asked Questions',
    'service.gallery': 'Image gallery',
    'service.viewAll': 'View All Services',
    
    // About
    'about.title': 'Why choose us?',
    'about.subtitle': 'Axis is a physiotherapy center located in the old town of Cambrils. We are a team of trained and experienced physiotherapists, committed to your recovery.',
    'about.intro': 'The center has comfortable facilities fully equipped to perform each of our specialties.',
    'about.professionals.title': 'Expert Team',
    'about.professionals.description': 'Licensed physiotherapists with continuous and specialized training in various techniques.',
    'about.technology.title': 'Equipped Facilities',
    'about.technology.description': 'Comfortable facilities with state-of-the-art equipment for each specialty.',
    'about.personalized.title': 'Individualized Treatment',
    'about.personalized.description': 'We provide the treatment that best suits you in a completely personalized way.',
    'about.values.title': 'Our Values',
    'about.values.excellence': 'Excellence:',
    'about.values.excellenceText': 'Commitment to quality in every treatment',
    'about.values.empathy': 'Empathy:',
    'about.values.empathyText': 'We listen and understand your needs',
    'about.values.innovation': 'Innovation:',
    'about.values.innovationText': 'Constant training in new techniques',
    'about.values.results': 'Results:',
    'about.values.resultsText': 'Your recovery is our goal',

    // Gallery
    'gallery.title': 'Our Center',
    'gallery.subtitle': 'Discover our facilities',
    'gallery.viewAll': 'View all photos',
    'gallery.pageTitle': 'Center Gallery',
    'gallery.pageSubtitle': 'Discover our modern facilities equipped with the best technology for your treatment.',
    'gallery.cta.title': 'Come visit us!',
    'gallery.cta.subtitle': 'Book your appointment and discover our facilities in person.',
    'gallery.cta.button': 'Book Appointment',
    
    // Blog
    'blog.title': 'Health Tips',
    'blog.subtitle': 'Articles written by our team of physiotherapists',
    'blog.readMore': 'Read more',
    'blog.viewAll': 'View All Articles',
    'blog.noArticles': 'No blogs',
    'blog.backToHome': 'Back to home',
    'blog.cta.title': 'Need professional help?',
    'blog.cta.subtitle': 'Book your appointment with our team of specialists.',

    '404.title': 'Page not found',
    '404.message': 'The page you are looking for does not exist, has been moved, or the link is incorrect.',
    '404.backHome': 'Back to home',
    
    // Categories
    'category.todos': 'All',
    'category.deportiva': 'sports',
    'category.traumatologica': 'trauma',
    'category.neurologica': 'neurological',
    'category.pediatrica': 'pediatric',
    
    // Testimonials
    'testimonials.title': 'What Our Patients Say',
    'testimonials.patient1.text': 'Excellent treatment and professionalism. After months with lower back pain, I have managed to recover my quality of life thanks to the Axis Cambrils team.',
    'testimonials.patient1.name': 'María Carmen R.',
    'testimonials.patient1.info': 'Patient since 2024',
    'testimonials.patient2.text': 'As a runner, injuries are frequent. The sports physiotherapy at Axis has helped me prevent problems and recover quickly when they appear.',
    'testimonials.patient2.name': 'Jordi S.',
    'testimonials.patient2.info': 'Amateur Athlete',
    'testimonials.patient3.text': 'Modern facilities, attentive staff and visible results from the first sessions. Totally recommended.',
    'testimonials.patient3.name': 'Ana G.',
    'testimonials.patient3.info': 'Knee Post-Op',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': 'We are here to help you. Book your appointment or ask us any questions.',
    'contact.form.title': 'Send Us a Message',
    'contact.form.name': 'Full Name',
    'contact.form.namePlaceholder': 'Your name',
    'contact.form.email': 'Email',
    'contact.form.emailPlaceholder': 'your@email.com',
    'contact.form.phone': 'Phone',
    'contact.form.phonePlaceholder': '+34 600 000 000',
    'contact.form.message': 'Message',
    'contact.form.messagePlaceholder': 'Tell us how we can help you...',
    'contact.form.submit': 'Send Message',
    'contact.info.title': 'Contact Information',
    'contact.info.address': 'Address',
    'contact.info.phone': 'Phone',
    'contact.info.email': 'Email',
    'contact.info.whatsapp': 'WhatsApp',
    'contact.info.schedule': 'Schedule',
    'contact.info.scheduleText': 'Monday to Friday from 9am to 9pm',
    'contact.info.whatsappText': 'Message us on WhatsApp',
    'contact.map': 'Location Map',
    'thanks.title': 'Message sent',
    'thanks.message': 'Thank you for contacting us. We have received your message and will get back to you as soon as possible.',
    'thanks.backHome': 'Back to home',

    // Cookies
    'cookies.title': 'We use cookies',
    'cookies.message': 'We use cookies to improve your experience and services like Google Maps.',
    'cookies.accept': '✓ Accept all',
    'cookies.reject': 'Essential only',
    
    // Footer
    'footer.description': 'Physiotherapy Center specialized in recovery, prevention and wellness. Your health is our priority.',
    'footer.links': 'Links',
    'footer.contact': 'Contact',
    'footer.rights': 'All rights reserved.',
    
    // About Us Page
    'aboutUs.team.title': 'Our Team',
    'aboutUs.team.subtitle': 'Professionals committed to your health',
    'aboutUs.team.education': 'Academic Background',
    'aboutUs.team.courses': 'Training Courses',
    'aboutUs.cta.title': 'Want to meet us?',
    'aboutUs.cta.subtitle': 'Book your appointment and discover why we are the trusted physiotherapy center in Cambrils.',
  },
} as const;
