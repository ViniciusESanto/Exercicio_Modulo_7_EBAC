document.getElementById('myForm').addEventListener('submit', function(event){
    event.preventDefault();

    var campoA = parseInt (document.getElementById('campoA').value);
    var campoB = parseInt (document.getElementById('campoB').value);

    if (campoB > campoA) {
        showMessage ('Formulario valido!', 'Success');
    } else {
        showMessage ('Numero B deve ser maior que numero A.', 'error');
    }
});

function showMessage(message, className) {
    var messageDiv = document.getElementById('message');
    messageDiv.textContent = message
    messageDiv.className = 'message' + className;
}