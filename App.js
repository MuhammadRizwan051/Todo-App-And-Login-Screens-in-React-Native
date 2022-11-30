import React, { useEffect, useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Button, Image, TouchableHighlight, ImageBackground } from "react-native";
import addImage from './assets/addIcon.png'
import editImage from './assets/editIcon.png'
import deleteImage from './assets/deleteIcon.png'
import backgroundImage from './assets/backgroundImage.jpg'

function App() {
  let [txt, setTxt] = useState('')
  let [list, setList] = useState([])
  let [indexNum, setIndexNum] = useState()

  let add = () => {
    if (!txt) {
      alert('Plz, write something')
      return
    }
    if (indexNum > -1) {
      list[indexNum] = {
        text: txt,
        time: JSON.stringify(new Date())
      }
      setList([...list])
      setIndexNum(null)
      setTxt('')
    }
    else {
      setList([...list,
      {
        text: txt,
        time: JSON.stringify(new Date())
      }
      ])
      setTxt('')
    }
  }

  let deleteAll = () => {
    setList([])
    setTxt('')
  }



  let edit = (e, i) => {
    // console.log(list[i])
    setIndexNum(i)
    let obj = list[i]
    setTxt(obj.text)
  }
  
  let del = (e, i) => {
    console.log(i)
    list.splice(i, 1)
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
    <>
      <ImageBackground source={backgroundImage} >
        <View style={styles.container}>
          <Text style={styles.heading}>Todo App</Text>
          <View style={{ flexDirection: 'row', marginVertical: 35, }}>
            <TextInput value={txt} style={styles.inputField} placeholderTextColor={'white'} placeholder="Enter Text" onChangeText={(e) => setTxt(e)}></TextInput>
            {/* <TouchableOpacity style={{ backgroundColor: 'crimson' }} ><Text style={{ color: 'white', textAlign: 'center' }}>Update</Text></TouchableOpacity> */}
            <TouchableOpacity onPress={add} style={[styles.addBtn]} >
              <Image source={addImage} style={{ width: 25, height: 25 }} />
            </TouchableOpacity>
            {/* <TouchableOpacity style={styles.addBtn} onPress={add}><Text style={{ color: 'white', textAlign: 'center' }}>Add</Text></TouchableOpacity> */}
          </View>

          {list && list.length > 0 ?
            <TouchableOpacity style={[styles.deleteAllBtn, { backgroundColor: 'crimson' }]} onPress={deleteAll}><Text style={{ color: 'white', textAlign: 'center' }}>Delete All</Text></TouchableOpacity>
            : ""
          }
          {list && list.length > 0 ? <Text style={styles.countOrNoCount}>{`Total: ${list.length}`}</Text> : <Text style={styles.countOrNoCount}>No Todos to Display</Text>}

          {list && list.map((e, i) => <View key={i} style={styles.todoListView}>
            <Text style={styles.todoText}>{e.text}</Text>


            <TouchableOpacity onPress={() => edit(e, i)} style={{ width: '10%' }} >
              <Image source={editImage} style={styles.editAndDelete} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => del(e, i)} style={{ width: '10%' }} >
              <Image source={deleteImage} style={styles.editAndDelete} />
            </TouchableOpacity>
            {/* <View style={{display:'inline-block'}}>
              <Text style={[styles.todoText, { width: '100%' }]}>{e.time}</Text>
            </View> */}
          </View>
          )}
        </View>
      </ImageBackground>
    </>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 2,
    paddingVertical: 1,
    height: '100%',
    width: '100%'
  },
  heading: {
    backgroundColor: 'royalblue',
    paddingVertical: 8,
    color: 'white',
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 3, height: 5 },
    textShadowRadius: 10
  },
  inputField: {
    width: '85%',
    borderBottomWidth: 1,
    padding: 0,
    color: 'white',
    borderColor: 'white',
    fontSize: 16,
    paddingHorizontal: 15
  },
  addBtn: {
    width: '10%',
    paddingVertical: 8,
    marginHorizontal: 12,
    backgroundColor: 'white',
    borderRadius: 8,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteAllBtn: {
    marginVertical: 10,
    paddingVertical: 8,
    width: '100%',
  },
  todoListView: {
    flexDirection: 'row',
    borderWidth: 5,
    borderColor: 'white',
    borderRadius: 20,
    backgroundColor: 'white',
    marginBottom: 15,
    padding: 5,
    marginHorizontal: 10
  },
  todoText: {
    width: '80%',
    color: 'black'
  },
  editAndDelete: {
    width: 25,
    height: 25
  },
  countOrNoCount: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    marginVertical: 15,
    fontSize: 25,
    textDecoration: 'underline'
  }
})














//  <------------------------ Login Screen 1 ------------------------>


// import React from 'react';
// import {
//   StyleSheet,
//   Text,
//   Image,
//   TextInput,
//   View,
//   ImageBackground,
//   TouchableOpacity,
// } from 'react-native';
// import loginBackground_1 from './assets/loginBackground_1.jpg'


// function App() {
//   return <>
//     <ImageBackground source={loginBackground_1}  >
//       <View style={styles.loginScreenContainer}>
//         <Text style={styles.heading}>Login Screen 1</Text>
//         <View style={styles.loginFormView}>
//           <Image source={{ uri: "https://www.nicepng.com/png/full/207-2073249_open-user-icon-for-login-page.png" }} style={{ width: 100, height: 100 }} />
//           <TextInput placeholder="Username" placeholderTextColor={'black'} style={styles.loginFormTextInput} />
//           <TextInput placeholder="Password" placeholderTextColor={'black'} style={styles.loginFormTextInput} secureTextEntry={true} />
//           <TouchableOpacity style={styles.loginBtn} >
//             <Text style={{ textAlign: 'center', color: 'white', fontSize: 18, }}>Login</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </ImageBackground>
//   </>
// }

// export default App;

// const styles = StyleSheet.create({

//   loginScreenContainer: {
//     height: '100%',
//     paddingLeft: 15,
//     paddingRight: 15,
//     justifyContent: "center"
//   },
//   heading: {
//     textAlign: 'center',
//     fontSize: 24,
//     color: "#344D67",
//     fontWeight: 'bold',
//     backgroundColor:'white',
//     marginBottom: 30,
//     borderRadius: 10,
//     paddingVertical: 5
//   },
//   loginFormView: {
//     borderWidth: 2,
//     borderRadius: 15,
//     paddingVertical: 40,
//     paddingHorizontal: 20,
//     alignItems: "center",
//     justifyContent: 'center'
//   },
//   loginFormTextInput: {
//     fontSize: 16,
//     borderBottomWidth: 5,
//     color: 'white',
//     borderColor: 'black',
//     marginTop: 5,
//     marginBottom: 15,
//     width: "100%",
//     borderRadius: 10,
//     paddingHorizontal: 20
//   },
//   loginBtn: {
//     width: '50%',
//     backgroundColor: '#344D67',
//     paddingVertical: 10,
//     borderRadius: 5,
//     marginTop: 40
//   }
// });









//  <------------------------ Login Screen 2 ------------------------>


// import React from 'react';
// import {
//   StyleSheet,
//   Text,
//   Image,
//   TextInput,
//   View,
//   TouchableOpacity,
// } from 'react-native';


// function App() {
//   return <>
//     <View style={styles.loginScreenContainer}>
//       <Text style={styles.heading}>Login Screen 2</Text>
//       <View style={styles.loginFormView}>
//         <Image source={{ uri: "https://thumbs.dreamstime.com/b/vector-illustration-isolated-white-background-login-button-icon-126999949.jpg" }} style={{ width: 100, height: 100 }} />
//         <TextInput placeholder="Username" placeholderTextColor={'black'} style={styles.loginFormTextInput} />
//         <TextInput placeholder="Password" placeholderTextColor={'black'} style={styles.loginFormTextInput} secureTextEntry={true} />
//         <TouchableOpacity style={styles.loginBtn} >
//           <Text style={{ textAlign: 'center', color: 'white', fontSize: 18, }}>Login</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   </>
// }

// export default App;

// const styles = StyleSheet.create({

//   loginScreenContainer: {
//     height: '100%',
//     paddingLeft: 15,
//     paddingRight: 15,
//     justifyContent: "center"
//   },
//   heading: {
//     textAlign: 'center',
//     fontSize: 24,
//     backgroundColor: "#344D67",
//     fontWeight: 'bold',
//     color: 'white',
//     marginBottom: 30,
//     borderRadius: 10,
//     paddingVertical: 5
//   },
//   loginFormView: {
//     borderRadius: 15,
//     paddingVertical: 40,
//     alignItems: "center",
//     justifyContent: 'center'
//   },
//   loginFormTextInput: {
//     fontSize: 16,
//     borderWidth: 3,
//     color: 'white',
//     borderColor: 'black',
//     marginTop: 15,
//     width: "100%",
//     borderRadius: 10,
//     paddingHorizontal: 20
//   },
//   loginBtn: {
//     width: '50%',
//     backgroundColor: '#285430',
//     paddingVertical: 10,
//     borderRadius: 5,
//     marginTop: 30
//   }
// });











//  <------------------------ Login Screen 3 ------------------------>


// import React from 'react';
// import {
//   StyleSheet,
//   Text,
//   Image,
//   TextInput,
//   View,
//   ImageBackground,
//   TouchableOpacity,
// } from 'react-native';


// function App() {
//   return <>
//     <View style={styles.loginScreenContainer}>
//       <Text style={styles.heading}>Login Screen 3</Text>
//       <View style={styles.loginFormView}>
//         <Image source={{ uri: "https://png.pngtree.com/png-vector/20191003/ourmid/pngtree-user-login-or-authenticate-icon-on-gray-background-flat-icon-ve-png-image_1786166.jpg" }} style={{ width: 100, height: 100 }} />
//         <TextInput placeholder="Username" placeholderTextColor={'black'} style={styles.loginFormTextInput} />
//         <TextInput placeholder="Password" placeholderTextColor={'black'} style={styles.loginFormTextInput} secureTextEntry={true} />
//         <TouchableOpacity style={styles.loginBtn} >
//           <Text style={{ textAlign: 'center', color: 'white', fontSize: 18, }}>Login</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   </>
// }

// export default App;

// const styles = StyleSheet.create({

//   loginScreenContainer: {
//     height: '100%',
//     paddingLeft: 15,
//     paddingRight: 15,
//     justifyContent: "center",
//     backgroundColor: '#DD5353'
//   },
//   heading: {
//     textAlign: 'center',
//     fontSize: 24,
//     color: "#344D67",
//     fontWeight: 'bold',
//     backgroundColor: 'white',
//     marginBottom: 30,
//     borderRadius: 10,
//     paddingVertical: 5
//   },
//   loginFormView: {
//     backgroundColor:'#EFEFEF',
//     borderWidth: 2,
//     borderRadius: 15,
//     paddingVertical: 40,
//     paddingHorizontal: 20,
//     alignItems: "center",
//     justifyContent: 'center'
//   },
//   loginFormTextInput: {
//     fontSize: 16,
//     borderLeftWidth: 5,
//     borderRightWidth: 5,
//     borderTopWidth: 2,
//     borderBottomWidth: 2,
//     color: 'white',
//     borderColor: 'black',
//     marginTop: 5,
//     marginBottom: 15,
//     width: "100%",
//     borderRadius: 10,
//     paddingHorizontal: 20
//   },
//   loginBtn: {
//     width: '100%',
//     backgroundColor: '#B73E3E',
//     paddingVertical: 10,
//     borderRadius: 5,
//     marginTop: 40
//   }
// });












//  <------------------------ Login Screen 4 ------------------------>


// import React from 'react';
// import {
//   StyleSheet,
//   Text,
//   Image,
//   TextInput,
//   View,
//   ImageBackground,
//   TouchableOpacity,
// } from 'react-native';
// import loginBackground_1 from './assets/loginBackground_1.jpg'


// function App() {
//   return <>
//     <ImageBackground source={{uri: "https://media.istockphoto.com/id/838769888/photo/noise-tv-screen-pixels-interfering-signal.jpg?b=1&s=170667a&w=0&k=20&c=P5A9ksiq01T_kbrz-td1_yjD-A77ZTSGc0JuQ_PDgYQ="}}  >
//       <View style={styles.loginScreenContainer}>
//         <Text style={styles.heading}>Login Screen 4</Text>
//         <View style={styles.loginFormView}>
//           <Image source={{ uri: "https://p.kindpng.com/picc/s/116-1169050_avatar-michael-jordan-jersey-clip-art-michael-jordan.png" }} style={{ width: 60, height: 60, marginBottom: 30 }} />
//           <TextInput placeholder="Username" placeholderTextColor={'black'} style={styles.loginFormTextInput} />
//           <TextInput placeholder="Password" placeholderTextColor={'black'} style={styles.loginFormTextInput} secureTextEntry={true} />
//           <TouchableOpacity style={styles.loginBtn} >
//             <Text style={{ textAlign: 'center', color: 'white', fontSize: 18, }}>Login</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </ImageBackground>
//   </>
// }

// export default App;

// const styles = StyleSheet.create({

//   loginScreenContainer: {
//     height: '100%',
//     paddingLeft: 15,
//     paddingRight: 15,
//     justifyContent: "center",
//   },
//   heading: {
//     textAlign: 'center',
//     fontSize: 24,
//     color: "#182747",
//     fontWeight: 'bold',
//     backgroundColor:'white',
//     marginBottom: 30,
//     borderRadius: 10,
//     paddingVertical: 5
//   },
//   loginFormView: {
//     backgroundColor:'#EEEEEE',
//     borderWidth: 5,
//     borderRadius: 15,
//     paddingVertical: 40,
//     paddingHorizontal: 20,
//     alignItems: "center",
//     justifyContent: 'center'
//   },
//   loginFormTextInput: {
//     fontSize: 16,
//     borderWidth: 2,
//     color: 'white',
//     borderColor: 'black',
//     marginTop: 5,
//     marginBottom: 15,
//     width: "100%",
//     borderRadius: 10,
//     paddingHorizontal: 20
//   },
//   loginBtn: {
//     width: '100%',
//     backgroundColor: '#182747',
//     paddingVertical: 10,
//     borderRadius: 5,
//     marginTop: 40
//   }
// });













//  <------------------------ Login Screen 5 ------------------------>


// import React from 'react';
// import {
//   StyleSheet,
//   Text,
//   Image,
//   TextInput,
//   View,
//   ImageBackground,
//   TouchableOpacity,
// } from 'react-native';
// import userLogo from './assets/user_logo.png'


// function App() {
//   return <>
//     <ImageBackground source={{uri: "https://w0.peakpx.com/wallpaper/591/641/HD-wallpaper-light-glare-brown-wavy-lines-in-dark-brown-background-brown-aesthetic.jpg"}}  >
//       <View style={styles.loginScreenContainer}>
//         <Text style={styles.heading}>Login Screen 5</Text>
//         <View style={styles.loginFormView}>
//           <Image source={userLogo} style={{ width: 100, height: 120 }} />
//           <TextInput placeholder="Username" placeholderTextColor={'#562B08'} style={styles.loginFormTextInput} />
//           <TextInput placeholder="Password" placeholderTextColor={'#562B08'} style={styles.loginFormTextInput} secureTextEntry={true} />
//           <TouchableOpacity style={styles.loginBtn} >
//             <Text style={{ textAlign: 'center', color: 'white', fontSize: 18, }}>Login</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </ImageBackground>
//   </>
// }

// export default App;

// const styles = StyleSheet.create({

//   loginScreenContainer: {
//     height: '100%',
//     paddingLeft: 15,
//     paddingRight: 15,
//     justifyContent: "center"
//   },
//   heading: {
//     textAlign: 'center',
//     fontSize: 24,
//     color: "black",
//     fontWeight: 'bold',
//     backgroundColor:'#FFEEAF',
//     marginBottom: 30,
//     borderRadius: 10,
//     paddingVertical: 5
//   },
//   loginFormView: {
//     backgroundColor:'#FFEEAF',
//     borderWidth: 2,
//     borderRadius: 15,
//     paddingVertical: 40,
//     paddingHorizontal: 10,
//     alignItems: "center",
//     justifyContent: 'center'
//   },
//   loginFormTextInput: {
//     borderBottomColor:'#562B08',
//     fontSize: 16,
//     borderBottomWidth: 5,
//     color: '#562B08',
//     borderColor: 'black',
//     marginTop: 5,
//     marginBottom: 15,
//     width: "100%",
//     borderRadius: 10,
//     paddingHorizontal: 20
//   },
//   loginBtn: {
//     width: '100%',
//     backgroundColor: '#562B08',
//     paddingVertical: 10,
//     borderRadius: 10,
//     marginTop: 40
//   }
// });