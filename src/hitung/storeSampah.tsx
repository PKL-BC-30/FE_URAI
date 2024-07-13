// src/hitung/storeSampah.ts
import { createStore } from 'solid-js/store';

const [wasteTotals, setWasteTotals] = createStore({
  organic: 0,
  inorganic: 0,
  ewaste: 0,
});

const updateOrganicTotal = (newTotal: number) => {
  setWasteTotals('organic', newTotal);
};

const updateInorganicTotal = (newTotal: number) => {
  setWasteTotals('inorganic', newTotal);
};

const updateEwasteTotal = (newTotal: number) => {
  setWasteTotals('ewaste', newTotal);
};

export { wasteTotals, updateOrganicTotal, updateInorganicTotal, updateEwasteTotal };
