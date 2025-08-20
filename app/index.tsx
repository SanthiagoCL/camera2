import * as react from "react";
import{
    StyleSheet,
    Platform,
    View,
    SafeAreaView,
    StatusBar,
    TouchableHighlight,
    Linking,
    Text,
} from "react-native";
import{
    Camera,
    useCameraDevice,
    useCameraDevices,
    useCameraPermission,
    useMicrophonePermission,
} from "react-native-vision-camera"
import {Redirect, useRouter} from "expo-router";
import {ThemedText} from "@/components/ThemedText";
import ObscuraButton from "@/components/ObscuraButton";
import {FontAwesome5} from "@expo/vector-icons"
import {BlurView} from "expo-blur";
import ExposureControls from "@/components/ExposureControls"
import {ThemedView} from "@/components/ThemedView";

export default function HomeScreen() {
    const {hasPermission} = useCameraPermission();
    const MicrophonePermission = Camera.getMicrophonePermissionStatus();
    const RedirectToPermission =!hasPermission  || MicrophonePermission === "not-determined";
    
    const device = useCameraDevice("back");
    const router = useRouter();

   if (RedirectToPermission) return <Redirect href={"/permissions"} />;
   if (!device) return <></>;
   
   return <ThemedView>oi</ThemedView>
}