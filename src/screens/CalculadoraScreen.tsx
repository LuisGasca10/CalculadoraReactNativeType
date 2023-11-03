import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import BotonCalc from '../components/BotonCalc'
import { useCalculadora } from '../hooks/useCalculadora'


export const CalculadoraScreen = () => {

    const { armarNumero, btnDividir, btnEliminar, btnMultiplicar, btnResta, btnSuma,
        calcular, limpiar, numero, numeroAnterior, positivoNegativo } = useCalculadora();

    return (
        <View style={styles.calculadoraConatiner}>

            {
                (numeroAnterior !== '0') &&
                (<Text style={styles.resultadoPequeno}>{numeroAnterior}</Text>)
            }

            <Text
                style={styles.resultado}
                numberOfLines={1}
                adjustsFontSizeToFit={true}
            >
                {numero}
            </Text>


            {/* Fila de botones */}
            <View style={styles.fila}>
                <BotonCalc text='C' color='#9B9B9B' accion={limpiar} />
                <BotonCalc text='+/-' color='#9B9B9B' accion={positivoNegativo} />
                <BotonCalc text='del' color='#9B9B9B' accion={btnEliminar} />
                <BotonCalc text='/' color='#FF9427' accion={btnDividir} />

            </View>
            {/* Fila de botones */}
            <View style={styles.fila}>
                <BotonCalc text='7' accion={armarNumero} />
                <BotonCalc text='8' accion={armarNumero} />
                <BotonCalc text='9' accion={armarNumero} />
                <BotonCalc text='x' color='#FF9427' accion={btnMultiplicar} />

            </View>
            {/* Fila de botones */}
            <View style={styles.fila}>
                <BotonCalc text='4' accion={armarNumero} />
                <BotonCalc text='5' accion={armarNumero} />
                <BotonCalc text='6' accion={armarNumero} />
                <BotonCalc text='-' color='#FF9427' accion={btnResta} />

            </View>
            {/* Fila de botones */}
            <View style={styles.fila}>
                <BotonCalc text='1' accion={armarNumero} />
                <BotonCalc text='2' accion={armarNumero} />
                <BotonCalc text='3' accion={armarNumero} />
                <BotonCalc text='+' color='#FF9427' accion={btnSuma} />

            </View>
            {/* Fila de botones */}
            <View style={styles.fila}>
                <BotonCalc text='0' ancho accion={armarNumero} />

                <BotonCalc text='.' accion={armarNumero} />
                <BotonCalc text='=' color='#FF9427' accion={calcular} />

            </View>


        </View>
    )
}
