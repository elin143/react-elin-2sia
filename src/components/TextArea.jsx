export default function TextArea({
    label,
    name,
    placeholder = "",
    rows = 4,
}) {
    return (
        <div className="mb-4">
            <label
                htmlFor={name}
                className="block text-sm font-semibold text-gray-700 mb-2"
            >
                {label}
            </label>

            <textarea
                id={name}
                name={name}
                rows={rows}
                placeholder={placeholder}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
    );
}
