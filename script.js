// Function to be able to 
function stripColour() {
    var pixels = document.querySelectorAll("div.pixel");
    pixels.forEach((pixel) => {
        pixel.style.backgroundColor = 'white';
    });
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
