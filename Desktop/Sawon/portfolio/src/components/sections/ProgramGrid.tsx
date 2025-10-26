import { loadContent } from "@/lib/content-loader";
import { ProgramsSchema } from "@/lib/schemas";
import { ProgramGridClient } from "./ProgramGridClient";

export async function ProgramGrid() {
  const content = await loadContent("programs.json", ProgramsSchema);

  return <ProgramGridClient programs={content.programs} />;
}
