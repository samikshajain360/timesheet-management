"use client";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
} from "@mui/material";
import { useState } from "react";
import { IoIosClose, IoIosAdd, IoIosRemove } from "react-icons/io";
import CustomDropdown from "@/components/common/CustomDropdown";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function AddEntryModal({
  open,
  onClose,
}: Props) {
  const [hours, setHours] = useState(12);
  const [selectedProject, setSelectedProject] = useState("");
  const [selectedWorkType, setSelectedWorkType] = useState("");

  const projectOptions = [
    { value: "project1", label: "Project Name" },
  ];

  const workTypeOptions = [
    { value: "bug-fixes", label: "Bug fixes" },
  ];

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
          Add New Entry
        </span>

        <IconButton onClick={onClose}>
         <IoIosClose color={"#9CA3AF"} />
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
                onClick={() =>
                  setHours((prev) =>
                    Math.max(0, prev - 1)
                  )
                }
                className="h-9 w-8 flex items-center justify-center border-r border-gray-300 bg-gray-100 text-gray-900"
              >
                <IoIosRemove size={18} color={"#111928"} />
              </button>

              <div className="flex text-sm h-9 w-12 items-center justify-center text-gray-500">
                {hours}
              </div>

              <button
                type="button"
                onClick={() =>
                  setHours((prev) => prev + 1)
                }
                className="h-9 w-8 flex items-center justify-center border-l border-gray-300 bg-gray-100 text-gray-900"
              >
                <IoIosAdd size={18} color={"#111928"} />
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

        <button onClick={onClose} className="h-9 flex-1 rounded-lg bg-primary-600 text-white text-sm">
          Add Entry
        </button>
      </DialogActions>
    </Dialog>
  );
}