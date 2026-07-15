"use client";

import { useEffect } from "react";
import socket from "@/lib/socket";

export default function Home() {
  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected:", socket.id);
    });

    return () => {
      socket.off("connect");
    };
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center">
      <h1 className="text-4xl font-bold">
        AuraGen 🚀
      </h1>
    </main>
  );
}