import OneRepMaxCalculator from '@/components/OneRepMaxCalculator';
import { Metadata } from 'next';
import { FunctionComponent } from 'react';

export const metadata: Metadata = {
  title: 'One Rep Max Calculator',
  description: 'Calculate your one rep max (1RM) using different formulas',
};

export const PAGE_CONTENT = {
  title: 'Calculate Your 1RM (One Rep Max)',
  description: 'Your 1RM is the maximum amount of weight you can lift for a single repetition of a given exercise.',
  slug: 'one-rm-calculator',
};

const OneRepMaxCalculatorPage: FunctionComponent = function () {
  return (
    <section>
      <h1>{PAGE_CONTENT.title}</h1>
      <p>{PAGE_CONTENT.description}</p>
      <OneRepMaxCalculator />
    </section>
  );
};

export default OneRepMaxCalculatorPage;
