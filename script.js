//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".container");

    // Generate 800 square boxes dynamically
    for (let i = 0; i < 800; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        container.appendChild(square);
    }

    // Function to remove hover effect after 1 second
    function removeHoverEffect(square) {
        setTimeout(() => {
            square.style.backgroundColor = "#fff";
        }, 1000);
    }

    // Attach event listeners for hover effect
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = getRandomColor();
        });

        square.addEventListener("mouseout", () => {
            removeHoverEffect(square);
        });
    });

    // Function to get a random color
    function getRandomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
