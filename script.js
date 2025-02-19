const showCT = document.getElementById('tem-ct-s');
const hideCT = document.getElementById('tem-ct-n');
const sessionCT = document.getElementById('campo-conselheiro');
const showLA = document.getElementById('tipo-mse-la');
const showPSC = document.getElementById('tipo-mse-psc');
const sessionLA = document.getElementById('campo-tempo-la');
const sessionPSC = document.getElementById('campo-tempo-psc');
const showFinalizada = document.getElementById('mse-finalizada-s');
const hideFinalizada = document.getElementById('mse-finalizada-n');
const showInterrupcao = document.getElementById('tipo-finalizacao-i');
const hideInterrupcao = document.getElementById('tipo-finalizacao');
const sessionFinalizada = document.getElementById('campo-mse-finalizada');
const sessionInterrupcao = document.getElementById('campo-interrupcao');

function showContent(element, session) {
    if(element.checked) {
        session.style.display = 'block';
    }
}

function hideContent(element, session) {
    if (element.checked) {
        session.style.display = 'none';
        resetFields(session);
    }
}

function toggleContent(element, session) {
    if(element.checked) {
        session.style.display = 'block';
    } else {
        session.style.display = 'none';
        resetFields(session);
    }
}

showCT.addEventListener('change', () => showContent(showCT, sessionCT));

hideCT.addEventListener('change', () => hideContent(hideCT, sessionCT));

showLA.addEventListener('change', () => toggleContent(showLA, sessionLA));

showPSC.addEventListener('change', () => toggleContent(showPSC, sessionPSC));

showFinalizada.addEventListener('change', () => showContent(showFinalizada, sessionFinalizada));

hideFinalizada.addEventListener('change', function() {
    hideContent(hideFinalizada, sessionFinalizada);
    sessionInterrupcao.style.display = 'none';
    resetFields(sessionInterrupcao);
});

document.querySelectorAll('input[name="tipo-finalizacao"]').forEach(function(radio) {
    radio.addEventListener('change', () => toggleContent(showInterrupcao, sessionInterrupcao));
});

function resetFields(session) {
    const inputs = session.querySelectorAll('input');

    inputs.forEach(input => {
        if (input.type === 'radio' || input.type === 'checkbox') {
            input.checked = false; 
        } else if (input.type === 'text' || input.type === 'number' || input.type === 'date') {
            input.value = ''; 
        }
    });
}