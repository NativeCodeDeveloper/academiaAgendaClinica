"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { SignUp } from "@clerk/nextjs";
import { isClerkDisabled } from "@/lib/clerk-local";

export default function Page() {
    if (isClerkDisabled) {
        return <LocalDevSignUpPage />;
    }

    return (
        <main className="min-h-screen flex items-center justify-center p-4">
            <SignUp />
        </main>
    );
}

function LocalDevSignUpPage() {
    const router = useRouter();

    useEffect(() => {
        router.replace("/dashboard");
    }, [router]);

    return (
        <main className="grid min-h-screen place-items-center bg-white">
            <div className="text-sm text-slate-400">Redirigiendo al dashboard...</div>
        </main>
    );
}
