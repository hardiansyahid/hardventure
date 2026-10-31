"use client";

export function CopyrightYear() {
  return <>{process.env.NEXT_PUBLIC_YEAR ?? ""}</>;
}
