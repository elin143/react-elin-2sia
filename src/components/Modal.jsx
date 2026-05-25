export default function Modal({ title, children }) {
    return (
        <div className="border border-gray-200 rounded-xl shadow bg-white p-6 max-w-md">
            <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-800">
                    {title}
                </h3>

                <button className="text-gray-400 hover:text-gray-600 text-xl leading-none">
                    x
                </button>
            </div>

            <div className="text-gray-600 mb-5">
                {children}
            </div>

            <div className="flex justify-end gap-2">
                <button className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700">
                    Batal
                </button>
                <button className="px-4 py-2 rounded-lg bg-blue-600 text-white">
                    Simpan
                </button>
            </div>
        </div>
    );
}
