import { StyleSheet } from "react-native";

const styles = StyleSheet.create(
    {
        icons:{
            width:15,
            height:15,
        },
        container:
        {
            padding:15,
            flex:1,
            justifyContent:'center',
            alignItems:'center'
        },
        map:
        {
            width: '100%',
            height: '100%',
        },
        mapaClicavel:
        {
            width: '100%',
            height: '50%',
            paddingHorizontal: 10,
            marginVertical:8
        },
        txtareaLayout:
        {
            width: '100%',
            height: 50,
            borderColor:'grey',
            borderStyle:'solid',
            borderWidth: 1,
            borderRadius: 10,
            paddingHorizontal: 10,
            marginVertical:8,
        }
    });

export default styles;