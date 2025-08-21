//importação e temas claro/escuro e theme prider para componentes do app
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider
} from '@react-navigation/native';

//hook do expo para carrear fontes personalizadas 
import { useFonts } from 'expo-font';

//navegação em pilha
import { Stack } from 'expo-router';

//biblioteca do expo para controlar splash screen 
import * as SplashScreen from "expo-splash-screen";

//hook nativo do react para efeitos colaterais 
import { useEffect } from 'react';

//importar biblioteca necessaria para criar animações
import 'react-native-reanimated';

//hook customizado para detectar se o dispositivo esta em modo claro ou escuro
import { useColorScheme } from '@/hooks/useColorScheme';

// componente que habilita o uso de gestos
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Modal } from 'react-native';

//impede que a splash screen apareça automaticamente 
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  //detecta se o usuario esta no tea claro ou escuro
  const colorScheme = useColorScheme();

  //carregar fonte personalizada 
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  // assim que as fontes carregam esonde a splash screen
  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [ loaded ]);

  //enquanto fontes não carregam, não renderiza nada (retorna null)
  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    //componente raiz que garante suporte a gestos
    <GestureHandlerRootView>

      <ThemeProvider value={DefaultTheme}>
        <Stack>

          <Stack.Screen name="index" options={{ headerShown: false }} />

          <Stack.Screen name="permission" options={{ presentation: "modal", headerShown: true }} />

          <Stack.Screen name='media' options={{ presentation: "modal", headerShown: true }} />

          <Stack.Screen name="+not-found" options={{ presentation: "modal" }} />

        </Stack>

       
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}


