import GeneratorCPF from './modules/GeneratorCPF';
import './assets/css/style.css';

function generator() {
    const gera = new GeneratorCPF();
    const cpfGenerated = document.querySelector('.cpf-generated');
    cpfGenerated.innerHTML = gera.geraNewCpf();
}
const buttonGerar = document.querySelector('#button-gerar');
buttonGerar.addEventListener('click', () => {
    generator();
});


const inputCpf = document.querySelector('#input-cpf');
function validando() {
    inputCpf.addEventListener('keypress', () => {
        let cpflength = inputCpf.value.length;
    
        if (cpflength === 3 || cpflength === 7) {
            inputCpf.value += '.';
        } else if (cpflength === 11) {
            inputCpf.value += '-';
        }
    });

    // não finalizado

}
validando();
