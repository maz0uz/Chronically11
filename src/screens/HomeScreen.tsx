import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HomeScreen = () => {
  const [selectedTab, setSelectedTab] = useState<'My News' | 'Trending'>('Trending');  // State to track selected tab

  // Function to switch between tabs
  const handleTabPress = (tab: 'My News' | 'Trending') => {
    setSelectedTab(tab);
  };

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        {/* Tab for "My News" */}
        <Text
          style={[styles.tabText, selectedTab === 'My News' && styles.selectedTab]}
          onPress={() => handleTabPress('My News')}
        >
          My News
        </Text>

        {/* Tab for "Trending" */}
        <Text
          style={[styles.tabText, selectedTab === 'Trending' && styles.selectedTab]}
          onPress={() => handleTabPress('Trending')}
        >
          Trending
        </Text>
      </View>

      {/* Line under the selected tab */}
      <View style={styles.underlineContainer}>
        <View
          style={[
            styles.underline,
            selectedTab === 'My News'
              ? styles.underlineMyNews
              : styles.underlineTrending,
          ]}
        />
      </View>

      {/* Conditionally render the content for the selected tab */}
      {selectedTab === 'Trending' ? (
        <View style={styles.screen}>
          <Text>Trending Content</Text>
        </View>
      ) : (
        <View style={styles.screen}>
          <Text>My News Content</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FFF7DD',
    paddingTop: 5,
  },
  tabContainer: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 0,  // Reduced margin to bring the line closer to the tabs
  },
  tabText: {
    fontSize: 18,
    marginHorizontal: 20,
    paddingVertical: 10,
    color: '#808080',  // Default text color
  },
  selectedTab: {
    color: '#000000',  // Color for the selected tab
    fontWeight: 'bold',
  },
  underlineContainer: {
    width: '100%', // Full width of the container
    height: 2, // Height of the underline
    marginTop: 0,  // No margin above the underline
    position: 'relative',  // Ensure underline is positioned relative to the container
  },
  underline: {
    height: 2,
    backgroundColor: '#000000', // Color for the underline
    position: 'absolute', // Position absolutely within the container
    bottom: 0,  // Align it at the bottom of the container
  },
  underlineMyNews: {
    width: 110, // Set fixed width for the "My News" tab underline
    left: 95, // Set position of underline under "My News"
  },
  underlineTrending: {
    width: 110, // Set fixed width for the "Trending" tab underline
    left: 210, // Set position of underline under "Trending" (adjust based on tab position)
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
