import { useColorScheme } from "@/hooks/useColorScheme";
import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";


export default function SimuladorLayout(){

    const colorScheme = useColorScheme();
    return(
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <Stack
            screenOptions={{
                headerShown: false,
            }}
            >
                <Stack.Screen name="simulador" options={{title:"Simulador de Carga"}}/>
            </Stack>
                <StatusBar style="auto" />
        </ThemeProvider>
    );
}