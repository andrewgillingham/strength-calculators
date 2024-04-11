import OneRepMaxCalculator from '@/components/OneRepMaxCalculator';
import { Metadata } from 'next';
import { FunctionComponent } from 'react';

export const metadata: Metadata = {
  title: 'One Rep Max Calculator',
  description: 'Calculate your one rep max (1RM) using different formulas',
};

const OneRepMaxCalculatorPage: FunctionComponent = function () {
  return (
    <section>
      <h1>Calculate Your 1RM (One Rep Max)</h1>
      <p>Your 1RM is the maximum amount of weight you can lift for a single repetition of a given exercise.</p>
      <OneRepMaxCalculator />
    </section>
  );
};

export default OneRepMaxCalculatorPage;
