export interface InsightItem {
  label: string;
  text: string;
  rank?: string;
}

export interface Fund {
  id: string;
  name: string;
  description: string;
  rank: string;
  performanceScore: number;
  riskScore: number;
  defaultTab: "alpha" | "stdDev" | "upCapture" | "indmoney";
  insights: {
    return: InsightItem[];
    risk: InsightItem[];
    consistency?: InsightItem[];
    trend?: InsightItem[];
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
