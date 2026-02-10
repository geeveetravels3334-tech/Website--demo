
export type Language = 'en' | 'ta' | 'hi' | 'te' | 'kn';

export interface ItineraryStep {
  text: string;
  image?: string;
}

export interface PackageDetail {
  title: string;
  duration: string;
  price: string;
  image: string;
  itinerary: ItineraryStep[];
  inclusions: string[];
}

// Reliable Image Assets - High Quality Unsplash Links
const IMG_VELANKANNI = "https://images.unsplash.com/photo-1543743560-6101c4475453?q=80&w=1200&auto=format&fit=crop"; // Velankanni Church / Architecture
const IMG_MURUGAN = "https://images.unsplash.com/photo-1627649806443-41c304d9c05e?q=80&w=1200&auto=format&fit=crop"; // Temple Gopuram
const IMG_SHIVA = "https://images.unsplash.com/photo-1582510003544-5243788d9d0d?q=80&w=1200&auto=format&fit=crop"; // Madurai Meenakshi Style
const IMG_KANCHI = "https://images.unsplash.com/photo-1625633423714-388e2c070868?q=80&w=1200&auto=format&fit=crop"; // Kanchipuram Temple/Pillars
const IMG_MAHAB = "https://images.unsplash.com/photo-1605436247078-f0ef43ee8d5c?q=80&w=1200&auto=format&fit=crop"; // Mahabalipuram Shore Temple
const IMG_TIRUPATI = "https://images.unsplash.com/photo-1657876527447-3c58b3c29d00?q=80&w=1200&auto=format&fit=crop"; // Tirupati/Hill Temple
const IMG_PONDY = "https://images.unsplash.com/photo-1582512390196-80948f070669?q=80&w=1200&auto=format&fit=crop"; // Pondicherry French Quarter

export const translations = {
  en: {
    brand: "Gee Vee Travels",
    subBrand: "Tamil Nadu Taxi Tours and Travels",
    nav: {
      home: "Home",
      packages: "Tour Plans",
      fleet: "Fleet",
      tariff: "Tariff",
      reviews: "Reviews",
      bookNow: "BOOK NOW",
      call: "24/7 Booking:"
    },
    booking: {
      onewaydrop: "One Way Drop",
      roundtrip: "Round Trip",
      localairport: "Local / Airport",
      pickup: "Pickup Location",
      drop: "Drop Location",
      date: "Travel Date",
      time: "Pickup Time",
      mobile: "Mobile Number (Optional)",
      confirm: "Confirm Booking",
      success: "Booking Confirmed!",
      successDesc: "Your request has been received. Our team will contact you shortly on WhatsApp to finalize the details.",
      back: "Back to Home",
      selectVehicle: "Select Your Vehicle",
      chooseFromFleet: "Choose from our premium fleet"
    },
    hero: {
      subtitle: "Premium outstation and local cab booking service in Tamil Nadu with fixed pricing and professional drivers.",
      bookNow: "Book Your Elite Ride",
      chat: "Chat with Experts"
    },
    packages: {
      sectionTitle: "Bespoke Tour Packages",
      sectionSubtitle: "Explore our handpicked spiritual, heritage, and leisure tour plans across Tamil Nadu.",
      exploreBtn: "View All Plans",
      closeBtn: "Close Plans",
      title: "Our Tour Plans",
      list: [
        { id: 'velankanni', name: "Chennai to Velankanni 2 Days", image: IMG_VELANKANNI },
        { id: 'arupadaiveedu', name: "Arupadai Veedu Tour", image: IMG_MURUGAN },
        { id: 'panchabhoota', name: "5 Elements Temple Tour", image: IMG_SHIVA },
        { id: 'kanchipuram', name: "Kanchipuram Temple Tour", image: IMG_KANCHI },
        { id: 'mahabalipuram', name: "Mahabalipuram Day Trip", image: IMG_MAHAB },
        { id: 'tirupati', name: "Tirupati Spiritual Tour", image: IMG_TIRUPATI },
        { id: 'pondicherry', name: "Pondicherry 3 Days Tour", image: IMG_PONDY }
      ]
    },
    airport: {
      tag: "AIRPORT LOGISTICS",
      desc: "Punctual, clean, and reliable transfers for all major TN airports.",
      benefit1: "On-Time Arrival",
      benefit1Desc: "Flight monitoring ensures we are there when you land.",
      benefit2: "Large Fleet",
      benefit2Desc: "SUVs and Tempo Travellers for family luggage.",
      benefit3: "Safety First",
      benefit3Desc: "Professional drivers with expert local navigation.",
      bookBtn: "Book Airport Ride"
    },
    corporate: {
      tag: "SPECIAL SERVICES",
      title: "Corporate & Industrial Logistics",
      subtitle: "Tailored transportation for major industrial hubs and corporate offices.",
      description: "Our corporate packages cover major cities and industrial SIPCOT parks, providing reliable professional transit.",
      hubs: [
        { name: "Sri City (Tada)", desc: "Integrated Business City" },
        { name: "Sriperumbudur", desc: "Automobile Hub" },
        { name: "Oragadam", desc: "Industrial Corridor" },
        { name: "SIPCOT Parks", desc: "Manufacturing Hubs" }
      ],
      cta: "Enquire for Corporate Plans"
    },
    packageDisclaimer: "Note: Toll, Parking, and State Permit fees are excluded and must be paid as per actuals.",
    packageDetails: {
      velankanni: {
        title: "Chennai to Velankanni 2 Days Tour Package",
        duration: "2 Days / 1 Night",
        price: "Starts at ₹8,200",
        image: IMG_VELANKANNI,
        itinerary: [
          { text: "Day 1: Pickup from Chennai and drive to Velankanni. Visit Our Lady of Health Basilica.", image: IMG_VELANKANNI },
          { text: "Day 1: Evening attendance at the Holy Rosary and Beach visit.", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop" },
          { text: "Day 2: Morning Mass at the Basilica, Visit the Museum of Offerings.", image: "https://images.unsplash.com/photo-1548649169-98018e7e14f5?q=80&w=600&auto=format&fit=crop" },
          { text: "Day 2: Afternoon departure and Safe Return journey to Chennai.", image: "https://images.unsplash.com/photo-1580191947416-62d35a55e71d?q=80&w=600&auto=format&fit=crop" }
        ],
        inclusions: ["Fuel and Driver Batta", "Sedan: ₹8,200", "SUV: ₹10,750", "Professional Chauffeur"]
      },
      arupadaiveedu: {
        title: "Arupadai Veedu (6 Abodes of Murugan) 4 Days Tour",
        duration: "4 Days / 3 Nights",
        price: "Starts at ₹15,550",
        image: IMG_MURUGAN,
        itinerary: [
          { text: "Day 1: Chennai to Tiruttani (5th Abode) and Swamimalai (4th Abode).", image: IMG_MURUGAN },
          { text: "Day 2: Visit Pazhamudircholai (6th Abode) & Thiruparankundram (1st Abode).", image: "https://images.unsplash.com/photo-1620392385773-8e930f81119e?q=80&w=600&auto=format&fit=crop" },
          { text: "Day 3: Visit Tiruchendur (2nd Abode) Beach Temple.", image: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?q=80&w=600&auto=format&fit=crop" },
          { text: "Day 4: Visit Palani (3rd Abode) Hill Temple and Return to Chennai.", image: "https://images.unsplash.com/photo-1544011501-a212f2f45d41?q=80&w=600&auto=format&fit=crop" }
        ],
        inclusions: ["Fuel and Driver Batta", "Sedan: ₹15,550", "SUV: ₹21,500", "Temple Guidance"]
      },
      panchabhoota: {
        title: "Pancha Bhoota Sthalam (5 Elements) 5 Days Tour",
        duration: "5 Days / 4 Nights",
        price: "Starts at ₹19,500",
        image: IMG_SHIVA,
        itinerary: [
          { text: "Day 1: Kanchipuram (Earth/Prithvi) - Ekambareswarar Temple.", image: "https://images.unsplash.com/photo-1627894451246-173d573cb11b?q=80&w=600&auto=format&fit=crop" },
          { text: "Day 2: Tiruvannamalai (Fire/Agni) - Arunachaleswarar Temple.", image: "https://images.unsplash.com/photo-1600613278822-7203b9b47816?q=80&w=600&auto=format&fit=crop" },
          { text: "Day 3: Trichy/Thiruvanaikaval (Water/Appu) - Jambukeswarar Temple.", image: "https://images.unsplash.com/photo-1572529598858-52538f71f653?q=80&w=600&auto=format&fit=crop" },
          { text: "Day 4: Chidambaram (Sky/Akash) - Natarajar Temple.", image: "https://images.unsplash.com/photo-1565551571216-72cb62118224?q=80&w=600&auto=format&fit=crop" },
          { text: "Day 5: Srikalahasti (Air/Vayu) and return to Chennai.", image: "https://images.unsplash.com/photo-1643285747683-14545f49618a?q=80&w=600&auto=format&fit=crop" }
        ],
        inclusions: ["Fuel and Driver Batta", "Sedan: ₹19,500", "SUV: ₹26,000", "Toll/Parking Extra"]
      },
      kanchipuram: {
        title: "Kanchipuram & Mahabalipuram 1 Day Tour",
        duration: "1 Day (12-14 Hours)",
        price: "Starts at ₹3,800",
        image: IMG_KANCHI,
        itinerary: [
          { text: "Morning: Pickup from Chennai, Drive to Kanchipuram. Visit Kamakshi Amman & Kailasanathar Temples.", image: IMG_KANCHI },
          { text: "Afternoon: Silk Saree Shopping (Optional) and Lunch.", image: "https://images.unsplash.com/photo-1610123598147-f632aa18b275?q=80&w=600&auto=format&fit=crop" },
          { text: "Evening: Drive to Mahabalipuram. Visit Shore Temple and Five Rathas.", image: IMG_MAHAB },
          { text: "Night: Return to Chennai drop.", image: "https://images.unsplash.com/photo-1615878426034-7033501a2d48?q=80&w=600&auto=format&fit=crop" }
        ],
        inclusions: ["Fuel", "Driver Batta", "Sedan: ₹3,800", "SUV: ₹5,500"]
      },
      mahabalipuram: {
        title: "Mahabalipuram & Pondicherry 2 Days Tour",
        duration: "2 Days / 1 Night",
        price: "Starts at ₹5,500",
        image: IMG_MAHAB,
        itinerary: [
          { text: "Day 1: Chennai to Mahabalipuram sightseeing (UNESCO sites).", image: IMG_MAHAB },
          { text: "Day 1: Drive to Pondicherry via ECR. Evening Beach walk.", image: IMG_PONDY },
          { text: "Day 2: Auroville, French Colony, and Paradise Beach.", image: "https://images.unsplash.com/photo-1588713531121-6512687dfc32?q=80&w=600&auto=format&fit=crop" },
          { text: "Day 2: Return to Chennai.", image: "https://images.unsplash.com/photo-1524230507669-5ff97982bb5e?q=80&w=600&auto=format&fit=crop" }
        ],
        inclusions: ["Fuel", "Driver Batta", "Sedan: ₹5,500", "SUV: ₹7,500"]
      },
      tirupati: {
        title: "Chennai to Tirupati One Day Tour",
        duration: "1 Day / Same Day Return",
        price: "Starts at ₹4,500",
        image: IMG_TIRUPATI,
        itinerary: [
          { text: "Pickup from Chennai (Early Morning).", image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=600&auto=format&fit=crop" },
          { text: "Drive to Tirumala. Darshan assistance (Tickets to be booked by guest).", image: IMG_TIRUPATI },
          { text: "Visit Padmavathi Ammavari Temple at Tiruchanur.", image: "https://images.unsplash.com/photo-1608632603896-b60d4b2e88a3?q=80&w=600&auto=format&fit=crop" },
          { text: "Return to Chennai by night.", image: "https://images.unsplash.com/photo-1518242065846-51d02c5f1c48?q=80&w=600&auto=format&fit=crop" }
        ],
        inclusions: ["Fuel", "Driver Batta", "Andhra Permit & Tax Extra", "Sedan: ₹4,500", "SUV: ₹6,000"]
      },
      pondicherry: {
        title: "Pondicherry Leisure 3 Days Tour",
        duration: "3 Days / 2 Nights",
        price: "Starts at ₹7,500",
        image: IMG_PONDY,
        itinerary: [
          { text: "Day 1: Arrival in Pondicherry. Check-in and Promenade Beach.", image: IMG_PONDY },
          { text: "Day 2: Auroville Globe (Matrimandir) and French Quarter Heritage Walk.", image: "https://images.unsplash.com/photo-1552554203-d6c57f7267dc?q=80&w=600&auto=format&fit=crop" },
          { text: "Day 3: Chunnambar Boat House and Return to Chennai.", image: "https://images.unsplash.com/photo-1580974533083-d2d057797746?q=80&w=600&auto=format&fit=crop" }
        ],
        inclusions: ["Fuel", "Driver Batta", "Sedan: ₹7,500", "SUV: ₹9,800"]
      }
    },
    packageForm: {
      title: "Book This Package",
      name: "Your Name",
      phone: "Phone Number",
      date: "Travel Date",
      submit: "Send Enquiry"
    }
  },
  ta: {
    brand: "ஜீ வி டிராவல்ஸ்",
    subBrand: "தமிழ்நாடு டாக்ஸி டூர்ஸ் & டிராவல்ஸ்",
    nav: {
      home: "முகப்பு",
      packages: "சுற்றுலா திட்டங்கள்",
      fleet: "வாகனங்கள்",
      tariff: "கட்டணம்",
      reviews: "விமர்சனங்கள்",
      bookNow: "முன்பதிவு",
      call: "24/7 முன்பதிவு:"
    },
    booking: {
      onewaydrop: "ஒரு வழி பயணம்",
      roundtrip: "இரு வழி பயணம்",
      localairport: "உள்ளூர் / விமான நிலையம்",
      pickup: "புறப்படும் இடம்",
      drop: "செல்லும் இடம்",
      date: "பயண தேதி",
      time: "நேரம்",
      mobile: "மொபைல் எண் (விருப்பினால்)",
      confirm: "முன்பதிவை உறுதி செய்",
      success: "முன்பதிவு உறுதி செய்யப்பட்டது!",
      successDesc: "உங்கள் கோரிக்கை பெறப்பட்டது. எங்கள் குழு விரைவில் வாட்ஸ்அப் மூலம் உங்களைத் தொடர்பு கொள்ளும்.",
      back: "முகப்புக்குச் செல்",
      selectVehicle: "வாகனத்தைத் தேர்ந்தெடுக்கவும்",
      chooseFromFleet: "எங்கள் பிரீமியம் வாகனங்களில் இருந்து தேர்வு செய்யவும்"
    },
    hero: {
      subtitle: "தமிழ்நாட்டின் சிறந்த வெளியூர் மற்றும் உள்ளூர் டாக்ஸி சேவை. நிலையான கட்டணம் மற்றும் அனுபவமிக்க ஓட்டுநர்கள்.",
      bookNow: "பயணத்தைத் தொடங்க",
      chat: "உரையாடுங்கள்"
    },
    packages: {
      sectionTitle: "சிறப்பு சுற்றுலா திட்டங்கள்",
      sectionSubtitle: "தமிழ்நாட்டின் ஆன்மீக மற்றும் வரலாற்று இடங்களுக்கான எங்கள் சிறப்புத் தொகுப்புகள்.",
      exploreBtn: "அனைத்தையும் காண்க",
      closeBtn: "மூடுக",
      title: "சுற்றுலா தொகுப்புகள்",
      list: [
        { id: 'velankanni', name: "சென்னை - வேளாங்கண்ணி 2 நாட்கள்", image: IMG_VELANKANNI },
        { id: 'arupadaiveedu', name: "அறுபடை வீடு ஆன்மீக பயணம்", image: IMG_MURUGAN },
        { id: 'panchabhoota', name: "பஞ்ச பூத ஸ்தலங்கள்", image: IMG_SHIVA },
        { id: 'kanchipuram', name: "காஞ்சிபுரம் கோவில் உலா", image: IMG_KANCHI },
        { id: 'mahabalipuram', name: "மகாபலிபுரம் ஒரு நாள் பயணம்", image: IMG_MAHAB },
        { id: 'tirupati', name: "திருப்பதி தரிசன பயணம்", image: IMG_TIRUPATI },
        { id: 'pondicherry', name: "புதுச்சேரி 3 நாட்கள் உலா", image: IMG_PONDY }
      ]
    },
    airport: {
      tag: "விமான நிலைய சேவை",
      desc: "அனைத்து முக்கிய விமான நிலையங்களுக்கும் சரியான நேரத்தில், பாதுகாப்பான பயண சேவை.",
      benefit1: "சரியான நேரம்",
      benefit1Desc: "விமானம் தரையிறங்கும் முன்பே நாங்கள் காத்திருப்போம்.",
      benefit2: "பெரிய வாகனங்கள்",
      benefit2Desc: "குடும்ப லக்கேஜ்களுக்கான SUV மற்றும் வேன் வசதி.",
      benefit3: "பாதுகாப்பு முக்கியம்",
      benefit3Desc: "பாதுகாப்பான பயணத்திற்கு அனுபவமிக்க ஓட்டுநர்கள்.",
      bookBtn: "முன்பதிவு செய்க"
    },
    corporate: {
      tag: "சிறப்பு சேவைகள்",
      title: "கார்ப்பரேட் மற்றும் இண்டஸ்ட்ரியல்",
      subtitle: "முக்கிய தொழில் நிறுவனங்களுக்கான பிரத்யேக போக்குவரத்து சேவை.",
      description: "சிப்காட் மற்றும் முக்கிய தொழில் நகரங்களுக்கு தினசரி மற்றும் மாதந்திர வாடகை அடிப்படையில் வாகனங்கள்.",
      hubs: [
        { name: "ஸ்ரீ சிட்டி (தடா)", desc: "பிசினஸ் சிட்டி" },
        { name: "ஸ்ரீபெரும்புதூர்", desc: "ஆட்டோமொபைல் ஹப்" },
        { name: "ஒரகடம்", desc: "தொழில் வழித்தடம்" },
        { name: "சிப்காட்", desc: "உற்பத்தி ஆலைகள்" }
      ],
      cta: "விவரம் கேட்க"
    },
    packageDisclaimer: "குறிப்பு: சுங்கச்சாவடி (Toll), பார்க்கிங் மற்றும் மாநில வரி (Permit) ஆகியவை பயணத்தின் போது தனியாக செலுத்த வேண்டும்.",
    packageDetails: {
      velankanni: {
        title: "சென்னை - வேளாங்கண்ணி 2 நாட்கள்",
        duration: "2 நாட்கள் / 1 இரவு",
        price: "தொடக்க விலை ₹8,200",
        image: IMG_VELANKANNI,
        itinerary: [
          { text: "நாள் 1: சென்னையிலிருந்து வேளாங்கண்ணி பயணம். மாதா பேராலயம் தரிசனம்.", image: IMG_VELANKANNI },
          { text: "நாள் 1: மாலை கடற்கரை மற்றும் செபம்.", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop" },
          { text: "நாள் 2: காலை திருப்பலி மற்றும் மியூசியம்.", image: "https://images.unsplash.com/photo-1548649169-98018e7e14f5?q=80&w=600&auto=format&fit=crop" },
          { text: "நாள் 2: மதியம் சென்னை திரும்புதல்.", image: "https://images.unsplash.com/photo-1580191947416-62d35a55e71d?q=80&w=600&auto=format&fit=crop" }
        ],
        inclusions: ["எரிபொருள் மற்றும் டிரைவர் பேட்டா", "செடான்: ₹8,200", "SUV: ₹10,750", "அனுபவமிக்க ஓட்டுநர்"]
      },
      arupadaiveedu: {
        title: "அறுபடை வீடு 4 நாட்கள் ஆன்மீக பயணம்",
        duration: "4 நாட்கள் / 3 இரவுகள்",
        price: "தொடக்க விலை ₹15,550",
        image: IMG_MURUGAN,
        itinerary: [
          { text: "நாள் 1: திருத்தணி மற்றும் சுவாமிமலை தரிசனம்.", image: IMG_MURUGAN },
          { text: "நாள் 2: பழமுதிர்ச்சோலை மற்றும் திருப்பரங்குன்றம்.", image: "https://images.unsplash.com/photo-1620392385773-8e930f81119e?q=80&w=600&auto=format&fit=crop" },
          { text: "நாள் 3: திருச்செந்தூர் கடற்கரை கோவில்.", image: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?q=80&w=600&auto=format&fit=crop" },
          { text: "நாள் 4: பழனி மலை கோவில் மற்றும் சென்னை திரும்புதல்.", image: "https://images.unsplash.com/photo-1544011501-a212f2f45d41?q=80&w=600&auto=format&fit=crop" }
        ],
        inclusions: ["எரிபொருள் மற்றும் டிரைவர் பேட்டா", "செடான்: ₹15,550", "SUV: ₹21,500"]
      },
      panchabhoota: {
        title: "பஞ்ச பூத ஸ்தலங்கள் 5 நாட்கள் பயணம்",
        duration: "5 நாட்கள் / 4 இரவுகள்",
        price: "தொடக்க விலை ₹19,500",
        image: IMG_SHIVA,
        itinerary: [
          { text: "நாள் 1: காஞ்சிபுரம் (நிலம்) - ஏகாம்பரேஸ்வரர்.", image: "https://images.unsplash.com/photo-1627894451246-173d573cb11b?q=80&w=600&auto=format&fit=crop" },
          { text: "நாள் 2: திருவண்ணாமலை (நெருப்பு) - அருணாசலேஸ்வரர்.", image: "https://images.unsplash.com/photo-1600613278822-7203b9b47816?q=80&w=600&auto=format&fit=crop" },
          { text: "நாள் 3: திருச்சி (நீர்) - ஜம்புகேஸ்வரர்.", image: "https://images.unsplash.com/photo-1572529598858-52538f71f653?q=80&w=600&auto=format&fit=crop" },
          { text: "நாள் 4: சிதம்பரம் (ஆகாயம்) - நடராஜர்.", image: "https://images.unsplash.com/photo-1565551571216-72cb62118224?q=80&w=600&auto=format&fit=crop" },
          { text: "நாள் 5: காளஹஸ்தி (காற்று) மற்றும் சென்னை திரும்புதல்.", image: "https://images.unsplash.com/photo-1643285747683-14545f49618a?q=80&w=600&auto=format&fit=crop" }
        ],
        inclusions: ["எரிபொருள் மற்றும் டிரைவர் பேட்டா", "செடான்: ₹19,500", "SUV: ₹26,000", "சுங்கச்சாவடி கட்டணம் தனி"]
      },
      kanchipuram: {
        title: "காஞ்சிபுரம் & மகாபலிபுரம் 1 நாள் பயணம்",
        duration: "1 நாள் (12-14 மணிநேரம்)",
        price: "தொடக்க விலை ₹3,800",
        image: IMG_KANCHI,
        itinerary: [
          { text: "காலை: காமாட்சி அம்மன் & கைலாசநாதர் கோவில்.", image: IMG_KANCHI },
          { text: "மதியம்: பட்டு சேலை ஷாப்பிங் மற்றும் மதிய உணவு.", image: "https://images.unsplash.com/photo-1610123598147-f632aa18b275?q=80&w=600&auto=format&fit=crop" },
          { text: "மாலை: மகாபலிபுரம் கடற்கரை கோவில் மற்றும் ஐந்து ரதங்கள்.", image: IMG_MAHAB },
          { text: "இரவு: சென்னை திரும்புதல்.", image: "https://images.unsplash.com/photo-1615878426034-7033501a2d48?q=80&w=600&auto=format&fit=crop" }
        ],
        inclusions: ["எரிபொருள்", "டிரைவர் பேட்டா", "செடான்: ₹3,800", "SUV: ₹5,500"]
      },
      mahabalipuram: {
        title: "மகாபலிபுரம் & பாண்டிச்சேரி 2 நாட்கள்",
        duration: "2 நாட்கள் / 1 இரவு",
        price: "தொடக்க விலை ₹5,500",
        image: IMG_MAHAB,
        itinerary: [
          { text: "நாள் 1: மகாபலிபுரம் சுற்றுலா.", image: IMG_MAHAB },
          { text: "நாள் 1: ஈசிஆர் வழியாக பாண்டிச்சேரி பயணம். கடற்கரை நடை.", image: IMG_PONDY },
          { text: "நாள் 2: ஆரோவில், பிரஞ்சு காலனி மற்றும் பாரடைஸ் பீச்.", image: "https://images.unsplash.com/photo-1588713531121-6512687dfc32?q=80&w=600&auto=format&fit=crop" },
          { text: "நாள் 2: சென்னை திரும்புதல்.", image: "https://images.unsplash.com/photo-1524230507669-5ff97982bb5e?q=80&w=600&auto=format&fit=crop" }
        ],
        inclusions: ["எரிபொருள்", "டிரைவர் பேட்டா", "செடான்: ₹5,500", "SUV: ₹7,500"]
      },
      tirupati: {
        title: "சென்னை - திருப்பதி ஒரு நாள் பயணம்",
        duration: "1 நாள்",
        price: "தொடக்க விலை ₹4,500",
        image: IMG_TIRUPATI,
        itinerary: [
          { text: "அதிகாலை சென்னையில் இருந்து புறப்படுதல்.", image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=600&auto=format&fit=crop" },
          { text: "திருமலை பயணம். தரிசனம் (டிக்கெட் பயணிகள் பொறுப்பு).", image: IMG_TIRUPATI },
          { text: "திருச்சானூர் பத்மாவதி தாயார் கோவில்.", image: "https://images.unsplash.com/photo-1608632603896-b60d4b2e88a3?q=80&w=600&auto=format&fit=crop" },
          { text: "இரவு சென்னை திரும்புதல்.", image: "https://images.unsplash.com/photo-1518242065846-51d02c5f1c48?q=80&w=600&auto=format&fit=crop" }
        ],
        inclusions: ["எரிபொருள்", "டிரைவர் பேட்டா", "ஆந்திர மாநில வரி தனி", "செடான்: ₹4,500", "SUV: ₹6,000"]
      },
      pondicherry: {
        title: "பாண்டிச்சேரி 3 நாட்கள் உலா",
        duration: "3 நாட்கள் / 2 இரவுகள்",
        price: "தொடக்க விலை ₹7,500",
        image: IMG_PONDY,
        itinerary: [
          { text: "நாள் 1: பாண்டிச்சேரி வருகை மற்றும் ப்ரோமினேட் கடற்கரை.", image: IMG_PONDY },
          { text: "நாள் 2: ஆரோவில் மற்றும் பிரஞ்சு காலனி.", image: "https://images.unsplash.com/photo-1552554203-d6c57f7267dc?q=80&w=600&auto=format&fit=crop" },
          { text: "நாள் 3: சுண்ணம்பார் படகு சவாரி மற்றும் சென்னை திரும்புதல்.", image: "https://images.unsplash.com/photo-1580974533083-d2d057797746?q=80&w=600&auto=format&fit=crop" }
        ],
        inclusions: ["எரிபொருள்", "டிரைவர் பேட்டா", "செடான்: ₹7,500", "SUV: ₹9,800"]
      }
    },
    packageForm: {
      title: "விவரம் பெற",
      name: "பெயர்",
      phone: "தொலைபேசி எண்",
      date: "பயண தேதி",
      submit: "அனுப்பவும்"
    }
  },
  hi: {
    brand: "जी वी ट्रैवल्स",
    subBrand: "तमिलनाडु टैक्सी टूर्स एंड ट्रैवल्स",
    nav: {
      home: "होम",
      packages: "टूर पैकेज",
      fleet: "गाड़ियाँ",
      tariff: "किराया",
      reviews: "समीक्षाएं",
      bookNow: "बुक करें",
      call: "24/7 बुकिंग:"
    },
    booking: {
      onewaydrop: "वन वे ड्रॉप",
      roundtrip: "राउंड ट्रिप",
      localairport: "लोकल / एयरपोर्ट",
      pickup: "पिकअप स्थान",
      drop: "ड्रॉप स्थान",
      date: "यात्रा की तारीख",
      time: "समय",
      mobile: "मोबाइल नंबर (वैकल्पिक)",
      confirm: "बुकिंग कन्फर्म करें",
      success: "बुकिंग कन्फर्म!",
      successDesc: "आपका अनुरोध प्राप्त हो गया है। हमारी टीम जल्द ही व्हाट्सएप पर आपसे संपर्क करेगी।",
      back: "वापस जाएं",
      selectVehicle: "वाहन चुनें",
      chooseFromFleet: "हमारे प्रीमियम बेड़े से चुनें"
    },
    hero: {
      subtitle: "तमिलनाडु में प्रीमियम आउटस्टेशन और लोकल कैब बुकिंग सेवा। फिक्स्ड प्राइसिंग और प्रोफेशनल ड्राइवर।",
      bookNow: "अभी बुक करें",
      chat: "चैट करें"
    },
    packages: {
      sectionTitle: "विशेष टूर पैकेज",
      sectionSubtitle: "तमिलनाडु के आध्यात्मिक और ऐतिहासिक स्थलों के लिए हमारे विशेष पैकेज।",
      exploreBtn: "सभी देखें",
      closeBtn: "बंद करें",
      title: "टूर प्लान्स",
      list: [
        { id: 'velankanni', name: "चेन्नई से वेलंकन्नी 2 दिन", image: IMG_VELANKANNI },
        { id: 'arupadaiveedu', name: "अरुपदाई वीदु आध्यात्मिक यात्रा", image: IMG_MURUGAN },
        { id: 'panchabhoota', name: "पंच भूत स्थल यात्रा", image: IMG_SHIVA },
        { id: 'kanchipuram', name: "कांचीपुरम मंदिर दर्शन", image: IMG_KANCHI },
        { id: 'mahabalipuram', name: "महाबलीपुरम डे ट्रिप", image: IMG_MAHAB },
        { id: 'tirupati', name: "तिरुपति दर्शन यात्रा", image: IMG_TIRUPATI },
        { id: 'pondicherry', name: "पांडिचेरी 3 दिन की यात्रा", image: IMG_PONDY }
      ]
    },
    airport: {
      tag: "एयरपोर्ट सर्विस",
      desc: "सभी प्रमुख हवाई अड्डों के लिए समय पर और सुरक्षित पिकअप-ड्रॉप सेवा।",
      benefit1: "समय पर आगमन",
      benefit1Desc: "फ्लाइट ट्रैकिंग के साथ हम आपके लैंड करने से पहले तैयार रहते हैं।",
      benefit2: "बड़ी गाड़ियाँ",
      benefit2Desc: "ज्यादा सामान के लिए SUV और टेम्पो ट्रैवलर।",
      benefit3: "सुरक्षा पहले",
      benefit3Desc: "अनुभवी ड्राइवरों के साथ सुरक्षित यात्रा।",
      bookBtn: "एयरपोर्ट कैब बुक करें"
    },
    corporate: {
      tag: "कॉर्पोरेट सेवाएं",
      title: "कॉर्पोरेट और इंडस्ट्रियल",
      subtitle: "प्रमुख औद्योगिक केंद्रों और कार्यालयों के लिए विशेष परिवहन।",
      description: "सिपकॉट और प्रमुख शहरों के लिए दैनिक और मासिक किराये पर गाड़ियाँ उपलब्ध हैं।",
      hubs: [
        { name: "श्री सिटी", desc: "बिज़नेस सिटी" },
        { name: "श्रीपेरंबदूर", desc: "ऑटोमोबाइल हब" },
        { name: "ओरागदम", desc: "इंडस्ट्रियल कॉरिडोर" },
        { name: "सिपकॉट", desc: "मैन्युफैक्चरिंग हब" }
      ],
      cta: "पूछताछ करें"
    },
    packageDisclaimer: "नोट: टोल, पार्किंग और स्टेट परमिट शुल्क अलग से देना होगा।",
    packageDetails: {
      velankanni: {
        title: "चेन्नई से वेलंकन्नी 2 दिन",
        duration: "2 दिन / 1 रात",
        price: "शुरुआती कीमत ₹8,200",
        image: IMG_VELANKANNI,
        itinerary: [
          { text: "दिन 1: चेन्नई से वेलंकन्नी यात्रा। बेसिलिका दर्शन।", image: IMG_VELANKANNI },
          { text: "दिन 1: शाम को बीच और प्रार्थना।", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop" },
          { text: "दिन 2: सुबह की प्रार्थना और संग्रहालय।", image: "https://images.unsplash.com/photo-1548649169-98018e7e14f5?q=80&w=600&auto=format&fit=crop" },
          { text: "दिन 2: दोपहर बाद चेन्नई वापसी।", image: "https://images.unsplash.com/photo-1580191947416-62d35a55e71d?q=80&w=600&auto=format&fit=crop" }
        ],
        inclusions: ["फ्यूल और ड्राइवर भत्ता", "सिडान: ₹8,200", "SUV: ₹10,750", "प्रोफेशनल ड्राइवर"]
      },
      arupadaiveedu: {
        title: "अरुपदाई वीदु 4 दिन की यात्रा",
        duration: "4 दिन / 3 रातें",
        price: "शुरुआती कीमत ₹15,550",
        image: IMG_MURUGAN,
        itinerary: [
          { text: "दिन 1: तिरुत्तनी और स्वामीमलाई दर्शन।", image: IMG_MURUGAN },
          { text: "दिन 2: पज़मुदिर्चोलाई और तिरुप्परंकुंद्रम।", image: "https://images.unsplash.com/photo-1620392385773-8e930f81119e?q=80&w=600&auto=format&fit=crop" },
          { text: "दिन 3: तिरुचेंदूर बीच मंदिर।", image: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?q=80&w=600&auto=format&fit=crop" },
          { text: "दिन 4: पलानी मंदिर और चेन्नई वापसी।", image: "https://images.unsplash.com/photo-1544011501-a212f2f45d41?q=80&w=600&auto=format&fit=crop" }
        ],
        inclusions: ["फ्यूल और ड्राइवर भत्ता", "सिडान: ₹15,550", "SUV: ₹21,500"]
      },
      panchabhoota: {
        title: "पंच भूत स्थल 5 दिन की यात्रा",
        duration: "5 दिन / 4 रातें",
        price: "शुरुआती कीमत ₹19,500",
        image: IMG_SHIVA,
        itinerary: [
          { text: "दिन 1: कांचीपुरम (पृथ्वी) - एकाम्बरेश्वर।", image: "https://images.unsplash.com/photo-1627894451246-173d573cb11b?q=80&w=600&auto=format&fit=crop" },
          { text: "दिन 2: तिरुवन्नमलाई (अग्नि) - अरुणाचलेश्वर।", image: "https://images.unsplash.com/photo-1600613278822-7203b9b47816?q=80&w=600&auto=format&fit=crop" },
          { text: "दिन 3: त्रिची (जल) - जम्बुकेश्वर।", image: "https://images.unsplash.com/photo-1572529598858-52538f71f653?q=80&w=600&auto=format&fit=crop" },
          { text: "दिन 4: चिदंबरम (आकाश) - नटराज।", image: "https://images.unsplash.com/photo-1565551571216-72cb62118224?q=80&w=600&auto=format&fit=crop" },
          { text: "दिन 5: कालाहस्ती (वायु) और चेन्नई वापसी।", image: "https://images.unsplash.com/photo-1643285747683-14545f49618a?q=80&w=600&auto=format&fit=crop" }
        ],
        inclusions: ["फ्यूल और ड्राइवर भत्ता", "सिडान: ₹19,500", "SUV: ₹26,000", "टोल/पार्किंग अलग"]
      },
      kanchipuram: {
        title: "कांचीपुरम और महाबलीपुरम 1 दिन",
        duration: "1 दिन (12-14 घंटे)",
        price: "शुरुआती कीमत ₹3,800",
        image: IMG_KANCHI,
        itinerary: [
          { text: "सुबह: कामाक्षी अम्मन और कैलासनाथर मंदिर।", image: IMG_KANCHI },
          { text: "दोपहर: सिल्क शॉपिंग और लंच।", image: "https://images.unsplash.com/photo-1610123598147-f632aa18b275?q=80&w=600&auto=format&fit=crop" },
          { text: "शाम: महाबलीपुरम शोर मंदिर और पांच रथ।", image: IMG_MAHAB },
          { text: "रात: चेन्नई वापसी।", image: "https://images.unsplash.com/photo-1615878426034-7033501a2d48?q=80&w=600&auto=format&fit=crop" }
        ],
        inclusions: ["फ्यूल", "ड्राइवर भत्ता", "सिडान: ₹3,800", "SUV: ₹5,500"]
      },
      mahabalipuram: {
        title: "महाबलीपुरम और पांडिचेरी 2 दिन",
        duration: "2 दिन / 1 रात",
        price: "शुरुआती कीमत ₹5,500",
        image: IMG_MAHAB,
        itinerary: [
          { text: "दिन 1: महाबलीपुरम दर्शन।", image: IMG_MAHAB },
          { text: "दिन 1: पांडिचेरी यात्रा। शाम को बीच वॉक।", image: IMG_PONDY },
          { text: "दिन 2: ऑरोविले, फ्रेंच कॉलोनी और पैराडाइज बीच।", image: "https://images.unsplash.com/photo-1588713531121-6512687dfc32?q=80&w=600&auto=format&fit=crop" },
          { text: "दिन 2: चेन्नई वापसी।", image: "https://images.unsplash.com/photo-1524230507669-5ff97982bb5e?q=80&w=600&auto=format&fit=crop" }
        ],
        inclusions: ["फ्यूल", "ड्राइवर भत्ता", "सिडान: ₹5,500", "SUV: ₹7,500"]
      },
      tirupati: {
        title: "चेन्नई से तिरुपति 1 दिन",
        duration: "1 दिन",
        price: "शुरुआती कीमत ₹4,500",
        image: IMG_TIRUPATI,
        itinerary: [
          { text: "चेन्नई से प्रस्थान (सुबह जल्दी)।", image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=600&auto=format&fit=crop" },
          { text: "तिरुमाला यात्रा। दर्शन (टिकट यात्री का)।", image: IMG_TIRUPATI },
          { text: "तिरुचानूर पद्मावती मंदिर।", image: "https://images.unsplash.com/photo-1608632603896-b60d4b2e88a3?q=80&w=600&auto=format&fit=crop" },
          { text: "रात को चेन्नई वापसी।", image: "https://images.unsplash.com/photo-1518242065846-51d02c5f1c48?q=80&w=600&auto=format&fit=crop" }
        ],
        inclusions: ["फ्यूल", "ड्राइवर भत्ता", "आंध्र परमिट/टैक्स अलग", "सिडान: ₹4,500", "SUV: ₹6,000"]
      },
      pondicherry: {
        title: "पांडिचेरी 3 दिन की यात्रा",
        duration: "3 दिन / 2 रातें",
        price: "शुरुआती कीमत ₹7,500",
        image: IMG_PONDY,
        itinerary: [
          { text: "दिन 1: पांडिचेरी आगमन और प्रोमेनेड बीच।", image: IMG_PONDY },
          { text: "दिन 2: ऑरोविले और फ्रेंच क्वार्टर।", image: "https://images.unsplash.com/photo-1552554203-d6c57f7267dc?q=80&w=600&auto=format&fit=crop" },
          { text: "दिन 3: चुन्नमबार बोट हाउस और चेन्नई वापसी।", image: "https://images.unsplash.com/photo-1580974533083-d2d057797746?q=80&w=600&auto=format&fit=crop" }
        ],
        inclusions: ["फ्यूल", "ड्राइवर भत्ता", "सिडान: ₹7,500", "SUV: ₹9,800"]
      }
    },
    packageForm: {
      title: "पैकेज बुक करें",
      name: "नाम",
      phone: "फ़ोन नंबर",
      date: "यात्रा की तारीख",
      submit: "पूछताछ भेजें"
    }
  },
  te: {
    brand: "జీ వీ ట్రావెల్స్",
    subBrand: "తమిళనాడు టాక్సీ టూర్స్ & ట్రావెల్స్",
    nav: {
      home: "హోమ్",
      packages: "టూర్ ప్లాన్స్",
      fleet: "వాహనాలు",
      tariff: "ధరలు",
      reviews: "సమీక్షలు",
      bookNow: "బుక్ చేయండి",
      call: "24/7 బుకింగ్:"
    },
    booking: {
      onewaydrop: "వన్ వే డ్రాప్",
      roundtrip: "రౌండ్ ట్రిప్",
      localairport: "లోకల్ / విమానాశ్రయం",
      pickup: "పికప్ స్థానం",
      drop: "డ్రాప్ స్థానం",
      date: "ప్రయాణ తేదీ",
      time: "సమయం",
      mobile: "మొబైల్ నంబర్ (ఐచ్ఛికం)",
      confirm: "బుకింగ్‌ని నిర్ధారించండి",
      success: "బుకింగ్ నిర్ధారించబడింది!",
      successDesc: "మీ అభ్యర్థన స్వీకరించబడింది. వివరాలను ఖరారు చేయడానికి మా బృందం త్వరలో వాట్సాప్‌లో మిమ్మల్ని సంప్రదిస్తుంది.",
      back: "తిరిగి హోమ్‌కి వెళ్ళండి",
      selectVehicle: "మీ వాహనాన్ని ఎంచుకోండి",
      chooseFromFleet: "మా ప్రీమియం వాహనాల నుండి ఎంచుకోండి"
    },
    hero: {
      subtitle: "తమిళనాడులో ప్రీమియం అవుట్‌స్టేషన్ మరియు లోకల్ క్యాబ్ బుకింగ్ సేవ. ఫిక్స్‌డ్ ధర మరియు ప్రొఫెషనల్ డ్రైవర్లు.",
      bookNow: "ఇప్పుడే బుక్ చేయండి",
      chat: "చాట్ చేయండి"
    },
    packages: {
      sectionTitle: "ప్రత్యేక టూర్ ప్యాకేజీలు",
      sectionSubtitle: "తమిళనాడులోని ఆధ్యాత్మిక మరియు చారిత్రక ప్రదేశాల కోసం మా ప్రత్యేక ప్యాకేజీలు.",
      exploreBtn: "అన్నీ చూడండి",
      closeBtn: "మూసివేయండి",
      title: "టూర్ ప్లాన్స్",
      list: [
        { id: 'velankanni', name: "చెన్నై నుండి వేళాంగణ్ణి 2 రోజులు", image: IMG_VELANKANNI },
        { id: 'arupadaiveedu', name: "అరుపడై వీడు ఆధ్యాత్మిక యాత్ర", image: IMG_MURUGAN },
        { id: 'panchabhoota', name: "పంచ భూత స్థల యాత్ర", image: IMG_SHIVA },
        { id: 'kanchipuram', name: "కాంచీపురం ఆలయ దర్శనం", image: IMG_KANCHI },
        { id: 'mahabalipuram', name: "మహాబలిపురం డే ట్రిప్", image: IMG_MAHAB },
        { id: 'tirupati', name: "తిరుపతి దర్శన యాత్ర", image: IMG_TIRUPATI },
        { id: 'pondicherry', name: "పాండిచ్చేరి 3 రోజుల యాత్ర", image: IMG_PONDY }
      ]
    },
    airport: {
      tag: "విమానాశ్రయ సేవ",
      desc: "అన్ని ప్రధాన విమానాశ్రయాలకు సమయానికి మరియు సురక్షితమైన పికప్-డ్రాప్ సేవ.",
      benefit1: "సమయానికి రాక",
      benefit1Desc: "ఫ్లైట్ ట్రాకింగ్‌తో మీరు ల్యాండ్ అయ్యేలోపు మేము సిద్ధంగా ఉంటాము.",
      benefit2: "పెద్ద వాహనాలు",
      benefit2Desc: "ఎక్కువ లగేజీ కోసం SUV మరియు టెంపో ట్రావెలర్.",
      benefit3: "భద్రత ముఖ్యం",
      benefit3Desc: "అనుభవజ్ఞులైన డ్రైవర్లతో సురక్షిత ప్రయాణం.",
      bookBtn: "ఎయిర్‌పోర్ట్ క్యాబ్ బుక్ చేయండి"
    },
    corporate: {
      tag: "కార్పొరేట్ సేవలు",
      title: "కార్పొరేట్ మరియు ఇండస్ట్రియల్",
      subtitle: "ప్రధాన పారిశ్రామిక కేంద్రాలు మరియు కార్యాలయాలకు ప్రత్యేక రవాణా.",
      description: "సిప్‌కాట్ మరియు ప్రధాన నగరాలకు రోజువారీ మరియు నెలవారీ అద్దెకు వాహనాలు అందుబాటులో ఉన్నాయి.",
      hubs: [
        { name: "శ్రీ సిటీ", desc: "బిజినెస్ సిటీ" },
        { name: "శ్రీపెరంబుదూర్", desc: "ఆటోమొబైల్ హబ్" },
        { name: "ఒరగడం", desc: "ఇండస్ట్రియల్ కారిడార్" },
        { name: "సిప్‌కాట్", desc: "మాన్యుఫ్యాక్చరింగ్ హబ్" }
      ],
      cta: "విచారణ చేయండి"
    },
    packageDisclaimer: "గమనిక: టోల్, పార్కింగ్ మరియు స్టేట్ పర్మిట్ ఫీజులు అదనంగా చెల్లించాలి.",
    packageDetails: {
      velankanni: {
        title: "చెన్నై నుండి వేళాంగణ్ణి 2 రోజులు",
        duration: "2 రోజులు / 1 రాత్రి",
        price: "ప్రారంభ ధర ₹8,200",
        image: IMG_VELANKANNI,
        itinerary: [
          { text: "రోజు 1: చెన్నై నుండి వేళాంగణ్ణి ప్రయాణం. బసిలికా దర్శనం.", image: IMG_VELANKANNI },
          { text: "రోజు 1: సాయంత్రం బీచ్ మరియు ప్రార్థన.", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop" },
          { text: "రోజు 2: ఉదయం ప్రార్థన మరియు మ్యూజియం.", image: "https://images.unsplash.com/photo-1548649169-98018e7e14f5?q=80&w=600&auto=format&fit=crop" },
          { text: "రోజు 2: మధ్యాహ్నం చెన్నైకి తిరుగు ప్రయాణం.", image: "https://images.unsplash.com/photo-1580191947416-62d35a55e71d?q=80&w=600&auto=format&fit=crop" }
        ],
        inclusions: ["ఇంధనం మరియు డ్రైవర్ భత్యం", "సెడాన్: ₹8,200", "SUV: ₹10,750", "ప్రొఫెషనల్ డ్రైవర్"]
      },
      arupadaiveedu: {
        title: "అరుపడై వీడు 4 రోజుల యాత్ర",
        duration: "4 రోజులు / 3 రాత్రులు",
        price: "ప్రారంభ ధర ₹15,550",
        image: IMG_MURUGAN,
        itinerary: [
          { text: "రోజు 1: తిరుత్తణి మరియు స్వామిమలై దర్శనం.", image: IMG_MURUGAN },
          { text: "రోజు 2: పజముదిర్చోలై మరియు తిరుప్పరంకుండ్రం.", image: "https://images.unsplash.com/photo-1620392385773-8e930f81119e?q=80&w=600&auto=format&fit=crop" },
          { text: "రోజు 3: తిరుచెందూర్ బీచ్ టెంపుల్.", image: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?q=80&w=600&auto=format&fit=crop" },
          { text: "రోజు 4: పళని కొండ ఆలయం మరియు చెన్నైకి తిరుగు ప్రయాణం.", image: "https://images.unsplash.com/photo-1544011501-a212f2f45d41?q=80&w=600&auto=format&fit=crop" }
        ],
        inclusions: ["ఇంధనం మరియు డ్రైవర్ భత్యం", "సెడాన్: ₹15,550", "SUV: ₹21,500"]
      },
      panchabhoota: {
        title: "పంచ భూత స్థల 5 రోజుల యాత్ర",
        duration: "5 రోజులు / 4 రాత్రులు",
        price: "ప్రారంభ ధర ₹19,500",
        image: IMG_SHIVA,
        itinerary: [
          { text: "రోజు 1: కాంచీపురం (భూమి) - ఏకాంబరేశ్వరుడు.", image: "https://images.unsplash.com/photo-1627894451246-173d573cb11b?q=80&w=600&auto=format&fit=crop" },
          { text: "రోజు 2: తిరువణ్ణామలై (అగ్ని) - అరుణాచలేశ్వరుడు.", image: "https://images.unsplash.com/photo-1600613278822-7203b9b47816?q=80&w=600&auto=format&fit=crop" },
          { text: "రోజు 3: తిరుచ్చి (నీరు) - జంబుకేశ్వరుడు.", image: "https://images.unsplash.com/photo-1572529598858-52538f71f653?q=80&w=600&auto=format&fit=crop" },
          { text: "రోజు 4: చిదంబరం (ఆకాశం) - నటరాజు.", image: "https://images.unsplash.com/photo-1565551571216-72cb62118224?q=80&w=600&auto=format&fit=crop" },
          { text: "రోజు 5: శ్రీకాళహస్తి (వాయువు) మరియు చెన్నైకి తిరుగు ప్రయాణం.", image: "https://images.unsplash.com/photo-1643285747683-14545f49618a?q=80&w=600&auto=format&fit=crop" }
        ],
        inclusions: ["ఇంధనం మరియు డ్రైవర్ భత్యం", "సెడాన్: ₹19,500", "SUV: ₹26,000", "టోల్/పార్కింగ్ అదనపు"]
      },
      kanchipuram: {
        title: "కాంచీపురం & మహాబలిపురం 1 రోజు",
        duration: "1 రోజు (12-14 గంటలు)",
        price: "ప్రారంభ ధర ₹3,800",
        image: IMG_KANCHI,
        itinerary: [
          { text: "ఉదయం: కామాక్షి అమ్మన్ & కైలాసనాథర్ ఆలయం.", image: IMG_KANCHI },
          { text: "మధ్యాహ్నం: సిల్క్ షాపింగ్ మరియు లంచ్.", image: "https://images.unsplash.com/photo-1610123598147-f632aa18b275?q=80&w=600&auto=format&fit=crop" },
          { text: "సాయంత్రం: మహాబలిపురం షోర్ టెంపుల్ మరియు పంచ రథాలు.", image: IMG_MAHAB },
          { text: "రాత్రి: చెన్నైకి తిరుగు ప్రయాణం.", image: "https://images.unsplash.com/photo-1615878426034-7033501a2d48?q=80&w=600&auto=format&fit=crop" }
        ],
        inclusions: ["ఇంధనం", "డ్రైవర్ భత్యం", "సెడాన్: ₹3,800", "SUV: ₹5,500"]
      },
      mahabalipuram: {
        title: "మహాబలిపురం & పాండిచ్చేరి 2 రోజులు",
        duration: "2 రోజులు / 1 రాత్రి",
        price: "ప్రారంభ ధర ₹5,500",
        image: IMG_MAHAB,
        itinerary: [
          { text: "రోజు 1: మహాబలిపురం దర్శనం.", image: IMG_MAHAB },
          { text: "రోజు 1: పాండిచ్చేరి ప్రయాణం. సాయంత్రం బీచ్ వాక్.", image: IMG_PONDY },
          { text: "రోజు 2: ఆరోవిల్, ఫ్రెంచ్ కాలనీ మరియు ప్యారడైజ్ బీచ్.", image: "https://images.unsplash.com/photo-1588713531121-6512687dfc32?q=80&w=600&auto=format&fit=crop" },
          { text: "రోజు 2: చెన్నైకి తిరుగు ప్రయాణం.", image: "https://images.unsplash.com/photo-1524230507669-5ff97982bb5e?q=80&w=600&auto=format&fit=crop" }
        ],
        inclusions: ["ఇంధనం", "డ్రైవర్ భత్యం", "సెడాన్: ₹5,500", "SUV: ₹7,500"]
      },
      tirupati: {
        title: "చెన్నై నుండి తిరుపతి 1 రోజు",
        duration: "1 రోజు",
        price: "ప్రారంభ ధర ₹4,500",
        image: IMG_TIRUPATI,
        itinerary: [
          { text: "చెన్నై నుండి ప్రయాణం (ఉదయం).", image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=600&auto=format&fit=crop" },
          { text: "తిరుమల యాత్ర. దర్శనం (టికెట్ యాత్రికుడి బాధ్యత).", image: IMG_TIRUPATI },
          { text: "తిరుచానూర్ పద్మావతి అమ్మవారి ఆలయం.", image: "https://images.unsplash.com/photo-1608632603896-b60d4b2e88a3?q=80&w=600&auto=format&fit=crop" },
          { text: "రాత్రికి చెన్నైకి తిరుగు ప్రయాణం.", image: "https://images.unsplash.com/photo-1518242065846-51d02c5f1c48?q=80&w=600&auto=format&fit=crop" }
        ],
        inclusions: ["ఇంధనం", "డ్రైవర్ భత్యం", "ఆంధ్ర పర్మిట్/టాక్స్ అదనపు", "సెడాన్: ₹4,500", "SUV: ₹6,000"]
      },
      pondicherry: {
        title: "పాండిచ్చేరి 3 రోజుల యాత్ర",
        duration: "3 రోజులు / 2 రాత్రులు",
        price: "ప్రారంభ ధర ₹7,500",
        image: IMG_PONDY,
        itinerary: [
          { text: "రోజు 1: పాండిచ్చేరి రాక మరియు ప్రోమెనేడ్ బీచ్.", image: IMG_PONDY },
          { text: "రోజు 2: ఆరోవిల్ మరియు ఫ్రెంచ్ క్వార్టర్.", image: "https://images.unsplash.com/photo-1552554203-d6c57f7267dc?q=80&w=600&auto=format&fit=crop" },
          { text: "రోజు 3: చున్నంబార్ బోట్ హౌస్ మరియు చెన్నైకి తిరుగు ప్రయాణం.", image: "https://images.unsplash.com/photo-1580974533083-d2d057797746?q=80&w=600&auto=format&fit=crop" }
        ],
        inclusions: ["ఇంధనం", "డ్రైవర్ భత్యం", "సెడాన్: ₹7,500", "SUV: ₹9,800"]
      }
    },
    packageForm: {
      title: "ప్యాకేజీని బుక్ చేయండి",
      name: "పేరు",
      phone: "ఫోన్ నంబర్",
      date: "ప్రయాణ తేదీ",
      submit: "విచారణ పంపండి"
    }
  },
  kn: {
    brand: "ಜೀ ವೀ ಟ್ರಾವೆಲ್ಸ್",
    subBrand: "ತಮಿಳುನಾಡು ಟ್ಯಾಕ್ಸಿ ಟೂರ್ಸ್ & ಟ್ರಾವೆಲ್ಸ್",
    nav: {
      home: "ಮುಖಪುಟ",
      packages: "ಪ್ರವಾಸ ಪ್ಯಾಕೇಜುಗಳು",
      fleet: "ವಾಹನಗಳು",
      tariff: "ದರಗಳು",
      reviews: "ವಿಮರ್ಶೆಗಳು",
      bookNow: "ಬುಕ್ ಮಾಡಿ",
      call: "24/7 ಬುಕಿಂಗ್:"
    },
    booking: {
      onewaydrop: "ಒನ್ ವೇ ಡ್ರಾಪ್",
      roundtrip: "ರೌಂಡ್ ಟ್ರಿಪ್",
      localairport: "ಲೋಕಲ್ / ಏರ್‌ಪೋರ್ಟ್",
      pickup: "ಪಿಕಪ್ ಸ್ಥಳ",
      drop: "ಡ್ರಾಪ್ ಸ್ಥಳ",
      date: "ಪ್ರಯಾಣದ ದಿನಾಂಕ",
      time: "ಸಮಯ",
      mobile: "ಮೊಬೈಲ್ ಸಂಖ್ಯೆ (ಐಚ್ಛಿಕ)",
      confirm: "ಬುಕಿಂಗ್ ದೃಢೀಕರಿಸಿ",
      success: "ಬುಕಿಂಗ್ ದೃಢೀಕರಿಸಲಾಗಿದೆ!",
      successDesc: "ನಿಮ್ಮ ವಿನಂತಿಯನ್ನು ಸ್ವೀಕರಿಸಲಾಗಿದೆ. ವಿವರಗಳನ್ನು ಅಂತಿಮಗೊಳಿಸಲು ನಮ್ಮ ತಂಡ ಶೀಘ್ರದಲ್ಲೇ ವಾಟ್ಸಾಪ್ ಮೂಲಕ ನಿಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸುತ್ತದೆ.",
      back: "ಮುಖಪುಟಕ್ಕೆ ಹಿಂತಿರುಗಿ",
      selectVehicle: "ವಾಹನವನ್ನು ಆಯ್ಕೆಮಾಡಿ",
      chooseFromFleet: "ನಮ್ಮ ಪ್ರೀಮಿಯಂ ವಾಹನಗಳಿಂದ ಆರಿಸಿ"
    },
    hero: {
      subtitle: "ತಮಿಳುನಾಡಿನಲ್ಲಿ ಪ್ರೀಮಿಯಂ ಔಟ್‌ಸ್ಟೇಷನ್ ಮತ್ತು ಲೋಕಲ್ ಕ್ಯಾಬ್ ಬುಕಿಂಗ್ ಸೇವೆ. ನಿಗದಿತ ದರ ಮತ್ತು ವೃತ್ತಿಪರ ಚಾಲಕರು.",
      bookNow: "ಈಗಲೇ ಬುಕ್ ಮಾಡಿ",
      chat: "ಚಾಟ್ ಮಾಡಿ"
    },
    packages: {
      sectionTitle: "ವಿಶೇಷ ಪ್ರವಾಸ ಪ್ಯಾಕೇಜುಗಳು",
      sectionSubtitle: "ತಮಿಳುನಾಡಿನ ಆಧ್ಯಾತ್ಮಿಕ ಮತ್ತು ಐತಿಹಾಸಿಕ ತಾಣಗಳಿಗಾಗಿ ನಮ್ಮ ವಿಶೇಷ ಪ್ಯಾಕೇಜುಗಳು.",
      exploreBtn: "ಎಲ್ಲವನ್ನೂ ವೀಕ್ಷಿಸಿ",
      closeBtn: "ಮುಚ್ಚಿ",
      title: "ಟೂರ್ ಪ್ಲಾನ್",
      list: [
        { id: 'velankanni', name: "ಚೆನ್ನೈನಿಂದ ವೇಲಾಂಗಣ್ಣಿ 2 ದಿನಗಳು", image: IMG_VELANKANNI },
        { id: 'arupadaiveedu', name: "ಅರುಪದೈ ವೀಡು ಆಧ್ಯಾತ್ಮಿಕ ಯಾತ್ರೆ", image: IMG_MURUGAN },
        { id: 'panchabhoota', name: "ಪಂಚ ಭೂತ ಸ್ಥಳ ಯಾತ್ರೆ", image: IMG_SHIVA },
        { id: 'kanchipuram', name: "ಕಾಂಚೀಪುರಂ ದೇವಸ್ಥಾನ ದರ್ಶನ", image: IMG_KANCHI },
        { id: 'mahabalipuram', name: "ಮಹಾಬಲಿಪುರಂ ಡೇ ಟ್ರಿಪ್", image: IMG_MAHAB },
        { id: 'tirupati', name: "ತಿರುಪತಿ ದರ್ಶನ ಯಾತ್ರೆ", image: IMG_TIRUPATI },
        { id: 'pondicherry', name: "ಪಾಂಡಿಚೇರಿ 3 ದಿನಗಳ ಯಾತ್ರೆ", image: IMG_PONDY }
      ]
    },
    airport: {
      tag: "ವಿಮಾನ ನಿಲ್ದಾಣ ಸೇವೆ",
      desc: "ಎಲ್ಲಾ ಪ್ರಮುಖ ವಿಮಾನ ನಿಲ್ದಾಣಗಳಿಗೆ ಸಮಯಕ್ಕೆ ಸರಿಯಾಗಿ ಮತ್ತು ಸುರಕ್ಷಿತ ಪಿಕಪ್-ಡ್ರಾಪ್ ಸೇವೆ.",
      benefit1: "ಸಮಯಕ್ಕೆ ಸರಿಯಾಗಿ",
      benefit1Desc: "ಫ್ಲೈಟ್ ಟ್ರ್ಯಾಕಿಂಗ್‌ನೊಂದಿಗೆ ನೀವು ಲ್ಯಾಂಡ್ ಆಗುವ ಮೊದಲೇ ನಾವು ಸಿದ್ಧವಾಗಿರುತ್ತೇವೆ.",
      benefit2: "ದೊಡ್ಡ ವಾಹನಗಳು",
      benefit2Desc: "ಹೆಚ್ಚು ಲಗೇಜ್‌ಗಾಗಿ SUV ಮತ್ತು ಟೆಂಪೋ ಟ್ರಾವೆಲರ್.",
      benefit3: "ಸುರಕ್ಷತೆ ಮುಖ್ಯ",
      benefit3Desc: "ಅನುಭವಿ ಚಾಲಕರೊಂದಿಗೆ ಸುರಕ್ಷಿತ ಪ್ರಯಾಣ.",
      bookBtn: "ಏರ್‌ಪೋರ್ಟ್ ಕ್ಯಾಬ್ ಬುಕ್ ಮಾಡಿ"
    },
    corporate: {
      tag: "ಕಾರ್ಪೊರೇಟ್ ಸೇವೆಗಳು",
      title: "ಕಾರ್ಪೊರೇಟ್ ಮತ್ತು ಇಂಡಸ್ಟ್ರಿಯಲ್",
      subtitle: "ಪ್ರಮುಖ ಕೈಗಾರಿಕಾ ಕೇಂದ್ರಗಳು ಮತ್ತು ಕಚೇರಿಗಳಿಗೆ ವಿಶೇಷ ಸಾರಿಗೆ.",
      description: "ಸಿಪ್‌ಕಾಟ್ ಮತ್ತು ಪ್ರಮುಖ ನಗರಗಳಿಗೆ ದೈನಂದಿನ ಮತ್ತು ಮಾಸಿಕ ಬಾಡಿಗೆಗೆ ವಾಹನಗಳು ಲಭ್ಯವಿದೆ.",
      hubs: [
        { name: "ಶ್ರೀ ಸಿಟಿ", desc: "ಬಿಸಿನೆಸ್ ಸಿಟಿ" },
        { name: "ಶ್ರೀಪೆರಂಬದೂರ್", desc: "ಆಟೋಮೊಬೈಲ್ ಹಬ್" },
        { name: "ಒರಗಡಂ", desc: "ಇಂಡಸ್ಟ್ರಿಯಲ್ ಕಾರಿಡಾರ್" },
        { name: "ಸಿಪ್‌ಕಾಟ್", desc: "ಮ್ಯಾನುಫ್ಯಾಕ್ಚರಿಂಗ್ ಹಬ್" }
      ],
      cta: "ವಿಚಾರಿಸಿ"
    },
    packageDisclaimer: "ಗಮನಿಸಿ: ಟೋಲ್, ಪಾರ್ಕಿಂಗ್ ಮತ್ತು ಸ್ಟೇಟ್ ಪರ್ಮಿಟ್ ಶುಲ್ಕಗಳು ಹೆಚ್ಚುವರಿಯಾಗಿರುತ್ತದೆ.",
    packageDetails: {
      velankanni: {
        title: "ಚೆನ್ನೈನಿಂದ ವೇಲಾಂಗಣ್ಣಿ 2 ದಿನಗಳು",
        duration: "2 ದಿನಗಳು / 1 ರಾತ್ರಿ",
        price: "ಆರಂಭಿಕ ಬೆಲೆ ₹8,200",
        image: IMG_VELANKANNI,
        itinerary: [
          { text: "ದಿನ 1: ಚೆನ್ನೈನಿಂದ ವೇಲಾಂಗಣ್ಣಿ ಪ್ರಯಾಣ. ಬೆಸಿಲಿಕಾ ದರ್ಶನ.", image: IMG_VELANKANNI },
          { text: "ದಿನ 1: ಸಂಜೆ ಬೀಚ್ ಮತ್ತು ಪ್ರಾರ್ಥನೆ.", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop" },
          { text: "ದಿನ 2: ಬೆಳಿಗ್ಗೆ ಪ್ರಾರ್ಥನೆ ಮತ್ತು ಮ್ಯೂಸಿಯಂ.", image: "https://images.unsplash.com/photo-1548649169-98018e7e14f5?q=80&w=600&auto=format&fit=crop" },
          { text: "ದಿನ 2: ಮಧ್ಯಾಹ್ನ ಚೆನ್ನೈಗೆ ಹಿಂತಿರುಗುವ ಪ್ರಯಾಣ.", image: "https://images.unsplash.com/photo-1580191947416-62d35a55e71d?q=80&w=600&auto=format&fit=crop" }
        ],
        inclusions: ["ಇಂಧನ ಮತ್ತು ಚಾಲಕ ಭತ್ಯೆ", "ಸೆಡಾನ್: ₹8,200", "SUV: ₹10,750", "ವೃತ್ತಿಪರ ಚಾಲಕ"]
      },
      arupadaiveedu: {
        title: "ಅರುಪದೈ ವೀಡು 4 ದಿನಗಳ ಯಾತ್ರೆ",
        duration: "4 ದಿನಗಳು / 3 ರಾತ್ರಿಗಳು",
        price: "ಆರಂಭಿಕ ಬೆಲೆ ₹15,550",
        image: IMG_MURUGAN,
        itinerary: [
          { text: "ದಿನ 1: ತಿರುತ್ತಣಿ ಮತ್ತು ಸ್ವಾಮಿಮಲೈ ದರ್ಶನ.", image: IMG_MURUGAN },
          { text: "ದಿನ 2: ಪಜಮುದಿರ್ಚೋಲೈ ಮತ್ತು ತಿರುಪ್ಪರಂಕುಂದ್ರಂ.", image: "https://images.unsplash.com/photo-1620392385773-8e930f81119e?q=80&w=600&auto=format&fit=crop" },
          { text: "ದಿನ 3: ತಿರುಚೆಂದೂರ್ ಬೀಚ್ ಟೆಂಪಲ್.", image: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?q=80&w=600&auto=format&fit=crop" },
          { text: "ದಿನ 4: ಪಳನಿ ಬೆಟ್ಟದ ದೇವಸ್ಥಾನ ಮತ್ತು ಚೆನ್ನೈಗೆ ಹಿಂತಿರುಗುವ ಪ್ರಯಾಣ.", image: "https://images.unsplash.com/photo-1544011501-a212f2f45d41?q=80&w=600&auto=format&fit=crop" }
        ],
        inclusions: ["ಇಂಧನ ಮತ್ತು ಚಾಲಕ ಭತ್ಯೆ", "ಸೆಡಾನ್: ₹15,550", "SUV: ₹21,500"]
      },
      panchabhoota: {
        title: "ಪಂಚ ಭೂತ ಸ್ಥಳ 5 ದಿನಗಳ ಯಾತ್ರೆ",
        duration: "5 ದಿನಗಳು / 4 ರಾತ್ರಿಗಳು",
        price: "ಆರಂಭಿಕ ಬೆಲೆ ₹19,500",
        image: IMG_SHIVA,
        itinerary: [
          { text: "ದಿನ 1: ಕಾಂಚೀಪುರಂ (ಭೂಮಿ) - ಏಕಾಂಬರೇಶ್ವರ.", image: "https://images.unsplash.com/photo-1627894451246-173d573cb11b?q=80&w=600&auto=format&fit=crop" },
          { text: "ದಿನ 2: ತಿರುವಣ್ಣಾಮಲೈ (ಅಗ್ನಿ) - ಅರುಣಾಚಲೇಶ್ವರ.", image: "https://images.unsplash.com/photo-1600613278822-7203b9b47816?q=80&w=600&auto=format&fit=crop" },
          { text: "ದಿನ 3: ತಿರುಚ್ಚಿ (ನೀರು) - ಜಂಬುಕೇಶ್ವರ.", image: "https://images.unsplash.com/photo-1572529598858-52538f71f653?q=80&w=600&auto=format&fit=crop" },
          { text: "ದಿನ 4: ಚಿದಂಬರಂ (ಆಕಾಶ) - ನಟರಾಜ.", image: "https://images.unsplash.com/photo-1565551571216-72cb62118224?q=80&w=600&auto=format&fit=crop" },
          { text: "ದಿನ 5: ಶ್ರೀಕಾಳಹಸ್ತಿ (ವಾಯು) ಮತ್ತು ಚೆನ್ನೈಗೆ ಹಿಂತಿರುಗುವ ಪ್ರಯಾಣ.", image: "https://images.unsplash.com/photo-1643285747683-14545f49618a?q=80&w=600&auto=format&fit=crop" }
        ],
        inclusions: ["ಇಂಧನ ಮತ್ತು ಚಾಲಕ ಭತ್ಯೆ", "ಸೆಡಾನ್: ₹19,500", "SUV: ₹26,000", "ಟೋಲ್/ಪಾರ್ಕಿಂಗ್ ಪ್ರತ್ಯೇಕ"]
      },
      kanchipuram: {
        title: "ಕಾಂಚೀಪುರಂ ಮತ್ತು ಮಹಾಬಲಿಪುರಂ 1 ದಿನ",
        duration: "1 ದಿನ (12-14 ಗಂಟೆಗಳು)",
        price: "ಆರಂಭಿಕ ಬೆಲೆ ₹3,800",
        image: IMG_KANCHI,
        itinerary: [
          { text: "ಬೆಳಿಗ್ಗೆ: ಕಾಮಾಕ್ಷಿ ಅಮ್ಮನ್ ಮತ್ತು ಕೈಲಾಸನಾಥರ್ ದೇವಸ್ಥಾನ.", image: IMG_KANCHI },
          { text: "ಮಧ್ಯಾಹ್ನ: ಸಿಲ್ಕ್ ಶಾಪಿಂಗ್ ಮತ್ತು ಊಟ.", image: "https://images.unsplash.com/photo-1610123598147-f632aa18b275?q=80&w=600&auto=format&fit=crop" },
          { text: "ಸಂಜೆ: ಮಹಾಬಲಿಪುರಂ ಶೋರ್ ಟೆಂಪಲ್ ಮತ್ತು ಪಂಚ ರಥಗಳು.", image: IMG_MAHAB },
          { text: "ರಾತ್ರಿ: ಚೆನ್ನೈಗೆ ಹಿಂತಿರುಗುವ ಪ್ರಯಾಣ.", image: "https://images.unsplash.com/photo-1615878426034-7033501a2d48?q=80&w=600&auto=format&fit=crop" }
        ],
        inclusions: ["ಇಂಧನ", "ಚಾಲಕ ಭತ್ಯೆ", "ಸೆಡಾನ್: ₹3,800", "SUV: ₹5,500"]
      },
      mahabalipuram: {
        title: "ಮಹಾಬಲಿಪುರಂ ಮತ್ತು ಪಾಂಡಿಚೇರಿ 2 ದಿನಗಳು",
        duration: "2 ದಿನಗಳು / 1 ರಾತ್ರಿ",
        price: "ಆರಂಭಿಕ ಬೆಲೆ ₹5,500",
        image: IMG_MAHAB,
        itinerary: [
          { text: "ದಿನ 1: ಮಹಾಬಲಿಪುರಂ ದರ್ಶನ.", image: IMG_MAHAB },
          { text: "ದಿನ 1: ಪಾಂಡಿಚೇರಿ ಪ್ರಯಾಣ. ಸಂಜೆ ಬೀಚ್ ವಾಕ್.", image: IMG_PONDY },
          { text: "ದಿನ 2: ಆರೋವಿಲ್, ಫ್ರೆಂಚ್ ಕಾಲೋನಿ ಮತ್ತು ಪ್ಯಾರಡೈಸ್ ಬೀಚ್.", image: "https://images.unsplash.com/photo-1588713531121-6512687dfc32?q=80&w=600&auto=format&fit=crop" },
          { text: "ದಿನ 2: ಚೆನ್ನೈಗೆ ಹಿಂತಿರುಗುವ ಪ್ರಯಾಣ.", image: "https://images.unsplash.com/photo-1524230507669-5ff97982bb5e?q=80&w=600&auto=format&fit=crop" }
        ],
        inclusions: ["ಇಂಧನ", "ಚಾಲಕ ಭತ್ಯೆ", "ಸೆಡಾನ್: ₹5,500", "SUV: ₹7,500"]
      },
      tirupati: {
        title: "ಚೆನ್ನೈನಿಂದ ತಿರುಪತಿ 1 ದಿನ",
        duration: "1 ದಿನ",
        price: "ಆರಂಭಿಕ ಬೆಲೆ ₹4,500",
        image: IMG_TIRUPATI,
        itinerary: [
          { text: "ಚೆನ್ನೈನಿಂದ ಪ್ರಯಾಣ (ಬೆಳಿಗ್ಗೆ ಬೇಗ).", image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=600&auto=format&fit=crop" },
          { text: "ತಿರುಮಲ ಯಾತ್ರೆ. ದರ್ಶನ (ಟಿಕೆಟ್ ಯಾತ್ರಿಕರ ಜವಾಬ್ದಾರಿ).", image: IMG_TIRUPATI },
          { text: "ತಿರುಚಾನೂರ್ ಪದ್ಮಾವತಿ ಅಮ್ಮನವರ ದೇವಸ್ಥಾನ.", image: "https://images.unsplash.com/photo-1608632603896-b60d4b2e88a3?q=80&w=600&auto=format&fit=crop" },
          { text: "ರಾತ್ರಿ ಚೆನ್ನೈಗೆ ಹಿಂತಿರುಗುವ ಪ್ರಯಾಣ.", image: "https://images.unsplash.com/photo-1518242065846-51d02c5f1c48?q=80&w=600&auto=format&fit=crop" }
        ],
        inclusions: ["ಇಂಧನ", "ಚಾಲಕ ಭತ್ಯೆ", "ಆಂಧ್ರ ಪರ್ಮಿಟ್/ಟ್ಯಾಕ್ಸ್ ಪ್ರತ್ಯೇಕ", "ಸೆಡಾನ್: ₹4,500", "SUV: ₹6,000"]
      },
      pondicherry: {
        title: "ಪಾಂಡಿಚೇರಿ 3 ದಿನಗಳ ಯಾತ್ರೆ",
        duration: "3 ದಿನಗಳು / 2 ರಾತ್ರಿಗಳು",
        price: "ಆರಂಭಿಕ ಬೆಲೆ ₹7,500",
        image: IMG_PONDY,
        itinerary: [
          { text: "ದಿನ 1: ಪಾಂಡಿಚೇರಿ ಆಗಮನ ಮತ್ತು ಪ್ರೊಮೆನೇಡ್ ಬೀಚ್.", image: IMG_PONDY },
          { text: "ದಿನ 2: ಆರೋವಿಲ್ ಮತ್ತು ಫ್ರೆಂಚ್ ಕ್ವಾರ್ಟರ್.", image: "https://images.unsplash.com/photo-1552554203-d6c57f7267dc?q=80&w=600&auto=format&fit=crop" },
          { text: "ದಿನ 3: ಚುನ್ನಂಬಾರ್ ಬೋಟ್ ಹೌಸ್ ಮತ್ತು ಚೆನ್ನೈಗೆ ಹಿಂತಿರುಗುವ ಪ್ರಯಾಣ.", image: "https://images.unsplash.com/photo-1580974533083-d2d057797746?q=80&w=600&auto=format&fit=crop" }
        ],
        inclusions: ["ಇಂಧನ", "ಚಾಲಕ ಭತ್ಯೆ", "ಸೆಡಾನ್: ₹7,500", "SUV: ₹9,800"]
      }
    },
    packageForm: {
      title: "ಪ್ಯಾಕೇಜ್ ಬುಕ್ ಮಾಡಿ",
      name: "ಹೆಸರು",
      phone: "ಫೋನ್ ಸಂಖ್ಯೆ",
      date: "ಪ್ರಯಾಣದ ದಿನಾಂಕ",
      submit: "ವಿಚಾರಣೆ ಕಳುಹಿಸಿ"
    }
  }
};
