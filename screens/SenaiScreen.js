import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
// pesquisei e to usando o "ScrollView" para permitir a rolagem do texto

function SenaiScreen() {
    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
                {/* Seção 1: O SENAI */}
                <Text style={styles.title}>O SENAI: Transformando Vidas através da Educação Profissional</Text>
                <Text style={styles.paragraph}>
                    O **Serviço Nacional de Aprendizagem Industrial (SENAI)** é um dos maiores e mais respeitados complexos de educação profissional e inovação tecnológica do mundo. Desde 1942, o SENAI tem sido um pilar fundamental no desenvolvimento da indústria brasileira, oferecendo cursos que preparam milhões de profissionais para os desafios do mercado de trabalho.
                </Text>
                <Text style={styles.paragraph}>
                    Com uma infraestrutura de ponta, laboratórios modernos e um corpo docente altamente qualificado, o SENAI se dedica a capacitar jovens e adultos, promover a inovação e o desenvolvimento tecnológico, e contribuir para o progresso social e econômico do Brasil.
                </Text>
                {/* imagem do senai aqui */}
                <Image
                    source={require('../assets/senai.png')} // Troque pelo caminho da sua imagem
                    style={styles.image}
                />

                {/* Seção 2: SENAI Campinas */}
                <Text style={styles.title}>SENAI Campinas: Tradição e Excelência na Região</Text>
                <Text style={styles.paragraph}>
                    O **SENAI de Campinas** segue essa tradição de excelência e inovação, sendo uma referência em educação profissional na região. Com uma história consolidada, a unidade de Campinas oferece uma ampla gama de cursos técnicos e de qualificação profissional, atendendo às necessidades das indústrias locais e regionais.
                </Text>
                <Text style={styles.paragraph}>
                    Aqui, os alunos encontram um ambiente de aprendizado dinâmico, com laboratórios equipados, parcerias com empresas e projetos práticos que estimulam a criatividade e o desenvolvimento de soluções inovadoras. O SENAI Campinas está comprometido em formar profissionais qualificados e preparados para os desafios do mundo do trabalho.
                </Text>
                {/* imagem do senai zerbini aqui */}
                <Image
                    source={require('../assets/senaizerbini.png')}
                    style={styles.image}
                />
            </View>
        </ScrollView>
    );
}

// CSS
const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        backgroundColor: '#F8D0D0', 
    },

    container: {
        padding: 20,
        alignItems: 'center',
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 10,
        color: '#333', 
    },

    paragraph: {
        fontSize: 16,
        textAlign: 'justify',
        marginBottom: 10,
        lineHeight: 24, // espaço entre linhas
        color: '#555', 
    },

    image: {
        width: '100%', // largura total
        height: 200, // altura fixa
        borderRadius: 8, // bordas arredondadas
        marginVertical: 20, // margem acima e abaixo da imagem
        resizeMode: 'cover', // redimensiona a imagem para cobrir a área
    },

});

export default SenaiScreen;