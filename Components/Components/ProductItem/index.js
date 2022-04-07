import React from "react"
import { View, StyleSheet, Image, Text, Button } from 'react-native';

export default function ItemProduct({ data, navigation, hiddenImagen, hiddenButton }) {
    return (
        <View>
            {data.map((item, key) => {
                return (
                    <View style={{
                        flexDirection: "row",
                        marginBottom: 40,
                        padding: 10
                    }} key={key}>
                        {!hiddenImagen &&
                        <Image
                            style={styles.imagenProduct}
                            source={{
                                uri: item.images?.[0] ?? "",
                            }}
                        />
                        }
                        <View style={{
                            flexDirection: "column",
                            padding: 10
                        }}>
                            <Text>{item.title}</Text>
                            <Text>{item.description}</Text>
                            <Text>Precio : {item.price}</Text>
                            <Text>Descuento : {item.discountPercentage}</Text>
                            {!hiddenButton &&
                            <Button
                                onPress={() => {
                                    // Pass and merge params back to home screen
                                    navigation.navigate({
                                      name: 'Producto',
                                      params: { id: item.id },
                                    });
                                  }} 
                                title="Ver producto"
                                color="#841584"
                            />
                        }
                        </View>
                    </View>
                )
            })}

        </View>
    )
}

const styles = StyleSheet.create({

    imagenProduct: {
        width: 120,
        height: 120,

    },

});