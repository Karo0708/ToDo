import { FiClock } from "react-icons/fi";
import { GiProgression } from "react-icons/gi";
import { MdOutlinePlaylistAddCheckCircle } from "react-icons/md";
import { TfiCup } from "react-icons/tfi";
import { TaskStatus } from "./task-status";
import type { TasksDashboardProps } from "../tasks/types";

export default function TasksDashboard({ totals, progress }: TasksDashboardProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-1 gap-4 w-full max-w-xs">
      <TaskStatus title="Total Tasks" number={totals.total}>
        <MdOutlinePlaylistAddCheckCircle size={30} />
      </TaskStatus>
      <TaskStatus title="Active" number={totals.active}>
        <FiClock size={30} />
      </TaskStatus>
      <TaskStatus title="Completed" number={totals.completed}>
        <span className="text-yellow-500">
          <TfiCup size={30} />
        </span>
      </TaskStatus>
      <TaskStatus title="Progress" number={progress} progress={progress}>
        <GiProgression size={30} />
      </TaskStatus>
    </div>
  );
}
