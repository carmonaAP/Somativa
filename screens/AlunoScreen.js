import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function AlunoScreen() {
  const alunoData = {
    id: 'aluno1',
    nome: 'Richard Gabriel Amaro Carmona',
    matricula: '123456',
    curso: 'Desenvolvimento de Sistemas',
    turma: '2DS2',
    email: 'rgacarmona@gmail.com',
    // para imagens locais, usar require() diretamente
    fotoUrl: require('../assets/IMG-20250606-WA0005.png')
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Perfil do Aluno(a):</Text>
      <View style={styles.alunoInfoContainer}>
      {/* espaço para foto abaixo */}
        <Image
          source={alunoData.fotoUrl}
          style={styles.alunoFoto}
        />
        <Text style={styles.infoLabel}>Nome:</Text>
        <Text style={styles.infoText}>{alunoData.nome}</Text>
        <Text style={styles.infoLabel}>Matrícula:</Text>
        <Text style={styles.infoText}>{alunoData.matricula}</Text>
        <Text style={styles.infoLabel}>Curso:</Text>
        <Text style={styles.infoText}>{alunoData.curso}</Text>
        <Text style={styles.infoLabel}>Turma:</Text>
        <Text style={styles.infoText}>{alunoData.turma}</Text>
        <Text style={styles.infoLabel}>Email:</Text>
        <Text style={styles.infoText}>{alunoData.email}</Text>
      </View>
    </View>
  );
}

// CSS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D1D3D4",
    paddingTop: 40,
    paddingHorizontal: 20,
  },

  header: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#333",
  },

  alunoInfoContainer: {
    backgroundColor: "white",
    padding: 20,
    marginBottom: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
    alignItems: 'center', // centraliza o conteúdo horizontalmente, incluindo a foto
  },

  alunoFoto: {
    width: 120, // largura da imagem
    height: 120, // altura da imagem
    borderRadius: 60, // para deixar a imagem circular (metade da largura/altura)
    marginBottom: 15, // espaço abaixo da foto
    borderWidth: 2,
    borderColor: '#ddd',
  },

  infoLabel: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#555",
    marginTop: 8,
    alignSelf: 'flex-start', // alinha o texto do rótulo à esquerda
  },

  infoText: {
    fontSize: 18,
    marginBottom: 5,
    color: "#333",
    alignSelf: 'flex-start', // alinha o texto da informação à esquerda
  },

});
