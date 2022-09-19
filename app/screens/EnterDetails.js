import DateTimePicker from '@react-native-community/datetimepicker';
import { Children, useState } from 'react';

import { Dropdown } from 'react-native-element-dropdown';
import React from 'react';
import { Card, Icon } from 'react-native-elements';

import {
    View,
    Text,
    Input,
    Button,
    SafeAreaView,Modal,Pressable,Alert,
    Keyboard,
    ScrollView,
    
    
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Platform, Image
} from 'react-native';
import { child } from 'fontawesome';

const data = [
  { label: 'National Initiatives Participation', value: '1' },
  { label: 'Sports & Games Participation', value: '2' },
  { label: 'Cultural Activities Participation', value: '3' },
   [
    {label: 'Customer Relations'},
    {label: 'IT'},
    {label: 'Human Resources'},
    {label: 'Managerial'},
  ],
];

const EnterDetails = ({navigation, route}) => {
  
    const [name, onChangeName] = useState("");

    const [modalVisible, setModalVisible] = useState(false);
    const [mydate, setDate] = useState(new Date());
    const [displaymode, setMode] = useState('date');
    const [isDisplayDate, setShow] = useState(false);
    const changeSelectedDate = (event, selectedDate) => {
        const currentDate = selectedDate || mydate;
        setDate(currentDate);
        setShow(false);
    };
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };
    const displayDatepicker = () => {
        showMode('date');
    };
    const renderLabel = () => {
        if (value || isFocus) {
            return (
                <Text style={{ fontWeight: 'bold', fontSize: 15 }}>
                   
                </Text>
            );
        }
        return null;
    };

    const BarCodeScannerCall = () =>{
      navigation.navigate('BarCodeScanner', { onReturn: (item) => {
        onChangeName(item)
      }});
    }

    const ImageSelectorCall = () =>{
      navigation.navigate('ImageSelector');
    }
    
    const onPress = (screenNumber) => {   
      setModalVisible(!modalVisible);
      screenNumber == 0 ? BarCodeScannerCall() : ImageSelectorCall();  //screenNumber = 0 for Barcode, 1 for imageSelector
    }


    console.log(mydate);
    
    return (
        <SafeAreaView style={styles.container}>
          <ScrollView>
          <View style={styles.centeredView}>
          <TouchableOpacity  >
                    <Card containerStyle={{
                        width: 300, height: 170, borderRadius: 15, backgroundColor: '#e8e7e6',marginBottom:50
                    }}>
                       

      <Modal  
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>

            <View style={{flexDirection:'row',marginTop:50}}>

                {/* onPress would disable modal and call barcode scanner ( which is passed as screen 0 ) */}
                <TouchableOpacity 
                  onPress={() => onPress(0)} >
                  <Card containerStyle={{width:70,height:70,borderRadius:15,backgroundColor:'#e8e7e6'}}>
                    <Icon 
                      name='camera' type='font-awesome-5' size={40}/>
                  </Card>
                </TouchableOpacity>

                {/* onPress would disable modal and call barcode scanner ( which is passed as screen 1 ) */}
                <TouchableOpacity 
                    onPress={() => onPress(1)}
                    style={{color:'white',marginLeft:50}}>
                  <Card containerStyle={{width:70,height:70,borderRadius:15,backgroundColor:'#e8e7e6'}}>
                    <Icon
                      name='file' type='font-awesome-5' size={38} iconStyle={{color:'blue'}}/>
                </Card>
                </TouchableOpacity>

            </View>

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)} >
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
       <Icon
  name='plus-circle' type='font-awesome-5' size={40}/>
      </Pressable>
      </Card></TouchableOpacity></View>
    
            
            <Text style={{ fontWeight: 'bold', marginTop: -20 }}>Name:  </Text>
          
            <View style={{ flexDirection: 'column', borderRadius: 15, borderColor: '#3173de', borderWidth: 2, height: 40, }}>

                <TextInput 
                style={styles.textinput} 
                onChangeText = {onChangeName}
                value={name}
                // placeholder="Name :"
                />

                </View>
            <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Venue: </Text>
            <View style={{ flexDirection: 'column', borderRadius: 15, borderColor: '#3173de', borderWidth: 2, height: 40, }}>

                <TextInput style={styles.textinput} /></View>
            <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Number of Days: </Text>
            <View style={{ flexDirection: 'column', borderRadius: 15, borderColor: '#3173de', borderWidth: 2, height: 40, }}>

                <TextInput style={styles.textinput} /></View>
                <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Date: </Text>
            
           
                <TouchableOpacity onPress={displayDatepicker} ><Icon
                            name='calendar-alt' type='font-awesome-5' size={40} iconStyle={{marginTop:20,marginLeft:10}}/></TouchableOpacity>
                            <Text style={{marginTop:20}}>{String(mydate)}</Text>
                {isDisplayDate && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={mydate}
                        mode={displaymode}
                        is24Hour={true}
                        display="default"
                        onChange={changeSelectedDate}
                    />
                )}
                {/* <Text style={{ fontWeight: 'bold', marginTop: 20 }}>{mydate.format()}</Text> */}
            </View>
            <View style={{ marginTop: 100 }}>
            <Text style={{ fontWeight: 'bold', marginTop: -50 }}> Select Certificate Type:  </Text>
            {renderLabel()}
                <Dropdown
                    style={[styles.dropdown, isFocus && {  borderWidth: 1 }]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    data={data}
                    search
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder={!isFocus ? 'Select Activity Type' : '...'}
                    searchPlaceholder="Search..."
                    value={value}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={item => {
                        setValue(item.value);
                        setIsFocus(false);
                    }}

                />
            </View>
            </ScrollView>
        </SafeAreaView>)
}

export default EnterDetails;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
        paddingLeft: 60,
        paddingRight: 60,
        paddingTop: Platform.OS === "android" ? 20 : 0,
        alignSelf: 'stretch',
        borderRadius: 15,
        borderColor: '#3173de',
    },
    textinput: {
        alignSelf: 'stretch',
        width: '82%',
        height: 23,
        marginBottom: 30,

        color: 'black',
        paddingTop: 4,
        marginLeft: 20,



    },
    button: {
        alignSelf: 'stretch',
        alignItems: 'center',
        paddding: 20,
        backgroundColor: '#3173de',
        marginTop: 30,
        height: 50,
    }, btntext: {

        padding: 10,
        color: '#ffff',
        fontWeight: 'bold',
    },
    dropdown: {
        margin: 1,
        height: 50,
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5,
    },
    icon: {
        marginRight: 5,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      marginTop: -180,
      
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      height:300,
      width:300
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 1,
      
    },
    buttonOpen: {
      backgroundColor: "silver",
      width:100,
      marginLeft:85,
      marginTop:40
    },
    buttonClose: {
      backgroundColor: "blue",
      marginTop:80,
      width:100,
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }
});