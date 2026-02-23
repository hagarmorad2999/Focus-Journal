
var allData=[];
var myHTTP=new XMLHttpRequest()


function getNews(cate) {
  fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${cate}&apiKey=9e1f6d821cc04fd088adbeeb52649c47`)
    .then(res => res.json())
    .then(result => {
      allData = result.articles;
      displayData();
    })
    .catch(err => console.error('Error fetching news:', err));
}


var data=document.getElementById('data');
function displayData(){
    var cartona=``
for(var i=0;i<allData.length;i++){
cartona+=`
    <div class="col-12 col-md-6 col-lg-3">
    <div class="imgBox">
    <div class="img">
    ${allData[i].urlToImage ? `<img src="${allData[i].urlToImage}" class="img-fluid rounded  mainImg" >` : `<div><img src="images/hand-drawn-404-error_23-2147746234.avif" alt="" srcset=""   class="mainImg"></div>`}
    </div>
    <div class="icons">
  <i class="fa-regular fa-share-from-square"></i>
  <i class="fa-regular fa-bookmark"></i>
  <i class="fa-regular fa-star star"></i>
    </div>
</div>
<div class="info">
   <p class="fw-bold main">${allData[i].author}</p>
   <p class="main2">${allData[i].title.split(" ").slice(0,15).join(" ")}</p> <p class="btnRead"><a href="${allData[i].url}">More ...</a></p>
   </div>
    </div>
`
}
data.innerHTML=cartona;
}

getNews('business')








document.addEventListener("click", function(e) {
  if (e.target.classList.contains("star")) {

    let index = [...document.querySelectorAll(".star")].indexOf(e.target);

    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    favorites.push(allData[index]);

    localStorage.setItem("favorites", JSON.stringify(favorites));

    e.target.outerHTML = `<i class="fa-solid fa-star" style="color: #FFD43B;"></i>`;
  }
});










$(document).ready(function(){
    $(".loading").fadeOut(1000,function(){
        $("body").css("overflow","auto")
        $("body").css("overflow-x","hidden")
let mode=localStorage.getItem("mode");
if(mode=="dark"){
    body.classList.add("dark-body");
}
else{
    body.classList.remove("dark-body");
}

    })
 let modee=document.querySelector(".none");
 modee.classList.add("nonee");



})

$(".nav-link").on("click", function(){
    $(".loading").fadeIn(200); // يظهر
    setTimeout(() => {
        $(".loading").fadeOut(2000); // يختفي بعد نص ثانية
    }, 500);
});


let set=document.querySelector(".setting");
let dark=document.querySelector(".dark");
let withe=document.querySelector(".withe");
let none=document.querySelector(".none");
let nav = document.getElementById("navbar");

let body = document.body;
set.addEventListener("click",function(){
none.classList.toggle("nonee");
})

dark.addEventListener("click",function(){
body.classList.add("dark-body");
localStorage.setItem("mode","dark");
})

withe.addEventListener("click",function(){
body.classList.remove("dark-body");
localStorage.setItem("mode","white");
})






$(window).scroll(function(){
  let scroll=($(window).scrollTop());

  if(scroll>1000){
    $ (".btn").fadeIn(700);
  }
  else{
     $ (".btn").fadeOut(700);
  }
});

$(".btn").click(function(){
$("html, body").animate({scrollTop:0},300);

});
