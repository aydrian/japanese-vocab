import { Outlet } from "remix";

export default function PracticeRoute() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Let's learn some Japanese</h1>
      <Outlet />
    </div>
  );
}
