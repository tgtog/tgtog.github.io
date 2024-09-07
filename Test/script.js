function moveMan() {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const manElements = document.querySelectorAll('.man');

    manElements.forEach((man) => {
        const input = man.parentNode.querySelector('input');
        const inputWidth = input.offsetWidth;
        const inputValue = input.value;
        const manWidth = man.offsetWidth;
        const movePercentage = (inputValue.length / inputWidth) * 100;

        man.style.transform = `translateX(${movePercentage}%)`;
    });
}
