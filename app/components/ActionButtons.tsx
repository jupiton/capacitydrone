import Link from 'next/link';

interface ActionButtonsProps {
  className?: string;
}

const ActionButtons = ({ className = "" }: ActionButtonsProps) => {
  return (
    <div className={`flex flex-col sm:flex-row gap-4 justify-center ${className}`}>
      <Link 
        href="/devis" 
        className="bg-blue-500/80 backdrop-blur-sm hover:bg-blue-600 text-white px-8 py-4 rounded-xl text-lg transition-all transform hover:scale-105"
      >
        Demander un devis
      </Link>
      <Link href="/contact">
        <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-xl text-lg transition-all border border-blue-500/20 hover:border-blue-500/40">
          En savoir plus
        </button>
      </Link>
    </div>
  );
};

export default ActionButtons; 