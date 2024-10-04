// -------------- For scroll to view service me section -----------------
document.getElementById('skill-btn').addEventListener("click", function(){
    const targetDiv = document.getElementById('skill');

    targetDiv.scrollIntoView({ behavior: "smooth"});
    setTimeout(() => {
        targetDiv.scrollIntoView({ behavior: "auto"});
    }, 500);
});
// -------------- For scroll to view service me section -----------------
document.getElementById('service').addEventListener("click", function(){
    const targetDiv = document.getElementById('services');

    targetDiv.scrollIntoView({ behavior: "smooth"});
    setTimeout(() => {
        targetDiv.scrollIntoView({ behavior: "auto"});
    }, 500);
});
// -------------- For scroll to view contact me section -----------------
document.getElementById('portfolio').addEventListener("click", function(){
    const targetDiv = document.getElementById('portf');

    targetDiv.scrollIntoView({ behavior: "smooth"});
    setTimeout(() => {
        targetDiv.scrollIntoView({ behavior: "auto"});
    }, 500);
});
// -------------- For scroll to view contact me section -----------------
document.getElementById('portfolio').addEventListener("click", function(){
    const targetDiv = document.getElementById('portf');

    targetDiv.scrollIntoView({ behavior: "smooth"});
    setTimeout(() => {
        targetDiv.scrollIntoView({ behavior: "auto"});
    }, 500);
});
// -------------- For scroll to view contact me section -----------------
document.getElementById('contact').addEventListener("click", function(){
    const targetDiv = document.getElementById('contact-me');

    targetDiv.scrollIntoView({ behavior: "smooth"});
    setTimeout(() => {
        targetDiv.scrollIntoView({ behavior: "auto"});
    }, 500);
});
// -------------- For scroll to view about me section -----------------
document.getElementById('about').addEventListener("click", function(){
    const targetDiv = document.getElementById('about-me');

    targetDiv.scrollIntoView({ behavior: "smooth"});
    setTimeout(() => {
        targetDiv.scrollIntoView({ behavior: "auto"});
    }, 500);
});
// -------- For download Cv -----------
function downloadCv() {
    var filePath = 'My-resume.pdf';

    var link = document.createElement('a');
    link.href = filePath;
    link.download = 'Bimal_Resume.pdf';

    link.click();
}
// --------- For scrollUp -------
let myButton = document.getElementById('myBtn');

window.onscroll = function(){
    scrollFunction()
};

function scrollFunction(){
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ) {
        myButton.style.display = 'block';
    } else {
        myButton.style.display = 'none';
    }
}

function topFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

document.getElementById('work').addEventListener("click", function(){
    const targetDiv = document.getElementById('portfolio');

    targetDiv.scrollIntoView({ behavior: "smooth"});
    setTimeout(() => {
        targetDiv.scrollIntoView({ behavior: "auto"});
    }, 800);
});

var myIndex = 0;
carosoul();

function carosoul(){
    var i;
    var x = document.getElementsByClassName("images");
    for (let i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {
        myIndex = 1;
    }
    x[myIndex-1].style.display = "block";
    setTimeout(carosoul, 2000);
}
