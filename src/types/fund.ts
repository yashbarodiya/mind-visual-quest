export interface Fund {
  id: string;
  name: string;
  description: string;
  rank: string;
  performanceScore: number;
  riskScore: number;
  defaultTab: "alpha" | "stdDev" | "upCapture" | "indmoney";
  insights: {
    alpha: string;
    risk: string;
    capture: string;
    overall?: string;
  };
}

export interface ChartDataPoint {
  x: string;
  y: number;
}

export interface TrendData {
  oneYear: ChartDataPoint[];
  threeYear: ChartDataPoint[];
  fiveYear: ChartDataPoint[];
}
