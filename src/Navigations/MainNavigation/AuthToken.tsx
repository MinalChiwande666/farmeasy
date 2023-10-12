import AsyncStorage from "@react-native-async-storage/async-storage";

// const tok:any = AsyncStorage.getItem('auth').then((data)=>{
//     return data
// }).then((res)=>{
//    return res
// })
const loggedin = async()=>{
   let tokrn =  await AsyncStorage.getItem('auth')
   return tokrn
}
const tok:any = loggedin()
export default tok