import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  headercontainer:{
    width:'100%',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  header:{
    width:'90%',
    flexDirection:'row',
    alignItems:"center",
    justifyContent:'space-between',
    padding:15
  },
  maincontainer:{
    width:'100%',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  main:{
    width:'90%'
  },
  maintxt:{
    color:'white',
    fontSize:16,
    fontFamily:'Inter-Regular',
    fontWeight:'600',
    
  },
  maininfobox:{
    position:'absolute',
    top:25,
    left:10
  },
  mainsmalltxt:{
    color:'white',
    fontSize:13
  }
})
export default styles