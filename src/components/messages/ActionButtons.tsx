interface ActionButtonsProps {
  onAction: (step: number) => void;
}

export const ActionButtons = ({ onAction }: ActionButtonsProps) => {
  return (
    <div className="space-y-2">
      <button 
        onClick={() => onAction(3)}
        className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium text-base min-h-[48px] active:scale-98 transition-transform"
      >
        Invest Now
      </button>
      
      <button 
        onClick={() => onAction(3)}
        className="w-full bg-card text-foreground px-6 py-3 rounded-full border border-border font-normal text-base min-h-[48px] active:bg-muted transition-colors"
      >
        Proceed with investment
      </button>
      
      <button 
        onClick={() => onAction(4)}
        className="w-full bg-card text-foreground px-6 py-3 rounded-full border border-border font-normal text-base min-h-[48px] active:bg-muted transition-colors"
      >
        Change my risk profile or time horizon
      </button>
      
      <button 
        onClick={() => onAction(5)}
        className="w-full bg-card text-foreground px-6 py-3 rounded-full border border-border font-normal text-base min-h-[48px] active:bg-muted transition-colors"
      >
        How are these funds selected?
      </button>
    </div>
  );
};
