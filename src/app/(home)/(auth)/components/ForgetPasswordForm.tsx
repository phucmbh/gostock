"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ForgetPasswordBody,
  ForgetPasswordType,
} from "@/validation/auth.schema";
import { Button, Input } from "@/components";
import { useRouter } from "next/navigation";
import PATH from "@/utils/constant/path";

const ForgetPasswordForm = () => {
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ForgetPasswordType>({
    resolver: zodResolver(ForgetPasswordBody),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (values: ForgetPasswordType) => {
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

      <div className="text-center">
        <Button>Submit</Button>
      </div>
    </form>
  );
};
export default ForgetPasswordForm;
