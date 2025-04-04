import React, { useState } from 'react';
import { StyleSheet, Image, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.85;

// Sample data for university resources and events
const resources = [
  {
    id: '1',
    title: 'Library Resources',
    description: 'Access digital archives, journals, and study materials',
    icon: 'menu-book',
    image: require('@/assets/images/profile-cover.jpg'), // Reusing existing image as placeholder
  },
  {
    id: '2',
    title: 'Career Services',
    description: 'Resume reviews, interview prep, and job listings',
    icon: 'work',
    image: require('@/assets/images/profile-cover.jpg'), // Reusing existing image as placeholder
  },
  {
    id: '3',
    title: 'Academic Advising',
    description: 'Course planning, major selection, and graduation requirements',
    icon: 'school',
    image: require('@/assets/images/profile-cover.jpg'), // Reusing existing image as placeholder
  },
];

const events = [
  {
    id: '1',
    title: 'Tech Career Fair',
    date: 'May 15, 2025',
    location: 'University Center',
    image: require('@/assets/images/profile-cover.jpg'), // Reusing existing image as placeholder
  },
  {
    id: '2',
    title: 'AI Research Symposium',
    date: 'May 22, 2025',
    location: 'Science Building, Room 305',
    image: require('@/assets/images/profile-cover.jpg'), // Reusing existing image as placeholder
  },
  {
    id: '3',
    title: 'Coding Competition',
    date: 'June 5, 2025',
    location: 'Computer Science Building',
    image: require('@/assets/images/profile-cover.jpg'), // Reusing existing image as placeholder
  },
];

export default function ExploreScreen() {
  const [activeTab, setActiveTab] = useState('resources');

  const renderResourceCard = ({ item }) => (
    <TouchableOpacity style={styles.resourceCard}>
      <ThemedView style={styles.resourceHeader}>
        <MaterialIcons name={item.icon} size={24} color="#3a6bff" />
        <ThemedText type="defaultSemiBold" style={styles.resourceTitle}>{item.title}</ThemedText>
      </ThemedView>
      <ThemedText style={styles.resourceDescription}>{item.description}</ThemedText>
      <Image source={item.image} style={styles.cardImage} />
      <ThemedView style={styles.cardFooter}>
        <ThemedText style={styles.footerText}>Tap to explore</ThemedText>
        <MaterialIcons name="arrow-forward" size={18} color="#8595ab" />
      </ThemedView>
    </TouchableOpacity>
  );

  const renderEventCard = ({ item }) => (
    <TouchableOpacity style={styles.eventCard}>
      <Image source={item.image} style={styles.eventImage} />
      <ThemedView style={styles.eventContent}>
        <ThemedText type="defaultSemiBold" style={styles.eventTitle}>{item.title}</ThemedText>
        <ThemedView style={styles.eventDetails}>
          <ThemedView style={styles.eventDetailItem}>
            <MaterialIcons name="calendar-today" size={16} color="#5b6c8a" />
            <ThemedText style={styles.eventDetailText}>{item.date}</ThemedText>
          </ThemedView>
          <ThemedView style={styles.eventDetailItem}>
            <MaterialIcons name="location-on" size={16} color="#5b6c8a" />
            <ThemedText style={styles.eventDetailText}>{item.location}</ThemedText>
          </ThemedView>
        </ThemedView>
      </ThemedView>
    </TouchableOpacity>
  );

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.header}>
        <ThemedText type="title">Explore</ThemedText>
        <TouchableOpacity style={styles.searchButton}>
          <MaterialIcons name="search" size={24} color="#5b6c8a" />
        </TouchableOpacity>
      </ThemedView>

      <ThemedView style={styles.tabsContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'resources' && styles.activeTab]}
          onPress={() => setActiveTab('resources')}
        >
          <ThemedText
            style={[styles.tabText, activeTab === 'resources' && styles.activeTabText]}
          >
            Resources
          </ThemedText>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'events' && styles.activeTab]}
          onPress={() => setActiveTab('events')}
        >
          <ThemedText
            style={[styles.tabText, activeTab === 'events' && styles.activeTabText]}
          >
            Events
          </ThemedText>
        </TouchableOpacity>
      </ThemedView>

      {activeTab === 'resources' ? (
        <FlatList
          data={resources}
          renderItem={renderResourceCard}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}
        />
      ) : (
        <FlatList
          data={events}
          renderItem={renderEventCard}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}
        />
      )}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  searchButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f0f2f5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e6e9ef',
  },
  tab: {
    paddingVertical: 15,
    marginRight: 30,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  activeTab: {
    borderBottomColor: '#3a6bff',
  },
  tabText: {
    fontSize: 16,
    color: '#8595ab',
  },
  activeTabText: {
    color: '#3a6bff',
    fontWeight: '600',
  },
  listContainer: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  resourceCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
    overflow: 'hidden',
  },
  resourceHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  resourceTitle: {
    fontSize: 16,
    marginLeft: 10,
    color: '#1a2a3a',
  },
  resourceDescription: {
    paddingHorizontal: 16,
    paddingBottom: 12,
    fontSize: 14,
    color: '#5b6c8a',
  },
  cardImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#e6e9ef',
  },
  footerText: {
    fontSize: 14,
    color: '#8595ab',
  },
  eventCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
    overflow: 'hidden',
  },
  eventImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  eventContent: {
    padding: 16,
  },
  eventTitle: {
    fontSize: 16,
    marginBottom: 10,
    color: '#1a2a3a',
  },
  eventDetails: {
    flexDirection: 'column',
    gap: 8,
  },
  eventDetailItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  eventDetailText: {
    fontSize: 14,
    color: '#5b6c8a',
    marginLeft: 8,
  },
});
