import { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, setDoc, getDocs, doc } from "firebase/firestore";

const StepForm = () => {
  const [step, setStep] = useState("");
  const [dueDate, setDueDate] = useState("");

  // Firebase Firestore에 데이터 저장
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!step || !dueDate) {
      alert("Step과 Due Date를 입력하세요!");
      return;
    }

    const docRef = doc(db, "global", "globalVariables");

    await setDoc(docRef, {
      step: Number(step),
      dueDate: dueDate,
    });

    setStep("");
    setDueDate("");
    alert("Data saved successfully!");
  };

  return (
    <div>
      <h2>Step Management</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Step (Number): </label>
          <input
            className="text-black"
            type="number"
            value={step}
            onChange={(e) => setStep(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Due Date : </label>
          <input
            className="text-black"
            type="datetime-local"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="text-black">
          Save
        </button>
      </form>
    </div>
  );
};

export default StepForm;
