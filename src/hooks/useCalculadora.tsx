import { StyleSheet, Text, View } from 'react-native'
import React, { useRef, useState } from 'react'

enum Operadores {
    sumar, restar, multiplicar, dividir
}
export const useCalculadora = () => {



    const [numero, setNumero] = useState('0');
    const [numeroAnterior, setAnteriorNumero] = useState('0');

    const ultimaOperacion = useRef<Operadores>();

    const limpiar = () => {
        setNumero('0');
        setAnteriorNumero('0');
    }


    const btnEliminar = () => {

        let negativo = '';
        let numeroTemp = numero;

        if (numero.includes('-')) {
            negativo = '-';
            numeroTemp = numero.substr(1);
        }


        if (numeroTemp.length > 1) {
            setNumero(negativo + numeroTemp.slice(0, -1))
        } else {
            setNumero('0');
        }
    }


    const armarNumero = (numeroTexto: string) => {
        // No aceptar doble punto
        if (numero.includes('.') && numeroTexto === '.') return;

        if (numero.startsWith('0') || numero.startsWith('-0')) {

            //Punto decimal
            if (numeroTexto === '.') {
                setNumero(numero + numeroTexto);

                //Evaluar si es otro 0, y hay punto
            } else if (numeroTexto === '0' && numero.includes('.')) {
                setNumero(numero + numeroTexto);



                //Evaluarv si es diferente de 0 y no tiene un punto y remplazar el 0 (Primer numero)
            } else if (numeroTexto !== '0' && !numero.includes('.')) {
                setNumero(numeroTexto);


                //Evitar 0000.0
            } else if (numeroTexto === '0' && !numero.includes('.')) {
                setNumero(numero);

            } else {
                setNumero(numero + numeroTexto);
            }



        } else {
            setNumero(numero + numeroTexto);
        }


    }

    const positivoNegativo = () => {
        if (numero.includes('-')) {
            setNumero(numero.replace('-', ''));
        } else {
            setNumero('-' + numero);
        }
    }

    const cambairNumeroPorAnterior = () => {

        if (numero.endsWith('.')) {
            setAnteriorNumero(numero.slice(0, -1));
        } else {
            setAnteriorNumero(numero);
        }

        setNumero('0');
    }


    const btnDividir = () => {
        cambairNumeroPorAnterior();
        ultimaOperacion.current = Operadores.dividir;
        console.log(ultimaOperacion.current);
    }
    const btnMultiplicar = () => {
        cambairNumeroPorAnterior();
        ultimaOperacion.current = Operadores.multiplicar;
        console.log(ultimaOperacion.current);
    }
    const btnSuma = () => {
        cambairNumeroPorAnterior();
        ultimaOperacion.current = Operadores.sumar;
        console.log(ultimaOperacion.current);
    }
    const btnResta = () => {
        cambairNumeroPorAnterior();
        ultimaOperacion.current = Operadores.restar;
        console.log(ultimaOperacion.current);
    }


    const calcular = () => {

        const num1 = Number(numero);
        const num2 = Number(numeroAnterior);

        switch (ultimaOperacion.current) {
            case Operadores.sumar:
                setNumero(`${num1 + num2}`);
                break;

            case Operadores.restar:
                setNumero(`${num2 - num1}`);
                break;

            case Operadores.dividir:
                setNumero(`${num2 / num1}`);
                break;

            case Operadores.multiplicar:
                setNumero(`${num1 * num2}`);
                break;

        }

        setAnteriorNumero('0');
    }

    return {
        numeroAnterior,
        numero,
        armarNumero,
        btnDividir,
        btnEliminar,
        btnMultiplicar,
        btnResta,
        btnSuma,
        calcular,
        limpiar,
        positivoNegativo
    }
}



