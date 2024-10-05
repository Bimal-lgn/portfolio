const dropdownTrigger = document.querySelector('.log-in');
const dropdownMenu = dropdownTrigger.querySelector('.dropdown-menu');

dropdownTrigger.addEventListener('mouseover', () => {
    dropdownMenu.style.display = 'block';
});

dropdownTrigger.addEventListener('mouseout', () => {
    dropdownMenu.style.display = 'none';
});

////////////// For 3 dot dropdown menu /////////////////////////////
const dropdownTrigger2 = document.querySelector('.dropdown');
const dropdownMenu2 = dropdownTrigger2.querySelector('.dropdown-menu-two');

dropdownTrigger2.addEventListener('mouseover', () => {
    dropdownMenu2.style.display = 'block';
});

dropdownTrigger2.addEventListener('mouseout', () => {
    dropdownMenu2.style.display = 'none';
});
/////////// For log in arrow rotation /////////////////////////////

const rotation = dropdownTrigger.querySelector('.down');
    function handleHover(event){
        if (event.type === 'mouseover') {
        rotation.style.transform = 'rotate(180deg)';
        } else {
        rotation.style.transform = 'rotate(0deg)';
    }
}
rotation.addEventListener('mouseover', handleHover);
rotation.addEventListener('mouseout', handleHover);

///////////// For slide show banner /////////////////////////////
var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = 'none';
    }
    myIndex++;
    if(myIndex > x.length){myIndex = 1}
    x[myIndex-1].style.display = 'block';
    setTimeout(carousel, 2000);
}