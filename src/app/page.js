"use client"; // This page uses client-side hooks

import React from "react";
import { useRouter } from "next/navigation";
import HeroSection from "../components/Hero";
import BenefitsSection from "@/components/Benefits";
import PreviewSection from "@/components/Preview";

export default function HomePage() {
    const router = useRouter();

    return (
        <div>
            <HeroSection />
            <BenefitsSection />
            <PreviewSection />
        </div>
    );
}
