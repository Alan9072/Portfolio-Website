
function locomotiveAnimation(){
    gsap.registerPlugin(ScrollTrigger);

//Used to reload and open page from first section

ScrollTrigger.clearScrollMemory("manual");
window.history.scrollRestoration = "manual";

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
  
});

document.querySelector('.skillbtn').addEventListener('click',()=>{
    locoScroll.scrollTo('.fourthcontent',-70);
});
document.querySelector('.servicebtn').addEventListener('click',()=>{
    locoScroll.scrollTo('.thirdcontent');
});
document.querySelector('.contactbtn').addEventListener('click',()=>{
    locoScroll.scrollTo('.finalcontent');
});
document.querySelector('.explorebtn').addEventListener('click',()=>{
    locoScroll.scrollTo('.secondcontent');
});
document.querySelector('.backtotop').addEventListener('click',()=>{
    locoScroll.scrollTo('.firstcontent');
});
document.querySelector('.homebtn').addEventListener('click',()=>{
    locoScroll.scrollTo('.firstcontent');
});

// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});
// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
locomotiveAnimation();



function play() {
    var tl = gsap.timeline();

    gsap.from(".navbar", {
        opacity: 0,
        delay: 1

    })
    tl.from(".navbar h2,.contents", {
        y: -100
        , duration: 0.5,
        stagger: 0.2,
        delay: 1

    })

    gsap.from(".profilequote p", {
        y: 100,
        duration: 0.5,
        stagger: 0.2,
        delay: 1
    })
    gsap.from(".profiletag", {
        opacity: 0,
        duration: 2,
        delay: 1
    })
    gsap.from(".exploreparent", {
        opacity: 0,
        duration: 2,
        delay: 1
    })
}
play();

function aboutAnimation(){

gsap.from(".abouttxt span", {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
    scrollTrigger: {
        trigger:".abouttxt",
        scroller:".main",
        start:"top 60%",
        
    }
})
gsap.from(".aboutcontent", {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
    scrollTrigger: {
        trigger:".abouttxt",
        scroller:".main",
        start:"top 60%",
       
    }
})
}
aboutAnimation();

gsap.from(".services h3",{
    opacity: 0,
    duration: 1,
    stagger: 0.1,
    scrollTrigger: {
        trigger:".thirdcontent",
        scroller:".main",
        start:"top 60%",
        
       
    }
})



//************************************* */
function animateServices(){
gsap.from(".servicescontent1",{
    opacity: 0,
    x:-100,
    duration: 1,
    stagger: 0.1,
    scrollTrigger: {
        trigger:".servicesline",
        scroller:".main",
        start:"top 60%",
       
        
       
        
       
    }
})

gsap.from(".servicescontent2",{
    opacity: 0,
    y:100,
    duration: 1,
    stagger: 0.1,
    scrollTrigger: {
        trigger:".servicesline",
        scroller:".main",
        start:"top 60%",
        
       
    }
})

gsap.from(".servicescontent3",{
    x:100,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
    scrollTrigger: {
        trigger:".servicesline",
        scroller:".main",
        start:"top 60%",
        
       
    }
})
}
animateServices();

gsap.from(".softwares img",{
    y: 60,
    stagger: 0.1,
    scrollTrigger: {
        trigger:".fourthcontent",
        scroller:".main",
        start:"top 70%",
        
        
       
    }
    
})
function socials(){


gsap.from(".emailtag,.emailarea p",{
    y:50,
    stagger:0.1,
    scrollTrigger: {
        trigger:".finalcontent1 h3",
        scroller:".main",
        start:"top 70%",
        
        
       
    }
    
})

gsap.from(".socialmedia p,.socialmedia h3",{
    y:50,
    stagger:0.1,
    scrollTrigger: {
        trigger:".emailarea",
        scroller:".main",
        start:"top 63%",
    }
    
})
}
socials();









