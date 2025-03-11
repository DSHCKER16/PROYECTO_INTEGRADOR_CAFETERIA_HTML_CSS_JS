var formulario = document.getElementById('form'),
    phone = formulario.phone,
    email = formulario.email,
    password = formulario.password,
    confirmPassword = formulario['confirm-password'],
    terms = formulario.terms,
    error = document.getElementById('error');

// Función para validar el teléfono
function validarPhone(e) {
    if (!/^\d{10}$/.test(phone.value)) {
        error.style.display = 'block';
        error.innerHTML += '<li>El número debe tener 10 dígitos.</li>';
        console.log('Número de teléfono inválido');
        e.preventDefault();
    }
}

// Función para validar el correo electrónico
function validarEmail(e) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email.value)) {
        error.style.display = 'block';
        error.innerHTML += '<li>Por favor ingresa un correo electrónico válido.</li>';
        console.log('Correo electrónico inválido');
        e.preventDefault();
    }
}

// Función para validar la contraseña
function validarPassword(e) {
    if (password.value.length < 6) {
        error.style.display = 'block';
        error.innerHTML += '<li>Contraseña poco segura.</li>';
        console.log('Contraseña muy corta');
        e.preventDefault();
    }
}

// Función para validar la confirmación de la contraseña
function validarConfirmPassword(e) {
    if (password.value !== confirmPassword.value) {
        error.style.display = 'block';
        error.innerHTML += '<li>No son iguales las contraseñas.</li>';
        console.log('Contraseñas diferentes');
        e.preventDefault();
    }
}

// Función para validar que los términos sean aceptados
function validarTerms(e) {
    if (!terms.checked) {
        error.style.display = 'block';
        error.innerHTML += '<li>Aceptar términos y condiciones.</li>';
        console.log('Términos no aceptados');
        e.preventDefault();
    }
}

// Función principal que valida el formulario
function validarForm(e) {
    error.innerHTML = '';
    validarPhone(e);
    validarEmail(e); // Validar correo electrónico
    validarPassword(e);
    validarConfirmPassword(e);
    validarTerms(e);
    
    if (error.innerHTML === '') {
        window.location.href = 'tareahtml.html';
        e.preventDefault();
    }
}

formulario.addEventListener('submit', validarForm);
