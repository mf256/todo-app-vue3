<script setup>
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useItemsStore } from '../stores/items';
import { MOCK_ITEMS } from '@/mockData';
import AddItem from './AddItem.vue';
import ItemsList from './ItemsList.vue';

const store = useItemsStore();
const { items } = storeToRefs(store);
const { initItems, addItem, deleteItem, toggleItem } = store;

onMounted(() => {
  initItems(MOCK_ITEMS);
});
</script>

<template>
  <div class="container">
    <div class="row justify-content-md-center">
      <div class="col col-lg-4">
        <AddItem @add-item="addItem" />
        <ItemsList :items="items" @delete-item="deleteItem" @toggle-item="toggleItem" />
      </div>
    </div>
  </div>
</template>
