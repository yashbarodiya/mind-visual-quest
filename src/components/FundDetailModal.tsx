import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { AlphaTab } from "./fund-tabs/AlphaTab";
import { StdDeviationTab } from "./fund-tabs/StdDeviationTab";
import { UpCaptureTab } from "./fund-tabs/UpCaptureTab";
import { IndmoneyTab } from "./fund-tabs/IndmoneyTab";
import type { Fund } from "@/types/fund";

interface FundDetailModalProps {
  fund: Fund | null;
  onClose: () => void;
}

type TabType = "alpha" | "stdDev" | "upCapture" | "indmoney";

export const FundDetailModal = ({ fund, onClose }: FundDetailModalProps) => {
  const [activeTab, setActiveTab] = useState<TabType>("alpha");
  const [timeFilter, setTimeFilter] = useState<"6M" | "1Y" | "2Y">("1Y");

  useEffect(() => {
    if (fund) {
      setActiveTab(fund.defaultTab);
      setTimeFilter("1Y");
    }
  }, [fund]);

  if (!fund) return null;

  const tabs: { id: TabType; label: string }[] = [
    { id: "alpha", label: "Alpha" },
    { id: "stdDev", label: "Std Deviation" },
    { id: "upCapture", label: "Up Capture" },
    { id: "indmoney", label: "INDmoney" },
  ];

  return (
    <div 
      className="fixed inset-0 bg-black/50 z-50 flex items-end animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="bg-card w-full max-h-[90vh] rounded-t-3xl overflow-hidden flex flex-col animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border sticky top-0 bg-card z-10">
          <h2 className="font-medium text-foreground pr-8 leading-tight">{fund.name}</h2>
          <button 
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-full active:bg-muted transition-colors flex-shrink-0"
          >
            <X size={24} className="text-foreground" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-6 px-4 pt-4 border-b border-border sticky top-[72px] bg-card z-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-3 text-sm font-medium transition-colors relative ${
                activeTab === tab.id
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
              )}
            </button>
          ))}
        </div>

        {/* Time Filter */}
        <div className="flex justify-end gap-2 px-4 py-3 border-b border-border sticky top-[136px] bg-card z-10">
          {["6M", "1Y", "2Y"].map((time) => (
            <button
              key={time}
              onClick={() => setTimeFilter(time as typeof timeFilter)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                timeFilter === time
                  ? "border-2 border-primary text-primary"
                  : "border border-border text-muted-foreground"
              }`}
            >
              {time}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-4 py-4">
          {activeTab === "alpha" && <AlphaTab fund={fund} timeFilter={timeFilter} />}
          {activeTab === "stdDev" && <StdDeviationTab fund={fund} timeFilter={timeFilter} />}
          {activeTab === "upCapture" && <UpCaptureTab fund={fund} timeFilter={timeFilter} />}
          {activeTab === "indmoney" && <IndmoneyTab fund={fund} timeFilter={timeFilter} />}
        </div>
      </div>
    </div>
  );
};
