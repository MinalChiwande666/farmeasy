import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    },
    headercontainer:{
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        height:70
    },
    header:{
        width:'90%',
        paddingVertical:10
    },
    maincontainer:{
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    main:{
        width:'90%',
        backgroundColor:'white',
        borderRadius:20,
        elevation:5
    },
    infocontainer:{
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        marginVertical:10
    },
    infobox:{
        width:'90%'
    },
    toptxt:{
        color:'orange',
        fontSize:14,
        fontFamily:'Inter-SemiBold'
    },
    topmidtxt:{
        color:'black',
        fontSize:19,
        fontFamily:'Inter-SemiBold'
    },
    topparatxt:{
        color:'lightgray',
        fontSize:14,
        marginVertical:5,
        fontFamily:'Inter-SemiBold'
    },
    ratecontainer:{
        width:'100%',
        marginVertical:20,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    ratebox:{
        width:'90%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    rbox:{
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
    },
    numtxt:{
        fontSize:25,
        color:'orange',
        fontFamily:'Inter-SemiBold'
    },
    txt:{
        color:'lightgray',
        fontSize:16,
        fontFamily:'Inter-SemiBold'
    },
    callcontainer:{
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        marginVertical:10
    },
    callbox:{
        width:'90%',
    },
    contactcard:{
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'white',
        padding:10,
        borderRadius:15,
        marginTop:10,
        elevation:3
    },
    headtxt:{
        color:'black',
        fontSize:20,
        fontFamily:'Inter-Regular'
    },
    phonnotxt:{
        color:'black',
        fontSize:14,
    },
    iconbox:{
        width:50
    }
})
export default styles