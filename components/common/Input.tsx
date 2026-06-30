import { InputProps } from "@/types/propsTypes";

export default function Input({
  label,
  name,
  type = "text",
  placeholder,
  error,
  value,
  onChange,
  additionalClasses = "",
}: InputProps) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-[14px] font-medium text-gray-900"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={`w-full rounded-lg border px-4 h-[42px] flex items-center border-gray-300 text-[14px] placeholder:text-gray-500 outline-none ${additionalClasses}`}
      />

      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
}
