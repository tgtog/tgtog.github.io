const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const eyeContainers = document.querySelectorAll(".eye-container");

usernameInput.addEventListener("input", handleInput);
passwordInput.addEventListener("input", handleInput);

function handleInput(event) {
    const input = event.target;
    const eyeContainer = input.parentElement.querySelector(".eye-container");
    const eyes = eyeContainer.querySelectorAll(".eye");

    const eyeX = (input.value.length * 2) % 30;
    const eyeY = (input.value.length * 2) % 20;

    eyes.forEach(eye => {
        eye.style.transform = `translate(${eyeX}px, ${eyeY}px)`;
    });
}
