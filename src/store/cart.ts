import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] as any[],
  }),
  getters: {
    cartCount: (state) => state.items.length,
  },
  actions: {
    addToCart(product: any) {
      this.items.push(product);
    },
    clearCart() {
      this.items = [];
    },
  },
});
