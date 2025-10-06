export const ChatHeader = () => {
  return (
    <header className="bg-header py-4 px-6 sticky top-0 z-50 shadow-md">
      <div className="flex items-center justify-center gap-3">
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
          <span className="text-lg">🧠</span>
        </div>
        <h1 className="text-white text-xl font-medium">mind</h1>
      </div>
    </header>
  );
};
