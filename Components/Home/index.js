import React, { useEffect, useState } from 'react';
import { Text, ScrollView, View, Button } from 'react-native';
import ItemProduct from '../Components/ProductItem';
import { getProductApi } from '../Services/Products';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home({ navigation }) {
    const [products, setProducts] = useState([])
    const getAllProduct = () => {
        getProductApi().then(response => {
            setProducts(response.data)
        }).catch(error => {
            console.log(error, "error")
        })
    }

    useEffect(() => {
        getAllProduct()
    }, [])

    const logout = async () => {
        await AsyncStorage.setItem('@token', "")
        navigation.push("Login")

    }
    return (
        <ScrollView>
            <View style={{
                flexDirection: "row",
                marginBottom: 20,
                padding: 10
            }}>

                <Button
                    
                    onPress={logout}
                    title="Cerrar sesion"
                    color="#841584"
                />
                <Button
                    onPress={() => navigation.push("Carrito")}
                    title="Ver carrito de compra"
                    color="#6b52ae"
                />
            </View>
            <ItemProduct data={products?.products ?? []} navigation={navigation} />
        </ScrollView>
    )
}