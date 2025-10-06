import { ChevronDown } from "lucide-react";

export const PlanSummary = () => {
  return (
    <>
      <div className="bg-card p-4 rounded-3xl shadow-sm text-foreground text-base leading-relaxed">
        Here is your tailored investment plan for INR 20,000 considering long term horizon and high risk profile.
      </div>

      <div className="bg-card p-4 rounded-3xl shadow-sm">
        <div className="mb-3 text-foreground font-medium">Allocation and fund selection:</div>
        
        <div className="relative h-3 rounded-full overflow-hidden mb-3">
          <div className="absolute inset-0 bg-primary" style={{ width: '85%' }} />
          <div className="absolute right-0 inset-y-0 bg-gold" style={{ width: '15%' }} />
          <div className="absolute top-1/2 left-[42.5%] -translate-x-1/2 -translate-y-1/2 text-white text-xs font-medium">
            85% Equity
          </div>
          <div className="absolute top-1/2 right-[7.5%] -translate-x-1/2 -translate-y-1/2 text-white text-xs font-medium">
            15% Gold
          </div>
        </div>

        <div className="space-y-2 text-sm text-foreground mb-3">
          <div className="flex justify-between">
            <span>1. 85% Equity</span>
            <span>17,000 in 4 Funds</span>
          </div>
          <div className="flex justify-between">
            <span>2. 15% Gold</span>
            <span>3000 in 1 Fund</span>
          </div>
        </div>

        <div className="space-y-2">
          <button className="w-full bg-card border border-border rounded-2xl p-4 flex items-center justify-between text-left min-h-[56px] active:bg-muted transition-colors">
            <div>
              <div className="font-medium text-foreground">85% Equity</div>
              <div className="text-sm text-muted-foreground">17,000 in 4 Funds</div>
            </div>
            <ChevronDown className="text-muted-foreground" size={20} />
          </button>

          <button className="w-full bg-card border border-border rounded-2xl p-4 flex items-center justify-between text-left min-h-[56px] active:bg-muted transition-colors">
            <div>
              <div className="font-medium text-foreground">15% Gold</div>
              <div className="text-sm text-muted-foreground">3000 in 1 Fund</div>
            </div>
            <ChevronDown className="text-muted-foreground" size={20} />
          </button>
        </div>
      </div>
    </>
  );
};
