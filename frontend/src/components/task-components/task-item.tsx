import { FaRegTrashAlt } from "react-icons/fa";
import { FiAlertCircle } from "react-icons/fi";
import { IoIosCalendar } from "react-icons/io";
import { BsPencilSquare } from "react-icons/bs";
import { FaRegCircle } from "react-icons/fa";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import type { TaskItemProps } from "../tasks/types";

const priorityColor = {
  high: "text-red-800",
  medium: "text-amber-500",
  low: "text-green-600",
};

const priorityIcon = {
  high: <FiAlertCircle size={15} />,
  medium: <IoIosRemoveCircleOutline size={20} />,
  low: <FaRegCircle size={15} />,
};

export function TaskItem({ name, description, priority, dueDate }: TaskItemProps) {
  return (
    <div className="border rounded-md w-full p-4 mb-2 border-stone-200 flex flex-col sm:flex-row justify-between shadow-sm gap-4">
      <div className="flex flex-1 flex-col gap-2">
        <div className="flex items-start gap-4">
          <input type="checkbox" name="status" className="w-5 h-5 mt-1" />
          <div>
            <h3 className="font-semibold">{name}</h3>
            <p className="text-sm text-stone-600">{description}</p>
          </div>
        </div>

        <div className="pl-9 flex items-center gap-2 text-sm text-stone-700">
          <span className={`${priorityColor[priority]} transition-colors`}>
            {priorityIcon[priority] ?? <FiAlertCircle size={15} />}
          </span>
          <p className={`${priorityColor[priority]} text-xs capitalize`}>
            {priority}
          </p>
          <IoIosCalendar size={15} />
          <p className="text-xs">{dueDate}</p>
        </div>
      </div>

      <div className="flex items-center gap-2 self-start sm:self-center">
        <button aria-label="Edit Task" className="text-stone-600 hover:text-blue-700 transition-colors">
          <BsPencilSquare size={20} />
        </button>
        <button aria-label="Delete Task" className="text-red-800 hover:text-stone-600 transition-colors">
          <FaRegTrashAlt size={20} />
        </button>
      </div>
    </div>
  );
}
