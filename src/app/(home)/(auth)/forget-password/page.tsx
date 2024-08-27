import { ForgetPasswordForm } from "../components";

const ForgetPasswordPage = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <p className="text-xs text-semiblack">Start for free</p>
        <h1 className="text-2xl font-semibold text-semiblack">
          Sign Up to GoStock
        </h1>
      </div>

      <ForgetPasswordForm />
    </div>
  );
};
export default ForgetPasswordPage;
