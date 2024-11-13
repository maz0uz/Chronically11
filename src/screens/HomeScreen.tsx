import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HomeScreen = () => {
  const [selectedTab, setSelectedTab] = useState<'My News' | 'Trending'>('Trending');  // State to track selected tab
  const [tabWidths, setTabWidths] = useState<{ 'My News': number; 'Trending': number }>({ 'My News': 0, 'Trending': 0 }); // Track the widths of the tabs

  // Function to switch between tabs
  const handleTabPress = (tab: 'My News' | 'Trending') => {
    setSelectedTab(tab);
  };

  // Function to update tab width
  const handleTabLayout = (event: any, tab: 'My News' | 'Trending') => {
    const { width } = event.nativeEvent.layout;
    setTabWidths((prev) => ({ ...prev, [tab]: width }));
  };

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        {/* Tab for "My News" */}
        <Text
          style={[styles.tabText, selectedTab === 'My News' && styles.selectedTab]}
          onPress={() => handleTabPress('My News')}
          onLayout={(event) => handleTabLayout(event, 'My News')}
        >
          My News
        </Text>

        {/* Tab for "Trending" */}
        <Text
          style={[styles.tabText, selectedTab === 'Trending' && styles.selectedTab]}
          onPress={() => handleTabPress('Trending')}
          onLayout={(event) => handleTabLayout(event, 'Trending')}
        >
          Trending
        </Text>
      </View>

      {/* Line under the selected tab */}
      <View style={styles.underlineContainer}>
        <View
          style={[
            styles.underline,
            {
              width: tabWidths[selectedTab], // Set the line's width based on selected tab
              marginLeft: selectedTab === 'Trending' ? tabWidths['My News'] : 0, // Offset based on the selected tab
            },
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
    backgroundColor: '#fff',
    paddingTop: 5,
  },
  tabContainer: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 3,  // Reduced margin to bring the line closer to the tabs
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
    flexDirection: 'row',  // Make sure underline aligns with the tabs
    width: '100%', // Full width of the container
    height: 2, // Height of the underline
    marginTop: 0,  // No margin above the underline
    justifyContent: 'flex-start', // Align underline based on selected tab
  },
  underline: {
    height: 2,
    backgroundColor: '#000000', // Color for the underline
    marginTop: 0, // Make sure it's directly below the tabs
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
