<template>
    <div>
      <div v-if="teachers.length === 0" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
        <span class="block sm:inline">No teachers? If you want a new teacher add one.</span>
        <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
          <svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
        </span>
      </div>
      <div class="my-6">
        <button class="btn-primary" @click="openAddTeacherForm">Add Teacher</button>
       </div>
       <form v-if="showAddTeacherForm" class="border flex" @submit.prevent="saveTeacher">
          <input 
            ref="inputFieldAdd"
            v-model="newTeacherName"
            placeholder="Add teacher name"
            class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required>

          <button type="submit" class="mx-3 btn-primary">Save</button>
        </form>
        <ul class="list-none">
        <li v-for="(teacher, key) in teachers" :key="key">
          <div class="flex p-6 bg-white">
              <div>
                  <p>KEY: {{ key }}</p>
                  <p>ID: {{ teacher.id }}</p>
                  <p v-if="!teacher.editing">NAME: {{ teacher.name }}</p>
                  <input 
                  :ref="`inputFieldEdit-${teacher.id}`"
                  v-model="teacher.updatedName"
                  v-if="teacher.editing"
                  class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
              </div>
              <div>
                  <button class="mx-3 btn-primary" @click="editTeacher(teacher)">Modifica</button>
                  <button v-if="teacher.editing" class="mx-3 btn-primary" @click="saveEditedTeacher(teacher)">Salva</button>
                  <button class="mx-3 btn-remove" @click="deleteTeacher(teacher.id)">Rimuovi</button>
              </div>
          </div>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, nextTick } from 'vue';
  import { getDatabase, ref as dbRef, get, remove, push, update } from 'firebase/database';
  import { firestore } from '../../firebase'; // Importa "firestore" da firebase.js
  
  const teachers = ref([]);
  const database = getDatabase(firestore);


  const inputFieldAdd = ref(null); 
  const inputFieldEdit = ref(null);

  const openAddTeacherForm = () => {
    showAddTeacherForm.value = true;
    focusInputFieldAfterNextTick(inputFieldAdd);
  };


  const inputFieldEditRefs = {};

  const editTeacher = (teacher) => {
    console.log("modifica")  
    if (teacher.editing) {
      teacher.editing = false;
    } else {
      teacher.editing = true;
      teacher.updatedName = teacher.name;
      
      nextTick(() => {
      const inputRef = inputFieldEditRefs[teacher.id];
      if (inputRef && inputRef.focus) {
        inputRef.focus();
      }

      });
    }
  };

  const focusInputFieldAfterNextTick = (elementToFocus) => {
    nextTick(() => {
      if (elementToFocus && elementToFocus.value) {
        console.log("autofocus")
        elementToFocus.value.focus();
      }
    });
  };

  onMounted(async () => {
  try {
    const teachersRef = dbRef(database, 'Teachers');
    const snapshot = await get(teachersRef);

    if (snapshot.exists()) {
      teachers.value = Object.keys(snapshot.val()).map((id) => {
        const teacherData = {
          id,
          ...snapshot.val()[id],
        };
        inputFieldEditRefs[id] = ref(null);
        return teacherData;
      });
    }
  } catch (error) {
    console.error('Errore nel recupero dei dati:', error);
  }
});

const deleteTeacher = async (teacherId) => {
  try {
    const teachersRef = dbRef(database, 'Teachers/' + teacherId);
    await remove(teachersRef);
    const updatedTeachers = teachers.value.filter((teacher) => teacher.id !== teacherId);
    teachers.value = updatedTeachers;
  } catch (error) {
    console.error('Error to remove teacher:', error);
  }
};

const saveEditedTeacher = async (teacher) => {
  try {
    const teacherId = teacher.id;
    const updatedName = teacher.updatedName;
    const teacherRef = dbRef(database, 'Teachers/' + teacherId);
    await update(teacherRef, {
      name: updatedName,
    });

    const updatedTeacher = teachers.value.find((t) => t.id === teacherId);
    if (updatedTeacher) {
      updatedTeacher.name = updatedName;
    }

    teacher.editing = false;
  } catch (error) {
    console.error('error to update teacher :', error);
  }
};


const showAddTeacherForm = ref(false);
const newTeacherName = ref('');

const saveTeacher = async () => {
  try {
    const newTeacherData = {
      name: newTeacherName.value,
    };
    const teachersRef = dbRef(database, 'Teachers');
    await push(teachersRef, newTeacherData);
    const newTeacherKey = `id${teachers.value.length + 1}`;
    teachers.value.push({
      id: newTeacherKey,
      ...newTeacherData,
    });
    showAddTeacherForm.value = false;
    newTeacherName.value = '';
    

  } catch (error) {
    console.error('Error to add Teacher:', error);
  }
};

  </script>
  