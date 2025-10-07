import { TrendChart } from "../charts/TrendChart";
import { ComparisonBars } from "../charts/ComparisonBars";
import { InsightCard } from "../charts/InsightCard";
import type { Fund } from "@/types/fund";

interface UpCaptureTabProps {
  fund: Fund;
  timeFilter: string;
}

export const UpCaptureTab = ({ fund, timeFilter }: UpCaptureTabProps) => {
  const quartileLabels = ["Excellent", "Good", "Average", "Poor"];
  
  const trendData = {
    oneYear: [
      { x: "Feb", y: 16 },
      { x: "Mar", y: 14 },
      { x: "Apr", y: 12 },
      { x: "May", y: 10 },
      { x: "Jun", y: 9 },
      { x: "Jul", y: 7 },
      { x: "Aug", y: 5 },
    ],
    threeYear: [
      { x: "Feb", y: 14 },
      { x: "Mar", y: 13 },
      { x: "Apr", y: 11 },
      { x: "May", y: 9 },
      { x: "Jun", y: 8 },
      { x: "Jul", y: 6 },
      { x: "Aug", y: 4 },
    ],
    fiveYear: [
      { x: "Feb", y: 12 },
      { x: "Mar", y: 11 },
      { x: "Apr", y: 10 },
      { x: "May", y: 8 },
      { x: "Jun", y: 7 },
      { x: "Jul", y: 5 },
      { x: "Aug", y: 3 },
    ],
  };

  const comparisonData = [
    { label: "Best Capture", value: 92, color: "hsl(var(--success-text))" },
    { label: "Category Avg", value: 68, color: "hsl(var(--muted-foreground))" },
    { label: "This Fund", value: 76, color: "hsl(var(--primary))", highlight: true },
    { label: "Worst Capture", value: 45, color: "hsl(var(--destructive))" },
  ];

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        {fund.insights.consistency?.map((insight, idx) => (
          <InsightCard key={idx} title={insight.label} insight={insight.text} rank={insight.rank} />
        ))}
      </div>

      <div>
        <h3 className="text-lg font-semibold text-foreground mb-1">Market Participation Trend</h3>
        <TrendChart data={trendData} quartileLabels={quartileLabels} />
      </div>

      <div>
        <h4 className="text-base font-semibold text-foreground mb-3">Where it stands now</h4>
        <ComparisonBars data={comparisonData} />
      </div>
    </div>
  );
};
