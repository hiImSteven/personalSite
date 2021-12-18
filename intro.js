let header = document.querySelector('#intro');
let anim = [
    { t: "> ", ms: 250 },
    { t: ">_", ms: 250 },
    { t: "> ", ms: 250 },
    { t: ">_", ms: 250 },
    { t: "> ", ms: 250 },
    { t: ">_", ms: 250 },
    { t: ">H_", ms: 150 },
    { t: ">Hi_", ms: 150 },
    { t: ">Hi", ms: 150 },
    { t: ">Hi,", ms: 150 },
    { t: ">Hi,_", ms: 150 },
    { t: ">Hi, ", ms: 150 },
    { t: ">Hi, I", ms: 150 },
    { t: ">Hi, I_", ms: 150 },
    { t: ">Hi, I'", ms: 150 },
    { t: ">Hi, I'_", ms: 150 },
    { t: ">Hi, I'm", ms: 150 },
    { t: ">Hi, I'm_", ms: 150 },
    { t: ">Hi, I'm S", ms: 150 },
    { t: ">Hi, I'm S_", ms: 150 },
    { t: ">Hi, I'm St", ms: 150 },
    { t: ">Hi, I'm St_", ms: 150 },
    { t: ">Hi, I'm Ste", ms: 150 },
    { t: ">Hi, I'm Ste_", ms: 150 },
    { t: ">Hi, I'm Stev", ms: 150 },
    { t: ">Hi, I'm Stev_", ms: 150 },
    { t: ">Hi, I'm Steve", ms: 150 },
    { t: ">Hi, I'm Steve_", ms: 150 },
    { t: ">Hi, I'm Steven_", ms: 250 },
    { t: ">Hi, I'm Steven", ms: 250 },
    { t: ">Hi, I'm Steven_", ms: 250 },
    { t: ">Hi, I'm Steven", ms: 250 }
];
let stepDenominator = 1;
if (window.localStorage.stepDenominator)
    stepDenominator = window.localStorage.stepDenominator;
let i = 0;
let update = () => {
    let step = anim[i];
    header.innerText = step.t;
    i++;

    if (i < anim.length)
        setTimeout(update, step.ms / stepDenominator);
    else {
        header.classList.add('top');
        setTimeout(() => {
            document.getElementById('main').style.opacity = 1;
            initGlobe();
        }, 500);
        window.localStorage.stepDenominator = 2;
    }
}
update();