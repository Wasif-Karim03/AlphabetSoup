import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What age groups do you serve?",
    answer:
      "We serve players from ages 8 to 16, with specialized programs for each age group: Starter (8-10), Development (11-13), and Performance (14-16). Each program has age-appropriate training focus and skill targets.",
  },
  {
    question: "How many sessions per week?",
    answer:
      "Training typically runs 4+ sessions per week during peak season (90-120 minutes each). We also offer seasonal camps and mini-tournaments. Specific schedules vary by age group and program.",
  },
  {
    question: "Where are training sessions held?",
    answer:
      "Training commonly takes place around Sector 11 park and nearby grounds in Uttara, Dhaka. We also organize optional turf bookings and indoor sessions at confirmed venues.",
  },
  {
    question: "Do you offer trial sessions?",
    answer:
      "Yes! We offer trial sessions for all new players. Contact us to schedule a free trial to assess your child's current level and recommend the appropriate program.",
  },
  {
    question: "What should players bring to training?",
    answer:
      "Players should bring cricket whites (for match days), water bottle, personal kit (if available), and any protective gear. Academy provides essential equipment including cones, nets, bowling targets, and practice balls.",
  },
  {
    question: "How do you track player progress?",
    answer:
      "We maintain progress tracking through regular assessments, video feedback sessions, fitness testing, and individual development plans. Parents receive session notes and simple at-home drills for consistent improvement.",
  },
];

export function FAQ() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
