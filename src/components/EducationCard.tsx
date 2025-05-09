
type EducationCardProps = {
  institution: string;
  degree: string;
  duration: string;
  location: string;
  details?: string[];
};

const EducationCard = ({ institution, degree, duration, location, details }: EducationCardProps) => {
  return (
    <div className="card mb-6 bg-darkgray-200">
      <div className="flex flex-col md:flex-row justify-between mb-2">
        <h3 className="font-bold text-lg">{institution}</h3>
        <span className="text-gray-400">{duration}</span>
      </div>
      <div className="text-gray-300 mb-1">{degree}</div>
      <div className="text-gray-400 text-sm mb-3">{location}</div>
      {details && details.length > 0 && (
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          {details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EducationCard;
