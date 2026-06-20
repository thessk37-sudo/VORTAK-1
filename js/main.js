const products = [
    {
        name: 'Carbon Black',
        shortLabel: 'Reinforcing Filler',
        category: 'Filler',
        images: ['Images/Carbonn black/Carbonn black.jpeg'],
        description: 'Highly reinforcing carbon filler that improves tensile behavior, wear resistance, color depth, and weather performance for industrial compounds.',
        specs: ['UV stability', 'High reinforcement', 'Process-ready black tone'],
        applications: 'Tyres, belts, molded rubber, technical plastics',
        benefits: 'Improves durability and structural consistency in loaded formulations.',
        note: 'Suitable for buyers looking for strong filler presence and commercial-grade consistency.'
    },
    {
        name: 'LD (Low-Density Plastic)',
        shortLabel: 'Flexible Polymer',
        category: 'Polymer',
        images: ['Images/Ld/Ld.jpeg'],
        description: 'Flexible recycled LD material for film, extrusion, and packaging-oriented applications where softness and moisture resistance matter.',
        specs: ['High elongation', 'Moisture barrier', 'Flexible handling'],
        applications: 'Packaging sheets, tubes, agricultural film',
        benefits: 'Supports lightweight fabrication with practical chemical resistance.',
        note: 'Good fit for buyers prioritizing pliability and process ease.'
    },
    {
        name: 'PVB Region (Polyvinyl Butyral)',
        shortLabel: 'Specialty Resin',
        category: 'Specialty',
        images: ['Images/Pvb region/Pvb region.jpeg'],
        description: 'PVB resin and scrap material valued for adhesion, toughness, and optical behavior in laminated and binder-driven industrial use cases.',
        specs: ['High adhesion', 'Impact absorption', 'Optical clarity'],
        applications: 'Safety glass interlayers, inks, coatings, sealers',
        benefits: 'Combines bonding strength with practical acoustic and impact support.',
        note: 'Positioned for clients evaluating performance beyond standard commodity polymers.'
    },
    {
        name: 'PVB Roll (Film Sheets)',
        shortLabel: 'Recovered Film Roll',
        category: 'Recycled',
        images: ['Images/Pvb roll/Pvb roll 1.jpeg', 'Images/Pvb roll/Pvb roll 2.jpeg'],
        description: 'Recovered PVB film rolls from laminated glass streams, curated for reuse in sound, adhesive, and backing-sheet applications.',
        specs: ['Elastic recovery', 'Reusable sheet form', 'Circular sourcing'],
        applications: 'Adhesives, carpets, barriers, solar backsheet reuse',
        benefits: 'Cost-aware recycled option with strong reuse potential.',
        note: 'Multiple gallery images included to show actual roll condition and texture.'
    },
    {
        name: 'Rubber Compound',
        shortLabel: 'Custom Elastomer Blend',
        category: 'Elastomer',
        images: [
            'Images/Rubber compound/Rubber compound 1.jpeg',
            'Images/Rubber compound/Rubber compound 2.jpeg',
            'Images/Rubber compound/Rubber compound 3.jpeg'
        ],
        description: 'Custom masterbatches and reprocessed rubber compound options aligned around hardness, tensile behavior, weather tolerance, and end-use flexibility.',
        specs: ['Custom hardness', 'Weather resistance', 'Reprocessed options'],
        applications: 'Gaskets, engine mounts, seals, anti-vibration parts',
        benefits: 'Tailored compound presentation for varied industrial requirements.',
        note: 'Three actual gallery images are wired in to highlight real material variation.'
    },
    {
        name: 'TPU (Thermoplastic Polyurethane)',
        shortLabel: 'Premium Thermoplastic',
        category: 'Premium',
        images: ['Images/Tpu/Tpu.jpeg'],
        description: 'Thermoplastic polyurethane material that blends elasticity with abrasion resistance and processing convenience across premium fabricated parts.',
        specs: ['Abrasion resistance', 'Elastic memory', 'Grease resistance'],
        applications: 'Footwear, cables, covers, automotive components',
        benefits: 'Suitable where surface toughness and flexible recovery are both critical.',
        note: 'Premium-grade positioning with a clean single-image presentation.'
    },
    {
        name: 'ABS Lumps',
        shortLabel: 'Tough Recyclable Polymer',
        category: 'Polymer',
        images: ['Images/Abs Lumps/abs Lumps.jpeg'],
        description: 'Post-industrial ABS lumps sourced from clean manufacturing purges. Retains original material properties like high impact resistance, rigidity, and dimensional stability, making it excellent feedstock for compounding and regrinding.',
        specs: ['High Impact Strength', 'Excellent Rigidity', 'Post-Industrial Cleanliness'],
        applications: 'Shredding & pelletizing, automotive interior components, electronics enclosures, household consumer plastics',
        benefits: 'Provides a highly cost-effective alternative to virgin ABS resins while supporting circular manufacturing workflows.',
        note: 'Direct post-industrial sourcing ensures minimal contamination and reliable reprocessing behavior.'
    }
];

function createProductCard(product, index) {
    const card = document.createElement('article');
    card.className = 'product-card reveal spotlight-card';
    card.innerHTML = `
        <div class="product-gallery">
            <div class="product-media">
                <img src="${product.images[0]}" alt="${product.name}" class="main-product-image">
                <div class="product-overlay">
                    <span class="product-badge">${product.category}</span>
                    <span class="gallery-count">${product.images.length} image${product.images.length > 1 ? 's' : ''}</span>
                </div>
            </div>
            <div class="thumb-row">
                ${product.images.map((image, imageIndex) => `
                    <button type="button" class="${imageIndex === 0 ? 'active' : ''}" data-image="${image}">
                        <img src="${image}" alt="${product.name} thumbnail ${imageIndex + 1}">
                    </button>
                `).join('')}
            </div>
        </div>
        <div class="product-details">
            <div class="product-head">
                <div>
                    <h3>${product.name}</h3>
                    <p>${product.shortLabel}</p>
                </div>
                <div class="detail-tag-row">
                    <span class="detail-tag">Product 0${index + 1}</span>
                </div>
            </div>
            <p class="product-desc">${product.description}</p>
            <div class="spec-chip-row">
                ${product.specs.map(spec => `<span class="spec-chip">${spec}</span>`).join('')}
            </div>
            <div class="product-columns">
                <div class="detail-box">
                    <span>Applications</span>
                    <p>${product.applications}</p>
                </div>
                <div class="detail-box">
                    <span>Why It Matters</span>
                    <p>${product.benefits}</p>
                </div>
            </div>
            <div class="product-note">${product.note}</div>
            <a href="https://wa.me/919571122602" target="_blank" rel="noopener" class="btn btn-outline btn-sm">Talk About Availability</a>
        </div>
    `;

    const mainImage = card.querySelector('.main-product-image');
    const thumbButtons = card.querySelectorAll('.thumb-row button');
    thumbButtons.forEach(button => {
        button.addEventListener('click', () => {
            thumbButtons.forEach(item => item.classList.remove('active'));
            button.classList.add('active');
            mainImage.src = button.dataset.image;
        });
    });

    return card;
}

document.addEventListener('DOMContentLoaded', () => {
    const mobileToggle = document.querySelector('.mobile-nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbar = document.querySelector('.navbar');
    const sections = document.querySelectorAll('section[id]');
    const productsGrid = document.querySelector('#productsGrid');
    const portfolioRail = document.querySelector('#portfolioRail');
    const revealItems = document.querySelectorAll('.reveal');

    if (productsGrid) {
        products.forEach((product, index) => productsGrid.appendChild(createProductCard(product, index)));
    }

    if (portfolioRail) {
        products.forEach(product => {
            const pill = document.createElement('span');
            pill.className = 'portfolio-pill';
            pill.textContent = `${product.name} / ${product.images.length} visual`;
            portfolioRail.appendChild(pill);
        });
    }

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            mobileToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.classList.toggle('no-scroll');
        });

        const menuLinks = navMenu.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.classList.remove('no-scroll');
            });
        });
    }

    const onScroll = () => {
        if (navbar) {
            navbar.classList.toggle('scrolled', window.scrollY > 40);
        }

        let current = '';
        sections.forEach(section => {
            if (window.scrollY >= section.offsetTop - 220) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
        });
    };

    window.addEventListener('scroll', onScroll);
    onScroll();

    revealItems.forEach(item => item.classList.add('reveal-ready'));

    const spotlightCards = document.querySelectorAll('.spotlight-card');
    spotlightCards.forEach(card => {
        card.addEventListener('mousemove', event => {
            const rect = card.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });

    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);



        gsap.to('.orbit-one', {
            rotation: 360,
            duration: 26,
            ease: 'none',
            repeat: -1
        });

        gsap.to('.orbit-two', {
            rotation: -360,
            duration: 34,
            ease: 'none',
            repeat: -1
        });

        const heroWrapper = document.querySelector('.hero-card-wrapper');
        if (heroWrapper) {
            gsap.to(heroWrapper, {
                y: -10,
                duration: 2.4,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut'
            });
        }
    } else {
        revealItems.forEach(item => {
            item.style.opacity = '1';
            item.style.transform = 'none';
        });
    }
});
