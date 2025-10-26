import { loadContent } from "@/lib/content-loader";
import { AboutSchema } from "@/lib/schemas";
import { QuickFactsClient } from "./QuickFactsClient";

export async function QuickFacts() {
  const content = await loadContent("about.json", AboutSchema);

  return <QuickFactsClient quickFacts={content.quickFacts} />;
}
