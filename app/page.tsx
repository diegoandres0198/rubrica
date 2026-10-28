"use client";

import { useState } from "react";

type Task = {
  id: string;
  text: string;
  completed: boolean;
};

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: "1", text: "Tarea de ejemplo", completed: false },
  ]);
  const [newTaskText, setNewTaskText] = useState("");
  const [deletedTasks, setDeletedTasks] = useState<Task[]>([]);

  function addTask() {
    const text = newTaskText.trim();
    if (text === "") return;

    const newTask: Task = {
      id: Date.now().toString(),
      text,
      completed: false,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
    setNewTaskText("");
  }

  function toggleTask(id: string) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  function deleteTask(id: string) {
    const taskToDelete = tasks.find((task) => task.id === id);
    if (!taskToDelete) return;

    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    setDeletedTasks((prevDeleted) => [...prevDeleted, taskToDelete]);
  }

  return (
    <div className="flex min-h-screen flex-col items-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full max-w-md flex-col gap-6 px-6 py-16">
        <h1 className="text-2xl font-semibold text-black dark:text-zinc-50">
          Mi lista de tareas
        </h1>

        <div className="flex gap-2">
          <input
            type="text"
            value={newTaskText}
            onChange={(e) => setNewTaskText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addTask()}
            placeholder="Escribe una nueva tarea..."
            className="flex-1 rounded-lg border border-zinc-300 px-3 py-2 text-black outline-none focus:border-zinc-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50"
          />
          <button
            onClick={addTask}
            className="rounded-lg bg-black px-4 py-2 font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
          >
            Agregar
          </button>
        </div>

        <ul className="flex flex-col gap-2">
          {tasks.length === 0 && (
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              No hay tareas todavía.
            </p>
          )}

          {tasks.map((task) => (
            <li
              key={task.id}
              className="flex items-center justify-between rounded-lg border border-zinc-200 px-3 py-2 dark:border-zinc-800"
            >
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(task.id)}
                  className="h-4 w-4"
                />
                <span
                  className={
                    task.completed
                      ? "text-zinc-400 line-through dark:text-zinc-600"
                      : "text-black dark:text-zinc-50"
                  }
                >
                  {task.text}
                </span>
              </div>

              <button
                onClick={() => deleteTask(task.id)}
                className="rounded px-2 py-1 text-sm text-red-600 transition-colors hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-950"
                aria-label={`Eliminar tarea: ${task.text}`}
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>

        <div className="flex flex-col gap-2 border-t border-zinc-200 pt-4 dark:border-zinc-800">
          <h2 className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
            Papelera ({deletedTasks.length}{" "}
            {deletedTasks.length === 1 ? "tarea eliminada" : "tareas eliminadas"})
          </h2>

          {deletedTasks.length === 0 ? (
            <p className="text-sm text-zinc-400 dark:text-zinc-600">
              La papelera está vacía.
            </p>
          ) : (
            <ul className="flex flex-col gap-1">
              {deletedTasks.map((task) => (
                <li
                  key={task.id}
                  className="rounded-lg bg-zinc-100 px-3 py-2 text-sm text-zinc-500 line-through dark:bg-zinc-900 dark:text-zinc-500"
                >
                  {task.text}
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>
    </div>
  );
}
