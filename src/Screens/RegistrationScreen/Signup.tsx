import {
  View,
  Text,
  TouchableHighlight,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useRef} from 'react';
import styles from './signup';
import MaterialCommunityicons from 'react-native-vector-icons/MaterialCommunityIcons';
import Textinput from '../../components/TextInputComponent/Textinput';
const Signup = () => {
  const [dropcountry, setdropcountry] = useState<any>(false);
  const [dropstate, setdropstate] = useState<any>(false);
  const [dropcity, setdropcity] = useState<any>();
  const [Signupform, setsignupform] = useState<any>({
    first_name: '',
    last_name: '',
    phone_no: '',
    email: '',
    password: '',
    cpassword: '',
    country: '',
    state: '',
    city: '',
    pincode: '',
    selectprofession: '',
    agree: false,
  });
  const regref = useRef();
  const country = [
    {
      id: 1,
      name: 'India',
    },
    {
      id: 2,
      name: 'Argentina',
    },
    {
      id: 3,
      name: 'Brazil',
    },
    {
      id: 4,
      name: 'China',
    },
  ];

  const state = [
    {
      id: 1,
      name: 'Maharashtra',
    },
    {
      id: 2,
      name: 'Chennai',
    },
    {
      id: 3,
      name: 'Hydrabaad',
    },
    {
      id: 4,
      name: 'Gujraat',
    },
  ];

  const city = [
    {
      id: 1,
      name: 'Nagpur',
    },
    {
      id: 2,
      name: 'Mumbai',
    },
    {
      id: 3,
      name: 'Pune',
    },
    {
      id: 4,
      name: 'Amravati',
    },
  ];
  const onChangename = (e: any) => {
    setsignupform({
      ...Signupform,
      first_name: e,
    });
  };
  const onChangelastname = (e: any) => {
    setsignupform({
      ...Signupform,
      last_name: e,
    });
  };
  const onChangephoneno = (e: any) => {
    setsignupform({
      ...Signupform,
      phone_no: e,
    });
  };
  const onChangeEmail = (e: any) => {
    setsignupform({
      ...Signupform,
      email: e,
    });
  };
  const onChangepassword = (e: any) => {
    setsignupform({
      ...Signupform,
      password: e,
    });
  };
  const onChangecpassword = (e: any) => {
    setsignupform({
      ...Signupform,
      cpassword: e,
    });
  };
  return (
    <View
      onTouchStart={() => {
        // alert("hello")
      }}
      style={styles.container}>
      <View style={styles.headconatiner}>
        <View style={styles.head}>
          <Text style={styles.headtxt}>Signup</Text>
        </View>
      </View>

      {/* logo container */}
      <View style={styles.logocontainer}>
        <Text>FarmEasy</Text>
      </View>

      {/* registraionform */}
      <View style={styles.signupcontainer}>
        <View style={styles.inputcon}>
          <View style={styles.input}>
            <Textinput
              label={'First Name'}
              value={Signupform.first_name}
              style={{width: 100}}
              ref={regref}
              onChange={onChangename}
              secureEntry={false}
              keyboardtype={'default'}
            />
          </View>
          <View style={styles.input}>
            <Textinput
              label={'Last Name'}
              value={Signupform.last_name}
              style={{width: 100}}
              ref={regref}
              onChange={onChangelastname}
              secureEntry={false}
              keyboardtype={'default'}
            />
          </View>
        </View>
        <View style={styles.inputcon}>
          <View style={styles.input}>
            <Textinput
              label={'Phone No'}
              value={Signupform.phone_no}
              style={{width: 100}}
              ref={regref}
              onChange={onChangephoneno}
              secureEntry={false}
              keyboardtype={'number-pad'}
            />
          </View>
          <View style={styles.input}>
            <Textinput
              label={'Phone No'}
              value={Signupform.email}
              style={{width: 100}}
              ref={regref}
              onChange={onChangeEmail}
              secureEntry={false}
              keyboardtype={'default'}
            />
          </View>
        </View>

        <View style={styles.inputcon}>
          <View style={styles.input}>
            <Textinput
              label={'Password'}
              value={Signupform.password}
              style={{width: 100}}
              ref={regref}
              onChange={onChangepassword}
              secureEntry={true}
              keyboardtype={'default'}
            />
          </View>
          <View style={styles.input}>
            <Textinput
              label={'Confirm Password'}
              value={Signupform.cpassword}
              style={{width: 100}}
              ref={regref}
              onChange={onChangecpassword}
              secureEntry={true}
              keyboardtype={'default'}
            />
          </View>
        </View>

        <View style={styles.inputcon}>
          <View style={[styles.input, {position: 'relative'}]}>
            <TextInput
              placeholder="Country"
              placeholderTextColor={'lightgray'}
            />
            <View
              onTouchStart={() => {
                setdropcountry(!dropcountry);
              }}>
              <MaterialCommunityicons
                name="chevron-down"
                size={24}
                color={'black'}
              />
            </View>
          </View>
          {dropcountry ? (
            <View
              style={{
                position: 'absolute',
                top: 35,
                backgroundColor: 'white',
                width: '50%',
                left: 10,
                padding: 5,
                elevation: 10,
                borderRadius: 10,
                zIndex: 999,
              }}>
              {country.map((item, i) => (
                <>
                  <TouchableOpacity style={styles.selectxountrybtn}>
                    <Text style={styles.countrytxt}>{item.name}</Text>
                  </TouchableOpacity>
                </>
              ))}
            </View>
          ) : null}

          <View style={styles.input}>
            <TextInput placeholder="State" placeholderTextColor={'lightgray'} />
            <View
              onTouchStart={() => {
                setdropstate(!dropstate)
              }}>
              <MaterialCommunityicons
                name="chevron-down"
                size={24}
                color={'black'}
              />
            </View>
          </View>
          {dropstate ? (
            <View
              style={{
                position: 'absolute',
                top: 35,
                backgroundColor: 'white',
                width: '50%',
                right:0,
                padding: 5,
                elevation: 10,
                borderRadius: 10,
                zIndex: 999,
              }}>
              {state.map((item, i) => (
                <>
                  <TouchableOpacity style={styles.selectxountrybtn}>
                    <Text style={styles.countrytxt}>{item.name}</Text>
                  </TouchableOpacity>
                </>
              ))}
            </View>
          ) : null}
        </View>

        <View style={styles.inputcon}>
          <View style={[styles.input, {position: 'relative'}]}>
            <TextInput
              placeholder="Country"
              placeholderTextColor={'lightgray'}
            />
            <View
              onTouchStart={() => {
                setdropcity(!dropcity);
              }}>
              <MaterialCommunityicons
                name="chevron-down"
                size={24}
                color={'black'}
              />
            </View>
            {dropcity ? (
              <View
                style={{
                  position: 'absolute',
                  top: 35,
                  backgroundColor: 'white',
                  width: '50%',
                  left: 10,
                  padding: 5,
                  elevation: 10,
                  borderRadius: 10,
                  zIndex: 999,
                }}>
                {city.map((item, i) => (
                  <>
                    <TouchableOpacity style={styles.selectxountrybtn}>
                      <Text style={styles.countrytxt}>{item.name}</Text>
                    </TouchableOpacity>
                  </>
                ))}
              </View>
            ) : null}
          </View>

          <View style={[styles.input, {position: 'relative'}]}>
            <TextInput
              placeholder="Pincode"
              placeholderTextColor={'lightgray'}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Signup;
