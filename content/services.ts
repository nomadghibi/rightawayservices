export interface ServiceFAQ {
  question: string
  answer: string
}

export interface Service {
  slug: string
  name: string
  tagline: string
  shortDescription: string
  longDescription: string
  commonProblems: string[]
  whatWeOffer: string[]
  whoItsFor: string[]
  faqs: ServiceFAQ[]
  relatedServices: string[]
  metaTitle: string
  metaDescription: string
}

export const services: Service[] = [
  {
    slug: 'handyman-services',
    name: 'Handyman Services',
    tagline: 'Your go-to local handyman for Palm Bay, Melbourne, and the Space Coast.',
    shortDescription:
      'Professional handyman services for homes and rental properties across Florida\'s Space Coast. No job too small — repairs, installations, and maintenance handled right away.',
    longDescription:
      'When something breaks or needs attention around the house, you want it fixed quickly by someone you can trust. Right Away Services LLC provides reliable handyman help for homeowners, landlords, and property managers throughout Palm Bay, Melbourne, and surrounding Space Coast communities. Whether it\'s a loose door, a ceiling fan that needs replacing, drywall that needs patching, or a growing punch list of small repairs, we handle the work professionally and efficiently. Our goal is simple: show up on time, do good work, and leave your home better than we found it.',
    commonProblems: [
      'A growing list of small repairs you keep putting off',
      'New fixtures or furniture that need professional installation',
      'Rental property wear-and-tear between tenants',
      'Time-sensitive repairs you can\'t handle yourself',
      'Miscellaneous home maintenance that requires a skilled set of hands',
    ],
    whatWeOffer: [
      'General home repairs and maintenance',
      'Fixture and ceiling fan installation',
      'Drywall patching and painting touch-ups',
      'Door and window adjustments and repairs',
      'Furniture assembly',
      'Rental property punch-list work',
      'Pre-sale and move-in repair help',
    ],
    whoItsFor: [
      'Homeowners in Palm Bay and Melbourne',
      'Busy professionals who need work done without the hassle',
      'Landlords and rental property owners',
      'Property managers maintaining multiple units',
      'Seniors who need reliable help around the house',
      'Real estate agents needing pre-sale punch-list work completed',
    ],
    faqs: [
      {
        question: 'What kinds of jobs does a handyman handle?',
        answer:
          'Handyman work covers a wide range of small-to-medium home tasks: repairs, installations, minor replacements, and general maintenance. Common jobs include drywall patching, ceiling fan installation, door and window repairs, fixture replacements, furniture assembly, and caulking. If a job requires licensed specialty work like full electrical rewiring or major plumbing, we\'ll let you know upfront.',
      },
      {
        question: 'How quickly can Right Away Services LLC schedule service?',
        answer:
          'We aim to respond to all requests within one business day and can often schedule service within a few days. For urgent repairs, contact us directly by phone and we\'ll do our best to accommodate you quickly.',
      },
      {
        question: 'Do you charge by the hour or by the job?',
        answer:
          'Pricing depends on the scope of work. We offer both flat-rate pricing for common jobs and hourly rates for varied task lists. We\'ll give you a clear estimate before starting any work so there are no surprises.',
      },
    ],
    relatedServices: ['home-repairs', 'fixture-installation', 'property-maintenance'],
    metaTitle: 'Handyman Services in Palm Bay & Melbourne, FL | Right Away Services LLC',
    metaDescription:
      'Right Away Services LLC provides professional handyman services across Palm Bay, Melbourne, and Florida\'s Space Coast. Call today for fast, reliable home repair help.',
  },
  {
    slug: 'home-repairs',
    name: 'Home Repairs',
    tagline: 'Fast, professional home repairs for Space Coast homeowners.',
    shortDescription:
      'Dependable home repair services in Palm Bay, Melbourne, and nearby communities. From quick fixes to longer punch-list work, Right Away Services LLC gets it done.',
    longDescription:
      'Every home needs occasional repairs — it\'s simply part of homeownership. But finding someone reliable to show up, do the work correctly, and communicate clearly can be harder than it should be. Right Away Services LLC provides straightforward home repair services for homeowners and property managers throughout the Space Coast. We handle a wide variety of common household repairs, from fixing sticky doors and patching damaged walls to installing new fixtures and addressing general wear and tear. You get professional-quality workmanship without the hassle.',
    commonProblems: [
      'Doors that stick, won\'t latch, or have damaged frames',
      'Walls with holes, cracks, or water stains',
      'Fixtures that are broken, loose, or outdated',
      'Minor water damage repairs',
      'Worn or damaged trim and molding',
      'General wear and tear from daily use',
    ],
    whatWeOffer: [
      'Interior wall and ceiling repairs',
      'Door and trim repairs',
      'Minor wood rot and damage repair',
      'Caulking and sealing',
      'General fixture repairs',
      'Pre-sale and move-in repair work',
      'Rental turnover repairs',
    ],
    whoItsFor: [
      'Homeowners dealing with accumulated repairs',
      'Landlords preparing properties between tenants',
      'Sellers preparing a home for listing',
      'New homeowners addressing pre-existing issues',
      'Property managers maintaining tenant satisfaction',
    ],
    faqs: [
      {
        question: 'What types of home repairs do you handle?',
        answer:
          'We handle a broad range of general home repairs including drywall patching, door and window fixes, trim repairs, caulking, minor wood rot, and general fixture work. If your repair involves specialized licensed trades like HVAC or full electrical panel work, we\'ll point you in the right direction.',
      },
      {
        question: 'Can you handle multiple repairs in a single visit?',
        answer:
          'Absolutely. Many of our customers have a list of repairs they want completed in one visit. Just share what you need ahead of time so we can bring the right tools and materials and estimate the time accurately.',
      },
      {
        question: 'How do I know if I need a handyman or a licensed contractor?',
        answer:
          'For most small-to-medium repairs — patching, painting, installing fixtures, fixing doors, or general maintenance — a skilled handyman is the right call and often more cost-effective. If your project involves major structural changes, full electrical rewiring, plumbing beyond fixture swaps, or new construction, you\'ll want a licensed contractor for that scope.',
      },
    ],
    relatedServices: ['handyman-services', 'drywall-repair', 'door-and-window-repairs'],
    metaTitle: 'Home Repairs in Palm Bay & Melbourne, FL | Right Away Services LLC',
    metaDescription:
      'Professional home repair services in Palm Bay, Melbourne, and the Space Coast. Right Away Services LLC handles repairs of all kinds — quickly and professionally.',
  },
  {
    slug: 'drywall-repair',
    name: 'Drywall Repair',
    tagline: 'Clean, seamless drywall repairs for Florida homes.',
    shortDescription:
      'Professional drywall patching and repair in Palm Bay, Melbourne, and surrounding Space Coast areas. From small nail holes to larger damaged sections, we restore your walls cleanly.',
    longDescription:
      'Drywall damage is one of the most common home repair needs, and in Florida\'s humid climate it can be especially persistent. Cracks, holes from hardware removal, water stains, dents from moving furniture, and corner damage all need proper repair to look good and prevent further deterioration. Right Away Services LLC provides careful drywall repair work that blends seamlessly with existing surfaces. We patch, sand, prime, and finish so your walls look like nothing was ever there — whether it\'s a single nail hole or a fist-sized section that needs replacing.',
    commonProblems: [
      'Holes from removed hardware, doorknobs, or mounted items',
      'Cracks from settling or minor impact',
      'Water-stained or swollen drywall sections',
      'Corner bead damage',
      'Screw pops and surface blemishes',
      'Large damaged sections from leaks or accidents',
    ],
    whatWeOffer: [
      'Small hole and nail hole patching',
      'Medium and large section replacements',
      'Crack repair and surface skim coating',
      'Water-damaged drywall replacement',
      'Corner bead and edge repair',
      'Matching texture to existing walls',
      'Primer application ready for painting',
    ],
    whoItsFor: [
      'Homeowners repairing walls after moving artwork or mounted items',
      'Landlords preparing units between tenants',
      'Home sellers addressing visible damage before listing',
      'Homeowners dealing with minor water damage',
      'Anyone with unsightly wall damage they want fixed properly',
    ],
    faqs: [
      {
        question: 'Can you match the texture on my walls?',
        answer:
          'Yes. Florida homes commonly have orange peel, knockdown, or smooth finishes. We assess your existing texture and do our best to match it closely so repaired areas blend in naturally. Complex textures may require a test patch first.',
      },
      {
        question: 'How long does drywall repair take to dry?',
        answer:
          'Patching compounds typically need 24 hours to fully dry before sanding and priming. Multiple coats may be needed for larger repairs. We\'ll give you a realistic timeline so you can plan your painting accordingly.',
      },
      {
        question: 'Do you do the painting after the drywall repair?',
        answer:
          'We can apply primer to the repaired areas to prepare them for painting. For touch-up painting of the repaired sections or full wall repainting, ask about our interior painting services when you book your drywall repair.',
      },
    ],
    relatedServices: ['home-repairs', 'painting-services', 'handyman-services'],
    metaTitle: 'Drywall Repair in Palm Bay & Melbourne, FL | Right Away Services LLC',
    metaDescription:
      'Expert drywall patching and repair in Palm Bay, Melbourne, and the Space Coast. Right Away Services LLC fixes holes, cracks, and water damage — seamlessly.',
  },
  {
    slug: 'painting-services',
    name: 'Painting Services',
    tagline: 'Interior and exterior painting for homes across the Space Coast.',
    shortDescription:
      'Professional interior and exterior painting services for homes and rentals across Palm Bay, Melbourne, and the Space Coast. From full room repaints to exterior coats, touch-ups, and cabinet painting.',
    longDescription:
      'Right Away Services LLC provides professional painting services for homeowners, landlords, and property managers throughout Florida\'s Space Coast. Whether you need a full interior repaint, an exterior coat to protect and refresh your home, kitchen cabinet painting, or targeted touch-ups after repairs, Jamel and his crew deliver clean, high-quality results every time. We prep surfaces properly, use quality materials, protect your flooring and furniture, and clean up completely when the job is done. Our reviews consistently highlight our attention to detail, fair pricing, and professional approach — and we\'re proud of every project we complete.',
    commonProblems: [
      'Interior walls with scuffs, marks, fading, or patched areas needing a fresh coat',
      'Exterior paint that is peeling, fading, or weathering from Florida\'s heat and humidity',
      'Kitchen cabinets that look dated and need a color refresh',
      'Trim, doors, and accent areas that need a clean, uniform finish',
      'Rental units needing paint freshened between tenants',
      'Homes being prepared for sale that need walls and exterior looking their best',
    ],
    whatWeOffer: [
      'Full interior room painting',
      'Exterior home and structure painting',
      'Kitchen and bathroom cabinet painting',
      'Ceiling painting',
      'Trim, baseboard, and door painting',
      'Stucco painting and repair prep',
      'Pool deck and porch painting',
      'Interior painting touch-ups and color matching',
      'Rental turnover paint freshening',
      'Pre-sale cosmetic paint work',
    ],
    whoItsFor: [
      'Homeowners wanting to refresh interior rooms or repaint their home\'s exterior',
      'Landlords preparing rentals for new tenants',
      'Home sellers wanting walls and exterior looking their best before listing',
      'Anyone wanting kitchen cabinets updated without full replacement',
      'Property managers maintaining the appearance of residential units',
    ],
    faqs: [
      {
        question: 'Do you do full exterior painting, not just touch-ups?',
        answer:
          'Yes — exterior painting is one of our primary services. We handle full exterior repaints including walls, trim, doors, shutters, and more. We prep surfaces properly, addressing stucco issues and weathered areas before applying paint for a long-lasting finish.',
      },
      {
        question: 'Can you paint kitchen cabinets?',
        answer:
          'Yes. Cabinet painting is a popular service that dramatically updates a kitchen without the cost of replacement. We clean and prep cabinet surfaces thoroughly, apply the appropriate primer, and finish with durable paint in your chosen color.',
      },
      {
        question: 'Can you match paint colors if I don\'t have the original paint?',
        answer:
          'Yes. We can work with paint you have on hand, or help color-match existing walls using paint store tools. For touch-ups, we\'ll be upfront about how well the match will blend given the age and condition of existing paint.',
      },
      {
        question: 'Do you handle the prep work — moving furniture, covering floors?',
        answer:
          'Yes. We move and cover furniture, protect flooring, remove switch plates and outlet covers, and clean up fully when the job is done. Multiple reviews from our customers specifically highlight our care with their property.',
      },
    ],
    relatedServices: ['drywall-repair', 'home-repairs', 'property-maintenance'],
    metaTitle: 'Painting Services in Palm Bay & Melbourne, FL | Right Away Services LLC',
    metaDescription:
      'Interior and exterior painting services in Palm Bay, Melbourne, and the Space Coast. Right Away Services LLC handles full repaints, cabinet painting, touch-ups, and more.',
  },
  {
    slug: 'door-and-window-repairs',
    name: 'Door & Window Repairs',
    tagline: 'Smooth, secure doors and windows that work the way they should.',
    shortDescription:
      'Door and window repair services in Palm Bay, Melbourne, and nearby Space Coast communities. Fix sticking doors, damaged frames, broken hardware, and more.',
    longDescription:
      'A door that won\'t latch properly, a window that\'s stuck, or hardware that\'s broken might seem like a minor inconvenience — but these issues affect both daily comfort and home security. Right Away Services LLC handles door and window repairs throughout the Space Coast, addressing alignment issues, worn hardware, damaged frames, and weatherstripping that\'s past its prime. Florida\'s heat and humidity are hard on doors and windows over time, and small adjustments made early prevent bigger problems later.',
    commonProblems: [
      'Doors that stick or don\'t latch',
      'Doors or windows that don\'t seal properly',
      'Broken or worn hardware (hinges, locks, handles)',
      'Damaged door frames or jambs',
      'Weatherstripping that\'s cracked or missing',
      'Bifold, pocket, or sliding doors off their tracks',
    ],
    whatWeOffer: [
      'Door alignment and adjustment',
      'Hinge, lock, and handle replacement',
      'Door frame and jamb repair',
      'Weatherstripping replacement',
      'Window hardware replacement',
      'Sliding and bifold door track repairs',
      'Screen door repair and installation',
    ],
    whoItsFor: [
      'Homeowners with interior or exterior doors that need attention',
      'Landlords maintaining rental property door and window function',
      'Anyone with security concerns from doors that won\'t lock or latch properly',
      'Home sellers wanting proper door and window operation before listing',
    ],
    faqs: [
      {
        question: 'Why do doors stick in Florida homes?',
        answer:
          'Florida\'s heat and high humidity cause wood doors to swell and shift seasonally. This is especially common during summer. Door frame settling, hinge wear, and paint buildup are also common causes. Most sticking doors can be adjusted or planed without replacement.',
      },
      {
        question: 'Can you replace just a door handle or lock?',
        answer:
          'Yes — hardware-only replacements are a common request. We can swap out handles, deadbolts, and knob sets. If you already have the new hardware, we can install it. We can also advise on compatible replacements if you need them sourced.',
      },
      {
        question: 'Do you handle exterior doors?',
        answer:
          'Yes. We repair and adjust both interior and exterior doors. Exterior door repairs are important for security and energy efficiency — a door that doesn\'t seal properly lets in heat, humidity, and bugs in Florida\'s climate.',
      },
    ],
    relatedServices: ['home-repairs', 'handyman-services', 'fixture-installation'],
    metaTitle: 'Door & Window Repairs in Palm Bay & Melbourne, FL | Right Away Services LLC',
    metaDescription:
      'Professional door and window repair services in Palm Bay, Melbourne, and the Space Coast. Fix sticking doors, broken hardware, and worn weatherstripping.',
  },
  {
    slug: 'fixture-installation',
    name: 'Fixture Installation',
    tagline: 'Expert fixture installation for kitchens, bathrooms, and living spaces.',
    shortDescription:
      'Light fixture, bathroom fixture, and hardware installation across Palm Bay, Melbourne, and the Space Coast. Professional install, clean finish, no hassle.',
    longDescription:
      'New fixtures can transform the feel of a room — and installing them doesn\'t have to be complicated when you have the right help. Right Away Services LLC installs light fixtures, bathroom hardware, kitchen accessories, towel bars, toilet paper holders, mirrors, and more throughout Space Coast homes. We handle the careful work of removing old fixtures, making secure connections, and leaving your new hardware properly mounted and looking sharp. For homeowners who want updated fixtures without the DIY frustration, we\'re here to help.',
    commonProblems: [
      'Old, outdated light fixtures that need replacing',
      'Bathroom fixtures loose or not mounted properly',
      'Towel bars, toilet paper holders, or mirrors that need installing',
      'Kitchen hardware that\'s worn or needs an update',
      'Exterior light fixtures that need replacing',
    ],
    whatWeOffer: [
      'Interior light fixture replacement and installation',
      'Exterior light fixture installation',
      'Bathroom fixture mounting (towel bars, toilet paper holders, mirrors)',
      'Vanity light installation',
      'Kitchen and bathroom hardware installation',
      'Shelf and floating shelf installation',
      'TV wall mount installation',
    ],
    whoItsFor: [
      'Homeowners updating lighting or bathroom aesthetics',
      'New homeowners who want fixtures replaced before moving in',
      'Landlords replacing worn or dated fixtures between tenants',
      'Anyone who wants hardware properly mounted without DIY struggle',
    ],
    faqs: [
      {
        question: 'Do you install ceiling fans as well as light fixtures?',
        answer:
          'Yes — ceiling fan installation is one of our most popular services. See our dedicated ceiling fan installation page for details on what\'s included.',
      },
      {
        question: 'Do I need to purchase the fixtures ahead of time?',
        answer:
          'In most cases, yes — we install what you\'ve already sourced. This gives you full control over the look and product choice. If you\'d like help with product selection, just ask and we can offer guidance.',
      },
      {
        question: 'Can you remove old fixtures safely?',
        answer:
          'Yes. Safe removal of old fixtures is part of the installation process. We handle disconnecting and disposing of old hardware cleanly.',
      },
    ],
    relatedServices: ['ceiling-fan-installation', 'handyman-services', 'home-repairs'],
    metaTitle: 'Fixture Installation in Palm Bay & Melbourne, FL | Right Away Services LLC',
    metaDescription:
      'Professional fixture installation in Palm Bay, Melbourne, and the Space Coast. Light fixtures, bathroom hardware, shelves, and more — installed cleanly and correctly.',
  },
  {
    slug: 'ceiling-fan-installation',
    name: 'Ceiling Fan Installation',
    tagline: 'Stay cool — professionally installed ceiling fans for Space Coast homes.',
    shortDescription:
      'Ceiling fan installation and replacement across Palm Bay, Melbourne, and the Space Coast. Safe, clean installs with existing wiring. No ladder rental, no guesswork.',
    longDescription:
      'Ceiling fans are practically essential in Florida homes — they keep rooms comfortable year-round and reduce energy costs. Right Away Services LLC installs and replaces ceiling fans in bedrooms, living rooms, patios, and more throughout the Space Coast. We work with your existing ceiling box and wiring to get your new fan up safely and spinning properly. Whether you\'re replacing an old fan that\'s wobbly or noisy, or adding a new fan to a room that didn\'t have one, we handle the whole job cleanly from start to finish.',
    commonProblems: [
      'Old ceiling fans that wobble, rattle, or run slowly',
      'New fans purchased but not yet installed',
      'Fan-only fixtures where you want to add a light kit',
      'Fans in older homes with outdated mounting boxes',
      'Outdoor patio fans that need replacement',
    ],
    whatWeOffer: [
      'Standard ceiling fan replacement on existing box',
      'New ceiling fan installation',
      'Outdoor/patio ceiling fan installation',
      'Fan removal and disposal',
      'Remote and wall-switch setup',
      'Wobble correction on existing fans',
    ],
    whoItsFor: [
      'Florida homeowners who want functional, efficient ceiling fans',
      'New homeowners replacing dated or non-working fans',
      'Landlords replacing fans in rental units',
      'Anyone who bought a new fan and wants it installed correctly',
    ],
    faqs: [
      {
        question: 'Do you need to run new wiring for a ceiling fan?',
        answer:
          'In most cases, we install on existing wiring. If there\'s no existing ceiling box where you want a fan, wiring work would require a licensed electrician. We\'ll assess your situation during the estimate and let you know what\'s needed.',
      },
      {
        question: 'Can you install a ceiling fan with a light kit?',
        answer:
          'Yes — combination fan-light fixtures are very common and we install them regularly. Make sure your new fan includes the light kit if you want one; some fans are sold separately.',
      },
      {
        question: 'How long does ceiling fan installation take?',
        answer:
          'A standard ceiling fan replacement on an existing box typically takes 30 to 60 minutes. New installs or more complex setups may take longer. We can estimate time during booking.',
      },
    ],
    relatedServices: ['fixture-installation', 'handyman-services', 'home-repairs'],
    metaTitle: 'Ceiling Fan Installation in Palm Bay & Melbourne, FL | Right Away Services LLC',
    metaDescription:
      'Professional ceiling fan installation and replacement in Palm Bay, Melbourne, and the Space Coast. Safe, clean installs — no ladder rental required.',
  },
  {
    slug: 'furniture-assembly',
    name: 'Furniture Assembly',
    tagline: 'Skip the instruction manual. We assemble furniture right the first time.',
    shortDescription:
      'Professional furniture assembly in Palm Bay, Melbourne, and the Space Coast. Flat-pack furniture, desks, shelving, beds, and more — assembled quickly and correctly.',
    longDescription:
      'Flat-pack furniture assembly is one of those jobs that looks simple until you\'re surrounded by pieces, confusing instructions, and parts that don\'t seem to fit. Right Away Services LLC assembles furniture efficiently and correctly so you don\'t have to spend your weekend on it. From bed frames and dressers to desks, shelving units, TV stands, and outdoor furniture, we put it together properly the first time. We can assemble one piece or tackle an entire room — great for new homeowners, office setups, or anyone who just wants it done.',
    commonProblems: [
      'Large, complex furniture pieces with confusing instructions',
      'Multiple pieces purchased at once',
      'Heavy or awkward items that require two people',
      'Furniture that was assembled incorrectly and needs to be redone',
      'No time or patience for instruction manuals',
    ],
    whatWeOffer: [
      'Flat-pack furniture assembly (IKEA, Wayfair, Amazon, and more)',
      'Bed frames and headboards',
      'Desks and office furniture',
      'Shelving and bookcase assembly',
      'Dressers, wardrobes, and storage units',
      'TV stands and entertainment centers',
      'Outdoor and patio furniture assembly',
    ],
    whoItsFor: [
      'New homeowners or renters setting up a new space',
      'Anyone who purchased multiple pieces of furniture at once',
      'Seniors or individuals who can\'t manage heavy assembly',
      'Home offices needing quick professional setup',
      'Anyone who wants furniture assembled correctly without the frustration',
    ],
    faqs: [
      {
        question: 'Do you assemble IKEA furniture?',
        answer:
          'Yes — IKEA is one of the most common brands we assemble. We also handle furniture from Wayfair, Amazon, Target, West Elm, and most other flat-pack brands.',
      },
      {
        question: 'What if parts are missing from my furniture box?',
        answer:
          'We\'ll let you know right away if anything appears to be missing. You\'ll need to contact the manufacturer or retailer for replacement parts. We can reschedule the assembly once you have everything you need.',
      },
      {
        question: 'How long does furniture assembly take?',
        answer:
          'Assembly time varies by piece. A simple bookshelf might take 30 minutes; a large wardrobe or complex desk could take 2+ hours. When you book, describe what you need assembled and we\'ll estimate the time accurately.',
      },
    ],
    relatedServices: ['handyman-services', 'fixture-installation', 'home-repairs'],
    metaTitle: 'Furniture Assembly in Palm Bay & Melbourne, FL | Right Away Services LLC',
    metaDescription:
      'Professional furniture assembly in Palm Bay, Melbourne, and the Space Coast. IKEA, Wayfair, and more — assembled quickly and correctly the first time.',
  },
  {
    slug: 'property-maintenance',
    name: 'Property Maintenance',
    tagline: 'Reliable maintenance support for landlords and property managers.',
    shortDescription:
      'Ongoing property maintenance and turnover repairs for landlords and property managers across Palm Bay, Melbourne, and the Space Coast. Keep your properties in top condition.',
    longDescription:
      'Maintaining rental properties and managed properties is a constant job — small repairs accumulate, tenants report issues, and turnovers need to happen quickly. Right Away Services LLC supports landlords and property managers throughout the Space Coast with reliable, responsive maintenance work. We handle the recurring small repairs, tenant-reported fixes, and turnover punch lists that keep your properties occupied, presentable, and code-compliant. Having a consistent handyman you can call is one of the most valuable assets for anyone managing rental real estate in Palm Bay, Melbourne, or nearby communities.',
    commonProblems: [
      'Ongoing repairs between tenants',
      'Tenant-reported maintenance issues needing fast response',
      'Accumulated deferred maintenance',
      'Preparing a unit for a new tenant quickly',
      'Pre-inspection repairs',
      'Property damage repairs from tenant wear and tear',
    ],
    whatWeOffer: [
      'Rental turnover punch-list work',
      'Tenant-reported repair response',
      'Drywall and paint touch-up between tenants',
      'Door, window, and hardware repairs',
      'Fixture and appliance installation',
      'Pre-inspection preparation',
      'Seasonal property checks and maintenance',
    ],
    whoItsFor: [
      'Landlords with one or multiple rental units',
      'Property managers serving residential clients',
      'Real estate investors maintaining rental portfolios',
      'Airbnb and short-term rental hosts',
      'Out-of-town property owners needing a local contact',
    ],
    faqs: [
      {
        question: 'Do you work with property management companies?',
        answer:
          'Yes — we work with individual landlords and property management companies alike. We can communicate directly with property managers and coordinate with tenants when needed.',
      },
      {
        question: 'How quickly can you respond to tenant maintenance requests?',
        answer:
          'We prioritize quick responses for property management clients. For non-emergency maintenance, we typically schedule within a few business days. For urgent issues affecting habitability, call us directly and we\'ll do our best to respond same day or next day.',
      },
      {
        question: 'Can you do complete unit turnovers?',
        answer:
          'Yes. We can handle the full repair and touch-up punch list to get a unit ready for a new tenant — drywall, paint, door repairs, fixture replacements, hardware, and more. Share your list and we\'ll give you a clear estimate.',
      },
    ],
    relatedServices: ['handyman-services', 'home-repairs', 'drywall-repair'],
    metaTitle: 'Property Maintenance in Palm Bay & Melbourne, FL | Right Away Services LLC',
    metaDescription:
      'Reliable property maintenance and rental turnover services for landlords and property managers in Palm Bay, Melbourne, and the Space Coast.',
  },
  {
    slug: 'bathroom-remodeling',
    name: 'Bathroom Remodeling',
    tagline: 'Transform your bathroom with professional remodeling across the Space Coast.',
    shortDescription:
      'Bathroom remodeling services in Palm Bay, Melbourne, and the Space Coast. From vanity and fixture upgrades to full bathroom renovations, Right Away Services LLC handles it all.',
    longDescription:
      'A bathroom remodel is one of the highest-return improvements a homeowner can make — and Right Away Services LLC delivers the quality and professionalism to do it right. Whether you want to update an outdated vanity, retile a shower, replace fixtures throughout, or completely gut and renovate a bathroom from the floor up, Jamel and his crew bring the same meticulous attention to detail they\'re known for across all their work. We serve homeowners, landlords refreshing rental units, and property managers preparing properties for new tenants throughout Palm Bay, Melbourne, and surrounding Space Coast communities.',
    commonProblems: [
      'Outdated bathrooms that feel worn, cramped, or dated',
      'Damaged or moldy tile in showers and around tubs',
      'Old vanities, sinks, and fixtures that need replacing',
      'Poor lighting that makes bathrooms feel dark and uninviting',
      'Rental bathrooms that need updating to attract quality tenants',
      'Water damage or deterioration behind walls or under flooring',
    ],
    whatWeOffer: [
      'Full bathroom gut and renovation',
      'Vanity and sink replacement',
      'Toilet replacement and installation',
      'Shower and tub surround tile work',
      'Shower enclosure and door installation',
      'Bathroom flooring installation',
      'Light fixture and exhaust fan replacement',
      'Mirror and medicine cabinet installation',
      'Towel bar, toilet paper holder, and accessory installation',
      'Drywall repair and painting in bathroom spaces',
    ],
    whoItsFor: [
      'Homeowners wanting to modernize an outdated bathroom',
      'Landlords upgrading rental bathrooms to attract better tenants',
      'Home sellers wanting bathrooms to impress buyers',
      'Property managers handling unit renovations',
      'Anyone dealing with bathroom damage, mold, or deterioration',
    ],
    faqs: [
      {
        question: 'Do you handle full bathroom renovations or just repairs?',
        answer:
          'Both. We handle everything from targeted repairs and fixture replacements to complete bathroom gut-and-renovate projects. Whatever the scope, we\'ll give you a clear estimate before starting any work.',
      },
      {
        question: 'Can you replace just a vanity or toilet without a full remodel?',
        answer:
          'Absolutely. Single-fixture replacements are a common request. We can swap out a vanity, toilet, light fixture, or shower hardware without touching the rest of the bathroom.',
      },
      {
        question: 'Do you do tile work in showers and on floors?',
        answer:
          'Yes. Tile installation and replacement in showers, tub surrounds, and bathroom floors is part of our remodeling services. We can also replace damaged or missing grout and recaulk shower and tub areas.',
      },
      {
        question: 'How long does a bathroom remodel take?',
        answer:
          'It depends on the scope. A vanity swap or fixture update might take a single day. A full bathroom renovation typically takes several days to a week or more. We\'ll give you a realistic timeline during your estimate so you can plan accordingly.',
      },
    ],
    relatedServices: ['fixture-installation', 'home-repairs', 'painting-services'],
    metaTitle: 'Bathroom Remodeling in Palm Bay & Melbourne, FL | Right Away Services LLC',
    metaDescription:
      'Professional bathroom remodeling in Palm Bay, Melbourne, and the Space Coast. Right Away Services LLC handles full renovations, vanity replacements, tile work, and more.',
  },
  {
    slug: 'fence-installation-and-repair',
    name: 'Fence Installation & Repair',
    tagline: 'New fence installs and repairs for homes across the Space Coast.',
    shortDescription:
      'Professional fence installation and repair in Palm Bay, Melbourne, and the Space Coast. Wood, vinyl, chain link, and privacy fencing installed and repaired by Right Away Services LLC.',
    longDescription:
      'A fence adds privacy, security, and curb appeal to any property — and Right Away Services LLC installs and repairs fences throughout Florida\'s Space Coast. Whether you need a brand-new fence for your backyard, a section replaced after storm damage, a gate rehung, or rotted posts swapped out, Jamel and his crew handle the work properly from the ground up. Florida\'s weather is tough on fences — heat, humidity, and storm season take a toll — so timely repairs and quality installation make a real difference in how long your fence lasts.',
    commonProblems: [
      'Rotted or damaged fence posts and panels from Florida weather',
      'Storm damage leaving sections leaning or collapsed',
      'Gates that won\'t latch, sag, or are off their hinges',
      'Old or weathered fencing that needs replacing',
      'New homes or properties needing a fence installed for the first time',
      'Rental properties needing fence repairs before tenant move-in',
    ],
    whatWeOffer: [
      'Wood fence installation (privacy, picket, split rail)',
      'Vinyl fence installation',
      'Chain link fence installation',
      'Fence panel and post replacement',
      'Gate installation and repair',
      'Storm damage fence repair',
      'Rotted post replacement',
      'Fence staining and painting',
      'Partial fence section replacement',
    ],
    whoItsFor: [
      'Homeowners wanting to add privacy or security to their yard',
      'Property owners replacing storm-damaged or deteriorated fencing',
      'Landlords repairing or replacing fencing between tenants',
      'New homeowners installing a fence for pets, kids, or privacy',
      'Anyone with a sagging gate or damaged fence section that needs fixing',
    ],
    faqs: [
      {
        question: 'What types of fencing do you install?',
        answer:
          'We install wood privacy fences, picket fences, vinyl fencing, and chain link fencing. Wood and vinyl are the most popular choices for residential properties on the Space Coast. We\'ll help you choose the right material for your needs and budget.',
      },
      {
        question: 'Can you repair just a section of my fence instead of replacing the whole thing?',
        answer:
          'Yes — partial repairs and section replacements are very common. If only part of your fence is damaged, we can replace just those panels or posts and match the existing style as closely as possible.',
      },
      {
        question: 'Do you repair fence gates?',
        answer:
          'Yes. Gate repairs are one of our most frequent fence calls — sagging gates, gates that won\'t latch, broken hinges, and gates knocked off track by wind. We also install new gates if you need one added to an existing fence.',
      },
      {
        question: 'How does Florida weather affect fences?',
        answer:
          'Florida\'s heat, humidity, and storm season accelerate wear on all fence types. Wood fences are especially susceptible to rot and insect damage. Vinyl holds up better to moisture but can be damaged in high winds. Regular inspection and prompt repairs extend the life of any fence significantly.',
      },
    ],
    relatedServices: ['home-repairs', 'property-maintenance', 'handyman-services'],
    metaTitle: 'Fence Installation & Repair in Palm Bay & Melbourne, FL | Right Away Services LLC',
    metaDescription:
      'Professional fence installation and repair in Palm Bay, Melbourne, and the Space Coast. Wood, vinyl, chain link, and gate repairs — Right Away Services LLC.',
  },
  {
    slug: 'roof-leak-repair',
    name: 'Roof Leak Repair',
    tagline: 'Fast, reliable roof leak repairs for Space Coast homes.',
    shortDescription:
      'Roof leak detection and repair in Palm Bay, Melbourne, and the Space Coast. Right Away Services LLC patches leaks, replaces damaged shingles, and seals problem areas before water damage gets worse.',
    longDescription:
      'A roof leak in Florida is never something to wait on. What starts as a small drip can quickly lead to damaged drywall, mold growth, and structural deterioration — especially given the heat, humidity, and heavy rain the Space Coast sees year-round. Right Away Services LLC provides roof leak repair services for homeowners and property managers throughout Palm Bay, Melbourne, and surrounding communities. We locate the source of the leak, make targeted repairs, and seal vulnerable areas to stop water intrusion. From missing or damaged shingles to flashing issues and pipe boot failures, we handle the repairs that keep water out of your home.',
    commonProblems: [
      'Active leaks during or after rainstorms',
      'Water stains on ceilings or interior walls from an ongoing slow leak',
      'Missing, cracked, or curled shingles from age or storm damage',
      'Damaged or deteriorated flashing around chimneys, vents, or skylights',
      'Failed pipe boot seals around plumbing penetrations',
      'Storm damage causing immediate roof vulnerability',
      'Flat roof ponding or membrane issues',
    ],
    whatWeOffer: [
      'Roof leak detection and source identification',
      'Shingle repair and replacement',
      'Flashing repair and re-sealing',
      'Pipe boot and vent seal replacement',
      'Flat roof patching and sealing',
      'Fascia and soffit repair related to roof leaks',
      'Storm damage roof repair',
      'Emergency tarping to prevent further damage',
      'Follow-up interior drywall repair from water damage',
    ],
    whoItsFor: [
      'Homeowners with an active or suspected roof leak',
      'Landlords dealing with tenant-reported roof leaks',
      'Property managers handling post-storm damage',
      'Anyone with water stains on ceilings that need diagnosing',
      'Homeowners whose roof was damaged by wind or debris',
    ],
    faqs: [
      {
        question: 'How do I know if I have a roof leak?',
        answer:
          'Common signs include water stains or discoloration on ceilings and walls, damp spots in the attic, missing or visibly damaged shingles, or dripping during or after rain. If you notice any of these, it\'s best to have it looked at promptly — leaks typically get worse over time.',
      },
      {
        question: 'Can you do the interior repair too after a leak?',
        answer:
          'Yes. Once the roof is repaired and watertight, we can also handle the interior follow-up work — patching water-damaged drywall, priming, and painting — so your ceiling and walls look right again.',
      },
      {
        question: 'Do you handle emergency roof repairs after storms?',
        answer:
          'Yes. After a storm, we can provide emergency tarping to protect your home from further water intrusion, followed by proper repairs. Contact us as soon as possible after storm damage — the sooner we address it, the less secondary damage occurs.',
      },
      {
        question: 'Do you replace full roofs or only do repairs?',
        answer:
          'Our focus is on targeted leak repairs, patch work, and storm damage repair. For a full roof replacement, we can assess your situation and let you know whether repair or replacement is the right call for your specific roof.',
      },
    ],
    relatedServices: ['home-repairs', 'drywall-repair', 'property-maintenance'],
    metaTitle: 'Roof Leak Repair in Palm Bay & Melbourne, FL | Right Away Services LLC',
    metaDescription:
      'Roof leak repair in Palm Bay, Melbourne, and the Space Coast. Right Away Services LLC fixes leaks, damaged shingles, flashing, and storm damage before water causes bigger problems.',
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug)
}

export function getRelatedServices(slugs: string[]): Service[] {
  return services.filter((s) => slugs.includes(s.slug))
}
