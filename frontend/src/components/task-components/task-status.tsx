import type { TaskStatusProps } from "../tasks/types";

export function TaskStatus({ title, number, children, progress }: TaskStatusProps) {
  const displayNumber = title === "Progress" ? `${number}%` : number;

  return (
    <div className="flex items-center justify-between border rounded-md p-4 shadow-sm border-stone-200 w-full bg-white">
      <div className="flex flex-col gap-1 w-full">
        <p className="text-xs md:text-sm text-stone-500">{title}</p>
        <h1 className="text-xl md:text-2xl font-bold text-stone-700">{displayNumber}</h1>
        {title === "Progress" && (
          <div className="w-24 md:w-28 h-2 mt-1 bg-stone-200 rounded-full md:overflow-hidden">
            <div
              className="h-full bg-blue-500 transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        )}
      </div>
      <div className="text-stone-600">{children}</div>
    </div>
  );
}
