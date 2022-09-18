import React, { Component } from 'react';
import { Text, View, StyleSheet ,Button,Platform,TouchableOpacity} from 'react-native';
import Dashboard from 'react-native-dashboard';
import { FontAwesome } from 'react-native-vector-icons';
import {Card,Icon} from 'react-native-elements';
import * as Progress from 'react-native-progress';


const TeacherDashboardScreen =({navigation})=> {
    
    return (
       
        <View style={styles.container}>
             

            <View style={{marginTop:30}}>
            <Card >
 <View>
 <Card.Title style={{marginLeft:-180}}>Welcome!First Name</Card.Title></View>
 <Text style={{marginTop:5}}>Class:</Text>
  <View style={{marginTop:45}}><Text style={{marginTop:-30}}>Overall Activity Point Progress</Text><Progress.Bar progress={0.5} width={300} height={18}showsText={true} color={'#000080'} borderRadius={10} borderColor={'black'} marginTop={10}/>
  
  </View>
  
 
</Card></View>
    <View style={{flexDirection:'row',marginLeft:7,marginTop:50}}>
           <TouchableOpacity activeOpacity={0.96}  onPress={() => navigation.navigate('Teacher')}><Card containerStyle={{width:170,height:170,borderRadius:15,backgroundColor:'silver'}}>
                <Icon
                     name='award' type='font-awesome-5' size={40}/>
                <Card.Title style={{marginTop:20,fontSize:18,color:'white'}}>Assign Points</Card.Title></Card>
            </TouchableOpacity>
           
           <TouchableOpacity  activeOpacity={0.96}  style={{color:'white'}}><Card containerStyle={{width:170,height:170,borderRadius:15,backgroundColor:'silver'}}>
                <Icon
                     name='check' type='font-awesome-5' size={40}/>
                <Card.Title style={{marginTop:20,fontSize:18,color:'white'}}>Resolve Tickets</Card.Title></Card>
            </TouchableOpacity></View>
                        
           <View style={{flexDirection:'row',marginLeft:100,marginTop:50}}>
                <TouchableOpacity activeOpacity={0.96} onPress={() => navigation.navigate('StudentListView')}><Card containerStyle={{width:170,height:170,borderRadius:15,backgroundColor:'silver'}}>
                    <Icon
                        name='star' type='font-awesome-5' size={45}  />
                    <Card.Title style={{marginTop:20,fontSize:18,color:'white'}}>Student Performance Review</Card.Title></Card>
                </TouchableOpacity>         
            </View>
    </View>
       
    );
}

export default TeacherDashboardScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ecf0f1',
        
    },
});