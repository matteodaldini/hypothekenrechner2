
import { useState } from "react";

export default function Hypothekenrechner() {
  const [saronZins, setSaronZins] = useState(0.70);
  const [festZinsen, setFestZinsen] = useState({ "3": 0.90, "5": 1.10, "10": 1.60 });
  const [aufteilung, setAufteilung] = useState("50/50");
  const [laufzeit, setLaufzeit] = useState("5");

  const hypothek = 700000;

  const aufteilungen = {
    "30/70": [0.3, 0.7],
    "50/50": [0.5, 0.5],
    "70/30": [0.7, 0.3],
  };

  const saronAnteil = hypothek * aufteilungen[aufteilung][0];
  const festAnteil = hypothek * aufteilungen[aufteilung][1];
  const festZins = festZinsen[laufzeit];

  const jahreszins = (saronAnteil * (saronZins / 100)) + (festAnteil * (festZins / 100));
  const monatlich = jahreszins / 12;

  return (
    <div style={{ background: '#fff', padding: '20px', borderRadius: '10px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Hypothekenrechner</h1>

      <label>SARON-Zinssatz (%):</label>
      <input type="number" step="0.01" value={saronZins} onChange={(e) => setSaronZins(parseFloat(e.target.value))} />

      <h3>Festhypotheken-Zinssätze (%):</h3>
      {["3", "5", "10"].map(jahr => (
        <div key={jahr}>
          <label>{jahr} Jahre: </label>
          <input
            type="number"
            step="0.01"
            value={festZinsen[jahr]}
            onChange={(e) => setFestZinsen({ ...festZinsen, [jahr]: parseFloat(e.target.value) })}
          />
        </div>
      ))}

      <label>Aufteilung:</label>
      <select value={aufteilung} onChange={(e) => setAufteilung(e.target.value)}>
        {Object.keys(aufteilungen).map(key => (
          <option key={key} value={key}>{key}</option>
        ))}
      </select>

      <label>Laufzeit fester Teil (Jahre):</label>
      <select value={laufzeit} onChange={(e) => setLaufzeit(e.target.value)}>
        {["3", "5", "10"].map(jahr => (
          <option key={jahr} value={jahr}>{jahr}</option>
        ))}
      </select>

      <div style={{ marginTop: '20px', background: '#f0f0f0', padding: '10px', borderRadius: '8px' }}>
        <p><strong>Effektiver Jahreszins:</strong> {jahreszins.toFixed(2)} CHF</p>
        <p><strong>Monatliche Zinskosten:</strong> {monatlich.toFixed(2)} CHF</p>
      </div>
    </div>
  );
}
