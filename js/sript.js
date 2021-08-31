
let very_dark_grayish_blue = 'hsl(217, 19%, 35%)';
let desaturated_dark_blue = 'hsl(214, 17%, 51%)';
let grayish_blue = 'hsl(212, 23%, 69%)';
let light_grayish_blue = 'hsl(210, 46%, 95%)';


document.querySelector(".share-btn").addEventListener('mouseover', function(){
    this.style.backgroundColor = desaturated_dark_blue;
    document.querySelector('.share-btn-img').src="./images/icon-share2.svg";
    document.querySelector(".tool-tip").style.visibility="visible";
    document.querySelector(".tool-tip").style.transition="ease-in 0.5s";
    
});


document.querySelector(".share-btn").addEventListener('mouseout', function(){
    this.style.backgroundColor = light_grayish_blue;
    document.querySelector('.share-btn-img').src="./images/icon-share.svg";
    document.querySelector(".tool-tip").style.transition="ease-out 0.5s";
    document.querySelector(".tool-tip").style.visibility="hidden";
});

document.querySelector(".tool-tip").addEventListener("mouseover", function(){
    document.querySelector(".tool-tip").style.visibility="visible";
});

document.querySelector(".tool-tip").addEventListener("mouseout", function(){
    document.querySelector(".tool-tip").style.visibility="hidden";
});

// function share(object) {
//     let class_name=object.parentNode.className;
//     document.querySelector("."+class_name).style.opacity=0;
//     document.querySelector(".social-share").style.opacity=1;
//     document.querySelector("."+class_name).style.transition="all 0.5s";

//     console.log("Social Media !!");
// }

// function backDefault(object){
//     let class_name=object.parentNode.className;
//     document.querySelector("."+class_name).style.opacity=0;
//     document.querySelector(".branding").style.opacity=1;
//     document.querySelector("."+class_name).style.transition="all 0.5s";
//     console.log("Default Bottom");
// }