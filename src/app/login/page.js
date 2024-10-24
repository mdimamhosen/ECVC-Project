"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import React, { useEffect, useState } from "react";
import Template from "../../Components/Auth/Template";

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
    <div>
      <Template
        title="Welcome to English Care and Education Consultancy"
        description1="Your trusted partner for navigating education visa processes."
        description2="Empowering students to achieve their dreams abroad."
        formType="login"
      />
    </div>
  );
};

export default Page;
