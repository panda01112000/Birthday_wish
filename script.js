document.addEventListener("DOMContentLoaded", function () {
    const exploreBtn = document.getElementById("exploreBtn");
    const messageBtn = document.getElementById("messageBtn");
    const memoriesSection = document.getElementById("memoriesSection");
    const messageSection = document.getElementById("messageSection");
    const imageContainer = document.getElementById("imageContainer");
    const typingMessage = document.getElementById("typingMessage");
    const body = document.body;

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

    // Add balloons dynamically
    function createBalloons() {
        for (let i = 0; i < 5; i++) {
            let balloon = document.createElement("div");
            balloon.classList.add("balloon");
            document.body.appendChild(balloon);
        }
    }

    // Add glitter effect
    function createGlitters() {
        for (let i = 0; i < 10; i++) {
            let glitter = document.createElement("div");
            glitter.classList.add("glitter");
            document.body.appendChild(glitter);
        }
    }

    // Show Memories Section on Button Click
    exploreBtn.addEventListener("click", function () {
        exploreBtn.style.display = "none";
        memoriesSection.style.display = "block";
        loadImages();
    });

    function createBalloon() {
        const balloon = document.createElement("div");
        balloon.classList.add("balloon");
        balloon.style.left = Math.random() * 80 + "vw"; // Random left position within 80% width
        balloon.style.animationDuration = (Math.random() * 3 + 6) + "s"; // Between 6s to 9s float time
        balloon.style.animationDelay = Math.random() * 2 + "s"; // Small delay to avoid same start time

        // Balloon Colors
        const colors = ["#ff6384", "#ff9f40", "#ffcd56", "#4bc0c0", "#36a2eb", "#9966ff"];
        balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

        // Randomized balloon sizes for a depth effect
        let size = Math.random() * 20 + 60; // Between 60px and 80px
        balloon.style.width = size + "px";
        balloon.style.height = (size + 20) + "px"; // Slightly taller

        // Add shimmering effect randomly
        if (Math.random() > 0.5) {
            balloon.style.animation = "floatUp 8s linear infinite, swaySide 5s ease-in-out infinite alternate, shimmer 3s infinite alternate";
        }

        body.appendChild(balloon);

        // Remove balloon after animation
        setTimeout(() => {
            balloon.remove();
        }, 9000);
    }

    // Generate balloons at random intervals
    setInterval(() => {
        if (document.querySelectorAll(".balloon").length < 3) {
            createBalloon();
        }
    }, 3000);

    // Load Images with Animation
    function loadImages() {
        imageContainer.innerHTML = "";
        imageFiles.forEach((file, index) => {
            let imgElement = document.createElement("img");
            imgElement.src = file;
            imgElement.classList.add("polaroid");
            imgElement.style.animation = `fadeIn 0.8s ease-in-out ${index * 200}ms forwards`;

            imgElement.onerror = function () { 
                this.style.display = "none"; 
            };

            imageContainer.appendChild(imgElement);
        });
    }

    // Show Typing Effect for Message
    messageBtn.addEventListener("click", function () {
        memoriesSection.style.display = "none";
        messageSection.style.display = "block";

        const messageText = "Happy bday di.💖 1st na Raj bro pathi sollidra. I am very happy that vunaku ipdi person kedachi irukaanga. He is too good and i hope this continues to eternity. And namba friendship also ipdiye irukanum. enaku Raj bro ku nalla vibe set aaguthu😂. ippo vunnaku varuvom. eppavum happy ah iru ethayum nanachi down aagatha ellame nallatha nadakum. ellame means ellame. again happy bday🫡✨";
        typingEffect(messageText);
    });

    // Smooth Typing Animation
    function typingEffect(text) {
        typingMessage.innerHTML = "";
        let i = 0;
        function type() {
            if (i < text.length) {
                typingMessage.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, 50);
            }
        }
        type();
    }

    createBalloons();
    createGlitters();
});

document.getElementById("exploreBtn").addEventListener("click", function () {
    const audio = document.getElementById("birthdaySong");
    audio.volume = 0; // Start at 0 volume
    audio.play();
    
    let volume = 0;
    let fadeIn = setInterval(function () {
        if (volume < 1) {
            volume += 0.1;
            audio.volume = volume;
        } else {
            clearInterval(fadeIn);
        }
    }, 300); // Increases volume every 300ms
});

