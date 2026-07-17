document.body.style.overflow = 'hidden';

// Populate the photo gallery. Only existing files are listed here; any that
// still 404 (e.g. removed later) remove themselves so no broken image shows.
const PHOTOS = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 23,
];
const gallery = document.getElementById('gallery');
PHOTOS.forEach((n) => {
  const img = document.createElement('img');
  img.src = `images/photo${n}.jpg`;
  img.alt = `Vitalik & Marichka photo ${n}`;
  img.loading = 'lazy';
  img.onerror = () => img.remove();
  gallery.appendChild(img);
});

// Envelope open interaction
const envelope = document.getElementById('envelope');
const envelopeScreen = document.getElementById('envelope-screen');

function openEnvelope() {
  if (envelope.classList.contains('is-open')) return;
  envelope.classList.add('is-open');
  setTimeout(() => {
    envelopeScreen.classList.add('is-hidden');
    document.body.style.overflow = '';
    document.getElementById('invitation').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 900);
}

envelope.addEventListener('click', openEnvelope);
envelope.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    openEnvelope();
  }
});

// Fade in panels on scroll
const panels = document.querySelectorAll('.panel');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

panels.forEach((panel) => observer.observe(panel));
