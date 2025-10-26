import { loadContent } from "@/lib/content-loader";
import { AboutSchema } from "@/lib/schemas";
import { PhilosophyClient } from "./PhilosophyClient";

export async function Philosophy() {
  const content = await loadContent("about.json", AboutSchema);

  return <PhilosophyClient philosophy={content.philosophy} />;
}
