"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterBody, RegisterBodyType } from "@/validation/auth.schema";
import { Button, Input } from "@/components";
import { useRouter } from "next/navigation";
import PATH from "@/utils/constant/path";

const RegisterForm = () => {
  const router  = useRouter()
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

  const onSubmit = async (values: RegisterBodyType) => {
    console.log(values.name);
    router.push(PATH.DASHBOARD)
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
        type="password"
        register={register}
        errorMessage={errors.password?.message}
        placeholder="Password"
      />
      <Input
        name="confirmPassword"
        type="password"
        register={register}
        errorMessage={errors.confirmPassword?.message}
        placeholder="Re-enter your password"
      />

      <div className="text-center">
        <Button>Sign up</Button>
      </div>
    </form>
  );
};
export default RegisterForm;
