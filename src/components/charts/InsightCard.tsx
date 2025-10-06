interface InsightCardProps {
  title: string;
  insight: string;
  rank?: string;
}

export const InsightCard = ({ title, insight, rank }: InsightCardProps) => {
  return (
    <div className="bg-insight-bg border border-primary/20 rounded-2xl p-4">
      <div className="flex items-center justify-between mb-2">
        <h4 className="font-semibold text-foreground">{title}</h4>
        {rank && (
          <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
            {rank}
          </span>
        )}
      </div>
      <p className="text-sm text-foreground/90 leading-relaxed whitespace-pre-line">
        {insight}
      </p>
    </div>
  );
};
