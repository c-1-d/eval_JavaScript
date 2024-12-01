var toggleDark = document.getElementById('button-dark');
var body = document.body;

toggleDark.onclick = function() {
    body.classList.toggle('Dark_mode');
}
function openText(evt, GamePart) {
    var x = x, content, tab;//sélectionne toutes les classes content et tab + implémentation de la variable x

    content = document.getElementsByClassName('content')
    for (x=0; x< content.length; x++) {
        content[x].style.display = 'none';
    }
    tab = document.getElementsByClassName('tab');
    for(x=0; x< tab.length; x++) {
        tab[x].className = tab[x].className.replace(' tab-active',' ');
    }
    document.getElementById(GamePart).style.display = 'block'
    evt.currentTarget.className += ' tab-active'
}

let form = document.querySelector('form')
form.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log('Envoi du form detecté !')
})

form.addEventListener('submit', function(event){
    event.preventDefault();
    let email = document.querySelector('#email')

    if(email.value == '') {
        console.log('invalide')
    } else {
        console.log('valide')
    }
})