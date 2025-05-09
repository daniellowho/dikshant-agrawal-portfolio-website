
import { ArrowRight } from "lucide-react";

type ContactButtonProps = {
  type: 'email' | 'linkedin' | 'github';
  value: string;
  link?: string;
};

const ContactButton = ({ type, value, link }: ContactButtonProps) => {
  const getIcon = () => {
    switch (type) {
      case 'email':
        return '✉️';
      case 'linkedin':
        return 'in';
      case 'github':
        return '🔗';
      default:
        return '•';
    }
  };
  
  return (
    <a 
      href={link || `#${type}`}
      target={link ? "_blank" : undefined}
      rel={link ? "noopener noreferrer" : undefined}
      className="group flex items-center space-x-2 bg-darkgray-200 hover:bg-darkgray-100 rounded-lg p-3 transition-all duration-300"
    >
      <span className="bg-darkgray-100 w-8 h-8 flex items-center justify-center rounded-full">
        {getIcon()}
      </span>
      <span className="flex-1">{value}</span>
      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
    </a>
  );
};

export default ContactButton;
