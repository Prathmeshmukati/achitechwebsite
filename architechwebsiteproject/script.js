

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function firstpageanim(){
      var t1 = gsap.timeline();

        t1.from("#nav" ,{
            y:'-20',
            opacity:0,
            duration:2,
            ease:Expo.easeInOut

        })


        t1.to(".boundingelem" ,{
            y:'0',
            delay:-1,
            duration:2,
            ease:Expo.easeInOut,
stagger:.3
        })

      }
      



function movecircle(){
    window.addEventListener("mousemove",function(dets){
        document.querySelector("#minicircle").style.transform=`translate(${dets.clientX}px , ${dets.clientY}px)`;
    })
}







movecircle();
firstpageanim();



// document.querySelectorAll(".elem") .forEach(function(elem){
//     elem.addEventListener("mousemove",function(dets){
//     gsap.to(elem.querySelector("img"),{
//         opacity: 1,
//         ease:Power1.easeOut,
//          top:dets.clientY,
//         left:dets.clientX,


//     });
//     });
//     });

document.querySelectorAll(".elem").forEach(function (elem) {
    var rotate =0;
    var diffrot =0;
    elem.addEventListener("mousemove", function (dets) {
        var diff = dets.clientY - elem.getBoundingClientRect().top;
   diffrot = dets.clientX - rotate;
   rotate =dets.clientX;

        gsap.to(elem.querySelector("img"), {
            opacity: 1,
            ease: Power1.easeOut,
            top: diff,
            left: dets.clientX,
            duration: 0.3,
            rotate : gsap.utils.clamp(-20,20,diffrot),
        });
    });

    elem.addEventListener("mouseleave", function () {
        gsap.to(elem.querySelector("img"), {
            opacity: 0,
            duration: 0.3,
        });
    });
});
  

