import { RegisterForm } from "../../components/login-components/register-form";


export default function Index() {
  return (
    <div className="flex items-center justify-center w-full min-h-screen p-4 bg-gray-50">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <RegisterForm />
      </div>
    </div>
  );
}