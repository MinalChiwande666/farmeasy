import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headcontainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    height: 55,
  },
  header: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headtxt: {
    fontSize: 17,
    fontFamily: 'Inter-SemiBold',
    color: 'black',
  },
  profilepiccontainer: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  imgcon: {
    width: 110,
    height: 110,
   
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    borderRadius: 70,
    elevation: 4,
    backgroundColor: 'white',
  },
  usernameinfo:{
    marginVertical:10,
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center'
  },
  usernametxt:{
    color:'black',
    fontSize:17,
    fontFamily:'Inter-SemiBold'
  },
  userwlcmtxt:{
    fontFamily:'Inter-Regular',
    color:'lightgray',
    fontSize:14,
    marginVertical:6
  },
  cardcontainer:{
    width:'100%',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    marginVertical:15
  },
  cardboxcon:{
    width:'80%',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center'
  },
  card:{
    width:'100%',
    flexDirection:'row',
    alignItems:"center",
    justifyContent:'space-between',
    backgroundColor:'white',
    elevation:4,
    padding:15,
    borderRadius:15,
    marginVertical:10
  },
  icon:{
    width:30,

    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  cardtxt:{
    width:220
  },
  txt:{
    color:'black',
    fontFamily:'Inter-Regular',
    fontSize:17
  },
  txt2:{
    color:'black',
    fontFamily:'Inter-Regular',
    fontSize:14
  },
  editbtn:{
    width:'100%',
    backgroundColor:'orange',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    padding:15,
    marginVertical:25,
    borderRadius:10
  },
  editbtntxt:{
    color:'white',
    fontSize:16,
    fontFamily:'Inter-Regular'
  },
  contactcontainer:{
    width:'100%',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  contactbox:{
    width:'90%',
    flexDirection:'column',
    alignItems:'center',
    padding:10
  },
  conhdtxt:{
    padding:2,
    width:120,
    borderBottomColor:'orange',
    borderBottomWidth:2
  },
  conftxt:{
    textAlign:'center',
    color:'black',
    fontSize:17,
    fontFamily:'Inter-SemiBold'
  },
  desctxt:{
    fontSize:12.4,
    color:'lightgray',
    fontFamily:'Inter-Regular'
  },
  contactinfocard:{
    width:'100%',
    backgroundColor:'white',
    elevation:3,
    padding:15,
    flexDirection:'row',
    alignItems:'center',
    borderRadius:20,
    marginVertical:15
  },
  contactinfotxt:{
    width:'70%',
    flexDirection:'column',
    marginHorizontal:10,
  marginBottom:18
  
  },
  contactmaintxt:{
    fontSize:18,
    fontFamily:'Inter-Regular',
    color:'black'
  },
  contactparatxt:{
    fontSize:10,
    fontFamily:'Inter-Regular',
    color:'lightgray'
  }
});

export default styles;
