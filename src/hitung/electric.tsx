// src/pages/electric.tsx

import { Component, createSignal } from 'solid-js';
import styles from './electric.module.css';
import Sidebar from '../pages/insideNav';
import { updateEwasteTotal } from '../hitung/storeSampah';

const Electric: Component = () => {
  const [weight, setWeight] = createSignal<number>(0);
  const [unit, setUnit] = createSignal<string>('gram');
  const [result, setResult] = createSignal<number>(0);

  const convertWeight = () => {
    let convertedWeight;
    switch (unit()) {
      case 'gram':
        convertedWeight = weight();
        break;
      case 'kilogram':
        convertedWeight = weight() * 1000;
        break;
      case 'ton':
        convertedWeight = weight() * 1_000_000;
        break;
      default:
        convertedWeight = weight();
    }
    setResult(convertedWeight);
    updateEwasteTotal(convertedWeight);
  };

  return (
    <div class={styles.pageWrapper}>
      <Sidebar />
      <div class={styles.container1}>
        <h1>Hitung Berat Sampah Electronic</h1>
        <div>
          <label for="weight-input">Masukkan Berat Sampah Electronic:</label>
          <input
            id="weight-input"
            type="number"
            value={weight()}
            onInput={(e) => setWeight(parseFloat(e.currentTarget.value))}
          />
        </div>
        <div>
          <label for="unit-select">Pilih Satuan:</label>
          <select id="unit-select" value={unit()} onChange={(e) => setUnit(e.currentTarget.value)}>
            <option value="gram">Gram</option>
            <option value="kilogram">Kilogram</option>
            <option value="ton">Ton</option>
          </select>
          <div class={styles.buttonhitung}>
            <button onClick={convertWeight}>Hitung</button>
          </div>
        </div>
        <div class={styles.result}>
          <h2>Hasil:</h2>
          <p>{result()} Gram</p>
        </div>
      </div>
    </div>
  );
};

export default Electric;
