/**
 * MEMORY REHAB LAB - CLIENT INTERACTION SCRIPT
 * Glassmorphic UI/UX, Dual Theme Controller, Hello Bubble Layout Architecture,
 * Interactive Card Click Glow-Up, Face User Welcome Popup, Authentication & PDP
 */

// --- GLOBAL CATALOG DATABASE (Loaded from products-config.js) ---
const MEMORY_REHAB_CATALOG = window.MEMORY_REHAB_CATALOG || {
  '1': {
    id: '1',
    name: 'Faerie Dew™ Barrier Face Cream',
    step: 'Step 3: Hydrate & Lock',
    badge: 'Best Seller',
    price: 42,
    originalPrice: 52,
    image: 'photo_2026-09-09_17-33-58.jpg',
    rating: 4.9,
    reviews: 168,
    size: '30ml / 1.0 fl. oz',
    skinType: '💧 For: Dry / Compromised Barrier',
    summary: 'Deeply restorative lipid cream formulated with botanical ceramides, cold-pressed raspberry seed, and soothing plant sterols to rebuild compromised skin barriers.',
    ingredients: ['Ceramides NP & AP', 'Raspberry Seed Oil', 'Soothe Complex', 'Bio-Squalane'],
    clinical: [
      { val: '96%', desc: 'Noticed barrier redness and stinging calmed within 7 days' },
      { val: '98%', desc: 'Reported continuous 48-hour moisture retention without clogging' },
      { val: '92%', desc: 'Observed complete elimination of dry flaking and tight sensation' }
    ],
    actives: [
      { name: 'Ceramides NP & AP', icon: '🧬', desc: 'Identical to skin’s own intercellular lipids. Rebuilds micro-fissures in the stratum corneum to prevent trans-epidermal water loss.' },
      { name: 'Cold-Pressed Raspberry Seed', icon: '🍇', desc: 'Packed with essential Omega-3 and Omega-6 fatty acids that soothe acute inflammatory flare-ups.' },
      { name: 'Phytosqualane', icon: '💧', desc: 'Olive-derived botanical squalane that mimics skin sebum for weightless, velvet-soft nourishment.' }
    ],
    inci: 'Aqua (Water), Rubus Idaeus (Cold-Pressed Raspberry) Seed Oil, Ceramide NP, Ceramide AP, Phytosphingosine, Squalane, Butyrospermum Parkii (Shea) Butter, Hyaluronic Acid, Glycerin, Camellia Sinensis (Green Tea) Leaf Extract, Allantoin, Tocopherol (Vitamin E), Ethylhexylglycerin, Phenoxyethanol.',
    reviewsList: [
      { name: 'Jordan M.', type: 'Compromised Barrier', rating: 5, body: 'Transformed my peeling skin in less than a week. It melts in like whipped silk and stopped all stinging from active treatments.' },
      { name: 'Elena R.', type: 'Dry / Sensitive', rating: 5, body: 'The holy grail for retinoid-damaged barriers. So lightweight yet deeply hydrating throughout the night.' }
    ]
  },
  '2': {
    id: '2',
    name: 'For The Love Of Sun™ Vitamin C Serum',
    step: 'Step 2: Target & Treat',
    badge: 'Award Winner',
    price: 48,
    originalPrice: 58,
    image: 'photo_2026-09-09_17-33-54.jpg',
    rating: 4.9,
    reviews: 214,
    size: '30ml / 1.0 fl. oz',
    skinType: '☀️ For: Dull / Uneven Skin Tone',
    summary: 'High-potency antioxidant serum blending stabilized Vitamin C, Japanese green tea extract, and low-molecular hyaluronic acid to brighten dullness and even tone.',
    ingredients: ['Vitamin C 15%', 'Green Tea Extract', 'Triple Hyaluronic', 'Ferulic Acid'],
    clinical: [
      { val: '94%', desc: 'Noticed a visible increase in skin luminosity and clarity in 14 days' },
      { val: '89%', desc: 'Observed noticeable fading of stubborn post-acne dark marks' },
      { val: '97%', desc: 'Reported zero irritation or burning sensation upon application' }
    ],
    actives: [
      { name: 'Ethyl Ascorbic Acid (15%)', icon: '🍊', desc: 'Ultra-stable Vitamin C derivative that penetrates deep into epidermis without oxidizing or causing sensitization.' },
      { name: 'Japanese Green Tea', icon: '🍃', desc: 'Loaded with EGCG polyphenols that scavenge free radicals and calm environmental UV stress.' },
      { name: 'Triple Molecular Hyaluronic', icon: '💧', desc: 'Multi-depth hydration that plumps surface fine lines while quenching deep cellular moisture reservoirs.' }
    ],
    inci: 'Aqua (Water), 3-O-Ethyl Ascorbic Acid, Camellia Sinensis (Green Tea) Leaf Extract, Sodium Hyaluronate, Ferulic Acid, Citrus Aurantium Dulcis (Blood Orange) Peel Extract, Propanediol, Glycerin, Panthenol, Ethylhexylglycerin.',
    reviewsList: [
      { name: 'Chloe T.', type: 'Hyperpigmentation', rating: 5, body: 'Most Vitamin C serums break me out or smell awful. This one is like pure sunshine. My dark spots faded so fast!' },
      { name: 'Marcus K.', type: 'Dull / Combination', rating: 5, body: 'Instant glassy radiance without feeling tacky under moisturizer. Highly recommended.' }
    ]
  },
  '3': {
    id: '3',
    name: 'Exile™ Acne Fix Treatment Cream',
    step: 'Step 2: Target & Treat',
    badge: 'Clinical Grade',
    price: 39,
    originalPrice: 49,
    image: 'photo_2026-09-09_17-34-01.jpg',
    rating: 4.8,
    reviews: 142,
    size: '30ml / 1.0 fl. oz',
    skinType: '🌿 For: Acne-Prone & Sensitive',
    summary: 'Targeted blemish-clearing restorative cream with Azelaic Acid, Resveratrol, and purifying botanical extracts to target stubborn breakouts without peeling.',
    ingredients: ['Azelaic Acid 10%', 'Resveratrol', 'Niacinamide 4%', 'Centella Asiatica'],
    clinical: [
      { val: '93%', desc: 'Observed reduction in active blemish swelling within 24 to 48 hours' },
      { val: '91%', desc: 'Reported fewer monthly hormonal breakouts after 3 weeks of use' },
      { val: '95%', desc: 'Experienced clear pores without dry peeling or flaky skin' }
    ],
    actives: [
      { name: 'Micronized Azelaic Acid', icon: '🍇', desc: 'Gently dissolves pore-clogging dead cells and calms the underlying bacteria responsible for papules.' },
      { name: 'Grape Resveratrol', icon: '🍷', desc: 'Powerful polyphenol that stops post-inflammatory hyperpigmentation (PIH) before it starts.' },
      { name: 'Pure Niacinamide', icon: '✨', desc: 'Strengthens pore elasticity and balances excess sebum production.' }
    ],
    inci: 'Aqua (Water), Azelaic Acid, Niacinamide, Resveratrol, Centella Asiatica Extract, Caprylic/Capric Triglyceride, Zinc PCA, Allantoin, Glycerin, Xanthan Gum, Ethylhexylglycerin.',
    reviewsList: [
      { name: 'Maya P.', type: 'Acne-Prone', rating: 5, body: 'I struggled with cystic jawline acne for years. Exile calms the cysts overnight without drying out my barrier!' },
      { name: 'Liam S.', type: 'Sensitive Blemish', rating: 5, body: 'Gentle yet incredibly effective. No peeling or stinging whatsoever.' }
    ]
  },
  '4': {
    id: '4',
    name: 'Vita Sea™ Fruit Complex Exfoliating Toner',
    step: 'Step 1: Prep & Tone',
    badge: 'New Formula',
    price: 36,
    originalPrice: 44,
    image: 'photo_2026-09-09_17-33-53.jpg',
    rating: 4.8,
    reviews: 97,
    size: '60ml / 2.0 fl. oz',
    skinType: '🍊 For: Textured & Congested Skin',
    summary: 'Gentle exfoliating fruit toner with Ethyl Ascorbic, Tartaric Acid, and Kurarinone Extract to smooth uneven texture and refine pores.',
    ingredients: ['Tartaric Acid', 'Ethyl Ascorbic', 'Kurarinone', 'Citrus Fruit Blend'],
    clinical: [
      { val: '95%', desc: 'Noticed immediate skin smoothness after first application' },
      { val: '90%', desc: 'Reported refined pores and reduced congestion around T-zone' },
      { val: '98%', desc: 'Agreed the formula feels refreshing and non-sticky' }
    ],
    actives: [
      { name: 'Natural Tartaric Acid', icon: '🍋', desc: 'Fruit-derived AHA that gently unglues dead surface debris without disrupting barrier lipids.' },
      { name: 'Kurarinone Extract', icon: '🌿', desc: 'Rare botanical flavonoid known for purifying and clearing dull complexions.' },
      { name: 'Blood Orange Infusion', icon: '🍊', desc: 'Energizes skin with natural Vitamin C bioflavonoids for immediate radiance.' }
    ],
    inci: 'Aqua (Water), Tartaric Acid, 3-O-Ethyl Ascorbic Acid, Kurarinone Extract, Citrus Limon (Lemon) Peel Extract, Propanediol, Glycerin, Sodium Hydroxide, Ethylhexylglycerin.',
    reviewsList: [
      { name: 'Aaliyah W.', type: 'Textured Skin', rating: 5, body: 'The gentlest exfoliant I have ever used. My skin texture became baby smooth within 4 days.' }
    ]
  },
  '5': {
    id: '5',
    name: 'Jade Lustre™ Youth Elixir Depigmenting Serum',
    step: 'Step 2: Target & Treat',
    badge: 'Staff Pick',
    price: 46,
    originalPrice: 56,
    image: 'photo_2026-09-09_17-33-55.jpg',
    rating: 5.0,
    reviews: 89,
    size: '30ml / 1.0 fl. oz',
    skinType: '🥒 For: Dehydrated / Mature Skin',
    summary: 'Supercharged botanical depigmenting serum infused with cucumber peptides, grape seed, and youth elixir botanicals to restore bounce.',
    ingredients: ['Cucumber Peptides', 'Grape Stem Cells', 'Youth Elixir', 'Hyaluronic Acid'],
    clinical: [
      { val: '97%', desc: 'Reported noticeable plumpness and bounce in dehydrated skin' },
      { val: '94%', desc: 'Observed faded sun spots and more uniform complexion tone' },
      { val: '99%', desc: 'Agreed skin looked glowing and dewy all day long' }
    ],
    actives: [
      { name: 'Cucumber Peptides', icon: '🥒', desc: 'Cools inflammation and boosts micro-circulation for a rested, fresh appearance.' },
      { name: 'Grape Stem Cells', icon: '🍇', desc: 'Antioxidant shield that protects epidermal stem cells against UV photo-aging.' },
      { name: 'Jade Botanical Elixir', icon: '✨', desc: 'Patented botanical blend designed to fade stubborn dark spots and discoloration.' }
    ],
    inci: 'Aqua (Water), Cucumis Sativus (Cucumber) Fruit Extract, Vitis Vinifera (Grape) Seed Extract, Sodium Hyaluronate, Niacinamide, Glycerin, Xanthan Gum, Phenoxyethanol.',
    reviewsList: [
      { name: 'Hannah B.', type: 'Dehydrated', rating: 5, body: 'Feels so cooling on the skin! The depigmenting effect is real; my sun spots on my cheekbones are practically gone.' }
    ]
  },
  '6': {
    id: '6',
    name: 'Blue Blooded™ Skin Restoring Toner',
    step: 'Step 1: Prep & Tone',
    badge: 'Hydra Balance',
    price: 34,
    originalPrice: 40,
    image: 'photo_2026-09-09_17-33-56.jpg',
    rating: 4.7,
    reviews: 112,
    size: '100ml / 3.4 fl. oz',
    skinType: '🫐 For: Oily & Irritated Skin',
    summary: 'Balancing botanical toner powered by blueberry polyphenols, salicylic acid, and calming allantoin to detoxify pores and rebalance pH.',
    ingredients: ['Blueberry Polyphenols', 'Salicylic Acid 1%', 'Allantoin', 'Sea Minerals'],
    clinical: [
      { val: '92%', desc: 'Reported balanced oil levels and reduced midday shine' },
      { val: '95%', desc: 'Noticed instant calming of irritated, red patches' },
      { val: '90%', desc: 'Experienced clearer pores and less blackhead buildup' }
    ],
    actives: [
      { name: 'Blueberry Polyphenols', icon: '🫐', desc: 'Potent anthocyanins that defend skin against oxidative stress and blue light.' },
      { name: 'Salicylic Acid (BHA)', icon: '💧', desc: 'Oil-soluble exfoliant that penetrates deep into pores to dissolve trapped sebum.' },
      { name: 'Allantoin', icon: '🌿', desc: 'Clinically proven soothing agent that accelerates epidermal barrier renewal.' }
    ],
    inci: 'Aqua (Water), Vaccinium Angustifolium (Blueberry) Fruit Extract, Salicylic Acid, Allantoin, Sodium Hyaluronate, Propanediol, Glycerin, Citric Acid, Ethylhexylglycerin.',
    reviewsList: [
      { name: 'Tyler D.', type: 'Oily / Breakout', rating: 5, body: 'Controls oil without stripping. My skin feels fresh, hydrated, and calm.' }
    ]
  },
  '7': {
    id: '7',
    name: 'Heavenly Buff™ Smoothening Body Milk',
    step: 'Body Rehabilitation',
    badge: 'Velvet Smooth',
    price: 38,
    originalPrice: 46,
    image: 'photo_2026-09-09_17-33-52.jpg',
    rating: 4.9,
    reviews: 185,
    size: '250g / 8.8 fl. oz',
    skinType: '🧴 For: Rough / KP & Dry Body Skin',
    summary: 'Velvety body rehabilitation lotion formulated with Lactic Acid, medical-grade Urea, and organic vanilla to gently exfoliate rough patches.',
    ingredients: ['Lactic Acid 8%', 'Urea 5%', 'Cocoa Seed Butter', 'Vanilla Extract'],
    clinical: [
      { val: '98%', desc: 'Saw rough "strawberry skin" and keratosis pilaris smoothed in 10 days' },
      { val: '96%', desc: 'Reported non-greasy, fast absorption with 24-hour hydration' },
      { val: '94%', desc: 'Loved the delicate warm vanilla and cocoa natural scent' }
    ],
    actives: [
      { name: 'Lactic Acid (8%)', icon: '🥛', desc: 'Gentle milk AHA that breaks down rough keratin plugs while attracting moisture to skin.' },
      { name: 'Medical-Grade Urea (5%)', icon: '💧', desc: 'Natural moisturizing factor that restores elastic suppleness to cracked elbows and legs.' },
      { name: 'Raw Cocoa Butter', icon: '🍫', desc: 'Rich emollient butter that forms a breathable protective shield against dry air.' }
    ],
    inci: 'Aqua (Water), Lactic Acid, Urea, Theobroma Cacao (Cocoa) Seed Butter, Caprylic/Capric Triglyceride, Glycerin, Vanilla Planifolia Fruit Extract, Cetearyl Alcohol, Ethylhexylglycerin.',
    reviewsList: [
      { name: 'Grace K.', type: 'Keratosis Pilaris', rating: 5, body: 'Completely eliminated the bumpy texture on the backs of my arms. Silky, non-sticky, and smells divine!' }
    ]
  },
  '8': {
    id: '8',
    name: "Cupid's Pout™ Moisturising Lip Butter",
    step: 'Lip Therapy',
    badge: 'Customer Fave',
    price: 22,
    originalPrice: 28,
    image: 'photo_2026-09-09_17-33-57.jpg',
    rating: 4.9,
    reviews: 246,
    size: '15ml / 0.5 fl. oz',
    skinType: '🍓 For: Chapped & Sensitive Lips',
    summary: 'Luscious strawberry lip rehabilitation butter loaded with hyaluronic acid, cold-pressed berry waxes, and Vitamin E to plump and nourish.',
    ingredients: ['Strawberry Seed Oil', 'Vitamin E', 'Hyaluronic Acid', 'Shea Butter'],
    clinical: [
      { val: '99%', desc: 'Reported immediate relief for cracked, chapped lips' },
      { val: '94%', desc: 'Observed fuller, plumper lip appearance without irritation' },
      { val: '97%', desc: 'Loved the non-sticky high-shine glass glaze finish' }
    ],
    actives: [
      { name: 'Cold-Pressed Strawberry Seed', icon: '🍓', desc: 'Rich in linoleic acid that deeply conditions delicate lip tissue.' },
      { name: 'Micronized Hyaluronic', icon: '💧', desc: 'Draws moisture from within to naturally plump fine lip lines.' },
      { name: 'Pure Vitamin E', icon: '✨', desc: 'Antioxidant shield that protects lips against cold weather wind-burn.' }
    ],
    inci: 'Polyisobutene, Fragaria Ananassa (Strawberry) Seed Oil, Butyrospermum Parkii (Shea) Butter, Sodium Hyaluronate, Tocopheryl Acetate (Vitamin E), Flavor (Natural Strawberry).',
    reviewsList: [
      { name: 'Samantha L.', type: 'Chapped Lips', rating: 5, body: 'The only lip product that actually heals my lips overnight during winter. Never leaving home without it.' }
    ]
  },
  '9': {
    id: '9',
    name: 'Palm Culture™ Herbal Black Soap Blend',
    step: 'Step 1: Cleanse',
    badge: 'Artisanal Blend',
    price: 32,
    originalPrice: 38,
    image: 'photo_2026-09-09_17-33-47.jpg',
    rating: 4.8,
    reviews: 134,
    size: '250g / 8.8 oz',
    skinType: '☕ For: Clogged Pores & Impurities',
    summary: 'Traditional whipped herbal black soap blend infused with antioxidant ground coffee, wild neem leaves, and purifying tamarind.',
    ingredients: ['Herbal Black Soap', 'Wild Neem Leaf', 'Arabica Coffee', 'Tamarind'],
    clinical: [
      { val: '94%', desc: 'Felt deep pore detoxification without tight squeaky dryness' },
      { val: '91%', desc: 'Noticed clearer back and chest skin within 12 days' },
      { val: '96%', desc: 'Loved the earthy aromatic cleansing experience' }
    ],
    actives: [
      { name: 'Artisanal Black Soap', icon: '🌿', desc: 'Handcrafted from plantain ash and palm kernel oil for a gentle, mineral-rich cleanse.' },
      { name: 'Wild Neem Leaf', icon: '🍃', desc: 'Centuries-old botanical known to eradicate stubborn congestion and soothe breakouts.' },
      { name: 'Ground Arabica Coffee', icon: '☕', desc: 'Micro-exfoliates surface grime while delivering energizing antioxidants.' }
    ],
    inci: 'Potassium Palm Kernelate, Aqua, Coffea Arabica (Coffee) Seed Powder, Azadirachta Indica (Neem) Leaf Extract, Tamarindus Indica Fruit Extract, Glycerin.',
    reviewsList: [
      { name: 'Derrick O.', type: 'Acne / Body', rating: 5, body: 'Cleared my chest and back breakouts completely. Incredible purifying paste.' }
    ]
  },
  '10': {
    id: '10',
    name: 'Reveal™ Smoothing Strawberry Scrub',
    step: 'Body Polish',
    badge: 'Whipped Polish',
    price: 35,
    originalPrice: 42,
    image: 'photo_2026-09-09_17-33-59.jpg',
    rating: 4.9,
    reviews: 178,
    size: '250g / 8.8 oz',
    skinType: '🍓 For: Dull & Flaky Body Skin',
    summary: 'Whipped exfoliating body polish packed with raw organic shea butter, enzymatic papain, and mulberry extract for touchable softness.',
    ingredients: ['Raw Shea Butter', 'Papain Enzyme', 'Mulberry Extract', 'Strawberry Sugar'],
    clinical: [
      { val: '98%', desc: 'Observed touchably soft, glowing skin right out of the shower' },
      { val: '95%', desc: 'Noticed zero scratching or redness from the smooth sugar crystals' },
      { val: '97%', desc: 'Enjoyed long-lasting hydration that eliminated body lotion need' }
    ],
    actives: [
      { name: 'Raw Shea Butter', icon: '🧈', desc: 'Ethically harvested shea that melts at skin temperature to replenish lipid barriers.' },
      { name: 'Papain Fruit Enzyme', icon: '🥭', desc: 'Enzymatically digests stubborn dead skin cells without aggressive scrubbing.' },
      { name: 'Mulberry Extract', icon: '🍇', desc: 'Natural arbutin source that brightens dark elbows, knees, and underarms.' }
    ],
    inci: 'Sucrose, Butyrospermum Parkii (Shea) Butter, Fragaria Vesca (Strawberry) Fruit Extract, Papain, Morus Alba (Mulberry) Root Extract, Glycerin, Caprylic/Capric Triglyceride.',
    reviewsList: [
      { name: 'Jessica V.', type: 'Dry Skin', rating: 5, body: 'Smells like strawberry shortcake and leaves your body so soft and moisturized!' }
    ]
  }
};

// ═══════════════════════════════════════════════════════════════
//  GLOBAL THEME HELPERS (called by Firestore sync + admin page)
// ═══════════════════════════════════════════════════════════════

/**
 * Apply a hex accent colour to the entire page in light mode.
 * Derives hover, soft-alpha, and glow variants automatically.
 */
function applyStorefrontThemeColor(hex) {
  if (!hex || !/^#[0-9a-fA-F]{6}$/.test(hex)) return;
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const darken = (v, a) => Math.min(255, Math.max(0, v + a)).toString(16).padStart(2, '0');
  const hover = '#' + darken(r, -15) + darken(g, -15) + darken(b, -15);
  const root = document.documentElement;
  root.style.setProperty('--primary', hex);
  root.style.setProperty('--primary-hover', hover);
  root.style.setProperty('--primary-soft', `rgba(${r},${g},${b},0.14)`);
  root.style.setProperty('--primary-glow', `rgba(${r},${g},${b},0.45)`);
  root.style.setProperty('--glass-border-subtle', `rgba(${r},${g},${b},0.25)`);
  localStorage.setItem('mr_light_accent', hex);
}

// All supported dark mode palettes (name → CSS variable overrides)
const DARK_PALETTES = {
  'obsidian-rose': {
    label: '🌹 Obsidian Rose (Default)',
    bgBase: '#0a0c12',
    bgGrad: 'radial-gradient(circle at 15% 15%, rgba(147,51,114,0.28) 0%, transparent 45%), radial-gradient(circle at 85% 20%, rgba(99,102,241,0.2) 0%, transparent 50%), radial-gradient(circle at 50% 85%, rgba(236,72,153,0.18) 0%, transparent 55%), linear-gradient(150deg,#07090e 0%,#0d1019 40%,#121422 100%)',
    primary: '#f472b6', primaryHover: '#ec4899',
    primarySoft: 'rgba(244,114,182,0.18)', primaryGlow: 'rgba(244,114,182,0.55)',
    secondary: '#3b2034', accentBlush: '#1e1b2e',
    glassBg: 'rgba(18,22,34,0.74)', glassBgHover: 'rgba(25,31,48,0.88)',
    glassCard: 'rgba(18,23,36,0.78)', glassCardHover: 'rgba(25,32,51,0.92)',
    glassBorder: 'rgba(255,255,255,0.12)', glassBorderSubtle: 'rgba(244,114,182,0.3)',
    shadowGlow: '0 8px 35px rgba(244,114,182,0.42)',
    orb1: 'radial-gradient(circle, rgba(236,72,153,0.32) 0%, rgba(168,85,247,0.05) 70%)',
    orb2: 'radial-gradient(circle, rgba(147,51,234,0.28) 0%, rgba(59,130,246,0.05) 70%)',
    orb3: 'radial-gradient(circle, rgba(244,114,182,0.28) 0%, rgba(236,72,153,0.05) 70%)',
  },
  'midnight-sapphire': {
    label: '💎 Midnight Sapphire',
    bgBase: '#050810',
    bgGrad: 'radial-gradient(circle at 15% 15%, rgba(37,99,235,0.3) 0%, transparent 45%), radial-gradient(circle at 85% 20%, rgba(6,182,212,0.22) 0%, transparent 50%), radial-gradient(circle at 50% 85%, rgba(99,102,241,0.2) 0%, transparent 55%), linear-gradient(150deg,#030510 0%,#080c18 40%,#0a1022 100%)',
    primary: '#60a5fa', primaryHover: '#3b82f6',
    primarySoft: 'rgba(96,165,250,0.18)', primaryGlow: 'rgba(96,165,250,0.55)',
    secondary: '#1e2a4a', accentBlush: '#0f1a30',
    glassBg: 'rgba(10,18,40,0.74)', glassBgHover: 'rgba(15,25,55,0.88)',
    glassCard: 'rgba(10,18,42,0.78)', glassCardHover: 'rgba(14,26,58,0.92)',
    glassBorder: 'rgba(96,165,250,0.14)', glassBorderSubtle: 'rgba(96,165,250,0.3)',
    shadowGlow: '0 8px 35px rgba(96,165,250,0.38)',
    orb1: 'radial-gradient(circle, rgba(37,99,235,0.35) 0%, rgba(6,182,212,0.05) 70%)',
    orb2: 'radial-gradient(circle, rgba(99,102,241,0.3) 0%, rgba(59,130,246,0.05) 70%)',
    orb3: 'radial-gradient(circle, rgba(6,182,212,0.28) 0%, rgba(37,99,235,0.05) 70%)',
  },
  'forest-emerald': {
    label: '🌿 Forest Emerald',
    bgBase: '#030f09',
    bgGrad: 'radial-gradient(circle at 15% 15%, rgba(16,185,129,0.28) 0%, transparent 45%), radial-gradient(circle at 85% 20%, rgba(5,150,105,0.22) 0%, transparent 50%), radial-gradient(circle at 50% 85%, rgba(52,211,153,0.15) 0%, transparent 55%), linear-gradient(150deg,#020908 0%,#070f0c 40%,#0a1510 100%)',
    primary: '#34d399', primaryHover: '#10b981',
    primarySoft: 'rgba(52,211,153,0.18)', primaryGlow: 'rgba(52,211,153,0.5)',
    secondary: '#0d2a1e', accentBlush: '#081810',
    glassBg: 'rgba(5,20,12,0.74)', glassBgHover: 'rgba(8,28,18,0.88)',
    glassCard: 'rgba(5,20,14,0.78)', glassCardHover: 'rgba(9,30,20,0.92)',
    glassBorder: 'rgba(52,211,153,0.14)', glassBorderSubtle: 'rgba(52,211,153,0.3)',
    shadowGlow: '0 8px 35px rgba(52,211,153,0.35)',
    orb1: 'radial-gradient(circle, rgba(16,185,129,0.35) 0%, rgba(5,150,105,0.05) 70%)',
    orb2: 'radial-gradient(circle, rgba(5,150,105,0.28) 0%, rgba(52,211,153,0.05) 70%)',
    orb3: 'radial-gradient(circle, rgba(52,211,153,0.28) 0%, rgba(16,185,129,0.05) 70%)',
  },
  'amethyst-galaxy': {
    label: '✨ Amethyst Galaxy',
    bgBase: '#080510',
    bgGrad: 'radial-gradient(circle at 15% 15%, rgba(168,85,247,0.32) 0%, transparent 45%), radial-gradient(circle at 85% 20%, rgba(139,92,246,0.25) 0%, transparent 50%), radial-gradient(circle at 50% 85%, rgba(196,181,253,0.12) 0%, transparent 55%), linear-gradient(150deg,#05030e 0%,#0c0818 40%,#100a20 100%)',
    primary: '#c084fc', primaryHover: '#a855f7',
    primarySoft: 'rgba(192,132,252,0.18)', primaryGlow: 'rgba(192,132,252,0.55)',
    secondary: '#1e0e38', accentBlush: '#120820',
    glassBg: 'rgba(14,8,30,0.74)', glassBgHover: 'rgba(20,12,42,0.88)',
    glassCard: 'rgba(14,8,32,0.78)', glassCardHover: 'rgba(20,14,48,0.92)',
    glassBorder: 'rgba(192,132,252,0.14)', glassBorderSubtle: 'rgba(192,132,252,0.3)',
    shadowGlow: '0 8px 35px rgba(192,132,252,0.42)',
    orb1: 'radial-gradient(circle, rgba(168,85,247,0.38) 0%, rgba(139,92,246,0.05) 70%)',
    orb2: 'radial-gradient(circle, rgba(139,92,246,0.3) 0%, rgba(168,85,247,0.05) 70%)',
    orb3: 'radial-gradient(circle, rgba(192,132,252,0.28) 0%, rgba(168,85,247,0.05) 70%)',
  },
  'volcanic-amber': {
    label: '🔥 Volcanic Amber',
    bgBase: '#0f0700',
    bgGrad: 'radial-gradient(circle at 15% 15%, rgba(217,119,6,0.3) 0%, transparent 45%), radial-gradient(circle at 85% 20%, rgba(234,88,12,0.22) 0%, transparent 50%), radial-gradient(circle at 50% 85%, rgba(251,191,36,0.12) 0%, transparent 55%), linear-gradient(150deg,#0c0600 0%,#141000 40%,#1a1200 100%)',
    primary: '#fbbf24', primaryHover: '#f59e0b',
    primarySoft: 'rgba(251,191,36,0.18)', primaryGlow: 'rgba(251,191,36,0.5)',
    secondary: '#2d1a00', accentBlush: '#1a0f00',
    glassBg: 'rgba(22,14,0,0.74)', glassBgHover: 'rgba(30,18,0,0.88)',
    glassCard: 'rgba(22,14,0,0.78)', glassCardHover: 'rgba(32,20,0,0.92)',
    glassBorder: 'rgba(251,191,36,0.14)', glassBorderSubtle: 'rgba(251,191,36,0.3)',
    shadowGlow: '0 8px 35px rgba(251,191,36,0.38)',
    orb1: 'radial-gradient(circle, rgba(234,88,12,0.38) 0%, rgba(217,119,6,0.05) 70%)',
    orb2: 'radial-gradient(circle, rgba(217,119,6,0.3) 0%, rgba(251,191,36,0.05) 70%)',
    orb3: 'radial-gradient(circle, rgba(251,191,36,0.28) 0%, rgba(234,88,12,0.05) 70%)',
  },
  'aurora-coral': {
    label: '🌅 Aurora Coral',
    bgBase: '#0f0609',
    bgGrad: 'radial-gradient(circle at 15% 15%, rgba(244,63,94,0.28) 0%, transparent 45%), radial-gradient(circle at 85% 20%, rgba(251,113,133,0.2) 0%, transparent 50%), radial-gradient(circle at 50% 85%, rgba(248,113,113,0.18) 0%, transparent 55%), linear-gradient(150deg,#0c040a 0%,#140810 40%,#1a0c14 100%)',
    primary: '#fb7185', primaryHover: '#f43f5e',
    primarySoft: 'rgba(251,113,133,0.18)', primaryGlow: 'rgba(251,113,133,0.5)',
    secondary: '#3d0a16', accentBlush: '#220610',
    glassBg: 'rgba(22,5,10,0.74)', glassBgHover: 'rgba(30,8,14,0.88)',
    glassCard: 'rgba(22,5,12,0.78)', glassCardHover: 'rgba(32,10,18,0.92)',
    glassBorder: 'rgba(251,113,133,0.14)', glassBorderSubtle: 'rgba(251,113,133,0.3)',
    shadowGlow: '0 8px 35px rgba(251,113,133,0.38)',
    orb1: 'radial-gradient(circle, rgba(244,63,94,0.38) 0%, rgba(251,113,133,0.05) 70%)',
    orb2: 'radial-gradient(circle, rgba(251,113,133,0.3) 0%, rgba(248,113,113,0.05) 70%)',
    orb3: 'radial-gradient(circle, rgba(248,113,113,0.28) 0%, rgba(244,63,94,0.05) 70%)',
  },
  'pure-obsidian': {
    label: '🌑 Pure Obsidian (Platinum Noir)',
    bgBase: '#060608',
    bgGrad: 'radial-gradient(circle at 15% 15%, rgba(255,255,255,0.08) 0%, transparent 45%), radial-gradient(circle at 85% 20%, rgba(148,163,184,0.12) 0%, transparent 50%), radial-gradient(circle at 50% 85%, rgba(203,213,225,0.06) 0%, transparent 55%), linear-gradient(150deg,#030304 0%,#08080c 40%,#0f1117 100%)',
    primary: '#f1f5f9', primaryHover: '#e2e8f0',
    primarySoft: 'rgba(241,245,249,0.12)', primaryGlow: 'rgba(241,245,249,0.45)',
    secondary: '#1a1b22', accentBlush: '#111218',
    glassBg: 'rgba(15,17,23,0.8)', glassBgHover: 'rgba(22,25,34,0.92)',
    glassCard: 'rgba(14,16,22,0.82)', glassCardHover: 'rgba(21,24,33,0.94)',
    glassBorder: 'rgba(255,255,255,0.15)', glassBorderSubtle: 'rgba(241,245,249,0.25)',
    shadowGlow: '0 8px 35px rgba(241,245,249,0.25)',
    orb1: 'radial-gradient(circle, rgba(255,255,255,0.22) 0%, rgba(148,163,184,0.03) 70%)',
    orb2: 'radial-gradient(circle, rgba(148,163,184,0.18) 0%, rgba(255,255,255,0.02) 70%)',
    orb3: 'radial-gradient(circle, rgba(203,213,225,0.2) 0%, rgba(148,163,184,0.03) 70%)',
  },
  'burgundy-noir': {
    label: '🍷 Burgundy Velvet Noir',
    bgBase: '#0c0407',
    bgGrad: 'radial-gradient(circle at 15% 15%, rgba(159,18,57,0.35) 0%, transparent 45%), radial-gradient(circle at 85% 20%, rgba(190,24,93,0.25) 0%, transparent 50%), radial-gradient(circle at 50% 85%, rgba(225,29,72,0.18) 0%, transparent 55%), linear-gradient(150deg,#090205 0%,#13050b 40%,#1c0812 100%)',
    primary: '#fb7185', primaryHover: '#f43f5e',
    primarySoft: 'rgba(251,113,133,0.18)', primaryGlow: 'rgba(251,113,133,0.55)',
    secondary: '#2a0a16', accentBlush: '#1a040d',
    glassBg: 'rgba(20,5,12,0.76)', glassBgHover: 'rgba(28,8,18,0.9)',
    glassCard: 'rgba(22,6,14,0.8)', glassCardHover: 'rgba(32,10,22,0.94)',
    glassBorder: 'rgba(251,113,133,0.18)', glassBorderSubtle: 'rgba(251,113,133,0.32)',
    shadowGlow: '0 8px 35px rgba(225,29,72,0.42)',
    orb1: 'radial-gradient(circle, rgba(159,18,57,0.4) 0%, rgba(190,24,93,0.05) 70%)',
    orb2: 'radial-gradient(circle, rgba(190,24,93,0.32) 0%, rgba(159,18,57,0.05) 70%)',
    orb3: 'radial-gradient(circle, rgba(225,29,72,0.3) 0%, rgba(190,24,93,0.05) 70%)',
  },
  'twilight-aurora': {
    label: '🌌 Twilight Aurora',
    bgBase: '#060a14',
    bgGrad: 'radial-gradient(circle at 15% 15%, rgba(45,212,191,0.28) 0%, transparent 45%), radial-gradient(circle at 85% 20%, rgba(168,85,247,0.28) 0%, transparent 50%), radial-gradient(circle at 50% 85%, rgba(56,189,248,0.2) 0%, transparent 55%), linear-gradient(150deg,#04060d 0%,#0a1020 40%,#0f172a 100%)',
    primary: '#2dd4bf', primaryHover: '#14b8a6',
    primarySoft: 'rgba(45,212,191,0.18)', primaryGlow: 'rgba(45,212,191,0.55)',
    secondary: '#132a36', accentBlush: '#0a1722',
    glassBg: 'rgba(10,20,32,0.76)', glassBgHover: 'rgba(16,28,45,0.9)',
    glassCard: 'rgba(11,22,35,0.8)', glassCardHover: 'rgba(18,32,50,0.94)',
    glassBorder: 'rgba(45,212,191,0.16)', glassBorderSubtle: 'rgba(45,212,191,0.3)',
    shadowGlow: '0 8px 35px rgba(45,212,191,0.4)',
    orb1: 'radial-gradient(circle, rgba(45,212,191,0.36) 0%, rgba(56,189,248,0.05) 70%)',
    orb2: 'radial-gradient(circle, rgba(168,85,247,0.34) 0%, rgba(45,212,191,0.05) 70%)',
    orb3: 'radial-gradient(circle, rgba(56,189,248,0.3) 0%, rgba(168,85,247,0.05) 70%)',
  },
  'matcha-noir': {
    label: '🍵 Matcha Zen Noir',
    bgBase: '#060a07',
    bgGrad: 'radial-gradient(circle at 15% 15%, rgba(101,163,13,0.3) 0%, transparent 45%), radial-gradient(circle at 85% 20%, rgba(22,101,52,0.25) 0%, transparent 50%), radial-gradient(circle at 50% 85%, rgba(234,179,8,0.15) 0%, transparent 55%), linear-gradient(150deg,#040705 0%,#09110a 40%,#101c12 100%)',
    primary: '#a3e635', primaryHover: '#84cc16',
    primarySoft: 'rgba(163,230,53,0.18)', primaryGlow: 'rgba(163,230,53,0.5)',
    secondary: '#1a2916', accentBlush: '#0e180d',
    glassBg: 'rgba(9,19,12,0.76)', glassBgHover: 'rgba(14,28,18,0.9)',
    glassCard: 'rgba(10,21,13,0.8)', glassCardHover: 'rgba(16,32,20,0.94)',
    glassBorder: 'rgba(163,230,53,0.16)', glassBorderSubtle: 'rgba(163,230,53,0.3)',
    shadowGlow: '0 8px 35px rgba(163,230,53,0.38)',
    orb1: 'radial-gradient(circle, rgba(101,163,13,0.36) 0%, rgba(22,101,52,0.05) 70%)',
    orb2: 'radial-gradient(circle, rgba(234,179,8,0.25) 0%, rgba(101,163,13,0.05) 70%)',
    orb3: 'radial-gradient(circle, rgba(163,230,53,0.28) 0%, rgba(22,101,52,0.05) 70%)',
  },
  'cyber-titanium': {
    label: '🪐 Slate Titanium Noir',
    bgBase: '#080a0f',
    bgGrad: 'radial-gradient(circle at 15% 15%, rgba(71,85,105,0.35) 0%, transparent 45%), radial-gradient(circle at 85% 20%, rgba(14,165,233,0.2) 0%, transparent 50%), radial-gradient(circle at 50% 85%, rgba(100,116,139,0.2) 0%, transparent 55%), linear-gradient(150deg,#05070a 0%,#0b0f17 40%,#141a26 100%)',
    primary: '#38bdf8', primaryHover: '#0284c7',
    primarySoft: 'rgba(56,189,248,0.18)', primaryGlow: 'rgba(56,189,248,0.5)',
    secondary: '#1e293b', accentBlush: '#0f172a',
    glassBg: 'rgba(13,19,30,0.76)', glassBgHover: 'rgba(20,28,44,0.9)',
    glassCard: 'rgba(14,21,33,0.8)', glassCardHover: 'rgba(22,32,49,0.94)',
    glassBorder: 'rgba(56,189,248,0.15)', glassBorderSubtle: 'rgba(56,189,248,0.3)',
    shadowGlow: '0 8px 35px rgba(56,189,248,0.38)',
    orb1: 'radial-gradient(circle, rgba(71,85,105,0.38) 0%, rgba(14,165,233,0.05) 70%)',
    orb2: 'radial-gradient(circle, rgba(14,165,233,0.28) 0%, rgba(100,116,139,0.05) 70%)',
    orb3: 'radial-gradient(circle, rgba(56,189,248,0.28) 0%, rgba(71,85,105,0.05) 70%)',
  },
  'celestial-plum': {
    label: '🔮 Celestial Plum Noir',
    bgBase: '#09050d',
    bgGrad: 'radial-gradient(circle at 15% 15%, rgba(192,38,211,0.3) 0%, transparent 45%), radial-gradient(circle at 85% 20%, rgba(126,34,206,0.28) 0%, transparent 50%), radial-gradient(circle at 50% 85%, rgba(232,121,249,0.18) 0%, transparent 55%), linear-gradient(150deg,#060309 0%,#0f0717 40%,#180b24 100%)',
    primary: '#e879f9', primaryHover: '#d946ef',
    primarySoft: 'rgba(232,121,249,0.18)', primaryGlow: 'rgba(232,121,249,0.55)',
    secondary: '#280f38', accentBlush: '#160720',
    glassBg: 'rgba(16,8,26,0.76)', glassBgHover: 'rgba(24,12,38,0.9)',
    glassCard: 'rgba(18,9,29,0.8)', glassCardHover: 'rgba(27,14,43,0.94)',
    glassBorder: 'rgba(232,121,249,0.16)', glassBorderSubtle: 'rgba(232,121,249,0.3)',
    shadowGlow: '0 8px 35px rgba(232,121,249,0.4)',
    orb1: 'radial-gradient(circle, rgba(192,38,211,0.38) 0%, rgba(126,34,206,0.05) 70%)',
    orb2: 'radial-gradient(circle, rgba(126,34,206,0.32) 0%, rgba(232,121,249,0.05) 70%)',
    orb3: 'radial-gradient(circle, rgba(232,121,249,0.28) 0%, rgba(192,38,211,0.05) 70%)',
  },
};

/**
 * Curated list of high-luxury pastel accent hues for dynamic cycling
 */
const PASTEL_ROTATION_PALETTE = [
  { name: 'Rose Pink', hex: '#f48bb3' },
  { name: 'Baby Pink', hex: '#f9a8d4' },
  { name: 'Blush Rose', hex: '#fda4af' },
  { name: 'Hot Coral', hex: '#fb7185' },
  { name: 'Rose Quartz', hex: '#fbcfe8' },
  { name: 'Lavender', hex: '#c084fc' },
  { name: 'Orchid', hex: '#e879f9' },
  { name: 'Amethyst', hex: '#a855f7' },
  { name: 'Lilac Mist', hex: '#d8b4fe' },
  { name: 'Periwinkle', hex: '#818cf8' },
  { name: 'Sky Blue', hex: '#60a5fa' },
  { name: 'Aqua Dream', hex: '#38bdf8' },
  { name: 'Teal Silk', hex: '#2dd4bf' },
  { name: 'Glacier Mist', hex: '#67e8f9' },
  { name: 'Mint Sage', hex: '#34d399' },
  { name: 'Spring Dew', hex: '#4ade80' },
  { name: 'Soft Green', hex: '#86efac' },
  { name: 'Pistachio Cream', hex: '#6ee7b7' },
  { name: 'Honey Gold', hex: '#fbbf24' },
  { name: 'Peach Blossom', hex: '#fb923c' },
  { name: 'Apricot Silk', hex: '#fed7aa' },
  { name: 'Buttercup', hex: '#fde68a' },
  { name: 'Caramel Velvet', hex: '#d6a77a' },
];

/**
 * Apply a full dark mode palette by palette key.
 * Works immediately on the current page regardless of theme.
 * Stored in localStorage so it persists across pages.
 */
function applyDarkThemePalette(key) {
  const palette = DARK_PALETTES[key];
  if (!palette) return;
  localStorage.setItem('mr_dark_palette', key);
  const root = document.documentElement;
  // Only apply CSS vars if currently in dark mode
  const isDark = root.getAttribute('data-theme') === 'dark' || document.body.classList.contains('dark-mode');
  if (isDark) {
    _injectDarkPalette(palette);
  }
  // Store reference so applyTheme can use it
  root.dataset.darkPalette = key;
}

function _injectDarkPalette(p) {
  const root = document.documentElement;
  root.style.setProperty('--bg-base', p.bgBase);
  root.style.setProperty('--bg-gradient', p.bgGrad);
  root.style.setProperty('--primary', p.primary);
  root.style.setProperty('--primary-hover', p.primaryHover);
  root.style.setProperty('--primary-soft', p.primarySoft);
  root.style.setProperty('--primary-glow', p.primaryGlow);
  root.style.setProperty('--secondary', p.secondary);
  root.style.setProperty('--accent-blush', p.accentBlush);
  root.style.setProperty('--glass-bg', p.glassBg);
  root.style.setProperty('--glass-bg-hover', p.glassBgHover);
  root.style.setProperty('--glass-card', p.glassCard);
  root.style.setProperty('--glass-card-hover', p.glassCardHover);
  root.style.setProperty('--glass-border', p.glassBorder);
  root.style.setProperty('--glass-border-subtle', p.glassBorderSubtle);
  root.style.setProperty('--shadow-glow', p.shadowGlow);
  // Orbs
  const orb1 = document.querySelector('.ambient-orb-1');
  const orb2 = document.querySelector('.ambient-orb-2');
  const orb3 = document.querySelector('.ambient-orb-3');
  if (orb1) orb1.style.background = p.orb1;
  if (orb2) orb2.style.background = p.orb2;
  if (orb3) orb3.style.background = p.orb3;
}

// ═══════════════════════════════════════════════════════════════
//  ⏰  AUTO-THEME SCHEDULER & DYNAMIC ROTATION ENGINE
// ═══════════════════════════════════════════════════════════════

let _autoThemeTimer = null;
let _autoThemePastelIdx = 0;
let _autoThemeDarkIdx = 0;
let _currentAutoThemeConfig = { enabled: false, interval: 30, mode: 'adaptive', smooth: true };

/**
 * Master controller for automated time-based theme rotation.
 * Called automatically by Firestore listener or admin manual trigger.
 */
function initAutoThemeScheduler(config) {
  if (_autoThemeTimer) {
    clearInterval(_autoThemeTimer);
    _autoThemeTimer = null;
  }

  if (!config) return;
  _currentAutoThemeConfig = Object.assign({}, _currentAutoThemeConfig, config);

  // Persist locally for instant resume
  try {
    localStorage.setItem('mr_autotheme_config', JSON.stringify(_currentAutoThemeConfig));
  } catch(e) {}

  // Apply smooth transition CSS flag to body
  if (_currentAutoThemeConfig.smooth) {
    document.body.classList.add('theme-morph-smooth');
  } else {
    document.body.classList.remove('theme-morph-smooth');
  }

  if (!_currentAutoThemeConfig.enabled) {
    return;
  }

  const intervalSec = Math.max(10, parseInt(_currentAutoThemeConfig.interval, 10) || 30);
  const intervalMs = intervalSec * 1000;

  _autoThemeTimer = setInterval(() => {
    triggerThemeCycleStep();
  }, intervalMs);
}

/**
 * Execute one cycle step according to active mode
 */
function triggerThemeCycleStep() {
  const root = document.documentElement;
  const isDark = root.getAttribute('data-theme') === 'dark' || document.body.classList.contains('dark-mode');
  const mode = _currentAutoThemeConfig.mode || 'adaptive';

  if (mode === 'daynight') {
    // Smart Circadian: Day = 06:00 to 18:00 (Pastel Light), Night = 18:00 to 06:00 (Obsidian Dark)
    const curHour = new Date().getHours();
    const isNightTime = curHour < 6 || curHour >= 18;

    if (isNightTime && !isDark) {
      if (typeof window.applyThemeGlobal === 'function') window.applyThemeGlobal('dark');
    } else if (!isNightTime && isDark) {
      if (typeof window.applyThemeGlobal === 'function') window.applyThemeGlobal('light');
    }

    // Now cycle subtle mood within current mode
    if (isNightTime) {
      _cycleNextDarkPalette();
    } else {
      _cycleNextPastel();
    }
    return;
  }

  if (mode === 'pastels') {
    // If not in light mode, switch to light mode or cycle pastels
    if (isDark && typeof window.applyThemeGlobal === 'function') window.applyThemeGlobal('light');
    _cycleNextPastel();
  } else if (mode === 'obsidian') {
    // If not in dark mode, switch to dark mode or cycle obsidian
    if (!isDark && typeof window.applyThemeGlobal === 'function') window.applyThemeGlobal('dark');
    _cycleNextDarkPalette();
  } else {
    // 'adaptive' or 'both': Respect user's active theme and cycle corresponding palette
    if (isDark) {
      _cycleNextDarkPalette();
    } else {
      _cycleNextPastel();
    }
  }
}

function _cycleNextPastel() {
  _autoThemePastelIdx = (_autoThemePastelIdx + 1) % PASTEL_ROTATION_PALETTE.length;
  const chosen = PASTEL_ROTATION_PALETTE[_autoThemePastelIdx];
  applyStorefrontThemeColor(chosen.hex);
}

function _cycleNextDarkPalette() {
  const darkKeys = Object.keys(DARK_PALETTES);
  _autoThemeDarkIdx = (_autoThemeDarkIdx + 1) % darkKeys.length;
  const chosenKey = darkKeys[_autoThemeDarkIdx];
  applyDarkThemePalette(chosenKey);
}

// Expose globally for cross-file and admin testing
window.initAutoThemeScheduler = initAutoThemeScheduler;
window.triggerThemeCycleStep = triggerThemeCycleStep;
window.DARK_PALETTES = DARK_PALETTES;
window.PASTEL_ROTATION_PALETTE = PASTEL_ROTATION_PALETTE;


document.addEventListener('DOMContentLoaded', () => {
  // --- 1. DYNAMIC YEAR ---
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // --- 2. AUTHENTICATION & USER HEADER STATUS ---
  const userAuthPill = document.getElementById('userAuthPill');
  const userAuthText = document.getElementById('userAuthText');
  const userAuthDropdown = document.getElementById('userAuthDropdown');
  const dropdownAuthLink = document.getElementById('dropdownAuthLink');
  const logoutBtn = document.getElementById('logoutBtn');

  function updateAuthHeader() {
    const rawUser = localStorage.getItem('mr_current_user');
    if (!rawUser) {
      if (userAuthText) userAuthText.textContent = 'Sign In';
      if (dropdownAuthLink) {
        dropdownAuthLink.textContent = 'Sign In / Register';
        dropdownAuthLink.href = 'auth.html';
      }
      if (logoutBtn) logoutBtn.style.display = 'none';
      return;
    }

    try {
      const user = JSON.parse(rawUser);
      const firstName = user.name ? user.name.split(' ')[0] : 'Profile';
      if (userAuthText) userAuthText.textContent = `Hi, ${firstName} ▾`;
      if (dropdownAuthLink) {
        dropdownAuthLink.textContent = `Skin: ${user.skinType || 'Custom'}`;
        dropdownAuthLink.href = 'auth.html';
      }
      if (logoutBtn) logoutBtn.style.display = 'block';
    } catch (e) {
      console.error(e);
    }
  }

  updateAuthHeader();

  if (userAuthPill) {
    userAuthPill.addEventListener('click', (e) => {
      e.stopPropagation();
      const rawUser = localStorage.getItem('mr_current_user');
      if (!rawUser && !e.target.closest('.user-auth-dropdown')) {
        window.location.href = 'auth.html';
        return;
      }
      if (userAuthDropdown) {
        userAuthDropdown.classList.toggle('show');
      }
    });
  }

  if (logoutBtn) {
    logoutBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      localStorage.removeItem('mr_current_user');
      if (window.firebase && typeof firebase.auth === 'function') {
        try { firebase.auth().signOut(); } catch (err) { console.warn(err); }
      }
      updateAuthHeader();
      if (userAuthDropdown) userAuthDropdown.classList.remove('show');
      showToast('Signed out of routine session', '👋');
    });
  }

  document.addEventListener('click', () => {
    if (userAuthDropdown) userAuthDropdown.classList.remove('show');
  });

  // --- 3. FACE USER WELCOME POPUP CONTROLLER ---
  const faceWelcomeModal = document.getElementById('faceWelcomeModal');
  const closeFaceWelcome = document.getElementById('closeFaceWelcome');
  const dismissWelcomeBtn = document.getElementById('dismissWelcomeBtn');
  const replayWelcomeBtn = document.getElementById('replayWelcomeBtn');

  function openFaceWelcome() {
    if (!faceWelcomeModal) return;
    faceWelcomeModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeFaceWelcomePopup() {
    if (!faceWelcomeModal) return;
    faceWelcomeModal.classList.remove('open');
    document.body.style.overflow = '';
    sessionStorage.setItem('mr_welcome_dismissed', 'true');
  }

  // Show on first visit
  const welcomeDismissed = sessionStorage.getItem('mr_welcome_dismissed');
  if (!welcomeDismissed && faceWelcomeModal) {
    setTimeout(openFaceWelcome, 900);
  }

  if (closeFaceWelcome) closeFaceWelcome.addEventListener('click', closeFaceWelcomePopup);
  if (dismissWelcomeBtn) dismissWelcomeBtn.addEventListener('click', closeFaceWelcomePopup);
  if (faceWelcomeModal) {
    faceWelcomeModal.addEventListener('click', (e) => {
      if (e.target === faceWelcomeModal) closeFaceWelcomePopup();
    });
  }

  if (replayWelcomeBtn) {
    replayWelcomeBtn.addEventListener('click', openFaceWelcome);
  }

  // --- 4. DUAL THEME CONTROLLER (Dark / Light) ---
  const htmlRoot = document.documentElement;
  const themeToggle = document.getElementById('themeToggle');
  const storedTheme = localStorage.getItem('mr_theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  const initialTheme = storedTheme ? storedTheme : systemPrefersDark ? 'dark' : 'light';
  applyTheme(initialTheme);

  function applyTheme(theme) {
    if (theme === 'dark') {
      htmlRoot.setAttribute('data-theme', 'dark');
      document.body.classList.add('dark-mode');
      if (themeToggle) themeToggle.setAttribute('aria-label', 'Switch to light mode');
      // Apply saved dark palette
      const darkKey = localStorage.getItem('mr_dark_palette') || 'obsidian-rose';
      const palette = DARK_PALETTES[darkKey];
      if (palette) _injectDarkPalette(palette);
    } else {
      htmlRoot.setAttribute('data-theme', 'light');
      document.body.classList.remove('dark-mode');
      if (themeToggle) themeToggle.setAttribute('aria-label', 'Switch to dark mode');
      // Restore saved light accent (clear inline overrides so CSS vars take over)
      htmlRoot.style.removeProperty('--bg-base');
      htmlRoot.style.removeProperty('--bg-gradient');
      htmlRoot.style.removeProperty('--glass-bg');
      htmlRoot.style.removeProperty('--glass-bg-hover');
      htmlRoot.style.removeProperty('--glass-card');
      htmlRoot.style.removeProperty('--glass-card-hover');
      htmlRoot.style.removeProperty('--glass-border');
      htmlRoot.style.removeProperty('--secondary');
      htmlRoot.style.removeProperty('--accent-blush');
      htmlRoot.style.removeProperty('--shadow-glow');
      // Re-apply saved light accent colour if any
      const lightColor = localStorage.getItem('mr_light_accent');
      if (lightColor) applyStorefrontThemeColor(lightColor);
      // Reset orbs
      const orb1 = document.querySelector('.ambient-orb-1');
      const orb2 = document.querySelector('.ambient-orb-2');
      const orb3 = document.querySelector('.ambient-orb-3');
      if (orb1) orb1.style.background = '';
      if (orb2) orb2.style.background = '';
    }
  }

  // Expose for external and scheduler usage
  window.applyThemeGlobal = applyTheme;

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = htmlRoot.getAttribute('data-theme') || 'light';
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      applyTheme(newTheme);
      localStorage.setItem('mr_theme', newTheme);
      const darkKey = localStorage.getItem('mr_dark_palette') || 'obsidian-rose';
      const darkLabel = (DARK_PALETTES[darkKey] || {}).label || 'Dark Mode';
      showToast(
        newTheme === 'dark' ? `${darkLabel} activated` : 'Pastel Mode restored',
        newTheme === 'dark' ? '🌙' : '☀️'
      );
    });
  }

  // --- 5. TOAST NOTIFICATION SYSTEM ---
  const toastContainer = document.getElementById('toastContainer');

  function showToast(message, icon = '✓') {
    if (!toastContainer) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span class="toast-icon">${icon}</span><span>${message}</span>`;
    toastContainer.appendChild(toast);

    requestAnimationFrame(() => {
      toast.classList.add('show');
    });

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => {
        toast.remove();
      }, 300);
    }, 2800);
  }

  // Expose globally for Firebase inline script
  window.showToast = showToast;

  // --- 6. INTERACTIVE CARD CLICK GLOW-UP & NAVIGATION ---
  const allCards = document.querySelectorAll('.product-card');

  allCards.forEach((card) => {
    card.addEventListener('click', (e) => {
      // Don't navigate if clicking a specific button (cart, wishlist, quick-view)
      if (
        e.target.closest('.card-add-cart-btn') ||
        e.target.closest('.card-wishlist-btn') ||
        e.target.closest('.card-quick-view-btn')
      ) {
        return;
      }

      // Add intense glow-up
      allCards.forEach(c => c.classList.remove('card-glow-active'));
      card.classList.add('card-glow-active');

      const id = card.dataset.id || '1';
      // Navigate to dedicated product detail page
      window.location.href = `product.html?id=${id}`;
    });
  });

  // --- 7. SHOPPING CART & BUNDLE BUILDER ---
  const cartDrawer = document.getElementById('cartDrawer');
  const cartBackdrop = document.getElementById('cartBackdrop');
  const cartToggle = document.getElementById('cartToggle');
  const closeCart = document.getElementById('closeCart');
  const cartItems = document.getElementById('cartItems');
  const cartCount = document.getElementById('cartCount');
  const subtotalValue = document.getElementById('subtotalValue');
  const checkoutTotal = document.getElementById('checkoutTotal');
  const checkoutBtn = document.getElementById('checkoutBtn');
  const shippingGoalText = document.getElementById('shippingGoalText');
  const shippingGoalPercent = document.getElementById('shippingGoalPercent');
  const shippingProgressFill = document.getElementById('shippingProgressFill');
  const addBundleBtn = document.getElementById('addBundleBtn');

  let cart = [
    {
      id: '1',
      name: 'Faerie Dew™ Barrier Face Cream',
      price: 42,
      image: 'photo_2026-09-09_17-33-58.jpg',
      size: '30ml',
      quantity: 1
    }
  ];

  function openCart() {
    if (cartDrawer && cartBackdrop) {
      cartDrawer.classList.add('open');
      cartBackdrop.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeCartDrawer() {
    if (cartDrawer && cartBackdrop) {
      cartDrawer.classList.remove('open');
      cartBackdrop.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  if (cartToggle) cartToggle.addEventListener('click', openCart);
  if (closeCart) closeCart.addEventListener('click', closeCartDrawer);
  if (cartBackdrop) cartBackdrop.addEventListener('click', closeCartDrawer);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeCartDrawer();
      if (typeof closeModal === 'function') closeModal();
    }
  });

  function updateCartBadge() {
    if (!cartCount) return;
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalCount;
    cartCount.classList.remove('bump');
    void cartCount.offsetWidth;
    cartCount.classList.add('bump');
  }

  function updateShippingProgress(total) {
    const freeShippingGoal = 60.0;
    if (!shippingGoalText || !shippingGoalPercent || !shippingProgressFill) return;

    if (total >= freeShippingGoal) {
      shippingGoalText.textContent = '🎉 You unlocked Free Express Shipping!';
      shippingGoalPercent.textContent = '100%';
      shippingProgressFill.style.width = '100%';
    } else {
      const remaining = (freeShippingGoal - total).toFixed(2);
      const percent = Math.min(100, Math.round((total / freeShippingGoal) * 100));
      shippingGoalText.textContent = `Add $${remaining} more for Free Shipping!`;
      shippingGoalPercent.textContent = `${percent}%`;
      shippingProgressFill.style.width = `${percent}%`;
    }
  }

  function renderCart() {
    if (!cartItems) return;

    if (cart.length === 0) {
      cartItems.innerHTML = `
        <div class="empty-cart-state">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
          </svg>
          <strong>Your routine bag is empty</strong>
          <small>Explore our botanical routine steps to restore your skin barrier.</small>
          <a href="index.html#catalog" class="btn-primary" onclick="document.getElementById('closeCart')?.click();" style="margin-top: 14px; font-size: 0.85rem; padding: 8px 18px;">
            Shop Formulations
          </a>
        </div>
      `;
      if (subtotalValue) subtotalValue.textContent = '$0.00';
      if (checkoutTotal) checkoutTotal.textContent = '$0.00';
      updateShippingProgress(0);
      updateCartBadge();
      return;
    }

    cartItems.innerHTML = cart
      .map(
        (item) => `
        <div class="cart-item-card" data-id="${item.id}">
          <img src="${item.image}" alt="${item.name}" class="cart-item-img" />
          <div class="cart-item-info">
            <h4 class="cart-item-name">${item.name}</h4>
            <span class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</span>
            <div class="cart-item-controls">
              <button class="qty-btn qty-minus" data-id="${item.id}" type="button" aria-label="Decrease quantity">−</button>
              <span class="qty-number">${item.quantity}</span>
              <button class="qty-btn qty-plus" data-id="${item.id}" type="button" aria-label="Increase quantity">+</button>
            </div>
          </div>
          <button class="cart-item-remove-btn" data-id="${item.id}" type="button" aria-label="Remove item">✕</button>
        </div>
      `
      )
      .join('');

    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const formattedSubtotal = `$${subtotal.toFixed(2)}`;

    if (subtotalValue) subtotalValue.textContent = formattedSubtotal;
    if (checkoutTotal) checkoutTotal.textContent = formattedSubtotal;

    updateShippingProgress(subtotal);
    updateCartBadge();

    // Event listeners for cart controls
    cartItems.querySelectorAll('.qty-plus').forEach((btn) => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        const item = cart.find((i) => i.id === id);
        if (item) {
          item.quantity += 1;
          renderCart();
        }
      });
    });

    cartItems.querySelectorAll('.qty-minus').forEach((btn) => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        const index = cart.findIndex((i) => i.id === id);
        if (index > -1) {
          if (cart[index].quantity > 1) {
            cart[index].quantity -= 1;
          } else {
            cart.splice(index, 1);
            showToast('Item removed from routine bag', '✕');
          }
          renderCart();
        }
      });
    });

    cartItems.querySelectorAll('.cart-item-remove-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        cart = cart.filter((i) => i.id !== id);
        renderCart();
        showToast('Item removed from routine bag', '✕');
      });
    });
  }

  function addToCart(product, qty = 1) {
    const existing = cart.find((i) => i.id === product.id || i.name === product.name);
    if (existing) {
      existing.quantity += qty;
    } else {
      cart.push({
        id: product.id || String(Date.now()),
        name: product.name,
        price: Number(product.price),
        image: product.image,
        size: product.size || '30ml',
        quantity: qty
      });
    }
    renderCart();
    openCart();
    showToast(`Added ${product.name} to routine bag!`, '🛍️');
  }

  // --- 8. HELLO BUBBLE 3-STEP BUNDLE BUILDER ACTION ---
  if (addBundleBtn) {
    addBundleBtn.addEventListener('click', () => {
      const bundleItem = {
        id: 'bundle-3step',
        name: 'Complete 3-Step Barrier Routine Set (Vita Sea + Vitamin C + Faerie Dew)',
        price: 107,
        image: 'photo_2026-09-09_17-33-58.jpg',
        size: '3-Piece Set',
        quantity: 1
      };
      addToCart(bundleItem);
      showToast('🎉 Complete 3-Step Routine Added! You saved $19.00!', '✨');
    });
  }

  // Card Add Buttons
  document.querySelectorAll('.card-add-cart-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const card = btn.closest('.product-card');
      if (!card) return;

      const product = {
        id: card.dataset.id,
        name: card.dataset.name,
        price: card.dataset.price,
        image: card.dataset.image,
        size: card.dataset.size
      };
      addToCart(product);
    });
  });

  // Gallery quick adds
  document.querySelectorAll('.gallery-tile-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const tile = btn.closest('.gallery-tile');
      if (!tile) return;
      const product = {
        id: 'gal-' + Date.now(),
        name: tile.dataset.name || 'Botanical Formulation',
        price: Number(tile.dataset.price || 32),
        image: tile.style.backgroundImage.replace(/url\(['"]?(.*?)['"]?\)/i, '$1') || 'photo_2026-09-09_17-33-58.jpg',
        size: 'Full Size'
      };
      addToCart(product);
    });
  });

  // Wishlist buttons
  document.querySelectorAll('.card-wishlist-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      btn.classList.toggle('active');
      const isSaved = btn.classList.contains('active');
      const card = btn.closest('.product-card');
      const name = card?.dataset.name || 'Formulation';
      showToast(isSaved ? `Saved ${name} to routine wishlist` : `Removed from wishlist`, isSaved ? '❤️' : '🤍');
    });
  });

  // Checkout button
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      if (cart.length === 0) {
        showToast('Your routine bag is empty!', '⚠️');
        return;
      }
      showToast('Redirecting to secure checkout...', '🔒');
      setTimeout(() => {
        alert('Thank you for choosing Memory Rehab! Checkout integration is ready for payment gateway.');
      }, 500);
    });
  }

  // Routine Filter Tabs
  const filterTabs = document.querySelectorAll('.filter-tab-btn');
  const productCards = document.querySelectorAll('.product-card');

  filterTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      filterTabs.forEach((t) => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      const filter = tab.getAttribute('data-filter');
      applyProductFilter(filter);
    });
  });

  function applyProductFilter(category) {
    productCards.forEach((card) => {
      const cardCategory = card.getAttribute('data-category');
      if (category === 'all' || cardCategory === category) {
        card.style.display = 'flex';
        card.style.opacity = '0';
        card.style.transform = 'translateY(15px)';
        requestAnimationFrame(() => {
          card.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        });
      } else {
        card.style.display = 'none';
      }
    });
  }

  // --- 9. QUICK VIEW MODAL (ON INDEX.HTML) ---
  const quickViewModal = document.getElementById('quickViewModal');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const modalImg = document.getElementById('modalImg');
  const modalCategoryTag = document.getElementById('modalCategoryTag');
  const modalTitle = document.getElementById('modalTitle');
  const modalPrice = document.getElementById('modalPrice');
  const modalRating = document.getElementById('modalRating');
  const modalDescription = document.getElementById('modalDescription');
  const modalIngredients = document.getElementById('modalIngredients');
  const modalAddCartBtn = document.getElementById('modalAddCartBtn');
  const modalViewFullBtn = document.getElementById('modalViewFullBtn');

  let activeModalProduct = null;

  function openQuickView(card) {
    if (!quickViewModal || !card) return;

    activeModalProduct = {
      id: card.dataset.id,
      name: card.dataset.name,
      price: card.dataset.price,
      image: card.dataset.image,
      size: card.dataset.size,
      rating: card.dataset.rating,
      reviews: card.dataset.reviews,
      description: card.dataset.description,
      ingredients: card.dataset.ingredients,
      step: card.dataset.step
    };

    if (modalImg) modalImg.src = activeModalProduct.image;
    if (modalCategoryTag) modalCategoryTag.textContent = `${activeModalProduct.step || 'ROUTINE'} • ${activeModalProduct.size}`;
    if (modalTitle) modalTitle.textContent = activeModalProduct.name;
    if (modalPrice) modalPrice.textContent = `$${Number(activeModalProduct.price).toFixed(2)}`;
    if (modalRating) modalRating.textContent = `★★★★★ ${activeModalProduct.rating} (${activeModalProduct.reviews} reviews)`;
    if (modalDescription) modalDescription.textContent = activeModalProduct.description;

    if (modalIngredients && activeModalProduct.ingredients) {
      modalIngredients.innerHTML = activeModalProduct.ingredients
        .split(',')
        .map((ing) => `<span class="ingredient-chip">${ing.trim()}</span>`)
        .join('');
    }

    if (modalViewFullBtn) {
      modalViewFullBtn.href = `product.html?id=${activeModalProduct.id}`;
    }

    quickViewModal.classList.add('open');
    quickViewModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (quickViewModal) {
      quickViewModal.classList.remove('open');
      quickViewModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  }

  if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
  if (quickViewModal) {
    quickViewModal.addEventListener('click', (e) => {
      if (e.target === quickViewModal) closeModal();
    });
  }

  document.querySelectorAll('.card-quick-view-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const card = btn.closest('.product-card');
      if (card) openQuickView(card);
    });
  });

  if (modalAddCartBtn) {
    modalAddCartBtn.addEventListener('click', () => {
      if (activeModalProduct) {
        addToCart(activeModalProduct);
        closeModal();
      }
    });
  }

  // --- 10. PRODUCT DETAIL PAGE LOADER (product.html) ---
  window.loadProductDetailPage = function () {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id') || '1';
    const prod = MEMORY_REHAB_CATALOG[productId] || MEMORY_REHAB_CATALOG['1'];

    // Title and Breadcrumbs
    const pageTitle = document.getElementById('pageTitle');
    if (pageTitle) pageTitle.textContent = `${prod.name} | Memory Rehab Lab`;
    const pdpBreadcrumbCurrent = document.getElementById('pdpBreadcrumbCurrent');
    if (pdpBreadcrumbCurrent) pdpBreadcrumbCurrent.textContent = prod.name;

    // Hero details
    const pdpMainImg = document.getElementById('pdpMainImg');
    if (pdpMainImg) pdpMainImg.src = prod.image;
    const pdpStepBadge = document.getElementById('pdpStepBadge');
    if (pdpStepBadge) pdpStepBadge.textContent = prod.step;
    const pdpSkinType = document.getElementById('pdpSkinType');
    if (pdpSkinType) pdpSkinType.textContent = prod.skinType;
    const pdpTitle = document.getElementById('pdpTitle');
    if (pdpTitle) pdpTitle.textContent = prod.name;
    const pdpRatingNum = document.getElementById('pdpRatingNum');
    if (pdpRatingNum) pdpRatingNum.textContent = prod.rating;
    const pdpReviewCount = document.getElementById('pdpReviewCount');
    if (pdpReviewCount) pdpReviewCount.textContent = `(${prod.reviews} verified customer reviews)`;
    const pdpPrice = document.getElementById('pdpPrice');
    if (pdpPrice) pdpPrice.textContent = `$${prod.price.toFixed(2)}`;
    const pdpOrigPrice = document.getElementById('pdpOrigPrice');
    if (pdpOrigPrice) pdpOrigPrice.textContent = `$${prod.originalPrice.toFixed(2)}`;
    const pdpDescription = document.getElementById('pdpDescription');
    if (pdpDescription) pdpDescription.textContent = prod.summary;

    const pdpIngredientChips = document.getElementById('pdpIngredientChips');
    if (pdpIngredientChips && prod.ingredients) {
      pdpIngredientChips.innerHTML = prod.ingredients
        .map(ing => `<span class="ingredient-chip">${ing}</span>`)
        .join('');
    }

    // Clinical Metrics
    if (prod.clinical && prod.clinical.length >= 3) {
      const m1V = document.getElementById('metric1Val');
      const m1D = document.getElementById('metric1Desc');
      if (m1V) m1V.textContent = prod.clinical[0].val;
      if (m1D) m1D.textContent = prod.clinical[0].desc;

      const m2V = document.getElementById('metric2Val');
      const m2D = document.getElementById('metric2Desc');
      if (m2V) m2V.textContent = prod.clinical[1].val;
      if (m2D) m2D.textContent = prod.clinical[1].desc;

      const m3V = document.getElementById('metric3Val');
      const m3D = document.getElementById('metric3Desc');
      if (m3V) m3V.textContent = prod.clinical[2].val;
      if (m3D) m3D.textContent = prod.clinical[2].desc;
    }

    // Actives Grid
    const pdpActivesGrid = document.getElementById('pdpActivesGrid');
    if (pdpActivesGrid && prod.actives) {
      pdpActivesGrid.innerHTML = prod.actives
        .map(
          a => `
        <div class="pdp-active-glass-card">
          <div class="pdp-active-icon">${a.icon}</div>
          <h4>${a.name}</h4>
          <p>${a.desc}</p>
        </div>
      `
        )
        .join('');
    }

    // INCI formula
    const pdpInciText = document.getElementById('pdpInciText');
    if (pdpInciText && prod.inci) {
      pdpInciText.textContent = prod.inci;
    }

    // Reviews list
    const pdpReviewsList = document.getElementById('pdpReviewsList');
    if (pdpReviewsList && prod.reviewsList) {
      pdpReviewsList.innerHTML = prod.reviewsList
        .map(
          r => `
        <div class="pdp-review-card">
          <div class="pdp-review-header">
            <span class="pdp-reviewer-name">${r.name}</span>
            <span class="verified-buyer-badge">✓ Verified Buyer (${r.type})</span>
          </div>
          <div class="stars" style="color: var(--accent-gold); font-size: 0.85rem;">★★★★★</div>
          <p class="pdp-review-body">${r.body}</p>
        </div>
      `
        )
        .join('');
    }

    // PDP Quantity Stepper and Add to Bag
    let pdpQty = 1;
    const pdpQtyVal = document.getElementById('pdpQtyVal');
    const pdpQtyMinus = document.getElementById('pdpQtyMinus');
    const pdpQtyPlus = document.getElementById('pdpQtyPlus');
    const pdpBtnPrice = document.getElementById('pdpBtnPrice');
    const pdpAddBagBtn = document.getElementById('pdpAddBagBtn');

    function updatePdpPrice() {
      if (pdpQtyVal) pdpQtyVal.textContent = pdpQty;
      if (pdpBtnPrice) pdpBtnPrice.textContent = `$${(prod.price * pdpQty).toFixed(2)}`;
    }

    pdpQtyMinus?.addEventListener('click', () => {
      if (pdpQty > 1) {
        pdpQty -= 1;
        updatePdpPrice();
      }
    });

    pdpQtyPlus?.addEventListener('click', () => {
      pdpQty += 1;
      updatePdpPrice();
    });

    pdpAddBagBtn?.addEventListener('click', () => {
      addToCart(prod, pdpQty);
    });
  };

  // --- 11. REAL-TIME CLOUD STORE SYNC (Firebase Firestore) ---
  function initLiveCloudSync() {
    const firebaseConfig = {
      apiKey: "AIzaSyDC4eeTzJlyoRjgDM6HCDsuI7OPH-r_hx0",
      authDomain: "memory-rehab.firebaseapp.com",
      projectId: "memory-rehab",
      storageBucket: "memory-rehab.firebasestorage.app",
      messagingSenderId: "447945885806",
      appId: "1:447945885806:web:6b1e08da09c102671d3e7f"
    };

    if (typeof firebase !== 'undefined' && firebase.initializeApp && (!firebase.apps || !firebase.apps.length)) {
      try {
        firebase.initializeApp(firebaseConfig);
      } catch (e) {}
    }

    if (typeof firebase === 'undefined' || typeof firebase.firestore !== 'function') return;

    try {
      const db = firebase.firestore();

      // Listen to store announcements & promos + theme colours
      db.collection('store_settings').doc('general').onSnapshot((doc) => {
        if (doc.exists) {
          const settings = doc.data();
          if (settings.announcement) {
            const marqueeTracks = document.querySelectorAll('.marquee-track');
            marqueeTracks.forEach((track) => {
              const items = track.querySelectorAll('.marquee-item');
              if (items.length > 0) {
                items[0].innerHTML = `<span class="badge-dot"></span> ${settings.announcement}`;
              }
            });
          }
          if (settings.promoCode) {
            document.querySelectorAll('.face-welcome-code').forEach((el) => {
              el.textContent = settings.promoCode;
            });
          }
          // ── Apply light mode accent colour ──
          if (settings.themeAccentColor) {
            applyStorefrontThemeColor(settings.themeAccentColor);
          }
          // ── Apply dark mode palette ──
          if (settings.darkTheme) {
            applyDarkThemePalette(settings.darkTheme);
          }
          // ── Sync Auto-Theme Scheduler Settings ──
          if (settings.autoThemeEnabled !== undefined) {
            initAutoThemeScheduler({
              enabled: !!settings.autoThemeEnabled,
              interval: settings.autoThemeInterval || 30,
              mode: settings.autoThemeMode || 'adaptive',
              smooth: settings.autoThemeSmooth !== false
            });
          }
        }
      }, (err) => console.warn('Store settings sync:', err.message));

      // Listen to live product price & title changes
      db.collection('products').onSnapshot((snapshot) => {
        if (snapshot.empty) return;

        snapshot.forEach((doc) => {
          const id = doc.id;
          const liveData = doc.data();

          // Update in-memory catalog
          if (MEMORY_REHAB_CATALOG[id]) {
            if (liveData.price !== undefined) MEMORY_REHAB_CATALOG[id].price = parseFloat(liveData.price);
            if (liveData.originalPrice !== undefined) MEMORY_REHAB_CATALOG[id].originalPrice = parseFloat(liveData.originalPrice);
            if (liveData.name) MEMORY_REHAB_CATALOG[id].name = liveData.name;
            if (liveData.badge) MEMORY_REHAB_CATALOG[id].badge = liveData.badge;
          }

          // Update storefront cards on index.html
          const card = document.querySelector(`.product-card[data-id="${id}"]`);
          if (card) {
            if (liveData.price !== undefined) {
              const curPriceEl = card.querySelector('.current-price');
              if (curPriceEl) curPriceEl.textContent = `$${parseFloat(liveData.price).toFixed(2)}`;
            }
            if (liveData.originalPrice !== undefined) {
              const origPriceEl = card.querySelector('.original-price');
              if (origPriceEl) origPriceEl.textContent = `$${parseFloat(liveData.originalPrice).toFixed(2)}`;
            }
            if (liveData.name) {
              const titleEl = card.querySelector('.card-title');
              if (titleEl) titleEl.textContent = liveData.name;
            }
          }
        });
      }, (err) => console.warn('Product live sync:', err.message));
    } catch (err) {
      console.warn('Live Cloud Sync setup:', err.message);
    }
  }

  // Check locally cached auto-theme config on load
  try {
    const cachedCfg = localStorage.getItem('mr_autotheme_config');
    if (cachedCfg) {
      initAutoThemeScheduler(JSON.parse(cachedCfg));
    }
  } catch(e) {}

  initLiveCloudSync();

  // Initialize cart on load
  renderCart();
});

