import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import PrincipalScreen from './screens/PrincipalScreen';
import AlunoScreen from './screens/AlunoScreen';
import SenaiScreen from './screens/SenaiScreen';
import CursoScreen from './screens/CursoScreen';

const Drawer = createDrawerNavigator();

function Navigation() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Principal">
                <Drawer.Screen name="Principal" component={PrincipalScreen} />
                <Drawer.Screen name="Aluno" component={AlunoScreen} />
                <Drawer.Screen name="Senai" component={SenaiScreen} />
                <Drawer.Screen name="Curso" component={CursoScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;