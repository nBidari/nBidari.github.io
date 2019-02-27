var enterbtn = document.getElementById("enter");
var input = document.getElementById("userinput");
var processbtn = document.getElementById("process");
var dropdown = document.getElementById("dropdown");
var ul = document.querySelector("ul");

/*
console.log(enterbtn)
console.log(input)
console.log(processbtn)
console.log(dropdown)
console.log(ul)
*/

var resp = "";  //will store response from clarifai
var img1 = "http://farm1.static.flickr.com/228/499181350_b01a280789.jpg";//stores a sample image
var img2 = "https://amp.businessinsider.com/images/579a123add0895fb558b4972-750-751.png"//stores a sample image
var img3 = "https://clarifai.com/cms-assets/20180320212157/food-001.jpg"//stores a sample image
var img4 = "https://community.clarifai.com/uploads/default/original/1X/f78720b7d2233009c39d30974f0c4d0f1e4ed5a6.jpg"//stores a sample image
var img5 = "https://image.shutterstock.com/display_pic_with_logo/136306/722718082/stock-photo-healthy-food-clean-eating-selection-fruit-vegetable-seeds-superfood-cereals-leaf-vegetable-on-722718082.jpg"//stores a sample image

var image = img1; //store active image