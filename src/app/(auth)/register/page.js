"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Template from "../../../Components/Auth/Template";

const Page = () => {
  const { data: session, status } = useSession();
  const token = session?.user;
  const router = useRouter();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const delayTimer = setTimeout(() => {
      if (token) {
        router.replace("/");
      } else {
        setLoading(false);
      }
    }, 1500);

    return () => clearTimeout(delayTimer);
  }, [token, router]);

  if (status === "loading" || loading) {
    return (
      <div className="w-screen min-h-[calc(100vh-3.5rem)] flex bg-slate-800 justify-center items-center text-gray-200 font-semibold text-lg">
        <span>Loading...</span>
      </div>
    );
  }

  return (
    <div>
      <Template
        title="Pursue Your Dream Education with English Care"
        description1="Unlock opportunities to study abroad with personalized visa processing and educational consultation."
        description2="Join English Care and let us help you achieve your academic goals globally."
        formType="register"
      />
    </div>
  );
};

export default Page;
