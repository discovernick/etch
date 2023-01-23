// Function to be able to 
function hoverall() {

    return;
}

// Generate Whole Page Grid
var pixels = document.querySelectorAll("div.pixel");
pixels.forEach((pixel) => {
    pixel.addEventListener('mouseenter', () => {
        pixel.style.backgroundColor = 'black';
        console.log("hovered!!!")
    });  
});
