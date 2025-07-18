// Hamburger menu toggle for responsive navbar
window.addEventListener('DOMContentLoaded', function() {
  const btn = document.getElementById('menu-btn');
  const menu = document.getElementById('mobile-menu');
  if (btn && menu) {
    btn.addEventListener('click', function() {
      menu.classList.toggle('hidden');
    });
  }
});


// Hero Carousel Section
// Data for hero carousel slides
const heroSlides = [
  {
    image: 'images/p (1).jpg',
    headline: 'Fresh Produce Delivered to Your Door',
    subheadline: 'Order the freshest fruits and vegetables from TengaWega Online.',
    cta: 'Shop Fresh Produce',
    ctaLink: '#fresh-produce'
  },
  {
    image: 'images/p (3).jpg',
    headline: 'Electronic Components & Appliances',
    subheadline: 'Find quality electronics and appliances for your needs.',
    cta: 'Browse Electronics',
    ctaLink: '#electronics'
  },
  {
    image: 'images/p (6).jpg',
    headline: 'Distribution Services via TengaWega Drivers',
    subheadline: 'Fast and reliable delivery by our trusted drivers.',
    cta: 'Learn About Delivery',
    ctaLink: '#delivery'
  },
];

let currentSlide = 0;
let slideInterval;

// Render the current hero slide
function renderHeroSlide(index) {
  const slide = heroSlides[index];
  const carousel = document.getElementById('hero-carousel');
  carousel.innerHTML = `
    <div class="absolute inset-0 w-full h-full flex items-center justify-center">
      <img src="${slide.image}" alt="${slide.headline}" class="object-cover w-full h-full rounded-lg border-4 border-white shadow-lg" style="max-height:100%; max-width:100%;" />
      <div class="absolute inset-0 bg-black bg-opacity-20 flex flex-col justify-center items-center text-center px-4">
        <h1 class="text-2xl md:text-4xl font-bold text-white mb-2 drop-shadow">${slide.headline}</h1>
        <p class="text-lg md:text-xl text-white mb-6 drop-shadow">${slide.subheadline}</p>
        <a href="${slide.ctaLink}" class="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded shadow transition">${slide.cta}</a>
      </div>
    </div>
  `;
}

// Render carousel indicators (dots)
function renderIndicators() {
  const indicators = document.getElementById('carousel-indicators');
  indicators.innerHTML = heroSlides.map((_, i) =>
    `<button class="w-3 h-3 rounded-full ${i === currentSlide ? 'bg-green-600' : 'bg-gray-300'} focus:outline-none" data-index="${i}"></button>`
  ).join('');
}

// Go to a specific slide
function goToSlide(index) {
  currentSlide = (index + heroSlides.length) % heroSlides.length;
  renderHeroSlide(currentSlide);
  renderIndicators();
}

// Go to next/previous slide
function nextSlide() {
  goToSlide(currentSlide + 1);
}

function prevSlide() {
  goToSlide(currentSlide - 1);
}

// Start/stop the automatic slideshow
function startSlideShow() {
  slideInterval = setInterval(nextSlide, 5000);
}

function stopSlideShow() {
  clearInterval(slideInterval);
}


// Data for farm products
const farmProducts = [
  // Leafy Greens
  {
    name: 'Organic Spinach',
    image: 'images/p (6).jpg',
    price: '$1.50 / bunch',
    location: 'Kisumu, Kenya',
    description: 'Fresh organic spinach, rich in vitamins and minerals.',
    category: 'Leafy Greens',
    stock: 80,
    seller: 'Sunrise Organics',
    tags: ['organic', 'leafy', 'vitamins']
  },
  {
    name: 'Lettuce',
    image: 'images/p (6).jpg',
    price: '$1.30 / head',
    location: 'Kakamega, Kenya',
    description: 'Crisp lettuce, perfect for salads and sandwiches.',
    category: 'Leafy Greens',
    stock: 100,
    seller: 'Leafy Greens',
    tags: ['crisp', 'green', 'fresh']
  },
  {
    name: 'Cabbage',
    image: 'images/p (6).jpg',
    price: '$1.00 / head',
    location: 'Thika, Kenya',
    description: 'Large, crisp cabbages, perfect for coleslaw and cooking.',
    category: 'Leafy Greens',
    stock: 110,
    seller: 'Leafy Greens',
    tags: ['crisp', 'large', 'fiber']
  },
  {
    name: 'Kale',
    image: 'images/p (1).jpg',
    price: '$1.20 / bunch',
    location: 'Nairobi, Kenya',
    description: 'Nutritious kale, great for smoothies and salads.',
    category: 'Leafy Greens',
    stock: 90,
    seller: 'Green Valley Farms',
    tags: ['leafy', 'nutritious', 'vitamin K']
  },
  // Root Vegetables
  {
    name: 'Carrots',
    image: 'images/far.jpg',
    price: '$0.99 / kg',
    location: 'Nakuru, Kenya',
    description: 'Sweet and crunchy carrots, perfect for snacking.',
    category: 'Root Vegetables',
    stock: 150,
    seller: 'Rooty Farms',
    tags: ['crunchy', 'orange', 'vitamin A']
  },
  {
    name: 'Potatoes',
    image: 'images/d.jpg',
    price: '$1.10 / kg',
    location: 'Naivasha, Kenya',
    description: 'Versatile potatoes, ideal for boiling, frying, or baking.',
    category: 'Root Vegetables',
    stock: 300,
    seller: 'Tuber Traders',
    tags: ['versatile', 'staple', 'local']
  },
  {
    name: 'Red Onions',
    image: 'images/p (3).jpg',
    price: '$1.20 / kg',
    location: 'Eldoret, Kenya',
    description: 'Crisp red onions, great for salads and cooking.',
    category: 'Root Vegetables',
    stock: 200,
    seller: 'Onion Bros',
    tags: ['fresh', 'spicy', 'local']
  },
  {
    name: 'Sweet Potatoes',
    image: 'images/d.jpg',
    price: '$1.40 / kg',
    location: 'Machakos, Kenya',
    description: 'Delicious sweet potatoes, perfect for roasting and baking.',
    category: 'Root Vegetables',
    stock: 120,
    seller: 'Sweet Roots',
    tags: ['sweet', 'orange', 'fiber']
  },
  // Legumes
  {
    name: 'Green Peas',
    image: 'images/p (1).jpg',
    price: '$2.00 / kg',
    location: 'Kitale, Kenya',
    description: 'Fresh green peas, great for soups and stews.',
    category: 'Legumes',
    stock: 80,
    seller: 'Legume Land',
    tags: ['fresh', 'green', 'protein']
  },
  {
    name: 'Beans',
    image: 'images/p (3).jpg',
    price: '$1.80 / kg',
    location: 'Meru, Kenya',
    description: 'Nutritious beans, a staple in many dishes.',
    category: 'Legumes',
    stock: 140,
    seller: 'Bean Bros',
    tags: ['protein', 'fiber', 'staple']
  },
  {
    name: 'Lentils',
    image: 'images/p (6).jpg',
    price: '$2.20 / kg',
    location: 'Bungoma, Kenya',
    description: 'Healthy lentils, perfect for soups and curries.',
    category: 'Legumes',
    stock: 60,
    seller: 'Pulse Farms',
    tags: ['protein', 'fiber', 'iron']
  },
  {
    name: 'Chickpeas',
    image: 'images/far.jpg',
    price: '$2.50 / kg',
    location: 'Nairobi, Kenya',
    description: 'Versatile chickpeas, great for hummus and salads.',
    category: 'Legumes',
    stock: 100,
    seller: 'Pulse Farms',
    tags: ['protein', 'fiber', 'vegan']
  },
  // Fruit Vegetables
  {
    name: 'Fresh Tomatoes',
    image: 'images/p (1).jpg',
    price: '$2.99 / kg',
    location: 'Nairobi, Kenya',
    description: 'Juicy, ripe tomatoes perfect for salads and cooking.',
    category: 'Fruit Vegetables',
    stock: 120,
    seller: 'Green Valley Farms',
    tags: ['organic', 'fresh', 'local']
  },
  {
    name: 'Green Peppers',
    image: 'images/p (1).jpg',
    price: '$1.80 / kg',
    location: 'Machakos, Kenya',
    description: 'Fresh green peppers, great for salads and stir-fries.',
    category: 'Fruit Vegetables',
    stock: 90,
    seller: 'Pepper Patch',
    tags: ['fresh', 'green', 'vitamin C']
  },
  {
    name: 'Eggplants',
    image: 'images/p (3).jpg',
    price: '$2.20 / kg',
    location: 'Meru, Kenya',
    description: 'Glossy eggplants, great for grilling and stews.',
    category: 'Fruit Vegetables',
    stock: 60,
    seller: 'Purple Patch',
    tags: ['glossy', 'purple', 'fiber']
  },
  {
    name: 'Zucchini',
    image: 'images/d.jpg',
    price: '$1.60 / kg',
    location: 'Kericho, Kenya',
    description: 'Fresh zucchini, ideal for stir-fries and baking.',
    category: 'Fruit Vegetables',
    stock: 70,
    seller: 'Green Patch',
    tags: ['fresh', 'green', 'fiber']
  }
];

// List of categories for filtering
const productCategories = [
  { label: 'All', value: 'all' },
  { label: 'Leafy Greens', value: 'Leafy Greens' },
  { label: 'Root Vegetables', value: 'Root Vegetables' },
  { label: 'Legumes', value: 'Legumes' },
  { label: 'Fruit Vegetables', value: 'Fruit Vegetables' }
];

let activeCategory = 'all';
let searchQuery = '';

// Render the farm product cards in the grid, filtered by category and search
function renderFarmProducts() {
  const grid = document.getElementById('product-grid');
  let filtered = farmProducts;
  if (activeCategory !== 'all') {
    filtered = farmProducts.filter(p => p.category === activeCategory);
  }
  if (searchQuery.trim() !== '') {
    filtered = filtered.filter(p => p.name.toLowerCase().includes(searchQuery.trim().toLowerCase()));
  }
  if (filtered.length === 0) {
    grid.innerHTML = `<div class='col-span-full text-center text-gray-500 py-12 text-lg'>No products found for your search.</div>`;
    return;
  }
  grid.innerHTML = filtered.map((product, i) => `
    <div class="bg-white rounded-lg shadow p-4 flex flex-col cursor-pointer animate__animated animate__fadeInUp animate__faster product-card" data-index="${farmProducts.indexOf(product)}">
      <img src="${product.image}" alt="${product.name}" class="w-full h-40 object-cover rounded-md mb-4" />
      <h3 class="font-semibold text-lg mb-1">${product.name}</h3>
      <p class="text-green-600 font-bold mb-1">${product.price}</p>
      <p class="text-gray-500 text-sm mb-2">${product.location}</p>
    </div>
  `).join('');
}

// Product farms
farmProducts.forEach((product, i) => {
  const zimbabwePlaces = [
    'Harare, Zimbabwe', 'Bulawayo, Zimbabwe', 'Mutare, Zimbabwe', 'Gweru, Zimbabwe',
    'Kwekwe, Zimbabwe', 'Masvingo, Zimbabwe', 'Chinhoyi, Zimbabwe', 'Marondera, Zimbabwe',
    'Chitungwiza, Zimbabwe', 'Bindura, Zimbabwe', 'Zvishavane, Zimbabwe', 'Victoria Falls, Zimbabwe',
    'Beitbridge, Zimbabwe', 'Kariba, Zimbabwe', 'Hwange, Zimbabwe', 'Rusape, Zimbabwe'
  ];
  product.location = zimbabwePlaces[i % zimbabwePlaces.length];
});

// Render category filter buttons and highlight the active one
function renderCategoryFilters() {
  const filterBar = document.querySelector('.flex.flex-wrap.gap-2');
  filterBar.innerHTML = productCategories.map(cat =>
    `<button class="px-4 py-2 rounded-full font-medium transition ${activeCategory === cat.value ? 'bg-green-600 text-white hover:bg-green-700' : 'bg-gray-100 text-gray-700 hover:bg-green-100'}" data-category="${cat.value}">${cat.label}</button>`
  ).join('');
}


// Product Modal Section
// Show the modal with product details
function showProductModal(product) {
  document.getElementById('modal-image').src = product.image;
  document.getElementById('modal-name').textContent = product.name;
  document.getElementById('modal-price').textContent = product.price;
  document.getElementById('modal-location').textContent = product.location;
  document.getElementById('modal-description').textContent = product.description;
  document.getElementById('modal-extra').innerHTML = `
    <div><span class='font-semibold'>Category:</span> ${product.category}</div>
    <div><span class='font-semibold'>Stock:</span> ${product.stock}</div>
    <div><span class='font-semibold'>Seller:</span> ${product.seller}</div>
    <div><span class='font-semibold'>Tags:</span> ${product.tags.map(tag => `<span class='inline-block bg-green-100 text-green-700 rounded px-2 py-0.5 mr-1'>${tag}</span>`).join('')}</div>
  `;
  document.getElementById('product-modal').classList.remove('hidden');
  if (typeof setBodyScrollLock === 'function') setBodyScrollLock(true);
}

// Hide the product modal
function hideProductModal() {
  document.getElementById('product-modal').classList.add('hidden');
  if (typeof setBodyScrollLock === 'function') setBodyScrollLock(false);
}


// Utility: Prevent background scroll when modal is open
function setBodyScrollLock(locked) {
  if (locked) {
    document.body.classList.add('overflow-hidden');
  } else {
    document.body.classList.remove('overflow-hidden');
  }
}


// DOMContentLoaded: Initialize all interactive features
window.addEventListener('DOMContentLoaded', function() {
  // Navbar hamburger menu (already handled above)

  // Initialize hero carousel
  renderHeroSlide(currentSlide);
  renderIndicators();
  startSlideShow();

  // Hero carousel controls
  document.getElementById('next-slide').addEventListener('click', function() {
    stopSlideShow();
    nextSlide();
    startSlideShow();
  });
  document.getElementById('prev-slide').addEventListener('click', function() {
    stopSlideShow();
    prevSlide();
    startSlideShow();
  });
  document.getElementById('carousel-indicators').addEventListener('click', function(e) {
    if (e.target.tagName === 'BUTTON') {
      stopSlideShow();
      goToSlide(Number(e.target.getAttribute('data-index')));
      startSlideShow();
    }
  });

  // Render category filters and products
  renderCategoryFilters();
  renderFarmProducts();

  // Category filter click logic
  document.querySelector('.flex.flex-wrap.gap-2').addEventListener('click', function(e) {
    if (e.target.tagName === 'BUTTON' && e.target.hasAttribute('data-category')) {
      activeCategory = e.target.getAttribute('data-category');
      renderCategoryFilters();
      renderFarmProducts();
    }
  });

  // Product modal open/close logic
  document.getElementById('product-grid').addEventListener('click', function(e) {
    const card = e.target.closest('.product-card');
    if (card) {
      const index = card.getAttribute('data-index');
      showProductModal(farmProducts[index]);
    }
  });
  document.getElementById('close-modal').addEventListener('click', hideProductModal);
  document.getElementById('product-modal').addEventListener('click', function(e) {
    if (e.target === this) hideProductModal();
  });

  // Search bar logic
  const searchInput = document.querySelector('input[placeholder="Search Products..."]');
  if (searchInput) {
    searchInput.addEventListener('input', function(e) {
      searchQuery = e.target.value;
      renderFarmProducts();
    });
  }
});
