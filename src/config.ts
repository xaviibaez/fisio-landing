/**
 * Configuración centralizada del sitio
 */

export const siteConfig = {
  name: 'Axis Cambrils',
  description: 'Centro de fisioterapia especializado en Cambrils',
  url: 'https://www.axiscambrils.com',
  
  contact: {
    email: 'fisioaxiscambrils@gmail.com',
    phone1: '+34 977 79 54 33',
    phone2: '+34 608 03 28 57',
    address: {
      street: 'Carrer de Sant Josep, 15',
      city: 'Cambrils',
      postalCode: '43850',
      province: 'Tarragona',
      country: 'España'
    }
  },
  
  social: {
    facebook: 'https://facebook.com/axiscambrils',
    instagram: 'https://instagram.com/axiscambrils',
  },
  
  i18n: {
    defaultLocale: 'ca',
    locales: ['ca', 'es', 'en']
  }
} as const;
