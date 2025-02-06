import { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from "react-native";

export default function RegistrationScreen() {
    // Estado que almacena los datos del usuario
    const [usuario, setUsuario] = useState({
        nombre: '',
        edad: '',
    });

    // Maneja los cambios en los campos de entrada
    const manejarCambio = (campo: string, valor: string) => {
        setUsuario((prevState) => ({
            ...prevState,
            [campo]: valor,
        }));
    };

    // Valida y muestra un mensaje con el nombre y la edad
    const mostrarMensaje = () => {
        const edadNumerica = parseInt(usuario.edad.trim(), 10);

        if (!usuario.nombre.trim()) {
            Alert.alert('Error', 'Por favor, ingresa tu nombre.');
            return;
        }

        if (isNaN(edadNumerica) || edadNumerica <= 0) {
            Alert.alert('Error', 'La edad debe ser un número válido y mayor que 0.');
            return;
        }

        Alert.alert('Mensaje', `Hola, ${usuario.nombre}. Tienes ${edadNumerica} años.`);
    };

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.titulo}>Registro de Usuario</Text>

                {/* Campo para ingresar el nombre */}
                <Text style={styles.label}>Nombre:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Escribe tu nombre"
                    keyboardType="default"
                    value={usuario.nombre}
                    onChangeText={(texto) => manejarCambio('nombre', texto)}
                />

                {/* Campo para ingresar la edad */}
                <Text style={styles.label}>Edad:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Escribe tu edad"
                    keyboardType="numeric"
                    value={usuario.edad}
                    onChangeText={(texto) => manejarCambio('edad', texto)}
                />

                {/* Botón para enviar los datos */}
                <TouchableOpacity style={styles.boton} onPress={mostrarMensaje}>
                    <Text style={styles.botonTexto}>Mostrar Mensaje</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

// Estilos renovados
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#E0E0E0",
    },
    card: {
        width: "85%",
        backgroundColor: "#FFF",
        padding: 25,
        borderRadius: 15,
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowOffset: { width: 2, height: 4 },
        elevation: 5,
    },
    titulo: {
        fontSize: 22,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20,
        color: "#333",
    },
    label: {
        fontSize: 16,
        fontWeight: "600",
        marginBottom: 5,
        color: "#555",
    },
    input: {
        height: 45,
        borderWidth: 1,
        borderColor: "#CCC",
        borderRadius: 10,
        paddingHorizontal: 12,
        marginBottom: 15,
        backgroundColor: "#F9F9F9",
    },
    boton: {
        backgroundColor: "#007BFF",
        paddingVertical: 12,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 10,
    },
    botonTexto: {
        color: "#FFF",
        fontSize: 16,
        fontWeight: "bold",
    },
});

