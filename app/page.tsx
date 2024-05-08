import { TodoForm } from "./components/TodoForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8 gap-2">
      <h1 className="text-2xl">Todo Lista</h1>
      <ul>
        <li>Laga mat</li>
        <li>Dansa</li>
        <li>Shoppa</li>
      </ul>

      <TodoForm />
    </main>
  );
}
