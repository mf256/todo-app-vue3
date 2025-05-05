<script setup>
import ItemRow from './ItemRow.vue';
defineProps({
  items: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <table class="table table-striped">
    <tbody>
      <ItemRow
        v-for="(item, i) in items"
        :key="i"
        :index="i"
        :item="item"
        @toggle-item="$emit('toggle-item', i)"
        @delete-item="$emit('delete-item', i)"
      />
    </tbody>
  </table>
</template>
