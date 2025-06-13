import type { PropsWithChildren } from "preact/compat";

export interface TaskItemProps {
    name: string;
    description: string;
    priority: "low" | "medium" | "high";
    dueDate: string;
};


export interface TaskListProps {
    data: TaskItemProps[];
    total?: number;
};



export interface TaskStatusProps extends PropsWithChildren{
  title: string;
  number: number;
  progress?: number;
};

export interface dataProps {
    name: string;
    description: string;
    status: string;
    priority: "high" | "medium" | "low";
    dueDate: string;
    limitDate: string;
}

export interface TasksDashboardProps{
    totals: {
        total: number;
        active: number;
        completed: number;
    },
    progress: number;
};
