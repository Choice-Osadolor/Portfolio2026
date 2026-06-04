

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

var mobileview = window.matchMedia("(max-width: 700px)");

if (!mobileview.matches) {
  console.log('not mobile')

    window.addEventListener('scroll',()=>{

        let scrollY = window.scrollY;

        if(scrollY > 50){
            document.querySelector('#anchor').classList.add('active');
        }

        if(scrollY > 100){
            document.querySelector('#anchor').classList.add('observer');
        }

        if(scrollY == 0){
            document.querySelector('#anchor').classList.remove('active');
        }

    });

}

//ill convert this into a function later, and theb try it as a promise



// const techtabs= document.querySelectorAll('.techtabs');
// techtabs.forEach(tab=>{
//     tab.addEventListener('click',()=>{
//         const container=tab.closest('[data-tabs]');
//        const section= container.querySelectorAll('.tech');
//        section.forEach(sec=>{
//         sec.classList.remove('active');
//        });
//     const target = tab.dataset.target;

//     container.querySelector(target).classList.add('active');
//     })
// })

const tabs = document.querySelectorAll('.tab');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {

    const container = tab.closest('[data-tabs]');

    const panels = container.querySelectorAll('.panel');
    const allTabs = container.querySelectorAll('.tab');

    panels.forEach(panel => {
      panel.classList.remove('active');
    });

    allTabs.forEach(t => {
      t.classList.remove('active');
    });

    const target = tab.dataset.target;

    container
      .querySelector(target)
      .classList.add('active');

    tab.classList.add('active');
  });
});

