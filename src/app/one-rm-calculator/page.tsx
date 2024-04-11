import OneRepMaxCalculator from '@/components/OneRepMaxCalculator';
import { Metadata } from 'next';
import { FunctionComponent } from 'react';
import { PAGES_CONTENT } from '../data/page-content';

export const metadata: Metadata = {
  title: 'One Rep Max Calculator',
  description: 'Calculate your one rep max (1RM) using different formulas',
};

const OneRepMaxCalculatorPage: FunctionComponent = function () {
  const content = PAGES_CONTENT['one-rm-calculator'];
  return (
    <section>
      <h1>{content.title}</h1>
      <p>{content.description}</p>
      <OneRepMaxCalculator />
    </section>
  );
};

export default OneRepMaxCalculatorPage;
