import DocumentTitle from "../../components/DocumentTitle";
import { LogInForm } from "../../components/LoginForm/LoginForm";

export default function LoginPage() {
  return (
    <div>
      <DocumentTitle>Log in</DocumentTitle>
      <LogInForm />
    </div>
  );
}
