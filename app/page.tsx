


"use client";

import { useState } from "react";

type Task = {
  id: number;
  text: string;
  completed: boolean;
};

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, text: "Estudiar para el examen", completed: false },
    { id: 2, text: "Entregar trabajo", completed: false },
  ]);
  const [newTaskText, setNewTaskText] = useState("");
  const [editingTaskId, setEditingTaskId] = useState<number | null>(null);

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
    className="rounded border border-blue-300 px-2 py-1 text-slate-800 outline-none"
    onChange={(e) =>
      setTasks((prevTasks) =>
        prevTasks.map((t) =>
          t.id === task.id ? { ...t, text: e.target.value } : t
        )
      )
    }
    onBlur={() => setEditingTaskId(null)}
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
        </div>
      </div>
    </main>
  );
}

