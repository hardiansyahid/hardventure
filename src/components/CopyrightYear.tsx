"use client";

import { useEffect, useReducer } from "react";

function yearReducer(_state: number | null, action: number) {
  return action;
}

export function CopyrightYear() {
  const [year, setYear] = useReducer(yearReducer, null);
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);
  return <>{year ?? ""}</>;
}
