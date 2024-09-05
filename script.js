document.addEventListener('DOMContentLoaded', () => {
    const profileContainer = document.querySelector('.profile-container');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const overlay = document.querySelector('.overlay');
    const registrationSection = document.getElementById('registration');
    const hospitalData = {
        'Hospital A': { occupiedBeds: 30, availableBeds: 10 },
        'Hospital B': { occupiedBeds: 40, availableBeds: 20 },
        'Hospital C': { occupiedBeds: 20, availableBeds: 25 },
        'Hospital D': { occupiedBeds: 50, availableBeds: 15 },
        'Hospital E': { occupiedBeds: 25, availableBeds: 30 }
    };

    // Toggle dropdown menu on profile icon click
    profileContainer.addEventListener('click', () => {
        profileContainer.classList.toggle('active');
    });

    // Close the dropdown if the user clicks outside of it
    window.addEventListener('click', (event) => {
        if (!profileContainer.contains(event.target)) {
            profileContainer.classList.remove('active');
        }
    });

    // Show alert on form submission but allow the form to submit normally
    document.getElementById('registration-form').addEventListener('submit', function(e) {
        alert('Registration completed successfully!');
        // The form will submit normally after this alert
    });

    // Open the sidebar when the menu icon is clicked
    document.querySelector('.menu-icon').addEventListener('click', () => {
        document.querySelector('.sidebar').style.width = '250px'; // Open the sidebar
        overlay.classList.add('show'); // Show the overlay
    });

    // Close the sidebar when the close button is clicked
    document.querySelector('.closebtn').addEventListener('click', () => {
        document.querySelector('.sidebar').style.width = '0'; // Close the sidebar
        overlay.classList.remove('show'); // Hide the overlay
    });

    // Show the overlay and registration section when the register button is clicked
    document.getElementById('register').addEventListener('click', (e) => {
        overlay.classList.add('show');
        registrationSection.classList.add('hidden');
    });

    // Hide the overlay and show the registration section when the overlay is clicked
    overlay.addEventListener('click', (e) => {
        if (e.target == overlay) {
            overlay.classList.remove('show');
            registrationSection.classList.remove('hidden');
        }
    });

    // Display hospital details in the table when the submit button is clicked
    document.getElementById('submit-button').addEventListener('click', function() {
        const selectedHospital = document.getElementById('hospital-search').value;
        const tableBody = document.querySelector('#hospital-table tbody');

        // Clear existing rows
        tableBody.innerHTML = '';

        if (selectedHospital) {
            const data = hospitalData[selectedHospital];
            if (data) {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>1</td>
                    <td>${selectedHospital}</td>
                    <td>${data.occupiedBeds}</td>
                    <td>${data.availableBeds}</td>
                `;
                tableBody.appendChild(row);
            }
        }
    });
});
