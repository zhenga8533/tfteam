import { ExternalLink } from "lucide-react";
import type { ContentSource } from "@/content/types";

/** A link to the site that content is based on, e.g. "Based on {site}". */
export function SourceCredit({ source, label }: { source: ContentSource; label: string }) {
  return (
    <a
      href={source.url}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-1 underline-offset-2 hover:text-foreground hover:underline"
    >
      {label} {source.name} <ExternalLink className="size-3" />
    </a>
  );
}
