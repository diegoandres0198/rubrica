


"use client";

import { useState } from "react";

type Task = {
  id: number;
  text: string;
  completed: boolean;
};

export default function Home() {
  feat/delete-task
  function deleteTask(id: string) {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    }
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert h-5 w-[100px]"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            To get started, edit the{" "}
            <code className="rounded bg-black/[.06] px-1.5 py-0.5 font-mono text-[0.9em] dark:bg-white/[.08]">
              page.tsx
            </code>{" "}
            file.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert h-[14px] w-4"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={14}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
  
            Documentation
          </a>
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, text: "Estudiar para el examen", completed: false },
    { id: 2, text: "Entregar trabajo", completed: false },
  ]);
  const [newTaskText, setNewTaskText] = useState("");
  const [editingTaskId, setEditingTaskId] = useState<number | null>(null);

// Crea una nueva tarea cuando el usuario presiona Enter y el texto no está vacío
  function handleAddTask(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key !== "Enter") return;

    const trimmedText = newTaskText.trim();
    if (trimmedText === "") return;

    const newTask: Task = {
      id: Date.now(),
      text: trimmedText,
      completed: false,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
    setNewTaskText("");
  }
  return (
    <main className="min-h-screen bg-slate-100 px-6 py-10">
      <div className="mx-auto max-w-2xl">
        <div className="rounded-2xl bg-white p-8 shadow-md">

          {/* Encabezado */}
          <div className="mb-8 text-center">
            <h1 className="mb-2 text-3xl font-bold text-slate-800">
              Mis tareas
            </h1>

            <p className="text-slate-500">
              Organiza tus actividades de forma sencilla
            </p>
          </div>

          {/* Campo para agregar tareas */}
          <input
            type="text"
            placeholder="Escribe una tarea y presiona Enter..."
            className="mb-6 w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
          value={newTaskText}
          onChange={(e) => setNewTaskText(e.target.value)}
          onKeyDown={handleAddTask}
	  maxLength={100}
          />

          {/* Lista de tareas */}
          <div className="space-y-3">

{tasks.map((task) => (
  <div
    key={task.id}
    className="flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-200 hover:bg-blue-50"
  >
    <div className="flex items-center gap-3">
      <input
        type="checkbox"
        className="h-5 w-5 cursor-pointer accent-blue-600"
        checked={task.completed}
        onChange={() =>
          setTasks((prevTasks) =>
            prevTasks.map((t) =>
              t.id === task.id ? { ...t, completed: !t.completed } : t
            )
          )
        }
      />

      {editingTaskId === task.id ? (
  <input
    type="text"
    value={task.text}
    autoFocus
    maxLength={100}
    className="rounded border border-blue-300 px-2 py-1 text-slate-800 outline-none"
    onChange={(e) =>
      setTasks((prevTasks) =>
        prevTasks.map((t) =>
          t.id === task.id ? { ...t, text: e.target.value } : t
        )
      )
    }
    onBlur={() => {
  setTasks((prevTasks) =>
    prevTasks.map((t) =>
      t.id === task.id ? { ...t, text: t.text.trim() } : t
    )
  );
  setEditingTaskId(null);
}}
    onKeyDown={(e) => {
      if (e.key === "Enter") {
        setEditingTaskId(null);
      }
    }}
  />
) : (
  <span
    onClick={() => setEditingTaskId(task.id)}
    className={
      task.completed
        ? "cursor-pointer text-slate-400 line-through"
        : "cursor-pointer text-slate-700"
    }
  >
    {task.text}
  </span>
)}    </div>

    <button
      type="button"
      className="rounded-lg px-3 py-2 text-sm font-medium text-slate-500 transition hover:bg-red-50 hover:text-red-500"
    >
      Eliminar
    </button>
  </div>
))}
          </div>
main
        </div>
      </div>
    </main>
  );
              </button>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

