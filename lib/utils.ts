import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getDeviconClaasName = (techName: string) => {
  const normalizedTechName = techName.replace(/[ .]/g, "").toLowerCase();

  const techMap: { [key: string]: string } = {
    javascript: "devicon-javascript-plain",
    typescript: "devicon-typescript-plain",
    react: "devicon-react-original",
    vue: "devicon-vuejs-plain",
    angular: "devicon-angularjs-plain",
    svelte: "devicon-svelte-plain",
  };

  return techMap[normalizedTechName]
    ? `${techMap[normalizedTechName]} colored`
    : "devicon-devicon-plain";
};

export const getTimeAgo = (date: Date): string => {
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const seconds = Math.floor(diff / 1000);

  // Define time intervals in seconds
  const intervals = {
    year: 31536000,
    month: 2592000,
    day: 86400,
    hour: 3600,
    minute: 60,
    second: 1,
  };

  // For timestamps less than 1 second ago
  if (seconds < 1) {
    return "Just Now";
  }

  // Find the appropriate time interval
  for (const [unit, secondsInUnit] of Object.entries(intervals)) {
    const value = Math.floor(seconds / secondsInUnit);

    if (value >= 1) {
      return `${value} ${unit}${value === 1 ? "" : "s"} ago`;
    }
  }

  return "Just Now";
};
