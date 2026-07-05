"use client";

import { useEffect, useRef, useState } from "react";

interface TaskActionsProps {
  onEdit?: () => void;
  onDelete?: () => void;
}

export default function TaskActions({ onEdit, onDelete }: TaskActionsProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        className="text-gray-500"
        onClick={() => setOpen((s) => !s)}
        aria-expanded={open}
        aria-haspopup="true"
      >
        ⋯
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-32 z-50">
          <div
            className="time-actions-popup"
            style={{
              background: "#ffffff",
              borderRadius: 8,
              overflow: "hidden",
              boxShadow: "0 6px 18px rgba(16,24,40,0.08)",
            }}
          >
            <button
              type="button"
              className="block w-full text-left px-3 py-2 text-sm text-gray-800 hover:bg-gray-50"
              onClick={() => {
                setOpen(false);
                onEdit?.();
              }}
            >
              Edit
            </button>

            <button
              type="button"
              className="block w-full text-left px-3 py-2 text-sm text-red-600 font-medium hover:bg-gray-50"
              onClick={() => {
                setOpen(false);
                onDelete?.();
              }}
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
}