import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native';
import { useWindowDimensions } from 'react-native-web';

export default function App() {
  const { height, width } = useWindowDimensions();
  const [prevRes, setPrevRes] = useState("");
  const [calcStr, setCalcStr] = useState("");
  const [resStr, setResStr] = useState("");

  const createBtn = (title, padding=[20,20,20,20], color= "#A1E0FF", disabled=false) => {
    if (padding.length < 4) {
      padding = [20,20,20,20]
    }
    const onPress = () => {
      if (title == "=") {
        const evalRes = eval(calcStr)
        setPrevRes(evalRes)
        setResStr(evalRes)
        return
      } else if (title == "←") {
        setPrevRes(resStr)
        setResStr("")
        setCalcStr(calcStr.slice(0,-1))
        return
      } else if (title == "×") {
        setCalcStr(calcStr + "*")
      } else if (title == "÷") {
        setCalcStr(calcStr + "/")
      } else if (title == "ANS") {
        setCalcStr(calcStr + prevRes)
      } else {
        setCalcStr(calcStr + title);
      }
    }
    const longPressDelete = () => {
      if (title == "←") {
        setPrevRes(resStr)
        setResStr("")
        setCalcStr("")
      }
    }
  
    return (
      <View>
        <Pressable style={{...styles.touchpadBtn, backgroundColor: color}} onPress={onPress} onLongPress={title == "←" ? longPressDelete : () => {}} disabled={disabled}>
          <Text 
            style={{...styles.touchpadText, paddingTop: padding[0], paddingLeft: padding[1], paddingRight: padding[3], paddingBottom: padding[2]}}
          >{title}</Text>
        </Pressable>
      </View>
    )
  }

  const determineDimension = () => {
    if (width >= 400) {
      return {
        width: "30%",
        height: "100%"
      }
    } else {
      return {
        width: "100%",
        height: "100%"
      }
    }

  }

  return (
    <View style={{ justifyContent: "center", alignItems: "center", backgroundColor: "#CCD4D9", width: "100%", height: "100%" }}>
      <View style={{ ...determineDimension() }}>
        <StatusBar style="auto" />
        <View style={{ marginTop: "10%", height: 100, marginLeft: "4%", marginRight: "4%" }}>
          <ScrollView styles={styles.resultCont} persistentScrollbar={true}>
            <Text style={{color: "#000000", fontSize: 20}}>{calcStr}</Text>
          </ScrollView>
          
          <View style={{ display: "flex", flexDirection: "row", alignItems: "baseline" }}>
            <Text style={{fontSize: 30, color: "#1D5875"}}>= </Text>
            <ScrollView styles={styles.resultCont}>
              <Text style={{color: "#000000", fontSize: 25}}>{resStr}</Text>
            </ScrollView>
          </View>
          
        </View>
        <View style={styles.touchpadCont}>
          <View style={styles.touchpadRow}>
            {createBtn("(", [20,22,20,22], "#3295C7")}
            {createBtn(")", [20,22,20,22], "#3295C7")}
            {createBtn("xⁿ", [20,17,20,17], "#565A5C", true)}
            {createBtn("ANS", [20,6,20,6], "#3295C7")}
          </View>
          <View style={styles.touchpadRow}>
            {createBtn("7")}
            {createBtn("8")}
            {createBtn("9")}
            {createBtn("÷", [], "#3DB8F5")}
          </View>

          <View style={styles.touchpadRow}>
            {createBtn("4")}
            {createBtn("5")}
            {createBtn("6")}
            {createBtn("×", [], "#3DB8F5")}
          </View>

          <View style={styles.touchpadRow}>
            {createBtn("1")}
            {createBtn("2")}
            {createBtn("3")}
            {createBtn("+", [], "#3DB8F5")}
            
          </View>

          <View style={styles.touchpadRow}>
            {createBtn("0")}
            {createBtn("←", [20,18,20,18], "#3295C7") /* hold to clear, press to bckspace */}
            {createBtn("=", [], "#3295C7")}
            {createBtn("-", [20,22,20,22], "#3DB8F5")}
          </View>
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
  },
  touchpadCont: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
  },
  touchpadRow: {
    display: "flex",
    height: "15%",
    marginBottom: 20,
    flexDirection: "row",
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
