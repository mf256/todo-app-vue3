<script setup>
import { ref } from 'vue';
const name = ref('');
const emit = defineEmits(['add-item']);

const onSubmit = () => {
  if (!name.value) {
    return;
  }

  const newItem = {
    name: name.value,
    isCompleted: false,
  };

  emit('add-item', newItem);
  name.value = '';
};
</script>

<template>
  <form @submit.prevent="onSubmit" class="add-form">
    <div class="input-group mb-3">
      <input v-model="name" type="text" class="form-control" placeholder="Enter new element" />
      <input class="btn btn-outline-secondary btn-primary button-add" type="submit" value="Add" />
    </div>
  </form>
</template>

<style scope>
.button-add {
  color: white;
}
</style>
