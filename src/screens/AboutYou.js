import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import * as Yup from 'yup';
import {styles} from '../styles/aboutScreen.styles';

const aboutSchema = Yup.object().shape({
  day: Yup.string()
    .required('Day is required')
    .matches(/^\d{2}$/, 'Day must be 2 digits'),
  month: Yup.string()
    .required('Month is required')
    .matches(/^\d{2}$/, 'Month must be 2 digits'),
  year: Yup.string()
    .required('Year is required')
    .matches(/^\d{4}$/, 'Year must be 4 digits'),
  gender: Yup.string().required('Gender is required'),
  location: Yup.string().required('Location is required'),
});

const AboutYouScreen = ({ navigation }) => {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [gender, setGender] = useState('');
  const [location, setLocation] = useState('');
  const [error, setError] = useState('');
  const [dobError, setDobError] = useState('');

  const handleContinue = async () => {
    try {
      if (dobError) {
        setError(dobError);
        return;
      }

      await aboutSchema.validate({ day, month, year, gender, location });
      setError('');
    } catch (err) {
      setError(err.message);
    }
    navigation.navigate('StudentDetailsScreen');
  };

  const validateDOB = (d, m, y) => {
    if (d.length !== 2 || m.length !== 2 || y.length !== 4) {
      setDobError('');
      return;
    }

    const dayNum = parseInt(d, 10);
    const monthNum = parseInt(m, 10);
    const yearNum = parseInt(y, 10);
    const currentYear = new Date().getFullYear();

    if (isNaN(dayNum) || isNaN(monthNum) || isNaN(yearNum)) {
      setDobError('Enter valid numbers');
      return;
    }

    if (dayNum < 1 || dayNum > 31) {
      setDobError('Day must be between 1 and 31');
      return;
    }

    if (monthNum < 1 || monthNum > 12) {
      setDobError('Month must be between 1 and 12');
      return;
    }

    if (yearNum >= currentYear) {
      setDobError(`Year must be less than ${currentYear}`);
      return;
    }

    if (!isValidDate(dayNum, monthNum, yearNum)) {
      setDobError('Invalid date (e.g., 31 Feb)');
      return;
    }

    setDobError('');
  };

  const isValidDate = (day, month, year) => {
    const daysInMonth = [
      31,
      isLeapYear(year) ? 29 : 28,
      31,
      30,
      31,
      30,
      31,
      31,
      30,
      31,
      30,
      31,
    ];
    return day <= daysInMonth[month - 1];
  };

  const isLeapYear = year => {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Back Arrow */}
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButtonWrapper}
      >
        <Image
          source={require('../../assets/Backarrow.png')}
          style={styles.backButton}
        />
      </TouchableOpacity>

      <Text style={styles.title}>A little about you so we match better</Text>
      {/* Date of Birth */}
      <Text style={styles.label}>Date of Birth</Text>
      <View style={styles.dobRow}>
        <TextInput
          placeholder="DD"
          placeholderTextColor="grey"
          style={styles.dobInput}
          maxLength={2}
          keyboardType="numeric"
          value={day}
          onChangeText={val => {
            setDay(val);
            validateDOB(val, month, year);
          }}
        />
        <TextInput
          placeholder="MM"
          placeholderTextColor="grey"
          style={styles.dobInput}
          maxLength={2}
          keyboardType="numeric"
          value={month}
          onChangeText={val => {
            setMonth(val);
            validateDOB(day, val, year);
          }}
        />
        <TextInput
          placeholder="YYYY"
          placeholderTextColor="grey"
          style={styles.dobInput}
          maxLength={4}
          keyboardType="numeric"
          value={year}
          onChangeText={val => {
            setYear(val);
            validateDOB(day, month, val);
          }}
        />
      </View>
      {dobError ? <Text style={styles.errorText}>{dobError}</Text> : null}

      {/* Gender */}
      <Text style={styles.label}>Gender</Text>
      <View style={styles.genderRow}>
        {['Male', 'Female', 'Other'].map(g => (
          <TouchableOpacity
            key={g}
            style={[styles.genderBtn, gender === g && styles.genderSelected]}
            onPress={() => setGender(g)}
          >
            <Text
              style={[
                styles.genderText,
                gender === g && styles.genderTextSelected,
              ]}
            >
              {g}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Location */}
      <Text style={styles.label}>Location (City, Country)</Text>
      <TextInput
        placeholder="e.g., Pune, India"
        placeholderTextColor="grey"
        style={styles.locationInput}
        value={location}
        onChangeText={setLocation}
      />
      <Text style={styles.subText}>📍 Use current location</Text>

      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      {/* Continue Button */}
      <TouchableOpacity style={styles.button} onPress={handleContinue}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>

      <Text style={styles.footerText}>
        Who are you open to connecting with?
      </Text>
    </ScrollView>
  );
};

export default AboutYouScreen;
