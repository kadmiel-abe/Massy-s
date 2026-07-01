document.addEventListener('DOMContentLoaded', () => {
    const bookingForm = document.getElementById('booking-form');
    if (!bookingForm) return;

    bookingForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const nom = document.getElementById('booking-name').value;
        const telephone = document.getElementById('booking-phone').value;
        const soin = document.getElementById('booking-service').value;
        const date = document.getElementById('booking-date').value;
        const message = document.getElementById('booking-message').value;

        const sujet = `Demande de réservation - ${nom}`;
        const corps =
            `Nom complet : ${nom}\n` +
            `Téléphone : ${telephone}\n` +
            `Soin souhaité : ${soin}\n` +
            `Date souhaitée : ${date}\n` +
            `Message / besoins spécifiques : ${message || 'Aucun'}`;

        const gmailLink =
            `https://mail.google.com/mail/?view=cm&fs=1&to=louarebecca@gmail.com&su=${encodeURIComponent(sujet)}&body=${encodeURIComponent(corps)}`;

        window.location.href = gmailLink;
    });
});
