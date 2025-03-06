document.addEventListener("DOMContentLoaded", function () {
    const exploreBtn = document.getElementById("exploreBtn");
    const messageBtn = document.getElementById("messageBtn");
    const memoriesSection = document.getElementById("memoriesSection");
    const messageSection = document.getElementById("messageSection");
    const imageContainer = document.getElementById("imageContainer");
    const typingMessage = document.getElementById("typingMessage");

    // Updated Image List
    const imageFiles = [
        "images/IMG-20230126-WA0006.jpg",
        "images/IMG-20231017-WA0016.jpg",
        "images/IMG-20231101-WA0031.jpg",
        "images/IMG20210815161609.jpg",
        "images/IMG20230126180443.jpg",
        "images/IMG20231101190935.jpg",
        "images/IMG_20240308_184738-01.jpeg",
        "images/IMG_20240308_184739.jpg",
        "images/IMG_20240308_185227.jpg",
        "images/IMG_20240319_123035566.jpg",
        "images/IMG_20240809_190759116.jpg",
        "images/IMG_20241110_174538989.jpg",
        "images/IMG_20241231_173637078.jpg",
        "images/IMG_20241231_174120812.jpg"
    ];

    // Show Memories Section
    exploreBtn.addEventListener("click", function () {
        exploreBtn.style.display = "none";
        memoriesSection.style.display = "block";
        startConfetti();
        loadImages();
    });

    // Load Images with Animation
    function loadImages() {
        imageContainer.innerHTML = "";

        imageFiles.forEach((file, index) => {
            let imgElement = document.createElement("img");
            imgElement.src = file;
            imgElement.classList.add("fade-in");
            imgElement.style.animationDelay = `${index * 300}ms`;
            imgElement.onerror = function () { this.style.display = "none"; };
            imageContainer.appendChild(imgElement);
        });
    }

    // Show Typing Message
    messageBtn.addEventListener("click", function () {
        memoriesSection.style.display = "none";
        messageSection.style.display = "block";
        typingEffect("Happy bday di.💖 1st na Raj bro pathi sollidra. I am very happy that vunaku ipdi person kedachi irukaanga. He is too good and i hope this continues to eternity. And namba friendship also ipdiye irukanum. enaku Raj bro ku nalla vibr set aaguthu😂. ippo vunnaku varuvom. eppavum happy ah iru ethayum nanachi down aagatha ellame nallatha nadakum. ellame means ellame. again happy bday🫡✨");
    });

    // Typing Effect Function
    function typingEffect(text) {
        typingMessage.innerHTML = "";
        let i = 0;
        function type() {
            if (i < text.length) {
                typingMessage.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, 100);
            }
        }
        type();
    }

    // Confetti Animation
    function startConfetti() {
        const confettiCanvas = document.getElementById("confettiCanvas");
        const ctx = confettiCanvas.getContext("2d");
        confettiCanvas.width = window.innerWidth;
        confettiCanvas.height = window.innerHeight;

        const confettiPieces = Array.from({ length: 100 }, () => ({
            x: Math.random() * confettiCanvas.width,
            y: Math.random() * confettiCanvas.height,
            size: Math.random() * 5 + 2,
            speed: Math.random() * 3 + 1,
            color: `hsl(${Math.random() * 360}, 100%, 50%)`
        }));

        function animateConfetti() {
            ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
            confettiPieces.forEach(p => {
                p.y += p.speed;
                if (p.y > confettiCanvas.height) p.y = 0;
                ctx.fillStyle = p.color;
                ctx.fillRect(p.x, p.y, p.size, p.size);
            });
            requestAnimationFrame(animateConfetti);
        }

        animateConfetti();
    }
});
