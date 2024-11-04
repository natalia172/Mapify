document.getElementById('entryForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get the values from the form
    const date = document.getElementById('date').value;
    const location = document.getElementById('location').value;
    const content = document.getElementById('content').value;

    // Create a new entry element
    const entry = document.createElement('div');
    entry.classList.add('entry');

    // Set the inner HTML of the entry
    entry.innerHTML = `
        <h2>Date: ${date}</h2>
        <h3>Location: ${location}</h3>
        <div class="content">
            <h4>Reflections</h4>
            <p>${content}</p>
        </div>
        <blockquote>
            “Traveling – it leaves you speechless, then turns you into a storyteller.” – Ibn Battuta
        </blockquote>
    `;

    // Append the new entry to the entries section
    document.getElementById('entries').prepend(entry); // Add the new entry to the top

    // Clear the form
    document.getElementById('entryForm').reset();
});
