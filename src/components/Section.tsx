
import { ReactNode } from 'react';

type SectionProps = {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
};

const Section = ({ id, title, children, className = '' }: SectionProps) => {
  return (
    <section id={id} className={`py-16 px-6 md:py-20 ${className}`}>
      <div className="container mx-auto">
        <h2 className="section-title text-3xl md:text-4xl font-bold mb-10 text-center opacity-0">{title}</h2>
        <div className="section-content opacity-0">
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;
