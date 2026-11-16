'use client'
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function NotFound() {
  const router = useRouter();
  useEffect(() => {
    const redictUser = setTimeout(() => {
      router.push("/");
    }, 3000);
    return () => clearTimeout(redictUser);
  }, [router]);
  return (
    <div className="bg-background flex flex-col gap-4 justify-center items-center min-h-screen">
      <h1 className="text-3xl  font-bold text-brand-800">
        404 - Page Not Found
      </h1>
      <p className="text-muted-foreground">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <div className="text-brand-700 flex gap-4  flex-row justify-center items-center">Redirecting you to Home page
         <div className="animate-spin w-5 h-5  rounded-full border-2 border-border border-t-brand-700"/> </div>
    </div>
  );
}

export default NotFound;
