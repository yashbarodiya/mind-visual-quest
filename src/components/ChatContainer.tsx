import { useState } from "react";
import { UserMessage } from "./messages/UserMessage";
import { BotMessage } from "./messages/BotMessage";
import { PlanSummary } from "./messages/PlanSummary";
import { PerformanceChart } from "./messages/PerformanceChart";
import { ActionButtons } from "./messages/ActionButtons";
import { SipSetup } from "./messages/SipSetup";
import { ProfileEditor } from "./messages/ProfileEditor";
import { FundList } from "./messages/FundList";
import type { Fund } from "@/types/fund";

interface ChatContainerProps {
  onSelectFund: (fund: Fund) => void;
}

export const ChatContainer = ({ onSelectFund }: ChatContainerProps) => {
  const [step, setStep] = useState(1);

  return (
    <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 pb-24">
      <UserMessage text="I want to start investing" />
      
      {step >= 1 && (
        <BotMessage>
          <button 
            onClick={() => setStep(2)}
            className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium min-h-[48px] active:scale-95 transition-transform"
          >
            Get Investment Plan
          </button>
        </BotMessage>
      )}

      {step >= 2 && (
        <>
          <UserMessage text="I want to start investing" />
          <BotMessage>
            <PlanSummary />
          </BotMessage>
          <BotMessage>
            <PerformanceChart />
            <ActionButtons onAction={setStep} />
          </BotMessage>
        </>
      )}

      {step === 3 && (
        <>
          <UserMessage text="Proceed with investment" />
          <BotMessage>
            <SipSetup onInvest={() => setStep(2)} />
          </BotMessage>
        </>
      )}

      {step === 4 && (
        <>
          <UserMessage text="Change my risk profile or time horizon" />
          <BotMessage>
            <ProfileEditor onUpdate={() => setStep(2)} />
          </BotMessage>
        </>
      )}

      {step === 5 && (
        <>
          <UserMessage text="How are these funds selected?" />
          <BotMessage>
            <FundList onSelectFund={onSelectFund} />
          </BotMessage>
        </>
      )}
    </div>
  );
};
