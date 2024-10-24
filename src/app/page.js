"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const { data: session, status } = useSession();
  const token = session?.user;
  console.log(token);
  const router = useRouter();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const delayTimer = setTimeout(() => {
      if (token) {
        router.replace("/dashboard/my-profile");
      } else {
        router.replace("/login");
        setLoading(false);
      }
    }, 2000);

    return () => clearTimeout(delayTimer);
  }, [token, router]);

  if (status === "loading" || loading) {
    return (
      <div className="w-screen min-h-[100vh] flex bg-slate-800 justify-center items-center text-gray-200 font-semibold text-lg">
        <span>Loading...</span>
      </div>
    );
  }
  return (
    <div className="w-screen min-h-[100vh] flex bg-slate-800 justify-center items-center text-gray-200 font-semibold text-lg"></div>
  );
}
