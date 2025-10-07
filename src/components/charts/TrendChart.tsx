import type { TrendData } from "@/types/fund";

interface TrendChartProps {
  data: TrendData;
  quartileLabels: string[];
}

export const TrendChart = ({ data, quartileLabels }: TrendChartProps) => {
  const maxY = 21;
  const chartHeight = 260;
  const chartWidth = 420;
  const padding = { top: 10, right: 20, bottom: 40, left: 120 };
  
  const plotHeight = chartHeight - padding.top - padding.bottom;
  const plotWidth = chartWidth - padding.left - padding.right;

  const getY = (value: number) => {
    return padding.top + (value / maxY) * plotHeight;
  };

  const getX = (index: number, totalPoints: number) => {
    return padding.left + (index / (totalPoints - 1)) * plotWidth;
  };

  const createPath = (points: typeof data.oneYear) => {
    return points.map((p, i) => {
      const x = getX(i, points.length);
      const y = getY(p.y);
      return i === 0 ? `M ${x} ${y}` : `L ${x} ${y}`;
    }).join(" ");
  };

  const quartileHeight = plotHeight / 4;
  const quartileColors = ["#fed7aa", "#fdba74", "#fb923c", "#f97316"];

  return (
    <div className="bg-card rounded-2xl p-4">
      <svg className="w-full" viewBox={`0 0 ${chartWidth} ${chartHeight}`} preserveAspectRatio="xMidYMid meet">
        {/* Quartile backgrounds */}
        {quartileLabels.map((label, i) => (
          <g key={i}>
            <rect
              x={padding.left}
              y={padding.top + i * quartileHeight}
              width={plotWidth}
              height={quartileHeight}
              fill={quartileColors[i]}
              opacity="0.25"
            />
            <text
              x={padding.left - 10}
              y={padding.top + i * quartileHeight + quartileHeight / 2}
              fontSize="12"
              fill="hsl(var(--foreground))"
              fontWeight="600"
              textAnchor="end"
              dominantBaseline="middle"
            >
              {label}
            </text>
          </g>
        ))}

        {/* Grid lines */}
        {[0, 5, 10, 15, 20].map((val) => (
          <line
            key={val}
            x1={padding.left}
            y1={getY(val)}
            x2={chartWidth - padding.right}
            y2={getY(val)}
            stroke="hsl(var(--chart-grid))"
            strokeWidth="1"
          />
        ))}

        {/* 5Y line (dotted) */}
        <path
          d={createPath(data.fiveYear)}
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          strokeDasharray="2,3"
        />
        {data.fiveYear.map((p, i) => (
          <circle
            key={`5y-${i}`}
            cx={getX(i, data.fiveYear.length)}
            cy={getY(p.y)}
            r="3"
            fill="hsl(var(--primary))"
          />
        ))}

        {/* 3Y line (dashed) */}
        <path
          d={createPath(data.threeYear)}
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          strokeDasharray="5,5"
        />
        {data.threeYear.map((p, i) => (
          <circle
            key={`3y-${i}`}
            cx={getX(i, data.threeYear.length)}
            cy={getY(p.y)}
            r="3"
            fill="hsl(var(--primary))"
          />
        ))}

        {/* 1Y line (solid) */}
        <path
          d={createPath(data.oneYear)}
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="2.5"
        />
        {data.oneYear.map((p, i) => (
          <circle
            key={`1y-${i}`}
            cx={getX(i, data.oneYear.length)}
            cy={getY(p.y)}
            r={i === data.oneYear.length - 1 ? "5" : "3"}
            fill="hsl(var(--primary))"
          />
        ))}

        {/* X-axis labels */}
        {data.oneYear.map((p, i) => (
          <text
            key={p.x}
            x={getX(i, data.oneYear.length)}
            y={chartHeight - padding.bottom + 20}
            fontSize="11"
            fill="hsl(var(--muted-foreground))"
            textAnchor="middle"
          >
            {p.x}
          </text>
        ))}

        {/* Y-axis labels */}
        {[1, 10, 20].map((val) => (
          <text
            key={val}
            x={padding.left - 10}
            y={getY(val) + 4}
            fontSize="10"
            fill="hsl(var(--muted-foreground))"
            textAnchor="end"
          >
            {val}
          </text>
        ))}
      </svg>

      {/* Legend */}
      <div className="flex items-center justify-end gap-4 mt-3 text-xs text-muted-foreground">
        <div className="flex items-center gap-1.5">
          <div className="w-6 h-0.5 bg-primary" />
          <span>1Y</span>
        </div>
        <div className="flex items-center gap-1.5">
          <svg width="24" height="2">
            <line x1="0" y1="1" x2="24" y2="1" stroke="hsl(var(--primary))" strokeWidth="2" strokeDasharray="5,5" />
          </svg>
          <span>3Y</span>
        </div>
        <div className="flex items-center gap-1.5">
          <svg width="24" height="2">
            <line x1="0" y1="1" x2="24" y2="1" stroke="hsl(var(--primary))" strokeWidth="2" strokeDasharray="2,3" />
          </svg>
          <span>5Y</span>
        </div>
      </div>
    </div>
  );
};
