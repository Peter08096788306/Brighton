const menu = document.querySelector(".Menu");
const nav = document.querySelector("#navbar");

menu.addEventListener("click", () => {
    nav.classList.toggle("open")
    // nav.style.transition = "all .3s linear"
} )


const slide = document.querySelector(".Slide");
const carouselItems = document.querySelectorAll(".section")

var sectionIndex = 0

document.querySelectorAll('.control li').forEach(function(indicator, ind) {
    indicator.addEventListener('click', function() {
        sectionIndex = ind;
        document.querySelector('.control .selected').classList.remove('selected');
        indicator.classList.add('selected');
        slide.style.transform = 'translate(' + (ind) * -25 + '%)'; 
    });
});

function autoplayCarousel() {
    if (sectionIndex === carouselItems.length-1) {
        sectionIndex = -1;
    }
    sectionIndex++;
    document.querySelector('.control .selected').classList.remove('selected');
    document.querySelectorAll('.control li')[sectionIndex].classList.add('selected');
    slide.style.transform = 'translate(' + (sectionIndex) * -25 + '%)';
    slide.style.transition = "all .5s linear";
}

setInterval(() => {
    autoplayCarousel();
}, 4000);