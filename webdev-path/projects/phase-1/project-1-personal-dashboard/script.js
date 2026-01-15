// This logs a message to the browser console (Press F12 to see it!)
console.log("Dashboard loaded successfully! 🚀");

// Simple interaction: Display the current date
function updateDate() {
    const dateDisplay = document.getElementById('date-display');
    const now = new Date();

    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };

    dateDisplay.textContent = now.toLocaleDateString('en-US', options);
}

// Run the function when the page loads
updateDate();

// Add a click effect to lists
const listItems = document.querySelectorAll('#goals-list li');

listItems.forEach(item => {
    item.addEventListener('click', () => {
        // Toggle a 'completed' look when clicked
        if (item.style.textDecoration === 'line-through') {
            item.style.textDecoration = 'none';
            item.style.color = 'inherit';
        } else {
            item.style.textDecoration = 'line-through';
            item.style.color = '#888';
        }
    });
});
