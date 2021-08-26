var findEl = (text) =>{
   return document.querySelector(text);
}
var createEl = (element) => {
    return document.createElement(element)
}
var append = (otasi,bolasi)=>{
    return otasi.appendChild(bolasi)
}
var klas = (tag,klas)=>{
    return tag.className = klas
}

var filmUl = findEl('.film-list')
var selectInput = findEl('.filter-select')
var filterForm = findEl('.filter-form')
var searchInput = findEl('.search-input')

 function createFilmBox (Obj){
var filmLi = createEl('li')
klas(filmLi,'film-li')
var filmImg = createEl('img')
klas(filmImg,'film-img')
filmImg.src = Obj.poster
var filmTitle = createEl('h3')
klas(filmTitle,'film-title')
filmTitle.textContent = Obj.title
append(filmLi,filmImg);
append(filmLi,filmTitle)
append(filmUl,filmLi)
}

for(film of films){
    createFilmBox(film)
}

var getGenres = () =>{
    // console.log(films.forEach(film=>film))
    var genres = []
 films.forEach(film=>film.genres.forEach(genre=>{
    if(!genres.includes(genre)){
        genres.push(genre)
        var selectOption = createEl('option')
        selectOption.value = genre;
        selectOption.textContent = genre
        append(selectInput,selectOption)
    }
    
}))
console.log(genres)
  
}
getGenres();


filterForm.addEventListener('submit',function(evt){
    evt.preventDefault();
    filmUl.innerHTML = ''
    films.forEach(film=>film.genres.forEach(genre=>{          
        if(selectInput.value === genre){
        // console.log(genre)
            console.log(film)
            createFilmBox(film)
        }

    }))
    films.forEach(kino=>kino.title.forEach(element=>{
        if(element === searchInput.value){
            createFilmBox(kino)
        }
    }))
    console.log(selectInput.value)
    // console.log(selectOption.text)
})
console.log(filterForm)




var aralash = [
    {
        id:1,
        name:"olma",
        isfruit:true
    },
    {
        id:2,
        name:"pomidor",
        isfruit:false
    },
    {
        id:3,
        name:"behi",
        isfruit:true
    },
    {
        id:4,
        name:"bodring",
        isfruit:false
    }
    , {
        id:5,
        name:"nok",
        isfruit:true
    }
]
// aralash.forEach(element=>{
//     if(element.isfruit === true){
//         console.log(element)
//     }
// })




