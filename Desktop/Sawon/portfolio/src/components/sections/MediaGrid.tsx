import { Gallery } from "@/lib/schemas";
import { MediaGridClient } from "./MediaGridClient";

export function MediaGrid() {
  const content = require("@/content/gallery.json");
  
  return <MediaGridClient content={content as Gallery} />;
}
