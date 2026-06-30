"use client";
import AppDescription from "@/components/appDescription";
import LoginForm from "@/components/auth/loginForm";

export default function Home() {
  return (
    <div className="h-screen w-screen flex flex-col md:flex-row items-center">
      <div className="w-full md:w-1/2 h-full px-6 md:px-[72px] py-8 md:py-0">
        <LoginForm />
      </div>
      <div className="w-full md:w-1/2 h-full hidden md:block">
        <AppDescription />
      </div>
    </div>
  );
}
