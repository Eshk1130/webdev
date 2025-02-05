// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
    // Shopping cart count functionality
    const cartCountElement = document.getElementById('cart-count');
    let cartCount = 0;

    // Function to update the cart count
    function updateCartCount() {
        cartCountElement.textContent = cartCount;
    }

    // Add event listeners to 'Add to Cart' buttons
    const addToCartButtons = document.querySelectorAll('.cart button');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            cartCount++;
            updateCartCount();
            alert("Product added to cart!");
        });
    });

    // Feedback form submission handling
    const feedbackForm = document.querySelector('.feedback-form form');
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent the default form submission
            const formData = new FormData(feedbackForm);
            const feedbackData = {
                name: formData.get('name'),
                email: formData.get('email'),
                message: formData.get('message'),
            };
            console.log("Feedback submitted:", feedbackData); // Replace with your submission logic

            // Reset the form after submission
            feedbackForm.reset();
            alert("Thank you for your feedback!");
        });
    }

    // Search functionality
    const searchButton = document.querySelector('#text-banner button');
    const searchInput = document.querySelector('#text-banner input');

    if (searchButton && searchInput) {
        searchButton.addEventListener('click', () => {
            const searchTerm = searchInput.value;
            if (searchTerm) {
                // You can implement search logic here, e.g., redirect to a search results page
                alert(`Searching for: ${searchTerm}`);
                // Redirect to search results page or filter products (to be implemented)
            } else {
                alert("Please enter a search term.");
            }
        });
    }
});

