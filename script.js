/* ==========================================================================
   Ornob Barua — Engineering Portfolio
   ========================================================================== */

/* ---------- Project Data ---------- */
// Each project has its own page at projects/<id>.html, which holds the full
// write-up and photo gallery. This list only drives the cards on the home page
// and the previous/next links at the bottom of each project page.
//
// To add a project:
//   1. Add an entry below (thumbnail = image in assets/images/, or null).
//   2. Copy any file in projects/ to projects/<id>.html and edit its text and images.
//
// category options: "research" | "nanofab" | "hardware" | "manufacturing"
const projectData = [
    {
        id: "toiletpaper",
        title: "Automated Toilet Paper Replacement System",
        subtitle: "Junior Mechanical Engineering Capstone",
        category: "hardware",
        tags: ["Mechanical Design", "Arduino", "Controls", "3D Printing", "Laser Cutting"],
        teaser: "Designed and prototyped an automated mechanism capable of replacing an empty toilet paper roll with a new roll in under five seconds.",
        thumbnail: "IMG_2349.jpg"
    },
    {
        id: "microchannel",
        title: "Microfluidic Channel Fabrication",
        subtitle: "MEMS & Cleanroom Manufacturing",
        category: "nanofab",
        tags: ["Photolithography", "MEMS", "Silicon Processing", "Cleanroom"],
        teaser: "Fabricated silicon, silicon dioxide, and glass microfluidic channels using cleanroom microfabrication processes and experimentally characterized channel performance.",
        thumbnail: "IMG_2205.jpg"
    },
    {
        id: "comsol-optimization",
        title: "COMSOL Door Hook Shape Optimization",
        subtitle: "ME 159 Final Project",
        category: "research",
        tags: ["COMSOL", "Shape Optimization", "Solid Mechanics", "PLA"],
        teaser: "Optimized a 3D-printed PLA door hook to increase stiffness and limit deflection under its original failure load.",
        thumbnail: "chart (9).jpg"
    },
    {
        id: "c-clamp-fea",
        title: "C-Clamp FEA &amp; Topology Optimization",
        subtitle: "ME 108 Project 2",
        category: "research",
        tags: ["FEA", "Topology Optimization", "SolidWorks", "Stress Analysis"],
        teaser: "Analyzed a 6-inch ductile iron C-clamp and explored mass reduction while preserving the original factor of safety.",
        thumbnail: "ME108 Project 2 - Written Report (1)_edited.jpg"
    },
    {
        id: "microfluidics",
        title: "Microfluidic Potential Modeling in Soft Nanochannels",
        subtitle: "UCSB Research Lab",
        category: "research",
        tags: ["MATLAB", "COMSOL", "Nanofluidics"],
        teaser: "Theoretical modeling and numerical simulations of soft nanochannels under various polyelectrolytes.",
        thumbnail: "PELpageimage.png"
    },
    {
        id: "mlacal",
        title: "MLA Calibration Design and Traveler",
        subtitle: "UCSB Nanofabrication Facility",
        category: "nanofab",
        tags: ["KLayout", "Python", "SEM"],
        teaser: "Redesigned an MLA calibration pattern and workflow to eliminate photoresist buildup and standardize SEM evaluation.",
        thumbnail: "MLAcalimage1.png"
    },
    {
        id: "nanofab",
        title: "Nanofabrication Machine Calibrations",
        subtitle: "Cleanroom Equipment Metrology",
        category: "nanofab",
        tags: ["ALD", "ICP-PECVD", "ASML DUV"],
        teaser: "Calibrated thin-film deposition (ALD, ICP-PECVD), fluorinated etching (FICP), and ASML DUV photolithography tools.",
        thumbnail: "nanofabimage1.jpg"
    },
    {
        id: "sitest",
        title: "Signal Integrity Test Fixture",
        subtitle: "Hardware Engineering",
        category: "hardware",
        tags: ["Creo Parametric", "TDR", "Sheet Metal"],
        teaser: "Designed a modular fixture holding Line and Fabric cards for easy TDR signal integrity testing.",
        thumbnail: null
    },
    {
        id: "thermalval",
        title: "High-Voltage Thermal Validation Fixture",
        subtitle: "Thermal Engineering",
        category: "hardware",
        tags: ["Creo Parametric", "Thermal Testing"],
        teaser: "Heat-resistant fixture designed to hold power and return feeders during high-voltage (>100 V) thermal testing.",
        thumbnail: null
    },
    {
        id: "shoeaging",
        title: "Automated Shoe Aging Testing Rig",
        subtitle: "Mechanical Design & Controls",
        category: "hardware",
        tags: ["SolidWorks", "Arduino", "Controls"],
        teaser: "Automated mechanical wear rig simulating thousands of steps to accelerate footwear dynamic impact testing.",
        thumbnail: "shoeagingimage1.jpg"
    },
    {
        id: "airmotor",
        title: "Pneumatic CNC Air Motor",
        subtitle: "UCSB Machining & Manufacturing",
        category: "manufacturing",
        tags: ["CNC Mill", "Manual Lathe"],
        teaser: "Precision-machined air motor produced using manual lathes, CNC mills, and shop tooling at UCSB.",
        thumbnail: "airmotorimage1.jpg"
    }
];

/* ---------- Skills Data ---------- */
const skillsData = [
    {
        category: "Mechanical Design",
        skills: ["GD&T", "Tolerance Analysis", "DFM & Tolerancing", "Sheet Metal Design"]
    },
    {
        category: "CAD",
        skills: ["Creo Parametric", "SolidWorks", "Fusion 360"]
    },
    {
        category: "Programming",
        skills: ["Python", "MATLAB", "LaTeX"]
    },
    {
        category: "Simulation",
        skills: ["COMSOL Multiphysics", "Fusion 360 FEA", "SolidWorks FEA", "KLayout"]
    },
    {
        category: "Electronics",
        skills: ["Arduino", "Soldering"]
    },
    {
        category: "Manufacturing",
        skills: ["Cleanroom Manufacturing & Metrology", "CMM", "SEM", "3D Printing", "Laser Cutting"]
    },
    {
        category: "Professional / Soft Skills",
        skills: ["Teamwork", "Time Management", "Adaptability", "Problem Solving", "Presenting & Articulation"]
    }
];

// Images are expected in the same folder as index.html.
// If you organize them into a subfolder (e.g. "images/"), update this path to match.
const IMAGE_BASE = "assets/images/";

/* ---------- Init on DOM Ready ---------- */
document.addEventListener("DOMContentLoaded", () => {
    renderProjectCards();
    renderSkills();
    initNavbar();
    initHamburger();
    initThemeToggle();
    initScrollProgress();
    initActiveNav();
    initSmoothScroll();
    initRevealAnimations();
    initBackToTop();
    initProjectFilter();
    initCounters();
    initProjectPager();
    initLightbox();
});

/* ---------- Render Project Cards ---------- */
const CATEGORY_LABELS = {
    research: "Research",
    nanofab: "Nanofabrication",
    hardware: "Hardware & Fixtures",
    manufacturing: "Manufacturing"
};

function renderProjectCards() {
    const gridContainer = document.getElementById("project-grid");
    if (!gridContainer) return;

    projectData.forEach((project, i) => {
        const card = document.createElement("a");
        card.className = "card";
        card.href = `projects/${project.id}.html`;
        card.style.setProperty("--i", i);
        card.dataset.category = project.category;

        const thumb = project.thumbnail ? IMAGE_BASE + encodeURI(project.thumbnail) : null;

        card.innerHTML = `
            <div class="card-image">
                ${thumb
                    ? `<img data-src="${thumb}" alt="${project.title}" loading="lazy">`
                    : `<div class="placeholder-icon">
                           <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                           <span>Images under NDA</span>
                       </div>`
                }
                <span class="card-category">${CATEGORY_LABELS[project.category] || project.category}</span>
            </div>
            <div class="card-body">
                <div class="subtitle">${project.subtitle}</div>
                <h3>${project.title}</h3>
                <p class="teaser">${project.teaser}</p>
                <div class="card-tags">
                    ${project.tags.map(t => `<span class="tech-tag">${t}</span>`).join("")}
                </div>
                <span class="card-link">View project <span aria-hidden="true">→</span></span>
            </div>
        `;

        gridContainer.appendChild(card);
    });

    lazyLoadImages();
}

/* ---------- Lazy Loading Images ---------- */
function lazyLoadImages() {
    const imgs = document.querySelectorAll("img[data-src]");
    if (!("IntersectionObserver" in window)) {
        imgs.forEach(img => {
            img.src = img.dataset.src;
            img.classList.add("loaded");
        });
        return;
    }
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.onload = () => img.classList.add("loaded");
                img.onerror = () => { img.style.display = "none"; };
                obs.unobserve(img);
            }
        });
    }, { rootMargin: "100px" });
    imgs.forEach(img => observer.observe(img));
}

/* ---------- Render Skills ---------- */
function renderSkills() {
    const grid = document.getElementById("skills-grid");
    if (!grid) return;

    skillsData.forEach((cat, i) => {
        const block = document.createElement("div");
        block.className = "skill-category";
        block.style.setProperty("--i", i);
        block.innerHTML = `
            <h3>${cat.category}</h3>
            <div class="skill-pill-list">
                ${cat.skills.map(s => `<span class="skill-pill">${s}</span>`).join("")}
            </div>
        `;
        grid.appendChild(block);
    });
}

/* ---------- Navbar scroll shadow ---------- */
function initNavbar() {
    const navbar = document.getElementById("navbar");
    if (!navbar) return;
    const onScroll = () => {
        navbar.classList.toggle("scrolled", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
}

/* ---------- Hamburger Menu ---------- */
function initHamburger() {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");
    if (!hamburger || !navLinks) return;

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("open");
        navLinks.classList.toggle("open");
    });

    navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            hamburger.classList.remove("open");
            navLinks.classList.remove("open");
        });
    });
}

/* ---------- Dark / Light Theme Toggle ---------- */
function initThemeToggle() {
    const toggle = document.getElementById("theme-toggle");
    const root = document.documentElement;
    const stored = localStorage.getItem("portfolio-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    const initial = stored || (prefersDark ? "dark" : "light");
    root.setAttribute("data-theme", initial);

    if (!toggle) return;
    toggle.addEventListener("click", () => {
        const current = root.getAttribute("data-theme");
        const next = current === "dark" ? "light" : "dark";
        root.setAttribute("data-theme", next);
        localStorage.setItem("portfolio-theme", next);
    });
}

/* ---------- Scroll Progress Bar ---------- */
function initScrollProgress() {
    const bar = document.getElementById("scroll-progress");
    if (!bar) return;
    const onScroll = () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        bar.style.width = pct + "%";
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
}

/* ---------- Active Nav Highlighting ---------- */
function initActiveNav() {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link");
    if (!sections.length || !navLinks.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute("id");
                navLinks.forEach(link => {
                    link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
                });
            }
        });
    }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });

    sections.forEach(sec => observer.observe(sec));
}

/* ---------- Smooth Scrolling ---------- */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            const targetId = this.getAttribute("href");
            if (targetId.length <= 1) return;
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        });
    });
}

/* ---------- Reveal on Scroll ---------- */
function initRevealAnimations() {
    const revealEls = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
        revealEls.forEach(el => el.classList.add("in-view"));
        return;
    }
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("in-view");
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });
    revealEls.forEach(el => observer.observe(el));
}

/* ---------- Back to Top ---------- */
function initBackToTop() {
    const btn = document.getElementById("back-to-top");
    if (!btn) return;
    btn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

/* ---------- Project Filtering ---------- */
function initProjectFilter() {
    const filterBar = document.getElementById("filter-bar");
    if (!filterBar) return;

    filterBar.addEventListener("click", (e) => {
        const btn = e.target.closest(".filter-btn");
        if (!btn) return;

        filterBar.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const filter = btn.dataset.filter;
        document.querySelectorAll("#project-grid .card").forEach(card => {
            const show = filter === "all" || card.dataset.category === filter;
            card.classList.toggle("hidden", !show);
        });
    });
}

/* ---------- Project Page: Previous / Next ---------- */
function initProjectPager() {
    const pager = document.getElementById("project-pager");
    const currentId = document.body.dataset.project;
    if (!pager || !currentId) return;

    const idx = projectData.findIndex(p => p.id === currentId);
    if (idx === -1) return;

    const prev = projectData[(idx - 1 + projectData.length) % projectData.length];
    const next = projectData[(idx + 1) % projectData.length];

    pager.innerHTML = `
        <a href="${prev.id}.html" class="pager-link prev">
            <span class="pager-label">← Previous</span>
            <span class="pager-title">${prev.title}</span>
        </a>
        <a href="${next.id}.html" class="pager-link next">
            <span class="pager-label">Next →</span>
            <span class="pager-title">${next.title}</span>
        </a>
    `;
}

/* ---------- Project Page: Image Lightbox ---------- */
function initLightbox() {
    const images = document.querySelectorAll(".project-gallery img");
    if (!images.length) return;

    const box = document.createElement("div");
    box.className = "lightbox";
    box.innerHTML = `
        <button class="lightbox-close" aria-label="Close">&times;</button>
        <img alt="">
    `;
    document.body.appendChild(box);
    const boxImg = box.querySelector("img");

    const close = () => {
        box.classList.remove("open");
        document.body.style.overflow = "";
    };

    images.forEach(img => {
        img.addEventListener("click", () => {
            boxImg.src = img.src;
            boxImg.alt = img.alt;
            box.classList.add("open");
            document.body.style.overflow = "hidden";
        });
    });

    box.addEventListener("click", (e) => {
        if (e.target !== boxImg) close();
    });
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && box.classList.contains("open")) close();
    });
}

/* ---------- Animated Counters ---------- */
function initCounters() {
    const counters = document.querySelectorAll(".stat-num");
    if (!counters.length) return;

    const animate = (el) => {
        const target = parseInt(el.dataset.count, 10);
        const duration = 1200;
        const start = performance.now();

        function frame(now) {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = Math.floor(eased * target);
            if (progress < 1) {
                requestAnimationFrame(frame);
            } else {
                el.textContent = target;
            }
        }
        requestAnimationFrame(frame);
    };

    if (!("IntersectionObserver" in window)) {
        counters.forEach(animate);
        return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animate(entry.target);
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(c => observer.observe(c));
}