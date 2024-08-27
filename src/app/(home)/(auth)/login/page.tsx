import Link from "next/link";
import PATH from "@/utils/constant/path";
import { LoginForm } from "../components";

const LoginPage = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <p className="text-xs text-semiblack">Start for free</p>
        <h1 className="text-2xl font-semibold text-semiblack">
          Login to GoStock
        </h1>
      </div>

      <LoginForm />
      <div className="mt-5 flex gap-2 text-semiblack">
        <p>Don’t have any account?</p>
        <Link href={PATH.REGISTER} className="text-link hover:underline">
          Sign up
        </Link>
      </div>
    </div>
  );
};
export default LoginPage;
