import { useState } from "react";
import { TrendChart } from "../charts/TrendChart";
import { InsightCard } from "../charts/InsightCard";
import type { Fund } from "@/types/fund";

interface IndmoneyTabProps {
  fund: Fund;
  timeFilter: string;
}

type MetricType = "indmoney" | "performance" | "risk" | "cost";

export const IndmoneyTab = ({ fund, timeFilter }: IndmoneyTabProps) => {
  const [activeMetric, setActiveMetric] = useState<MetricType>("indmoney");

  const quartileLabelsMap: Record<MetricType, string[]> = {
    indmoney: ["Top Performer", "Above Average", "Below Average", "Poor Performer"],
    performance: ["Excellent", "Good", "Average", "Poor"],
    risk: ["Low Risk", "Below Avg Risk", "Above Avg Risk", "High Risk"],
    cost: ["Very Low", "Low", "Moderate", "High"],
  };
  
  const trendDataMap: Record<MetricType, { oneYear: any[], threeYear: any[], fiveYear: any[] }> = {
    indmoney: {
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
    },
    performance: {
      oneYear: [
        { x: "Feb", y: 4 },
        { x: "Mar", y: 3 },
        { x: "Apr", y: 3 },
        { x: "May", y: 2 },
        { x: "Jun", y: 2 },
        { x: "Jul", y: 1 },
        { x: "Aug", y: 1 },
      ],
      threeYear: [
        { x: "Feb", y: 6 },
        { x: "Mar", y: 5 },
        { x: "Apr", y: 5 },
        { x: "May", y: 4 },
        { x: "Jun", y: 3 },
        { x: "Jul", y: 2 },
        { x: "Aug", y: 2 },
      ],
      fiveYear: [
        { x: "Feb", y: 8 },
        { x: "Mar", y: 7 },
        { x: "Apr", y: 6 },
        { x: "May", y: 5 },
        { x: "Jun", y: 4 },
        { x: "Jul", y: 3 },
        { x: "Aug", y: 2 },
      ],
    },
    risk: {
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
    },
    cost: {
      oneYear: [
        { x: "Feb", y: 8 },
        { x: "Mar", y: 8 },
        { x: "Apr", y: 7 },
        { x: "May", y: 7 },
        { x: "Jun", y: 6 },
        { x: "Jul", y: 6 },
        { x: "Aug", y: 5 },
      ],
      threeYear: [
        { x: "Feb", y: 9 },
        { x: "Mar", y: 8 },
        { x: "Apr", y: 8 },
        { x: "May", y: 7 },
        { x: "Jun", y: 7 },
        { x: "Jul", y: 6 },
        { x: "Aug", y: 6 },
      ],
      fiveYear: [
        { x: "Feb", y: 10 },
        { x: "Mar", y: 9 },
        { x: "Apr", y: 9 },
        { x: "May", y: 8 },
        { x: "Jun", y: 8 },
        { x: "Jul", y: 7 },
        { x: "Aug", y: 7 },
      ],
    },
  };

  const metricButtons = [
    { id: "indmoney" as MetricType, label: "INDmoney Ranking" },
    { id: "performance" as MetricType, label: "Performance Score Rank" },
    { id: "risk" as MetricType, label: "Risk Score" },
    { id: "cost" as MetricType, label: "Cost Score" },
  ];

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
        <h3 className="text-lg font-semibold text-foreground mb-4">Historical INDmoney Ranking</h3>
        
        {/* Metric Selection Chiclets */}
        <div className="flex flex-wrap gap-2 mb-4">
          {metricButtons.map((metric) => (
            <button
              key={metric.id}
              onClick={() => setActiveMetric(metric.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                activeMetric === metric.id
                  ? "border-2 border-primary text-primary bg-primary/5"
                  : "border border-border text-muted-foreground"
              }`}
            >
              {metric.label}
            </button>
          ))}
        </div>

        <TrendChart 
          data={trendDataMap[activeMetric]} 
          quartileLabels={quartileLabelsMap[activeMetric]} 
        />
      </div>

      {fund.insights.trend && (
        <div className="space-y-3 pb-4">
          {fund.insights.trend.map((insight, idx) => (
            <InsightCard key={idx} title={insight.label} insight={insight.text} rank={insight.rank} />
          ))}
        </div>
      )}
    </div>
  );
};
