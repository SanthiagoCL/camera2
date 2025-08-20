import * as React from 'react';
import { Stack } from 'expo-router'
import{
    Alert,
    StyleSheet,
    Switch,
    TouchableHighlight ,
    View,
} from "react-native"

import * as ExpoMediaLibrary from "expo-media-library"

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import{ Camera, CameraPermissionStatus }from 'react-native-vision-camera';
import { Ionicons } from '@expo/vector-icons';

const ICON_SIZE =26;



export default function PermissionScreen(){
    const [ CameraPermissionStatus, setCameraPermissionStatus] = React.
    useState<CameraPermissionStatus>("not-determined");
    const[microphonePermissionStatus, setMicrophonePemissionStauts] =React.
    useState<CameraPermissionStatus>("not-determined")

    const [MediaLibraryPermission, requestMediaLibraryPermission] = ExpoMediaLibrary.
    usePermissions();

    return(
    <>
    <Stack.Screen options={{ headerTitle: "Permissions"}}/>
     <ThemedView style= {styles.container}>
        <ThemedText type='subtitle' style = {styles.subtitle}>
            Aplicativo de Câmera precisa acessar algumar permissões para funcionar 
            corretamente em seu dispositivo
        </ThemedText>

        <View style= {styles.row}>
            <Ionicons name="lock-closed-outline"/>
        </View>

     </ThemedView>
    </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    subtitle:{
        textAlign : 'center',
        padding: 20,
    },
    footnote: {
        fontSize: 12,
        fontWeight:"bold",
        letterSpacing:2,
    },
    row:{
        flexDirection:"row",
        alignItems:"center",
        gap:6,
    },

});

