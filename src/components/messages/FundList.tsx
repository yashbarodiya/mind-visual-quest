import { TrendingUp } from "lucide-react";
import type { Fund } from "@/types/fund";

const FUNDS: Fund[] = [
  {
    id: "motilal",
    name: "Motilal Oswal Flex Cap Fund Direct Plan Growth",
    description: "High-alpha momentum fund with strong recent outperformance",
    rank: "Ranked 1/21 Flexi Cap Funds",
    performanceScore: 95,
    riskScore: 72,
    defaultTab: "alpha",
    insights: {
      alpha: "Captured 158% of market gains over 1Y (Rank 1/21). Delivered +11.1% excess vs benchmark over last year (Rank 2/21). Action: Momentum-led outperformer; consider increasing weight.",
      risk: "Most volatile in category, ~21% 1Y volatility (Rank 21/21). Action: Pair with a stability-focused low-vol fund.",
      capture: "~112% down capture (weak protection; bottom quartile). Action: Size allocation carefully.",
    }
  },
  {
    id: "axis",
    name: "Axis Flexi Cap Fund Direct Growth",
    description: "Recent turnaround with improving alpha generation",
    rank: "Ranked 6/21 Flexi Cap Funds",
    performanceScore: 82,
    riskScore: 68,
    defaultTab: "alpha",
    insights: {
      alpha: "+6.1% 1Y excess return (top quartile) — strong recent turnaround. Action: Improving near-term; confirm persistence before overweight.",
      risk: "Larger falls vs peers; bottom-quartile max drawdown across 1/3/5Y. Action: Smaller allocation or pair with low-vol.",
      capture: "Note: Underperformed benchmark −2.0% over 5Y (Rank 17/18).",
    }
  },
  {
    id: "parag",
    name: "Parag Parikh Flexi Cap Direct Growth",
    description: "Best-in-class downside protection with steady returns",
    rank: "Ranked 8/21 Flexi Cap Funds",
    performanceScore: 78,
    riskScore: 45,
    defaultTab: "stdDev",
    insights: {
      alpha: "Consistent top-quartile alpha across 1/3/5Y; ~76% up capture (lower participation in rallies). Action: Steadier but moderated upside.",
      risk: "Best downside protection — only 35% of market fall (Rank 1/21); lowest volatility ~9% (Rank 1/21). Action: Strong core stabilizer.",
      capture: "~76% up capture (lower participation in rallies). Action: Steadier but moderated upside.",
    }
  },
  {
    id: "hdfc",
    name: "HDFC Flexi Cap Fund - Direct Plan - Growth Option",
    description: "Reliable balanced compounder across market cycles",
    rank: "Ranked 2/21 Flexi Cap Funds",
    performanceScore: 88,
    riskScore: 55,
    defaultTab: "alpha",
    insights: {
      alpha: "Top-quartile excess returns across 1/3/5Y. Action: Reliable compounder for core holding.",
      risk: "~11% volatility; 5Y downside protection improved from bottom → top quartile. Action: Balanced profile; SIP-friendly.",
      capture: "Balanced capture ratios across up and down markets.",
    }
  },
];

interface FundListProps {
  onSelectFund: (fund: Fund) => void;
}

export const FundList = ({ onSelectFund }: FundListProps) => {
  return (
    <>
      <div className="bg-success-bg border border-success-text/20 rounded-2xl p-3 text-success-text text-sm leading-relaxed">
        Funds are selected based on their performance and risk management metrics within peer group funds of the same category. It has one of the lowest expense ratios at 0.21%
      </div>

      <div className="space-y-3">
        {FUNDS.map((fund) => (
          <div key={fund.id} className="bg-card rounded-3xl p-4 shadow-sm">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <div className="w-6 h-6 bg-primary rounded-full" />
              </div>
              
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-foreground mb-2">{fund.name}</h3>
                
                <div className="bg-gold/10 border border-gold/30 rounded-xl px-3 py-1.5 inline-flex items-center gap-1.5 mb-3">
                  <span className="text-gold text-lg">⭐</span>
                  <span className="text-gold text-sm font-medium">{fund.rank}</span>
                </div>
              </div>
            </div>

            <div className="space-y-1 text-sm mb-3">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Performance score - {fund.performanceScore}</span>
                <TrendingUp size={16} className="text-success-text" />
              </div>
              <div className="text-muted-foreground">
                Risk Management - {fund.riskScore}
              </div>
            </div>

            <button
              onClick={() => onSelectFund(fund)}
              className="text-primary text-sm font-medium min-h-[40px] active:opacity-70 transition-opacity"
            >
              View Detail →
            </button>
          </div>
        ))}
      </div>
    </>
  );
};
