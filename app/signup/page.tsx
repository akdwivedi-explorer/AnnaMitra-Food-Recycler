"use client";

import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { IconBrandGoogle } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

export function Signup() {
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!firstname || !email || !contact || !password) {
      setError("All fields are required.");
      return;
    }

    localStorage.setItem("authToken", "dummy-auth-token");
    router.push("/dashboard"); // Redirect to dashboard
  };

  const handleGoogleSignUp = () => {
    localStorage.setItem("authToken", "google-auth-token");
    router.push("/dashboard"); // Redirect to dashboard
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#000F11] bg-opacity-90  p-4">
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input mt-20 bg-white">
      <h2 className="font-bold text-xl text-neutral-800">Welcome to Anna Mitra</h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2">
        Sign up to Anna Mitra to save food and give life to needy people.
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4 pt-5">
          <LabelInputContainer>
            <Label htmlFor="firstname">First Name</Label>
            <Input
              id="firstname"
              placeholder="Tyler"
              type="text"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
          </LabelInputContainer>
        </div>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            placeholder="projectmayhem@fc.com"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="contact">Contact Number</Label>
          <Input
            id="contact"
            placeholder="+911234564789"
            type="text"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            pattern="[0-9]*"
            inputMode="numeric"
          />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Create Password</Label>
          <Input
            id="password"
            placeholder="••••••••"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br from-gray-800 to-gray-600 block w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset]"
          type="submit"
        >
          Sign up &rarr;
          <BottomGradient />
        </button>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 to-transparent my-8 h-[1px] w-full" />

        <div className="flex flex-col space-y-4">
          <button
            className="relative flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-100"
            type="button"
            onClick={handleGoogleSignUp}
          >
            <IconBrandGoogle className="h-4 w-4 text-neutral-800" />
            <span className="text-neutral-700 text-sm">Sign up with Google</span>
            <BottomGradient />
          </button>
        </div>
      </form>
    </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

export default Signup;
