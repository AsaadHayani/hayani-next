"use client";
import { FormEvent, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import { LuTrash2 } from "react-icons/lu";
import {
  MdOutlineRadioButtonChecked,
  MdOutlineRadioButtonUnchecked,
} from "react-icons/md";
import { v4 as uuidv4 } from "uuid";

interface Todo {
  id: string;
  completed: boolean;
  text: string;
}

function Page() {
  const [input, setInput] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newTodo: Todo = {
      id: uuidv4(),
      completed: false,
      text: input,
    };

    setTodos((prev) => [newTodo, ...prev]); // 🔥 إضافة للأعلى
    setInput("");
  };

  const handleItemUpdate = (id: string) => {
    const todo = todos.find((t) => t.id === id);
    const updatedText = prompt("Edit todo:", todo?.text);

    if (updatedText !== null) {
      setTodos((prev) =>
        prev.map((t) => (t.id === id ? { ...t, text: updatedText } : t))
      );
    }
  };

  const handleItemDone = (id: string) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const handleItemDelete = (id: string) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <section className="my-width text-center">
      <h2 className="my-title my-4">To Do List</h2>
      <form
        onSubmit={handleAddTodo}
        className="p-6 space-y-3 border my-border rounded-md"
      >
        {todos.length !== 0 ? (
          todos.map((item) => (
            <div
              key={item.id}
              className="px-3 py-2 flex justify-between items-center w-full border my-border rounded"
            >
              <button onClick={() => handleItemDone(item.id)}>
                {item.completed ? (
                  <MdOutlineRadioButtonChecked
                    size={25}
                    className="cursor-pointer dark:text-white text-black"
                  />
                ) : (
                  <MdOutlineRadioButtonUnchecked
                    size={25}
                    className="cursor-pointer dark:text-white text-black"
                  />
                )}
              </button>
              <span className="text-2xl transition-all duration-300 hover:scale-110">
                {item.text}
              </span>
              <div className="flex gap-5">
                <FiEdit
                  onClick={() => handleItemUpdate(item.id)}
                  size={25}
                  className="my-text cursor-pointer"
                />
                <LuTrash2
                  onClick={() => handleItemDelete(item.id)}
                  className="text-red-600 cursor-pointer"
                  size={25}
                />
              </div>
            </div>
          ))
        ) : (
          <p className="text-xl">No Items Found!</p>
        )}

        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter Item"
        />

        <button type="submit" className="w-full my-bg">
          Add Item
        </button>
      </form>
    </section>
  );
}

export default Page;
