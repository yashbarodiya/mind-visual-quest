import { TrendingUp } from "lucide-react";
import type { Fund } from "@/types/fund";

const FUNDS: Fund[] = [
  {
    id: "motilal",
    name: "Motilal Oswal Flexicap Fund Direct Plan Growth",
    description: "High-alpha momentum fund with strong recent outperformance",
    rank: "Ranked 1/21 Flexi Cap Funds",
    performanceScore: 95,
    riskScore: 72,
    defaultTab: "alpha",
    insights: {
      return: [
        {
          label: "Return",
          text: "An exceptional performer in rising markets, this fund captured 158% of market gains over 1 year, the best in its category.",
          rank: "Rank 1/21"
        },
        {
          label: "Return",
          text: "It also delivered strong excess returns of +11.1% over its benchmark in the last year, placing it among the top funds.",
          rank: "Rank 2/21"
        }
      ],
      risk: [
        {
          label: "Risk",
          text: "Investors should note this fund is the most volatile in its category, with returns fluctuating by 21% around its average over the past year.",
          rank: "Rank 21/21"
        },
        {
          label: "Risk",
          text: "During market downturns, it provided weak protection, falling 112% of the market's decline over 1 year, placing it in the bottom quartile for this metric."
        }
      ],
      trend: [
        {
          label: "Overall",
          text: "Momentum-led outperformer with exceptional upside capture but higher volatility. Consider increasing weight for growth-focused portfolios."
        }
      ]
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
      return: [
        {
          label: "Trend",
          text: "The fund shows a strong recent turnaround, with its 1-year excess return of +6.1% placing it in the top quartile, a significant improvement from its long-term performance."
        },
        {
          label: "Return",
          text: "Despite recent gains, its long-term record is weak, underperforming the benchmark by -2.0% over 5 years, ranking it in the bottom quartile.",
          rank: "Rank 17/18"
        }
      ],
      risk: [
        {
          label: "Risk",
          text: "The fund has consistently experienced larger falls than its peers, with its maximum drawdown placing it in the bottom quartile across 1, 3, and 5-year periods."
        }
      ],
      trend: [
        {
          label: "Overall",
          text: "Improving near-term performance but weak long-term track record. Confirm persistence before overweight allocation."
        }
      ]
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
      return: [
        {
          label: "Return",
          text: "The trade-off for its stability is lower participation in rallies; it captured only 76% of market gains in the last year, placing it in the bottom quartile."
        }
      ],
      risk: [
        {
          label: "Risk",
          text: "Offers the best downside protection in its category, losing only 35% of the market's fall over 1 year.",
          rank: "Rank 1/21"
        },
        {
          label: "Risk",
          text: "This is the most stable fund in its class, with the lowest volatility of just 9% over the past year, making it a top-quartile performer on this front.",
          rank: "Rank 1/21"
        }
      ],
      consistency: [
        {
          label: "Consistency",
          text: "A highly consistent performer, this fund has remained in the top quartile for excess returns (Alpha) across 1, 3, and 5-year periods."
        }
      ],
      trend: [
        {
          label: "Overall",
          text: "Strong core stabilizer with excellent risk management. Steadier performance but moderated upside in rallies."
        }
      ]
    }
  },
  {
    id: "hdfc",
    name: "HDFC Flexi Cap Fund -Direct Plan - Growth Option",
    description: "Reliable balanced compounder across market cycles",
    rank: "Ranked 2/21 Flexi Cap Funds",
    performanceScore: 88,
    riskScore: 55,
    defaultTab: "alpha",
    insights: {
      return: [
        {
          label: "Consistency",
          text: "This fund is a very strong and consistent performer, ranking in the top quartile for excess returns (Alpha) across 1, 3, and 5 years."
        }
      ],
      risk: [
        {
          label: "Risk",
          text: "It provides excellent risk management, ranking in the top quartile for low volatility (11%) and for protecting capital during downturns over the past year."
        },
        {
          label: "Risk",
          text: "Its 5-year downside protection has improved remarkably, moving from the bottom quartile two years ago to the top quartile today."
        }
      ],
      trend: [
        {
          label: "Overall",
          text: "Reliable compounder for core holding with balanced profile. SIP-friendly with improving risk metrics."
        }
      ]
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
