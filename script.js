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

    // Step 1: Show Memories Section on Button Click
    exploreBtn.addEventListener("click", function () {
        exploreBtn.style.display = "none";
        memoriesSection.style.display = "block";
        loadImages();
    });

    // Step 2: Load Images with Animation
    function loadImages() {
        imageContainer.innerHTML = ""; // Clear previous images

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

    // Step 3: Show Typing Effect for Message
    messageBtn.addEventListener("click", function () {
        memoriesSection.style.display = "none";
        messageSection.style.display = "block";

        const messageText = "Happy bday di.💖 1st na Raj bro pathi sollidra. I am very happy that vunaku ipdi person kedachi irukaanga. He is too good and i hope this continues to eternity. And namba friendship also ipdiye irukanum. enaku Raj bro ku nalla vibr set aaguthu😂. ippo vunnaku varuvom. eppavum happy ah iru ethayum nanachi down aagatha ellame nallatha nadakum. ellame means ellame. again happy bday🫡✨";
        typingEffect(messageText);
    });

    // Step 4: Smooth Typing Animation Effect
    function typingEffect(text) {
        typingMessage.innerHTML = ""; // Reset text
        let i = 0;
        function type() {
            if (i < text.length) {
                typingMessage.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, 50); // Faster and smoother typing effect
            }
        }
        type();
    }
});
