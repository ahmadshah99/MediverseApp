import React, { useState } from 'react';
import {StyleSheet, View, ScrollView, Image, TouchableHighlight, FlatList, SafeAreaView} from 'react-native';
import { Text, Card, Icon, Button } from 'react-native-elements';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import Header from "../components/Header";
import { FontAwesome } from '@expo/vector-icons';
import Menu from '../components/Menu';

const Booking = ({ navigation, route }) => {
    const [currentTab, setCurrentTab] = useState(0); 
    const [selectedDate, setSelectedDate] = useState({});
    const [amOrPm, setAmOrPm] = useState("AM");
    const [selectedTime, setSelectedTime] = useState("");

    const TIMES = [
        {
            id: 1,
            time: "09:00"
        },
        {
            id: 2,
            time: "09:30"
        },
        {
            id: 3,
            time: "10:00"
        },
        {
            id: 4,
            time: "10:30"
        },
        {
            id: 5,
            time: "11:00"
        },
        {
            id: 6,
            time: "11:30"
        }
    ];

    const TimeItem = ({ title }) => (
        <View style={selectedTime !== title ? styles.item : styles.itemSelected}>
          <Text style={selectedTime !== title ? styles.timeText : styles.timeTextSelected}>{title} {amOrPm}</Text>
        </View>
      );

      const renderItem = ({ item }) => (
        <TouchableHighlight onPress={() => setSelectedTime(item.time)}>
            <TimeItem title={item.time} />
        </TouchableHighlight>
      );

    let jsonVariable = {};


    function SelectDay(day){
        if(JSON.stringify(selectedDate) === '{\"' + day.dateString + '\":{\"selected\":true}}'){
            setSelectedDate({});
        }else{
            jsonVariable[day.dateString] = {selected: true}
            setSelectedDate(jsonVariable);
        }
    }


    return (
        <View>
  <ScrollView style={styles.mainView}>
            <Header navigation={navigation} />
            {currentTab === 0 &&
            <View>
                <FontAwesome onPress={() => navigation.navigate("Doctor Profile", {item: route.params.doctorItem})} name="long-arrow-left" size={30} color="black" style = {{ marginTop: 20, marginBottom: -40, marginLeft: 10 }} />
                <Text h2 style = {{ marginTop: 50, marginLeft: 15 }}>Book an Appointment</Text>
            </View>
            }
            {currentTab === 1 &&
                <View>
                    <FontAwesome onPress={() => setCurrentTab(0)} name="long-arrow-left" size={30} color="black" style = {{ marginTop: 20, marginBottom: -40, marginLeft: 10 }} />
                    <Text h2 style = {{ marginTop: 50, marginLeft: 15 }}>Book an Appointment</Text>
                </View>
            }
            {currentTab === 2 &&
            <View>
                <FontAwesome onPress={() => setCurrentTab(1)} name="long-arrow-left" size={30} color="black" style = {{ marginTop: 20, marginBottom: -40, marginLeft: 10 }} />
                <Text h2 style = {{ marginTop: 50, marginLeft: 130 }}>Review</Text>
            </View>
            }
            {currentTab === 3 &&
            <Text h2 style = {{ marginTop: 50, marginLeft: 120 }}>Booked!</Text>
            }


            <View style = {{ flexDirection: "row", marginVertical: 10, padding: 10, marginHorizontal: 15, alignItems: "center", justifyContent: "center" }}>
                <FontAwesome name="circle" size={18} color={currentTab === 0 ? "#53D8C7" : "silver"} style = {{ padding: 3 }} />
                <FontAwesome name="circle" size={18} color={currentTab === 1 ? "#53D8C7" : "silver"} style = {{ padding: 3 }} />
                <FontAwesome name="circle" size={18} color={currentTab === 2 ? "#53D8C7" : "silver"} style = {{ padding: 3 }} />
                <FontAwesome name="circle" size={18} color={currentTab === 3 ? "#53D8C7" : "silver"} style = {{ padding: 3 }} />
            </View>

            {currentTab === 0 &&             
            <View style = {{ alignItems: "center" }}>
                <View style = {{ justifyContent: "center", alignItems: 'center' }}>
                    <Text style = {{ marginBottom: 25, fontSize: 18 }}>Select a date</Text>
                </View>

                <Calendar 
                    minDate={Date()}
                    enableSwipeMonths={true}
                    onDayPress={(day) => SelectDay(day)}
                    markedDates = {selectedDate}
                />

                {JSON.stringify(selectedDate) === '{}' ? <Text></Text> :             

                <TouchableHighlight onPress={() => setCurrentTab(1)} style={{ backgroundColor: "#035762", padding: 15, color: "#53D8C7", borderRadius: 20, marginVertical: 20, justifyContent: "center", alignItems: "center", width: 150  }}>
                    <Text style = {{ color: "#53D8C7", fontSize: 17 }}>CONTINUE</Text>
                </TouchableHighlight>}

            </View>
            }

            {currentTab === 1 &&
            <View style = {{ alignItems: "center", justifyContent: "center" }}>
                <Text style = {{ fontSize: 18 }}>select time</Text>
                <View style = {{ flexDirection: "row" }}>
                    <TouchableHighlight onPress={() => setAmOrPm("AM")} style = {{ backgroundColor: amOrPm === "AM" ? "#53D8C7" : "silver", borderRadius: 50/2, width: 50, height: 50, alignItems: 'center', justifyContent: "center", marginHorizontal: 7, marginVertical: 20 }}>
                        <Text>AM</Text>
                    </TouchableHighlight>

                    <TouchableHighlight onPress={() => setAmOrPm("PM")} style = {{ backgroundColor: amOrPm === "PM" ? "#53D8C7" : "silver", borderRadius: 50/2, width: 50, height: 50, alignItems: 'center', justifyContent: "center", marginHorizontal: 7, marginVertical: 20 }}>
                        <Text>PM</Text>
                    </TouchableHighlight>
                </View>

                <FlatList
                    contentContainerStyle = {{ marginLeft: 30 }}
                    data={TIMES}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    numColumns={3}
                />

                {selectedTime !== "" &&            
                    <TouchableHighlight onPress={() => setCurrentTab(2)} style={{ backgroundColor: "#035762", padding: 15, color: "#53D8C7", borderRadius: 20, marginVertical: 20, justifyContent: "center", alignItems: "center", width: 150  }}>
                        <Text style = {{ color: "#53D8C7", fontSize: 17 }}>CONTINUE</Text>
                    </TouchableHighlight>
                }
            </View>     
            } 

            {currentTab === 2 &&
                <View style = {{ alignItems: "center", justifyContent: "center" }}>

                    <View style = {{ backgroundColor: "silver", borderRadius: 10, paddingVertical: 10, paddingHorizontal: 20 }}>
                        <Text style = {{ fontWeight: "bold", fontSize: 18 }}>Appointment with Dr. {route.params.doctorItem.name}</Text>
                        <Text style = {{ fontSize: 18, color: "#035762" }}>{JSON.stringify(selectedDate).slice(2, 12)} , {selectedTime} {amOrPm}</Text>
                        <Text style={{ fontSize: 16, fontWeight: "bold" }}>{route.params.doctorItem.clinic}</Text>
                        <Text style = {{ fontSize: 15 }}>{route.params.doctorItem.clinicAddress}</Text>
                        <Text style = {{ fontSize: 15 }}>{route.params.doctorItem.location}</Text>
                    </View>
        
                        <TouchableHighlight onPress={() => setCurrentTab(3)} style={{ backgroundColor: "#035762", padding: 15, color: "#53D8C7", borderRadius: 20, marginVertical: 20, justifyContent: "center", alignItems: "center", width: 150  }}>
                            <Text style = {{ color: "#53D8C7", fontSize: 17 }}>CONFIRM</Text>
                        </TouchableHighlight>
                </View>     
            }

            {currentTab === 3 &&
                <View style = {{ alignItems: "center" }}>
                    <Text style = {{ fontSize: 20, textAlign: "center" }}>Hi Terry, you're all booked for your appointment!</Text>
                    <TouchableHighlight onPress={() => navigation.navigate('User Profile')} style={{ backgroundColor: "#035762", padding: 15, color: "#53D8C7", borderRadius: 20, marginVertical: 20, justifyContent: "center", alignItems: "center", width: 200  }}>
                        <Text style = {{ color: "#53D8C7", fontSize: 17 }}>SEE NOTIFICATIONS</Text>
                    </TouchableHighlight>
                </View>     
            }



        </ScrollView>
            <Menu navigation={navigation} />
        </View>
      
    )
};

export default Booking;

const styles = StyleSheet.create({
    mainView: {
        padding: 10,
        marginBottom: 40,
        height: 680
    },
    item: {
        borderColor: "#035762",
        borderWidth: 2,
        borderRadius: 15,
        margin: 7,
        padding: 10,
    },
    itemSelected: {
        borderColor: "#035762",
        borderWidth: 2,
        borderRadius: 15,
        margin: 7,
        padding: 10,
        backgroundColor: "#035762",
    },
    timeText: {
        color: "#035762",
        fontWeight: "bold",
    },
    timeTextSelected: {
        color: "#fff",
        fontWeight: "bold"
    }
});
