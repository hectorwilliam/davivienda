import React from 'react';
import { StyleSheet, TextInput, Text, View, Button } from "react-native";
import ImagePicker from 'react-native-image-picker';


export const imagePickerOptions = {
    maxWidth: 1000,
    maxHeight: 1000,
    quality: 0.4,
    mediaType: 'photo'
  }

export default function Form({ getValues, fields, dataField, errores }) {
    return (
        <View style={styles.contentMain}>
            {fields.map((item, key) => {
                return (
                    <View key={key} style={styles.marginBottom}>
                        <Text style={styles.label}>{item.label}</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={newText => getValues(item, newText)}
                            value={dataField?.[item.name]}
                            secureTextEntry={item.type === "password"}
                        />
                        {errores?.[item.name] &&
                            <Text style={styles.labelError}>{errores[item.name]}</Text>
                        }
                    </View>
                )
            })}

        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        paddingLeft: 10,
        paddingRight: 10,
    },
    contentMain: {
        padding: 10,
    },
    labelError: {
        color: "red"
    },
    marginBottom: {
        marginBottom: 20
    }
});