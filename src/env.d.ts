import type {} from "../.astro/types";

interface Window {
  dataLayer: Record<string, unknown>[];
  gtag: (...args: unknown[]) => void;
}
