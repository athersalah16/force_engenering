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
    <div className="bg-white flex flex-col gap-4 justify-center items-center min-h-screen">
      <h1 className="text-3xl  font-bold text-blue-700">
        404 - Page Not Found
      </h1>
      <p className="text-gray-600">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <div className="text-blue-500 flex gap-4  flex-row justify-center items-center">Redirecting you to Home page
         <div className="animate-spin w-5 h-5  rounded-full border-2 border-gray-200 border-t-blue-600"/> </div>
    </div>
  );
}

export default NotFound;
