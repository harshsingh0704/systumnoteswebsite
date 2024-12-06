// Search functionality
function searchNotes() {
    const query = document.getElementById('searchBar').value.toLowerCase();
    const notes = document.querySelectorAll('.note');
    const sections = document.querySelectorAll('section');

    let hasResults = false;

    notes.forEach(note => {
        const text = note.textContent.toLowerCase();
        if (text.includes(query)) {
            note.closest('li').style.display = ''; // Show matching notes
            hasResults = true;
        } else {
            note.closest('li').style.display = 'none'; // Hide non-matching notes
        }
    });

    sections.forEach(section => {
        const hasVisibleNotes = Array.from(section.querySelectorAll('.note'))
            .some(note => note.closest('li').style.display !== 'none');
        section.style.display = hasVisibleNotes ? '' : 'none';
    });

    const noResultsMsg = document.getElementById('noResults');
    if (!hasResults && query) {
        if (!noResultsMsg) {
            const msg = document.createElement('div');
            msg.id = 'noResults';
            msg.className = 'alert alert-danger text-center';
            msg.textContent = 'No matching notes found.';
            document.querySelector('main').appendChild(msg);
        }
    } else if (noResultsMsg) {
        noResultsMsg.remove();
    }
}
