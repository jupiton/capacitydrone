'use client';

interface SectorCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const SectorCard = ({ title, description, icon }: SectorCardProps) => {
  return (
    <div className="e-con-full e-flex bg-gray-800/30 rounded-xl backdrop-blur-sm p-8">
      <div className="e-con-boxed mb-6">
        <div className="e-con-inner flex flex-col items-center">
          <div className="elementor-widget-container mb-6">
            {icon}
          </div>
          <div className="elementor-divider w-full mb-6">
            <span className="elementor-divider-separator block w-16 h-0.5 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto"></span>
          </div>
          <h3 className="text-2xl font-semibold text-blue-300 mb-4">{title}</h3>
        </div>
      </div>
      <div className="e-con-boxed">
        <div className="e-con-inner">
          <div className="elementor-widget-container">
            <p className="text-gray-400 text-center leading-relaxed whitespace-pre-line">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectorCard; 