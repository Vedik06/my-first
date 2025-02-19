import { greet } from "./actions"
import GreetingForm from "./components/GreetingForm"
import ExplanationSection from "./components/ExplanationSection"

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Greeting App</h1>
      <GreetingForm greetAction={greet} />
      <ExplanationSection />
    </main>
  )
}

