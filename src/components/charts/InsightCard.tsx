interface InsightCardProps {
  title: string;
  insight: string;
}

export const InsightCard = ({ title, insight }: InsightCardProps) => {
  return (
    <div className="bg-insight-bg border border-primary/20 rounded-2xl p-4">
      <h4 className="font-semibold text-foreground mb-2">{title}</h4>
      <p className="text-sm text-foreground/90 leading-relaxed whitespace-pre-line">
        {insight}
      </p>
    </div>
  );
};
