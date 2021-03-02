$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
    
})

let time = 2000, 
currtentImageIndex=0
imagens = document 
.querySelectorAll("#slide img")
max = imagens.length;

function start(){
    console.log("window loaded")
}

window.addEventListener("load", start)
