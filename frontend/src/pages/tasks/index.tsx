import TasksDashboard from "../../components/task-components/tasks-dashboard";
import { TasksList } from "../../components/task-components/tasks-list";
import type { dataProps } from "../../components/tasks/types";
import Header from "../../layout/header";
import { MdOutlinePlaylistAddCircle } from "react-icons/md";
import { BiSearchAlt } from "react-icons/bi";


export default function Index() {

  const data: dataProps[] = [
    {
      name: "Grosseries",
      description: "Bought from the store",
      status: "completed",
      priority: "high",
      dueDate: "2023-10-01",
      limitDate: "2023-10-05"
    },
    {
      name: "Laundry",
      description: "Wash and fold clothes",
      status: "pending",
      priority: "medium",
      dueDate: "2023-10-02",
      limitDate: "2023-10-06"
    },
    {
      name: "Gym",
      description: "Workout session",
      status: "pending",
      priority: "low",
      dueDate: "2023-10-03",
      limitDate: "2023-10-07"
    },
    {
      name: "Project Deadline",
      description: "Submit project report",
      status: "pending",
      priority: "high",
      dueDate: "2023-10-04",
      limitDate: "2023-10-08"
    },
    {
      name: "Meeting with Client",
      description: "Discuss project requirements",
      status: "completed",
      priority: "medium",
      dueDate: "2023-10-05",
      limitDate: "2023-10-09"
    },
    {
      name: "Doctor Appointment",
      description: "Annual check-up",
      status: "pending",
      priority: "low",
      dueDate: "2023-10-06",
      limitDate: "2023-10-10"
    },
    {
      name: "Car Maintenance",
      description: "Oil change and tire rotation",
      status: "pending",
      priority: "high",
      dueDate: "2023-10-07",
      limitDate: "2023-10-11"
    },
    {
      name: "Read a Book",
      description: "Finish reading 'The Great Gatsby'",
      status: "completed",
      priority: "medium",
      dueDate: "2023-10-08",
      limitDate: "2023-10-12"
    }
  ]

  const totals = {
    total: data.length,
    active: data.filter(task => task.status === "pending").length,
    completed: data.filter(task => task.status === "completed").length
  };

  const progress = Math.round((totals.completed / totals.total) * 100);

  return (
    <div className="flex flex-col w-full h-screen md:overflow-hidden">
      <Header />
      <div className="flex-1 w-full p-4 bg-white md:overflow-hidden items-center justify-center">
        <div className="flex flex-col md:flex-row gap-4 items-start justify-center w-full max-w-6xl mx-auto md:overflow-hidden">
          <div className="w-full md:w-1/3 lg:w-1/4">
            <div className="relative w-full mb-4 rounded-md border border-stone-200 transition-colors">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-stone-500">
                <BiSearchAlt size={20} />
              </span>
              <input
                type="text"
                placeholder="Search tasks..."
                className="w-full pl-10 p-2 pr-3 bg-white rounded-md focus:outline-none"
                aria-label="Search tasks"
              />
            </div>
            <TasksDashboard totals={totals} progress={progress} />
            <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors">
              <span className="flex items-center justify-center gap-2">
                <MdOutlinePlaylistAddCircle size={30} />
                New Task
              </span>
            </button>
          </div>
          <div className="flex-1 w-full">
            <TasksList data={data} total={totals.total} />
          </div>
        </div>
      </div>
    </div>
  );
}
