
import { useState } from 'react';
import { 
  Dialog,
  DialogContent, 
  DialogHeader,
  DialogFooter,
  DialogTitle
} from '@/components/ui/dialog';

const ProfilePhoto = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex items-center gap-6">
      <div 
        className="profile-container relative cursor-pointer rounded-full overflow-hidden hover:animate-profile-hover"
        onClick={() => setIsModalOpen(true)}
      >
        <img 
          src="https://media.licdn.com/dms/image/v2/D4E03AQFedeG9ThQZwg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1731999598751?e=1752105600&v=beta&t=WPQsqVqHLbH2rIy31I5Kk2C6HrTd29w47TKg4vTPMr4" 
          alt="Dikshant Agrawal" 
          className="profile-image w-64 h-64 md:w-80 md:h-80 object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
          <div className="text-white text-sm bg-black/50 p-2 rounded">Click for bio</div>
        </div>
      </div>
      
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="bg-darkgray-300 text-white border-darkgray-100">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">About Dikshant Agrawal</DialogTitle>
          </DialogHeader>
          
          <div className="py-4 space-y-4">
            <p>
              I'm a B.Tech student in AI and Data Science at Amrita Vishwa Vidyapeetham with a passion for technology and innovation.
              My expertise spans data analysis, Arduino development, and marketing strategy.
            </p>
            <p>
              I've worked on projects like the Smart Blind Stick prototype to assist visually impaired individuals
              and performed clinical data analysis for OCD patients using Python libraries.
            </p>
            <p>
              I'm fluent in Hindi and English, learning French, and enjoy badminton, Formula 1, music, robotics, and Arduino designing
              in my free time.
            </p>
          </div>
          
          <DialogFooter>
            <button 
              onClick={() => setIsModalOpen(false)}
              className="px-4 py-2 bg-darkgray-100 hover:bg-darkgray-200 text-white rounded-md transition-colors"
            >
              Close
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProfilePhoto;
