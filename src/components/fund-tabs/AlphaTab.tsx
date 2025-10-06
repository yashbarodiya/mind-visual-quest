import { TrendChart } from "../charts/TrendChart";
import { ComparisonBars } from "../charts/ComparisonBars";
import { InsightCard } from "../charts/InsightCard";
import type { Fund } from "@/types/fund";

interface AlphaTabProps {
  fund: Fund;
  timeFilter: string;
}

export const AlphaTab = ({ fund, timeFilter }: AlphaTabProps) => {
  const quartileLabels = ["Top Quartile", "Upper-Middle Quartile", "Lower-Middle Quartile", "Bottom Quartile"];
  
  const trendData = {
    oneYear: [
      { x: "Feb", y: 8 },
      { x: "Mar", y: 7 },
      { x: "Apr", y: 5 },
      { x: "May", y: 4 },
      { x: "Jun", y: 3 },
      { x: "Jul", y: 2 },
      { x: "Aug", y: 1 },
    ],
    threeYear: [
      { x: "Feb", y: 12 },
      { x: "Mar", y: 10 },
      { x: "Apr", y: 8 },
      { x: "May", y: 6 },
      { x: "Jun", y: 5 },
      { x: "Jul", y: 3 },
      { x: "Aug", y: 2 },
    ],
    fiveYear: [
      { x: "Feb", y: 15 },
      { x: "Mar", y: 13 },
      { x: "Apr", y: 11 },
      { x: "May", y: 9 },
      { x: "Jun", y: 7 },
      { x: "Jul", y: 5 },
      { x: "Aug", y: 3 },
    ],
  };

  const comparisonData = [
    { label: "Best Alpha", value: 95, color: "hsl(var(--success-text))" },
    { label: "Category Avg", value: 55, color: "hsl(var(--muted-foreground))" },
    { label: "This Fund", value: 88, color: "hsl(var(--primary))", highlight: true },
    { label: "Worst Alpha", value: 15, color: "hsl(var(--destructive))" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-1">Alpha Score Trend</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Percentile rank within category — lower is better.
        </p>
        <TrendChart data={trendData} quartileLabels={quartileLabels} />
      </div>

      <div>
        <h4 className="text-base font-semibold text-foreground mb-3">Where it stands now</h4>
        <ComparisonBars data={comparisonData} />
      </div>

      <InsightCard title="Alpha Insight" insight={fund.insights.alpha} />
    </div>
  );
};
