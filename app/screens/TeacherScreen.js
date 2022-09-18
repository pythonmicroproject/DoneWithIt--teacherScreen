import React, {useEffect, useState, useCallback, useMemo} from "react";
import { View, Text, Button, StyleSheet, FlatList, TouchableOpacity,Image,Alert } from 'react-native';

import DropDownPicker from 'react-native-dropdown-picker';
// import Certificates from "./Certificates";

 DropDownPicker.setTheme("DARK"); //DARKNESS AWAITS YOU *only for dropdown


export default function TeacherScreen({navigation}) {

    const [data, setData] = useState([
    {   
        Student:"roshin",
        "certificate_date": "07/28/22",
        "certificate_days": "2",
        "certificate_id": 18,
        "certificate_name": "Hackathon 1",
        certificate_points: 20,
        "certificate_status": "accepted",
        "certificate_subtype": "Industrial Training/ Internship",
        certificate_type: "Professional Self Initiatives",
        "certificate_uri": "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252Fppv2-0075bac0-58e0-4c3f-8d87-0abcbe5b4605/ImagePicker/e998d530-3f97-45a6-a9a4-06bb0998d44c.jpg",
        "certificate_venue": "RSET",
        "student_ref": 3,
        "teacher_ref": 1,
        "tags": 'tag 3'
      },
      { 
        Student:"russel",
        "certificate_date": "07/28/22",
        "certificate_days": "7",
        "certificate_id": 19,
        "certificate_name": "MOOC 1",
        certificate_points: 10,
        "certificate_status": "accepted",
        "certificate_subtype": "MOOC",
        certificate_type: "Professional Self Initiatives",
        "certificate_uri": "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252Fppv2-0075bac0-58e0-4c3f-8d87-0abcbe5b4605/ImagePicker/0c71b502-af39-42d0-89d4-467a8ffcb2d8.jpg",
        "certificate_venue": "online",
        "student_ref": 3,
        "teacher_ref": 1,
        "tags": 'tag 3'

      },{
        Student:"roshin",
        "certificate_date": "07/28/22",
        "certificate_days": "14",
        "certificate_id": 20,
        "certificate_name": "MOOC 2",
        certificate_points: 50,
        "certificate_status": "accepted",
        "certificate_subtype": "MOOC",
        certificate_type: "Professional Self Initiatives",
        "certificate_uri": "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252Fppv2-0075bac0-58e0-4c3f-8d87-0abcbe5b4605/ImagePicker/1985a8c9-45ad-4856-b282-39bf5eca7f8a.jpg",
        "certificate_venue": "online",
        "student_ref": 3,
        "teacher_ref": 1,
        "tags": 'tag 3'

      },{
        Student:"russel",
        "certificate_date": "07/05/22",
        "certificate_days": "3",
        "certificate_id": 21,
        "certificate_name": "Mooc 3",
        certificate_points: 30,
        "certificate_status": "accepted",
        "certificate_subtype": "MOOC",
        certificate_type: "Professional Self Initiatives",
        "certificate_uri": "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252Fppv2-0075bac0-58e0-4c3f-8d87-0abcbe5b4605/ImagePicker/4825e023-b99c-4ff3-8076-e8e7641753c2.jpg",
        "certificate_venue": "rset",
        "student_ref": 3,
        "teacher_ref": 1,
        "tags": 'tag 3'

      }
    ])

    const [submitted,setSubmit] = useState(false);
    const [studentOpen, setStudentOpen] = useState(false);
    const [categoryOpen, setCategoryOpen] = useState(false);
    const [pointsOpen, setPointsOpen] = useState(false);

    
    //
    // const [student, setStudent] = useState('NONE');

    const onStudentOpen = useCallback(() => {
        setCategoryOpen(false);
        setPointsOpen(false);
    },[]);

    const onCategoryOpen = useCallback(() => {
        setStudentOpen(false);
        setPointsOpen(false);
    },[]);

    const onPointsOpen = useCallback(() => {
        setStudentOpen(false);
        setCategoryOpen(false);
        setSubmit(false);
    },[]);


    const [student, setStudent] = useState(null);
    const [studentItems, setStudentItems] = useState([
        {label: 'Roshin', value: 'roshin'},
        {label: 'Russel', value: 'russel'}
    ])

    const [categoryValue, setCategoryValue] = useState(null);
    const [categoryItems, setCategoryItems] = useState([
        {label: 'Sports & Games', value:'sports'},
        {label: 'Cultural Activities', value:'cultural'},
        {label: 'Professional', value:'Professional Self Initiatives'}
    ])


    const [pointValue, setPointValue] = useState(null);
    const [pointItems, setPointItems] = useState([
        {label: '<10', value:'10'},
        {label: '<20', value:'20'},
        {label: '<30', value:'30'},
        {label: '<40', value:'40'},
        {label: '<50', value:'60'},
        {label: '<60', value:'60'}
    ])


    //
    const filteredList = useMemo(
        () => {
            if (student === 'NONE' && categoryValue === 'NONE' && pointValue === 'NONE') 
                {
                    console.log('dadas')
                    return data
                }
                return data.filter(item => (student === item.Student && categoryValue === item.certificate_type && pointValue === item.certificate_points))
        },
        [student, categoryValue, pointValue, data]
    )

    // const onClick = (student) => () => {
    //     setStudent(student)
    // }
    //


    //function to submit selected values
    const submit = async() => {

        console.log('Current student value,', student);
        console.log('Current category value,', categoryValue);
        console.log('Current point value,', pointValue);

        setSubmit(true);
    }


    //function to reset all selected values
    const reset = async() => {
        setStudent(null);
        setCategoryValue(null);
        setPointValue(null);

        setSubmit(false);
    }

    const renderTags = (item) =>{
        return item.tags.map((tag, key) => {
          return (
           
              <Text style={styles.btnColor} >{tag}</Text>
           
          );
        })
      }

    
    const cardClickEventListener = (item) => {
    Alert.alert(item.certificate_name);
  }


    // const onClick = (student) => () => {
    //     setStudent(student)
    // }
    return(
        <View style={styles.daddyContainer}>
            <View style={styles.container}>
                <View style={styles.boxContainer}>
                    
                    <View style={styles.box}>
                        <Text style={{paddingVertical: 15, paddingRight:5}}>Student : </Text>
                        <DropDownPicker
                            placeholder="Select student"
                            searchable={true}
                            searchPlaceholder="Search Student..."
                            open={studentOpen}
                            onOpen={onStudentOpen}
                            value={student}
                            items={studentItems}
                            setOpen={setStudentOpen}
                            setValue={setStudent}
                            setItems={setStudentItems}

                            zIndex={3000}
                            zIndexInverse={1000}
                        />
                    </View>
                    
                    <View style={styles.box}>
                        <Text style={{paddingVertical:15, paddingRight:5}}>Category :</Text>
                        <DropDownPicker
                            placeholder="Select category"
                            open={categoryOpen}
                            onOpen={onCategoryOpen}
                            value={categoryValue}
                            items={categoryItems}
                            setOpen={setCategoryOpen}
                            setValue={setCategoryValue}
                            setItems={setCategoryItems}

                            zIndex={2000}
                            zIndexInverse={2000}
                        />
                    </View>

                    <View style={styles.box}>
                        <Text style={{paddingVertical: 15, padding:10}}>Points :</Text>
                        <DropDownPicker
                            placeholder="Select points"
                            open={pointsOpen}
                            onOpen={onPointsOpen}
                            value={pointValue}
                            items={pointItems}
                            setOpen={setPointsOpen}
                            setValue={setPointValue}
                            setItems={setPointItems}

                            zIndex={1000}
                            zIndexInverse={3000}
                        />
                    </View>
                
                    <View style={styles.Button}>
                        <Button title="Submit" onPress={submit} color="#406882" />
                        <Button title="Reset" onPress={reset} color="#406882"/>
                    </View>

                </View>

            </View>

            <View style={styles.certificateContainer}>
            { 
            submitted ? 
            (<View style={styles.flatListContainer}>

                <FlatList 
                    style={styles.notificationList}
                    // data={data}
                    data = {filteredList}
                    keyExtractor= {(item) => {
                        return item.certificate_id;
                        console.log(item.id)
                    }}
                    renderItem={({item,navigation}) => {
                        return (
                        <TouchableOpacity style={[styles.card, {borderColor:item.color}]} onPress={() => {cardClickEventListener(item)}} >
                            <View style={styles.cardContent}>
                            <Image style={[styles.image, styles.imageContent]} source={{uri: item.certificate_uri}}/>
                            <Text style={styles.name}>{item.certificate_name}</Text>
                            </View>
                            <View style={[styles.cardContent, styles.tagsContent]}>
                                {renderTags(item)}
                            </View>
                        </TouchableOpacity>
                        )
                }}/> 
            </View>) : null 

            }
            </View>
        </View>

    )
}


const styles = StyleSheet.create({
    daddyContainer:{
        flexDirection:'column',
        alignSelf:'stretch',
        justifyContent:'space-evenly',   
    },
    container:{
        flexDirection:'row',
        alignSelf:'stretch',
        justifyContent: 'space-evenly',
        flex:3,
    },
    boxContainer:{
        borderRadius:20,
        height: 300,
        flex:1,
        backgroundColor:'#fff',
        alignItems: 'center',
        flexDirection:'column',
        justifyContent:'space-evenly',
        margin: 0,
        marginTop:10,
        marginHorizontal:5,
        paddingLeft:10,
        paddingRight:10,
        elevation: 10,
    },
    box:{
        paddingTop:15,
        paddingLeft:30,
        paddingRight:30,
        flexDirection:'row',
        alignItems:'stretch',
    },
    Button:{
        borderRadius:20,
        flexDirection:'row',
        justifyContent:'space-evenly',
        // alignContent:'space-between',
        alignSelf:'stretch',
        margin:15,
    },
    certificateContainer:{
        borderRadius:20,
        marginTop:20,
    },
    flatListContainer: {
        // flex: 1,
        marginTop:300,
        backgroundColor: '#ffffff',
      },
    formContent:{
        flexDirection: 'row',
        marginTop:30,
      },

    icon:{
        width:30,
        height:30,
      },

    notificationList:{
        marginTop:20,
        padding:10,
    },
    card: {
        // height:null,
        borderRadius:10,
        paddingTop:10,
        paddingBottom:10,
        marginTop:5,
        backgroundColor: '#FFFFFF',
        flexDirection: 'column',
        borderTopWidth:40,
        marginBottom:20,
    },
    cardContent:{
        flexDirection:'row',
        marginLeft:10, 
    },
    imageContent:{
        marginTop:-40,
    },
    tagsContent:{
        marginTop:10,
        flexWrap:'wrap'
    },
    image:{
        width:100,
        height:80,
        borderRadius:0,
    },
    name:{
        fontSize:20,
        fontWeight: 'bold',
        marginLeft:10,
        alignSelf: 'center'
    },
    btnColor: {
        padding:10,
        fontWeight: 'bold',
        marginHorizontal:3,
       
        marginTop:5,
    },
})