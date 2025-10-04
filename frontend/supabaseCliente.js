// Importa as bibliotecas necessárias
import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

// Suas credenciais do Supabase
const supabaseUrl = "https://zbbsuehgsehtryjyqfsa.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpiYnN1ZWhnc2VodHJ5anlxZnNhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk1MTY4NDMsImV4cCI6MjA3NTA5Mjg0M30.OIZJ1_lYVitR55tDa6qzj1ysfGqzt81Esuv0KCFM2po";

// Cria e exporta o cliente Supabase para ser usado em outras partes do app
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage, // Diz ao Supabase para usar o armazenamento local do celular
    autoRefreshToken: true,
    persistSession: true, // Garante que o usuário continue logado
    detectSessionInUrl: false, // Importante para React Native
  },
});
