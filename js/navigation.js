document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('a.nav-link');
    const sections = Array.from(document.querySelectorAll('section[id]')).filter(section => ['hero', 'services', 'about', 'galerie', 'contact'].includes(section.id));
    const pageHeader = document.querySelector('header');

    const updateActiveNav = () => {
        const headerHeight = pageHeader ? pageHeader.offsetHeight : 90;
        const position = window.scrollY + headerHeight + 20;
        let currentSectionId = 'hero';

        sections.forEach(section => {
            if (position >= section.offsetTop) {
                currentSectionId = section.id;
            }
        });

        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            const isActive = href === '#hero' ? currentSectionId === 'hero' : href === `#${currentSectionId}`;
            link.classList.toggle('active', isActive);
        });
    };

    updateActiveNav();
    window.addEventListener('scroll', updateActiveNav);
    window.addEventListener('hashchange', updateActiveNav);
    navLinks.forEach(link => link.addEventListener('click', () => setTimeout(updateActiveNav, 50)));

    window.addEventListener('scroll', () => {
        if (!pageHeader) return;
        if (window.scrollY > 100) {
            pageHeader.classList.add('py-2', 'shadow-lg', 'bg-surface/95');
            pageHeader.classList.remove('py-4', 'bg-surface/80');
        } else {
            pageHeader.classList.remove('py-2', 'shadow-lg', 'bg-surface/95');
            pageHeader.classList.add('py-4', 'bg-surface/80');
        }
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            const target = document.querySelector(href);
            if (!target) return;

            e.preventDefault();
            const headerOffset = pageHeader ? pageHeader.offsetHeight : 90;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === href));
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            setTimeout(updateActiveNav, 500);
        });
    });
});
