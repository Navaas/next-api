import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

interface Todo {
  id: string;
  todo: string;
}

export const todos: Todo[] = [
  {
    id: "1",
    todo: "Laga mat",
  },
];

export async function POST(req: NextRequest) {
  const jsondata = await req.json();
  // todo: validera med zod

  // Spara till db
  const todo = { id: Date.now().toString(), ...jsondata };
  todos.push(todo);
  console.log(todos);

  revalidatePath("/");

  return NextResponse.json("👍", { status: 201 });
}
