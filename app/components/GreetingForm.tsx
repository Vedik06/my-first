"use client"
import { useFormState, useFormStatus } from "react-dom"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface GreetingFormProps {
  greetAction: (prevState: any, formData: FormData) => Promise<string>
}

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? "Submitting..." : "Submit"}
    </Button>
  )
}

export default function GreetingForm({ greetAction }: GreetingFormProps) {
  const [state, formAction] = useFormState(greetAction, null)

  return (
    <Card className="mb-6">
      <CardContent className="pt-6">
        <form action={formAction} className="space-y-4">
          <Input type="text" name="name" placeholder="Enter your name" required />
          <SubmitButton />
        </form>
        {state && <p className="mt-4 text-lg font-semibold">{state}</p>}
      </CardContent>
    </Card>
  )
}

