const card = document.querySelector('.card');
const title = document.querySelector('.title');
const container = document.querySelector('.container');
const img = document.querySelector('.image img');

card.addEventListener("mousemove", (e) => {

    console.log(e.pageX, e.pageY);
    let Xside = (window.innerWidth / 2 - e.pageX) / 25;
    let Yside = (window.innerHeight / 2 - e.pageY) / 25;

    card.style.transform = `rotateY(${Xside}deg) rotateX(${Yside}deg) `
});



// container in

container.addEventListener("mouseenter", (e) => {

    card.style.transition = "none";

    img.style.transform = "translateZ(200px) rotateZ(-45deg)";
    title.style.transform = "translateZ(150px) ";
    title.style.transform = "translateZ(150px) ";


});

// container out
container.addEventListener("mouseleave", (e) => {

    card.style.transition = "all 0.5 ease";
    img.style.transform = "translateZ(0px) rotateZ(0deg)";
    title.style.transform = "translateZ(0px) ";
    card.style.transform = `rotateY(${0}deg) rotateX(${0}deg) `;

})