export const PerformanceChart = () => {
  return (
    <>
      <div className="bg-success-bg border border-success-text/20 rounded-2xl px-4 py-2 text-success-text text-sm font-medium">
        Investment in zero commission direct plans
      </div>

      <div className="bg-card rounded-3xl p-4 shadow-sm">
        <div className="text-sm text-foreground leading-relaxed mb-4">
          If you invested INR 20,000 per month in this portfolio 5 years ago, your investment would now be worth{" "}
          <span className="font-semibold">INR 21,43,556 (+17.43% per annum)</span>
        </div>

        <div className="relative h-64 mb-4">
          <svg className="w-full h-full" viewBox="0 0 400 240" preserveAspectRatio="none">
            {/* Grid lines */}
            <line x1="0" y1="180" x2="400" y2="180" stroke="hsl(var(--chart-grid))" strokeWidth="1" />
            <line x1="0" y1="120" x2="400" y2="120" stroke="hsl(var(--chart-grid))" strokeWidth="1" />
            <line x1="0" y1="60" x2="400" y2="60" stroke="hsl(var(--chart-grid))" strokeWidth="1" />
            
            {/* Invested line (dashed) */}
            <polyline
              points="20,160 120,130 220,100 320,70 380,50"
              fill="none"
              stroke="hsl(var(--muted-foreground))"
              strokeWidth="2"
              strokeDasharray="5,5"
            />
            
            {/* Portfolio value line (solid blue) */}
            <polyline
              points="20,160 120,115 220,75 320,35 380,10"
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="3"
            />
            
            {/* Data points */}
            <circle cx="20" cy="160" r="4" fill="hsl(var(--primary))" />
            <circle cx="120" cy="115" r="4" fill="hsl(var(--primary))" />
            <circle cx="220" cy="75" r="4" fill="hsl(var(--primary))" />
            <circle cx="320" cy="35" r="4" fill="hsl(var(--primary))" />
            <circle cx="380" cy="10" r="6" fill="hsl(var(--primary))" />
            
            {/* Y-axis labels */}
            <text x="5" y="185" fontSize="10" fill="hsl(var(--muted-foreground))">0</text>
            <text x="5" y="125" fontSize="10" fill="hsl(var(--muted-foreground))">550000</text>
            <text x="5" y="65" fontSize="10" fill="hsl(var(--muted-foreground))">1100000</text>
            <text x="5" y="15" fontSize="10" fill="hsl(var(--muted-foreground))">2200000</text>
            
            {/* X-axis labels */}
            <text x="20" y="235" fontSize="11" fill="hsl(var(--muted-foreground))">Year 1</text>
            <text x="120" y="235" fontSize="11" fill="hsl(var(--muted-foreground))">Year 2</text>
            <text x="220" y="235" fontSize="11" fill="hsl(var(--muted-foreground))">Year 3</text>
            <text x="380" y="235" fontSize="11" fill="hsl(var(--muted-foreground))" textAnchor="end">Year 5</text>
          </svg>
        </div>

        <div className="flex items-center justify-center gap-6 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-6 h-0.5 bg-muted-foreground" style={{ borderTop: "2px dashed" }} />
            <span>Invested</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-0.5 bg-primary" />
            <span>Portfolio Value</span>
          </div>
        </div>
      </div>
    </>
  );
};
