
//      https://api.themoviedb.org/3/movie/11?api_key=e547e17d4e91f3e62a571655cd1ccaff

const botonbuscar = document.getElementById("buttonfind")
const carta = document.getElementById ("carta")
const pelicula = document.getElementById ("pelicula")




const getmovie = () => {
  axios
.get(`https://api.themoviedb.org/3/movie/11?api_key=`)
/*   .get(`https://api.github.com/users/${pelicula.value}`) */
  .then ((res) => { 
    console.log(res.data);
/* carta.innerHTML = `
<div class="card" style="width: 18rem;">
  <img src=${res.data.imagen} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${res.data.titulo}</h5>
    <p class="card-text">Genero: ${res.data.genero}</p>
    <p class="card-text">Descripcion de la pelicula: ${res.data.descripcion}</p>
     </div>
</div>  
` */
   
  })     
  .catch ((err) => console.error(err)) 


}


botonbuscar.addEventListener ("click",getmovie)


