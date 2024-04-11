import Link from 'next/link';
import { PAGES_CONTENT } from './data/page-content';

const CALCULATOR_CARDS = Object.values(PAGES_CONTENT);

export default function Home() {
  return (
    <section>
      <h1>Calculators</h1>
      {CALCULATOR_CARDS.map((content, i) => (
        <div className="bg-white rounded p-8 border border-teal-600 text-slate-900" key={`calc-card-${i}`}>
          <h2>{content.title}</h2>
          <p className="mb-4">{content.description}</p>
          <p>
            <Link className="button" href={`/${content.slug}`}>
              Calculate
            </Link>
          </p>
        </div>
      ))}
    </section>
  );
}
