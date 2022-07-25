import React from "react";
import { Text ,View, StyleSheet,TextInput ,TouchableOpacity} from 'react-native';
import {Card, Button , Title ,Paragraph} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Unorderedlist from 'react-native-unordered-list';
//import { TouchableOpacity } from "react-native-web";

const CertificateDetailsTeacher = ({navigation}) => {
    
    return(
        <View>
        <Card style={Styles.text}>


    <Card.Cover source={{ uri: 'https://marketplace.canva.com/EAE6pCMh_J0/1/0/1600w/canva-green-white-modern-square-ceremony-award-certificate-_xh1LqamDhc.jpg' }} />
      
    
</Card>
  <Card style={Styles.container}>
    <Card.Content>
    <Paragraph style={Styles.bg}>Name:  </Paragraph>
        <Paragraph style={Styles.bg}>Date:  </Paragraph>
        <Paragraph style={Styles.bg}>Venue:  </Paragraph>
            <Paragraph style={Styles.bg}>Duration:  </Paragraph>
        <Paragraph style={Styles.bg}>Points Awarded :  </Paragraph>
        <Paragraph style={Styles.bg}>Assigned Date:  </Paragraph>
        <Paragraph style={Styles.bg}>Last Modified:  </Paragraph>
    <Paragraph style={Styles.bg}>Certificate Type:  </Paragraph>
    <Unorderedlist ><Text>Sports and Cultural</Text>
    <Unorderedlist><Text>Running</Text>
     </Unorderedlist>
</Unorderedlist>
       

        </Card.Content>
    
    </Card>
    <View >
<Text style={{marginTop:40,marginLeft:120}}>Points:</Text>
  <TextInput  keyboardType = 'numeric' style={{width:150,marginTop:-25,marginLeft:170,borderColor:'black',borderWidth:1,borderRadius:10,paddingLeft:10}}></TextInput>
 <View style={{flexDirection:'row'}}>
    <Button  color="white" style={{marginTop:15,marginLeft:110,backgroundColor:'#90EE90',borderRadius:10,titleColor:'white'}}  onPress={() => navigation.navigate('ViewCertificatesTeacher')} >
    Accept</Button>
  <Button color="white" style={{marginTop:15,marginLeft:30,backgroundColor:'#de0a26',color:'white',borderRadius:10}}  onPress={() => navigation.navigate('ViewCertificatesTeacher')}>Reject</Button>
 </View>
 </View>
    </View> 
    )
}
export default CertificateDetailsTeacher;

const Styles = StyleSheet.create({
    container :{
        alignContent:'center',
    
    },
  bg :{
        backgroundColor:"   rgb(128, 128, 128)",
    borderRadius:5,
    width:250,
    height:30,
    marginTop:15
    
    },

  
 

})
