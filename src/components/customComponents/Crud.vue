<template>
    <div>
      <div v-if="teachers.length === 0" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
        <span class="block sm:inline">{{ t('customComponent.component_crud.no_items') }}</span>
      </div>
      <div class="my-6">
        <button class="btn-primary" @click="openAddTeacherForm">{{ t('customComponent.component_crud.buttons.add') }}</button>
       </div>
       <form v-if="showAddTeacherForm" class="border flex" @submit.prevent="saveTeacher">
          <input 
            ref="inputFieldAdd"
            v-model="newTeacherName"
            :placeholder="t('customComponent.component_crud.placeholder')"
            class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required>

          <button type="submit" class="mx-3 btn-primary">{{ t('customComponent.component_crud.buttons.save') }}</button>
        </form>
        <ul class="list-none">
        <li v-for="(teacher, key) in teachers" :key="key">
          <div class="flex p-6 bg-white">
              <div>
                  <p>Key: {{ key }}</p>
                  <p>Id: {{ teacher.id }}</p>
                  <p v-if="!teacher.editing">Name: {{ teacher.name }}</p>
                  <input 
                  :ref="`inputFieldEdit-${teacher.id}`"
                  v-model="teacher.updatedName"
                  v-if="teacher.editing"
                  class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
              </div>
              <div>
                  <button class="mx-3 btn-primary" @click="editTeacher(teacher)">{{ t('customComponent.component_crud.buttons.modify') }}</button>
                  <button v-if="teacher.editing" class="mx-3 btn-primary" @click="saveEditedTeacher(teacher)">{{ t('customComponent.component_crud.buttons.save') }}</button>
                  <button class="mx-3 btn-remove" @click="deleteTeacher(teacher.id)">{{ t('customComponent.component_crud.buttons.remove') }}</button>
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
  import { useI18n } from 'vue-i18n';
  const teachers = ref([]);
  const database = getDatabase(firestore);
  const { t } = useI18n();


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
  