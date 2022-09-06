import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   options: [ 'Model S', 'Model Y', 'Model 3', 'Model X', 'Solar Panels', 'Solar Roofs', 
'Existing', 'Used Inventory', 'Trade-in', 'Test Drive', 'Insurance', 'Powerwall', 
'Commercial Energy', 'Utilities', 'Charging', 'Find Us', 'Support', 'Shops', 'Account' ]
}

const optionSlice = createSlice({
   name: 'option',
   initialState,
   reducers: {}
})

export const selectedOptions = state => state.option.options

export default optionSlice.reducer