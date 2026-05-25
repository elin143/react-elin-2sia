export default function Alert({ type = "info", title, children }) {
    const types = {
        info: "bg-blue-50 border-blue-500 text-blue-700",
        success: "bg-green-50 border-green-500 text-green-700",
        warning: "bg-yellow-50 border-yellow-500 text-yellow-700",
        danger: "bg-red-50 border-red-500 text-red-700",
    };

    return (
        <div className={`${types[type]} border-l-4 rounded-lg p-4 mb-4`}>
            <h3 className="font-bold mb-1">{title}</h3>
            <p className="text-sm">{children}</p>
        </div>
    );
}
