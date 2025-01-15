import { View, Text, StyleSheet, Button, Switch, ScrollView, Alert } from 'react-native';
import React, { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';

export default function RegistrationStep6() {
  const [availability, setAvailability] = useState([]);
  const [selectedDays, setSelectedDays] = useState([]);
  const [openTime, setOpenTime] = useState(new Date());
  const [closeTime, setCloseTime] = useState(new Date());
  const [closedDays, setClosedDays] = useState([]);
  const [openTimePicker, setOpenTimePicker] = useState(false);
  const [closeTimePicker, setCloseTimePicker] = useState(false);

  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  // Handle selecting days
  const toggleDaySelection = (day) => {
    setSelectedDays((prevSelectedDays) => {
      if (prevSelectedDays.includes(day)) {
        return prevSelectedDays.filter((d) => d !== day);
      } else {
        return [...prevSelectedDays, day];
      }
    });
  };

  // Handle setting working hours for selected days
  const handleSetWorkingHours = () => {
    if (selectedDays.length === 0) {
      Alert.alert('Error', 'Please select at least one day.');
      return;
    }

    const newAvailability = selectedDays.map((day) => ({
      day,
      open: openTime.toLocaleTimeString(),
      close: closeTime.toLocaleTimeString(),
      closed: closedDays.includes(day),
    }));

    setAvailability((prev) => [...prev, ...newAvailability]);
    setSelectedDays([]);
    setOpenTime(new Date());
    setCloseTime(new Date());
    setClosedDays([]);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Set Salon Working Hours</Text>
      {/* Multi-Select Days */}
      <View style={styles.daySelectorContainer}>
        {daysOfWeek.map((day) => (
          <View key={day} style={styles.daySelector}>
            <Text>{day}</Text>
            <Switch
              value={selectedDays.includes(day)}
              onValueChange={() => toggleDaySelection(day)}
            />
          </View>
        ))}
      </View>

      {/* Opening Time Picker */}
      <View style={styles.timeContainer}>
        <Text>Set Opening Time for All Selected Days:</Text>
        <Button
          title={openTime.toLocaleTimeString()}
          onPress={() => setOpenTimePicker(true)}
        />
        {openTimePicker && (
          <DateTimePicker
            value={openTime}
            mode="time"
            display="default"
            onChange={(event, selectedDate) => {
              setOpenTimePicker(false);
              setOpenTime(selectedDate || openTime);
            }}
          />
        )}
      </View>

      {/* Closing Time Picker */}
      <View style={styles.timeContainer}>
        <Text>Set Closing Time for All Selected Days:</Text>
        <Button
          title={closeTime.toLocaleTimeString()}
          onPress={() => setCloseTimePicker(true)}
        />
        {closeTimePicker && (
          <DateTimePicker
            value={closeTime}
            mode="time"
            display="default"
            onChange={(event, selectedDate) => {
              setCloseTimePicker(false);
              setCloseTime(selectedDate || closeTime);
            }}
          />
        )}
      </View>


      {/* Save Working Hours */}
      <Button title="Save Working Hours" onPress={handleSetWorkingHours} />

      {/* Display Availability */}
      <Text style={styles.availabilityHeader}>Current Working Hours:</Text>
      {availability.length === 0 ? (
        <Text style={styles.noAvailability}>No working hours set yet.</Text>
      ) : (
        availability.map((item, index) => (
          <View key={index} style={styles.dayContainer}>
            <Text style={styles.dayText}>
              {item.day}: {item.closed ? 'Closed' : `${item.open} - ${item.close}`}
            </Text>
          </View>
        ))
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 0,
   
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  instructions: {
    fontSize: 16,
    color: '#333',
    marginBottom: 15,
    textAlign: 'center',
  },
  daySelectorContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  daySelector: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
    marginBottom: 10,
  },
  timeContainer: {
    marginBottom: 20,
  },
  daySelectorText: {
    marginRight: 10,
  },
  dayContainer: {
    marginTop: 10,
    padding: 15,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  dayText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  availabilityHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: '#333',
  },
  noAvailability: {
    fontSize: 16,
    color: '#777',
    textAlign: 'center',
  },
});
