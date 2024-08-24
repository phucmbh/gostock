"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterBody, RegisterBodyType } from "@/validation/auth.schema";
import { Input } from "@/components";

const LoginForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<RegisterBodyType>({
    resolver: zodResolver(RegisterBody),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (values: RegisterBodyType) => {
    console.log(values.name);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full space-y-2 lg:max-w-[500px]"
      noValidate
    >
      <Input
        name="name"
        register={register}
        errorMessage={errors.name?.message}
        placeholder="Name"
      />
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
      <Input
        name="confirmPassword"
        register={register}
        errorMessage={errors.confirmPassword?.message}
        placeholder="Re-enter your password"
      />

      <div className="text-center">
        <button
          type="submit"
          className="rounded bg-semiblack px-5 py-1 text-semiwhite"
        >
          Login
        </button>
      </div>
    </form>
  );
};
export default LoginForm;
