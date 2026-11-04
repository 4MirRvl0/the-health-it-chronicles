// Function to open the Book of Citadels & Terms Tab
function openCitadelTab() {
  hideAllTabs();
  const citadelTab = document.getElementById("citadel-tab");
  if (citadelTab) {
    citadelTab.classList.add("active-tab");
    window.scrollTo(0, 0);
  }
}
// Global Active Data Object
let db;

// Navigation & Tab Switching Functions
function openMainTab() {
  hideAllTabs();
  document.getElementById("main-tab").classList.add("active-tab");
  window.scrollTo(0, 0);
}

function openWelcomeTab() {
  hideAllTabs();
  document.getElementById("welcome-tab").classList.add("active-tab");
  window.scrollTo(0, 0);
}

function hideAllTabs() {
  document.querySelectorAll(".tab-content").forEach(tab => {
    tab.classList.remove("active-tab");
  });
}

// Load Profile Photo Dynamically
document.addEventListener("DOMContentLoaded", () => {
  const profileImg = document.getElementById("profile-img");
  if (profileImg) {
    profileImg.src = "DX2023X0183_2.jpg";
    profileImg.onerror = function() {
      this.src = "DX2023X0183.jpg";
    };
  }
  renderWeeks();
  renderDropdownLinks();
  injectImageModal();
});

// 12-Week Master Data Structure
const initialWeeks = [
  {
    week: 1,
    house: "GUBAT RHU",
    title: "The Beginning — Setup & Onboarding",
    motto: "Crossing the Wall into Unknown Territory",
    desc: `This week marked the beginning of my On-the-Job Training (OJT) at Gubat Rural Health Unit (RHU), where I was introduced to the daily operations of a healthcare facility’s IT system. My learning experience started when Dr. Ronald E. Ferreras RM, RN, MD, MPM-HSD, CPC-FP the Municipal Health Officer of Gubat introduced me to the IT staff of Gubat RHU. I met Sir Jay-r and Ma’am Rona, who guided me throughout the initial phase of my training. Additionally, I had the opportunity to interact with my classmates and other Grade 12 interns of The Lewis College who were also assigned to the same facility.

One of the key lessons I learned this week was how to use the iClinicSys Integrated Clinic Information System, which is an essential tool in managing patient records and other clinical data. Sir Jay-r provided me with a hands-on tutorial on how to navigate and operate the system efficiently. After familiarizing myself with the system, I immediately applied my learning by encoding patient records. My classmates also helped me understand various functions of iClinicSys, making the process smoother and more manageable.

Throughout the week, I encountered different challenges, including ensuring data accuracy and adapting to the workflow of the health unit. However, with the guidance of Sir Jay-r and the support of my classmates, I gradually became more confident in handling tasks. This experience not only enhanced my technical skills in data encoding but also strengthened my teamwork and communication skills.

Overall, my first week at Gubat RHU was a productive and insightful experience. I gained valuable knowledge on how technology is integrated into healthcare services and how crucial proper data management is in patient care. Moving forward, I aim to further improve my efficiency in using iClinicSys and contribute effectively to the daily operations of the RHU.`,
    tags: ["SystemSetup", "Onboarding", "iClinicSys", "HealthIT"],
    photos: [
      "IMG20260810092208.jpg",
      "IMG20260811093112.jpg",
      "IMG20260812081451.jpg",
      "IMG20260813113255.jpg"
    ]
  },
  {
    week: 2,
    house: "GUBAT RHU",
    title: "First Blood — PhilHealth Eligibility & Yakap Portal",
    motto: "Our Blades Are Sharp",
    desc: `My second week of OJT at Gubat RHU was all about getting hands-on with the systems that keep things running behind the scenes. Sir Jay-r and Sir AP walked me through the PhilHealth System for eligibility claims, along with the PhilHealth portal for Member Yakap Registration. One key takeaway for me was that patients can only access Yakap Program benefits if they’re officially registered members assigned specifically to Gubat RHU. It really put into perspective how healthcare benefits are tracked and verified behind the scenes.

Later in the week, Sir Ian and I stepped up to manage Yakap registrations and log consultations in iClinicSys while patients waited for their check-ups. Having that steady stream of patients gave me plenty of chances to practice processing eligibility claims in real time. With Sir Ian's guidance, I started feeling a lot more comfortable navigating the software.

This week definitely showed me just how big of a role technology plays in day-to-day healthcare. Accuracy really matters here one wrong detail in a record can mess up a claim down the line. As I keep going with my OJT, I’m hoping to get even faster and more confident with both iClinicSys and the PhilHealth system, while getting a better grasp of how the whole RHU workflow ties together.`,
    tags: ["PhilHealth", "YakapRegistration", "Claims", "ITSupport"],
    photos: [
      "IMG20260817071146.jpg",
      "IMG20260817080205.jpg",
      "IMG20260817085219.jpg",
      "IMG20260817160449.jpg",
      "IMG20260818160035.jpg"
    ]
  },
  {
    week: 3,
    house: "GUBAT RHU",
    title: "Fire and Blood — Tranche 2 Records & Prescription Logs",
    motto: "Forging the Relational Dragons",
    desc: `During my third week at Gubat RHU, I focused on encoding patient records into the iClinicSys platform. I was specifically assigned to manage PhilHealth eligibility claims, which involved reviewing each Individual Treatment Record (ITR) or Triage Empanelment Slip to verify patient registration at Gubat RHU prior to their consultation with the attending physician. This responsibility significantly enhanced my attention to detail and strengthened my expertise in digital health record management.

In addition to my regular duties, my fellow intern Nhel John and I were selected to monitor, process, and transmit all TRANCHE 2 patient records, as well as sort prescription logs covering January through June for the quarterly PhilHealth submission. This assignment gave me a deeper appreciation for the critical functions the RHU performs in delivering healthcare and community services.`,
    tags: ["Database", "Tranche2", "PrescriptionLogs", "HealthRecords"],
    photos: [
      "IMG20260824071940.jpg",
      "IMG20260824083352.jpg",
      "IMG20260826080947.jpg",
      "IMG20260826163820.jpg",
      "IMG20260827065954.jpg",
      "IMG20260928153108.jpg",
    ]
  },
  {
    week: 4,
    house: "GUBAT RHU",
    title: "The Iron Bank — Front-Encoding & Team Expansions",
    motto: "A Lannister Always Pays His Payload",
    desc: `Week four at Gubat RHU started with a pleasant surprise we ran into a familiar face, our former teacher Ms. Alex Billodo! We were thrilled to hear that she’s joining our team at the RHU as a fellow encoder.

As the week went on, we stayed busy with front-encoding patient records in iClinicSys. By this point, the system is starting to feel second nature to me, which has really helped me work faster and keep up with the daily workflow.

With every passing week, this OJT experience gives me a deeper appreciation for both healthcare technology and what it truly means to serve the community.`,
    tags: ["FrontEncoding", "Workflow", "DataEntry", "Logs"],
    photos: [
      "IMG20260902111054.jpg",
      "IMG20260902133015.jpg",
      "IMG20260904153709.jpg",
      "IMG20260903124343.jpg"
    ]
  },
  {
    week: 5,
    house: "GUBAT RHU",
    title: "Unbowed, Unbroken — Dengue Preparedness & Staff Coordination",
    motto: "Sunspear’s Reactive Fortress",
    desc: `For my fifth week at Gubat RHU, we got right back into our regular rhythm, handling PhilHealth eligibility claims and encoding patient records into iClinicSys.

A highlight of the week was getting the chance to sit in on a meeting with the RHU staff. They were discussing the health unit’s preparedness and planning around dengue cases in the community. It was really eye-opening to observe how the team coordinates behind the scenes seeing how much thought goes into planning so the RHU can stay prepared and keep medical services running smoothly for everyone.`,
    tags: ["Workflow", "DenguePlanning", "StaffMeeting", "ProcessOptimization"],
    photos: [
      "IMG20260901155748.jpg",
      "IMG20260902111054.jpg",
      "IMG20260902133015.jpg",
      "IMG20260903074001.jpg",
      "IMG20260904153921.jpg"
    ]
  },
  {
    week: 6,
    house: "GUBAT RHU",
    title: "The Long Night — Sportsfest, Basketball, & Canva Redesign",
    motto: "I am the Sword in the Darkness",
    desc: `Week six at Gubat RHU brought a fun change of pace with the start of the LGU Gubat 120th Civil Service Anniversary Sportsfest! Even with the festivities kicking off, we kept right on track with our usual duties processing PhilHealth eligibility claims and front-encoding patient records in iClinicSys without missing a beat.

The highlight? Three of us interns from The Lewis College actually joined the basketball teams representing different colors. Playing in the sportsfest was an absolute blast and a hell of a run for us, making it such a cool experience to be part of the LGU community events.

Aside from the games, this week also marked a shift for our capstone project. We transitioned to using Canva for our website layout design, which made a huge difference. It let me pull together a much cleaner, more structured, and visually appealing blueprint, helping us integrate better graphical elements and sharpen the overall presentation.`,
    tags: ["Sportsfest", "CanvaLayout", "Capstone", "Networking"],
    photos: [
      "IMG20260916082317.jpg",
      "IMG20260921155730.jpg",
      "IMG20260923163934.jpg",
      "IMG20260925150206.jpg",
      "IMG20260925150218.jpg"
    ]
  },
  {
    week: 7,
    house: "GUBAT RHU",
    title: "Growing Strong — Doctor's Orders & Pre-Oral Defense",
    motto: "The Highgarden Automation Harvester",
    desc: `Week seven at Gubat RHU brought a few new faces and a lot of multitasking! We welcomed a new intern from CCDI College of Sorsogon to the team, and right after, we dove back into our usual routine of encoding Individual Treatment Records (ITRs). On top of our daily RHU tasks, we were also busy prepping for our upcoming Pre-Oral Defense, which meant a lot of juggling between academic demands and our practical OJT responsibilities.

On the technical side, Sir Jay-r introduced us to a brand new process in iClinicSys. He taught us how to properly encode doctor-prescribed medications whether for the ITR or the second tranche through the system's Doctor's Order and SOAPs modules. Learning this new workflow really opened my eyes to how detailed and thorough patient record documentation has to be.

As my internship moves forward, I can feel my skills sharpening and my appreciation for healthcare technology growing deeper. I'm staying focused on knocking out our assigned tasks and doing whatever I can to help keep Gubat RHU's daily operations running smoothly.`,
    tags: ["ITRs", "DoctorsOrders", "SOAPs", "PreOralDefense"],
    photos: [
      "IMG20260928153104.jpg",
      "IMG20261001141452.jpg",
      "IMG20261005092108.jpg",
      "IMG20261006082043.jpg",
      "IMG20261006132820.jpg"
    ]
  },
  {
    week: 8,
    house: "GUBAT RHU",
    title: "What Is Patched May Never Die — Municipal Fieldwork & Emps",
    motto: "Hardening Network & Endpoint Defenses",
    desc: `Week eight at Gubat RHU took us out of the usual office setup and into the Municipality of Gubat! Sir Ian and I were assigned to handle the PhilHealth Yakap Registration for LGU Gubat’s regular and JO employees, as well as releasing their Yakap empanelment slips. In between fieldwork, we also kept up with our regular task of encoding Individual Treatment Records (ITRs) in iClinicSys.

Our work at the municipality involved verifying employee records to check their PhilHealth eligibility and making sure everyone was properly registered under Gubat RHU. Doing this out in the field really put into perspective how crucial accurate documentation and proper verification are when managing benefits.

As my OJT moves forward, I can definitely see my technical and administrative skills getting sharper with every new challenge.`,
    tags: ["Fieldwork", "YakapRegistration", "Municipality", "Verification"],
    photos: [
      "IMG20261013111830.jpg",
      "IMG20261014082023.jpg",
      "IMG20261015092005.jpg",
      "IMG20261015110244.jpg"
    ]
  },
 {
    week: 9,
    house: "GUBAT RHU",
    title: "As High as Honor — Mentorship, Medical Mission & eKonsulta",
    motto: "Mentoring from the Eyrie's Peak",
    desc: `Week nine at Gubat RHU turned out to be one of the busiest and most rewarding weeks yet! We welcomed a new immersion student from CCDI College and a transfer employee from LGU Gubat, and part of our responsibility was guiding them through the basics of iClinicSys, PhilHealth claims processing, eGov registration, and standard RHU workflows. Stepping into a mentoring role was a great experience explaining those procedures to someone else really helped reinforce everything I’ve learned over the past few weeks.

To top it all off, we were invited to take part in a Medical and Dental Mission right here in the Municipality of Gubat. We ended up assisting over 300 patients! While it definitely left us with a mountain of backlog ITR encoding to catch up on afterwards, it was an absolute blast and such a fulfilling experience.

On top of all the fieldwork, Sir Jay-r also assigned me to teach Nhel John on a specific administrative task: organizing the Gubat RHU eKonsulta patient records using Google Sheets. We sorted and categorized the data by barangay, birthdate, and PhilHealth Identification Number (PIN) to make the records much cleaner and easier for the team to navigate.

Looking back, it’s amazing to see how far I’ve come from learning the ropes as a new intern to now mentoring others, handling large-scale medical missions, and organizing data.`,
    tags: ["Mentorship", "MedicalMission", "eKonsulta", "GoogleSheets"],
    photos: [
      "FB_IMG_1792738431675.jpg",
      "IMG20261020080113.jpg",
      "IMG20261023083011.jpg",
      "IMG20261023091744.jpg",
      "IMG20261023095546.jpg"
    ]
  },
  {
    week: 10,
    house: "GUBAT RHU",
    title: "Ours is the Fury — Manual YAKAP Registration & Transmittals",
    motto: "The Storm of Latency Optimization",
    desc: `During my tenth week at Gubat RHU, despite the rainy weather, our team remained fully committed to reporting for duty. I was specifically assigned to handle PhilHealth transmittals for patients who lacked cellphones, active email addresses, and mobile numbers. My task was to assist these patients in filling out the PhilHealth Claim Signature Form (PCSF) to facilitate manual YAKAP registration.`,
    tags: ["Transmittals", "PCSF", "ManualRegistration", "RainyDuty"],
    photos: [
      "IMG20261027125855.jpg",
      "IMG20261027125858.jpg",
      "IMG20261030145603.jpg",
      "IMG20261030151336.jpg",
      "IMG20261030151340.jpg"
    ]
  },
  {
    week: 11,
    house: "GUBAT RHU",
    title: "The Tide of Records — Server Downtime & Time Management",
    motto: "Navigating the Seas of Health Insurance Data",
    desc: `During my eleventh week at Gubat RHU, the rainy season was in full swing, but our responsibilities remained a top priority. Due to the inclement weather, the PhilHealth eligibility claims and the PhilHealth Checker Utility server experienced downtime, temporarily restricting our work in that area. Consequently, our team shifted focus to encoding data in iClinicSys alongside other immersion tasks, ensuring that patient records were updated and organized efficiently.

As my On-the-Job Training progressed, I continually learned the vital importance of adaptability and time management. Balancing system encoding, project development, and academic duties proved challenging yet rewarding, preparing me to handle remaining tasks with confidence. As my internship nears its conclusion, I have been reflecting on the valuable experiences and skills I have acquired, and I look forward to making the most of my final week at Gubat RHU.`,
    tags: ["ServerDowntime", "Adaptability", "TimeManagement", "Records"],
    photos: [
      "2d6b4a63-dabf-4ace-a140-8a7680237e51.jpeg",
      "fbe3d5c6-50cc-4cdb-9b6d-074f19ae6f6a.jpeg",
      "89d62f2f-6990-4bdc-b55c-4ab0adf1eb76.jpeg",
      "0905a531-b57f-47fd-a843-1fc278a1e381.jpeg"
    ]
  },
  {
    week: 12,
    house: "GUBAT RHU",
    title: "The Iron Throne — Total Hours Computation & Completion",
    motto: "Master of Information Technology",
    desc: `On my twelfth week at Gubat RHU, I started computing my total OJT hours and realized that this week would be my final week. With this in mind, I made sure to maximize my remaining time and complete pending tasks. As I conclude my OJT journey, I am grateful for the valuable experiences, technical skills, and practical knowledge I have acquired. My time at Gubat RHU has been a meaningful learning experience, and I leave with a deeper understanding of healthcare systems and the impact of efficient documentation in medical services.`,
    tags: ["Offboarding", "HoursComputation", "OJTCompletion", "Reflection"],
    photos: [
      "download.jpeg",
      "download (1).jpeg",
      "download (2).jpeg"
    ]
  }
];

// Active slideshow intervals tracker to prevent overlap glitches
const slideIntervals = {};

// Render Main Weekly Card Log Grid with Original Layout and Hover Slideshow Effect
function renderWeeks() {
  const container = document.getElementById("blog-grid");
  if (!container) return;
  container.innerHTML = "";

  initialWeeks.forEach(w => {
    let validPhotos = (w.photos || []).filter(img => img && img.trim() !== "");
    let initialThumb = validPhotos.length > 0 ? validPhotos[0] : "";

    const card = document.createElement("div");
    card.className = "week-card";
    card.style.position = "relative";
    card.style.overflow = "hidden";

    card.innerHTML = `
      <div class="card-bg-slideshow" id="card-bg-${w.week}" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-image: url('${initialThumb}'); background-size: cover; background-position: center; opacity: 0.08; transition: opacity 0.5s ease, background-image 0.5s ease; z-index: 0; pointer-events: none;"></div>
      <div class="card-content-wrapper" style="position: relative; z-index: 1;">
        <div class="card-header">
          <span class="house-badge">${w.house}</span>
          <span style="color: var(--text-muted); font-size: 0.8rem;">WEEK ${w.week}</span>
        </div>
        <div class="card-body">
          <h3 class="week-title">${w.title}</h3>
          <p class="week-motto">"${w.motto}"</p>
          <p class="week-desc">${w.desc}</p>
          <div class="tech-tags">
            ${w.tags.map(t => `<span class="tech-tag">#${t}</span>`).join("")}
          </div>
          <div class="card-footer-actions" style="margin-top: 15px;">
            <button class="view-details-btn" onclick="openWeekDetailTab(${w.week})" style="background: var(--accent-gold); color: #000; border: none; padding: 8px 14px; border-radius: 4px; cursor: pointer; font-weight: bold;">
              <i class="fa-solid fa-images"></i> View Week ${w.week} Photo Compilation
            </button>
          </div>
        </div>
      </div>
    `;

    // Attach hover listeners for slideshow effect if photos exist
    if (validPhotos.length > 1) {
      card.addEventListener("mouseenter", () => {
        let currentIndex = 0;
        const bgElement = document.getElementById(`card-bg-${w.week}`);
        if (bgElement) bgElement.style.opacity = "0.2"; // Slightly brighten preview on hover

        slideIntervals[w.week] = setInterval(() => {
          currentIndex = (currentIndex + 1) % validPhotos.length;
          if (bgElement) {
            bgElement.style.backgroundImage = `url('${validPhotos[currentIndex]}')`;
          }
        }, 1500); // Changes slide every 1.5 seconds
      });

      card.addEventListener("mouseleave", () => {
        clearInterval(slideIntervals[w.week]);
        const bgElement = document.getElementById(`card-bg-${w.week}`);
        if (bgElement) {
          bgElement.style.opacity = "0.08";
          bgElement.style.backgroundImage = `url('${validPhotos[0]}')`; // Reset to first photo
        }
      });
    }

    container.appendChild(card);
  });
}

// Populate Top Navigation Bar Dropdown Items
function renderDropdownLinks() {
  const dropdownContainer = document.getElementById("gallery-dropdown-links");
  if (!dropdownContainer) return;
  dropdownContainer.innerHTML = "";

  initialWeeks.forEach(w => {
    const btn = document.createElement("button");
    btn.onclick = () => openWeekDetailTab(w.week);
    btn.innerHTML = `<i class="fa-solid fa-folder-open" style="margin-right: 8px; color: var(--accent-gold);"></i> Week ${w.week}: ${w.title.split('—')[0].trim()}`;
    dropdownContainer.appendChild(btn);
  });
}

// Open Dedicated Week Detail Window Tab compiling that week's photos statically with zoom modal support
function openWeekDetailTab(weekNumber) {
  const weekData = initialWeeks.find(w => w.week === weekNumber);
  if (!weekData) return;

  hideAllTabs();
  const detailTab = document.getElementById("week-detail-tab");
  const detailContainer = document.getElementById("week-detail-content");
  if (!detailTab || !detailContainer) return;
  
  detailTab.classList.add("active-tab");

  let basePhotos = (weekData.photos || []).filter(img => img && img.trim() !== "");
  let photosHTML = "";

  if (basePhotos.length > 0) {
    photosHTML = `
      <div class="detail-photo-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 15px; margin-top: 20px;">
        ${basePhotos.map(img => `
          <div style="position: relative; width: 100%; height: 180px;">
            <img src="${img}" class="detail-photo-thumb" onclick="zoomImage('${img}')" title="Click to zoom in" style="width: 100%; height: 100%; object-fit: cover; border-radius: 6px; cursor: pointer; border: 2px solid var(--accent-gold);">
          </div>
        `).join("")}
      </div>
    `;
  } else {
    photosHTML = `<p style="color: var(--text-muted); font-style: italic; margin-top: 15px;">No documentation photos available for Week ${weekNumber}.</p>`;
  }

  detailContainer.innerHTML = `
    <div class="detail-header-badge" style="font-weight: bold; color: var(--accent-gold); margin-bottom: 5px;">${weekData.house} — WEEK ${weekData.week}</div>
    <h1 class="title" style="margin-bottom: 10px;">${weekData.title}</h1>
    <p class="motto" style="font-style: italic; margin-bottom: 15px;">"${weekData.motto}"</p>
    <div class="tech-tags" style="margin-bottom: 20px;">
      ${weekData.tags.map(t => `<span class="tech-tag" style="margin-right: 5px;">#${t}</span>`).join("")}
    </div>
    <p class="detail-description" style="line-height: 1.6; margin-bottom: 25px;">${weekData.desc}</p>
    
    <hr style="border: 0; border-top: 1px solid rgba(255,255,255,0.1); margin: 20px 0;">
    
    <h3 class="detail-photo-heading"><i class="fa-solid fa-images"></i> Week ${weekData.week} Documentation Photo Compilation</h3>
    <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 10px;">Click any photo to zoom in.</p>
    ${photosHTML}
  `;
  window.scrollTo(0, 0);
}

// Inject and Handle Image Zoom Modal Dynamically
function injectImageModal() {
  if (document.getElementById("imageModal")) return;
  const modalHTML = `
    <div id="imageModal" onclick="closeImageModal()" style="display: none; position: fixed; z-index: 9999; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.85); align-items: center; justify-content: center; cursor: zoom-out;">
      <span style="position: absolute; top: 20px; right: 30px; color: #fff; font-size: 40px; font-weight: bold; cursor: pointer;">&times;</span>
      <img id="modalImg" style="max-width: 90%; max-height: 90%; border-radius: 8px; box-shadow: 0 5px 25px rgba(0,0,0,0.5);">
    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', modalHTML);
}

function zoomImage(imgSrc) {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImg");
  if (modal && modalImg) {
    modalImg.src = imgSrc;
    modal.style.display = "flex";
  }
}

function closeImageModal() {
  const modal = document.getElementById("imageModal");
  if (modal) {
    modal.style.display = "none";
  }
}
// Toggle Mobile Side Menu Drawer
function toggleMobileMenu() {
  const navLeft = document.getElementById('nav-left-menu');
  const navRight = document.getElementById('nav-right-menu');
  const overlay = document.getElementById('menu-overlay');

  if (navLeft) navLeft.classList.toggle('active-menu');
  if (navRight) navRight.classList.toggle('active-menu');
  if (overlay) overlay.classList.toggle('active-menu');
}

// Close Mobile Side Menu after clicking a section link
function closeMobileMenu() {
  const navLeft = document.getElementById('nav-left-menu');
  const navRight = document.getElementById('nav-right-menu');
  const overlay = document.getElementById('menu-overlay');

  if (navLeft) navLeft.classList.remove('active-menu');
  if (navRight) navRight.classList.remove('active-menu');
  if (overlay) overlay.classList.remove('active-menu');
}