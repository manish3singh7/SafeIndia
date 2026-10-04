"use client";

import { useState } from "react";

interface FamilyMember {
  id: string;
  name: string;
  age: string;
}

interface EmergencyContact {
  name: string;
  phone: string;
  relation: string;
}

export default function FamilyPlanPage() {
  const [familyName, setFamilyName] = useState("");
  const [members, setMembers] = useState<FamilyMember[]>([
    { id: "1", name: "", age: "" },
    { id: "2", name: "", age: "" },
  ]);

  const [contact1, setContact1] = useState<EmergencyContact>({
    name: "",
    phone: "",
    relation: "",
  });

  const [contact2, setContact2] = useState<EmergencyContact>({
    name: "",
    phone: "",
    relation: "",
  });

  const [meetingPoint, setMeetingPoint] = useState("");
  const [nearestShelter, setNearestShelter] = useState("");
  const [medicalNeeds, setMedicalNeeds] = useState("");
  const [medicines, setMedicines] = useState("");
  const [importantDocuments, setImportantDocuments] = useState(
    "Aadhaar cards, Voter IDs, Ration card, Land deeds, Health insurance cards, Bank passbooks"
  );

  const [specialNeedsTypes, setSpecialNeedsTypes] = useState<{
    elderly: boolean;
    children: boolean;
    pregnant: boolean;
    disability: boolean;
  }>({
    elderly: false,
    children: false,
    pregnant: false,
    disability: false,
  });

  const [specialNeedsNotes, setSpecialNeedsNotes] = useState("");

  const handleAddMember = () => {
    setMembers((prev) => [
      ...prev,
      { id: Date.now().toString(), name: "", age: "" },
    ]);
  };

  const handleRemoveMember = (id: string) => {
    if (members.length > 1) {
      setMembers((prev) => prev.filter((m) => m.id !== id));
    }
  };

  const handleMemberChange = (
    id: string,
    field: "name" | "age",
    value: string
  ) => {
    setMembers((prev) =>
      prev.map((m) => (m.id === id ? { ...m, [field]: value } : m))
    );
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadTxt = () => {
    const activeSpecialNeeds = Object.entries(specialNeedsTypes)
      .filter(([, active]) => active)
      .map(([key]) => key.toUpperCase())
      .join(", ");

    const textContent = `
============================================================
           SAFEINDIA FAMILY DISASTER EMERGENCY PLAN
============================================================
Official Emergency Helpline: 112 | Disaster Helpline: 1078
Ambulance: 108 | Fire: 101 | Police: 100

1. HOUSEHOLD INFORMATION
------------------------------------------------------------
Family Name: ${familyName || "Not specified"}
Total Members: ${members.length}

Family Members:
${members
  .map(
    (m, i) => `  ${i + 1}. ${m.name || "Unnamed"} (Age: ${m.age || "N/A"})`
  )
  .join("\n")}

2. EMERGENCY CONTACTS
------------------------------------------------------------
Primary Contact:
  Name: ${contact1.name || "N/A"}
  Phone: ${contact1.phone || "N/A"}
  Relation: ${contact1.relation || "N/A"}

Secondary Contact:
  Name: ${contact2.name || "N/A"}
  Phone: ${contact2.phone || "N/A"}
  Relation: ${contact2.relation || "N/A"}

3. EVACUATION & SHELTER POINTS
------------------------------------------------------------
Designated Family Meeting Point:
  ${meetingPoint || "Not specified"}

Nearest Disaster Shelter / Camp:
  ${nearestShelter || "Not specified"}

4. MEDICAL & HEALTH DATA
------------------------------------------------------------
Ongoing Medical Conditions & Allergies:
  ${medicalNeeds || "None recorded"}

Critical Daily Medicines & Dosages:
  ${medicines || "None recorded"}

5. VULNERABILITIES & SPECIAL NEEDS
------------------------------------------------------------
Categories: ${activeSpecialNeeds || "None selected"}
Specific Instructions:
  ${specialNeedsNotes || "None"}

6. VITAL DOCUMENTS TO EVACUATE (IN WATERPROOF POUCH)
------------------------------------------------------------
  ${importantDocuments || "None"}

============================================================
CRITICAL OFFLINE INSTRUCTIONS:
1. Print 3 physical copies: keep one on the fridge, one in your
   emergency backpack (go-bag), and one in your vehicle or wallet.
2. During cellular network failure, communicate via short SMS.
3. Obey local district collector and NDMA evacuation notices.
============================================================
Generated via SafeIndia (https://safeindia.org)
`;

    const blob = new Blob([textContent], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${
      familyName ? familyName.toLowerCase().replace(/\s+/g, "_") : "family"
    }_emergency_plan.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <main
      id="main-content"
      className="min-h-screen bg-slate-50 py-8 px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl space-y-8">
        
        {/* Header & Offline Instructions Notice */}
        <header className="space-y-4 print:hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-300 pb-6">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-100 px-3.5 py-1 text-xs font-black text-orange-950 border border-orange-300">
                <span>🛡️</span> Household Preparedness
              </span>
              <h1 className="mt-2 text-2xl font-black tracking-tight text-slate-950 sm:text-4xl">
                Family Emergency Plan Generator
              </h1>
              <p className="mt-1 text-sm sm:text-base text-slate-700 max-w-2xl leading-relaxed font-medium">
                Create a customized, offline disaster plan for your household.
                Fill in your details below, then print or download the physical
                pocket card. No data is stored on external servers.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 sm:self-center shrink-0">
              <button
                type="button"
                onClick={handlePrint}
                className="inline-flex min-h-[48px] items-center gap-2 rounded-xl bg-orange-600 px-5 text-sm font-black text-white shadow hover:bg-orange-500 focus:outline-none focus-visible:ring-4 focus-visible:ring-orange-300 transition"
              >
                <span>🖨️</span> Print / Save PDF
              </button>
              <button
                type="button"
                onClick={handleDownloadTxt}
                className="inline-flex min-h-[48px] items-center gap-2 rounded-xl border-2 border-slate-300 bg-white px-5 text-sm font-black text-slate-800 shadow-sm hover:bg-slate-100 focus:outline-none focus-visible:ring-4 focus-visible:ring-slate-400 transition"
              >
                <span>📥</span> Download Text (.txt)
              </button>
            </div>
          </div>

          {/* Actionable Offline Guidance Banner */}
          <div className="rounded-2xl border-2 border-amber-300 bg-amber-50 p-5 shadow-sm">
            <h2 className="text-xs sm:text-sm font-black uppercase tracking-wider text-amber-950 flex items-center gap-2">
              <span aria-hidden="true">⚠️</span> Why You Must Keep a Physical Copy Offline
            </h2>
            <ul className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-3 text-xs sm:text-sm text-amber-950 font-medium">
              <li className="flex items-start gap-2 bg-white/70 rounded-xl p-3 border border-amber-200">
                <span className="font-black text-amber-800 shrink-0">1.</span>
                <span>Cell towers and power grids often collapse during floods, cyclones, and landslides.</span>
              </li>
              <li className="flex items-start gap-2 bg-white/70 rounded-xl p-3 border border-amber-200">
                <span className="font-black text-amber-800 shrink-0">2.</span>
                <span>Stick one copy on your refrigerator so first responders can locate vital medical data.</span>
              </li>
              <li className="flex items-start gap-2 bg-white/70 rounded-xl p-3 border border-amber-200">
                <span className="font-black text-amber-800 shrink-0">3.</span>
                <span>Slip a folded copy inside each child&apos;s school bag and adult wallet for rapid identification.</span>
              </li>
            </ul>
          </div>
        </header>

        {/* Form and Preview Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Form Controls (Hidden in Print) */}
          <section
            aria-label="Family Plan Form Inputs"
            className="lg:col-span-6 space-y-6 print:hidden"
          >
            {/* Section 1: Household & Members */}
            <div className="rounded-2xl border-2 border-slate-300 bg-white p-5 sm:p-6 shadow-sm space-y-5">
              <h2 className="text-base font-black text-slate-900 border-b border-slate-200 pb-3 uppercase tracking-wide">
                1. Household & Members
              </h2>

              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-slate-800 mb-2">
                  Family Name / Identifier <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  value={familyName}
                  onChange={(e) => setFamilyName(e.target.value)}
                  placeholder="e.g. Sharma Family / House 402"
                  className="w-full min-h-[48px] rounded-xl border-2 border-slate-300 bg-white px-3.5 py-2.5 text-sm font-semibold text-slate-950 placeholder:text-slate-500 focus:border-orange-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-xs font-black uppercase tracking-wider text-slate-800">
                    Family Members ({members.length})
                  </label>
                  <button
                    type="button"
                    onClick={handleAddMember}
                    className="inline-flex min-h-[40px] items-center rounded-lg bg-orange-50 border border-orange-300 px-3 py-1.5 text-xs font-black text-orange-900 hover:bg-orange-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 transition"
                  >
                    + Add Member
                  </button>
                </div>

                <div className="space-y-3">
                  {members.map((member, idx) => (
                    <div key={member.id} className="flex items-center gap-2">
                      <span className="text-xs font-black text-slate-500 w-5 text-center">
                        {idx + 1}.
                      </span>
                      <input
                        type="text"
                        placeholder="Full Name"
                        value={member.name}
                        onChange={(e) =>
                          handleMemberChange(member.id, "name", e.target.value)
                        }
                        aria-label={`Member ${idx + 1} full name`}
                        className="flex-1 min-h-[44px] rounded-xl border-2 border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-950 placeholder:text-slate-500 focus:border-orange-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                      />
                      <input
                        type="text"
                        placeholder="Age"
                        value={member.age}
                        onChange={(e) =>
                          handleMemberChange(member.id, "age", e.target.value)
                        }
                        aria-label={`Member ${idx + 1} age`}
                        className="w-20 min-h-[44px] rounded-xl border-2 border-slate-300 bg-white px-2.5 py-2 text-sm font-semibold text-slate-950 placeholder:text-slate-500 focus:border-orange-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 text-center"
                      />
                      {members.length > 1 && (
                        <button
                          type="button"
                          onClick={() => handleRemoveMember(member.id)}
                          aria-label={`Remove member ${idx + 1}`}
                          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-300 text-slate-600 hover:bg-red-50 hover:text-red-700 hover:border-red-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 transition"
                        >
                          ✕
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Section 2: Emergency Contacts */}
            <div className="rounded-2xl border-2 border-slate-300 bg-white p-5 sm:p-6 shadow-sm space-y-5">
              <h2 className="text-base font-black text-slate-900 border-b border-slate-200 pb-3 uppercase tracking-wide">
                2. Emergency Contacts
              </h2>

              <div className="space-y-3">
                <h3 className="text-xs font-black uppercase text-slate-700">
                  Primary Contact (Local / Nearby)
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <input
                    type="text"
                    placeholder="Name"
                    value={contact1.name}
                    onChange={(e) =>
                      setContact1({ ...contact1, name: e.target.value })
                    }
                    aria-label="Primary contact name"
                    className="min-h-[44px] rounded-xl border-2 border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-950 placeholder:text-slate-500 focus:border-orange-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={contact1.phone}
                    onChange={(e) =>
                      setContact1({ ...contact1, phone: e.target.value })
                    }
                    aria-label="Primary contact phone number"
                    className="min-h-[44px] rounded-xl border-2 border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-950 placeholder:text-slate-500 focus:border-orange-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                  />
                  <input
                    type="text"
                    placeholder="Relation (e.g. Brother)"
                    value={contact1.relation}
                    onChange={(e) =>
                      setContact1({ ...contact1, relation: e.target.value })
                    }
                    aria-label="Primary contact relationship"
                    className="min-h-[44px] rounded-xl border-2 border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-950 placeholder:text-slate-500 focus:border-orange-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                  />
                </div>
              </div>

              <div className="space-y-3 border-t border-slate-200 pt-4">
                <h3 className="text-xs font-black uppercase text-slate-700">
                  Secondary Contact (Out of District / City)
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <input
                    type="text"
                    placeholder="Name"
                    value={contact2.name}
                    onChange={(e) =>
                      setContact2({ ...contact2, name: e.target.value })
                    }
                    aria-label="Secondary contact name"
                    className="min-h-[44px] rounded-xl border-2 border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-950 placeholder:text-slate-500 focus:border-orange-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={contact2.phone}
                    onChange={(e) =>
                      setContact2({ ...contact2, phone: e.target.value })
                    }
                    aria-label="Secondary contact phone number"
                    className="min-h-[44px] rounded-xl border-2 border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-950 placeholder:text-slate-500 focus:border-orange-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                  />
                  <input
                    type="text"
                    placeholder="Relation (e.g. Uncle)"
                    value={contact2.relation}
                    onChange={(e) =>
                      setContact2({ ...contact2, relation: e.target.value })
                    }
                    aria-label="Secondary contact relationship"
                    className="min-h-[44px] rounded-xl border-2 border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-950 placeholder:text-slate-500 focus:border-orange-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                  />
                </div>
              </div>
            </div>

            {/* Section 3: Meeting Points & Shelters */}
            <div className="rounded-2xl border-2 border-slate-300 bg-white p-5 sm:p-6 shadow-sm space-y-4">
              <h2 className="text-base font-black text-slate-900 border-b border-slate-200 pb-3 uppercase tracking-wide">
                3. Meeting Points & Shelters
              </h2>

              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-slate-800 mb-2">
                  Designated Safe Meeting Point
                </label>
                <input
                  type="text"
                  value={meetingPoint}
                  onChange={(e) => setMeetingPoint(e.target.value)}
                  placeholder="e.g. City Garden main gate / Temple courtyard"
                  className="w-full min-h-[48px] rounded-xl border-2 border-slate-300 bg-white px-3.5 py-2.5 text-sm font-semibold text-slate-950 placeholder:text-slate-500 focus:border-orange-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                />
              </div>

              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-slate-800 mb-2">
                  Nearest Relief Shelter / High Ground
                </label>
                <input
                  type="text"
                  value={nearestShelter}
                  onChange={(e) => setNearestShelter(e.target.value)}
                  placeholder="e.g. Govt Girls Inter College / Ward Community Hall"
                  className="w-full min-h-[48px] rounded-xl border-2 border-slate-300 bg-white px-3.5 py-2.5 text-sm font-semibold text-slate-950 placeholder:text-slate-500 focus:border-orange-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                />
              </div>
            </div>

            {/* Section 4: Medical, Medicines & Special Needs */}
            <div className="rounded-2xl border-2 border-slate-300 bg-white p-5 sm:p-6 shadow-sm space-y-5">
              <h2 className="text-base font-black text-slate-900 border-b border-slate-200 pb-3 uppercase tracking-wide">
                4. Medical, Medicines & Vulnerabilities
              </h2>

              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-slate-800 mb-2">
                  Medical Needs & Critical Allergies
                </label>
                <textarea
                  rows={2}
                  value={medicalNeeds}
                  onChange={(e) => setMedicalNeeds(e.target.value)}
                  placeholder="e.g. Type-1 Diabetes (Insulin dependent), Severe Peanut Allergy"
                  className="w-full rounded-xl border-2 border-slate-300 bg-white p-3 text-sm font-semibold text-slate-950 placeholder:text-slate-500 focus:border-orange-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                />
              </div>

              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-slate-800 mb-2">
                  Prescription Medicines to Carry
                </label>
                <textarea
                  rows={2}
                  value={medicines}
                  onChange={(e) => setMedicines(e.target.value)}
                  placeholder="e.g. Metformin 500mg, Inhaler, Blood pressure tablets"
                  className="w-full rounded-xl border-2 border-slate-300 bg-white p-3 text-sm font-semibold text-slate-950 placeholder:text-slate-500 focus:border-orange-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                />
              </div>

              <div>
                <span className="block text-xs font-black uppercase tracking-wider text-slate-800 mb-2">
                  Special Needs Present in Household
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <label className="flex min-h-[48px] items-center gap-3 rounded-xl border-2 border-slate-300 bg-white px-3 py-2 cursor-pointer hover:bg-slate-50 transition">
                    <input
                      type="checkbox"
                      checked={specialNeedsTypes.elderly}
                      onChange={(e) =>
                        setSpecialNeedsTypes({
                          ...specialNeedsTypes,
                          elderly: e.target.checked,
                        })
                      }
                      className="h-5 w-5 rounded border-2 border-slate-400 text-orange-600 focus:ring-orange-500"
                    />
                    <span className="text-xs sm:text-sm font-bold text-slate-900">
                      👵 Elderly / Senior
                    </span>
                  </label>

                  <label className="flex min-h-[48px] items-center gap-3 rounded-xl border-2 border-slate-300 bg-white px-3 py-2 cursor-pointer hover:bg-slate-50 transition">
                    <input
                      type="checkbox"
                      checked={specialNeedsTypes.children}
                      onChange={(e) =>
                        setSpecialNeedsTypes({
                          ...specialNeedsTypes,
                          children: e.target.checked,
                        })
                      }
                      className="h-5 w-5 rounded border-2 border-slate-400 text-orange-600 focus:ring-orange-500"
                    />
                    <span className="text-xs sm:text-sm font-bold text-slate-900">
                      👶 Children / Infants
                    </span>
                  </label>

                  <label className="flex min-h-[48px] items-center gap-3 rounded-xl border-2 border-slate-300 bg-white px-3 py-2 cursor-pointer hover:bg-slate-50 transition">
                    <input
                      type="checkbox"
                      checked={specialNeedsTypes.pregnant}
                      onChange={(e) =>
                        setSpecialNeedsTypes({
                          ...specialNeedsTypes,
                          pregnant: e.target.checked,
                        })
                      }
                      className="h-5 w-5 rounded border-2 border-slate-400 text-orange-600 focus:ring-orange-500"
                    />
                    <span className="text-xs sm:text-sm font-bold text-slate-900">
                      🤰 Pregnant Person
                    </span>
                  </label>

                  <label className="flex min-h-[48px] items-center gap-3 rounded-xl border-2 border-slate-300 bg-white px-3 py-2 cursor-pointer hover:bg-slate-50 transition">
                    <input
                      type="checkbox"
                      checked={specialNeedsTypes.disability}
                      onChange={(e) =>
                        setSpecialNeedsTypes({
                          ...specialNeedsTypes,
                          disability: e.target.checked,
                        })
                      }
                      className="h-5 w-5 rounded border-2 border-slate-400 text-orange-600 focus:ring-orange-500"
                    />
                    <span className="text-xs sm:text-sm font-bold text-slate-900">
                      ♿ Disability / Mobility
                    </span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-slate-800 mb-2">
                  Specific Assistance Notes
                </label>
                <input
                  type="text"
                  value={specialNeedsNotes}
                  onChange={(e) => setSpecialNeedsNotes(e.target.value)}
                  placeholder="e.g. Needs wheelchair ramp, baby diaper supply, walker"
                  className="w-full min-h-[48px] rounded-xl border-2 border-slate-300 bg-white px-3.5 py-2.5 text-sm font-semibold text-slate-950 placeholder:text-slate-500 focus:border-orange-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                />
              </div>

              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-slate-800 mb-2">
                  Important Documents to Keep in Waterproof Pouch
                </label>
                <textarea
                  rows={2}
                  value={importantDocuments}
                  onChange={(e) => setImportantDocuments(e.target.value)}
                  className="w-full rounded-xl border-2 border-slate-300 bg-white p-3 text-sm font-semibold text-slate-950 placeholder:text-slate-500 focus:border-orange-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                />
              </div>
            </div>
          </section>

          {/* Right Column: Live Document Card & Printable Area */}
          <section
            aria-label="Emergency Plan Document Preview"
            className="lg:col-span-6 print:w-full print:block print:p-0"
          >
            <div className="sticky top-20 rounded-3xl border-2 border-slate-950 bg-white p-6 sm:p-8 shadow-md print:border-2 print:border-black print:shadow-none print:p-6">
              
              {/* Card Header */}
              <div className="border-b-2 border-slate-950 pb-4 mb-5">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs font-black uppercase tracking-widest text-orange-700">
                      SafeIndia National Protocol
                    </span>
                    <h2 className="text-2xl font-black text-slate-950 tracking-tight">
                      FAMILY EMERGENCY PLAN
                    </h2>
                  </div>
                  <div className="text-right">
                    <span className="inline-block rounded-lg bg-red-700 px-3 py-1.5 text-xs font-black text-white shadow">
                      EMERGENCY: 112
                    </span>
                    <div className="text-xs text-slate-700 font-extrabold mt-1">
                      NDMA: 1078 | AMB: 108
                    </div>
                  </div>
                </div>
              </div>

              {/* Document Body */}
              <div className="space-y-4 text-xs sm:text-sm text-slate-900">
                
                {/* Family ID & Members */}
                <div className="bg-slate-50 border-2 border-slate-200 rounded-xl p-4">
                  <div className="flex items-baseline justify-between border-b border-slate-200 pb-2 mb-2.5">
                    <span className="text-xs font-black uppercase text-slate-600">
                      Household
                    </span>
                    <span className="font-black text-slate-950 text-base">
                      {familyName || "Family Name Not Specified"}
                    </span>
                  </div>

                  <div>
                    <span className="font-extrabold text-slate-700 block mb-1.5">
                      Registered Members ({members.length}):
                    </span>
                    <div className="grid grid-cols-2 gap-x-2 gap-y-1.5">
                      {members.map((m, i) => (
                        <div key={m.id} className="truncate">
                          <span className="font-black text-slate-600">
                            {i + 1}.
                          </span>{" "}
                          <span className="text-slate-950 font-bold">
                            {m.name || "—"}
                          </span>{" "}
                          <span className="text-slate-600 font-medium">
                            ({m.age ? `${m.age} yrs` : "age —"})
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Contacts Block */}
                <div>
                  <h3 className="text-xs font-black uppercase tracking-wider text-slate-800 border-b border-slate-200 pb-1.5 mb-2.5">
                    Emergency Phone Contacts
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="rounded-xl border-2 border-slate-200 p-3 bg-white">
                      <span className="text-xs font-black uppercase text-slate-500 block mb-0.5">
                        Primary (Local)
                      </span>
                      <div className="font-black text-slate-950 text-sm truncate">
                        {contact1.name || "Name: —"}
                      </div>
                      <div className="text-xs font-mono font-bold text-blue-800 my-0.5">
                        {contact1.phone ? (
                          <a
                            href={`tel:${contact1.phone}`}
                            className="inline-flex min-h-[36px] items-center underline"
                          >
                            {contact1.phone}
                          </a>
                        ) : (
                          "Phone: —"
                        )}
                      </div>
                      <div className="text-xs text-slate-700 font-medium">
                        Rel: {contact1.relation || "—"}
                      </div>
                    </div>

                    <div className="rounded-xl border-2 border-slate-200 p-3 bg-white">
                      <span className="text-xs font-black uppercase text-slate-500 block mb-0.5">
                        Secondary (Out of City)
                      </span>
                      <div className="font-black text-slate-950 text-sm truncate">
                        {contact2.name || "Name: —"}
                      </div>
                      <div className="text-xs font-mono font-bold text-blue-800 my-0.5">
                        {contact2.phone ? (
                          <a
                            href={`tel:${contact2.phone}`}
                            className="inline-flex min-h-[36px] items-center underline"
                          >
                            {contact2.phone}
                          </a>
                        ) : (
                          "Phone: —"
                        )}
                      </div>
                      <div className="text-xs text-slate-700 font-medium">
                        Rel: {contact2.relation || "—"}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Evacuation Rendezvous */}
                <div className="rounded-xl border-2 border-blue-200 bg-blue-50/70 p-4">
                  <h3 className="text-xs font-black uppercase tracking-wider text-blue-950 mb-2">
                    Evacuation & Safe Rendezvous
                  </h3>
                  <div className="space-y-1.5 text-xs sm:text-sm text-slate-900">
                    <div>
                      <strong className="text-blue-950">Meeting Point:</strong>{" "}
                      <span className="font-semibold">{meetingPoint || "Not specified yet"}</span>
                    </div>
                    <div>
                      <strong className="text-blue-950">Nearest Shelter / High Ground:</strong>{" "}
                      <span className="font-semibold">{nearestShelter || "Not specified yet"}</span>
                    </div>
                  </div>
                </div>

                {/* Medical & Medicines */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="rounded-xl border-2 border-slate-200 p-3 bg-slate-50">
                    <span className="text-xs font-black uppercase text-slate-600 block mb-1">
                      Medical Needs / Conditions
                    </span>
                    <p className="text-xs font-medium text-slate-950 leading-relaxed">
                      {medicalNeeds || "None listed"}
                    </p>
                  </div>
                  <div className="rounded-xl border-2 border-slate-200 p-3 bg-slate-50">
                    <span className="text-xs font-black uppercase text-slate-600 block mb-1">
                      Essential Prescriptions
                    </span>
                    <p className="text-xs font-medium text-slate-950 leading-relaxed">
                      {medicines || "None listed"}
                    </p>
                  </div>
                </div>

                {/* Special Needs & Vulnerabilities */}
                <div className="rounded-xl border-2 border-amber-300 bg-amber-50/80 p-4">
                  <span className="text-xs font-black uppercase text-amber-950 block mb-2">
                    Special Assistance & Vulnerabilities
                  </span>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {specialNeedsTypes.elderly && (
                      <span className="bg-white border border-amber-400 rounded-lg px-2.5 py-1 text-xs font-black text-amber-950 shadow-sm">
                        Elderly
                      </span>
                    )}
                    {specialNeedsTypes.children && (
                      <span className="bg-white border border-amber-400 rounded-lg px-2.5 py-1 text-xs font-black text-amber-950 shadow-sm">
                        Children / Infants
                      </span>
                    )}
                    {specialNeedsTypes.pregnant && (
                      <span className="bg-white border border-amber-400 rounded-lg px-2.5 py-1 text-xs font-black text-amber-950 shadow-sm">
                        Pregnant Person
                      </span>
                    )}
                    {specialNeedsTypes.disability && (
                      <span className="bg-white border border-amber-400 rounded-lg px-2.5 py-1 text-xs font-black text-amber-950 shadow-sm">
                        Disability / Mobility
                      </span>
                    )}
                    {!specialNeedsTypes.elderly &&
                      !specialNeedsTypes.children &&
                      !specialNeedsTypes.pregnant &&
                      !specialNeedsTypes.disability && (
                        <span className="text-xs text-slate-600 font-medium">None selected</span>
                      )}
                  </div>
                  {specialNeedsNotes && (
                    <div className="text-xs text-amber-950 font-bold mt-1">
                      Note: <span className="font-semibold">{specialNeedsNotes}</span>
                    </div>
                  )}
                </div>

                {/* Important Documents */}
                <div className="border-t border-slate-200 pt-3 text-xs text-slate-700 leading-relaxed">
                  <strong className="text-slate-950 font-black">Waterproof Grab-Bag Documents:</strong>{" "}
                  <span className="font-medium text-slate-900">{importantDocuments}</span>
                </div>

              </div>

              {/* Card Footer for Printout */}
              <div className="mt-6 border-t-2 border-slate-950 pt-3 flex items-center justify-between text-xs font-black text-slate-600">
                <span>SafeIndia Public Safety Card</span>
                <span>Keep with Essential Documents & First-Aid Kit</span>
              </div>

            </div>
          </section>

        </div>
      </div>
    </main>
  );
}