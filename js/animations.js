document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Stagger fast reveals inside the services section for a snappier experience
    const fastReveals = Array.from(document.querySelectorAll('#services .reveal.fast-reveal'));
    fastReveals.forEach((el, i) => {
        // small stagger (60ms) to be quick
        el.style.transitionDelay = `${i * 60}ms`;
        revealObserver.observe(el);
    });

    // Observe the rest of reveal elements (no extra stagger)
    const otherReveals = Array.from(document.querySelectorAll('.reveal, .reveal-btn, .reveal-testimonial'))
        .filter(el => !el.classList.contains('fast-reveal'));
    otherReveals.forEach(el => revealObserver.observe(el));
});
