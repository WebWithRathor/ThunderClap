gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();



gsap.to(".circ",{
    rotate:180,
    repeat:-1,
    duration:3,
    ease:"linear"
})

function swiper(){
  var swiper = new Swiper(".mySwiper", {
    slidesPerView:"auto",
    loop:true,
    autoCentered:true,
    centeredSlides: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
  });
}
swiper()


var tm = gsap.timeline()

tm
.from("#navbar",{
  y:"-100%",
  opacity:0,
  duration:1,
})
.from("#page1 h1 span",{
  y:"50%",
  opacity:0,
  stagger:.3
})
.from(".box p span",{
  y:"50%",
  opacity:0,
  stagger:.3
})
.from(".box1 button",{
  opacity:0,
  y:"100%"
})
.from("#page1 video",{
  y:"100%",
  opacity:0,
  duration:1
},"a")
.from("#page1 svg rect",{
  opacity:0,
  stagger:.1,
},"a")
.from("#page1 .box3",{
  scale:0
})





document.querySelectorAll(".task").forEach(function(e){
  gsap.from(e,{
    opacity:0,
    y:"20%",
    scrollTrigger:{
      scroller:"#main",
      trigger:e,
      start:"top 50%",
      end:"100% 100%",
    }

  })
})

gsap.from("#page3 svg rect",{
  opacity:0,
  stagger:.2,
  scrollTrigger:{
    scroller:"#main",
    trigger:"#page3 svg",
    start:"top 40%",
    end:"100% 100%",
  }
})
gsap.from("#page4 svg rect",{
  opacity:0,
  stagger:.2,
  scrollTrigger:{
    scroller:"#main",
    trigger:"#page4 svg",
    start:"top 40%",
    end:"100% 100%",
  }
})
gsap.from("#page4 .service:nth-child(1)",{
  opacity:0,
  y:"100%",
  scrollTrigger:{
    scroller:"#main",
    trigger:"#page4 .service:nth-child(1)",
    start:"-90% 60%",
    end:"top 0%",
  }
})
gsap.from("#page4 .service:nth-child(2)",{
  opacity:0,
  y:"100%",
  scrollTrigger:{
    scroller:"#main",
    trigger:"#page4 .service:nth-child(2)",
    start:"-90% 60%",
    end:"top 0%",
  }
})
gsap.from("#page4 .service:nth-child(3)",{
  opacity:0,
  y:"100%",
  scrollTrigger:{
    scroller:"#main",
    trigger:"#page4 .service:nth-child(3)",
    start:"-90% 60%",
    end:"top 0%",
  }
})

gsap.from("#footer svg rect",{
  opacity:0,
  stagger:.2,
  scrollTrigger:{
    scroller:"#main",
    trigger:"#footer svg",
    start:"top 30%",
    end:"100% 100%",
  }
})
gsap.from(".foot2p2 h1,.foot2p2 p,.foot2p1 img",{
  opacity:0,
  y:"100%",
  scrollTrigger:{
    scroller:"#main",
    trigger:"#footer",
    start:"top 50%",
    end:"100% 100%",
  }
})


