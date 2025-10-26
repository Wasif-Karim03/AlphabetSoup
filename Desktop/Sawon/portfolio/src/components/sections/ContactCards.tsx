import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { loadContent } from "@/lib/content-loader";
import { ContactSchema } from "@/lib/schemas";
import { ContactCardsClient } from "./ContactCardsClient";

export async function ContactCards() {
  const content = await loadContent("contact.json", ContactSchema);

  return <ContactCardsClient content={content} />;
}
