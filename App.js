import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './MainScreen';
import AddTaskScreen from './AddTaskScreen';
import EditTaskScreen from './EditTaskScreen'; // Importar el componente EditTaskScreen


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MainScreen" component={MainScreen} options={{ title: 'Agenda de Tareas' }} />
        <Stack.Screen name="AddTaskScreen" component={AddTaskScreen} options={{ title: 'Agregar Tarea' }} />
        <Stack.Screen name="EditTaskScreen" component={EditTaskScreen} options={{ title: 'Editar Tarea' }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
