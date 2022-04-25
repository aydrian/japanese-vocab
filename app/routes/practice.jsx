import { Outlet } from "remix";

export default function PracticeRoute() {
  return (
    <div className="flex flex-col items-center justify-center h-95 text-center">
      <h1 className="text-4xl font-bold">Let's learn some Japanese!</h1>
      <Outlet />
    </div>
  );
}
