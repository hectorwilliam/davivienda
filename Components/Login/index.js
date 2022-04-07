import React, { useState, useEffect } from 'react';
import { View, Button, Alert } from 'react-native';
import Form from "../Components/Form"
import { loginApi } from '../Services/Login';
import { Fieldlogin } from './Fields';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login({navigation}) {
    const [dataField, setDataField] = useState({})

    const getValues = (item, newText) => {
        setDataField({...dataField, [item.name] : newText})
    }
    const loginUser = () =>{
        loginApi(dataField).then(async response=>{
            await AsyncStorage.setItem('@token', response.data.token)
            navigation.push('Home');
        }).catch(error =>{
            Alert.alert('Inicio de sesion', "Contraseña o usuario incorrecto")
        })
    }
    
    const getStatusToken = async () =>{
        if(await AsyncStorage.getItem("@token")){
            navigation.push('Home');
        }

    }

    useEffect(() =>{
        getStatusToken()
    }, [])
 

    return (
        <View>
            <Form
                fields={Fieldlogin}
                getValues={getValues}
                dataField={dataField}
                errores={{}} />
            <Button
                onPress={loginUser}
                title="Iniciar sesion"
                color="#841584"
            />
        </View>

    )
}