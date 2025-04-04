import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Try it</ThemedText>
        <ThemedText>
          Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
          Press{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
              web: 'F12'
            })}
          </ThemedText>{' '}
          to open developer tools.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: Explore</ThemedText>
        <ThemedText>
          Tap the Explore tab to learn more about what's included in this starter app.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
        <ThemedText>
          When you're ready, run{' '}
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});


import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Animated,
  Dimensions,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';

const HEADER_HEIGHT = 200;
const PROFILE_IMAGE_SIZE = 100;
const { width } = Dimensions.get('window');

const StudentProfileScreen = () => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const insets = useSafeAreaInsets();
  const [activeTab, setActiveTab] = useState(0);

  // Animation values
  const headerHeight = scrollY.interpolate({
    inputRange: [0, HEADER_HEIGHT],
    outputRange: [HEADER_HEIGHT, HEADER_HEIGHT / 2],
    extrapolate: 'clamp',
  });

  const headerOpacity = scrollY.interpolate({
    inputRange: [0, HEADER_HEIGHT / 2],
    outputRange: [1, 0.8],
    extrapolate: 'clamp',
  });

  const profileImageScale = scrollY.interpolate({
    inputRange: [0, HEADER_HEIGHT],
    outputRange: [1, 0.8],
    extrapolate: 'clamp',
  });

  const profileImageTranslateY = scrollY.interpolate({
    inputRange: [0, HEADER_HEIGHT],
    outputRange: [0, -30],
    extrapolate: 'clamp',
  });

  const profileTextOpacity = scrollY.interpolate({
    inputRange: [0, HEADER_HEIGHT / 2, HEADER_HEIGHT],
    outputRange: [0, 0.5, 1],
    extrapolate: 'clamp',
  });

  // Tab content components
  const AboutTab = () => (
    <View style={styles.tabContent}>
      <View style={styles.infoSection}>
        <Text style={styles.sectionTitle}>Personal Information</Text>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Full Name</Text>
          <Text style={styles.infoValue}>Alex Johnson</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Student ID</Text>
          <Text style={styles.infoValue}>STU20240123</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Email</Text>
          <Text style={styles.infoValue}>alex.johnson@university.edu</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Phone</Text>
          <Text style={styles.infoValue}>+1 (555) 123-4567</Text>
        </View>
      </View>

      <View style={styles.infoSection}>
        <Text style={styles.sectionTitle}>Academic Information</Text>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Major</Text>
          <Text style={styles.infoValue}>Computer Science</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Year</Text>
          <Text style={styles.infoValue}>Junior (3rd Year)</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>GPA</Text>
          <Text style={styles.infoValue}>3.85/4.0</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Credits Completed</Text>
          <Text style={styles.infoValue}>78/120</Text>
        </View>
      </View>

      <View style={styles.infoSection}>
        <Text style={styles.sectionTitle}>Bio</Text>
        <Text style={styles.bioText}>
          Computer Science student with a passion for mobile development and artificial intelligence. 
          Active member of the university's coding club and AI research team. Looking for 
          internship opportunities for summer 2025.
        </Text>
      </View>
    </View>
  );

  const CoursesTab = () => (
    <View style={styles.tabContent}>
      <View style={styles.coursesSection}>
        <Text style={styles.sectionTitle}>Current Courses</Text>
        
        <View style={styles.courseCard}>
          <View style={styles.courseHeader}>
            <Text style={styles.courseCode}>CS401</Text>
            <View style={[styles.statusBadge, styles.statusActive]}>
              <Text style={styles.statusText}>In Progress</Text>
            </View>
          </View>
          <Text style={styles.courseName}>Advanced Algorithms</Text>
          <View style={styles.courseDetails}>
            <View style={styles.courseDetailItem}>
              <MaterialIcons name="person" size={16} color="#5b6c8a" />
              <Text style={styles.courseDetailText}>Prof. Williams</Text>
            </View>
            <View style={styles.courseDetailItem}>
              <MaterialIcons name="schedule" size={16} color="#5b6c8a" />
              <Text style={styles.courseDetailText}>MWF 10:00-11:30</Text>
            </View>
          </View>
          <View style={styles.progressBar}>
            <View style={[styles.progress, { width: '75%' }]} />
          </View>
          <Text style={styles.progressText}>75% Complete</Text>
        </View>

        <View style={styles.courseCard}>
          <View style={styles.courseHeader}>
            <Text style={styles.courseCode}>CS456</Text>
            <View style={[styles.statusBadge, styles.statusActive]}>
              <Text style={styles.statusText}>In Progress</Text>
            </View>
          </View>
          <Text style={styles.courseName}>Mobile Application Development</Text>
          <View style={styles.courseDetails}>
            <View style={styles.courseDetailItem}>
              <MaterialIcons name="person" size={16} color="#5b6c8a" />
              <Text style={styles.courseDetailText}>Prof. Garcia</Text>
            </View>
            <View style={styles.courseDetailItem}>
              <MaterialIcons name="schedule" size={16} color="#5b6c8a" />
              <Text style={styles.courseDetailText}>TR 1:00-2:30</Text>
            </View>
          </View>
          <View style={styles.progressBar}>
            <View style={[styles.progress, { width: '60%' }]} />
          </View>
          <Text style={styles.progressText}>60% Complete</Text>
        </View>

        <Text style={[styles.sectionTitle, { marginTop: 20 }]}>Completed Courses</Text>
        <View style={styles.courseCard}>
          <View style={styles.courseHeader}>
            <Text style={styles.courseCode}>CS301</Text>
            <View style={[styles.statusBadge, styles.statusCompleted]}>
              <Text style={styles.statusText}>Completed</Text>
            </View>
          </View>
          <Text style={styles.courseName}>Database Systems</Text>
          <View style={styles.courseDetails}>
            <View style={styles.courseDetailItem}>
              <MaterialIcons name="person" size={16} color="#5b6c8a" />
              <Text style={styles.courseDetailText}>Prof. Johnson</Text>
            </View>
            <View style={styles.courseDetailItem}>
              <MaterialIcons name="star" size={16} color="#5b6c8a" />
              <Text style={styles.courseDetailText}>Grade: A</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <StatusBar style="light" />
      
      {/* Animated Header with Cover Image */}
      <Animated.View
        style={[
          styles.header,
          {
            height: headerHeight,
            opacity: headerOpacity,
          },
        ]}
      >
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2000' }}
          style={styles.coverImage}
          resizeMode="cover"
        />
        <View style={styles.headerOverlay} />
      </Animated.View>

      {/* Back button */}
      <TouchableOpacity style={[styles.backButton, { top: insets.top + 10 }]}>
        <MaterialIcons name="arrow-back" size={24} color="#fff" />
      </TouchableOpacity>

      {/* Settings button */}
      <TouchableOpacity style={[styles.settingsButton, { top: insets.top + 10 }]}>
        <MaterialIcons name="settings" size={24} color="#fff" />
      </TouchableOpacity>

      {/* Animated Profile Info at top when scrolled */}
      <Animated.View
        style={[
          styles.floatingProfileInfo,
          {
            opacity: profileTextOpacity,
            top: insets.top + 10,
          },
        ]}
      >
        <Text style={styles.floatingName}>Alex Johnson</Text>
      </Animated.View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
      >
        {/* Profile Section */}
        <View style={styles.profileSection}>
          <Animated.View
            style={[
              styles.profileImageContainer,
              {
                transform: [
                  { scale: profileImageScale },
                  { translateY: profileImageTranslateY },
                ],
              },
            ]}
          >
            <Image
              source={{ uri: 'https://randomuser.me/api/portraits/men/32.jpg' }}
              style={styles.profileImage}
            />
          </Animated.View>

          <View style={styles.profileInfo}>
            <Text style={styles.name}>Alex Johnson</Text>
            <Text style={styles.major}>Computer Science</Text>
            <Text style={styles.university}>University of Technology</Text>
            
            <View style={styles.statsContainer}>
              <View style={styles.statItem}>
                <Text style={styles.statValue}>3.85</Text>
                <Text style={styles.statLabel}>GPA</Text>
              </View>
              <View style={styles.divider} />
              <View style={styles.statItem}>
                <Text style={styles.statValue}>78</Text>
                <Text style={styles.statLabel}>Credits</Text>
              </View>
              <View style={styles.divider} />
              <View style={styles.statItem}>
                <Text style={styles.statValue}>5</Text>
                <Text style={styles.statLabel}>Courses</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Tabs Section */}
        <View style={styles.tabsContainer}>
          <View style={styles.tabsHeader}>
            <TouchableOpacity
              style={[styles.tab, activeTab === 0 && styles.activeTab]}
              onPress={() => setActiveTab(0)}
            >
              <Text style={[styles.tabText, activeTab === 0 && styles.activeTabText]}>
                About
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.tab, activeTab === 1 && styles.activeTab]}
              onPress={() => setActiveTab(1)}
            >
              <Text style={[styles.tabText, activeTab === 1 && styles.activeTabText]}>
                Courses
              </Text>
            </TouchableOpacity>
          </View>

          {/* Tab Content */}
          {activeTab === 0 ? <AboutTab /> : <CoursesTab />}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fb',
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    overflow: 'hidden',
    zIndex: 1,
  },
  coverImage: {
    width: '100%',
    height: '100%',
  },
  headerOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  backButton: {
    position: 'absolute',
    left: 15,
    zIndex: 10,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  settingsButton: {
    position: 'absolute',
    right: 15,
    zIndex: 10,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  floatingProfileInfo: {
    position: 'absolute',
    alignSelf: 'center',
    zIndex: 5,
  },
  floatingName: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  scrollContent: {
    paddingTop: HEADER_HEIGHT - 30,
    paddingBottom: 30,
  },
  profileSection: {
    marginTop: -PROFILE_IMAGE_SIZE / 2,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  profileImageContainer: {
    alignSelf: 'center',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  profileImage: {
    width: PROFILE_IMAGE_SIZE,
    height: PROFILE_IMAGE_SIZE,
    borderRadius: PROFILE_IMAGE_SIZE / 2,
    borderWidth: 3,
    borderColor: '#fff',
  },
  profileInfo: {
    alignItems: 'center',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1a2a3a',
    marginBottom: 4,
  },
  major: {
    fontSize: 16,
    color: '#5b6c8a',
    marginBottom: 2,
  },
  university: {
    fontSize: 14,
    color: '#8595ab',
    marginBottom: 15,
  },
  statsContainer: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 15,
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
    width: '100%',
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statValue: {
    fontSize: 18,
    fontWeight: '700',
    color: '#3a6bff',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#8595ab',
  },
  divider: {
    width: 1,
    height: '80%',
    backgroundColor: '#e6e9ef',
    alignSelf: 'center',
  },
  tabsContainer: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingTop: 5,
    marginTop: 20,
    minHeight: 500, // Ensure enough space to scroll
  },
  tabsHeader: {
    flexDirection: 'row',
    paddingHorizontal: 20,
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
    fontWeight: '500',
    color: '#8595ab',
  },
  activeTabText: {
    color: '#3a6bff',
    fontWeight: '600',
  },
  tabContent: {
    padding: 20,
  },
  infoSection: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1a2a3a',
    marginBottom: 15,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e6e9ef',
  },
  infoLabel: {
    fontSize: 14,
    color: '#5b6c8a',
    flex: 1,
  },
  infoValue: {
    fontSize: 14,
    color: '#1a2a3a',
    fontWeight: '500',
    flex: 2,
    textAlign: 'right',
  },
  bioText: {
    fontSize: 14,
    lineHeight: 22,
    color: '#5b6c8a',
  },
  coursesSection: {
    marginBottom: 25,
  },
  courseCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  courseHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  courseCode: {
    fontSize: 14,
    fontWeight: '600',
    color: '#3a6bff',
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 12,
  },
  statusActive: {
    backgroundColor: 'rgba(58, 107, 255, 0.1)',
  },
  statusCompleted: {
    backgroundColor: 'rgba(75, 181, 67, 0.1)',
  },
  statusText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#3a6bff',
  },
  courseName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1a2a3a',
    marginBottom: 10,
  },
  courseDetails: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  courseDetailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  courseDetailText: {
    fontSize: 13,
    color: '#5b6c8a',
    marginLeft: 4,
  },
  progressBar: {
    height: 6,
    backgroundColor: '#e6e9ef',
    borderRadius: 3,
    marginBottom: 6,
  },
  progress: {
    height: '100%',
    backgroundColor: '#4bb543',
    borderRadius: 3,
  },
  progressText: {
    fontSize: 12,
    color: '#5b6c8a',
  },
});

export default StudentProfileScreen;
