import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native"
import Title from "../component/UI/Title"
function Login({navigation, route}) {
    // Variables

    // Functions

    function handlerLogin() {

    }

    function handlerRegister() {
        navigation.navigate("Register")
    }

    return (

        <View style={styles.root}>
            <Title>Login</Title>
            <View style={styles.formContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextColor="#fff"
                    keyboardType="email-address"
                />

                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="#fff"
                    secureTextEntry
                />

                <TouchableOpacity style={styles.Button} onPress={handlerLogin}>
                    <Text style={styles.ButtonText}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.Button} onPress={handlerRegister}>
                    <Text style={styles.ButtonText}>Register</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: "center",
        padding: 16
    }, formContainer: {
        width: '100%',
        marginTop: 20,
    },
    input: {
        height: 40,
        backgroundColor: 'black',
        paddingHorizontal: 10,
        marginBottom: 10,
        color: 'whiteText',
        borderRadius: 5,
    },
    Button: {
        backgroundColor: '#fff',
        paddingVertical: 15,
        borderRadius: 5,
        alignItems: 'center',
    },
    ButtonText: {
        color: '#FF6347',
        fontWeight: 'bold',
    },
})
