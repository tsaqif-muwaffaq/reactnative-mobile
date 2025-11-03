import React, { useState } from 'react';
import { View, Text, ImageBackground, Switch, StatusBar, StyleSheet } from 'react-native';

const HeroSection = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Definisi style yang adaptif terhadap Dark Mode
  const dynamicStyles = StyleSheet.create({
    overlay: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      // Menggunakan background yang lebih 'berkelas' dan sedikit transparan
      backgroundColor: darkMode ? 'rgba(0, 0, 0, 0.7)' : 'rgba(255, 255, 255, 0.4)',
      paddingHorizontal: 20, // Padding horizontal untuk tampilan yang lebih rapi
    },
    title: {
      fontSize: 40, // Ukuran font lebih besar
      fontWeight: 'bold', // Lebih tebal
      color: darkMode ? '#FFFFFF' : '#000000', // Warna teks adaptif
      marginBottom: 30, // Jarak bawah lebih besar
      textAlign: 'center',
      textShadowColor: 'rgba(0, 0, 0, 0.5)', // Efek shadow ringan
      textShadowOffset: { width: 1, height: 1 },
      textShadowRadius: 3,
    },
    switchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between', // Memisahkan label dan switch
      backgroundColor: darkMode ? 'rgba(40, 40, 40, 0.8)' : 'rgba(255, 255, 255, 0.9)',
      borderRadius: 10,
      padding: 15,
      width: '80%', // Mengambil sebagian lebar layar
      minWidth: 250,
      shadowColor: "#000", // Shadow untuk efek kedalaman
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    switchLabel: {
      color: darkMode ? '#E0E0E0' : '#333333', // Warna label yang adaptif
      fontSize: 18,
      fontWeight: '600',
    }
  });


  return (
    <>
      <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} />
      <ImageBackground
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        style={styles.background}
        imageStyle={{ opacity: 0.4 }} // Mengurangi opacity gambar latar belakang
      >
        <View style={dynamicStyles.overlay}>
          <Text style={dynamicStyles.title}>Selamat Datang!</Text>
          <View style={dynamicStyles.switchContainer}>
            <Text style={dynamicStyles.switchLabel}>Mode Gelap (Dark Mode)</Text>
            <Switch
              value={darkMode}
              onValueChange={setDarkMode}
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={darkMode ? "#f5dd4b" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
            />
          </View>
        </View>
      </ImageBackground>
    </>
  );
};

// Style statis (tidak berubah)
const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
});

export default HeroSection;