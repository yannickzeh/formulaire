import moment from 'moment'
import './style.css';
            
moment.locale('fr')


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