export interface AreaFAQ {
  question: string
  answer: string
}

export interface AreaFeaturedService {
  title: string
  description: string
  links: Array<{
    href: string
    label: string
  }>
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
  propertyTypes?: string[]
  maintenanceUseCases?: string[]
  trustSignals?: string[]
  featuredServices?: AreaFeaturedService[]
  nearbyProjectSlugs?: string[]
  relatedResource?: {
    href: string
    title: string
    description: string
    eyebrow?: string
  }
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
      'Dependable drywall repairs, painting, door adjustments, and home maintenance in Palm Bay, FL. Contact Right Away Services for a free estimate.',
    localIntro:
      'Right Away Services LLC helps Palm Bay homeowners, landlords, and property managers with dependable home repairs, drywall patching, interior painting, door adjustments, and property maintenance. Based in Palm Bay, we bring more than 26 years of hands-on experience to projects ranging from small repairs to larger home improvement work. We serve communities including Bayside Lakes, Lockmar Estates, Port Malabar, and surrounding neighborhoods. Contact us to discuss your project and request a free estimate.',
    typicalNeeds: [
      'Drywall repair in Florida homes affected by humidity',
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
    ],
    relatedServices: [
      'handyman-services',
      'home-repairs',
      'drywall-repair',
      'painting-services',
      'property-maintenance',
    ],
    nearbyAreas: ['melbourne-fl', 'malabar-fl', 'grant-valkaria-fl', 'west-melbourne-fl'],
    trustSignals: [
      'Palm Bay-based local handyman company',
      'More than 26 years of hands-on experience',
      'Free estimates for clearly defined repair projects',
    ],
    featuredServices: [
      {
        title: 'Drywall Repair in Palm Bay',
        description:
          'We repair wall and ceiling holes, dents, cracks, damaged corners, and plumbing-access openings. The work can include patching, taping, finishing, texture blending, and preparation for primer or paint so the repaired area fits the surrounding surface.',
        links: [{ href: '/services/drywall-repair', label: 'Explore drywall repair' }],
      },
      {
        title: 'Interior & Exterior Painting',
        description:
          'Painting work can refresh a room, finish repaired drywall, protect exterior surfaces, or prepare a property for sale or a new tenant. We handle appropriate surface preparation, interior and exterior painting, trim refreshes, and targeted touch-ups.',
        links: [{ href: '/services/painting-services', label: 'Explore painting services' }],
      },
      {
        title: 'Door Adjustments & Repairs',
        description:
          'Florida humidity and everyday use can cause doors to stick, drag, squeak, or stop latching correctly. We inspect alignment, hinges, handles, trim, and other hardware, then complete practical adjustments or repairs within normal handyman scope.',
        links: [{ href: '/services/door-and-window-repairs', label: 'Explore door and window repairs' }],
      },
      {
        title: 'General Home Repairs',
        description:
          'Homeowners can combine compatible small repairs into one organized list, including drywall patches, trim repairs, hardware replacement, furniture assembly, caulking, and other routine maintenance. Share photos and details so we can review the full scope before scheduling.',
        links: [
          { href: '/services/home-repairs', label: 'Explore home repairs' },
          { href: '/services/handyman-services', label: 'Explore handyman services' },
        ],
      },
      {
        title: 'Rental Property Maintenance',
        description:
          'Palm Bay landlords and property managers can request tenant-turnover punch lists, cosmetic repairs, door adjustments, drywall patches, paint touch-ups, trim work, and other approved maintenance that helps prepare a property for its next occupant.',
        links: [{ href: '/services/property-maintenance', label: 'Explore property maintenance' }],
      },
    ],
    nearbyProjectSlugs: ['exodus-barbershop-stylist-room-build-out-palm-bay-fl'],
    relatedResource: {
      href: 'https://www.homeadvisor.com/rated.RightAwayServices.42561444.html',
      eyebrow: 'Verified customer reviews',
      title: 'See What Right Away Services Customers Say',
      description:
        'Read the company\'s verified HomeAdvisor reviews and learn why local customers choose Right Away Services for repair, maintenance, and improvement projects.',
    },
    faqs: [
      {
        question: 'What areas of Palm Bay do you serve?',
        answer:
          'We serve Palm Bay broadly, including Bayside Lakes, Lockmar Estates, Port Malabar, and neighborhoods near Malabar Road, Palm Bay Road, and Babcock Street. Contact us with your address so we can confirm coverage.',
      },
      {
        question: 'Do you handle multiple small repairs in one visit?',
        answer:
          'Yes. Compatible jobs such as drywall patches, trim repairs, hardware replacement, door adjustments, and routine maintenance can often be grouped into one organized visit. Send the complete list and photos when requesting an estimate.',
      },
      {
        question: 'Can you repair drywall and paint afterward?',
        answer:
          'Yes. Depending on the agreed scope, we can patch and finish damaged drywall, allow the repair materials to dry properly, prepare the surface, and complete primer or painting work for a consistent finish.',
      },
      {
        question: 'Do you offer free estimates?',
        answer:
          'Yes. Share a description of the work, the Palm Bay property address, and clear photos when possible. We will review the request, ask any needed questions, and explain whether an in-person assessment is required.',
      },
      {
        question: 'Can you help with rental property maintenance?',
        answer:
          'Yes. We help Palm Bay landlords and property managers with approved turnover and punch-list work such as drywall patches, paint touch-ups, door adjustments, trim repairs, hardware replacement, and other routine maintenance.',
      },
    ],
    metaTitle: 'Handyman Palm Bay FL | Home Repairs',
    metaDescription:
      'Need a reliable handyman in Palm Bay, FL? Right Away Services offers drywall repairs, painting, door adjustments and home maintenance. Free estimates.',
  },
  {
    slug: 'melbourne-fl',
    name: 'Melbourne',
    state: 'FL',
    county: 'Brevard County',
    shortDescription:
      'Drywall repair, door adjustments, painting touch-ups, fixture replacement, and dependable home repairs in Melbourne, FL. Call for a free estimate.',
    localIntro:
      'Right Away Services LLC helps Melbourne homeowners, landlords, and property managers with everyday home repairs, drywall patching, door adjustments, painting touch-ups, fixture replacement, and rental property maintenance. With more than 26 years of hands-on experience, we serve Downtown Melbourne, Eau Gallie, the Lake Washington area, and surrounding communities. Whether you need one repair or have a list of projects around your home, contact us for a free estimate.',
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
    trustSignals: [
      'More than 26 years of hands-on repair experience',
      'Free estimates for clearly defined handyman projects',
      'Local service for homeowners, landlords, and property managers',
    ],
    featuredServices: [
      {
        title: 'Drywall Repair in Melbourne',
        description:
          'We patch wall and ceiling openings, repair damaged corners, finish plumbing-access cuts, and blend texture so repaired areas are ready for paint. This includes drywall work after whole-home repiping as well as everyday holes, cracks, dents, and water-damaged sections once the moisture source has been corrected.',
        links: [{ href: '/services/drywall-repair', label: 'Explore drywall repair' }],
      },
      {
        title: 'Door & Window Repairs',
        description:
          'Sticking doors, loose hinges, worn handles, damaged trim, and minor alignment problems can make a home frustrating to use. We inspect the issue, make practical adjustments, replace appropriate hardware, and complete finish repairs that fall within normal handyman scope.',
        links: [{ href: '/services/door-and-window-repairs', label: 'Explore door and window repairs' }],
      },
      {
        title: 'Painting & Interior Touch-Ups',
        description:
          'Interior painting and touch-up work can finish a drywall repair, refresh worn trim, or make a room feel clean again. We prepare repaired surfaces, address minor wall defects, and paint rooms or targeted areas for a consistent, professional result.',
        links: [{ href: '/services/painting-services', label: 'Explore painting services' }],
      },
      {
        title: 'Rental Property Maintenance',
        description:
          'Melbourne landlords and property managers can combine tenant-turnover punch lists into one organized visit. Common requests include drywall patches, door adjustments, hardware replacement, caulking, minor finish repairs, and paint touch-ups between occupants.',
        links: [{ href: '/services/property-maintenance', label: 'Explore property maintenance' }],
      },
      {
        title: 'General Handyman Services',
        description:
          'A visit can often cover several compatible small jobs, including fixture replacement, furniture assembly, hardware installation, trim repairs, and routine home maintenance. Share the complete list when requesting an estimate so we can confirm scope and plan the visit efficiently.',
        links: [{ href: '/services/handyman-services', label: 'Explore handyman services' }],
      },
    ],
    nearbyProjectSlugs: ['drywall-repair-repipe-melbourne-fl'],
    relatedResource: {
      href: '/blog/punch-list-repairs-before-home-inspection-melbourne-fl',
      title: 'Punch List Repairs Before a Home Inspection in Melbourne, FL',
      description:
        'Review the visible drywall, door, fixture, paint, and caulk repairs that are worth addressing before a buyer or inspector walks through your home.',
    },
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
    metaTitle: 'Handyman Melbourne FL | Home Repairs',
    metaDescription:
      'Need a handyman in Melbourne, FL? Right Away Services handles drywall, doors, painting touch-ups, fixtures and home repairs. Request your free estimate.',
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
      'Vacation rental and furnished-property repair lists',
      'General home and condo repairs',
    ],
    localContext:
      'Satellite Beach includes single-family neighborhoods, condos, furnished rentals, and beachside properties. Salt air and humidity can accelerate wear on hardware, doors, paint, and fixtures, while rental owners may need several small tasks grouped around a turnover window. Right Away Services LLC handles requested handyman repair lists and refers regulated specialty work to the appropriate contractor.',
    propertyTypes: [
      'Single-family coastal homes',
      'Condos and townhomes',
      'Furnished and vacation rentals',
      'Long-term rental properties',
      'Owner-occupied beachside properties',
    ],
    maintenanceUseCases: [
      'Repair lists between vacation-rental bookings',
      'Door and hardware wear associated with coastal conditions',
      'Move-in furniture, fan, and fixture setup within handyman scope',
      'Drywall patches and paint touch-ups after ordinary wear',
      'Punch-list support for owners, managers, and Realtors',
    ],
    relatedServices: [
      'handyman-services',
      'ceiling-fan-installation',
      'fixture-installation',
      'home-repairs',
      'furniture-assembly',
      'drywall-repair',
      'property-maintenance',
      'vacation-rental-maintenance',
    ],
    nearbyAreas: ['indialantic-fl', 'indian-harbour-beach-fl', 'melbourne-fl', 'melbourne-beach-fl'],
    faqs: [
      {
        question: 'Do you work in Satellite Beach?',
        answer:
          'Yes — Satellite Beach is in our listed service area. Contact us with the property address and repair list so we can confirm scope and scheduling availability.',
      },
      {
        question: 'Can you help with Satellite Beach vacation rental repairs?',
        answer:
          'We can help owners and managers with requested handyman repair lists such as door adjustments, loose hardware, drywall patches, paint touch-ups, furniture assembly, and suitable fixture replacement. We do not provide property management, housekeeping, inspections, or emergency guest support.',
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
      'Reliable handyman and home repair services in Rockledge, FL, backed by more than 26 years of hands-on experience. Request a free estimate for drywall, doors, painting, fixtures, and property maintenance.',
    localIntro:
      'Right Away Services LLC provides dependable handyman and home repair services for homeowners, landlords, and property managers throughout Rockledge, Florida. With more than 26 years of hands-on experience, we help with drywall repair, door adjustments, painting touch-ups, fixture replacement, and general property maintenance. Whether you have one repair or several projects around your property, contact us for a free estimate.',
    typicalNeeds: [
      'Repairs in older Rockledge homes',
      'Drywall and painting repairs',
      'Door and window adjustments in mature construction',
      'Fixture and ceiling fan installation',
      'General property maintenance',
    ],
    localContext:
      'Rockledge has established neighborhoods near the Indian River as well as newer residential communities. That mix creates practical needs ranging from door and trim adjustments in older homes to drywall, fixture, and turnover punch lists in rentals and recently purchased properties.',
    propertyTypes: [
      'Established single-family homes',
      'Newer residential properties',
      'Rental homes and managed units',
      'Condos and townhomes',
      'Homes being prepared for sale or move-in',
    ],
    maintenanceUseCases: [
      'Grouped home repair and maintenance lists',
      'Rental turnover drywall, paint, door, and hardware work',
      'Pre-listing and post-inspection punch lists',
      'Fixture and ceiling fan replacement within handyman scope',
      'Routine property maintenance for owners and managers',
    ],
    trustSignals: [
      'More than 26 years of hands-on experience',
      'Free estimates for clearly defined repair projects',
      'Serving homeowners and property professionals across Brevard County',
    ],
    featuredServices: [
      {
        title: 'Drywall Repair in Rockledge',
        description:
          'We patch holes, repair cracks and damaged corners, blend common wall textures, and restore drywall openings left after completed plumbing access. Repairs are prepared for paint so the finished area blends cleanly with the surrounding wall or ceiling.',
        links: [
          { href: '/services/drywall-repair', label: 'Explore drywall repair services' },
        ],
      },
      {
        title: 'Door & Window Repairs',
        description:
          'Florida humidity and everyday use can leave doors sticking, hinges loose, latches misaligned, trim damaged, or hardware worn. We evaluate handyman-level adjustments and repairs and explain when a specialty contractor is needed.',
        links: [
          { href: '/services/door-and-window-repairs', label: 'Explore door and window repairs' },
        ],
      },
      {
        title: 'Painting & Property Maintenance',
        description:
          'We help with wall touch-ups, trim and door painting, repair-area finishing, rental turnover lists, and pre-sale punch-list work. Grouping related repairs can make a single scheduled visit more useful and efficient.',
        links: [
          { href: '/services/painting-services', label: 'Explore painting services' },
          { href: '/services/property-maintenance', label: 'Explore property maintenance' },
        ],
      },
    ],
    nearbyProjectSlugs: [
      'drywall-repair-repipe-melbourne-fl',
      'exterior-stucco-repair-painting-pressure-washing-viera-suntree-fl',
      'exodus-barbershop-stylist-room-build-out-palm-bay-fl',
    ],
    relatedServices: [
      'handyman-services',
      'home-repairs',
      'drywall-repair',
      'ceiling-fan-installation',
      'property-maintenance',
      'rental-property-maintenance',
    ],
    nearbyAreas: ['viera-fl', 'suntree-fl', 'melbourne-fl', 'west-melbourne-fl'],
    faqs: [
      {
        question: 'Do you provide handyman services throughout Rockledge, FL?',
        answer:
          'Yes. We serve Rockledge properties near Barton Boulevard, Fiske Boulevard, Murrell Road, Rockledge Drive, and surrounding areas. Contact us with the property address and repair list so we can confirm scope and scheduling.',
      },
      {
        question: 'Can you handle several small home repairs in one visit?',
        answer:
          'Often, yes. Drywall patches, door adjustments, hardware replacement, caulking, paint touch-ups, and other compatible handyman tasks can frequently be grouped into one appointment. Photos and a prioritized list help us estimate the time and materials required.',
      },
      {
        question: 'Do you offer free estimates for drywall, door, and painting repairs?',
        answer:
          'Yes. Right Away Services LLC provides free estimates for clearly defined handyman projects in Rockledge. Share photos and a description of the work so we can review the scope and identify anything that may require an in-person assessment.',
      },
      {
        question: 'How soon can I schedule handyman service in Rockledge?',
        answer:
          'Scheduling depends on the project scope, materials, and current availability. Contact us with your repair list and preferred timing, and we will provide the next suitable appointment options without promising unavailable same-day service.',
      },
      {
        question: 'Do you provide rental property maintenance in Rockledge?',
        answer:
          'Yes. We handle handyman-level rental repair lists in Rockledge, including drywall patches, paint touch-ups, door adjustments, hardware, caulking, and suitable fixture replacement. Licensed-trade work is outside this service.',
      },
    ],
    metaTitle: 'Handyman Rockledge FL | Home Repairs',
    metaDescription:
      'Need a handyman in Rockledge, FL? Drywall, door repairs, painting touch-ups and home maintenance. Call Right Away Services for a free estimate.',
  },
  {
    slug: 'cocoa-fl',
    name: 'Cocoa',
    state: 'FL',
    county: 'Brevard County',
    shortDescription:
      'Handyman and property-maintenance services in Cocoa, FL for homeowners, landlords, Realtors, and residential property managers.',
    localIntro:
      'Cocoa includes established residential areas, properties near the Indian River, rentals, and homes at different stages of repair. Right Away Services LLC provides handyman-level repairs and maintenance for Cocoa property owners who need a clear estimate and a practical way to work through a repair list.',
    typicalNeeds: [
      'General home repair punch lists',
      'Drywall patches and painting touch-ups',
      'Door, trim, and hardware adjustments',
      'Rental property maintenance and turnover repairs',
      'Fixture replacement and furniture assembly within handyman scope',
    ],
    localContext:
      'Cocoa properties range from older homes with accumulated finish repairs to rentals and recently purchased homes that need a move-in punch list. Grouping compatible drywall, door, paint, hardware, and fixture tasks can help owners address several visible issues during one planned visit.',
    propertyTypes: ['Single-family homes', 'Rental homes and managed units', 'Condos and townhomes', 'Homes being prepared for sale', 'Recently purchased properties'],
    maintenanceUseCases: ['Landlord and property-manager repair lists', 'Pre-listing and move-in punch lists', 'Drywall, paint, door, and hardware repairs', 'Routine residential maintenance'],
    relatedServices: ['handyman-services', 'home-repairs', 'drywall-repair', 'property-maintenance', 'rental-property-maintenance'],
    nearbyAreas: ['rockledge-fl', 'viera-fl', 'suntree-fl', 'cocoa-beach-fl'],
    faqs: [
      {
        question: 'Do you provide handyman services in Cocoa, FL?',
        answer:
          'Cocoa is within our listed service area. Send the property address and repair details so we can confirm the work fits our handyman services and discuss scheduling.',
      },
      {
        question: 'Can you handle a Cocoa rental turnover repair list?',
        answer:
          'Yes, for handyman-level work such as drywall patches, paint touch-ups, door adjustments, hardware, caulking, and suitable fixture replacement. Specialty-trade work requires the appropriate contractor.',
      },
    ],
    metaTitle: 'Handyman Services in Cocoa, FL | Right Away Services LLC',
    metaDescription:
      'Need a handyman in Cocoa, FL? Right Away Services LLC handles home repair lists, drywall, paint touch-ups, doors, hardware, and rental property maintenance.',
  },
  {
    slug: 'cocoa-beach-fl',
    name: 'Cocoa Beach',
    state: 'FL',
    county: 'Brevard County',
    shortDescription:
      'Handyman and vacation-rental maintenance in Cocoa Beach, FL for coastal homes, condos, furnished rentals, and managed residential properties.',
    localIntro:
      'Cocoa Beach has coastal homes, condos, long-term rentals, and furnished vacation properties where humidity, salt air, frequent occupancy, and ordinary wear can create ongoing repair lists. Right Away Services LLC provides requested handyman repairs for owners and managers who need help with doors, hardware, drywall, paint touch-ups, furniture, and suitable fixture replacement.',
    typicalNeeds: ['Vacation-rental handyman punch lists', 'Door and hardware adjustments in coastal properties', 'Drywall patches and paint touch-ups', 'Furniture assembly and replacement-item setup', 'Routine condo and residential maintenance'],
    localContext:
      'Cocoa Beach properties often combine coastal exposure with frequent use. Owners and managers can provide photos, access details, and a prioritized task list so the requested repairs can be reviewed for handyman scope before scheduling.',
    propertyTypes: ['Beachside single-family homes', 'Condos and townhomes', 'Vacation and furnished rentals', 'Long-term rental properties', 'Owner-occupied coastal residences'],
    maintenanceUseCases: ['Repair lists between bookings or occupants', 'Coastal door, hinge, handle, and hardware wear', 'Wall patches and paint touch-ups', 'Furniture assembly and accessory installation', 'Owner and property-manager punch lists'],
    relatedServices: ['handyman-services', 'home-repairs', 'property-maintenance', 'vacation-rental-maintenance', 'furniture-assembly', 'door-and-window-repairs'],
    nearbyAreas: ['cocoa-fl', 'rockledge-fl', 'satellite-beach-fl'],
    faqs: [
      {
        question: 'Do you offer vacation rental handyman services in Cocoa Beach?',
        answer:
          'Cocoa Beach is within our listed service area. We can review requested handyman repair lists for furnished and vacation properties. Availability depends on scope, access, and scheduling.',
      },
      {
        question: 'Do you provide property management or guest support?',
        answer:
          'No. We provide approved handyman repairs. Property management, housekeeping, routine inspections, and guest communication remain with the owner or manager.',
      },
    ],
    metaTitle: 'Cocoa Beach Vacation Rental Handyman | Right Away Services LLC',
    metaDescription:
      'Cocoa Beach handyman service for vacation rentals, condos, and coastal homes. Repair lists, doors, hardware, drywall, paint touch-ups, and furniture assembly.',
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
