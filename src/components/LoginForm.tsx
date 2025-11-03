import React, { useState } from 'react';
import { View, Text, TextInput, Switch, Modal, TouchableOpacity, StyleSheet, Alert } from 'react-native';
// Note: Komponen Button telah diubah menjadi TouchableOpacity untuk kustomisasi styling yang lebih baik.

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRemember, setIsRemember] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const handleLogin = () => {
    if (email && password) {
      // Logika simulasi login sukses
      setModalVisible(true);
    } else {
      Alert.alert('Error', 'Mohon lengkapi Email dan Password Anda.');
    }
  };

  return (
    <View style={styles.outerContainer}>
        {/* Tambahkan Header untuk kesan profesional */}
        <Text style={styles.headerTitle}>Selamat Datang Kembali</Text>
        <Text style={styles.headerSubtitle}>Silakan masuk ke akun Anda</Text>

        <View style={styles.cardContainer}>
            <TextInput
                style={styles.input}
                placeholder="Alamat Email"
                placeholderTextColor="#A0A0A0"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder="Kata Sandi"
                placeholderTextColor="#A0A0A0"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                maxLength={20}
            />
            
            <View style={styles.switchContainer}>
                <Text style={styles.switchText}>Ingat Saya</Text>
                <Switch
                    value={isRemember}
                    onValueChange={setIsRemember}
                    trackColor={{ false: '#E0E0E0', true: '#007AFF' }}
                    thumbColor={isRemember ? '#fff' : '#f4f3f4'}
                />
            </View>

            {/* Tombol Login menggunakan TouchableOpacity yang sudah di-styling */}
            <TouchableOpacity 
                style={styles.loginButton} 
                onPress={handleLogin}
                activeOpacity={0.8}
            >
                <Text style={styles.buttonText}>Masuk</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text style={styles.forgotPasswordText}>Lupa Kata Sandi?</Text>
            </TouchableOpacity>

        </View>

        <Modal visible={modalVisible} transparent animationType="fade">
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>🎉 Login Berhasil!</Text>
              <TouchableOpacity 
                    style={styles.modalCloseButton} 
                    onPress={() => setModalVisible(false)}
                    activeOpacity={0.8}
                >
                    <Text style={styles.modalCloseButtonText}>Tutup</Text>
                </TouchableOpacity>
            </View>
          </View>
        </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
    // Container Luar
    outerContainer: {
        flex: 1,
        padding: 30,
        paddingTop: 80, // Tambah padding atas untuk header
        backgroundColor: '#F7F9FC', // Latar belakang yang sangat terang/putih kebiruan
    },
    // Header
    headerTitle: {
        fontSize: 28,
        fontWeight: '700',
        color: '#1A237E', // Biru tua untuk judul
        marginBottom: 8,
    },
    headerSubtitle: {
        fontSize: 16,
        color: '#607D8B', // Abu-abu kebiruan untuk subtitle
        marginBottom: 40,
    },
    // Card Utama Form
    cardContainer: {
        backgroundColor: '#FFFFFF',
        padding: 25,
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 8 }, // Shadow lebih dalam
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 10,
    },
    // Input Field
    input: {
        height: 55,
        borderWidth: 1,
        borderColor: '#E0E0E0', // Border tipis dan terang
        paddingHorizontal: 18,
        marginBottom: 20,
        borderRadius: 10,
        backgroundColor: '#FAFAFA', // Background input sangat terang
        fontSize: 16,
        color: '#333',
        fontWeight: '500',
    },
    // Remember Me
    switchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 30,
        paddingHorizontal: 5,
    },
    switchText: {
        fontSize: 15,
        color: '#333',
        fontWeight: '500',
    },
    // Tombol Login Kustom (menggantikan <Button>)
    loginButton: {
        backgroundColor: '#007AFF', // Warna Biru iOS/Profesional
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 15,
        shadowColor: '#007AFF',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 8,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '700',
        textTransform: 'uppercase', // Teks kapital untuk tombol
    },
    // Lupa Password
    forgotPasswordText: {
        fontSize: 14,
        color: '#007AFF',
        textAlign: 'center',
        marginTop: 10,
        fontWeight: '600',
    },
    // Modal Styling
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.6)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: '#fff',
        padding: 35,
        borderRadius: 20, // Sudut yang lebih lembut
        width: '85%',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.25,
        shadowRadius: 15,
        elevation: 20,
    },
    modalText: {
        fontSize: 20,
        fontWeight: '700',
        marginBottom: 25,
        color: '#1A237E',
        textAlign: 'center',
    },
    modalCloseButton: {
        backgroundColor: '#4CAF50', // Tombol 'Success' hijau
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 10,
        marginTop: 10,
    },
    modalCloseButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    }
});

export default LoginForm;