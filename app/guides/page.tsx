"use client";

import { useState } from "react";

interface GuideData {
  id: string;
  name: string;
  shortName: string;
  emoji: string;
  tagline: string;
  whatItIs: string;
  before: string[];
  during: string[];
  after: string[];
  dos: string[];
  donts: string[];
  kitChecklist: string[];
  whenToCall: string[];
}

const disasterGuides: GuideData[] = [
  {
    id: "flood",
    name: "Flood & Flash Flood",
    shortName: "Flood",
    emoji: "🌊",
    tagline: "Heavy monsoon rains, overflowing rivers, and rapid urban inundation.",
    whatItIs:
      "A flood occurs when water overflows onto dry land. In India, floods are commonly caused by intense monsoon downpours, river bank breaches, cloudbursts in hilly areas, and poor drainage in metropolitan cities.",
    before: [
      "Find out if your home or work area lies in a known low-lying or flood-prone zone.",
      "Identify high-ground locations and local government relief shelters in your municipal ward or panchayat.",
      "Keep family identity proofs, property papers, insurance, and ration cards inside sealed, waterproof ziplock bags.",
      "Elevate critical electrical switchboards, inverters, and heavy household appliances above expected water levels.",
      "Clean nearby street gutters and compound drainage outlets before the monsoon season starts."
    ],
    during: [
      "Turn off the main electrical breaker switch and disconnect the domestic LPG cooking gas cylinder immediately.",
      "Never walk, swim, or drive through moving water. Just 6 inches of rapid water can knock you off your feet, and 2 feet can float a car.",
      "Move elderly family members, young children, pregnant women, and pets to the top floor or terrace.",
      "Do not touch submerged electrical poles, wires, or metal gates carrying stray electric currents.",
      "Drink only boiled or bottled water to prevent waterborne diseases like cholera and jaundice."
    ],
    after: [
      "Do not return to a flooded home until local authorities declare your locality safe.",
      "Watch out for poisonous snakes, scorpions, and stray animals that seek shelter inside dry houses.",
      "Throw away all fresh food, vegetables, and open rations that came into contact with floodwater.",
      "Disinfect water sumps and open wells with bleaching powder or chlorine tablets before drinking.",
      "Photograph water marks and structural damage on your property for government relief or insurance claims."
    ],
    dos: [
      "Boil all drinking water for at least 1 full minute.",
      "Keep phone batteries conserved on low-power mode.",
      "Listen to district administration bulletins via radio or mobile SMS.",
      "Help elderly neighbors and people with disabilities move to safety."
    ],
    donts: [
      "Do not let children play in standing or flowing flood water.",
      "Do not eat food exposed to flood currents or drain overflow.",
      "Do not drive into underpasses or subways where water depth is unknown.",
      "Do not spread unverified rumors or panic audio messages on WhatsApp."
    ],
    kitChecklist: [
      "Waterproof pouch with government photo IDs, ration cards, bank passbooks",
      "5 liters of bottled water per person (3-day minimum supply)",
      "Ready-to-eat dry foods: roasted gram (chana), sattu, biscuits, puffed rice",
      "Battery-operated LED torch with spare cells",
      "Compact first-aid kit with antiseptic lotion and bandage rolls",
      "Chlorine tablets / water purification drops",
      "High-decibel emergency whistle to signal rescue boats"
    ],
    whenToCall: [
      "Water level is rising above ground floor and family is marooned on the roof.",
      "Someone is swept away by fast-flowing nullahs or river currents.",
      "Elderly, sick, or pregnant persons require emergency boat or air rescue (Dial 112 / 108 / NDRF)."
    ]
  },
  {
    id: "cyclone",
    name: "Cyclone & Coastal Storm Surge",
    shortName: "Cyclone",
    emoji: "🌀",
    tagline: "Destructive coastal winds exceeding 100 km/h, heavy squalls, and seawater surge.",
    whatItIs:
      "A tropical cyclone is a massive, rotating storm system that forms over the Bay of Bengal or the Arabian Sea. It brings destructive gale-force winds, intense torrential rains, and sea waves (storm surges) that push inland.",
    before: [
      "Inspect roof sheets, tin sheds, and signboards; secure or tie them down firmly.",
      "Trim old, dry tree branches near your house and power lines.",
      "Fasten or tape large glass window panes with adhesive tape in an 'X' pattern to prevent shattering.",
      "Stock emergency dry food, candles, matches, power banks, and portable radio batteries.",
      "Move to an officially designated cyclone shelter if you live in a kachha house or within 5 km of the coastline."
    ],
    during: [
      "Stay indoors in the strongest, central room of the house away from doors, glass windows, and exterior walls.",
      "Disconnect all heavy electrical plugs and turn off cooking gas supplies.",
      "Beware of the storm 'eye': If winds suddenly die down completely, DO NOT go outside. Destructive winds will resume violently from the opposite direction.",
      "Keep children away from loose windows and balcony railings.",
      "Do not venture into the sea or visit beaches to take photos or record videos."
    ],
    after: [
      "Wait for the official 'all-clear' announcement from the IMD or District Collector before leaving shelter.",
      "Watch out for snapped electric cables hanging from poles or hidden in muddy water pools.",
      "Do not enter buildings that show exterior cracks or tilted pillars.",
      "Clear fallen branches and debris carefully while wearing thick rubber slippers or gumboots."
    ],
    dos: [
      "Keep your smartphone fully charged and use SMS instead of long phone calls.",
      "Anchor small fishing boats, canoes, and beach equipment firmly.",
      "Follow official color-coded warnings (Yellow, Orange, Red) from the IMD.",
      "Keep cows and cattle untied so they can run to safety if water enters sheds."
    ],
    donts: [
      "Do not step outdoors during the lull period when the eye of the cyclone passes.",
      "Do not touch sagging electric wires or damaged street light poles.",
      "Do not go near sea coasts, fishing docks, or beaches until cleared.",
      "Do not ignore mandatory evacuation alerts issued by police or panchayat officials."
    ],
    kitChecklist: [
      "AM/FM transistor radio with extra dry-cell batteries",
      "Multi-purpose LED flashlight and rechargeable lantern",
      "3 to 5 days of non-perishable food (chira, jaggery, nuts, dry fruits)",
      "Supply of daily prescription medications (BP, diabetes, heart)",
      "Thick polyethylene plastic sheets and heavy ropes",
      "Sturdy work gloves and gumboots",
      "Emergency cash in small denomination notes"
    ],
    whenToCall: [
      "House roof or walls collapse under heavy wind pressure.",
      "Live power lines fall across domestic entrances or waterlogged compounds.",
      "People are injured by flying tin sheets or falling trees and require transport (Dial 112 / 108)."
    ]
  },
  {
    id: "earthquake",
    name: "Earthquake & Ground Tremors",
    shortName: "Earthquake",
    emoji: "🏚️",
    tagline: "Sudden shaking of the earth's crust along active seismic fault lines.",
    whatItIs:
      "An earthquake is the sudden, rapid shaking of the earth caused by the release of energy stored in geological rocks. Nearly 59% of India's landmass is vulnerable to moderate to severe earthquakes (Seismic Zones III, IV, and V).",
    before: [
      "Fasten heavy wardrobes, bookcases, and wall mirrors firmly to brick wall studs using brackets.",
      "Do not hang heavy picture frames or glass paintings directly above beds and sofas.",
      "Identify the safest interior shelter spots in each room: under a heavy wooden table or against an interior load-bearing wall.",
      "Teach every family member how to turn off the main electricity switch and cooking gas regulator.",
      "Conduct regular family 'Drop, Cover, and Hold On' drills."
    ],
    during: [
      "DROP to your hands and knees immediately so tremors do not knock you down.",
      "Take COVER under a sturdy desk or wooden table; protect your head and neck with your arms.",
      "HOLD ON to your shelter until the shaking stops completely; be prepared to move with it.",
      "If in bed: Stay there, curl up, and protect your head and neck with a thick pillow.",
      "DO NOT run towards stairs or use elevators. Crowded staircases frequently collapse during tremors.",
      "If outdoors: Move into an open field away from tall glass buildings, utility poles, and flyovers."
    ],
    after: [
      "Expect secondary aftershocks over the next hours and days. Each time shaking starts: Drop, Cover, Hold On.",
      "Check for domestic gas leaks by smell. If you smell gas, open windows, evacuate, and DO NOT touch electric switches or matchsticks.",
      "Wear thick-soled shoes to protect your feet from broken window glass and shattered pottery.",
      "If trapped under rubble: Do not shout continuously (to prevent choking on dust). Tap rhythmically on an iron pipe or wall with a stone, or blow a whistle."
    ],
    dos: [
      "Drop to your knees, cover your head, and hold on to sturdy furniture.",
      "Extinguish all open flames, stoves, and incense sticks immediately.",
      "Keep clear of glass windows, mirrors, ceiling fans, and suspended chandeliers.",
      "Check your neighbors for injuries once tremors stop."
    ],
    donts: [
      "Do not use elevators during or immediately after the earthquake.",
      "Do not rush for the building exit doorway in panic with crowds.",
      "Do not strike a match or lighter if a gas pipeline fracture is suspected.",
      "Do not enter badly damaged, cracked buildings to retrieve belongings."
    ],
    kitChecklist: [
      "Emergency high-decibel whistle (critical for signaling under rubble)",
      "Heavy-duty dust masks (N95) or cotton cloths to filter fine dust",
      "Pair of leather work gloves to handle broken concrete and glass",
      "Multi-tool pocket knife and compact pry bar",
      "Small first-aid kit with sterile bandages and antiseptic wipes",
      "Flashlight with spare batteries (never use candles)",
      "Thermal survival emergency foil blanket"
    ],
    whenToCall: [
      "People are trapped or buried beneath fallen walls, slabs, or stairwells.",
      "A cooking gas pipeline or cylinder has caught fire.",
      "Building pillars or structural beams are visibly buckled and on the verge of collapse (Dial 112 / Fire 101)."
    ]
  },
  {
    id: "heatwave",
    name: "Heatwave & Extreme Heat",
    shortName: "Heatwave",
    emoji: "☀️",
    tagline: "Prolonged spells of dangerously high daytime temperatures and dry winds (Loo).",
    whatItIs:
      "A heatwave is a period of abnormally high temperatures, typically exceeding 40°C in the plains, 30°C in the hills, and 37°C in coastal regions. It poses severe threats of dehydration, heat cramps, heat exhaustion, and fatal heat stroke.",
    before: [
      "Cover south- and west-facing windows with thick curtains, reed mats (chicks), or sun-reflective foil.",
      "Apply white lime wash or cool-roof reflective paint on the terrace to bring down indoor room temperatures.",
      "Stock up on Oral Rehydration Salts (ORS) packets, glucose powder, sabja seeds, and lemon.",
      "Ensure cattle, pet dogs, and working animals have permanent shade and large troughs of clean water.",
      "Schedule heavy outdoor labor, farming tasks, and marketing before 10:00 AM or after 5:30 PM."
    ],
    during: [
      "Drink plenty of water at regular intervals, even if you do not feel thirsty.",
      "Carry water, shikanji, lassi, butter milk (chaas), or coconut water whenever traveling.",
      "Wear loose, light-colored, breathable cotton clothing and dark sunglasses.",
      "Cover your head, face, and neck with a wet cotton gamchha, towel, cap, or carry an umbrella.",
      "NEVER leave small infants, children, elderly people, or pets inside a parked car, even with windows cracked open."
    ],
    after: [
      "Learn to spot early heat stroke signs: High body temperature (>40°C), red hot dry skin, absence of sweat, confusion, vomiting, and fainting.",
      "If someone faints from heat: Move them immediately to a shaded, ventilated room or air-conditioned space.",
      "Loosen tight clothing and sponge their forehead, neck, and armpits with cool (not ice-cold) water.",
      "Give them sips of cool ORS or salted lemon water if they are fully conscious."
    ],
    dos: [
      "Drink at least 3 to 4 liters of clean water daily.",
      "Take cool showers and rest in the coolest room of your house during afternoons.",
      "Keep a bowl of fresh water outside your terrace or window for birds and stray animals.",
      "Eat light, water-rich fruits like watermelon, cucumber, muskmelon, and oranges."
    ],
    donts: [
      "Do not step outdoors bareheaded between 12:00 noon and 3:30 PM.",
      "Do not consume alcohol, heavily caffeinated tea, coffee, or carbonated soft drinks (they worsen dehydration).",
      "Do not engage in heavy athletic exercise or gym training under direct sunlight.",
      "Do not leave children or elderly persons locked in poorly ventilated rooms."
    ],
    kitChecklist: [
      "Multiple sachets of Government/WHO-formula Oral Rehydration Salts (ORS)",
      "Insulated thermal water bottle (1.5–2L capacity)",
      "Light-colored cotton gamchha, bandana, or wide-brim sun hat",
      "Compact folding umbrella with UV protection silver lining",
      "Digital oral thermometer to monitor body temperature",
      "Pocket hand fan or battery-operated portable misting fan"
    ],
    whenToCall: [
      "A person has stopped sweating, skin is burning hot, and they are confused or unconscious (Heat stroke is a medical emergency — dial 108 / 112 immediately).",
      "Severe persistent vomiting prevents fluid intake, leading to extreme lethargy and sunken eyes."
    ]
  },
  {
    id: "landslide",
    name: "Landslide & Hill Slope Mudflow",
    shortName: "Landslide",
    emoji: "⛰️",
    tagline: "Downward movement of rock, mud, and soil triggered by heavy hill downpours.",
    whatItIs:
      "A landslide is the mass downward sliding of rock, soil, or debris down a mountain slope. Common in the Himalayas, Western Ghats, and North-Eastern states, they are triggered by heavy rainfall, cloudbursts, slope cutting, and seismic tremors.",
    before: [
      "Check historical hazard maps to know if your hill settlement or resort lies in an active slide zone.",
      "Inspect slope drainage: Ensure rainwater from your roof and courtyard is piped into deep concrete drains, not directly onto hillside soil.",
      "Watch for natural warning signs: New diagonal cracks appearing in building walls, tilting fences, trees, or utility poles, or doors sticking in frames.",
      "Notice changes in hill springs: Sudden muddying of clean mountain spring water often signals an impending slope collapse uphill.",
      "Keep a pre-packed emergency grab-bag ready by the exit door throughout the monsoon."
    ],
    during: [
      "Evacuate downhill residences immediately if you hear unusual rumbling sounds, snapping tree trunks, or rolling boulders.",
      "Never stay inside a building situated right below an unreinforced, vertical soil cutting.",
      "If you cannot escape outdoors: Curl into a tight ball on the floor against a solid interior wall and protect your head with your arms.",
      "If driving on mountain highways: Stay alert for fallen pebbles or small soil trickles over the road, which precede major debris slides."
    ],
    after: [
      "Stay well away from the slide area. Secondary landslides often occur hours or days after the initial slope collapse.",
      "Watch out for flash floods: Mudslides often dam mountain rivers temporarily, which then burst downstream without warning.",
      "Check for buried or injured persons near the slide boundaries without stepping onto soft, unstable debris.",
      "Report damaged electricity lines, broken water supply mains, and highway blockages to the PWD and SDRF."
    ],
    dos: [
      "Comply immediately with district Red Alert evacuation orders in hill districts.",
      "Halt vehicular travel during intense cloudburst spells in the Western Ghats or Himalayas.",
      "Plant deep-rooting native grass and shrubs along private slope boundaries to bind soil.",
      "Listen for sudden changes in river sound (abrupt silence means an upstream landslide dam has formed)."
    ],
    donts: [
      "Do not build illegal house extensions right on the edge of steep hill slopes.",
      "Do not direct domestic septic or roof drain pipes straight onto hill soil.",
      "Do not cross a road where muddy debris or small stones have already started sliding.",
      "Do not re-occupy a hillside house until local civil engineers confirm structural stability."
    ],
    kitChecklist: [
      "High-grip trekking shoes or gumboots",
      "Sturdy walking stick / trekking pole for stability on mud",
      "Waterproof raincoat / poncho and warm woolen cap",
      "High-beam LED flashlight with extra dry cells",
      "Emergency whistle to signal mountain search-and-rescue teams",
      "Waterproof document container with ID, deeds, bank records",
      "Compact first-aid kit with crepe bandages and antiseptic ointment"
    ],
    whenToCall: [
      "A slope has collapsed onto residential huts, homestays, or vehicles with people trapped.",
      "Major highway or bridge connection is severed, leaving villagers or tourists stranded without food (Dial 112 / 1077 / 1070)."
    ]
  },
  {
    id: "fire",
    name: "Urban & Domestic Fire",
    shortName: "Fire",
    emoji: "🔥",
    tagline: "Electrical short-circuits, cooking gas leaks, and rapid building blazes.",
    whatItIs:
      "A domestic or commercial fire spreads rapidly through combustible furniture, plastics, textiles, and cooking gas. Most fatalities in building fires occur due to thick, toxic smoke inhalation and carbon monoxide poisoning rather than direct flames.",
    before: [
      "Install and test smoke detectors in your apartment or house; replace batteries annually.",
      "Keep at least one ABC dry powder fire extinguisher on each floor and know the PASS rule (Pull, Aim, Squeeze, Sweep).",
      "Never overload multi-pin extension boards with high-wattage appliances (geysers, heaters, ACs, irons).",
      "Inspect the rubber LPG gas hose pipe (suraksha hose) every 2 years and replace it if cracked.",
      "Map out two clear, unblocked emergency escape routes from every bedroom and living space."
    ],
    during: [
      "CRAWL LOW UNDER SMOKE: Smoke and lethal gases rise to the ceiling; clean, breathable air remains 1 to 2 feet above the floor.",
      "Feel closed doors with the back of your hand before opening. If the door or metal knob feels hot, DO NOT OPEN IT (fire is on the other side).",
      "Never use elevators during a fire; always use external fire escape stairs.",
      "If your clothing catches fire, remember: STOP, DROP to the ground, and ROLL over repeatedly to smother flames.",
      "If trapped in a room: Close the door, seal cracks under the door with wet bedsheets, and wave a bright cloth from the window to alert firefighters."
    ],
    after: [
      "Do not re-enter a burned building until the Fire Brigade Station Officer certifies it safe.",
      "Cool first- and second-degree burns immediately under cool, clean running tap water for 15 minutes. NEVER apply butter, ghee, or toothpaste.",
      "Discard food, packaged items, and water bottles that have been exposed to heat or smoke fumes.",
      "Have a licensed electrician inspect and certify your entire electrical wiring before restoring power."
    ],
    dos: [
      "Crawl low on your hands and knees if caught in a smoke-filled room.",
      "Keep fire staircases, balconies, and common corridors completely free of clutter and shoe racks.",
      "Shout 'Aag! Aag!' (Fire!) loudly to awaken and alert everyone in the building.",
      "Call the Fire Brigade (101) as soon as you see smoke, before attempting to fight large flames."
    ],
    donts: [
      "Do not throw water on an electrical fire or oil/grease cooking pan fire (use a metal lid or dry extinguisher).",
      "Do not waste time gathering laptops, jewelry, or cash when evacuating a burning building.",
      "Do not open windows if a large fire is inside your room (fresh oxygen intensifies flames).",
      "Do not use elevators under any circumstances during a fire evacuation."
    ],
    kitChecklist: [
      "Certified 2kg or 4kg ABC dry chemical powder fire extinguisher",
      "Flame-retardant fire blanket (kept near the kitchen)",
      "High-power smoke escape goggles and N95 / smoke filtration masks",
      "Heavy cotton bedsheet (can be soaked in water for barrier escape)",
      "Special burn dressings (hydrogel burn pads) and sterile gauze",
      "Battery-powered emergency exit flashlight"
    ],
    whenToCall: [
      "Any fire has grown larger than a small kitchen waste bin (Dial Fire 101 / 112 immediately).",
      "A cooking LPG cylinder is leaking with a loud hissing sound or smell of mercaptan.",
      "Anyone is trapped inside a smoke-filled room or has sustained skin burns (Dial 101 and Ambulance 108)."
    ]
  }
];

export default function DisasterGuidesPage() {
  const [activeGuideId, setActiveGuideId] = useState<string>("flood");
  const [activeSubTab, setActiveSubTab] = useState<"action" | "dos" | "kit" | "call">("action");

  const currentGuide = disasterGuides.find((g) => g.id === activeGuideId) || disasterGuides[0];

  const handlePrint = () => {
    window.print();
  };

  return (
    <main
      id="main-content"
      className="min-h-screen bg-slate-50 py-8 px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-5xl space-y-8">
        {/* Top Header & Print Action */}
        <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-300 pb-6 print:hidden">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-orange-100 px-3.5 py-1 text-xs font-black text-orange-950 border border-orange-300 mb-2">
              <span>📖</span> Public Safety Handbooks
            </div>
            <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-slate-950">
              Disaster Preparedness & Action Guides
            </h1>
            <p className="mt-1 text-sm sm:text-base text-slate-700 max-w-2xl leading-relaxed font-medium">
              Official standard operating procedures for Indian households written in plain, accessible language.
            </p>
          </div>
          <button
            type="button"
            onClick={handlePrint}
            aria-label="Print or save this disaster guide as PDF"
            className="self-start sm:self-center shrink-0 inline-flex min-h-[48px] items-center gap-2 rounded-xl bg-white border-2 border-slate-400 px-5 text-sm font-black text-slate-900 shadow hover:bg-slate-100 focus:outline-none focus-visible:ring-4 focus-visible:ring-orange-500 transition"
          >
            <span>🖨️</span> Print / Save PDF
          </button>
        </header>

        {/* Disaster Selector Cards with 64px min-height for touch targets */}
        <section aria-label="Select disaster type" className="print:hidden">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
            {disasterGuides.map((guide) => {
              const isSelected = guide.id === activeGuideId;
              return (
                <button
                  key={guide.id}
                  type="button"
                  onClick={() => {
                    setActiveGuideId(guide.id);
                    setActiveSubTab("action");
                  }}
                  aria-pressed={isSelected}
                  className={`flex min-h-[64px] flex-col items-center justify-center p-3 rounded-2xl border-2 text-center transition focus:outline-none focus-visible:ring-4 focus-visible:ring-orange-400 ${
                    isSelected
                      ? "bg-orange-600 text-white border-orange-700 shadow-md ring-2 ring-orange-400/50"
                      : "bg-white text-slate-900 border-slate-300 hover:border-orange-400 hover:bg-orange-50/50 shadow-sm"
                  }`}
                >
                  <span className="text-2xl mb-1" aria-hidden="true">
                    {guide.emoji}
                  </span>
                  <span className="text-xs sm:text-sm font-black leading-tight">
                    {guide.shortName}
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        {/* Printable/Screen Document Card */}
        <article className="rounded-3xl border-2 border-slate-300 bg-white p-6 sm:p-8 shadow-sm space-y-8 print:border-none print:shadow-none print:p-0">
          {/* Guide Title Banner */}
          <div className="border-b border-slate-200 pb-5">
            <div className="flex items-center gap-3">
              <span className="text-4xl" aria-hidden="true">
                {currentGuide.emoji}
              </span>
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-orange-700">
                  Citizen Safety Manual
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-950">
                  {currentGuide.name}
                </h2>
              </div>
            </div>
            <p className="mt-2 text-sm sm:text-base text-slate-700 leading-relaxed font-semibold">
              {currentGuide.tagline}
            </p>
          </div>

          {/* Section: What it is */}
          <section className="rounded-2xl bg-slate-100 border border-slate-300 p-5">
            <h3 className="text-xs font-black uppercase tracking-wider text-slate-700 mb-2">
              What Is It?
            </h3>
            <p className="text-sm text-slate-900 leading-relaxed font-medium">
              {currentGuide.whatItIs}
            </p>
          </section>

          {/* Sub-tab Navigation (48px targets) */}
          <nav
            aria-label="Guide subsections"
            className="flex flex-wrap gap-2 border-b border-slate-200 pb-3 print:hidden"
          >
            {[
              { id: "action", label: "⏱️ Before, During & After" },
              { id: "dos", label: "✅ Do’s & Don’ts" },
              { id: "kit", label: "🎒 Emergency Kit" },
              { id: "call", label: "🚨 When to Call 112" },
            ].map((tab) => {
              const isSelected = activeSubTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveSubTab(tab.id as typeof activeSubTab)}
                  aria-pressed={isSelected}
                  className={`inline-flex min-h-[48px] items-center rounded-xl px-4 py-2 text-xs sm:text-sm font-black transition focus:outline-none focus-visible:ring-4 focus-visible:ring-orange-400 ${
                    isSelected
                      ? "bg-slate-950 text-white shadow"
                      : "bg-slate-200 text-slate-800 hover:bg-slate-300"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </nav>

          {/* Subtab 1: Before / During / After */}
          <section
            className={`space-y-6 ${
              activeSubTab !== "action" ? "hidden print:block" : "block"
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Before */}
              <div className="rounded-2xl border-2 border-blue-300 bg-blue-50/70 p-5 flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-700 text-white font-black text-xs">
                    1
                  </span>
                  <h3 className="text-sm font-black uppercase tracking-wider text-blue-950">
                    Before (Prepare)
                  </h3>
                </div>
                <ul className="space-y-3 text-xs sm:text-sm text-slate-800 flex-1">
                  {currentGuide.before.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="font-black text-blue-700 mt-0.5">•</span>
                      <span className="leading-relaxed font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* During */}
              <div className="rounded-2xl border-2 border-red-300 bg-red-50/70 p-5 flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-red-700 text-white font-black text-xs">
                    2
                  </span>
                  <h3 className="text-sm font-black uppercase tracking-wider text-red-950">
                    During (Survive)
                  </h3>
                </div>
                <ul className="space-y-3 text-xs sm:text-sm text-slate-800 flex-1">
                  {currentGuide.during.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="font-black text-red-700 mt-0.5">•</span>
                      <span className="leading-relaxed font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* After */}
              <div className="rounded-2xl border-2 border-emerald-300 bg-emerald-50/70 p-5 flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-700 text-white font-black text-xs">
                    3
                  </span>
                  <h3 className="text-sm font-black uppercase tracking-wider text-emerald-950">
                    After (Recover)
                  </h3>
                </div>
                <ul className="space-y-3 text-xs sm:text-sm text-slate-800 flex-1">
                  {currentGuide.after.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="font-black text-emerald-700 mt-0.5">•</span>
                      <span className="leading-relaxed font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Subtab 2: Do's and Don'ts */}
          <section
            className={`space-y-4 ${
              activeSubTab !== "dos" ? "hidden print:block" : "block"
            }`}
          >
            <h3 className="text-sm font-black uppercase tracking-wider text-slate-900 print:mt-4">
              Crucial Do’s and Don’ts
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-2xl border-2 border-emerald-300 bg-emerald-50/60 p-5">
                <h4 className="text-xs font-black uppercase tracking-wider text-emerald-950 flex items-center gap-2 mb-3">
                  <span className="text-base" aria-hidden="true">
                    ✅
                  </span>{" "}
                  What You MUST Do
                </h4>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-800">
                  {currentGuide.dos.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="font-black text-emerald-700">✓</span>
                      <span className="leading-relaxed font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border-2 border-rose-300 bg-rose-50/60 p-5">
                <h4 className="text-xs font-black uppercase tracking-wider text-rose-950 flex items-center gap-2 mb-3">
                  <span className="text-base" aria-hidden="true">
                    ❌
                  </span>{" "}
                  What You MUST AVOID
                </h4>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-800">
                  {currentGuide.donts.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="font-black text-rose-700">✕</span>
                      <span className="leading-relaxed font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Subtab 3: Kit */}
          <section
            className={`space-y-4 ${
              activeSubTab !== "kit" ? "hidden print:block" : "block"
            }`}
          >
            <div className="rounded-2xl border-2 border-amber-300 bg-amber-50/70 p-5 print:mt-4">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl" aria-hidden="true">
                  🎒
                </span>
                <div>
                  <h3 className="text-sm font-black text-amber-950">
                    Recommended Survival Kit for {currentGuide.shortName}
                  </h3>
                  <p className="text-xs text-amber-900 font-semibold">
                    Keep packed together in a durable, waterproof backpack by your home exit door.
                  </p>
                </div>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-xs sm:text-sm text-slate-900">
                {currentGuide.kitChecklist.map((kitItem, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 bg-white rounded-xl p-3 border border-amber-200 font-semibold"
                  >
                    <span className="text-orange-600 font-black">☑</span>
                    <span>{kitItem}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Subtab 4: When to Call */}
          <section
            className={`space-y-4 ${
              activeSubTab !== "call" ? "hidden print:block" : "block"
            }`}
          >
            <div className="rounded-2xl border-2 border-red-300 bg-red-50/80 p-5 print:mt-4">
              <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
                <h3 className="text-sm font-black text-red-950 flex items-center gap-2">
                  <span>🚨</span> When to Call Emergency Responders
                </h3>
                <span className="rounded-full bg-red-700 px-3.5 py-1 text-xs font-black text-white">
                  Toll-Free 112
                </span>
              </div>
              <p className="text-xs sm:text-sm text-red-900 mb-3 leading-relaxed font-semibold">
                Emergency lines must be kept free for active life-safety operations. Dial immediately under these specific conditions:
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-950">
                {currentGuide.whenToCall.map((trigger, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 bg-white rounded-xl p-3 border border-red-200 font-bold"
                  >
                    <span className="text-red-700 font-black shrink-0">⚠</span>
                    <span className="leading-relaxed">{trigger}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Footer Call Strip with 44px+ tap targets */}
          <div className="border-t border-slate-200 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-600 font-medium">
              Source: Guidelines synthesized from National Disaster Management Authority (NDMA) & IMD protocols.
            </span>
            <div className="flex flex-wrap items-center gap-2 text-xs font-black">
              <a
                href="tel:112"
                className="inline-flex min-h-[44px] items-center rounded-xl bg-red-700 px-4 text-white hover:bg-red-800 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
              >
                📞 112 (National)
              </a>
              <a
                href="tel:1078"
                className="inline-flex min-h-[44px] items-center rounded-xl bg-slate-900 px-4 text-white hover:bg-slate-800 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
              >
                NDMA: 1078
              </a>
              <a
                href="tel:108"
                className="inline-flex min-h-[44px] items-center rounded-xl bg-blue-700 px-4 text-white hover:bg-blue-800 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                Amb: 108
              </a>
            </div>
          </div>

          {/* Print Footer */}
          <div className="hidden print:flex items-center justify-between border-t-2 border-slate-900 pt-4 text-xs text-slate-700 font-bold">
            <span>SafeIndia Disaster Action Protocol — For Household Safety</span>
            <span>Emergency Services: 112 | Disaster Control: 1078</span>
          </div>
        </article>

        {/* Bottom Disclaimer */}
        <aside
          role="note"
          aria-label="Official advisory notice"
          className="rounded-2xl border-2 border-slate-300 bg-white p-4 sm:p-5 text-xs sm:text-sm text-slate-700 leading-relaxed font-medium print:hidden shadow-sm"
        >
          <strong>Notice:</strong> These guides provide baseline survival advice for Indian citizens during natural and urban hazards. During an unfolding disaster, always follow live evacuation and safety orders transmitted by your local District Magistrate, Police, and SDRF / NDRF units.
        </aside>
      </div>
    </main>
  );
}