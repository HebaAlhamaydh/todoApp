import react from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-web";
export default function Task(props) {
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.square}></View>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <View style={styles.circular}></View>
        </View>
    )
}
const styles = StyleSheet.create({
    item: {
        backgroundColor: "#ffffff",
        borderColor: "black",
        flexDirection:'row',
        borderRadius: 10,
        alignItems:"center",
        justifyContent:"space-between",
        marginBottom:20,
        padding: 15
    },
    itemLeft:{
        flexDirection:'row',
        alignItems:"center",
        flexWrap:"wrap",

    },
    square:{
        width:24,
        height:24,
        backgroundColor:'#2271e7',
        opacity:0.4,
        borderRadius:5,
        marginRight:15,
    },
    itemText:{
        maxWidth:"80%",

    },
    circular:{
        width:12,
        height:12,
        borderRadius:5,
        borderColor:'#2271e7',
        borderWidth:2,

    }
})