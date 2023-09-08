<template>
    <div>
      <h1>Teacher List</h1>
      <button  class="btn-primary" @click="addTeacher">Aggiungi Insegnante</button>

      <ul>
      <li v-for="(teacher, key) in teachers" :key="key">
        <div class="flex">
            <div>
                <p>ID: {{ key }}</p>
                <p>{{ teacher.name }}</p>
            </div>
            <div>
                <button class="mx-3 btn-primary" @click="editTeacher(teacher)">Modifica</button>
                <button class="mx-3 btn-remove" @click="deleteTeacher(key)">Rimuovi</button>
            </div>
        </div>
      </li>
    </ul>

    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { getDatabase, ref as dbRef, get, remove } from 'firebase/database';
  import { firestore } from '../../firebase'; // Importa "firestore" da firebase.js
  
  
  const teachers = ref([]);
  const database = getDatabase(firestore);

  onMounted(async () => {
  try {
    const teachersRef = dbRef(database, 'Teachers');
    const snapshot = await get(teachersRef);

    if (snapshot.exists()) {
      teachers.value = Object.keys(snapshot.val()).map((id) => ({
        id,
        ...snapshot.val()[id],
      }));
    }
  } catch (error) {
    console.error('Errore nel recupero dei dati:', error);
  }
});

const deleteTeacher = async (teacherKey) => {
  try {
    const teacherId = 'id' + teacherKey;
    const teachersRef = dbRef(database, 'Teachers/' + teacherId);
    await remove(teachersRef);
    
    const index = teachers.value.findIndex((teacher) => teacher.id === teacherId);
    if (index !== -1) {
      teachers.value.splice(index, 1);
    }
  } catch (error) {
    console.error('Errore nella rimozione dell\'insegnante:', error);
  }
};
const editTeacher = (teacher) => {
};
const addTeacher = () => {
};
  </script>
