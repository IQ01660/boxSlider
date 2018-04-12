var slideStep = 3;
var visibleBoxes = 5;


var marginDecreaser;
if(visibleBoxes == 1){
    marginDecreaser = 14;
}
else if (visibleBoxes >= 2 && visibleBoxes < 4){
    marginDecreaser = 9;
}
else if (visibleBoxes >=4 && visibleBoxes<6){
    marginDecreaser = 4;
}
else{
    marginDecreaser = 2;
}


var sliderImages = ["img/francis.jpg","img/francis.jpg","img/francis.jpg","img/francis.jpg","img/francis.jpg","img/francis.jpg","img/francis.jpg","img/frankHouse.jfif","img/elza.jpg","img/space.jpg","img/earth.png"];
var sliderDesc = ["Frank Underwood","Frank Underwood","Frank Underwood","Frank Underwood","Frank Underwood","Frank Underwood","Frank Underwood","Francis Becomes the President","A Singer from Homeland","The new type of radiation has been discovered","Earth's speed has decreased by 5cm/hour today"];

// selecting the html elements
var theSliderFrame = document.querySelector(".sliderFrame");
// calulating the widths of frames
var sliderFrameWidth = (100*(sliderImages.length/visibleBoxes));
var hundInWidth = sliderFrameWidth / 100;
var boxWidth = (((sliderFrameWidth-(sliderImages.length*marginDecreaser))/sliderImages.length)/hundInWidth);
theSliderFrame.setAttribute("style","width:"+sliderFrameWidth+"%");

var leftButton = document.querySelector(".leftBtn");
var rightButton = document.querySelector(".rightBtn");


// creating boxes
for(var i = 0; i < sliderImages.length; i++) {
    //creating the general frame
    var newBoxFrame = document.createElement("div");
    theSliderFrame.appendChild(newBoxFrame);
    newBoxFrame.setAttribute("class", "generalBoxFrame");
    newBoxFrame.setAttribute("style", "width:"+boxWidth+"%");

    //creating the image frame inside the general one
    var newBoxImgFrame = document.createElement("div")
    newBoxFrame.appendChild(newBoxImgFrame);
    newBoxImgFrame.setAttribute("class", "imageFrame");

    //creating the image
    var newBoxImg = document.createElement("img");
    newBoxImgFrame.appendChild(newBoxImg);
    newBoxImg.setAttribute("class", "topicImage");
    newBoxImg.setAttribute("src", sliderImages[i]);

    //creating the description frame inside the general one
    var newBoxDescFrame = document.createElement("div");
    newBoxFrame.appendChild(newBoxDescFrame);
    newBoxDescFrame.setAttribute("class", "descFrame");
    newBoxDescFrame.innerHTML = sliderDesc[i];
}
var sliderCount = 0;
var iteration = 0;
//clicking functions
leftButton.addEventListener("click", moveLeft);

rightButton.addEventListener("click", moveRight);
function moveRight() {
    iteration -= (sliderFrameWidth/sliderImages.length)*slideStep;
    if(iteration< (-1)*(sliderImages.length-visibleBoxes)*(sliderFrameWidth/sliderImages.length)){
        iteration = 0
    }
    
    theSliderFrame.style.left = iteration + "%"
    
}
function moveLeft() {
    iteration += (sliderFrameWidth/sliderImages.length)*slideStep;
    if(iteration>0){
        iteration = (-1)*(sliderImages.length-visibleBoxes)*(sliderFrameWidth/sliderImages.length);
    }
    theSliderFrame.style.left = iteration + "%"
    sliderCount-=slideStep;
}
