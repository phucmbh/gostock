import Link from "next/link";
import { RegisterForm } from "../../components";
import PATH from "@/utils/constant/path";

const RegisterPage = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <p className="text-xs text-semiblack">Start for free</p>
        <h1 className="text-2xl font-semibold text-semiblack">
          Sign up to GoStock
        </h1>
      </div>

      <RegisterForm />
      <div className="mt-5 flex gap-2 text-semiblack">
        <p>Already have an account?</p>
        <Link href={PATH.LOGIN} className="text-link">
          Login
        </Link>
      </div>
    </div>
  );
};
export default RegisterPage;
