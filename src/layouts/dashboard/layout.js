import NavDashboard from "../components/nav";

export default function DashboardLayout({ children }) {
  return (
    <>
      <div className="">
        <NavDashboard />

        {children}
      </div>
    </>
  );
}
