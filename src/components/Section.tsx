
import { ReactNode } from 'react';

type SectionProps = {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
};

const Section = ({ id, title, children, className = '' }: SectionProps) => {
  return (
    <section id={id} className={`section ${className}`}>
      <h2 className="section-title">{title}</h2>
      <div className="section-content">
        {children}
      </div>
    </section>
  );
};

export default Section;
