import moment from 'moment'
import './style.css';
            
moment.locale('fr')

const email = 'user@user.fr'
const password = 'password'


//time
const loadtime = 800;


//////////////////
/// various functions

const onFormSubmit = e => {
    e.preventDefault(); // Annule l'action par défaut


    setTimeout(() => {
        // Récupère les données du formulaire
        const data = new FormData(e.target);
        const response = ProcessDataForm(data);
    }, loadtime); // 1 seconde
}

document.querySelector('#form').addEventListener('submit',onFormSubmit);

const handleErrorMessage = () => {
  document.querySelector('.errorconnexion').classList.remove('invisible');
  document.querySelector('.goodconnexion').classList.add('invisible');
}

const handleSuccessMessage = () => {
  document.querySelector('.goodconnexion').classList.remove('invisible');
  document.querySelector('.errorconnexion').classList.add('invisible');
}


const bouton = document.querySelector('#voirmdp');

bouton.addEventListener('click', function() {
  var x = document.querySelector("#password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
});