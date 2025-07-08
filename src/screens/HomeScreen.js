import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import {styles} from '../styles/homeScreen.styles';

const moods = [
  { emoji: '😊', label: 'Happy' },
  { emoji: '😘', label: 'Romantic' },
  { emoji: '😔', label: 'Sad' },
  { emoji: '😐', label: 'Neutral' },
  { emoji: '🤩', label: 'Excited' },
];

const moments = [
  {
    date: 'July 07, 2025',
    location: 'Metro Manila, Philippines',
    emoji: '😔',
    caption:
      'You spent time outdoors — surrounded by trees, sunlight, and the quiet rhythm of the city.',
    images: [
      require('../../assets/1.png'),
      require('../../assets/2.png'),
      require('../../assets/3.png'),
      require('../../assets/1.png'),
      require('../../assets/2.png'),
      require('../../assets/3.png'),
    ],
    momentText: 'Best Moment Of The Day',
    moreCount: 8,
  },
  {
    date: 'July 27, 2025',
    location: 'Bataan, Philippines',
    emoji: '😊',
    caption:
      'You spent time outdoors — surrounded by trees, sunlight, and the quiet rhythm of the city.',
    images: [
      require('../../assets/1.png'),
      require('../../assets/2.png'),
      require('../../assets/3.png'),
    ],
    momentText: 'Best Moment Of The Day',
    moreCount: 5,
  },
];

const HomeScreen = () => {
  const [selectedMood, setSelectedMood] = useState('Sad');
  const [expandedIndexes, setExpandedIndexes] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  const renderMoment = (moment, index) => {
    const isExpanded = expandedIndexes.includes(index);
    const imagesToShow = isExpanded ? moment.images : moment.images.slice(0, 6);

    return (
      <View key={index} style={styles.momentCard}>
        <View style={styles.momentHeader}>
          <View>
            <Text style={styles.momentDate}>{moment.date}</Text>
            <Text style={styles.momentLocation}>📍 {moment.location}</Text>
          </View>
          <Text style={styles.options}>⋮</Text>
        </View>

        <Text style={styles.caption}>{moment.caption}</Text>

        <View style={styles.gridContainer}>
          {imagesToShow.map((img, i) => (
            <TouchableOpacity
              key={i}
              style={styles.gridImageWrap}
              onPress={() => setSelectedImage(img)}
            >
              <Image source={img} style={styles.gridImage} />

              {isExpanded && i === 2 && moment.momentText && (
                <View style={styles.overlayTextBox}>
                  <Text style={styles.overlayText}>{moment.momentText}</Text>
                </View>
              )}

              {!isExpanded && index === moments.length - 1 && i === 1 && (
                <View style={styles.overlayPlus}>
                  <Text style={styles.plus}>＋</Text>
                </View>
              )}
            </TouchableOpacity>
          ))}
        </View>
        {selectedImage && (
          <View style={styles.modalOverlay}>
            <TouchableOpacity
              style={styles.modalBackground}
              onPress={() => setSelectedImage(null)}
            />
            <Image source={selectedImage} style={styles.fullImage} />
          </View>
        )}
        <TouchableOpacity
          onPress={() => {
            if (isExpanded) {
              setExpandedIndexes(expandedIndexes.filter(i => i !== index));
            } else {
              setExpandedIndexes([...expandedIndexes, index]);
            }
          }}
        >
          <Text style={styles.moreMoments}>
            {isExpanded ? '▲' : `${moment.moreCount} More Moments`}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.moodHeading}>How I’m Feeling Right Now</Text>

      {/* Arrows and mood */}
      <View style={styles.moodRow}>
        <Text style={styles.arrow}>←</Text>

        <View style={styles.moodSelector}>
          {moods.map(mood => (
            <TouchableOpacity
              key={mood.label}
              onPress={() => setSelectedMood(mood.label)}
              style={styles.moodItem}
            >
              <View
                style={[
                  styles.emojiCircle,
                  selectedMood === mood.label && styles.activeCircle,
                ]}
              >
                <Text style={styles.emoji}>{mood.emoji}</Text>
              </View>
              <Text
                style={[
                  styles.moodLabel,
                  selectedMood === mood.label && styles.activeMoodLabel,
                ]}
              >
                {mood.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <Text style={styles.arrow}>→</Text>
      </View>

      {/* Mood Subtext */}
      <Text style={styles.moodSubText}>{selectedMood} as Life</Text>

      {/* Feed */}
      <ScrollView contentContainerStyle={styles.content}>
        {moments.map((moment, index) => renderMoment(moment, index))}
      </ScrollView>

      {/* Bottom Nav */}
      <View style={styles.bottomNav}>
        <Text style={styles.navItem}>Oka (You)</Text>
        <TouchableOpacity style={styles.navAdd}>
          <Text style={styles.navPlus}>＋</Text>
        </TouchableOpacity>
        <Text style={styles.navItem}>Oka’s</Text>
      </View>
    </View>
  );
};
export default HomeScreen;
