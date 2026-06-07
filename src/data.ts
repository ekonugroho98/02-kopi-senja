export interface NavLink { label: string; href: string; }
export interface Stat { value: string; label: string; }
export interface FeaturePoint { icon: string; title: string; desc: string; }
export interface Service { icon: string; name: string; desc: string; price?: string; }
export interface Plan { name: string; price: string; unit?: string; desc: string; features: string[]; featured?: boolean; cta?: string; }
export interface GalleryImage { url: string; alt: string; }
export interface Testimonial { name: string; role: string; quote: string; rating: number; avatar?: string; }
export interface SiteData {
  brand: string; logoMark: string; tagline: string; whatsapp: string; phone: string; email: string; address: string; hours: string;
  social: { instagram?: string; facebook?: string; tiktok?: string };
  nav: NavLink[];
  hero: { eyebrow: string; title: string; highlight: string; subtitle: string; ctaPrimary: string; ctaSecondary: string; image: string; stats: Stat[] };
  about: { eyebrow: string; title: string; paragraphs: string[]; points: FeaturePoint[]; image: string };
  services: { eyebrow: string; title: string; subtitle: string; items: Service[] };
  pricing: { eyebrow: string; title: string; subtitle: string; plans: Plan[] };
  gallery: { eyebrow: string; title: string; subtitle: string; images: GalleryImage[] };
  testimonials: { eyebrow: string; title: string; subtitle: string; items: Testimonial[] };
  contact: { eyebrow: string; title: string; subtitle: string };
}

export const site: SiteData = {
  brand: 'Kopi Senja',
  logoMark: 'KS',
  tagline: 'Coffee shop artisan & ruang nyaman untuk kerja',
  whatsapp: '6281234567802',
  phone: '0812-3456-7802',
  email: 'halo@kopisenja.id',
  address: 'Jl. Pajajaran No. 88, Bogor, Jawa Barat',
  hours: 'Senin – Minggu 08.00 – 23.00',
  social: { instagram: '@kopisenja.id', tiktok: '@kopisenja', facebook: 'Kopi Senja' },
  nav: [
    { label: 'Tentang', href: '#about' },
    { label: 'Menu', href: '#services' },
    { label: 'Paket', href: '#pricing' },
    { label: 'Galeri', href: '#gallery' },
    { label: 'Testimoni', href: '#testimonials' },
    { label: 'Kontak', href: '#contact' },
  ],
  hero: {
    eyebrow: 'Biji single-origin lokal',
    title: 'Secangkir kopi,',
    highlight: 'seribu cerita senja',
    subtitle:
      'Kopi Senja menyeduh biji pilihan dari petani Indonesia di ruang yang hangat dan nyaman. Cocok untuk nongkrong, meeting, atau kerja seharian dengan WiFi kencang.',
    ctaPrimary: 'Reservasi Tempat',
    ctaSecondary: 'Lihat Menu',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1200&auto=format&fit=crop',
    stats: [
      { value: '12+', label: 'Varian kopi' },
      { value: 'WiFi', label: 'Cepat & stabil' },
      { value: '4.8/5', label: 'Rating Google' },
    ],
  },
  about: {
    eyebrow: 'Tentang Kopi Senja',
    title: 'Tempat di mana kopi & obrolan bertemu',
    paragraphs: [
      'Berawal dari kecintaan pada kopi Nusantara, Kopi Senja hadir sebagai ruang ketiga — bukan rumah, bukan kantor, tapi tempat di mana ide dan pertemanan tumbuh ditemani secangkir kopi yang jujur.',
      'Kami bekerja sama langsung dengan petani lokal, menyangrai dalam jumlah kecil, dan menyajikan dengan barista bersertifikat agar tiap tegukan konsisten.',
    ],
    points: [
      { icon: 'coffee', title: 'Single-Origin', desc: 'Biji segar dari Gayo, Toraja, hingga Kintamani.' },
      { icon: 'leaf', title: 'Roasting Sendiri', desc: 'Disangrai small-batch tiap minggu.' },
      { icon: 'star', title: 'Barista Andal', desc: 'Tim bersertifikat untuk rasa yang konsisten.' },
      { icon: 'clock', title: 'Buka Sampai Malam', desc: 'Nyaman untuk kerja malam & nongkrong.' },
    ],
    image: 'https://images.unsplash.com/photo-1453614512568-c4024d13c247?q=80&w=1200&auto=format&fit=crop',
  },
  services: {
    eyebrow: 'Menu Favorit',
    title: 'Seduhan yang bikin balik lagi',
    subtitle: 'Dari espresso klasik sampai signature drink ala Senja.',
    items: [
      { icon: 'coffee', name: 'Espresso Based', desc: 'Latte, cappuccino, piccolo dengan susu segar.', price: 'mulai Rp22.000' },
      { icon: 'cup', name: 'Manual Brew', desc: 'V60 & tubruk single-origin pilihan hari ini.', price: 'mulai Rp28.000' },
      { icon: 'cup', name: 'Signature Senja', desc: 'Es kopi gula aren & kopi pandan khas kami.', price: 'mulai Rp25.000' },
      { icon: 'leaf', name: 'Non-Kopi', desc: 'Matcha, cokelat, dan teh untuk yang anti kafein.', price: 'mulai Rp20.000' },
      { icon: 'cake', name: 'Pastry & Cake', desc: 'Croissant, banana bread, dan cheesecake harian.', price: 'mulai Rp18.000' },
      { icon: 'utensils', name: 'Light Meal', desc: 'Rice bowl & sandwich untuk nemenin kerja.', price: 'mulai Rp32.000' },
    ],
  },
  pricing: {
    eyebrow: 'Paket & Member',
    title: 'Lebih hemat, lebih sering ngopi',
    subtitle: 'Pilihan untuk pelanggan harian sampai yang mau sewa tempat.',
    plans: [
      { name: 'Ngopi Harian', price: 'Rp22rb', unit: '/cup', desc: 'Pesan satuan di tempat', features: ['Semua menu tersedia', 'Free refill air mineral', 'WiFi gratis', 'Stop kontak di tiap meja'], cta: 'Datang Langsung' },
      { name: 'Kartu Member', price: 'Rp150rb', unit: '/bln', desc: 'Hemat untuk yang sering datang', features: ['10 kopi gratis', 'Diskon 15% semua menu', 'Prioritas reservasi', 'Akses promo member'], featured: true, cta: 'Daftar Member' },
      { name: 'Sewa Tempat', price: 'Rp750rb', unit: '/sesi', desc: 'Untuk acara & komunitas', features: ['Kapasitas 30 orang', 'Sound system & proyektor', 'Paket coffee break', 'Free dekorasi simpel'], cta: 'Tanya Jadwal' },
    ],
  },
  gallery: {
    eyebrow: 'Galeri',
    title: 'Suasana & sajian Kopi Senja',
    subtitle: 'Interior hangat, latte art rapi, dan sudut favorit untuk foto.',
    images: [
      { url: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800&auto=format&fit=crop', alt: 'Secangkir kopi latte art di atas meja kayu' },
      { url: 'https://images.unsplash.com/photo-1559496417-e7f25cb247f3?q=80&w=800&auto=format&fit=crop', alt: 'Interior coffee shop yang hangat' },
      { url: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=800&auto=format&fit=crop', alt: 'Barista menyeduh kopi manual brew' },
      { url: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800&auto=format&fit=crop', alt: 'Cappuccino dengan latte art' },
      { url: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=800&auto=format&fit=crop', alt: 'Sudut nyaman dengan rak buku' },
      { url: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=800&auto=format&fit=crop', alt: 'Cangkir kopi hitam di meja' },
    ],
  },
  testimonials: {
    eyebrow: 'Testimoni',
    title: 'Kata pelanggan setia',
    subtitle: 'Tempat favorit untuk kerja, meeting, dan melepas penat.',
    items: [
      { name: 'Rangga Wijaya', role: 'Freelancer', rating: 5, quote: 'Kopinya juara, WiFi kencang, colokan di mana-mana. Kantor kedua saya banget.' },
      { name: 'Maya Putri', role: 'Mahasiswa', rating: 5, quote: 'Es kopi gula arennya enak banget dan harganya ramah kantong. Suasananya cozy.' },
      { name: 'Bagas Santoso', role: 'Content creator', rating: 5, quote: 'Spot fotonya estetik, baristanya ramah. Selalu jadi tempat syuting konten saya.' },
    ],
  },
  contact: {
    eyebrow: 'Reservasi & Kontak',
    title: 'Mampir atau pesan tempat',
    subtitle: 'Reservasi meja, tanya menu, atau atur acara komunitas Anda lewat WhatsApp.',
  },
};
