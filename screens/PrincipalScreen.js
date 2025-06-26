import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

export default function PrincipalScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Mural de anúncios</Text>
      <FlatList
        data={newsData}
        renderItem={({ item }) => <NewsItem item={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

//mural de anúncios
const newsData = [
  {
    id: '1',
    title: 'Mundo Senai',
    description:
    'Sua Histótia Começa Aqui - Dias 5 e 6 de Junho - PARTICIPE!!!',
  },

  {
    id: '2',
    title: 'Plataforma Inovação para Indústria',
    description:
    'R$: 460 Milhões em recursos para Inovação e Tecnologia',
  },

  {
    id: '3',
    title: 'Senai em Destaque',
    description:
    'SENAI-SP se destaca em competições de robótica, com equipes classificadas para o mundial da FIRST',
  },

  {
    id: '4',
    title: 'Economida Circular na Indústria',
    description:
    'Economia Circular é o tema do desafios de ideias de Suzano',
  },

  {
    id: '5',
    title: 'Senai Solucionando',
    description:
    'SENAI-SP apresenta soluções educacionais, tecnológicas e estratégicas para apoiar o aumento da competitividade da indústria em encontro do CONIC ',
  },

];

const NewsItem = ({ item }) => {
  return ( 
    <View style={styles.newsItem}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );
};

// CSS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F2E7",
    paddingTop: 40, //espaço para o status bar
    paddingHorizontal: 20,
  },

  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },

  newsItem: {
    backgroundColor: "white",
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },

  description: {
    fontSize: 16,
    color: "#555",
  },

});