// frontend/App.js
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { supabase } from './supabaseClient'; // Verifique se o caminho está correto

// Importe TODAS as telas
import HomeScreen from './screens/HomeScreen';
import CadastroScreen from './screens/CadastroScreen';
import PesquisaScreen from './screens/PesquisaScreen';
import LoginScreen from './screens/LoginScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {session && session.user ? (
          // Telas para usuários LOGADOS
          <>
            <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Bem-vindo' }} />
            <Stack.Screen name="Pesquisa" component={PesquisaScreen} />
          </>
        ) : (
          // Telas para usuários DESLOGADOS
          <>
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Cadastro" component={CadastroScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
