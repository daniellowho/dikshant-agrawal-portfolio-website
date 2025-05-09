
type SkillCardProps = {
  category: string;
  skills: string[];
};

const SkillCard = ({ category, skills }: SkillCardProps) => {
  return (
    <div className="card mb-6">
      <h3 className="font-bold text-lg mb-3">{category}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span 
            key={index}
            className="px-3 py-1 bg-darkgray-100 text-gray-300 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
