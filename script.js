document.addEventListener('mousemove',(e) => {

    // mouse position
    let mouseX = e.clientX;
    let mouseY = e.clientY;

    // anchor (center of the eyes container)
    let anchor = document.querySelector('#eyes');
    const rect = anchor.getBoundingClientRect();

    const anchorX = rect.left + rect.width / 2;
    const anchorY = rect.top + rect.height / 2;

    // calculate angle
    const angleDeg = angle(mouseX, mouseY, anchorX, anchorY);
    console.log(angleDeg);

    // rotate pupils
    const pupils = document.querySelectorAll('.pupil');
    pupils.forEach(pupil => {
pupil.style.transform = `rotate(${90 + angleDeg}deg)`;
    });
});


// angle calculation
function angle(mx, my, ex, ey) {
    const dx = mx - ex;
    const dy = my - ey;

    const rad = Math.atan2(dy, dx);
    return rad * 180 / Math.PI;
}

let scrollY=window.scrollY;
window.addEventListener('scroll',()=>{
    scrollY=window.scrollY;
    console.log(scrollY);
    if(scrollY>50){
         document.querySelector('#anchor').classList.add('active');
    }
    if(scrollY>100){
         document.querySelector('#anchor').classList.add('observer');
    }

    if(scrollY==0){
         document.querySelector('#anchor').classList.remove('active');
    }

})

//ill convert this into a function later, and theb try it as a promise

