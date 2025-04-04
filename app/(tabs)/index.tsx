import React, { useState } from 'react';
import { Image, StyleSheet, TouchableOpacity, View, Platform, Dimensions } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { MaterialIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');
const PROFILE_IMAGE_SIZE = 100;

export default function ProfileScreen() {
  const [activeTab, setActiveTab] = useState(0);

  // Tab content components
  const AboutTab = () => (
    <ThemedView style={styles.tabContent}>
      <ThemedView style={styles.infoSection}>
        <ThemedText type="subtitle">Personal Information</ThemedText>
        <ThemedView style={styles.infoRow}>
          <ThemedText style={styles.infoLabel}>Full Name</ThemedText>
          <ThemedText style={styles.infoValue}>Alex Johnson</ThemedText>
        </ThemedView>
        <ThemedView style={styles.infoRow}>
          <ThemedText style={styles.infoLabel}>Student ID</ThemedText>
          <ThemedText style={styles.infoValue}>STU20240123</ThemedText>
        </ThemedView>
        <ThemedView style={styles.infoRow}>
          <ThemedText style={styles.infoLabel}>Email</ThemedText>
          <ThemedText style={styles.infoValue}>alex.johnson@university.edu</ThemedText>
        </ThemedView>
        <ThemedView style={styles.infoRow}>
          <ThemedText style={styles.infoLabel}>Phone</ThemedText>
          <ThemedText style={styles.infoValue}>+1 (555) 123-4567</ThemedText>
        </ThemedView>
      </ThemedView>

      <ThemedView style={styles.infoSection}>
        <ThemedText type="subtitle">Academic Information</ThemedText>
        <ThemedView style={styles.infoRow}>
          <ThemedText style={styles.infoLabel}>Major</ThemedText>
          <ThemedText style={styles.infoValue}>Computer Science</ThemedText>
        </ThemedView>
        <ThemedView style={styles.infoRow}>
          <ThemedText style={styles.infoLabel}>Year</ThemedText>
          <ThemedText style={styles.infoValue}>Junior (3rd Year)</ThemedText>
        </ThemedView>
        <ThemedView style={styles.infoRow}>
          <ThemedText style={styles.infoLabel}>GPA</ThemedText>
          <ThemedText style={styles.infoValue}>3.85/4.0</ThemedText>
        </ThemedView>
        <ThemedView style={styles.infoRow}>
          <ThemedText style={styles.infoLabel}>Credits Completed</ThemedText>
          <ThemedText style={styles.infoValue}>78/120</ThemedText>
        </ThemedView>
      </ThemedView>

      <ThemedView style={styles.infoSection}>
        <ThemedText type="subtitle">Bio</ThemedText>
        <ThemedText>
          Computer Science student with a passion for mobile development and artificial intelligence. 
          Active member of the university's coding club and AI research team. Looking for 
          internship opportunities for summer 2025.
        </ThemedText>
      </ThemedView>
    </ThemedView>
  );

  const CoursesTab = () => (
    <ThemedView style={styles.tabContent}>
      <ThemedView style={styles.coursesSection}>
        <ThemedText type="subtitle">Current Courses</ThemedText>
        
        <ThemedView style={styles.courseCard}>
          <ThemedView style={styles.courseHeader}>
            <ThemedText style={styles.courseCode}>CS401</ThemedText>
            <ThemedView style={[styles.statusBadge, styles.statusActive]}>
              <ThemedText style={styles.statusText}>In Progress</ThemedText>
            </ThemedView>
          </ThemedView>
          <ThemedText type="defaultSemiBold" style={styles.courseName}>Advanced Algorithms</ThemedText>
          <ThemedView style={styles.courseDetails}>
            <ThemedView style={styles.courseDetailItem}>
              <MaterialIcons name="person" size={16} color="#5b6c8a" />
              <ThemedText style={styles.courseDetailText}>Prof. Williams</ThemedText>
            </ThemedView>
            <ThemedView style={styles.courseDetailItem}>
              <MaterialIcons name="schedule" size={16} color="#5b6c8a" />
              <ThemedText style={styles.courseDetailText}>MWF 10:00-11:30</ThemedText>
            </ThemedView>
          </ThemedView>
          <ThemedView style={styles.progressBar}>
            <ThemedView style={[styles.progress, { width: '75%' }]} />
          </ThemedView>
          <ThemedText style={styles.progressText}>75% Complete</ThemedText>
        </ThemedView>

        <ThemedView style={styles.courseCard}>
          <ThemedView style={styles.courseHeader}>
            <ThemedText style={styles.courseCode}>CS456</ThemedText>
            <ThemedView style={[styles.statusBadge, styles.statusActive]}>
              <ThemedText style={styles.statusText}>In Progress</ThemedText>
            </ThemedView>
          </ThemedView>
          <ThemedText type="defaultSemiBold" style={styles.courseName}>Mobile Application Development</ThemedText>
          <ThemedView style={styles.courseDetails}>
            <ThemedView style={styles.courseDetailItem}>
              <MaterialIcons name="person" size={16} color="#5b6c8a" />
              <ThemedText style={styles.courseDetailText}>Prof. Garcia</ThemedText>
            </ThemedView>
            <ThemedView style={styles.courseDetailItem}>
              <MaterialIcons name="schedule" size={16} color="#5b6c8a" />
              <ThemedText style={styles.courseDetailText}>TR 1:00-2:30</ThemedText>
            </ThemedView>
          </ThemedView>
          <ThemedView style={styles.progressBar}>
            <ThemedView style={[styles.progress, { width: '60%' }]} />
          </ThemedView>
          <ThemedText style={styles.progressText}>60% Complete</ThemedText>
        </ThemedView>

        <ThemedText type="subtitle" style={{ marginTop: 20 }}>Completed Courses</ThemedText>
        <ThemedView style={styles.courseCard}>
          <ThemedView style={styles.courseHeader}>
            <ThemedText style={styles.courseCode}>CS301</ThemedText>
            <ThemedView style={[styles.statusBadge, styles.statusCompleted]}>
              <ThemedText style={styles.statusText}>Completed</ThemedText>
            </ThemedView>
          </ThemedView>
          <ThemedText type="defaultSemiBold" style={styles.courseName}>Database Systems</ThemedText>
          <ThemedView style={styles.courseDetails}>
            <ThemedView style={styles.courseDetailItem}>
              <MaterialIcons name="person" size={16} color="#5b6c8a" />
              <ThemedText style={styles.courseDetailText}>Prof. Johnson</ThemedText>
            </ThemedView>
            <ThemedView style={styles.courseDetailItem}>
              <MaterialIcons name="star" size={16} color="#5b6c8a" />
              <ThemedText style={styles.courseDetailText}>Grade: A</ThemedText>
            </ThemedView>
          </ThemedView>
        </ThemedView>
      </ThemedView>
    </ThemedView>
  );

  // Header buttons
  const HeaderButtons = () => (
    <>
      <TouchableOpacity style={styles.backButton}>
        <MaterialIcons name="arrow-back" size={24} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingsButton}>
        <MaterialIcons name="settings" size={24} color="#fff" />
      </TouchableOpacity>
    </>
  );
  
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#5B9BD5', dark: '#2C4D6E' }}
      headerImage={
        <Image
          source={require('@/assets/images/profile-cover.jpg')}
          style={styles.coverImage}
        />
      }
      headerContent={<HeaderButtons />}
      headerHeight={200}
      headerOverlayColor="rgba(0, 0, 0, 0.3)"
    >
      {/* Profile Section */}
      <ThemedView style={styles.profileSection}>
        <ThemedView style={styles.profileImageContainer}>
          <Image
            source={require('@/assets/images/profile-avatar.jpg')}
            style={styles.profileImage}
          />
        </ThemedView>

        <ThemedView style={styles.profileInfo}>
          <ThemedText type="title">Alex Johnson</ThemedText>
          <ThemedText>Computer Science</ThemedText>
          <ThemedText style={styles.university}>University of Technology</ThemedText>
          
          <ThemedView style={styles.statsContainer}>
            <ThemedView style={styles.statItem}>
              <ThemedText type="defaultSemiBold" style={styles.statValue}>3.85</ThemedText>
              <ThemedText style={styles.statLabel}>GPA</ThemedText>
            </ThemedView>
            <ThemedView style={styles.divider} />
            <ThemedView style={styles.statItem}>
              <ThemedText type="defaultSemiBold" style={styles.statValue}>78</ThemedText>
              <ThemedText style={styles.statLabel}>Credits</ThemedText>
            </ThemedView>
            <ThemedView style={styles.divider} />
            <ThemedView style={styles.statItem}>
              <ThemedText type="defaultSemiBold" style={styles.statValue}>5</ThemedText>
              <ThemedText style={styles.statLabel}>Courses</ThemedText>
            </ThemedView>
          </ThemedView>
        </ThemedView>
      </ThemedView>

      {/* Tabs Section */}
      <ThemedView style={styles.tabsContainer}>
        <ThemedView style={styles.tabsHeader}>
          <TouchableOpacity
            style={[styles.tab, activeTab === 0 && styles.activeTab]}
            onPress={() => setActiveTab(0)}
          >
            <ThemedText style={[styles.tabText, activeTab === 0 && styles.activeTabText]}>
              About
            </ThemedText>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, activeTab === 1 && styles.activeTab]}
            onPress={() => setActiveTab(1)}
          >
            <ThemedText style={[styles.tabText, activeTab === 1 && styles.activeTabText]}>
              Courses
            </ThemedText>
          </TouchableOpacity>
        </ThemedView>

        {/* Tab Content */}
        {activeTab === 0 ? <AboutTab /> : <CoursesTab />}
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  coverImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  backButton: {
    position: 'absolute',
    left: 15,
    top: 15,
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
    top: 15,
    zIndex: 10,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
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
    fontWeight: '500',
    flex: 2,
    textAlign: 'right',
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
