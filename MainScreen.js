import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importar el hook useNavigation

const MainScreen = () => {
const navigation = useNavigation(); // Obtener el objeto navigation
const [tasks, setTasks] = useState([]);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleToggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const handleEditTask = (editedTask) => {
    const updatedTasks = [...tasks];
    updatedTasks[editedTask.index] = editedTask;
    setTasks(updatedTasks);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Tareas:</Text>
      {tasks.map((task, index) => (
        <View key={index} style={styles.task}>
          <TouchableOpacity onPress={() => handleToggleTask(index)}>
            <View style={[styles.checkbox, task.completed && styles.checkboxChecked]} />
          </TouchableOpacity>
          <View style={{ flex: 1 }}>
            <Text style={[styles.taskTitle, task.completed && styles.taskTitleCompleted]}>
                {task.title}
            </Text>
              <Text style={styles.taskDescription}>{task.description}</Text>
            </View>
            <TouchableOpacity
              style={styles.editButton}
              onPress={() =>  {
                navigation.navigate('EditTaskScreen',  { task, handleEditTask }); // Navegar a EditTaskScreen y pasar la función handleEditTask); // Navegar a la pantalla "EditTask"
                      }}
            >
              <Text style={styles.editButtonText}>Editar</Text>
            </TouchableOpacity>
          </View>
      ))}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => {
          navigation.navigate('AddTaskScreen',  { handleAddTask }); // Navegar a AddTaskScreen y pasar la función handleAddTask); // Navegar a la pantalla "AddTask"
                }}
      >
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f0f0',
  },

  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },

  task: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
  },

  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 12,
    marginRight: 12,
  },

  checkboxChecked: {
    backgroundColor: 'black',
  },

  taskTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  taskTitleCompleted: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },

  taskDescription: {
    fontSize: 14,
    color: 'gray',
  },

  addButton: {
    position: 'absolute',
    bottom: 24,
    right: 24,
    width: 56,
    height: 56,
    backgroundColor: 'blue',
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },

  addButtonText: {
    fontSize: 32,
    color: 'white',
  },
});

export default MainScreen;
