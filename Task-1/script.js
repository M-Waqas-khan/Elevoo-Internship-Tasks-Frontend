// Grab the sidebar and toggle button elements
const sidebar = document.getElementById('sidebar');
const toggleBtn = document.getElementById('toggle-btn');

// Add event listener to toggle button
toggleBtn.addEventListener('click', () => {
    // Check if sidebar is currently closed or open
    if (sidebar.style.left === "-250px") {
        // If closed, open it by setting left to 0
        sidebar.style.left = "0";
    } else {
        // If open, close it by moving it off-screen
        sidebar.style.left = "-250px";
    }
});
