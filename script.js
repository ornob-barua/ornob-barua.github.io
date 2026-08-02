/* ==========================================================================
   Ornob Barua — Engineering Portfolio
   ========================================================================== */

/* ---------- Project Data ---------- */
// category options: "research" | "nanofab" | "hardware" | "manufacturing"
const projectData = [
    {
        id: "microfluidics",
        title: "Polyelectrolyte Nanochannel Theoretical Simulations",
        subtitle: "UCSB Research Lab",
        category: "research",
        tags: ["MATLAB", "COMSOL", "Nanofluidics"],
        teaser: "Theoretical modeling and numerical simulations of soft nanochannels under various polyelectrolytes.",
        content: `
            <p>Referenced theoretical research papers regarding soft nanochannels and boundary conditions within soft nanochannels to generate potential and velocity graphs with different polyelectrolytes.</p>
            <h4>Next Steps & Ongoing Goals:</h4>
            <ul>
                <li>Create simulations for soft nanochannel with alginate.</li>
                <li>Create simulations in COMSOL Multiphysics to validate theoretical data.</li>
                <li>Fabricate nanochannels in the UCSB Nanofab facility and perform current monitoring experiments to correlate theoretical models with empirical data.</li>
                <li>Publish research findings.</li>
            </ul>
        `,
        images: ["PELpageimage.png"],
        links: {}
    },
    {
        id: "mlacal",
        title: "MLA Calibration Design and Traveler",
        subtitle: "UCSB Nanofabrication Facility",
        category: "nanofab",
        tags: ["KLayout", "Python", "SEM"],
        teaser: "Redesigned an MLA calibration pattern and workflow to eliminate photoresist buildup and standardize SEM evaluation.",
        content: `
            <p>Redesigned an MLA calibration pattern and workflow to eliminate photoresist buildup, improve SEM readability, and standardize calibration without subjective judgment calls.</p>
            <h4>Problem Statement:</h4>
            <p>The existing MLA calibration design was difficult to interpret at smaller feature sizes. Under optical microscopy, key features were hard to resolve, and stitching artifacts from the exposure process were present. Photoresist (PR) behavior introduced inconsistencies that made calibration unreliable.</p>
            <h4>Analysis & Design Solution:</h4>
            <ul>
                <li><strong>Microscopy Analysis:</strong> Identified feature definition degradation and suspected fabrication failure modes at thinner bar dimensions.</li>
                <li><strong>SEM Verification:</strong> Confirmed photoresist residue accumulating between horizontal/vertical bars as the root cause of measurement ambiguity.</li>
                <li><strong>KLayout Pattern Generation:</strong> Used Python scripts in KLayout to build a modular pattern of horizontal and vertical bars optimized for quantitative SEM evaluation.</li>
                <li><strong>Parametric Flexibility:</strong> The Python-driven workflow allows instant modifications to feature spacing without rebuilds.</li>
            </ul>
        `,
        images: ["MLAcalimage1.png", "MLAcalimage2.jpg", "MLAcalimage3.png", "mlacalimage4.jpg", "mlacalimage5.jpg", "mlacalimage6.jpg"],
        links: {}
    },
    {
        id: "nanofab",
        title: "Nanofabrication Machine Calibrations",
        subtitle: "Cleanroom Equipment Metrology",
        category: "nanofab",
        tags: ["ALD", "ICP-PECVD", "ASML DUV"],
        teaser: "Calibrated thin-film deposition (ALD, ICP-PECVD), fluorinated etching (FICP), and ASML DUV photolithography tools.",
        content: `
            <h4>ALD Calibration (Oxford Atomic Layer Deposition):</h4>
            <p>Calibrated ALD deposition processes for Al₂O₃ and SiO₂ thin films by correlating cycle count with measured thickness using ellipsometry.</p>

            <h4>Unaxis ICP-PECVD Calibration:</h4>
            <p>Executed calibration runs for thin-film depositions of HDR SiO₂, LDR SiO₂, SiN, and Low Stress SiN. Measured pre/post particle counts, film stress, and thickness using Tencor Flexus, Filmetrics F50, and KLA Surfscan.</p>

            <h4>FICP Etch Calibration (Fluorine ICP Etcher):</h4>
            <p>Etched Si and SiO₂ patterns, measuring post-etch depth via step profilometer and analyzing sidewall profiles under SEM to maintain precise etch rates.</p>

            <h4>ASML DUV Photolithography Calibration:</h4>
            <p>Spun, baked, exposed, and developed test wafers. Used SEM metrology to inspect feature pitch and pillar width across wafer regions to ensure smooth operation for cleanroom users.</p>
        `,
        images: ["nanofabimage1.jpg", "nanofabimage2.jpg", "nanofabimage3.jpg", "nanofabimage4.png", "nanofabimage5.png"],
        links: {}
    },
    {
        id: "sitest",
        title: "Signal Integrity Test Fixture",
        subtitle: "Hardware Engineering",
        category: "hardware",
        tags: ["Creo Parametric", "TDR", "Sheet Metal"],
        teaser: "Designed a modular fixture holding Line and Fabric cards for easy TDR signal integrity testing.",
        content: `
            <h4>Objective:</h4>
            <p>Create a fixture to secure two different Line/Fabric Cards for seamless signal integrity testing using Time-Domain Reflectometry (TDR).</p>
            <h4>Key Features & Engineering Contribution:</h4>
            <ul>
                <li><strong>Elevated Structure:</strong> Designed a mini table capable of supporting heavy Line and Fabric card loads.</li>
                <li><strong>Precision Mounts:</strong> Implemented brackets with press-fit alignment pins for quick card seating.</li>
                <li><strong>Sliding PCB Mount:</strong> Integrated a bottom sliding mechanism for unrestricted access to all test connectors.</li>
                <li><strong>Modular Architecture:</strong> Designed for debugging larger systems spanning multiple test fixtures.</li>
                <li><strong>ESD Protection:</strong> 3D printed an ESD-safe handle for secure gripping during connector debugging.</li>
                <li><strong>CAD & Drawings:</strong> Modeled components in Creo Parametric using Skeleton Modeling and sheet metal best practices; generated engineering drawings for manufacturing quotes.</li>
            </ul>
            <p><em>Note: Images omitted due to non-disclosure agreement (NDA).</em></p>
        `,
        images: [],
        links: {}
    },
    {
        id: "thermalval",
        title: "Thermal Validation Test Fixture",
        subtitle: "Thermal Engineering",
        category: "hardware",
        tags: ["Creo Parametric", "Thermal Testing"],
        teaser: "Heat-resistant fixture designed to hold power and return feeders during high-voltage (>100 V) thermal testing.",
        content: `
            <h4>Objective:</h4>
            <p>Construct a heat-resistant fixture securing power and return feeders to validate system thermal behavior while delivering over 100 V.</p>
            <h4>Design Execution:</h4>
            <ul>
                <li><strong>Busbar Shorting:</strong> Designed modified copper shorting blocks for power/return feeders.</li>
                <li><strong>Structural Wooden Frame:</strong> Built custom-sized 2x4 framing to replicate physical spacing in actual production systems.</li>
                <li><strong>Precision Isolation:</strong> Engineered a 3D-printed plastic divider ensuring a constant 4 mm gap between feeders.</li>
                <li><strong>Creo Parametric CAD:</strong> Completed full assembly models and detailed manufacturing drawings.</li>
            </ul>
            <p><em>Note: Images omitted due to non-disclosure agreement (NDA).</em></p>
        `,
        images: [],
        links: {}
    },
    {
        id: "shoeaging",
        title: "Automated Shoe Aging Testing Rig",
        subtitle: "Mechanical Design & Controls",
        category: "hardware",
        tags: ["SolidWorks", "Arduino", "Controls"],
        teaser: "Automated mechanical wear rig simulating thousands of steps to accelerate footwear dynamic impact testing.",
        content: `
            <h4>System Architecture & Dynamic Mechanics:</h4>
            <p>Designed a mechanical test rig using a concrete-coated spinning shaft and a weighted boom arm to replicate the dynamic skidding forces experienced during foot strikes.</p>
            <h4>Key Subsystems:</h4>
            <ul>
                <li><strong>Chassis & Motor Mount:</strong> Modeled a custom bracket in SolidWorks, manufactured it in a machine shop, and bolted an induction motor to a leveled wooden chassis with shaft couplers.</li>
                <li><strong>Sensing & Automation:</strong> Integrated a magnetic reed switch on the shaft to count rotation steps.</li>
                <li><strong>Control Housing & Safety:</strong> Custom electrical enclosure holding display screen and motor controllers with an automated relay kill switch if motion stops for &gt;5 seconds.</li>
            </ul>
        `,
        images: ["shoeagingimage1.jpg", "shoeagingimage2.jpg", "shoeagingimage3.jpg", "shoeagingimage4.jpg", "shoeagingimage5.jpg"],
        links: {}
    },
    {
        id: "airmotor",
        title: "Pneumatic CNC Air Motor",
        subtitle: "UCSB Machining & Manufacturing",
        category: "manufacturing",
        tags: ["CNC Mill", "Manual Lathe"],
        teaser: "Precision-machined air motor produced using manual lathes, CNC mills, and shop tooling at UCSB.",
        content: `
            <p>Precision-machined a complete pneumatic air motor in the UCSB Machine Shop based on technical engineering drawings.</p>
            <h4>Manufacturing Processes:</h4>
            <ul>
                <li>Machined tight-tolerance cylindrical components on manual lathes and CNC mills.</li>
                <li>Utilized drill presses, band saws, hand taps, and reamers for fine component finishing.</li>
                <li>Assembled and bench-tested motor performance under low and high RPM pneumatic supply conditions.</li>
            </ul>
        `,
        images: ["airmotorimage1.jpg", "airmotorimage2.jpg"],
        links: {}
    }
];

/* ---------- Skills Data ---------- */
const skillsData = [
    {
        category: "Mechanical Design",
        skills: ["GD&T", "DFM & Tolerancing", "Sheet Metal Design"]
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
        skills: ["COMSOL Multiphysics", "KLayout"]
    },
    {
        category: "Electronics",
        skills: ["Arduino", "Soldering"]
    },
    {
        category: "Manufacturing",
        skills: ["Cleanroom Manufacturing & Metrology", "SEM", "3D Printing", "Laser Cutting"]
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
    initModal();
    initContactForm();
    initCounters();
});

/* ---------- Render Project Cards ---------- */
function renderProjectCards() {
    const gridContainer = document.getElementById("project-grid");
    if (!gridContainer) return;

    projectData.forEach((project, i) => {
        const card = document.createElement("div");
        card.className = "card";
        card.style.setProperty("--i", i);
        card.dataset.category = project.category;

        const hasImage = project.images && project.images.length > 0;
        const firstImage = hasImage ? IMAGE_BASE + project.images[0] : null;

        card.innerHTML = `
            <div class="card-image">
                ${firstImage ? `<img data-src="${firstImage}" alt="${project.title}" loading="lazy">` : ""}
                <div class="placeholder-icon">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>
                    <span>${hasImage ? "" : "Images under NDA"}</span>
                </div>
            </div>
            <div class="card-body">
                <div class="subtitle">${project.subtitle}</div>
                <h3>${project.title}</h3>
                <p class="teaser">${project.teaser}</p>
                <div class="card-tags">
                    ${project.tags.map(t => `<span class="tech-tag">${t}</span>`).join("")}
                </div>
                <div class="card-actions">
                    <button class="btn-card primary view-details-btn">View Details</button>
                    ${project.links.github ? `<a href="${project.links.github}" target="_blank" rel="noopener" class="btn-card">GitHub</a>` : ""}
                    ${project.links.demo ? `<a href="${project.links.demo}" target="_blank" rel="noopener" class="btn-card">Live Demo</a>` : ""}
                </div>
            </div>
        `;

        card.querySelector(".view-details-btn").addEventListener("click", () => openModal(project));
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

/* ---------- Modal ---------- */
function initModal() {
    const modal = document.getElementById("project-modal");
    const closeBtn = document.querySelector(".close-btn");
    if (!modal || !closeBtn) return;

    closeBtn.addEventListener("click", closeModal);
    modal.addEventListener("click", (e) => {
        if (e.target === modal) closeModal();
    });
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modal.classList.contains("open")) closeModal();
    });
}

function openModal(project) {
    const modal = document.getElementById("project-modal");
    document.getElementById("modal-title").innerText = project.title;
    document.getElementById("modal-subtitle").innerText = project.subtitle;
    document.getElementById("modal-description").innerHTML = project.content;

    const imageContainer = document.getElementById("modal-images");
    imageContainer.innerHTML = "";

    if (project.images && project.images.length > 0) {
        project.images.forEach(imgFile => {
            const img = document.createElement("img");
            img.src = IMAGE_BASE + imgFile;
            img.alt = `${project.title} image`;
            img.loading = "lazy";
            img.onerror = function () {
                this.style.display = "none";
            };
            imageContainer.appendChild(img);
        });
    }

    modal.classList.add("open");
    document.body.style.overflow = "hidden";
}

function closeModal() {
    const modal = document.getElementById("project-modal");
    modal.classList.remove("open");
    document.body.style.overflow = "";
}

/* ---------- Contact Form Validation ---------- */
function initContactForm() {
    const form = document.getElementById("contact-form");
    if (!form) return;

    const fields = {
        name: { input: document.getElementById("cf-name"), group: document.getElementById("group-name"), error: document.getElementById("err-name") },
        email: { input: document.getElementById("cf-email"), group: document.getElementById("group-email"), error: document.getElementById("err-email") },
        message: { input: document.getElementById("cf-message"), group: document.getElementById("group-message"), error: document.getElementById("err-message") }
    };
    const statusEl = document.getElementById("form-status");

    function validate() {
        let valid = true;

        if (!fields.name.input.value.trim()) {
            setError(fields.name, "Please enter your name.");
            valid = false;
        } else {
            clearError(fields.name);
        }

        const emailVal = fields.email.input.value.trim();
        const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailVal) {
            setError(fields.email, "Please enter your email.");
            valid = false;
        } else if (!emailRe.test(emailVal)) {
            setError(fields.email, "Please enter a valid email address.");
            valid = false;
        } else {
            clearError(fields.email);
        }

        if (!fields.message.input.value.trim() || fields.message.input.value.trim().length < 10) {
            setError(fields.message, "Message should be at least 10 characters.");
            valid = false;
        } else {
            clearError(fields.message);
        }

        return valid;
    }

    function setError(field, msg) {
        field.group.classList.add("error");
        field.error.textContent = msg;
    }
    function clearError(field) {
        field.group.classList.remove("error");
        field.error.textContent = "";
    }

    Object.values(fields).forEach(f => {
        f.input.addEventListener("blur", validate);
        f.input.addEventListener("input", () => clearError(f));
    });

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        statusEl.classList.remove("show", "success", "error");

        if (!validate()) {
            statusEl.textContent = "Please fix the errors above before sending.";
            statusEl.classList.add("show", "error");
            return;
        }

        // NOTE: No backend is wired up yet. Connect this to a service like
        // Formspree, EmailJS, or a custom endpoint to actually send messages.
        statusEl.textContent = "Message ready to send — connect a form backend (e.g. Formspree) to deliver it.";
        statusEl.classList.add("show", "success");
        form.reset();
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