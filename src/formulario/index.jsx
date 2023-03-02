import { useState } from 'react';

const Formulario = () => {
    let [altura, setAltura ]= useState(0);
    let [peso, setPeso ]= useState(0);
    let [nome, setNome] = useState('');

    const alteraNome = (evento) => {
        setNome(estadoAnterior => {
            console.log(estadoAnterior);

            return evento.target.value;
        })
    }

    const mostraResultado = () => {
        const resultado = peso / (altura * altura);
        const imc = resultado;

        if (imc >= 25 && imc < 29.9 ) {
            return (
                <p> Paciente está acima do peso </p>
            )
        } else if ( imc >= 30 && imc <34.9 ) {
            return (
                <p> Paciente está obesidade grau 1 </p>
            )
        }  else if ( imc >= 35 && imc <39.9 ) {
            return (
                <p> Paciente está obesidade grau 2 </p>
            )
        } else if ( imc >= 40 ) {
            return (
                <p> Paciente está obesidade grau 3 </p>
            )
        } else if (imc >= 18.5 &&  imc < 24.9) {
            return (
                <p> Paciente está dentro do peso </p>
            )
        }  else if ( imc < 18.5 ) {
            return (
                <p> Paciente está abaixo do peso </p>
            )
            }  
    }

    return (
        <form>
            <input type="text" placeholder='Nome' onChange={alteraNome} />
            <input type="number" placeholder='Altura em Metros' onChange={evento => setAltura(parseFloat(evento.target.value))}/>
            <input type="number" placeholder='Peso em Kg' onChange={evento => setPeso(parseFloat(evento.target.value))} />
            {mostraResultado()}
        </form>
    )
}

export default  Formulario;