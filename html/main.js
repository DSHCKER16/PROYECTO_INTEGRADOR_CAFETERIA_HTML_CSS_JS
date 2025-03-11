$(document).ready(function(){
    $('.galeria').bxSlider({
        auto: true,       
        mode: 'fade',     
        captions: false,   
        slideWidth: '800%',  // Esto ajusta el tamaño de las imágenes al 50% de su contenedor
        adaptiveHeight: true,
        responsive: true, 
        pager: false,      // Desactivar los puntos de navegación
        controls: true,    // Activar las flechas de navegación
        nextText: '<i class="fas fa-chevron-right"></i>',  // Flecha derecha
        prevText: '<i class="fas fa-chevron-left"></i>'   // Flecha izquierda
    });
});


var formulario = document.getElementById('form'),
    phone = formulario.phone,
    password = formulario.password,
    confirmPassword = formulario['confirm-password'],
    terms = formulario.terms,
    error = document.getElementById('error');

function validarPhone(e) {
    if (!/^\d{10}$/.test(phone.value)) {
        error.style.display = 'block';
        error.innerHTML += '<li>El número debe tener 10 dígitos.</li>';
        console.log('Número de teléfono invalido');
        e.preventDefault();
    }
}

function validarPassword(e) {
    if (password.value.length < 6) {
        error.style.display = 'block';
        error.innerHTML += '<li>Contraseña poco segura.</li>';
        console.log('Contraseña muy corta');
        e.preventDefault();
    }
}

function validarConfirmPassword(e) {
    if (password.value !== confirmPassword.value) {
        error.style.display = 'block';
        error.innerHTML += '<li>No son iguales las contraseñas.</li>';
        console.log('Contraseñas diferentes');
        e.preventDefault();
    }
}

function validarTerms(e) {
    if (!terms.checked) {
        error.style.display = 'block';
        error.innerHTML += '<li>Aceptar terminos y condiciones.</li>';
        console.log('Terminos no aceptados');
        e.preventDefault();
    }
}

function validarForm(e) {
    error.innerHTML = '';
    validarPhone(e);
    validarPassword(e);
    validarConfirmPassword(e);
    validarTerms(e);
    
    if (error.innerHTML === '') {
        window.location.href = 'tareahtml.html';
        e.preventDefault();
    }
}

formulario.addEventListener('submit', validarForm);