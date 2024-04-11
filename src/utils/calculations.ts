export const METHODS = {
  brzycki: {
    label: 'Brzycki',
    method: calculateBrzycki,
  },
  epley: {
    label: 'Epley',
    method: calculateEpley,
  },
  lombardi: {
    label: 'Lombardi',
    method: calculateLombardi,
  },
  oconnor: {
    label: "O'Connor",
    method: calculateOconnor,
  },
  lander: {
    label: 'Lander',
    method: calculateLander,
  },
} as const;

export type Method = keyof typeof METHODS;

export function calculateOneRepMax(weight: number, reps: number, method: Method) {
  if (reps === 1) {
    return weight;
  }

  return Math.round(METHODS[method].method(weight, reps));
}

function calculateBrzycki(weight: number, reps: number) {
  return weight * (36 / (37 - reps));
}

function calculateEpley(weight: number, reps: number) {
  return weight * (1 + reps / 30);
}

function calculateLombardi(weight: number, reps: number) {
  return weight * Math.pow(reps, 0.1);
}

function calculateOconnor(weight: number, reps: number) {
  return weight * (1 + 0.025 * reps);
}

function calculateLander(weight: number, reps: number) {
  return (100 * weight) / (101.3 - 2.67123 * reps);
}
