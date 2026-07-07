import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    // ஆரம்பத்தில் லோக்கல் ஸ்டோரேஜில் இருந்து எடுக்கும்போது பிழையைத் தவிர்க்க try-catch சேர்க்கலாம்
    items: (() => {
      try {
        const saved = localStorage.getItem('cartItems');
        return saved ? JSON.parse(saved) : [];
      } catch {
        return [];
      }
    })()
  },
  reducers: {
    // பேக்-எண்டிலிருந்து வரும் டேட்டாவை அப்படியே செட் செய்யும்
    setCart: (state, action) => {
    // 1. பேக்-எண்ட் முழு ஆப்ஜெக்ட்டையும் அனுப்பினால்:
    // 2. அதை கன்சோல் லாக் செய்து என்ன வருகிறது என்று பாருங்கள்:
    console.log("Payload received in setCart:", action.payload);

    // பாதுகாப்பான முறை:
    // payload-ல் 'items' இருந்தால் அதை எடுக்கவும், இல்லையென்றால் payload-ஏ ஒரு array-ஆக இருந்தால் அதை எடுக்கவும்.
    state.items = action.payload?.items || (Array.isArray(action.payload) ? action.payload : []);
    
    localStorage.setItem('cartItems', JSON.stringify(state.items));
},
    
    // நீக்க:
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item._id !== action.payload);
      localStorage.setItem('cartItems', JSON.stringify(state.items));
    }
  },
});

export const { setCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;