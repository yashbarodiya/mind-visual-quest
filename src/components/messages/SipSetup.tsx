import { ChevronDown } from "lucide-react";

interface SipSetupProps {
  onInvest: () => void;
}

export const SipSetup = ({ onInvest }: SipSetupProps) => {
  return (
    <div className="space-y-3">
      <button className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium min-h-[48px]">
        Proceed with investment
      </button>

      <div className="bg-card rounded-3xl p-4 space-y-3 shadow-sm">
        <button className="w-full bg-card border border-border rounded-2xl p-4 flex items-center justify-between text-left min-h-[56px]">
          <span className="text-foreground">I want to start an SIP</span>
          <ChevronDown className="text-muted-foreground" size={20} />
        </button>

        <button className="w-full bg-card border border-border rounded-2xl p-4 flex items-center justify-between text-left min-h-[56px]">
          <span className="text-foreground">Investment amount INR 20,000</span>
          <ChevronDown className="text-muted-foreground" size={20} />
        </button>

        <div className="text-sm text-muted-foreground py-2">
          Your monthly SIP will start on 4th October
        </div>

        <div className="bg-success-bg border border-success-text/20 rounded-2xl p-3 text-success-text text-sm">
          You are investing in zero commission direct plans
        </div>

        <button 
          onClick={onInvest}
          className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium min-h-[48px] active:scale-98 transition-transform"
        >
          Invest Now
        </button>
      </div>
    </div>
  );
};
