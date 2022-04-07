import React, { useEffect, useState } from 'react';
import { Text, ScrollView, View, Button } from 'react-native';
import ItemProduct from '../Components/ProductItem';
import { getCardApi } from '../Services/Card';

export default function Card({ navigation }) {
    const [products, setProducts] = useState(false)
    const getAllProduct = () => {
        getCardApi().then(response => {
            setProducts(response.data)

        }).catch(error => {
            console.log(error, "error")
        })
    }

    useEffect(() => {
        getAllProduct()
    }, [])
    console.log(products?.carts?.discountedTotal, "products?.carts?products?.carts?")
    return (
        <ScrollView>
            <ItemProduct
                data={products?.carts?.[0]?.products ?? []}
                navigation={navigation}
                hiddenButton={true}
                hiddenImagen={true}/>
            {products &&
                <View style={{

                    marginBottom: 40,
                    padding: 20
                }}>
                    <Text>Total productos: {products?.carts?.[0]?.totalProducts}</Text>
                    <Text>Valor total del carrito: {products?.carts?.[0]?.total}</Text>
                    <Text>Total descontado: {products?.carts?.[0]?.discountedTotal}</Text>
                </View>
            }
        </ScrollView>
    )
}