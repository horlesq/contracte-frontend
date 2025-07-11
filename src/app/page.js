"use client"; // This page uses client-side hooks

import React from "react";
import { useRouter } from "next/navigation";
import HeroSection from "../components/Hero"; 

export default function HomePage() {
    const router = useRouter();

    return (
        <div>
            <HeroSection />
            {/* You can add other components or content here */}
        </div>
    );
}
