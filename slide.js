const slides = document.querySelector('.imgs');
let imgs = []
films.forEach(film=>{
    // imgs.push(film.poster)
    let img = document.createElement('img');
    img.style.cssText = `
    display:block;
    width:500px;
    height:400px;
    `
    img.src = film.poster;
    slides.appendChild(img)
})
slides.style.cssText = `
display:flex;
width:900px;
height:400px;
// overflow:hidden;
`
console.log(imgs)