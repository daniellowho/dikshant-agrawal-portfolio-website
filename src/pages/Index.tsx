import { useEffect } from "react";
import NavBar from "@/components/NavBar";
import ProfilePhoto from "@/components/ProfilePhoto";
import Section from "@/components/Section";
import EducationCard from "@/components/EducationCard";
import ExperienceCard from "@/components/ExperienceCard";
import SkillCard from "@/components/SkillCard";
import ContactButton from "@/components/ContactButton";

const Index = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add animation classes when element is visible
            const title = entry.target.querySelector(".section-title");
            const content = entry.target.querySelector(".section-content");
            
            if (title) {
              title.classList.add("animate-fade-in");
              // Use className instead of style
              title.classList.add("opacity-100");
            }
            
            if (content) {
              content.classList.add("animate-fade-in");
              // Use className instead of style
              content.classList.add("opacity-100");
            }
          }
        });
      },
      { threshold: 0.1 }
    );
    
    // Observe all sections
    document.querySelectorAll("section").forEach((section) => {
      observer.observe(section);
    });
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-darkgray-300 text-white">
      <NavBar />
      
      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex flex-col justify-center items-center px-6">
        <div className="text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Dikshant Agrawal
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            B.Tech in AI and Data Science
          </p>
          
          <ProfilePhoto />
          
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <ContactButton 
              type="github" 
              value="GitHub" 
              link="https://github.com" 
            />
            <ContactButton 
              type="linkedin" 
              value="LinkedIn" 
              link="https://linkedin.com" 
            />
            <ContactButton 
              type="email" 
              value="dikshant231@gmail.com" 
              link="mailto:dikshant231@gmail.com" 
            />
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-gray-400 hover:text-white transition-colors">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 14l-7 7m0 0l-7-7m7 7V3" 
              />
            </svg>
          </a>
        </div>
      </section>
      
      {/* About Section */}
      <Section id="about" title="About Me">
        <div className="max-w-3xl mx-auto space-y-6 text-lg">
          <p>
            I'm an enthusiastic B.Tech student in AI and Data Science at Amrita Vishwa Vidyapeetham.
            My passion lies in developing innovative solutions through technology, with a focus on 
            real-world applications.
          </p>
          <p>
            With experience in Arduino development, data analysis, and marketing strategy, I bring a 
            multidisciplinary approach to my work. I'm particularly interested in projects that make
            a positive impact on people's lives.
          </p>
        </div>
      </Section>
      
      {/* Education Section */}
      <Section id="education" title="Education" className="bg-darkgray-400">
        <div className="max-w-3xl mx-auto">
          <EducationCard
            institution="Amrita Vishwa Vidyapeetham"
            degree="B.Tech. in AI and Data Science"
            duration="Aug. 2024 – Present"
            location="Faridabad, IN"
          />
          <EducationCard
            institution="Modern Delhi International School"
            degree="High School"
            duration="2022 – 2024"
            location="Faridabad, IN"
          />
          <EducationCard
            institution="12th Board Grade"
            degree="Modern Delhi International School"
            duration="2024"
            location="Faridabad, IN"
            details={["Percentage: [83.4]"]}
          />
          <EducationCard
            institution="B.Tech. (AI & Data Science) - 1st Semester"
            degree="Amrita Vishwa Vidyapeetham"
            duration="2024 - Present"
            location="Faridabad, IN"
            details={["SGPA: [8.3]"]}
          />
        </div>
      </Section>
      
      {/* Experience Section */}
      <Section id="experience" title="Experience">
        <div className="max-w-3xl mx-auto">
          <ExperienceCard
            position="Team Member"
            company="Smart Blind Stick (Prototype)"
            duration="Aug. 2024 - Jan. 2025"
            location="Faridabad, IN"
            responsibilities={[
              "Designed and built a smart blind stick using Arduino Uno, and other components to assist visually impaired individuals.",
              "Integrated real-time obstacle detection to alert users via vibrations and sound.",
              "Optimized power consumption and designed a lightweight, ergonomic structure for practical use."
            ]}
          />
          <ExperienceCard
            position="Team Member"
            company="OCD Clinical Data Analysis"
            duration="Aug. 2024 - Jan. 2025"
            location="Faridabad, IN"
            responsibilities={[
              "Performed data cleaning and preprocessing on clinical and demographic data of OCD patients.",
              "Utilized Python libraries like Pandas and NumPy to analyze patient trends and correlations.",
              "Developed visualizations using Matplotlib and Seaborn to interpret key insights from the dataset."
            ]}
          />
          <ExperienceCard
            position="Marketing Expert"
            company="Robotics and IoT Club"
            duration="Feb. 2025 - Present"
            location="Faridabad, IN"
            responsibilities={[
              "Developed and executed marketing strategies to increase club participation and engagement.",
              "Managed social media campaigns, posters, and promotional content to attract new members."
            ]}
          />
        </div>
      </Section>
      
      {/* Skills Section */}
      <Section id="skills" title="Technical Skills" className="bg-darkgray-400">
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <SkillCard
            category="Programming Languages"
            skills={["Java", "Python"]}
          />
          <SkillCard
            category="Libraries"
            skills={["NumPy", "Pandas", "Matplotlib", "Seaborn"]}
          />
          <SkillCard
            category="Operating Systems"
            skills={["Windows"]}
          />
          <SkillCard
            category="Writing"
            skills={["LaTeX", "Office"]}
          />
          <SkillCard
            category="Languages"
            skills={["Hindi (native)", "English (fluent)", "French (learner)"]}
          />
          <SkillCard
            category="Interests"
            skills={["Badminton", "Formula 1", "Music", "Robotics", "Arduino Designing"]}
          />
        </div>
      </Section>
      
      {/* Footer */}
      <footer className="bg-darkgray-500 py-6 text-center text-gray-500">
        <div className="container mx-auto">
          <p>© 2025 Dikshant Agrawal. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
