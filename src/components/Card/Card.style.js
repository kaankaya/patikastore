import { Dimensions,StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        backgroundColor:'gray',
        borderRadius:7,
        width:Dimensions.get('window').width/2,
        margin:1,
    },
    inner_container:{
        margin:5,
        
    },
    product_title:{
        fontWeight:'bold',
        fontSize:15,
    },
    product_cost:{
        fontSize:15,
    },
    image:{
        height:Dimensions.get('window').height/4,
        borderRadius:10,
        margin:5,
    },
    stock:{
        color:'red',
        fontWeight:'bold',
    }
});