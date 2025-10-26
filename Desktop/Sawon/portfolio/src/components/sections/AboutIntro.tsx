import { loadContent } from "@/lib/content-loader";
import { AboutSchema } from "@/lib/schemas";
import { AboutIntroClient } from "./AboutIntroClient";

export async function AboutIntro() {
  const content = await loadContent("about.json", AboutSchema);

  return <AboutIntroClient bio={content.bio} />;
}
