import DashboardLayout from "../../../components/Layouts/DashboardLayout";

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
    <DashboardLayout>{page}</DashboardLayout>
  )
}
