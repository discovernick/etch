// Function to be able to reset grid
function stripColour() {
    var pixels = document.querySelectorAll("div.pixel");
    pixels.forEach((pixel) => {
        pixel.style.backgroundColor = 'white';
        var cur = window.getComputedStyle(pixel);
        current = cur.getPropertyValue("filter");
        current_brightness = parseFloat(current.substring(
            current.indexOf("(") + 1, 
            current.lastIndexOf(")")
        ));
        pixel.style.filter = "brightness(1)";
        pixel.addEventListener('mouseenter', () => {
            pixel.style.backgroundColor = 'black';
            console.log("hovered!!!")
        }, false);
    });
    return;
}


var pixels = document.querySelectorAll("div.pixel");
pixels.forEach((pixel) => {
    pixel.removeEventListener('mouseenter');
    pixel.addEventListener('mouseenter', () => {
        pixel.style.backgroundColor = 'black';
        console.log("hovered!!!")
    }, false);  
});


currentbrightness = 0.1;
// Generate Lighter Pixels
function darkify() {
    var pixels = document.querySelectorAll("div.pixel");
    pixels.forEach((pixel) => {
        // Remove old event listeners
        pixel.style.backgroundColor = 'white';
        pixel.removeEventListener('mouseenter', () => {
            pixel.style.backgroundColor = 'black';
            console.log("hovered!!!")
        }, false);
        console.log("removed!")
        // Reset default brightness
        var cur = window.getComputedStyle(pixel);
        current = cur.getPropertyValue("filter");
        current_brightness = parseFloat(current.substring(
            current.indexOf("(") + 1, 
            current.lastIndexOf(")")
        ));
        pixel.style.filter = "brightness(0.99)";
        // Set new brightness
        pixel.addEventListener('mouseenter', () => {
            pixel.style.backgroundColor = 'WhiteSmoke';
            var cur = window.getComputedStyle(pixel);
            current = cur.getPropertyValue("filter");
            current_brightness = parseFloat(current.substring(
                current.indexOf("(") + 1, 
                current.lastIndexOf(")")
            ));
            console.log(current_brightness)
            current_brightness -= 0.2;
            pixel.style.filter = "brightness(" + current_brightness + ")";
            console.log(current_brightness);
        });  
    });
}




