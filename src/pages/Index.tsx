import { useState } from "react";
import { ChatHeader } from "@/components/ChatHeader";
import { ChatContainer } from "@/components/ChatContainer";
import { ChatInput } from "@/components/ChatInput";
import { FundDetailModal } from "@/components/FundDetailModal";
import type { Fund } from "@/types/fund";

const Index = () => {
  const [selectedFund, setSelectedFund] = useState<Fund | null>(null);

  return (
    <div className="flex flex-col h-screen bg-background">
      <ChatHeader />
      <ChatContainer onSelectFund={setSelectedFund} />
      <ChatInput />
      <FundDetailModal fund={selectedFund} onClose={() => setSelectedFund(null)} />
    </div>
  );
};

export default Index;
