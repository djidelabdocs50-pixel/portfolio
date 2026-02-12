document.addEventListener("DOMContentLoaded", function () {
    const text = "Web Developer & Cyber Security Enthusiast";
    let index = 0;
    const speed = 80;

    const typingElement = document.getElementById("typing");

    function typeEffect() {
        if (index < text.length) {
            typingElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeEffect, speed);
        }
    }

    typeEffect();
});




