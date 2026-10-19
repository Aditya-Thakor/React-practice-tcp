import { Wallet } from "lucide-react";

export default function LOGO() {
  return (
    <div className="flex items-center gap-4">
      <Wallet className="size-12 p-2.5 bg-linear-to-br from-blue-500 to-cyan-500 text-white rounded-lg" />
      <h1 className="text-2xl text-neutral-800 text-shadow-sm text-shadow-neutral-200">
        Expense Tracker
      </h1>
    </div>
  );
}
