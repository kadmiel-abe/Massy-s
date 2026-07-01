document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenuClose = document.getElementById('mobile-menu-close');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
    const mobileMenuLinks = mobileMenu ? mobileMenu.querySelectorAll('a[href^="#"], a[href="#"], a[href^="tel:"]') : [];

    const toggleMobileMenu = (show) => {
        if (!mobileMenu || !mobileMenuOverlay) return;

        if (show) {
            mobileMenu.classList.remove('hidden');
            mobileMenuOverlay.classList.remove('hidden');
            requestAnimationFrame(() => {
                mobileMenu.classList.remove('translate-x-full', 'opacity-0', 'pointer-events-none');
                mobileMenu.classList.add('translate-x-0', 'opacity-100', 'pointer-events-auto');
                mobileMenuOverlay.classList.remove('opacity-0', 'pointer-events-none');
                mobileMenuOverlay.classList.add('opacity-100', 'pointer-events-auto');
            });
            document.body.classList.add('overflow-hidden');
        } else {
            mobileMenu.classList.remove('translate-x-0', 'opacity-100', 'pointer-events-auto');
            mobileMenu.classList.add('translate-x-full', 'opacity-0', 'pointer-events-none');
            mobileMenuOverlay.classList.remove('opacity-100', 'pointer-events-auto');
            mobileMenuOverlay.classList.add('opacity-0', 'pointer-events-none');
            document.body.classList.remove('overflow-hidden');
            setTimeout(() => {
                mobileMenu.classList.add('hidden');
                mobileMenuOverlay.classList.add('hidden');
            }, 300);
        }

        mobileMenuButton?.setAttribute('aria-expanded', show ? 'true' : 'false');
    };

    mobileMenuButton?.addEventListener('click', () => toggleMobileMenu(true));
    mobileMenuClose?.addEventListener('click', () => toggleMobileMenu(false));
    mobileMenuOverlay?.addEventListener('click', () => toggleMobileMenu(false));
    mobileMenuLinks.forEach(link => link.addEventListener('click', () => toggleMobileMenu(false)));
});
