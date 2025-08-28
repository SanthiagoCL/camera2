//Importa o componente expo-router para navegação
//Link: criar links entre telas
//Stack: manipular a pilha de navegação
//uselocalsearch: hook para acessar a URL atual
//useRouter: hook para manipular a navegação

import { Link, Stack, useLocalSearchParams, useRouter } from "expo-router";

//Importa componentes do React Native
//Alert: exibir alertas
//Image: exibir imagens
//StyleSheet: criar estilos

import { Alert, Image, StyleSheet } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

import ObscuraButton from "@/components/ObscuraButton";

import { saveToLibraryAsync } from "expo-media-library";
import { ColorSpace } from "react-native-reanimated";



export default function MediaScreen() {


    //pega os paramentos da URL/rota 
    //media - caminho do arquivo
    //type - tipo de midia 
    const { media, type } = useLocalSearchParams();

    //hook de navegação programatica
    const router = useRouter();

    //log os 
    console.log(media, type);
    return (
        <ThemedView style={styles.container}>
            {
                type === "photo" ? (
                    <Image
                        source={{ uri: `file//${media}` }}
                        style={{ width: "100%", height: "80%", resizeMode: "contain" }}
                    />
                ) : null
                //aqui poderia entrar um <video> para exibir videos no futuro
            }
            <ObscuraButton
                title="Salvar na galeraia"
                containerStyle={{ alignself: "center" }}
                OnPress={async () => {
                    saveToLibraryAsync(media as string);

                    Alert.alert("Salvo na galeria!");

                    router.back();
                }}
            />

            <link href="/" style={styles.link}>
                <ThemedText type="link">Deletar e voltar para a tela principal</ThemedText>
            </link>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    link: {
        marginTop: 15,
        paddingVertical: 15,
        alignSelf: "center"
    }
});