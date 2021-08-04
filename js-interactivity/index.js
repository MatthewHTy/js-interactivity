let entry = document.querySelector(`form`);
    entry.addEventListener(`submit`, addMovie);
const message = document.querySelector('#message')

console.log("Hello World")

let inputField = document.querySelector('input');
function addMovie(evt) {

    evt.preventDefault()

    const movie = document.createElement('li');
    const movieTitle = document.createElement('span');
    movieTitle.textContent = inputField.value;
    movie.appendChild(movieTitle);

    const deleteBtn = document.createElement('Button');
    deleteBtn.textContent = "x";
    movie.appendChild(deleteBtn)
    deleteBtn.addEventListener("click", deleteMovie);


    const list = document.querySelector('ul');
    list.appendChild(movie);
    inputField.value = "";

}

function deleteMovie(event){
    console.log(event.target.parentNode);
    event.target.parentNode.remove();
}
// document.querySelector(`form`).addEventListener("submit", addMovie);

function crossOffMovie(evt){
    evt.target.classlist.toggle('checked');

    if (evt.target.classList.toggle('checked') === true) {
        message.textContent = evt.target.textContent + 'Movie watched!'
    } else {
        message.textContent = evt.target.textContent + 'Movie added back!'
    }
    revealMessage()
}

function revealMessage() {
    message.classList.remove("hide");
    setTimeout( () => message.classList.add("hide"), 1000);
}