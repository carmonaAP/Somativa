import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'; 
// pesquisei e to usando o "ScrollView" para permitir a rolagem do texto

function CursoScreen() {
    return (
        <ScrollView style={styles.scrollViewContainer}> 
            <View style={styles.container}>
                <Image
                    source={require('../assets/cursods.png')} 
                    style={styles.image}
                />
                <Text style={styles.header}>Curso Técnico em Desenvolvimento de Sistemas</Text> {/* Título mais descritivo */}

                <Text style={styles.paragraph}>
                    O curso técnico de Desenvolvimento de Sistemas tem como objetivo formar profissionais capacitados para atuar no planejamento, criação e manutenção de softwares, sites e sistemas de informação. Ele é voltado para quem tem interesse em tecnologia e deseja aprender a construir soluções que atendem a diversas necessidades no mundo digital.
                </Text>

                <Text style={styles.paragraph}>
                    Durante o curso, os alunos aprendem desde os fundamentos da programação até técnicas avançadas de desenvolvimento. O conteúdo abrange linguagens de programação como Java, Python, PHP, JavaScript, além de trabalhar com bancos de dados, redes de computadores, sistemas operacionais e metodologias ágeis de desenvolvimento.
                </Text>

                <Text style={styles.paragraph}>
                    O estudante também se familiariza com ferramentas de versionamento de código, como o Git, e desenvolve habilidades para a criação de aplicações web e móveis. Além disso, o curso prepara o profissional para realizar testes de software, realizar a manutenção de sistemas existentes e atuar com integração de APIs e outras tecnologias emergentes.
                </Text>

                <Text style={styles.paragraph}>
                    Em resumo, o curso de Técnico em Desenvolvimento de Sistemas oferece uma formação prática e técnica, que capacita o aluno a ingressar no mercado de trabalho, desenvolvendo soluções de tecnologia que atendem tanto a empresas quanto aos usuários finais.
                </Text>
            </View>
        </ScrollView>
    );
}

// CSS
const styles = StyleSheet.create({
    scrollViewContainer: {
        flex: 1,
        backgroundColor: '#A1B5D8', 
    },

    container: {
        flex: 1,
        padding: 20, // espaçamento interno
        alignItems: 'center', // centraliza na horizontalmente
    },

    header: {
        fontSize: 26, 
        fontWeight: 'bold', // título em negrito
        marginBottom: 20, // espaço embaixo do título
        textAlign: 'center',
        color: '#333',
    },

    paragraph: {
        fontSize: 16, 
        lineHeight: 24, // espaço entre linhas 
        marginBottom: 15, // espaço entre os parágrafos
        textAlign: 'justify', // organiza o texto
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

export default CursoScreen;