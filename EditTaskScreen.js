// EditTaskScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const EditTaskScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { task, handleEditTask } = route.params;

  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);



  const handleSaveChanges = () => {
    const editedTask = { ...task, title, description };
    handleEditTask(editedTask); // Aplicar los cambios de edición usando la función handleEditTask
    navigation.navigate('MainScreen', { editedTask }); // Navegar de regreso a MainScreen después de guardar los cambios
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Editar Tarea:</Text>
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
      <TouchableOpacity style={styles.saveButton} onPress={handleSaveChanges}>
        <Text style={styles.saveButtonText}>Guardar Cambios</Text>
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

export default EditTaskScreen;
