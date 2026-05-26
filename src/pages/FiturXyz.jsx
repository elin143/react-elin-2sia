import PageHeader from "../components/PageHeader";
import { useLocation } from "react-router-dom";

export default function FiturXyz() {
    const location = useLocation();

    const data = [
        {
            id: 1,
            kasus: "Burning Sun Scandal",
            artis: "Seungri",
            kategori: "Hukum",
            dampak: "Tinggi",
            tahun: "2019",
        },
        {
            id: 2,
            kasus: "HYBE vs ADOR",
            artis: "NewJeans",
            kategori: "Manajemen",
            dampak: "Tinggi",
            tahun: "2024",
        },
        {
            id: 3,
            kasus: "School Bullying Allegation",
            artis: "Kim Garam",
            kategori: "Kontroversi",
            dampak: "Sedang",
            tahun: "2022",
        },
        {
            id: 4,
            kasus: "Produce 101 Vote Manipulation",
            artis: "Mnet",
            kategori: "Media",
            dampak: "Tinggi",
            tahun: "2019",
        },
        {
            id: 5,
            kasus: "LOONA Contract Dispute",
            artis: "LOONA",
            kategori: "Kontrak",
            dampak: "Tinggi",
            tahun: "2023",
        },
        {
            id: 6,
            kasus: "EXO-CBX Lawsuit",
            artis: "EXO-CBX",
            kategori: "Kontrak",
            dampak: "Sedang",
            tahun: "2023",
        },
        {
            id: 7,
            kasus: "Dating Rumor",
            artis: "Karina",
            kategori: "Privasi",
            dampak: "Rendah",
            tahun: "2024",
        },
        {
            id: 8,
            kasus: "Bullying Allegation",
            artis: "Soojin",
            kategori: "Kontroversi",
            dampak: "Tinggi",
            tahun: "2021",
        },
        {
            id: 9,
            kasus: "Military Service Debate",
            artis: "BTS",
            kategori: "Sosial",
            dampak: "Sedang",
            tahun: "2022",
        },
        {
            id: 10,
            kasus: "DUI Controversy",
            artis: "Kim Sae-ron",
            kategori: "Hukum",
            dampak: "Sedang",
            tahun: "2022",
        },
    ];

    return (
        <div className="space-y-6">
            <PageHeader
                title="🎵 K-Pop Controversy Dashboard"
                subtitle="Monitor berbagai kasus dan kontroversi yang pernah menjadi perhatian publik di industri K-Pop."
            />

            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-pink-100">
                {/* Header Card */}
                <div className="bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 p-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className="text-2xl font-bold text-white">
                                🎤 Top 10 K-Pop Cases
                            </h2>
                            <p className="text-pink-100 mt-1">
                                Daftar kasus dan kontroversi yang pernah menjadi
                                sorotan publik.
                            </p>
                        </div>

                        <button className="bg-white text-purple-600 px-4 py-2 rounded-xl font-semibold hover:scale-105 transition">
                            View Report
                        </button>
                    </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-pink-50 text-gray-700">
                                <th className="px-6 py-4 text-left">#</th>
                                <th className="px-6 py-4 text-left">Kasus</th>
                                <th className="px-6 py-4 text-left">Artis</th>
                                <th className="px-6 py-4 text-left">
                                    Kategori
                                </th>
                                <th className="px-6 py-4 text-left">Dampak</th>
                                <th className="px-6 py-4 text-left">Tahun</th>
                                <th className="px-6 py-4 text-center">Aksi</th>
                            </tr>
                        </thead>

                        <tbody>
                            {data.map((item) => (
                                <tr
                                    key={item.id}
                                    className="border-t hover:bg-pink-50 transition-all duration-200"
                                >
                                    <td className="px-6 py-4 font-bold text-pink-600">
                                        #{item.id}
                                    </td>

                                    <td className="px-6 py-4 font-semibold text-gray-800">
                                        {item.kasus}
                                    </td>

                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 text-white flex items-center justify-center font-bold">
                                                {item.artis.charAt(0)}
                                            </div>

                                            <span className="font-medium text-gray-700">
                                                {item.artis}
                                            </span>
                                        </div>
                                    </td>

                                    <td className="px-6 py-4">
                                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-100 text-purple-700">
                                            {item.kategori}
                                        </span>
                                    </td>

                                    <td className="px-6 py-4">
                                        <span
                                            className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                                item.dampak === "Tinggi"
                                                    ? "bg-red-100 text-red-700"
                                                    : item.dampak === "Sedang"
                                                    ? "bg-amber-100 text-amber-700"
                                                    : "bg-green-100 text-green-700"
                                            }`}
                                        >
                                            {item.dampak}
                                        </span>
                                    </td>

                                    <td className="px-6 py-4 text-gray-500">
                                        {item.tahun}
                                    </td>

                                    <td className="px-6 py-4">
                                        <div className="flex justify-center gap-2">
                                            <button className="px-3 py-2 rounded-lg bg-pink-100 text-pink-700 hover:bg-pink-200 transition">
                                                Detail
                                            </button>

                                            <button className="px-3 py-2 rounded-lg bg-purple-100 text-purple-700 hover:bg-purple-200 transition">
                                                Berita
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Footer */}
                <div className="bg-gray-50 px-6 py-4 flex items-center justify-between border-t">
                    <span className="text-sm text-gray-500">
                        Menampilkan 10 kasus dunia K-Pop
                    </span>

                    <div className="flex gap-2">
                        <button className="w-9 h-9 rounded-lg border hover:bg-gray-100 transition">
                            ←
                        </button>

                        <button className="w-9 h-9 rounded-lg bg-purple-600 text-white">
                            1
                        </button>

                        <button className="w-9 h-9 rounded-lg border hover:bg-gray-100 transition">
                            →
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}