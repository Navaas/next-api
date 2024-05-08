"use client";

import { FormEvent, useState } from "react";

export function TodoForm() {
  const [todo, setTodo] = useState("");

  const saveTodo = async (e: FormEvent) => {
    e.preventDefault();

    const response = await fetch("/api/todos", {
      headers: {
        "Content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ todo }),
    });
    setTodo("");
  };

  return (
    <form onSubmit={saveTodo}>
      <input
        type="text"
        placeholder="Vad ska du göra?"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button>Spara</button>
    </form>
  );
}
