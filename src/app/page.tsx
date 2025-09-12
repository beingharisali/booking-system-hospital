import ProfileForm from "./components/ProfileForm";
import ProfileTable from "./components/ProfileTable";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <ProfileForm />
      <ProfileTable />
    </div>
  );
}
