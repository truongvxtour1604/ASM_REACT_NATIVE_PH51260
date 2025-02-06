import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import { StatusBar } from 'expo-status-bar';

export default function SignIn({ navigation }: { navigation: any }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = () => {
        if (email === 'truongvxph51260@gmail.com' && password === 'Tuatruong2305') {
            navigation.reset({
                index: 0,
                // Đặt Home làm màn hình duy nhất trong stack để ngăn quay lại màn hình trước đó
                routes: [{ name: 'Home' }],
            });
        } else {
            Alert.alert('Lỗi đăng nhập', 'Email hoặc mật khẩu không đúng!');
        }
    };

    return (
        <View style={styles.mainView}>
            <View style={styles.topView}>
                <Text style={styles.txtVXT}>VXT</Text>
            </View>

            <View style={styles.bottomView}>
                <Entypo name="chevron-left" size={50} color="#fff" style={styles.iconStyle} onPress={() => navigation.navigate('Welcome')} />
                <Text style={styles.txtWelcomeBack}>
                    Welcome{'\n'}
                    back
                </Text>
                <View style={styles.formView}>
                    <TextInput
                        placeholder="Email address*"
                        placeholderTextColor="#fff"
                        style={styles.textInput}
                        value={email}
                        onChangeText={setEmail}  // Lưu email vào state
                    />
                    <TextInput
                        placeholder="Password*"
                        placeholderTextColor="#fff"
                        secureTextEntry={true}
                        style={styles.textInput}
                        value={password}
                        onChangeText={setPassword}  // Lưu mật khẩu vào state
                    />
                    <TouchableOpacity style={styles.btnSignIn} onPress={handleSignIn}>
                        <Text style={styles.txtSignIn}>Sign in</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.btnSignUp} onPress={() => navigation.navigate('SignUp')}>
                    <Text style={styles.txtSignUp}>Don't have an account? Sign up</Text>
                </TouchableOpacity>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    topView: {
        width: '100%',
        height: '30%',
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottomView: {
        width: '100%',
        height: '70%',
        backgroundColor: '#000',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
    },
    iconStyle: {
        marginTop: 20,
        marginLeft: 10
    },
    txtVXT: {
        fontSize: 100
    },
    txtWelcomeBack: {
        color: '#fff',
        fontSize: 40,
        fontWeight: 'bold',
        marginLeft: 30,
        marginTop: 20,
        fontFamily: 'Amoresa'
    },
    formView: {
        width: '100%',
        alignItems: 'center',
        marginTop: 20
    },
    textInput: {
        width: '90%',
        height: 52,
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 10,
        padding: 5,
        marginTop: 20,
        color: '#fff'
    },
    btnSignIn: {
        width: '90%',
        height: 52,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    txtSignIn: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    btnSignUp: {
        width: '100%',
        alignItems: 'center',
        marginTop: 20
    },
    txtSignUp: {
        color: 'gray',
    },
});
