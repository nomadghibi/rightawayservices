export interface AreaFAQ {
  question: string
  answer: string
}

export interface ServiceArea {
  slug: string
  name: string
  state: string
  county: string
  shortDescription: string
  localIntro: string
  typicalNeeds: string[]
  localContext: string
  relatedServices: string[]
  nearbyAreas: string[]
  keywordFocus?: string[]
  faqs: AreaFAQ[]
  metaTitle: string
  metaDescription: string
}

export const serviceAreas: ServiceArea[] = [
  {
    slug: 'palm-bay-fl',
    name: 'Palm Bay',
    state: 'FL',
    county: 'Brevard County',
    shortDescription:
      'Reliable handyman and home repair services throughout Palm Bay, FL. Right Away Services LLC is your local Space Coast handyman.',
    localIntro:
      'Palm Bay is one of Florida\'s largest cities by area, home to established neighborhoods, newer developments, and a growing population of homeowners who need dependable local help. Right Away Services LLC provides handyman and home repair services throughout Palm Bay — from the well-established areas near Malabar Road to the newer developments in the southeast. Whether your home needs a quick repair, a ceiling fan replaced, or a full punch list tackled, we\'re here to help Palm Bay homeowners get things done.',
    typicalNeeds: [
      'Drywall repair in Florida homes affected by humidity',
      'Ceiling fan installation and replacement',
      'Door and window repairs due to seasonal swelling',
      'Painting services for rooms, trim, and touch-ups',
      'Fixture replacements and installations',
      'Rental property maintenance and turnovers',
      'Pre-sale repair work',
    ],
    localContext:
      'Palm Bay homes range from classic Florida block homes to newer construction, and the humid subtropical climate means regular wear on everything from doors and windows to drywall and paint. Many Palm Bay homeowners are also landlords with rental properties in the area, making reliable property maintenance services especially important.',
    keywordFocus: [
      'handyman Palm Bay FL',
      'drywall repair Palm Bay FL',
      'painting services Palm Bay FL',
      'ceiling fan installation Palm Bay FL',
    ],
    relatedServices: [
      'handyman-services',
      'home-repairs',
      'drywall-repair',
      'ceiling-fan-installation',
      'property-maintenance',
    ],
    nearbyAreas: ['melbourne-fl', 'malabar-fl', 'grant-valkaria-fl', 'west-melbourne-fl'],
    faqs: [
      {
        question: 'Do you serve all parts of Palm Bay?',
        answer:
          'Yes — we serve Palm Bay broadly, including neighborhoods near Malabar Road, Palm Bay Road, Babcock Street, and surrounding areas. If you\'re unsure whether your address falls in our service area, give us a call and we\'ll confirm.',
      },
      {
        question: 'How do I request handyman service in Palm Bay?',
        answer:
          'Call us directly or use our online estimate request form. We respond promptly and can typically schedule service within a few business days.',
      },
      {
        question: 'Can you handle drywall repair and painting in Palm Bay?',
        answer:
          'Yes — we regularly handle drywall patching, texture repair, primer, and paint-ready touch-ups for Palm Bay homeowners and landlords.',
      },
    ],
    metaTitle: 'Handyman Palm Bay FL | Right Away Services LLC',
    metaDescription:
      'Need a handyman in Palm Bay, FL? Right Away Services LLC provides local home repairs, drywall repair, painting services, and ceiling fan installation in Palm Bay.',
  },
  {
    slug: 'melbourne-fl',
    name: 'Melbourne',
    state: 'FL',
    county: 'Brevard County',
    shortDescription:
      'Professional handyman and home repair services in Melbourne, FL. Serving homeowners, landlords, and property managers throughout the Melbourne area.',
    localIntro:
      'Melbourne is the commercial and cultural hub of Brevard County\'s southern half, home to diverse neighborhoods ranging from historic Eau Gallie to waterfront properties and established suburban communities. Right Away Services LLC provides handyman services throughout Melbourne, helping homeowners, landlords, and property managers keep their properties in good shape. From quick fixture installs to rental turnover work, we\'re the local team Melbourne residents call when they need reliable help.',
    typicalNeeds: [
      'Home repairs in older Melbourne neighborhoods',
      'Rental property maintenance and turnover work',
      'Fixture and ceiling fan installation',
      'Painting services for interior refreshes',
      'Pre-sale repairs and punch-list work',
      'Drywall repair and painting touch-ups',
      'Door and window repairs',
    ],
    localContext:
      'Melbourne\'s mix of older homes near downtown and Eau Gallie, mid-century neighborhoods, and newer subdivisions creates varied repair needs. The city\'s active real estate market also means frequent pre-sale repair demand. With Florida Tech, the healthcare sector, and aerospace industry employment nearby, Melbourne has a high proportion of busy professionals who value having a reliable handyman they can trust.',
    keywordFocus: [
      'handyman Melbourne FL',
      'drywall repair Melbourne FL',
      'painting services Melbourne FL',
      'ceiling fan installation Melbourne FL',
    ],
    relatedServices: [
      'handyman-services',
      'home-repairs',
      'drywall-repair',
      'property-maintenance',
      'fixture-installation',
    ],
    nearbyAreas: ['palm-bay-fl', 'west-melbourne-fl', 'indialantic-fl', 'satellite-beach-fl', 'melbourne-beach-fl'],
    faqs: [
      {
        question: 'Do you serve all Melbourne neighborhoods?',
        answer:
          'Yes — we serve Melbourne broadly, including downtown Melbourne, Eau Gallie, Melbourne Village, and surrounding neighborhoods. Call us to confirm your specific address.',
      },
      {
        question: 'Do you work with Melbourne property managers?',
        answer:
          'Absolutely. We work with residential property managers and individual landlords throughout Melbourne. We\'re comfortable communicating with both property managers and tenants directly.',
      },
      {
        question: 'Do you handle painting and drywall repair in Melbourne?',
        answer:
          'Yes — we handle drywall patching, texture matching, paint touch-ups, and full room painting projects throughout Melbourne, FL.',
      },
    ],
    metaTitle: 'Handyman Melbourne FL | Right Away Services LLC',
    metaDescription:
      'Need a handyman in Melbourne, FL? Right Away Services LLC provides local home repairs, drywall repair, painting services, and ceiling fan installation in Melbourne.',
  },
  {
    slug: 'west-melbourne-fl',
    name: 'West Melbourne',
    state: 'FL',
    county: 'Brevard County',
    shortDescription:
      'Handyman and home repair services in West Melbourne, FL. Right Away Services LLC helps West Melbourne homeowners with repairs, installations, and maintenance.',
    localIntro:
      'West Melbourne is a growing suburban community just west of Melbourne, characterized by newer residential developments, active homeowner associations, and a mix of families and retirees. Right Away Services LLC serves West Melbourne homeowners with professional handyman and repair services — from general home repairs to furniture assembly, ceiling fan installation, and fixture work. We understand the needs of newer construction homes and the expectations of West Melbourne homeowners for clean, professional service.',
    typicalNeeds: [
      'Ceiling fan and fixture installation in newer homes',
      'Furniture assembly for new homeowners',
      'Drywall repairs and touch-up painting',
      'Door and window adjustments in newer construction',
      'General home repairs and maintenance',
    ],
    localContext:
      'West Melbourne\'s newer construction means many homeowners are setting up their homes for the first time — installing fans, mounting hardware, assembling furniture, and handling the small repairs that come with a new home. The community\'s suburban character and family-oriented demographics make dependable, professional service especially important.',
    relatedServices: [
      'handyman-services',
      'ceiling-fan-installation',
      'furniture-assembly',
      'fixture-installation',
      'home-repairs',
    ],
    nearbyAreas: ['melbourne-fl', 'palm-bay-fl', 'viera-fl', 'suntree-fl'],
    faqs: [
      {
        question: 'Do you serve West Melbourne, FL?',
        answer:
          'Yes — West Melbourne is in our core service area. We work throughout the city and nearby communities.',
      },
      {
        question: 'Can you handle work for HOA communities in West Melbourne?',
        answer:
          'We work within homeowner-occupied properties in HOA communities. For any work that requires HOA approval or permits, we\'ll let you know upfront.',
      },
    ],
    metaTitle: 'Handyman Services in West Melbourne, FL | Right Away Services LLC',
    metaDescription:
      'Professional handyman services in West Melbourne, FL. Right Away Services LLC handles repairs, installations, and maintenance for West Melbourne homeowners.',
  },
  {
    slug: 'malabar-fl',
    name: 'Malabar',
    state: 'FL',
    county: 'Brevard County',
    shortDescription:
      'Handyman and home repair services in Malabar, FL. Serving Malabar homeowners with reliable local repairs and maintenance.',
    localIntro:
      'Malabar is a quiet residential community in southern Brevard County, known for its rural character, larger lot sizes, and proximity to Indian River Lagoon. Right Away Services LLC serves Malabar homeowners who want dependable, professional handyman service without a long wait. From basic repairs to ceiling fan installs and property maintenance, we serve the Malabar community with the same quality and responsiveness we bring to all of our Space Coast customers.',
    typicalNeeds: [
      'General home repairs on older Florida properties',
      'Ceiling fan and fixture installation',
      'Door and window repairs',
      'Drywall repairs',
      'Property maintenance for larger rural lots',
    ],
    localContext:
      'Malabar\'s homes include older Florida properties on larger parcels where regular maintenance is part of homeownership. The community\'s rural character means residents value a local handyman they can trust with their property.',
    relatedServices: [
      'handyman-services',
      'home-repairs',
      'ceiling-fan-installation',
      'property-maintenance',
      'door-and-window-repairs',
    ],
    nearbyAreas: ['palm-bay-fl', 'grant-valkaria-fl', 'melbourne-fl'],
    faqs: [
      {
        question: 'Do you travel to Malabar for handyman work?',
        answer:
          'Yes — Malabar is within our service area. We serve southern Brevard County including Malabar and nearby communities.',
      },
    ],
    metaTitle: 'Handyman Services in Malabar, FL | Right Away Services LLC',
    metaDescription:
      'Reliable handyman and home repair services in Malabar, FL. Right Away Services LLC serves Malabar homeowners with professional repairs and maintenance.',
  },
  {
    slug: 'grant-valkaria-fl',
    name: 'Grant-Valkaria',
    state: 'FL',
    county: 'Brevard County',
    shortDescription:
      'Handyman services in Grant-Valkaria, FL. Right Away Services LLC serves the Grant-Valkaria community with reliable home repairs and maintenance.',
    localIntro:
      'Grant-Valkaria is a small unincorporated community in southern Brevard County, just south of Malabar, home to a mix of established rural properties and waterfront homes along the Indian River. Right Away Services LLC brings professional handyman service to Grant-Valkaria residents who want quality work without driving into a larger city to find it.',
    typicalNeeds: [
      'Rural property maintenance and repairs',
      'Fixture and ceiling fan installation',
      'Door and window repairs in older homes',
      'Drywall and interior repairs',
      'General handyman work',
    ],
    localContext:
      'Grant-Valkaria homes are often on larger parcels and benefit from a handyman who can handle a variety of tasks in a single visit. The community\'s distance from larger urban centers makes having a reliable local service provider especially valuable.',
    relatedServices: ['handyman-services', 'property-maintenance', 'home-repairs', 'fixture-installation'],
    nearbyAreas: ['malabar-fl', 'palm-bay-fl'],
    faqs: [
      {
        question: 'Do you serve Grant-Valkaria?',
        answer:
          'Yes — Grant-Valkaria is in our service area in southern Brevard County.',
      },
    ],
    metaTitle: 'Handyman Services in Grant-Valkaria, FL | Right Away Services LLC',
    metaDescription:
      'Professional handyman services in Grant-Valkaria, FL. Right Away Services LLC serves Grant-Valkaria residents with reliable home repairs and maintenance.',
  },
  {
    slug: 'indialantic-fl',
    name: 'Indialantic',
    state: 'FL',
    county: 'Brevard County',
    shortDescription:
      'Handyman services in Indialantic, FL. Serving Indialantic homeowners with professional repairs, installations, and maintenance.',
    localIntro:
      'Indialantic is a small beachside community on the barrier island east of Melbourne, popular with families, retirees, and beach lovers. The salt air and coastal climate mean homes in Indialantic face unique maintenance challenges — from faster hardware corrosion to humidity-related door swelling and paint issues. Right Away Services LLC serves Indialantic homeowners with the kind of professional, careful handyman work that coastal properties need.',
    typicalNeeds: [
      'Corrosion-related hardware replacement',
      'Door and window repairs from humidity and salt air',
      'Drywall repairs from coastal humidity',
      'Fixture replacements in older beachside homes',
      'General home repairs and maintenance',
    ],
    localContext:
      'Coastal homes in Indialantic experience accelerated wear from salt air and high humidity. Fixtures corrode faster, door hardware wears more quickly, and paint and drywall are subject to moisture-related issues. Regular maintenance and timely repairs protect coastal home value.',
    relatedServices: [
      'handyman-services',
      'door-and-window-repairs',
      'home-repairs',
      'drywall-repair',
      'fixture-installation',
    ],
    nearbyAreas: ['melbourne-fl', 'melbourne-beach-fl', 'satellite-beach-fl', 'indian-harbour-beach-fl'],
    faqs: [
      {
        question: 'Do you handle repairs for beachside homes in Indialantic?',
        answer:
          'Yes — we\'re familiar with the maintenance needs of coastal homes and work throughout Indialantic and nearby barrier island communities.',
      },
    ],
    metaTitle: 'Handyman Services in Indialantic, FL | Right Away Services LLC',
    metaDescription:
      'Professional handyman and home repair services in Indialantic, FL. Right Away Services LLC helps Indialantic homeowners maintain and repair coastal properties.',
  },
  {
    slug: 'melbourne-beach-fl',
    name: 'Melbourne Beach',
    state: 'FL',
    county: 'Brevard County',
    shortDescription:
      'Handyman and home repair services in Melbourne Beach, FL. Reliable local service for Melbourne Beach homeowners and property owners.',
    localIntro:
      'Melbourne Beach is a charming small town at the southern end of Florida\'s barrier island, known for its quiet neighborhoods, ocean and river access, and strong sense of community. Coastal living here is beautiful — and it comes with specific home maintenance realities. Right Away Services LLC serves Melbourne Beach homeowners who want professional handyman services from a team that understands the needs of coastal Florida properties.',
    typicalNeeds: [
      'Hardware and fixture replacements in salt-air environments',
      'Door, window, and screen repairs',
      'Drywall repairs from moisture and humidity',
      'Painting touch-ups in coastal homes',
      'General maintenance and repair work',
    ],
    localContext:
      'Melbourne Beach homeowners often own properties that have been in the family for years or are managed as vacation rentals. Keeping coastal properties maintained is an ongoing task, and having a reliable local handyman is a significant asset.',
    relatedServices: ['handyman-services', 'home-repairs', 'door-and-window-repairs', 'property-maintenance'],
    nearbyAreas: ['indialantic-fl', 'melbourne-fl', 'satellite-beach-fl'],
    faqs: [
      {
        question: 'Do you work in Melbourne Beach?',
        answer:
          'Yes — Melbourne Beach and the surrounding barrier island communities are within our service area.',
      },
    ],
    metaTitle: 'Handyman Services in Melbourne Beach, FL | Right Away Services LLC',
    metaDescription:
      'Reliable handyman and home repair services in Melbourne Beach, FL. Right Away Services LLC serves Melbourne Beach homeowners with professional coastal property maintenance.',
  },
  {
    slug: 'satellite-beach-fl',
    name: 'Satellite Beach',
    state: 'FL',
    county: 'Brevard County',
    shortDescription:
      'Handyman and home repair services in Satellite Beach, FL. Professional repairs, installations, and maintenance for Satellite Beach homeowners.',
    localIntro:
      'Satellite Beach is a popular barrier island community known for its beaches, family neighborhoods, and military connections to Patrick Space Force Base. Homeowners in Satellite Beach deal with the same coastal maintenance challenges as other beachside communities — plus the busy pace of life near the base means many residents value fast, reliable service from a handyman they can count on. Right Away Services LLC serves Satellite Beach homeowners with professional, responsive service.',
    typicalNeeds: [
      'Ceiling fan installation and replacement',
      'Fixture and hardware work in coastal homes',
      'Drywall repairs and painting touch-ups',
      'Door and window maintenance in salt-air environments',
      'General home repairs',
    ],
    localContext:
      'Satellite Beach has a strong community identity and many long-term residents. Military families rotating through the area often need quick home setup help — furniture assembly, ceiling fans, fixtures — when moving in or out of local rentals.',
    relatedServices: [
      'handyman-services',
      'ceiling-fan-installation',
      'fixture-installation',
      'home-repairs',
      'furniture-assembly',
    ],
    nearbyAreas: ['indialantic-fl', 'indian-harbour-beach-fl', 'melbourne-fl', 'melbourne-beach-fl'],
    faqs: [
      {
        question: 'Do you work in Satellite Beach?',
        answer:
          'Yes — Satellite Beach is in our service area. We serve homeowners and renters throughout the community.',
      },
    ],
    metaTitle: 'Handyman Services in Satellite Beach, FL | Right Away Services LLC',
    metaDescription:
      'Professional handyman services in Satellite Beach, FL. Right Away Services LLC serves Satellite Beach homeowners with fast, reliable repairs and installations.',
  },
  {
    slug: 'indian-harbour-beach-fl',
    name: 'Indian Harbour Beach',
    state: 'FL',
    county: 'Brevard County',
    shortDescription:
      'Handyman services in Indian Harbour Beach, FL. Trusted home repairs and maintenance for Indian Harbour Beach homeowners.',
    localIntro:
      'Indian Harbour Beach is a quiet, well-maintained community on the barrier island north of Satellite Beach. With a mix of single-family homes, condos, and waterfront properties, Indian Harbour Beach homeowners appreciate professional service that\'s respectful of their properties. Right Away Services LLC provides handyman and home repair services to Indian Harbour Beach residents who want quality work done without the runaround.',
    typicalNeeds: [
      'General home repairs and maintenance',
      'Ceiling fan and fixture installation',
      'Condo and townhome repairs',
      'Drywall and painting repairs',
      'Door and window adjustments',
    ],
    localContext:
      'Indian Harbour Beach has a relatively affluent, stable homeowner base with properties that are well cared for. Homeowners here expect professional, careful service and clear communication — which is exactly what Right Away Services LLC provides.',
    relatedServices: ['handyman-services', 'fixture-installation', 'home-repairs', 'ceiling-fan-installation'],
    nearbyAreas: ['satellite-beach-fl', 'indialantic-fl', 'melbourne-fl'],
    faqs: [
      {
        question: 'Do you serve Indian Harbour Beach?',
        answer:
          'Yes — Indian Harbour Beach is in our service area. We work with homeowners and condo owners throughout the community.',
      },
    ],
    metaTitle: 'Handyman Services in Indian Harbour Beach, FL | Right Away Services LLC',
    metaDescription:
      'Trusted handyman and home repair services in Indian Harbour Beach, FL. Right Away Services LLC serves Indian Harbour Beach with professional, careful service.',
  },
  {
    slug: 'rockledge-fl',
    name: 'Rockledge',
    state: 'FL',
    county: 'Brevard County',
    shortDescription:
      'Handyman and home repair services in Rockledge, FL. Right Away Services LLC serves Rockledge homeowners with reliable local repairs and maintenance.',
    localIntro:
      'Rockledge is one of Brevard County\'s oldest cities, home to established neighborhoods, waterfront properties, and a range of housing styles from historic homes to modern builds. Right Away Services LLC serves Rockledge homeowners with dependable handyman and repair services tailored to properties of every age. Whether you\'re dealing with an older home\'s accumulated wear or a newer build\'s punch-list needs, we handle the work professionally.',
    typicalNeeds: [
      'Repairs in older Rockledge homes',
      'Drywall and painting repairs',
      'Door and window adjustments in mature construction',
      'Fixture and ceiling fan installation',
      'General property maintenance',
    ],
    localContext:
      'Rockledge\'s mix of historic neighborhoods near the Indian River and newer developments creates diverse repair needs. Older homes often have accumulated maintenance needs that a skilled handyman can address efficiently. The city\'s proximity to Brevard County\'s healthcare sector means many homeowners are medical professionals with demanding schedules who appreciate reliable, on-time service.',
    relatedServices: [
      'handyman-services',
      'home-repairs',
      'drywall-repair',
      'ceiling-fan-installation',
      'property-maintenance',
    ],
    nearbyAreas: ['viera-fl', 'suntree-fl', 'melbourne-fl', 'west-melbourne-fl'],
    faqs: [
      {
        question: 'Do you serve Rockledge, FL?',
        answer:
          'Yes — Rockledge is in our service area. We work throughout Rockledge and nearby Brevard County communities.',
      },
    ],
    metaTitle: 'Handyman Services in Rockledge, FL | Right Away Services LLC',
    metaDescription:
      'Reliable handyman and home repair services in Rockledge, FL. Right Away Services LLC helps Rockledge homeowners with professional repairs and maintenance.',
  },
  {
    slug: 'viera-fl',
    name: 'Viera',
    state: 'FL',
    county: 'Brevard County',
    shortDescription:
      'Handyman services in Viera, FL. Professional home repairs, installations, and maintenance for Viera homeowners.',
    localIntro:
      'Viera is one of Brevard County\'s most established planned communities, home to families, retirees, and professionals who appreciate well-designed neighborhoods and reliable services. Right Away Services LLC serves Viera homeowners with professional handyman work that matches the quality and care they expect for their properties. From ceiling fan installs to furniture assembly and home repairs, we keep Viera homes well-maintained.',
    typicalNeeds: [
      'Ceiling fan and fixture installation in newer Viera homes',
      'Furniture assembly for new and existing residents',
      'Drywall repairs and paint touch-ups',
      'General home repairs and maintenance',
      'Pre-sale punch-list work',
    ],
    localContext:
      'Viera\'s well-planned residential character means homeowners tend to maintain their properties carefully and expect professional, respectful service from contractors and handymen alike. The community has a mix of established households and newer residents setting up homes.',
    relatedServices: [
      'handyman-services',
      'ceiling-fan-installation',
      'furniture-assembly',
      'fixture-installation',
      'home-repairs',
    ],
    nearbyAreas: ['suntree-fl', 'rockledge-fl', 'west-melbourne-fl', 'melbourne-fl'],
    faqs: [
      {
        question: 'Do you serve Viera?',
        answer:
          'Yes — Viera is in our service area. We work throughout Viera and the surrounding Brevard County planned communities.',
      },
    ],
    metaTitle: 'Handyman Services in Viera, FL | Right Away Services LLC',
    metaDescription:
      'Professional handyman and home repair services in Viera, FL. Right Away Services LLC serves Viera homeowners with reliable repairs, installations, and maintenance.',
  },
  {
    slug: 'suntree-fl',
    name: 'Suntree',
    state: 'FL',
    county: 'Brevard County',
    shortDescription:
      'Handyman services in Suntree, FL. Reliable home repairs and installations for Suntree homeowners and property owners.',
    localIntro:
      'Suntree is an established master-planned community adjacent to Viera, known for its mature landscaping, golf communities, and well-maintained neighborhoods. Right Away Services LLC provides handyman and home repair services to Suntree homeowners who want quality work from a local professional they can trust. Whether it\'s a fixture installation, drywall repair, or ceiling fan replacement, we handle the work with care.',
    typicalNeeds: [
      'Fixture and ceiling fan installation',
      'Drywall repairs in established homes',
      'Door and window maintenance',
      'General home repairs',
      'Pre-sale and cosmetic repairs',
    ],
    localContext:
      'Suntree\'s established homeowner base includes many retirees and long-term residents with mature properties. Homes here benefit from regular maintenance and the occasional targeted repair. The community\'s active real estate market also generates consistent demand for pre-sale prep work.',
    relatedServices: [
      'handyman-services',
      'fixture-installation',
      'ceiling-fan-installation',
      'drywall-repair',
      'home-repairs',
    ],
    nearbyAreas: ['viera-fl', 'rockledge-fl', 'west-melbourne-fl'],
    faqs: [
      {
        question: 'Do you serve Suntree?',
        answer:
          'Yes — Suntree is in our service area. We work throughout Suntree and nearby Brevard County communities.',
      },
    ],
    metaTitle: 'Handyman Services in Suntree, FL | Right Away Services LLC',
    metaDescription:
      'Reliable handyman and home repair services in Suntree, FL. Right Away Services LLC serves Suntree homeowners with professional, careful work.',
  },
]

export function getServiceAreaBySlug(slug: string): ServiceArea | undefined {
  return serviceAreas.find((a) => a.slug === slug)
}

export function getNearbyAreas(slugs: string[]): ServiceArea[] {
  return serviceAreas.filter((a) => slugs.includes(a.slug))
}
