const form = document.querySelector('.form');
const divMovie = document.querySelector('.movies');
const inputTxt = form.querySelector('.text');
let player;

const importMovie = (text) => {
    divMovie.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${text}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    player = document.querySelector('iframe');

}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const { value } = inputTxt;
    if (value != '') {
        importMovie(value);
        const div = document.createElement('div');
        div.className = "wait ";
        divMovie.appendChild(div);
        div.addEventListener('mousedown', function () {
            this.classList.remove("stop")
            
        })
       
        divMovie.appendChild(div);

    }

})