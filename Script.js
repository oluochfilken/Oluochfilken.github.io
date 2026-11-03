// Select the contact form
const contactForm = document.getElementById("contactForm");

// Select the message area
const formMessage = document.getElementById("formMessage");

// Listen for form submission
if (contactForm) {
    contactForm.addEventListener("submit", function(event) {

        // Prevent the page from refreshing
        event.preventDefault();

        // Get the user's name
        const name = document.getElementById("name").value;

        // Display a success message
        formMessage.textContent =
            `Thank you, ${name}! Your message has been received in this demo.`;

        // Clear the form
        contactForm.reset();
    });
                                 }
