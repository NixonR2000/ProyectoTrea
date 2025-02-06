import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function RelojDigital() {
    // Estado para almacenar la hora actual en formato HH:mm:ss
    const [hora, setHora] = useState('');

    useEffect(() => {
        // Función que obtiene la hora actual y actualiza el estado
        const actualizarHora = () => {
            const fechaActual = new Date();
            const horas = String(fechaActual.getHours()).padStart(2, '0');
            const minutos = String(fechaActual.getMinutes()).padStart(2, '0');
            const segundos = String(fechaActual.getSeconds()).padStart(2, '0');

            setHora(`${horas}:${minutos}:${segundos}`);
        };

        // Establecer intervalo para actualizar la hora cada segundo
        const intervalo = setInterval(actualizarHora, 1000);
        actualizarHora(); // Llamada inicial para evitar el retraso

        // Limpieza del intervalo cuando el componente se desmonte
        return () => clearInterval(intervalo);
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Hora Actual</Text>
            <Text style={styles.reloj}>{hora}</Text>
        </View>
    );
}

// Estilos renovados para una apariencia más moderna
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1E1E1E', // Fondo oscuro estilo minimalista
    },
    titulo: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFCC00', // Amarillo brillante para resaltar el título
        marginBottom: 15,
    },
    reloj: {
        fontSize: 65,
        fontWeight: 'bold',
        color: '#00FF99', // Verde neón para un efecto llamativo
        backgroundColor: '#333',
        paddingHorizontal: 30,
        paddingVertical: 15,
        borderRadius: 15, // Bordes más redondeados
        textAlign: 'center',
        shadowColor: '#00FF99',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.6,
        shadowRadius: 10,
        elevation: 8, // Sombra para darle profundidad
    },
});
