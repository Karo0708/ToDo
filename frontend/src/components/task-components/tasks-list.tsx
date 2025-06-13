import { TaskItem } from "./task-item";
import { FaCrown } from "react-icons/fa";
import type { TaskListProps } from "../tasks/types";

export function TasksList({ data, total }: TaskListProps) {
    return (
        <div className="w-full max-w-xl border rounded-md p-4 mb-4 border-stone-200 shadow-sm flex flex-col">
            <div className="w-full flex justify-between items-center mb-1">
                <div className="flex items-center gap-x-4">
                    <h3 className="font-semibold text-lg">Your tasks</h3>
                </div>
                <span className="text-amber-500">
                    <FaCrown size={20} />
                </span>
            </div>

            <p className="font-light text-gray-400 text-sm mb-4">{total} tasks</p>

            <div className="flex-1 overflow-y-auto space-y-2 max-h-[400px] pr-2">
                {data?.map((task, index) => (
                    <TaskItem
                        key={index}
                        name={task.name}
                        description={task.description}
                        priority={task.priority}
                        dueDate={task.dueDate}
                    />
                ))}
            </div>
        </div>
    );
}
