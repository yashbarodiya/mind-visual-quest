import { ChevronDown } from "lucide-react";

interface ProfileEditorProps {
  onUpdate: () => void;
}

export const ProfileEditor = ({ onUpdate }: ProfileEditorProps) => {
  return (
    <div className="space-y-3">
      <button className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium min-h-[48px]">
        Change my risk profile or time horizon
      </button>

      <div className="bg-card rounded-3xl p-4 space-y-3 shadow-sm">
        <button className="w-full bg-card border border-border rounded-2xl p-4 flex items-center justify-between text-left min-h-[56px]">
          <span className="text-foreground">My Risk Profile: High Risk</span>
          <ChevronDown className="text-muted-foreground" size={20} />
        </button>

        <button className="w-full bg-card border border-border rounded-2xl p-4 flex items-center justify-between text-left min-h-[56px]">
          <span className="text-foreground">My Time Horizon: Long Term (&gt;7 years)</span>
          <ChevronDown className="text-muted-foreground" size={20} />
        </button>

        <button 
          onClick={onUpdate}
          className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium min-h-[48px] active:scale-98 transition-transform"
        >
          Update Plan
        </button>
      </div>
    </div>
  );
};
