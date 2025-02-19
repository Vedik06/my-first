import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function ExplanationSection() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>How does this app work?</AccordionTrigger>
        <AccordionContent>
          <p className="mb-2">
            This app demonstrates the use of Next.js 15.1 features, server actions, and Shadcn UI components:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Server Actions:</strong> The form submission is handled by a server action (greet function) that
              processes the input and returns a greeting message.
            </li>
            <li>
              <strong>Shadcn UI Components:</strong> We use Input, Button, Card, and Accordion components from Shadcn UI
              for consistent styling.
            </li>
            <li>
              <strong>Next.js 15.1 Features:</strong> This app leverages the App Router, server components, and client
              components for efficient rendering and data fetching.
            </li>
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

