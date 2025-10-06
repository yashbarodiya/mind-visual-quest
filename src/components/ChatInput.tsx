import { Send, Plus } from "lucide-react";

export const ChatInput = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border p-4">
      <div className="max-w-md mx-auto flex items-center gap-2">
        <input
          type="text"
          placeholder="Type here... or"
          className="flex-1 bg-card border border-input rounded-full px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <button className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center active:scale-95 transition-transform">
          <Send size={20} />
        </button>
        <button className="bg-card text-foreground w-12 h-12 rounded-full flex items-center justify-center border border-input active:scale-95 transition-transform">
          <Plus size={20} />
        </button>
      </div>
    </div>
  );
};
