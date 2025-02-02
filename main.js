document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.querySelector(".contact");
    const nameInput = contactForm.querySelector('input[type="text"]');
    const emailInput = contactForm.querySelector('input[type="email"]');
    const phoneInput = contactForm.querySelector('input[type="tel"]');
    const subjectInput = contactForm.querySelectorAll('input[type="text"]')[1];
    const messageInput = contactForm.querySelector("textarea");
    const sendButton = contactForm.querySelector(".send-btn button");
    const errorMessagesContainer = contactForm.querySelector(".error-messages");

    sendButton.addEventListener("click", function (event) {
        event.preventDefault();
        clearErrors();

        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isPhoneValid = validatePhone();
        const isSubjectValid = validateSubject();
        const isMessageValid = validateMessage();

        if (isNameValid && isEmailValid && isPhoneValid && isSubjectValid && isMessageValid) {
            showSuccess("Form submitted successfully!");
            contactForm.reset();
        }
    });

    function validateName() {
        if (nameInput.value.trim() === "") {
            showError("Please enter your name.", nameInput);
            return false;
        }
        return true;
    }

    function validateEmail() {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailInput.value.trim() === "") {
            showError("Please enter your email.", emailInput);
            return false;
        } else if (!emailPattern.test(emailInput.value.trim())) {
            showError("Please enter a valid email address.", emailInput);
            return false;
        }
        return true;
    }

    function validatePhone() {
        const phonePattern = /^\d{10}$/;
        if (phoneInput.value.trim() === "") {
            showError("Please enter your phone number.", phoneInput);
            return false;
        } else if (!phonePattern.test(phoneInput.value.trim())) {
            showError("Please enter a valid 10-digit phone number.", phoneInput);
            return false;
        }
        return true;
    }

    function validateSubject() {
        if (subjectInput.value.trim() === "") {
            showError("Please enter a subject.", subjectInput);
            return false;
        }
        return true;
    }

    function validateMessage() {
        if (messageInput.value.trim() === "") {
            showError("Please enter your message.", messageInput);
            return false;
        }
        return true;
    }

    function showError(message, inputField) {
        const errorMessage = document.createElement("p");
        errorMessage.textContent = message;
        errorMessage.style.color = "red";
        errorMessagesContainer.appendChild(errorMessage);

        if (inputField) {
            inputField.style.border = "1px solid red";
        }
    }

    function showSuccess(message) {
        const successMessage = document.createElement("p");
        successMessage.textContent = message;
        successMessage.style.color = "green";
        errorMessagesContainer.appendChild(successMessage);
    }

    function clearErrors() {
        errorMessagesContainer.innerHTML = "";
        const inputFields = [nameInput, emailInput, phoneInput, subjectInput, messageInput];
        inputFields.forEach((field) => {
            field.style.border = "";
        });
    }
});

function scrollPortfolio(direction) {
    const portfolioContent = document.querySelector(".portfolio-content");
    const portfolioInfoWidth = document.querySelector(".portfolio-info").clientWidth;
    const scrollAmount = portfolioInfoWidth + 64;

    if (direction === 1) {
        portfolioContent.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    } else if (direction === -1) {
        portfolioContent.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
}
