import React, { useState } from "react";
import { Button, StyleSheet, View, Image, Text, TextInput, ScrollView } from "react-native";
import { API, KEY } from "./Config/Config.js";

export default function App() {

  const [val, setVal] = useState('')
  const [data, setData] = useState([])

  const searchGyphy = async () => {
    const req = await fetch(API + val + KEY)
    const res = await req.json()
    setData(res.data)
  }

  return (

    <View style={styles.container}>

      <TextInput
        style={styles.input}
        value={val}
        onChangeText={(text) => setVal(text)}
      />
      <Button
        title="Search"
        onPress={searchGyphy}
      />

      <ScrollView >
        {
          data.length > 5 ? data.map((el, i) => {
            return (
              <View
                key={i}
                style={{ width: 500, height: 200 }}
              >
                <Image
                  style={{ width: 200, height: 200 }}
                  source={{ uri: el.images.original.url }}
                />
                <Text>
                  {el.title}
                </Text>
              </View>
            )
          })
            : null
        }
      </ScrollView>

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#ccc',
    overflow:'hidden'
  },
  input: {
    width: '80%',
    borderWidth: 2,
    borderColor: 'red',
    margin: 10,
    marginTop: 35
  },
  btn: {
    width: '70%',
    backgroundColor: 'red',
    color: 'red'
  }
})
