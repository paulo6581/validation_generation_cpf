import ValidationCPF from './ValidationCPF';

class GeneratorCPF {
    rand(min = 100000000, max = 999999999) {
        return String(Math.floor(Math.random() * (max - min) + min));
    }
    
    geraNewCpf() {
        const cpfsemDigito = this.rand();
        const digito1 = ValidationCPF.geraDigito(cpfsemDigito);
        const digito2 = ValidationCPF.geraDigito(cpfsemDigito + digito1);
        const newCpf = cpfsemDigito + digito1 + digito2;
        return this.formatted(newCpf);
    }

    formatted(cpf) {
        return (
            cpf.slice(0, 3) + '.' + 
            cpf.slice(3, 6) + '.' + 
            cpf.slice(6, 9) + '-' + 
            cpf.slice(9, 11)
        );
    }
}
export default GeneratorCPF;
