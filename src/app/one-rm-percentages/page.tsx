import exp from 'constants';
import { Metadata } from 'next';
import { FunctionComponent } from 'react';

export const metadata: Metadata = {
  title: 'Percentages of One Rep Max Calculator',
  description: 'Easily calculate the percentages of your one rep max (1RM) for strength training programs.',
};

const OneRepMaxPercentagesPage: FunctionComponent = function () {
  return (
    <section>
      <h1>Percentages of 1RM (One Rep Max)</h1>
      <p>Use the form below to calculate the percentages of your one rep max for your strength training program.</p>
    </section>
  );
};

export default OneRepMaxPercentagesPage;
