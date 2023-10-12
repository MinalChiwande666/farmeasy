import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

interface buttonprops{
    text:String,
    style:any,
    btnstyle:any,
    onPress:()=>void
}
const Buttonn = React.forwardRef<any,buttonprops>((props,ref)=> {
    const {text,style,onPress,btnstyle} = props
    return (

          <TouchableOpacity
          onPress={onPress}
          style={btnstyle}
          >
              <Text style={style}>{text}</Text>
          </TouchableOpacity>
     
    )
  }) 

export default Buttonn