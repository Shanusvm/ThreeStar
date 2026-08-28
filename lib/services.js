/**
 * Service catalogue.
 *
 * `image` values are Unsplash placeholders so the site looks complete out of the box.
 * Swap them for real job photos: drop files in /public/images and use e.g. '/images/fencing.jpg'.
 * If a remote image ever fails to load, the card falls back to a branded navy/gold tile.
 */
export const services = [
  {
    slug: 'guttering',
    title: 'Guttering Cleaning & Repair',
    description: 'Blockages cleared, leaks sealed and downpipes flowing before the next downpour.',
    image: 'https://images.unsplash.com/photo-1634853982486-c06f0e17940f?auto=format&fit=crop&w=900&q=80',
  },
  {
    slug: 'driveway',
    title: 'Driveway Cleaning & Painting',
    description: 'High-pressure cleaning and durable coatings that lift your kerb appeal instantly.',
    image: 'https://images.unsplash.com/photo-1785088476622-8e4c52ee8b53?auto=format&fit=crop&w=900&q=80',
  },
  {
    slug: 'fencing',
    title: 'Fencing',
    description: 'New timber and Colorbond fences, repairs, gates and boundary replacements.',
    image: 'https://images.unsplash.com/photo-1722881445875-bdd5f4d9e6fa?auto=format&fit=crop&w=900&q=80',
  },
  {
    slug: 'retaining-walls',
    title: 'Retaining Walls',
    description: 'Solid, properly drained retaining walls built to hold ground and look sharp.',
    image: 'https://images.unsplash.com/photo-1694432759476-8db2bef4b334?auto=format&fit=crop&w=900&q=80',
  },
  {
    slug: 'roof-restoration',
    title: 'Roof Restoration',
    description: 'Cleaning, re-bedding, re-pointing and spray coating to add years to your roof.',
    image: 'https://images.unsplash.com/photo-1681049400158-0ff6249ac315?auto=format&fit=crop&w=900&q=80',
  },
  {
    slug: 'landscaping',
    title: 'Landscaping',
    description: 'Paths, paving, turf and garden beds designed around how you actually use the yard.',
    image: 'https://images.unsplash.com/photo-1780216200639-47d28549d04e?auto=format&fit=crop&w=900&q=80',
  },
  {
    slug: 'garden-works',
    title: 'Garden Works',
    description: 'Hedging, pruning, mulching and full clean-ups — one-off or on a regular schedule.',
    image: 'https://images.unsplash.com/photo-1734079692079-172d8243ebd3?auto=format&fit=crop&w=900&q=80',
  },
  {
    slug: 'brick-laying',
    title: 'Brick Laying',
    description: 'Feature walls, letterboxes, piers and repairs laid straight, level and clean.',
    image: 'https://images.unsplash.com/photo-1495578942200-c5f5d2137def?auto=format&fit=crop&w=900&q=80',
  },
  {
    slug: 'plastering',
    title: 'Plastering',
    description: 'Patching, sheeting and set finishes ready for paint — no ripples, no shadows.',
    image: 'https://images.unsplash.com/photo-1768839725085-829e6ac7ac26?auto=format&fit=crop&w=900&q=80',
  },
  {
    slug: 'painting',
    title: 'Painting',
    description: 'Interior and exterior painting with proper prep and premium trade paints.',
    image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=900&q=80',
  },
  {
    slug: 'garden-sheds',
    title: 'Garden Sheds',
    description: 'Slab prep, supply and assembly — your shed delivered, built and squared up.',
    image: 'https://images.unsplash.com/photo-1565203384903-2d50d5beab51?auto=format&fit=crop&w=900&q=80',
  },
  {
    slug: 'renovations',
    title: 'Renovations & Extensions',
    description: 'Small repairs through to full extensions, managed start to finish by Daniel.',
    image: 'https://images.unsplash.com/photo-1618832515490-e181c4794a45?auto=format&fit=crop&w=900&q=80',
  },
];

export const serviceNames = services.map((s) => s.title);
