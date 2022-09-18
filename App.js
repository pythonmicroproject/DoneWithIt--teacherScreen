import * as React from 'react';
import { Button, View, Text,SafeAreaView,StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegistrationScreen from './app/screens/RegistrationScreen';
import LoginScreen from './app/screens/LoginScreen';
import StudentDashboard from './app/screens/StudentDashboard';
import TeacherDashboardScreen from './app/screens/TeacherDashboardScreen';
import EnterDetails from './app/screens/EnterDetails';
import TeacherLogin from './app/screens/TeacherLogin';
import  TeacherRegistrationScreen from './app/screens/TeacherRegistrationScreen';
import  ViewActivityPoints from './app/screens/ViewActivityPoints';
import ViewCertificates from './app/screens/ViewCertificates';
// import ViewCertificatesTeacher from './app/screens/ViewCertificatesTeacher';
import HomeScreen from './app/screens/HomeScreen';

import ImageSelector from './app/screens/ImageSelector';
import BarCodeScanner from './app/screens/BarCodeScanner';
import CertificateDetails from './app/screens/CertificateDetails';
import StudentListView from './app/screens/StudentListView';
import CertificateDetailsTeacher from './app/screens/CertificateDetailsTeacher';

import TeacherScreen from './app/screens/TeacherScreen';


function HomeScreen1({ navigation }) {
  return (
    <SafeAreaView  style={{backgroundColor:'white',flex:1}}>
         <StatusBar
        animated={true}
        backgroundColor="grey"
        />
      <Text style={{fontSize:36,marginTop:150,marginLeft:100,color:'#000080'}}>Point Plus+</Text>
      <View style={{flexDirection:'row',marginTop:300,marginLeft:50}}><Button style={{marginLeft:100}}
        title="Login as Teacher"
        onPress={() => navigation.navigate('TeacherLogin')}
      /><View style={{width:20,height:20}} />
      <Button style={{marginLeft:10}}
        title="Login as Student"
        onPress={() => navigation.navigate('Login')}
      /></View>
    </SafeAreaView>
  );
}



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen 
   name="Point Plus" component={HomeScreen} options={{
          title: '',
          
            headerShown: false,
        
         
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
        <Stack.Screen name="StudentLogin" component={LoginScreen}  options={{
          
          
        
        
          headerStyle: {
            borderRadius:30,
            width:'50',
            backgroundColor:'white'
            
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
        <Stack.Screen name="TeacherLogin" component={TeacherLogin}  options={{
          
          
        
        
          headerStyle: {
            borderRadius:30,
            width:'50',
            backgroundColor:'white'
            
          },}}/>
        <Stack.Screen name="Register" component={RegistrationScreen} />
        <Stack.Screen name="TeacherDashboardScreen" component={TeacherDashboardScreen} />
        <Stack.Screen name="StudentDashboard" component={StudentDashboard}  options={{
          
          
        
        
          headerStyle: {
            borderRadius:30,
            width:'50',
            backgroundColor:'white'
            
          },}}/>
        <Stack.Screen name="TeacherRegistrationScreen" component={TeacherRegistrationScreen} />
        <Stack.Screen name="EnterDetails" component={EnterDetails} />
        <Stack.Screen name="ViewActivityPoints" component={ViewActivityPoints} />
        <Stack.Screen name="ImageSelector" component={ImageSelector}/>
        <Stack.Screen name="BarCodeScanner" component={BarCodeScanner} />
       
        <Stack.Screen name="CertificateDetails" component={CertificateDetails} />
        <Stack.Screen name="StudentListView" component={StudentListView} />
        <Stack.Screen name="ViewCertificates" component={ViewCertificates} />
        <Stack.Screen name="CertificateDetailsTeacher" component={CertificateDetailsTeacher} />
        {/* <Stack.Screen name="ViewCertificatesTeacher" component={ViewCertificatesTeacher} /> */}

        <Stack.Screen name="Teacher" component={TeacherScreen}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;