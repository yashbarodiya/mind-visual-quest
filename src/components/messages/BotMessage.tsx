import { ReactNode } from "react";

interface BotMessageProps {
  children: ReactNode;
}

export const BotMessage = ({ children }: BotMessageProps) => {
  return (
    <div className="flex flex-col gap-2 animate-fade-in-up">
      {children}
    </div>
  );
};
