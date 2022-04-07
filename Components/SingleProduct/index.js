import React, { useState, useEffect } from 'react';
import { View, Image, Text, StyleSheet, ScrollView } from 'react-native';

import { getProductApi } from '../Services/Products';

export default function SingleProduct({ route, navigation }) {

    const [dataSingle, setDataSingle] = useState({})

    const getSingleProduct = () => {
        getProductApi("/" + route.params.id).then(response => {
            console.log(response, "responseresponseresponse")
            setDataSingle(response.data)
        }).catch(error => {
            console.log(error, "error,asdasdsda")
        })
    }

    useEffect(() => {
        //setDataSingle(route.params.id)
        getSingleProduct()
    }, [])

    return (
        <ScrollView>
            <View>
                <Image
                    style={{
                        width: "100%",
                        height: 200,
                        marginBottom: 10
                    }}
                    source={{
                        uri: dataSingle?.images?.[0] ?? "",
                    }}
                />
                <View style={{

                    padding: 10
                }}>
                    <Text style={styles.textStyle}>{dataSingle.title}</Text>
                    <Text style={styles.textStyle}>{dataSingle.description}</Text>
                    <Text style={styles.textStyle}>{dataSingle.price}</Text>
                    <Text style={styles.textStyle}>{dataSingle.discountPercentage}</Text>
                    <Text style={styles.textStyle}>{dataSingle.rating}</Text>
                    <Text style={styles.textStyle}>{dataSingle.stock}</Text>
                    <Text style={styles.textStyle}>{dataSingle.category}</Text>
                    <Text style={styles.textStyle}>{dataSingle.brand}</Text>
                </View>



            </View>
        </ScrollView>

    )
}


const styles = StyleSheet.create({

    textStyle: {
        fontSize: 20,
        marginBottom: 10

    },

});