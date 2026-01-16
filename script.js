document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('incident-form');
    const list = document.getElementById('incident-list');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const desc = document.getElementById('incident-desc').value;
        const sev = document.getElementById('severity').value;

        console.log(`Logging: ${desc} with severity ${sev}`);

        // JUNIOR DEV BUG: The function to actually update the UI is missing!
        // TODO: Create a new LI element and prepend it to the list.
        // TODO: Calculate the new 'Entropy Level' based on the number of incidents.
        
        form.reset();
    });

    // TODO: Implement a function that randomly changes the 'Entropy Level' every 5 seconds.
});