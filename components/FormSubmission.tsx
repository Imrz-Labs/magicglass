"use client"
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const FormSubmission = () => {
    const router = useRouter();

    useEffect(() => {
      setTimeout(() => {
        router.push("/");
      }, 5000);
    }, []);
    
  return (
    <>
      <main className="m-auto text-white bg-blue flex h-screen w-full flex-col items-center justify-center gap-y-5 overflow-hidden pb-[-250px] text-center">
        <img src="/Success.png" width={250} height={250} />
        <div className="text-lg">Thank You!</div>
        <div className="text-base">Form submitted successfully.</div>
        <div>Redirecting...</div>
      </main>
    </>
  );
};
