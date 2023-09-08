<template>
    <div>
       <form v-if="showAddTeacherForm" class="border flex" @submit.prevent="saveTeacher">
          <input v-model="newTeacherName" placeholder="Add teacher name" class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
          <button type="submit" class="mx-3 btn-primary">Save</button>
        </form>
        <ul class="list-none">
        <li v-for="(teacher, key) in teachers" :key="key">
          <div class="flex p-6 bg-white">
              <div>
                  <p>KEY: {{ key }}</p>
                  <p>ID: {{ teacher.id }}</p>
                  <p>NAME: {{ teacher.name }}</p>
              </div>
              <div>
                  <button class="mx-3 btn-primary" @click="editTeacher(teacher)">Modifica</button>
                  <button class="mx-3 btn-remove" @click="deleteTeacher(teacher.id)">Rimuovi</button>
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
