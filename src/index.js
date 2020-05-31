import moment from 'moment'
import './style.css';
            
const bouton = document.querySelector('#voirmdp');

bouton.addEventListener('click', function() {
  var x = document.querySelector("#password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
});