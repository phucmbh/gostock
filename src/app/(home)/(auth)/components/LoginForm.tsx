"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginBody, LoginBodyType } from "@/validation/auth.schema";
import { Button, Input } from "@/components";
import PATH from "@/utils/constant/path";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginBodyType>({
    resolver: zodResolver(LoginBody),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: LoginBodyType) => {
    router.push(PATH.DASHBOARD);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full space-y-2 lg:max-w-[500px]"
      noValidate
    >
      <Input
        name="email"
        register={register}
        errorMessage={errors.email?.message}
        placeholder="Email"
      />
      <Input
        name="password"
        register={register}
        errorMessage={errors.password?.message}
        placeholder="Password"
      />

      <div className="text-center">
        <Button>Login</Button>
      </div>
    </form>
  );
};
export default LoginForm;
