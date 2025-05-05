import { defineStore } from 'pinia';

export const useItemsStore = defineStore('items', {
  state: () => ({
    items: [],
  }),
  actions: {
    initItems(items) {
      this.items = [...items];
    },
    addItem(item) {
      this.items.push(item);
    },
    deleteItem(index) {
      this.items = this.items.filter((_, i) => i !== index);
    },
    toggleItem(index) {
      this.items[index].isCompleted = !this.items[index].isCompleted;
    },
  },
});
