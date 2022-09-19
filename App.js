import { StatusBar } from 'expo-status-bar';
import calcF from "./functions"
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView} from 'react-native';

export default function App() {
  const [calcStr, setCalcStr] = useState("");

  const createBtn = (title, padding=[20, 30, 20, 30]) => {
    const onPress = () => {
      if (title == "=") {
        console.log(eval(calcStr))
        return
      } else if (title == "←") {
        setCalcStr(calcStr.slice(0,-1))
        return
      }
      setCalcStr(calcStr + title);
    }
  
    return (
      <View>
        <TouchableOpacity style={styles.touchpadBtn} onPress={onPress}>
          <Text 
            style={{...styles.touchpadText, paddingTop: padding[0], paddingLeft: padding[1], paddingRight: padding[3], paddingBottom: padding[2]}}
          >{title}</Text>
        </TouchableOpacity>
      </View>
    )
  
  }

  return (
    <View>
      <StatusBar style="auto" />
      <View style={{ marginTop: "10%" }}>
        <ScrollView styles={styles.resultCont}>
          <Text style={{color: "#000000"}}>{calcStr}</Text>
        </ScrollView>
      </View>
      <View style={styles.touchpadCont}>
        <View style={styles.touchpadRow}>
          {createBtn("7")}
          {createBtn("8")}
          {createBtn("9")}
        </View>

        <View style={styles.touchpadRow}>
          {createBtn("4")}
          {createBtn("5")}
          {createBtn("6")}
        </View>

        <View style={styles.touchpadRow}>
          {createBtn("1")}
          {createBtn("2")}
          {createBtn("3")}
        </View>

        <View style={styles.touchpadRow}>
          {createBtn("=")}
          {createBtn("0")}
          {createBtn("←") /* hold to clear, press to bckspace */}
        </View>

        <View style={styles.touchpadRow}>
          {createBtn("+", [20,20,20,20])}
          {createBtn("-", [20,20,20,20])}
          {createBtn("×", [20,20,20,20])}
          {createBtn("÷", [20,20,20,20])}
        </View>

        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  resultCont: {
    height: "100%",
    width: "20%",
  },
  touchpadCont: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    rowGap: "50",
    width: "100%",
  },
  touchpadRow: {
    display: "flex",
    height: "15%",
    width: "100%",
    marginBottom: 10,
    flexDirection: "row",
    rowGap: "50",
    justifyContent: "space-around",
  },
  touchpadBtn: {
    elevation: 8,
    borderColor: "#000000",
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  touchpadText: {
    fontSize: 20,
    color: "#000000",
  }
});
