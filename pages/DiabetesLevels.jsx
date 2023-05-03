import { useState } from "react";

export default function DiabetesLevels() {
  const [levels, setLevels] = useState([]);

  const handleLoadLevels = () => {
    // Replace this with your own logic to load levels from a database
    const dummyLevels = [
      { date: "2022-05-01", level: 120 },
      { date: "2022-04-30", level: 130 },
      { date: "2022-04-29", level: 140 },
      { date: "2022-04-28", level: 150 },
    ];
    setLevels(dummyLevels);
  };

  return (
    <div>
      <h1>Diabetes Level History</h1>
      <button onClick={handleLoadLevels}>Load Levels</button>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Level</th>
          </tr>
        </thead>
        <tbody>
          {levels.map((level, index) => (
            <tr key={index}>
              <td>{level.date}</td>
              <td>{level.level}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <style jsx>{`
        h1 {
          text-align: center;
        }
        button {
          margin-bottom: 1rem;
        }
        table {
          border-collapse: collapse;
          margin: 0 auto;
        }
        th,
        td {
          padding: 0.5rem;
          text-align: center;
          border: 1px solid #ddd;
        }
        th {
          background-color: #f2f2f2;
        }
      `}</style>
    </div>
  );
}
``
