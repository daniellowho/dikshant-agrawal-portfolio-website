
type ExperienceCardProps = {
  position: string;
  company: string;
  duration: string;
  location: string;
  responsibilities: string[];
};

const ExperienceCard = ({ position, company, duration, location, responsibilities }: ExperienceCardProps) => {
  return (
    <div className="card mb-6">
      <div className="flex flex-col md:flex-row justify-between mb-2">
        <h3 className="font-bold text-lg">{position}</h3>
        <span className="text-gray-400">{duration}</span>
      </div>
      <div className="text-gray-300 mb-1">{company}</div>
      <div className="text-gray-400 text-sm mb-3">{location}</div>
      <ul className="list-disc list-inside text-gray-300 space-y-2">
        {responsibilities.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;
