'use client';

import { useState } from 'react';
import { METHODS, Method, calculateOneRepMax } from '@/utils/calculations';

function OneRepMaxCalculator() {
  const [oneRepMax, setOneRepMax] = useState<number | null>(null);
  const [formState, setFormState] = useState({
    values: {
      method: '',
      weight: 0,
      reps: 0,
    },
    errors: {
      method: '',
      weight: '',
      reps: '',
    },
  });

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const method = formData.get('method') as Method | '0';
    const weight = Number(formData.get('weight'));
    const reps = Number(formData.get('reps'));

    const formErrors = {
      method: '',
      weight: '',
      reps: '',
    };

    if (weight <= 0) {
      formErrors.weight = 'Weight must be greater than 0';
    }

    if (reps <= 0) {
      formErrors.reps = 'Reps must be greater than 0';
    }

    if (!method || method === '0') {
      formErrors.method = 'Please select a method';
    }

    setFormState({
      ...formState,
      errors: formErrors,
    });

    if (method === '0' || !weight || !reps) {
      return;
    }

    const oneRepMax = calculateOneRepMax(weight, reps, method);
    setOneRepMax(oneRepMax);
  }

  return oneRepMax !== null ? (
    <div className="my-8">
      <p className="text-lg mb-4">
        Your estimated 1RM is: <strong>{oneRepMax} lbs</strong>
      </p>
      <p>
        <button className="button" onClick={() => setOneRepMax(null)}>
          Reset
        </button>
      </p>
    </div>
  ) : (
    <form onSubmit={handleSubmit}>
      <div className="my-4">
        <label>
          Method
          <span className="block">
            <select name="method">
              {Object.entries(METHODS).map(([key, method]) => (
                <option value={key} key={key}>
                  {method.label}
                </option>
              ))}
            </select>
            {formState.errors.method && <span className="block">{formState.errors.method}</span>}
          </span>
        </label>
      </div>
      <div className="my-4">
        <label>
          Weight
          <span className="block">
            <input
              onBlur={(e) => {
                const value = Number(e.target.value);
                if (value <= 0) {
                  setFormState({
                    ...formState,
                    errors: {
                      ...formState.errors,
                      weight: 'Weight must be greater than 0',
                    },
                  });
                }
              }}
              type="number"
              name="weight"
              placeholder="0"
              min={0}
            />
            {formState.errors.weight && <span className="block">{formState.errors.weight}</span>}
          </span>
        </label>
      </div>
      <div className="my-4">
        <label>
          Reps
          <span className="block">
            <input
              type="number"
              onBlur={(e) => {
                const value = Number(e.target.value);
                if (value <= 0) {
                  setFormState({
                    ...formState,
                    errors: {
                      ...formState.errors,
                      reps: 'Reps must be greater than 0',
                    },
                  });
                }
              }}
              name="reps"
              placeholder="0"
              min={0}
            />
            {formState.errors.reps && <span className="block">{formState.errors.reps}</span>}
          </span>
        </label>
      </div>
      <div className="block">
        <input className="button" type="submit" value="Calculate" />
      </div>
    </form>
  );
}

export default OneRepMaxCalculator;
