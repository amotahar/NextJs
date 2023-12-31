import DashboardLayout from "@/components/Layouts/DashboardLayout";
import RootLayout from "@/components/Layouts/RootLayout";

const Admin = () => {
  return (
    <div>
      <h1>This is Admin Pages</h1>
    </div>
  );
};

export default Admin;

Admin.getLayout = function getLayout(page) {
  return (
    <RootLayout><DashboardLayout>{page}</DashboardLayout></RootLayout>
  )
}
