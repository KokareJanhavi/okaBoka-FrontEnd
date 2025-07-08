import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
  Modal,
  FlatList,
} from 'react-native';
import { styles } from '../styles/detailsScreen.styles';

const DROPDOWN_OPTIONS = [
  '1st Year',
  '2nd Year',
  '3rd Year',
  'Final Year',
  'Other',
];

const StudentDetailsScreen = ({ navigation }) => {
  const [interestedIn, setInterestedIn] = useState(null);
  const [relationshipStatus, setRelationshipStatus] = useState(null);
  const [role, setRole] = useState('Student');
  const [schoolName, setSchoolName] = useState('');
  const [currentYear, setCurrentYear] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButtonContainer}
      >
        <Image
          source={require('../../assets/Backarrow.png')}
          style={styles.backButton}
        />
      </TouchableOpacity>

      <Text style={styles.title}>
        Let us understand who you're{'\n'}looking for and where you're at.
      </Text>

      <Text style={styles.label}>
        Interested In{' '}
        <Text style={styles.helperText}>
          (who’s energy do you connect with?)
        </Text>
      </Text>
      <View style={styles.rowWrap}>
        {['Male', 'Female', 'Other'].map(item => (
          <TouchableOpacity
            key={item}
            style={[
              styles.gridButton,
              interestedIn === item && styles.activeButton,
            ]}
            onPress={() => setInterestedIn(item)}
          >
            <Text
              style={[
                styles.optionText,
                interestedIn === item && styles.activeText,
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.label}>Relationship Status</Text>
      <View style={styles.rowWrap}>
        {['Single', 'In A Relationship', 'Prefer Not To Say'].map(item => (
          <TouchableOpacity
            key={item}
            style={[
              styles.gridButton,
              relationshipStatus === item && styles.activeButton,
            ]}
            onPress={() => setRelationshipStatus(item)}
          >
            <Text
              style={[
                styles.optionText,
                relationshipStatus === item && styles.activeText,
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.label}>Are You</Text>
      <View style={styles.rowWrap}>
        {['Student', 'Employee', 'Freelancer', 'Other'].map(item => (
          <TouchableOpacity
            key={item}
            style={[styles.gridButton, role === item && styles.activeButton]}
            onPress={() => setRole(item)}
          >
            <Text
              style={[styles.optionText, role === item && styles.activeText]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Conditional Inputs Based on Role */}
      {role === 'Student' && (
        <>
          <Text style={styles.label}>What’s your School/college name?</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter name"
            placeholderTextColor="#888"
            value={schoolName}
            onChangeText={setSchoolName}
          />

          <Text style={styles.label}>Currently studying in?</Text>
          <TouchableOpacity
            style={styles.input}
            onPress={() => setShowDropdown(true)}
          >
            <Text style={{ color: currentYear ? '#000' : '#888' }}>
              {currentYear || 'Select year/course'}
            </Text>
          </TouchableOpacity>

          {/* Modal dropdown */}
          <Modal
            visible={showDropdown}
            transparent
            animationType="fade"
            onRequestClose={() => setShowDropdown(false)}
          >
            <TouchableOpacity
              style={styles.modalOverlay}
              activeOpacity={1}
              onPressOut={() => setShowDropdown(false)}
            >
              <View style={styles.dropdownContainer}>
                <FlatList
                  data={DROPDOWN_OPTIONS}
                  keyExtractor={item => item}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      style={styles.dropdownItem}
                      onPress={() => {
                        setCurrentYear(item);
                        setShowDropdown(false);
                      }}
                    >
                      <Text style={styles.dropdownText}>{item}</Text>
                    </TouchableOpacity>
                  )}
                />
              </View>
            </TouchableOpacity>
          </Modal>
        </>
      )}

      {role === 'Employee' && (
        <>
          <Text style={styles.label}>Company name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter company name"
            placeholderTextColor="#888"
          />

          <Text style={styles.label}>Your designation</Text>
          <TextInput
            style={styles.input}
            placeholder="e.g., Software Engineer"
            placeholderTextColor="#888"
          />
        </>
      )}

      {(role === 'Freelancer' || role === 'Other') && (
        <>
          <Text style={styles.label}>What kind of work do you do?</Text>
          <TextInput
            style={styles.input}
            placeholder="e.g., Graphic Design, Writing"
            placeholderTextColor="#888"
          />
        </>
      )}

      <TouchableOpacity
        style={styles.continueButton}
        onPress={() => navigation.navigate('HomeScreen')}
      >
        <Text style={styles.continueText}>Continue</Text>
      </TouchableOpacity>
      <Text style={styles.subtitle}>Your very first vibe</Text>
      <TouchableOpacity>
        <Text style={styles.skipText}>Skip For Now</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};
export default StudentDetailsScreen;
