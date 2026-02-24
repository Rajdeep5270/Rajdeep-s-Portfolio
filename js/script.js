
// --- Dark Mode Logic ---
const themeToggle = document.getElementById('theme-toggle');
const themeToggleMobile = document.getElementById('theme-toggle-mobile');
const themeIcon = document.getElementById('theme-icon');

function toggleTheme() {
    document.documentElement.classList.toggle('dark');
    const isDark = document.documentElement.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    themeIcon.innerText = isDark ? '☀️' : '🌙';
    themeToggleMobile.innerText = isDark ? '☀️' : '🌙';
}

// Initialize Theme
if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
    themeIcon.innerText = '☀️';
    themeToggleMobile.innerText = '☀️';
}

themeToggle.addEventListener('click', toggleTheme);
themeToggleMobile.addEventListener('click', toggleTheme);

const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');
const line1 = document.getElementById('line1');
const line2 = document.getElementById('line2');
const line3 = document.getElementById('line3');

let isMenuOpen = false;

menuBtn.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen;

    if (isMenuOpen) {
        // Menu Open: Translate in and fade in
        mobileMenu.classList.remove('translate-x-full', 'opacity-0', 'pointer-events-none');

        // Icon Animation (To X)
        line1.classList.add('rotate-45', 'translate-y-0');
        line1.classList.remove('-translate-y-1.5');
        line2.classList.add('opacity-0');
        line3.classList.add('-rotate-45', 'translate-y-0');
        line3.classList.remove('translate-y-1.5');

        // Links Animation (Staggered fade up)
        mobileLinks.forEach(link => {
            link.classList.remove('opacity-0', 'translate-y-4');
        });

        document.body.style.overflow = 'hidden'; // Stop scrolling
    } else {
        closeMenu();
    }
});

function closeMenu() {
    isMenuOpen = false;

    mobileMenu.classList.add('translate-x-full', 'opacity-0', 'pointer-events-none');

    // Reset ALL transforms first
    line1.classList.remove('rotate-45', 'translate-y-0');
    line3.classList.remove('-rotate-45', 'translate-y-0');

    // Restore original positions
    line1.classList.add('-translate-y-1.5');
    line2.classList.remove('opacity-0');
    line3.classList.add('translate-y-1.5');

    mobileLinks.forEach(link => {
        link.classList.add('opacity-0', 'translate-y-4');
    });

    document.body.style.overflow = 'auto';
}


// Close menu when clicking a link
mobileLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
});

// --- Sticky Navbar Effect ---
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) {
        nav.classList.add('bg-white/80', 'dark:bg-slate-900/80', 'backdrop-blur-md', 'shadow-md', 'py-2');
        nav.classList.remove('py-4');
    } else {
        nav.classList.remove('bg-white/80', 'dark:bg-slate-900/80', 'backdrop-blur-md', 'shadow-md', 'py-2');
        nav.classList.add('py-4');
    }
});

// --- Scroll Reveal Animation ---
const observerOptions = { threshold: 0.1 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

