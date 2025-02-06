import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const logDev = (
  message: unknown,
  type: "log" | "error" | "warn" | "info" = "log",
) => {
  if (process.env.NODE_ENV === "development") {
    console[type](message);
  }
};
