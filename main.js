
// https://api.themoviedb.org/3/movie/11?api_key=adb6e84c6e234e46a2366beb3476924c
/* LISTA DE PELIS RECOPILAdDAS:
Godzilla x Kong: The New Empire
Kingdom of the Planet of the Apes
Godzilla Minus One
Furiosa: A Mad Max Saga
Dune: Part Two
Un père idéal
Slyth: The Hunt Saga
Kung Fu Panda 4
Black Lotus
Mercy
Chief of Station
Ape vs. Mecha Ape
Thelma the Unicorn
The Fall Guy
The Garfield Movie
Sting
Not Love, Just Frenzy
Ghostbusters: Frozen Empire
Monster's Battlefield
No Way Up 
*/


const botonbuscar = document.getElementById("buttonfind")
const presentacion = document.getElementById ("presentacion")
const pelicula = document.getElementById ("pelicula")

let generos = []

//https://image.tmdb.org/t/p/w600_and_h900_bestv2/

const getmovie = () => {
  axios
.get(`https://api.themoviedb.org/3/movie/popular?api_key=adb6e84c6e234e46a2366beb3476924c`)
.then ((res) => { 
 const listadepelis = res.data.results
 presentacion.innerHTML = ``
 listadepelis.forEach(peli => {
  let titulodepeli = peli.title.toLowerCase()
  if (((titulodepeli.includes(pelicula.value.toLowerCase())) == true) /* && (pelicula.value.length !== 0) */){
    // En las siguientes lineas de axios se obtendra el genero de la pelicula  
      axios
        .get(`https://api.themoviedb.org/3/genre/movie/list?api_key=adb6e84c6e234e46a2366beb3476924c`)
        .then((res)=> {
          res.data.genres.forEach(genero => {
peli.genre_ids.forEach(element => {
  if (genero.id == element){

  generos.push(genero.name)}
})})
})

      .catch ((err) => console.error(err)) 

    presentacion.innerHTML += `
<div class="card" style="width: 18rem;">
  <img src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/${peli.poster_path}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${peli.title}</h5>
    <p class="card-text"><b>Genero: </b>${generos} </p>
    <p class="card-text"><b>Descripcion de la pelicula: </b>${peli.overview}</p>
     </div>
</div>`
 
  }


    

 
 });
    

  })     
  .catch ((err) => console.error(err)) 


}


botonbuscar.addEventListener ("click",getmovie)


