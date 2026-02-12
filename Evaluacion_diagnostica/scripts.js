const queryBox = document.querySelector('.tipo_consulta');

const form = document.querySelector('.content form');
const inputs = document.querySelectorAll('.content input');
const textAreas = document.querySelectorAll('.content textarea');

const isEmail = (input) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(input.value);
}

const isEmpty = (input) => {
    return input.value === '' || input.value === undefined;
}

const isEmptyCheckbox = (input) => {
    return !input.checked;
}

// Validar inputs al momento de enviar el formulario
const invalidInputs = (form, values) => {
    let invalid = false;
    const inputs = form.querySelectorAll('input')
    
    // caso text, email, textarea
    inputs.forEach(input => {

        if(input.type === 'checkbox' && isEmptyCheckbox(input)){
            invalid = isEmptyCheckbox(input)
            const error = generateValueError('consentimiento', input);
            input.parentElement.appendChild(error);
        }

        if(input.type === 'text' || input.type === 'email'){
            if(isEmpty(input) || input.classList.contains('error')){
                invalid = true;
            }
        }
    });

    // caso radio's
    if (!values.tipo_consulta) {
        invalid = true;
        const labelParent = form.querySelector('.tipo_consulta p').childNodes[0].nodeValue.trim();
        const error = generateValueError(labelParent, null);
        form.querySelector('.tipo_consulta').appendChild(error);
    }
    return invalid;
}

// Generar y obtener mensaje de error
const generateValueError = (labelName, value) => {
    const error = document.createElement('p');
    error.style.color = 'red';

    // caso radio
    if(value === null){
        error.innerHTML = `${labelName} requerido`;
        return error
    }
    
    // caso email cuando no es valido
    if(value.type === 'email' && !isEmail(value) && value.value !== '') {
        error.innerHTML = 'Por favor, introduce una dirección de correo electrónico válida';
        return error;
    }

    // caso checkbox
    if(value.type === 'checkbox'){
        error.innerHTML = `Para enviar este formulario, por favor consiente ser contactado`;
        return error;
    }

    // caso texto vacio
    error.innerHTML = `${labelName} requerido`;
    return error;
}

// manejo input:radio background
queryBox.addEventListener('change', (event) => {
    if (event.target.type === 'radio') {
        const querys = queryBox.querySelectorAll('.consulta');
        querys.forEach(query => {
            if(query !== event.target) {
                query.classList.remove('selected');
            }
        });
        event.target.parentElement.classList.add('selected')
    }
});

// manejo input errores
form.addEventListener('change', (event) => {
    // Obtener texto de label
    const labelText = event.target.parentElement.querySelector('label').childNodes[0].nodeValue.trim();

    // caso text
    if((event.target.type === 'text') || (event.target.type === 'textarea')){
        if(isEmpty(event.target)){

            // diseño y mensaje de error
            event.target.classList.remove('selected');
            event.target.classList.add('error');
            const error = generateValueError(labelText, event.target.value);

            // agregar mensaje de error
            event.target.parentElement.appendChild(error);
            return
        }

        // caso texto valido, remover error
        event.target.classList.add('selected');
        event.target.classList.remove('error');

        // remover mensaje de error cuando ya no es necesario
        if(event.target.parentElement.querySelector('p')){
            event.target.parentElement.querySelector('p').remove();
        }
    }

    //caso email
    if(event.target.type === 'email'){
        
        // remover mensaje de error para cualquier caso
        if(event.target.parentElement.querySelector('p')){
            event.target.parentElement.querySelector('p').remove();
        }
        
        // caso email valido y texto vacio
        if(isEmail(event.target) && !isEmpty(event.target)){

            event.target.classList.add('selected');
            event.target.classList.remove('error');
            return
        }

        // caso email invalido
        const error = generateValueError(labelText, event.target);
        event.target.parentElement.appendChild(error);
        event.target.classList.remove('selected');
        event.target.classList.add('error');
    }

    if(event.target.type === 'radio'){
        if(event.target.parentElement.parentElement.querySelector('p:last-child')){
            event.target.parentElement.parentElement.querySelector('p:last-child').remove();
            
        }
    }

    if (event.target.type === 'checkbox'){

        if(event.target.parentElement.querySelector('p')){
            event.target.parentElement.querySelector('p').remove();
        }

        if(event.target.checked){
            event.target.classList.add('selected');
            event.target.classList.remove('error');
            return
        }

        const error = generateValueError(labelText, event.target);
        event.target.parentElement.appendChild(error);
    }
});

// generar y obtener modal de confirmación
const createModal = () => {
    const modal = document.createDocumentFragment();
    const modalContainer = document.createElement('div');
    modalContainer.classList.add('modal-container');
    modalContainer.innerHTML = `
        <div class='modal-header'>
            <img src="./assets/images/icon-success-check.svg" alt="success">
            <h2>¡Mensaje enviado!</h2>
        </div>
        <p>Gracias por completar el formulario. ¡Nos pondremos en contacto pronto!</p>
    `;
    return modal.appendChild(modalContainer);
}

// enviar formulario
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const dataForm = new FormData(form);
    const data = Object.fromEntries(dataForm.entries());

    if(invalidInputs(event.target, data)){
        alert('Por favor rellene todos los campos correctamente');
        return
    }
    
    const modalContent = createModal();

    // devolver scroll al inicio
    window.scrollTo(0, 0);
    
    // mostrar modal
    setTimeout(() => {
        document.body.insertBefore(modalContent, document.body.firstChild);
    }, 100);

    // remover modal despues de 5 segundos
    setTimeout(() => {
        document.querySelector('.modal-container').classList.add('hide');
        setTimeout(() => {
            document.querySelector('.modal-container').remove();
        }, 400);
    }, 5000);
});


// manejo de scroll para que se vea el modal en todo momento
window.addEventListener('scroll', () => {
    const modal = document.querySelector('.modal-container');
    const offset = window.scrollY + 5;
    if(modal){
        modal.style.top = `${offset}px`;
    }
});