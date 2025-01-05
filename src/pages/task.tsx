import TaskCard from "@/components/taskCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AddTaskModal } from "@/module/AddTaskModal";
import { useGetTasksQuery } from "@/redux/api/baseApi";
import { ITask } from "@/types";

export default function Task() {
  const { data, isLoading } = useGetTasksQuery(undefined, {
    pollingInterval: 60000,
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
  });
  if (isLoading) return <div>Loading...</div>;
  return (
    <div>
      <div className="flex justify-between items-center p-10">
        <h1>Tasks</h1>
        <Tabs defaultValue={"all"}>
          <TabsList className="grid w-full grid-cols-4 gap-2">
            <TabsTrigger
              // onClick={()=>dispatch(updateFilter('all'))}
              value="all"
            >
              All
            </TabsTrigger>
            <TabsTrigger
              // onClick={()=>dispatch(updateFilter('low'))}
              value="low"
            >
              Low
            </TabsTrigger>
            <TabsTrigger
              // onClick={()=>dispatch(updateFilter('medium'))}
              value="medium"
            >
              Medium
            </TabsTrigger>
            <TabsTrigger
              // onClick={()=>dispatch(updateFilter('high'))}
              value="high"
            >
              High
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <AddTaskModal />
      </div>
      <div className="grid grid-cols-1 gap-4 p-10">
        {!isLoading && data.tasks.map((task:ITask) => (
          <TaskCard key={task._id} task={task} />
        ))}
      </div>
    </div>
  );
}
