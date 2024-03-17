import { Outlet } from "react-router-dom";
import DashboardLayout from "../../layouts/dashboard/layout";

export const dashboardRoutes = [
  {
    path: "dashboard",
    element: (
      <DashboardLayout>
        <Outlet />
      </DashboardLayout>
    ),
    children: [
      {
        index: true,
        element: <h1>dashboard</h1>,
      },
    ],
  },
];
