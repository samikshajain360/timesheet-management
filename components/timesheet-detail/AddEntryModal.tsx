"use client";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
} from "@mui/material";
import { useEffect, useState } from "react";
import { IoIosClose, IoIosAdd, IoIosRemove } from "react-icons/io";
import CustomDropdown from "@/components/common/CustomDropdown";

const PROJECT_OPTIONS = [
  { value: "Project Alpha", label: "Project Alpha" },
  { value: "Project Beta", label: "Project Beta" },
  { value: "Project Gamma", label: "Project Gamma" },
  { value: "Project Delta", label: "Project Delta" },
  { value: "Project Epsilon", label: "Project Epsilon" },
  { value: "Project Zeta", label: "Project Zeta" },
  { value: "Project Omega", label: "Project Omega" },
  { value: "Project Mobile", label: "Project Mobile" },
  { value: "Project DevOps", label: "Project DevOps" },
  { value: "Project Security", label: "Project Security" },
  { value: "Project Data", label: "Project Data" },
  { value: "Project UX", label: "Project UX" },
  { value: "Project New", label: "Project New" },
  { value: "Project Backend", label: "Project Backend" },
  { value: "Project Web", label: "Project Web" },
  { value: "Project Maintenance", label: "Project Maintenance" },
];

const WORKTYPE_OPTIONS = [
  {
    value: "bug-fixes",
    label: "Bug fixes",
  },
];

interface TaskFormData {
  id?: string;
  projectName: string;
  workType: string;
  description: string;
  hours: number;
}

interface Props {
  open: boolean;
  onClose: () => void;
  onAddTask?: (task: TaskFormData) => void;
  onUpdateTask?: (task: TaskFormData & { id: string }) => void;
  taskToEdit?: (TaskFormData & { id: string }) | null;
}

export default function AddEntryModal({
  open,
  onClose,
  onAddTask,
  onUpdateTask,
  taskToEdit,
}: Props) {
  const [hours, setHours] = useState(8);
  const [selectedProject, setSelectedProject] = useState("");
  const [selectedWorkType, setSelectedWorkType] = useState("");
  const [description, setDescription] = useState("");

  const projectOptions = PROJECT_OPTIONS;
  const workTypeOptions = WORKTYPE_OPTIONS;
useEffect(() => {
  if (!open) return;

  if (taskToEdit) {
    // Find matching project by label
    const project = PROJECT_OPTIONS.find(
      (p) => p.label === taskToEdit.projectName
    );

    setSelectedProject(project?.value ?? "");

    // Existing tasks don't have workType, so default to first option
    if ("workType" in taskToEdit && taskToEdit.workType) {
      const workType = WORKTYPE_OPTIONS.find(
        (w) => w.label === taskToEdit.workType
      );

      setSelectedWorkType(workType?.value ?? WORKTYPE_OPTIONS[0].value);
    } else {
      setSelectedWorkType(WORKTYPE_OPTIONS[0].value);
    }

    setDescription(taskToEdit.description ?? "");
    setHours(taskToEdit.hours ?? 8);
  } else {
    // Reset form for Add mode
    setHours(8);
    setSelectedProject("");
    setSelectedWorkType(WORKTYPE_OPTIONS[0].value);
    setDescription("");
  }
}, [open, taskToEdit]);

  const handleSubmit = () => {
    if (!selectedProject || !selectedWorkType || !description) return;

    const taskData = {
      id: taskToEdit?.id,
      projectName:
        PROJECT_OPTIONS.find((p) => p.value === selectedProject)?.label || "",
      workType:
        WORKTYPE_OPTIONS.find((w) => w.value === selectedWorkType)?.label || "",
      description,
      hours,
    };

    if (taskToEdit?.id) {
      onUpdateTask?.(taskData as TaskFormData & { id: string });
    } else {
      onAddTask?.(taskData);
    }

    setHours(8);
    setSelectedProject("");
    setSelectedWorkType("");
    setDescription("");
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
      sx={{
        "& .MuiDialog-paper": {
          borderRadius: "8px",
          margin: "16px",
          maxHeight: "90vh",
        },
      }}
    >
      {/* Header */}
      <DialogTitle className="flex items-center justify-between border-b border-gray-300 h-[60px] sm:h-[67px] px-4">
        <span className="text-[16px] sm:text-[18px] font-semibold text-gray-900">
          {taskToEdit ? "Edit Entry" : "Add New Entry"}
        </span>

        <IconButton onClick={onClose}>
          <IoIosClose color="#9CA3AF" />
        </IconButton>
      </DialogTitle>

      {/* Body */}
      <DialogContent className="pt-4 sm:pt-6! px-4">
        <div className="space-y-4 sm:space-y-6">
          {/* Project */}
          <CustomDropdown
            label="Select Project *"
            value={selectedProject}
            onChange={setSelectedProject}
            options={projectOptions}
            className="w-full text-sm!"
            placeholder="Select Project"
          />

          {/* Work Type */}
          <CustomDropdown
            label="Type of Work *"
            value={selectedWorkType}
            onChange={setSelectedWorkType}
            options={workTypeOptions}
            className="w-full text-sm!"
            placeholder="Select Work Type"
          />

          {/* Description */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-900">
              Task description *
            </label>

            <textarea
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Write text here ..."
              className="w-full rounded-md border border-gray-300 p-3 sm:p-4 outline-none text-sm"
            />

            <p className="mt-2 text-xs text-gray-500">
              A note for extra info
            </p>
          </div>

          {/* Hours */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-900">
              Hours *
            </label>

            <div className="flex w-fit overflow-hidden rounded-md border border-gray-300">
              <button
                type="button"
                onClick={() => setHours((prev) => Math.max(0, prev - 1))}
                className="h-9 w-8 flex items-center justify-center border-r border-gray-300 bg-gray-100 text-gray-900"
              >
                <IoIosRemove size={18} color="#111928" />
              </button>

              <div className="flex text-sm h-9 w-12 items-center justify-center text-gray-500">
                {hours}
              </div>

              <button
                type="button"
                onClick={() => setHours((prev) => prev + 1)}
                className="h-9 w-8 flex items-center justify-center border-l border-gray-300 bg-gray-100 text-gray-900"
              >
                <IoIosAdd size={18} color="#111928" />
              </button>
            </div>
          </div>
        </div>
      </DialogContent>

      {/* Footer */}
      <DialogActions className="border-t border-gray-300 p-4 sm:p-5!">
        <button
          onClick={onClose}
          className="h-9 flex-1 rounded-lg border border-gray-300 text-sm"
        >
          Cancel
        </button>

        <button
          onClick={handleSubmit}
          disabled={
            !selectedProject || !selectedWorkType || !description
          }
          className="h-9 flex-1 rounded-lg bg-[#1A56DB] text-white text-sm disabled:opacity-50"
        >
          {taskToEdit ? "Save Changes" : "Add Entry"}
        </button>
      </DialogActions>
    </Dialog>
  );
}