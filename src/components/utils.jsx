// Simple className merge helper (like clsx)
export function cn(...classes) {
  return classes
    .flat()
    .filter(Boolean)
    .join(" ");
}
