import { clsx } from "clsx";
import { useEffect, useMemo } from "react";

export function Footer() {
  const searchParams = new URLSearchParams();
  searchParams.set("utm_campaign", "voidfull-link");
  searchParams.set("utm_content", "Powered by Voidfull");
  searchParams.set("utm_medium", "static-site");
  searchParams.set("utm_source", "desktop-web");

  const link = useMemo(() => {
    const url = "https://voidfull.com";
    return `${url}?${searchParams.toString()}`;
  }, [searchParams]);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    searchParams.set("utm_referrer", encodeURI(window.location.href));
  }, []);

  return (
    <div className={clsx("max-w-screen-md mx-auto px-4")}>
      <footer className="flex items-center justify-center">
        <a
          href={link}
          className={clsx(
            "px-3 py-1.5",
            "hover:bg-gray-100/70 rounded-md",
            "flex items-center",
            "space-x-1",
          )}
        >
          <div className={clsx("w-3.5 h-3.5")}>
            <img
              className={clsx("w-3.5 h-3.5 grayscale")}
              src="/voidfull.svg"
              alt="Voidfull Logo"
              loading="lazy"
              decoding="async"
              aria-hidden={true}
            />
          </div>
          <span className={clsx("text-xs text-gray-500")}>
            Powered by Voidfull
          </span>
        </a>
      </footer>
    </div>
  );
}
