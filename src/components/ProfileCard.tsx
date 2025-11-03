import React from 'react';
import { View, Text, Image, StyleSheet, StatusBar } from 'react-native';

const ProfilCard = () => (
  <>
    {/* Menggunakan light-content untuk kontras yang baik jika latar belakang card gelap */}
    <StatusBar barStyle="dark-content" backgroundColor="#F7F9FC" />
    
    {/* Outer container hanya sebagai wrapper untuk memposisikan card di tengah */}
    <View style={styles.outerWrapper}> 
        <View style={styles.cardContainer}>
            <Image 
                source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} 
                style={styles.avatar} 
            />
            <Text style={styles.nama}>John Doe</Text>
            <Text style={styles.jabatan}>Senior React Native Developer</Text>
            <View style={styles.divider} />
            <Text style={styles.bio} numberOfLines={3}>
                Developer React Native enthusiast dengan pengalaman di pengembangan aplikasi mobile lintas platform. Bersemangat dalam membangun antarmuka pengguna yang efisien dan indah.
            </Text>
        </View>
    </View>
  </>
);

const styles = StyleSheet.create({
    outerWrapper: {
        flex: 1,
        backgroundColor: '#F7F9FC', // Latar belakang abu-abu terang
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    cardContainer: {
        width: '90%', // Batasi lebar agar terlihat seperti kartu
        maxWidth: 350,
        backgroundColor: '#FFFFFF', // Latar belakang kartu putih bersih
        borderRadius: 20, // Sudut yang lebih lembut
        padding: 30,
        alignItems: 'center',
        // Shadow modern
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.1,
        shadowRadius: 15,
        elevation: 10,
    },
    avatar: { 
        width: 120, 
        height: 120, 
        borderRadius: 60, // Setengah dari width/height
        marginBottom: 20,
        borderWidth: 4, // Tambahkan border tebal
        borderColor: '#007AFF', // Warna border biru profesional
    },
    nama: { 
        fontSize: 26, 
        fontWeight: '700', // Lebih tebal
        color: '#1A237E', // Warna biru tua yang elegan
        marginBottom: 5,
    },
    jabatan: {
        fontSize: 16,
        color: '#607D8B', // Abu-abu kebiruan
        marginBottom: 15,
        fontWeight: '500',
    },
    divider: {
        width: '50%',
        height: 1,
        backgroundColor: '#E0E0E0',
        marginVertical: 15,
    },
    bio: { 
        fontSize: 15, 
        textAlign: 'center',
        color: '#333333',
        lineHeight: 22, // Tambah line height agar lebih mudah dibaca
    },
});

export default ProfilCard;