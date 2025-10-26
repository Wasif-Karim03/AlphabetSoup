export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Uttara Cricket Academy',
    description: 'Developing disciplined, technically sound cricketers through structured training programs',
    url: 'https://uttaracricketacademy.com',
    logo: 'https://uttaracricketacademy.com/og-social-preview.svg',
    founder: {
      '@type': 'Person',
      name: 'Tareq Bin Delwar',
      jobTitle: 'Founder & Head Coach',
      alsoKnownAs: 'Tareq Shaon',
    },
    sameAs: [
      'https://facebook.com/uttaracricketacademy',
      'https://instagram.com/uttaracricketacademy',
      'https://youtube.com/@uttaracricketacademy',
      'https://linkedin.com/company/uttaracricketacademy',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+880-1712-345678',
      contactType: 'General Inquiry',
      email: 'info@uttaracricketacademy.com',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Uttara',
      addressRegion: 'Dhaka',
      addressCountry: 'BD',
    },
    areaServed: 'Uttara, Dhaka, Bangladesh',
  }
}

export function getPersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Tareq Bin Delwar',
    alternateName: 'Tareq Shaon',
    jobTitle: 'Founder & Head Coach',
    worksFor: {
      '@type': 'Organization',
      name: 'Uttara Cricket Academy',
    },
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Milestone School & College (EMJS)',
    },
    description: 'Bangladesh-based cricket coach and former teacher. Founder of Uttara Cricket Academy in Dhaka\'s Uttara area.',
    knowsAbout: ['Cricket Coaching', 'Youth Cricket Development', 'Cricket Technique', 'Batting', 'Bowling', 'Fielding', 'Match Strategy'],
    areaServed: 'Uttara, Dhaka, Bangladesh',
  }
}
