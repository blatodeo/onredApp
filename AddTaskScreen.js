import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const AddTaskScreen = ({}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const navigation = useNavigation();
  const route = useRoute();
  const handleAddTask = route.params?.handleAddTask;

  const handleSaveTask = () => {
    // Create a new task object
    const newTask = { title, description };
    handleAddTask(newTask); // Agregar la nueva tarea usando la función handleAddTask
    navigation.navigate('MainScreen', { newTask }); // Navigate back to MainScreen and pass the newTask as a parameter
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Agregar Tarea:</Text>
      <TextInput
        style={styles.input}
        placeholder="Título"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Observacion"
        value={description}
        onChangeText={setDescription}
      />
      <TouchableOpacity style={styles.saveButton} onPress={handleSaveTask}>
        <Text style={styles.saveButtonText}>Guardar</Text>
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
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    padding: 8,
    marginBottom: 16,
  },
  saveButton: {
    backgroundColor: 'blue',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  saveButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default AddTaskScreen;
