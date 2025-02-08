import { urlFor } from "@/lib/sanityClient";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
  name: React.ReactNode | Iterable<React.ReactNode>;
  id: string;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartState {
  items: Product[];
  totalQuantity: number;
}

const initialState: CartState = {
  items: [],
  totalQuantity: 0, // NEW: Track total items in cart
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const existingItem = state.items.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        // state.items.push({ ...action.payload, quantity: 1 });
        state.items.push({ 
          id: action.payload.id,
          name: action.payload.name, // Use correct property
          title: action.payload.title, // Optional
          price: action.payload.price,
          image: urlFor(action.payload.image).toString(),// Ensure image is passed correctly
          quantity: 1
        });
      }
      state.totalQuantity += 1; // Update total quantity
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const itemToRemove = state.items.find((item) => item.id === action.payload);
      if (itemToRemove) {
        state.totalQuantity -= itemToRemove.quantity; // Deduct from total quantity
        state.items = state.items.filter((item) => item.id !== action.payload);
      }
    },
    decreaseQuantity: (state, action: PayloadAction<string>) => {
      const existingItem = state.items.find((item) => item.id === action.payload);
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
        state.totalQuantity -= 1; // Reduce total quantity
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0; // Reset total quantity
    },
  },
});

export const { addToCart, removeFromCart, decreaseQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
