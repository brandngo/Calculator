(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{56:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__),_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(26),_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__),expo_status_bar__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(79),react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__),react_native_web_dist_exports_StyleSheet__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(7),react_native_web_dist_exports_Text__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(32),react_native_web_dist_exports_View__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(5),react_native_web_dist_exports_ScrollView__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(50),react_native_web_dist_exports_Pressable__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(80),expo__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(51),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(10),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);function ownKeys(_,e){var t=Object.keys(_);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(_);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(_,e).enumerable}))),t.push.apply(t,r)}return t}function _objectSpread(_){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?ownKeys(Object(t),!0).forEach((function(e){_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(_,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(e){Object.defineProperty(_,e,Object.getOwnPropertyDescriptor(t,e))}))}return _}function App(){var _useState=Object(react__WEBPACK_IMPORTED_MODULE_3__.useState)(""),_useState2=_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState,2),prevRes=_useState2[0],setPrevRes=_useState2[1],_useState3=Object(react__WEBPACK_IMPORTED_MODULE_3__.useState)(""),_useState4=_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState3,2),calcStr=_useState4[0],setCalcStr=_useState4[1],_useState5=Object(react__WEBPACK_IMPORTED_MODULE_3__.useState)(""),_useState6=_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState5,2),resStr=_useState6[0],setResStr=_useState6[1],createBtn=function createBtn(title){var padding=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[20,20,20,20],color=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"#A1E0FF",disabled=arguments.length>3&&void 0!==arguments[3]&&arguments[3];padding.length<4&&(padding=[20,20,20,20]);var onPress=function onPress(){if("="==title){var evalRes=eval(calcStr);return setPrevRes(evalRes),void setResStr(evalRes)}if("\u2190"==title)return setPrevRes(resStr),setResStr(""),void setCalcStr(calcStr.slice(0,-1));setCalcStr("\xd7"==title?calcStr+"*":"\xf7"==title?calcStr+"/":"ANS"==title?calcStr+prevRes:calcStr+title)},longPressDelete=function(){"\u2190"==title&&(setPrevRes(resStr),setResStr(""),setCalcStr(""))};return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(react_native_web_dist_exports_View__WEBPACK_IMPORTED_MODULE_6__.default,{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(react_native_web_dist_exports_Pressable__WEBPACK_IMPORTED_MODULE_8__.default,{style:_objectSpread(_objectSpread({},styles.touchpadBtn),{},{backgroundColor:color}),onPress:onPress,onLongPress:"\u2190"==title?longPressDelete:function(){},disabled:disabled,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(react_native_web_dist_exports_Text__WEBPACK_IMPORTED_MODULE_5__.default,{style:_objectSpread(_objectSpread({},styles.touchpadText),{},{paddingTop:padding[0],paddingLeft:padding[1],paddingRight:padding[3],paddingBottom:padding[2]}),children:title})})})};return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_native_web_dist_exports_View__WEBPACK_IMPORTED_MODULE_6__.default,{style:{backgroundColor:"#CCD4D9"},children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(expo_status_bar__WEBPACK_IMPORTED_MODULE_2__.StatusBar,{style:"auto"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_native_web_dist_exports_View__WEBPACK_IMPORTED_MODULE_6__.default,{style:{marginTop:"10%",height:100,marginLeft:"4%",marginRight:"4%"},children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(react_native_web_dist_exports_ScrollView__WEBPACK_IMPORTED_MODULE_7__.default,{styles:styles.resultCont,persistentScrollbar:!0,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(react_native_web_dist_exports_Text__WEBPACK_IMPORTED_MODULE_5__.default,{style:{color:"#000000",fontSize:20},children:calcStr})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_native_web_dist_exports_View__WEBPACK_IMPORTED_MODULE_6__.default,{style:{display:"flex",flexDirection:"row",alignItems:"baseline"},children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(react_native_web_dist_exports_Text__WEBPACK_IMPORTED_MODULE_5__.default,{style:{fontSize:30,color:"#1D5875"},children:"= "}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(react_native_web_dist_exports_ScrollView__WEBPACK_IMPORTED_MODULE_7__.default,{styles:styles.resultCont,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(react_native_web_dist_exports_Text__WEBPACK_IMPORTED_MODULE_5__.default,{style:{color:"#000000",fontSize:25},children:resStr})})]})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_native_web_dist_exports_View__WEBPACK_IMPORTED_MODULE_6__.default,{style:styles.touchpadCont,children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_native_web_dist_exports_View__WEBPACK_IMPORTED_MODULE_6__.default,{style:styles.touchpadRow,children:[createBtn("(",[20,22,20,22],"#3295C7"),createBtn(")",[20,22,20,22],"#3295C7"),createBtn("x\u207f",[20,17,20,17],"#565A5C",!0),createBtn("ANS",[20,6,20,6],"#3295C7")]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_native_web_dist_exports_View__WEBPACK_IMPORTED_MODULE_6__.default,{style:styles.touchpadRow,children:[createBtn("7"),createBtn("8"),createBtn("9"),createBtn("\xf7",[],"#3DB8F5")]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_native_web_dist_exports_View__WEBPACK_IMPORTED_MODULE_6__.default,{style:styles.touchpadRow,children:[createBtn("4"),createBtn("5"),createBtn("6"),createBtn("\xd7",[],"#3DB8F5")]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_native_web_dist_exports_View__WEBPACK_IMPORTED_MODULE_6__.default,{style:styles.touchpadRow,children:[createBtn("1"),createBtn("2"),createBtn("3"),createBtn("+",[],"#3DB8F5")]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_native_web_dist_exports_View__WEBPACK_IMPORTED_MODULE_6__.default,{style:styles.touchpadRow,children:[createBtn("0"),createBtn("\u2190",[20,18,20,18],"#3295C7"),createBtn("=",[],"#3295C7"),createBtn("-",[20,22,20,22],"#3DB8F5")]})]})]})}__webpack_exports__.default=Object(expo__WEBPACK_IMPORTED_MODULE_9__.default)(App);var styles=react_native_web_dist_exports_StyleSheet__WEBPACK_IMPORTED_MODULE_4__.default.create({container:{flex:1,backgroundColor:"#fff",alignItems:"center",justifyContent:"center"},resultCont:{height:"100%",width:"20%"},touchpadCont:{display:"flex",flexDirection:"column",justifyContent:"center",alignContent:"center",rowGap:"20",width:"100%"},touchpadRow:{display:"flex",height:"15%",width:"100%",marginBottom:10,flexDirection:"row",justifyContent:"space-around"},touchpadBtn:{elevation:8,borderColor:"#000000",borderWidth:1,borderRadius:10,paddingVertical:10,paddingHorizontal:12},touchpadText:{fontSize:20,color:"#000000"}})},81:function(_,e,t){_.exports=t(82)}},[[81,1,2]]]);
//# sourceMappingURL=app.714d8117.chunk.js.map