interface UserMessageProps {
  text: string;
}

export const UserMessage = ({ text }: UserMessageProps) => {
  return (
    <div className="flex justify-end animate-fade-in-up">
      <div className="bg-primary text-primary-foreground px-4 py-3 rounded-[20px_20px_4px_20px] max-w-[80%] text-base leading-relaxed">
        {text}
      </div>
    </div>
  );
};
