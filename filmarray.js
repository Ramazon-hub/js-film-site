var changeEl = (className) =>{
    return document.querySelector(className);
}
var createEl = (tag) =>{
    return document.createElement(tag);
    
}
var append =(otasi,bolasi) =>{
    otasi.appendChild(bolasi);
}
let klas =(element,className) =>{
    element.className = className;
}
console.log(films.forEach(film=>console.log(film.poster)));
var filmList = changeEl('.film-list');
let filterForm = changeEl('.filter-form');
let selectGenre = changeEl('.select-genre');
let searchInput = changeEl('.search-input')
let selectSort = changeEl('.select-sort')
var modal = changeEl('.modal')
var modalClose = changeEl('.modal-close')
let modalTitle = changeEl('.modal-title')
let modalInformation = changeEl('.modal-information')

var createFilm = (obj) =>{
        var newLi = createEl('li');
        klas(newLi,'film-list__item')
        var filmAncer = createEl('a');
        filmAncer.href = '#'
        var filmImg = createEl('img');
        klas(filmImg,'film-list__img')
        filmImg.src = obj.poster;
        var filmTitle = createEl('h3'); 
        klas(filmTitle,'film-list__title')
        filmTitle.textContent = obj.title;
        let filmGenresUl = createEl('ul');
        klas(filmGenresUl,'film-list__genreul')
        let filmDate = createEl('span')
        klas(filmDate,'film-date')
        filmDate.textContent = new Date(obj.release_date).getFullYear() ;
        
        obj.genres.forEach(genre=>{
            let filGenresLi = createEl('li');
            klas(filGenresLi,'film-list__genre')
            filGenresLi.textContent = genre;
            append(filmGenresUl,filGenresLi)
         })

         let moreInfoBtn = createEl('button');
         moreInfoBtn.textContent = 'More';
         moreInfoBtn.dataset.id = obj.id
         
         moreInfoBtn.addEventListener('click',(event)=>{
             modal.classList.add('modal-open')

            //  modalTitle.textContent = obj.title
            //  modalInformation.textContent = obj.overview
            //  console.log(obj.overview)
            //  console.log(event.target.dataset.id,' roma')
            //  console.log(obj)
             findItem(event.target.dataset.id)
            
            })
            
            
            append(filmAncer,filmImg)
            append(newLi,filmAncer)
            append(newLi,filmTitle)
            append(filmList,newLi)
            append(newLi,filmGenresUl)
            append(newLi,filmDate)
            append(newLi,moreInfoBtn)
            
}
    function findItem(id){
        films.find(film=>{
            if(film.id===id){
                modalTitle.textContent = film.title
               modalInformation.textContent = film.overview
            }
        })
    }  

 modal.addEventListener('click',(event)=>{
    if(event.target === modalClose || event.target === modal){
    
        modal.classList.remove('modal-open')
    }   
})

let showFilms = (array) =>{
    array.forEach(cinema=>createFilm(cinema))
}
function getGenres(){
    let array = [];
    films.forEach(film=>{
    film.genres.forEach(genre=>{
        if(!array.includes(genre)){
            array.push(genre)
            let selectOption = createEl('option');
            selectOption.className = 'select-option';
            selectOption.textContent = genre;
            selectOption.value = genre;
            append(selectGenre,selectOption)             
            }
        })
    })
    
}

let sortAz = (a,b) =>{
    if(a.title > b.title){
        return 1
    }
    if(b.title > a.title){
        return -1
    }
}
let sortZa = (a,b) =>{
    if(a.title > b.title){
        return -1
    }
    if(b.title >a.title){
        return 1
    }
}
let sortAge = (a,b) =>{
    return a.release_date - b.release_date

}
let sortObj ={
    Az:sortAz,
    Za:sortZa,
    age:sortAge
}
// console.log(typeof films[0].release_date)
let filterFN = (evt)=>{
    evt.preventDefault();
    filmList.innerHTML = ''
    let selectValue = selectGenre.value;
    let searchInputValue = searchInput.value.trim();
    let sortValue = selectSort.value
    let find = RegExp(searchInputValue,'gi');

    console.log(searchInputValue) 
    let filterResult = films.filter(cinema=>{
        if(selectValue === 'all'){
            return true
        }
        if(cinema.genres.includes(selectValue)){
            return cinema
        }
    }).filter(cinema=>cinema.title.match(find)).sort(sortObj[sortValue])
    
    showFilms(filterResult)
}

showFilms(films);
getGenres();

filterForm.addEventListener('submit',filterFN)












// let fruits = ['olma','nok','anor','behi','gilos']
//1-usul
// let result = fruits.filter(function(fruit){
//     if(fruit!=='behi'){
//         return fruit
//     }
// })
// 2-usul qisqa
// let result =fruits.filter( fruit=>fruit!=='anor' )

// filter()
// console.log(result);

// let getTitle = () =>{
//     let arr = []
//     films.forEach(film=>film.genres.forEach(genre=>{
//         if(!arr.includes(genre)){
//             arr.push(genre)
//         }
//     }))
//     return console.log(arr)
// }
// getTitle()
            // filmSlide = 0
            // var time = 1000;
            // function changePhoto(){
            //     for(var filmSlide of films){
            //         photo.src = filmSlide.poster;
                    
            //     }
            //     if(filmSlide<films.length - 1){
            //             filmSlide ++
            //         }
            //         else
            //         {
            //             filmSlide = 0
            //         }
            //     setTimeout("changePhoto",time)
            // }
            // window.onload = changePhoto;

// var i=0;
// var time = 1000;
// var images = [];
// images[0] = './imgs/1.jpg';
// images[1] = './imgs/2.jpg';
// images[2] = './imgs/3.jpg';
// images[3] = './imgs/4.jpg';
// images[4] = './imgs/5.jpg';
// console.log(images.length)
// function changePhoto(){
//   photo.src = images[i]
//   if(i<images.length - 1 ){
//         i++
//     }else{
//           i=0;
//       }
   
      
//       setTimeout("changePhoto()",time)
//     }
  
//   window.onload = changePhoto;
