import { TrendChart } from "../charts/TrendChart";
import { InsightCard } from "../charts/InsightCard";
import type { Fund } from "@/types/fund";

interface IndmoneyTabProps {
  fund: Fund;
  timeFilter: string;
}

export const IndmoneyTab = ({ fund, timeFilter }: IndmoneyTabProps) => {
  const quartileLabels = ["Top Performer", "Above Average", "Below Average", "Poor Performer"];
  
  const trendData = {
    oneYear: [
      { x: "Feb", y: 6 },
      { x: "Mar", y: 5 },
      { x: "Apr", y: 4 },
      { x: "May", y: 3 },
      { x: "Jun", y: 3 },
      { x: "Jul", y: 2 },
      { x: "Aug", y: 1 },
    ],
    threeYear: [
      { x: "Feb", y: 8 },
      { x: "Mar", y: 7 },
      { x: "Apr", y: 6 },
      { x: "May", y: 5 },
      { x: "Jun", y: 4 },
      { x: "Jul", y: 3 },
      { x: "Aug", y: 2 },
    ],
    fiveYear: [
      { x: "Feb", y: 10 },
      { x: "Mar", y: 9 },
      { x: "Apr", y: 8 },
      { x: "May", y: 7 },
      { x: "Jun", y: 6 },
      { x: "Jul", y: 4 },
      { x: "Aug", y: 3 },
    ],
  };

  return (
    <div className="space-y-6">
      {/* Summary Card */}
      <div className="bg-card border border-border rounded-2xl p-4">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
            {fund.id === "motilal" ? "1" : fund.id === "axis" ? "6" : fund.id === "parag" ? "8" : "2"}
          </div>
          <div className="flex-1 grid grid-cols-3 gap-2">
            <div>
              <div className="text-xs text-muted-foreground mb-1">Performance</div>
              <div className="h-1.5 bg-primary/20 rounded-full overflow-hidden">
                <div className="h-full bg-primary" style={{ width: `${fund.performanceScore}%` }} />
              </div>
              <div className="text-xs font-medium mt-1">{fund.performanceScore}%</div>
            </div>
            <div>
              <div className="text-xs text-muted-foreground mb-1">Risk</div>
              <div className="h-1.5 bg-primary/20 rounded-full overflow-hidden">
                <div className="h-full bg-primary" style={{ width: `${fund.riskScore}%` }} />
              </div>
              <div className="text-xs font-medium mt-1">{fund.riskScore}%</div>
            </div>
            <div>
              <div className="text-xs text-muted-foreground mb-1">Cost</div>
              <div className="h-1.5 bg-primary/20 rounded-full overflow-hidden">
                <div className="h-full bg-primary" style={{ width: "21%" }} />
              </div>
              <div className="text-xs font-medium mt-1">0.21%</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2">
          <div className="h-8 bg-muted/30 rounded overflow-hidden">
            <div className="h-full bg-primary/40" style={{ width: "90%" }} />
          </div>
          <div className="h-8 bg-muted/30 rounded overflow-hidden">
            <div className="h-full bg-primary/40" style={{ width: "75%" }} />
          </div>
          <div className="h-8 bg-muted/30 rounded overflow-hidden">
            <div className="h-full bg-primary/40" style={{ width: "85%" }} />
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-foreground mb-4">Historical INDmoney Ranking Trend</h3>
        <TrendChart data={trendData} quartileLabels={quartileLabels} />
      </div>

      <InsightCard 
        title="Overall Insight" 
        insight={fund.insights.overall || fund.insights.alpha} 
      />
    </div>
  );
};
