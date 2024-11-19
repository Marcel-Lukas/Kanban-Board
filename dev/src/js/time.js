
function updateDateTime() {
    const now = new Date();
    const dateTimeString = now.toLocaleString('de-DE', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    });

    document.getElementById('dateTime').innerHTML = dateTimeString;
}

