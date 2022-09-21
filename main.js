let icon = document.getElementById("icon");
let text = document.getElementById("text");
let Bookmark = document.getElementById("Bookmark");
let one = document.getElementById("one");
console.log(icon);
console.log(text);
console.log(Bookmark);
console.log(one);


icon.onclick = function(){
    text.classList.toggle("hidden");
} 
Bookmark.onclick = function(){
    Bookmark.classList.toggle("Bookmark");
} 







// let circle = document.querySelectorAll(".circle");
// console.log(circle);

// let fill = document.querySelectorAll(".fill");
// console.log(fill);
 




// circle.forEach(function(e){
//     e.onclick = function(){
//         console.log(e);
//         console.log(this);

//         fill.forEach(function(ele){
//             console.log(ele); 
//             ele.classList.toggle("hidden");
//         })
//     }
// })


// let back = document.getElementById("back");
// console.log(back);

// let overlay = document.getElementById("overlay");
// console.log(overlay);

// back.onclick = function(){
//     console.log("this");
// }

