// app/providers.tsx
"use client";

import { NextUIProvider } from "@nextui-org/react";

export function NextProvider({ children }) {
  return <NextUIProvider className="h-full">{children}</NextUIProvider>;
}
