import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    },
    headconatiner:{
        width:'100%',
        alignItems:'center',
        justifyContent:'center'
    },
    head:{
       width:'90%',
      paddingVertical:27,
      
    },
    headtxt:{
        color:'black',
        fontWeight:'600',
        fontSize:15
    },
    logocontainer:{
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
        paddingVertical:10
    },
    signupcontainer:{
        width:'100%',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
    },
    inputcon:{
        width:'90%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginVertical:10
    },
    input:
    {
      width:'45%',
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      borderColor:'#F49627',
      padding:5,
      borderRadius:30,
      borderWidth:1
    },
    selectxountrybtn:{
        padding:5
    },
    countrytxt:{
        color:'black'
    }
})

export default styles