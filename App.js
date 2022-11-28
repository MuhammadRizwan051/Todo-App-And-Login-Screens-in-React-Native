import React, { useEffect, useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Button } from "react-native";

function App() {
  let [txt, setTxt] = useState('')
  let [list, setList] = useState([])
  // let [isDisabled, setIsDisabled] = useState(true)

  let add = () => {
    if (!txt) {
      alert('Plz, write something')
      return
    }
    setList([...list, txt])
    console.log(list)
    setTxt('')
  }

  let deleteAll = () => {
    setList([])
  }

  let edit = (e, i) => {
    setTxt(list[i])
    list[i] = txt
    // list.splice(i, 1)
    setList([...list])
  }

  let del = (e) => {
    list.splice(e, 1)
    setList([...list])
  }


  // let check = () => {
  //   if (txt.length >= 1) {
  //     setIsDisabled(false)
  //     return
  //   }
  // }
  // useEffect(() => {
  //   check()
  // }, [add])

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Todo App</Text>
      <TextInput value={txt} style={styles.inputField} placeholder="Enter Text" onChangeText={(e) => setTxt(e)}></TextInput>
      {/* <Button title='add' style={styles.addBtn} onPress={add}></Button> */}
      <TouchableOpacity style={styles.addBtn} onPress={add}><Text style={{ color: 'white', textAlign: 'center' }}>Add</Text></TouchableOpacity>
      {list.length > 0 ?
        <TouchableOpacity style={[styles.deleteAllBtn, { backgroundColor: 'crimson' }]} onPress={deleteAll}><Text style={{ color: 'white', textAlign: 'center' }}>Delete All</Text></TouchableOpacity>
        // <Button title='Delete All' onPress={deleteAll}></Button>
        : ""
      }
      {list.length > 0 ? <Text style={{ textAlign: 'center', color: 'royalblue', marginVertical: 10, fontSize: 20, textDecoration: 'underline' }}>{`Total Todos: ${list.length}`}</Text> : <Text style={{ textAlign: 'center', color: 'royalblue', marginVertical: 10, fontSize: 20, textDecoration: 'underline' }}>No Todos to Display</Text>}

      {list.map((e, i) => <View key={i} style={{ flexDirection: 'row' }}>
        <Text>{e}</Text>
        {/* <View style={{position:'absolue', right:0}}> */}
        <TouchableOpacity style={[styles.editBtn,]} onPress={() => edit(e, i)}><Text style={{ color: 'white', textAlign: 'center' }}>Edit</Text></TouchableOpacity>
        <TouchableOpacity style={[styles.deleteBtn,]} onPress={() => del(e)}><Text style={{ color: 'white', textAlign: 'center' }}>Delete</Text></TouchableOpacity>
        {/* </View> */}
      </View>
      )}
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    padding: 5,
    marginVertical: 20,
    marginHorizontal: 60,
  },
  heading: {
    color: 'crimson',
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  inputField: {
    // width:'80%',
    marginVertical: 15,
    borderBottomWidth: 1,
    padding: 0
  },
  addBtn: {
    width: '20%',
    paddingVertical: 8,
    width: '100%',
    backgroundColor: 'grey',
  },
  deleteAllBtn: {
    marginVertical: 10,
    paddingVertical: 8,
    width: '100%',
    // backgroundColor: 'crimson',
  },
  editBtn: {
    width: '20%',
    paddingVertical: 8,
    backgroundColor: 'green',

  },
  deleteBtn: {
    width: '20%',
    paddingVertical: 8,
    backgroundColor: 'grey',

  }
})