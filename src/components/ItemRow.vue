<script setup>
defineProps({
  index: {
    type: Number,
    required: true,
  },
  item: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <tr>
    <td>{{ index + 1 }}</td>
    <td>
      <input
        class="form-check-input"
        type="checkbox"
        :id="`checkboxitem-${index}`"
        @click="$emit('toggle-item', index)"
      />
    </td>
    <td>
      <label :htmlFor="`checkboxitem-${index}`" :class="[item?.isCompleted ? 'done' : '']">
        {{ item.name }}
      </label>
    </td>
    <td class="text-end">
      <button
        class="btn btn-danger button-delete"
        type="button"
        @click="$emit('delete-item', index)"
      >
        X
      </button>
    </td>
  </tr>
</template>

<style scope>
.done {
  text-decoration: line-through;
}

.button-delete {
  font-weight: bold;
  padding: 3px 6px;
}
</style>
