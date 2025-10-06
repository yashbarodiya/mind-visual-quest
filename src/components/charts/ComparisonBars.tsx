interface ComparisonBar {
  label: string;
  value: number;
  color: string;
  highlight?: boolean;
}

interface ComparisonBarsProps {
  data: ComparisonBar[];
}

export const ComparisonBars = ({ data }: ComparisonBarsProps) => {
  const maxValue = Math.max(...data.map(d => d.value));

  return (
    <div className="bg-card rounded-2xl p-4 space-y-3">
      {data.map((bar, index) => (
        <div key={index} className="space-y-1">
          <div className="flex items-center justify-between text-sm">
            <span className={bar.highlight ? "font-semibold text-foreground" : "text-muted-foreground"}>
              {bar.label}
            </span>
            <span className={bar.highlight ? "font-semibold text-foreground" : "text-muted-foreground"}>
              {bar.value}
            </span>
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{
                width: `${(bar.value / maxValue) * 100}%`,
                backgroundColor: bar.color,
              }}
            />
          </div>
        </div>
      ))}
      
      <div className="flex items-center gap-4 pt-2 text-xs">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: "hsl(var(--success-text))" }} />
          <span className="text-muted-foreground">Best</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: "hsl(var(--muted-foreground))" }} />
          <span className="text-muted-foreground">Avg</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: "hsl(var(--primary))" }} />
          <span className="text-muted-foreground">This Fund</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: "hsl(var(--destructive))" }} />
          <span className="text-muted-foreground">Worst</span>
        </div>
      </div>
    </div>
  );
};
