"use server"

export async function greet(prevState: any, formData: FormData) {
  const name = formData.get("name") as string
  return `Hello ${name}!`
}

