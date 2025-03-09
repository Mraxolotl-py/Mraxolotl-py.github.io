const cube = document.getElementById("cube");



let mouseX = 0, mouseY = 0;
const rotationVal = 270;
let mouseheld = false;
let targetX = 0, targetY = 0;
let currentX = 0, currentY = 0;

// Handle mouse movement for manual rotation
window.addEventListener("mousemove", (event) => {
    if (mouseheld) {
        outerCursor.style.display = "none"
        mouseX = event.clientX;
        mouseY = event.clientY;
        let rotateX = -(mouseY / window.innerHeight - 0.5) * rotationVal;
        let rotateY = (mouseX / window.innerWidth - 0.5) * rotationVal;
        cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    }else{
        outerCursor.style.display = "block"
    }
});

// Handle mouse button events
window.addEventListener("mousedown", () => (mouseheld = true));
window.addEventListener("mouseup", () => (mouseheld = false));

function animate() {
    
    if (!mouseheld) {
        
        if (Math.abs(currentX - targetX) < 1 && Math.abs(currentY - targetY) < 1) {
            targetX = GetRandomInt(0, 120);
            targetY = GetRandomInt(0, 120);
        }
        currentX += (targetX - currentX) * 0.05; // Smoother interpolation
        currentY += (targetY - currentY) * 0.05;

        cube.style.transform = `rotateX(${currentX}deg) rotateY(${currentY}deg)`;
    }

    requestAnimationFrame(animate);
}

// Start animation loop
animate();
