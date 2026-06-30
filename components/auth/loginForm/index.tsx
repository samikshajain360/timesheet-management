import { useState } from "react";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { LoginFormValues } from "@/types/propsTypes";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const initialValues: LoginFormValues = {
  email: "",
  password: "",
  rememberMe: false,
};

export default function LoginForm() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (values: LoginFormValues) => {
    const result = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
    });

    if (result?.ok) {
      router.push("/dashboard");
    } else {
      toast.error("Invalid credentials");
    }
  };

  return (
    <div className="flex flex-col justify-center h-full w-full">
      <h1 className="text-[20px] font-bold text-gray-900">Welcome back</h1>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, handleChange, touched, errors, isSubmitting }) => (
          <Form className="w-full max-w-md space-y-5 mt-5">
            <Input
              label="Email"
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
              error={touched.email ? errors.email : ""}
              placeholder="name@example.com"
            />

            <div className="relative">
              <Input
                label="Password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={values.password}
                onChange={handleChange}
                error={touched.password ? errors.password : ""}
                placeholder="••••••••••"
                additionalClasses="pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-[40px] text-gray-400 hover:text-gray-600"
              >
                {showPassword ? (
                  <IoIosEyeOff size={20} />
                ) : (
                  <IoIosEye size={20} />
                )}
              </button>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="rememberMe"
                name="rememberMe"
                checked={values.rememberMe}
                onChange={handleChange}
                className="h-4 w-4 rounded border-gray-300 border-[0.5px] bg-gray-50 text-primary-600 focus:ring-primary-600 cursor-pointer"
              />
              <label
                htmlFor="rememberMe"
                className="ml-2 block text-sm font-medium text-gray-500"
              >
                Remember me
              </label>
            </div>

            <div>
              <Button type="submit" loading={isSubmitting}>
                Sign In
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
