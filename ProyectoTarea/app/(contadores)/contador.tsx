import { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Animated, Alert } from "react-native";

export default function ContadorScreen() {
  // Estado para almacenar el número de veces que se ha presionado el botón
  const [contador, setContador] = useState(0);

  // Variable animada para la opacidad del mensaje
  const fadeAnim = new Animated.Value(0);

  // useEffect que se ejecuta cada vez que cambia el contador
  useEffect(() => {
    console.log(`El contador ha cambiado a: ${contador}`);

    // Verifica si el contador es múltiplo de 5 y mayor que 0
    if (contador % 5 === 0 && contador !== 0) {
      // Animación para mostrar el mensaje
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();

      // Muestra una alerta en pantalla
      Alert.alert("Aviso", "¡Ha alcanzado un múltiplo de 5!");

      // Después de 1.5 segundos, oculta el mensaje con otra animación
      setTimeout(() => {
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }).start();
      }, 1500);
    }
  }, [contador]); // Se ejecuta cada vez que cambia el valor de `contador`

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {/* Texto del título */}
        <Text style={styles.texto}>Contador</Text>

        {/* Muestra el valor actual del contador */}
        <Text style={styles.contador}>{contador}</Text>

        {/* Botón para incrementar el contador */}
        <TouchableOpacity
          style={styles.boton}
          onPress={() => setContador(contador + 1)}
          activeOpacity={0.7}
        >
          <Text style={styles.botonTexto}>+1</Text>
        </TouchableOpacity>

        {/* Mensaje animado que aparece cuando se alcanza un múltiplo de 5 */}
        <Animated.Text style={[styles.mensaje, { opacity: fadeAnim }]}>
          🎉 ¡Múltiplo de 5 alcanzado! 🎉
        </Animated.Text>
      </View>
    </View>
  );
}

// Estilos para la pantalla
const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa toda la pantalla
    justifyContent: "center", // Centra los elementos en el eje vertical
    alignItems: "center", // Centra los elementos en el eje horizontal
    backgroundColor: "#4B79A1", // Fondo azul
  },
  card: {
    width: "85%", // Ancho del contenedor
    backgroundColor: "#FFF", // Fondo blanco
    padding: 30, // Espaciado interno
    borderRadius: 20, // Bordes redondeados
    alignItems: "center", // Centrar contenido
    shadowColor: "#000", // Sombra negra
    shadowOpacity: 0.3, // Opacidad de la sombra
    shadowOffset: { width: 2, height: 5 }, // Dirección de la sombra
    elevation: 8, // Sombra en Android
  },
  texto: {
    fontSize: 28, // Tamaño del texto
    fontWeight: "bold", // Texto en negrita
    color: "#333", // Color oscuro
    marginBottom: 10, // Espaciado inferior
  },
  contador: {
    fontSize: 50, // Tamaño grande del número
    fontWeight: "bold", // Texto en negrita
    color: "#007BFF", // Azul vibrante
    marginBottom: 20, // Espaciado inferior
  },
  boton: {
    backgroundColor: "#FF5733", // Color naranja
    paddingVertical: 12, // Espaciado vertical
    paddingHorizontal: 40, // Espaciado horizontal
    borderRadius: 50, // Bordes redondeados
    shadowColor: "#FF5733", // Sombra del color del botón
    shadowOpacity: 0.5, // Opacidad de la sombra
    shadowOffset: { width: 1, height: 4 }, // Dirección de la sombra
    elevation: 5, // Efecto de sombra en Android
  },
  botonTexto: {
    color: "#FFF", // Texto blanco
    fontSize: 20, // Tamaño del texto
    fontWeight: "bold", // Texto en negrita
  },
  mensaje: {
    marginTop: 15, // Espaciado superior
    fontSize: 18, // Tamaño del texto
    color: "green", // Texto en color verde
    fontWeight: "600", // Texto en negrita
    textAlign: "center", // Centrar texto
  },
});
