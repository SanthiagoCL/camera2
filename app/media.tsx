//Importa o componente expo-router para navegação
//Link: criar links entre telas
//Stack: manipular a pilha de navegação
//uselocalsearch: hook para acessar a URL atual
//useRouter: hook para manipular a navegação

import{ link, stack, useLocalSearch, useRouter } from "expo-router";

//Importa componentes do React Native
//Alert: exibir alertas
//Image: exibir imagens
//StyleSheet: criar estilos

import { Alert, Image, StyleSheet } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

import ObscuraButton from "@/components/ObscuraButton";

import { saveToLibraryAsync } from "expo-media-library";