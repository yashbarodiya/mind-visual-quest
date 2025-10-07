import { TrendChart } from "../charts/TrendChart";
import { ComparisonBars } from "../charts/ComparisonBars";
import { InsightCard } from "../charts/InsightCard";
import type { Fund } from "@/types/fund";

interface StdDeviationTabProps {
  fund: Fund;
  timeFilter: string;
}

export const StdDeviationTab = ({ fund, timeFilter }: StdDeviationTabProps) => {
  const quartileLabels = ["Low Risk", "Below Avg Risk", "Above Avg Risk", "High Risk"];
  
  const trendData = {
    oneYear: [
      { x: "Feb", y: 19 },
      { x: "Mar", y: 18 },
      { x: "Apr", y: 17 },
      { x: "May", y: 18 },
      { x: "Jun", y: 19 },
      { x: "Jul", y: 20 },
      { x: "Aug", y: 21 },
    ],
    threeYear: [
      { x: "Feb", y: 17 },
      { x: "Mar", y: 16 },
      { x: "Apr", y: 16 },
      { x: "May", y: 17 },
      { x: "Jun", y: 18 },
      { x: "Jul", y: 19 },
      { x: "Aug", y: 20 },
    ],
    fiveYear: [
      { x: "Feb", y: 15 },
      { x: "Mar", y: 15 },
      { x: "Apr", y: 14 },
      { x: "May", y: 15 },
      { x: "Jun", y: 16 },
      { x: "Jul", y: 17 },
      { x: "Aug", y: 18 },
    ],
  };

  const comparisonData = [
    { label: "Lowest Vol", value: 25, color: "hsl(var(--success-text))" },
    { label: "Category Avg", value: 60, color: "hsl(var(--muted-foreground))" },
    { label: "This Fund", value: 85, color: "hsl(var(--primary))", highlight: true },
    { label: "Highest Vol", value: 95, color: "hsl(var(--destructive))" },
  ];

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        {fund.insights.risk.map((insight, idx) => (
          <InsightCard key={idx} title={insight.label} insight={insight.text} rank={insight.rank} />
        ))}
      </div>

      <div>
        <h3 className="text-lg font-semibold text-foreground mb-1">Volatility Trend</h3>
        <TrendChart data={trendData} quartileLabels={quartileLabels} />
      </div>

      <div>
        <h4 className="text-base font-semibold text-foreground mb-3">Where it stands now</h4>
        <ComparisonBars data={comparisonData} />
      </div>
    </div>
  );
};
