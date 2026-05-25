import PageHeader from "../components/PageHeader";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Button from "../components/Button";
import Badge from "../components/Badge";
import Avatar from "../components/Avatar";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Card from "../components/Card";
import ProductCard from "../components/ProductCard";
import Table from "../components/Table";
import InputField from "../components/InputField";
import TextArea from "../components/TextArea";
import SelectField from "../components/SelectField";
import Alert from "../components/Alert";
import Modal from "../components/Modal";
import HeroSection from "../components/HeroSection";
import FeatureSection from "../components/FeatureSection";
import ProductsSection from "../components/ProductsSection";


export default function Components() {

    const headers = [
        "No",
        "Nama Produk",
        "Kategori",
        "Harga",
        "Aksi"
    ];

    const products = [
        {
            id: 1,
            name: "Laptop Asus",
            category: "Elektronik",
            price: "Rp 8.000.000"
        },
        {
            id: 2,
            name: "Sepatu Sport",
            category: "Fashion",
            price: "Rp 450.000"
        },
        {
            id: 3,
            name: "Jam Tangan",
            category: "Aksesoris",
            price: "Rp 799.000"
        }
    ];

    const featureItems = [
        {
            icon: "01",
            title: "Cepat",
            description: "Komponen dibuat ringan dan mudah dipakai ulang."
        },
        {
            icon: "02",
            title: "Rapi",
            description: "Tampilan konsisten dengan style Tailwind yang sederhana."
        },
        {
            icon: "03",
            title: "Reusable",
            description: "Cocok digunakan di banyak halaman tanpa menulis ulang kode."
        }
    ];

    const sectionProducts = [
        {
            image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
            title: "Sepatu Sport",
            category: "Fashion",
            price: "Rp 450.000",
            description: "Sepatu sport modern untuk aktivitas sehari-hari."
        },
        {
            image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
            title: "Smartphone",
            category: "Elektronik",
            price: "Rp 4.500.000",
            description: "Smartphone cepat dengan kamera jernih dan baterai tahan lama."
        }
    ];

    return (
        <>
            <div className="p-6">
                <PageHeader title="Components" breadcrumb={["Home", "Components"]} />

                {/* Mengggunakan Button Component */}
                <Button type="success">Simpan</Button>
                <Button type="danger">Hapus</Button>

                {/* Button tanpa menggunakan Component */}
                <button className="bg-green-600 hover:bg-green-700 text-white">
                    Simpan
                </button>
                <button className="bg-gray-600 hover:bg-gray-700 text-white">
                    Edit
                </button>
                <button className="bg-red-600 hover:bg-red-700 text-white">
                    Hapus
                </button>

                {/* Mengggunakan Badge Component */}
                <Badge type="success">Success</Badge>
                <Badge type="danger">Danger</Badge>
                <Badge type="warning">Warning</Badge>
                <Badge type="secondary">Secondary</Badge>
                <Badge type="primary">Primary</Badge>

                {/* Mengggunakan Avatar Component */}
                <Avatar name="Seonghyeon" />
                <Avatar name="Sunghoon" />

                {/* Mengggunakan Container Component */}
                <Container className="bg-gray-100">
                    <h1 className="text-3xl font-bold mb-4">
                        Daftar Produk
                    </h1>

                    <p className="text-gray-600">
                        Berikut adalah daftar produk terbaru.
                    </p>
                </Container>

                {/* Mengggunakan Card Component */}
                <Card>
                    <h2 className="text-xl font-bold">Judul Card</h2>
                    <p className="text-gray-600">Ini adalah isi dari card.</p>
                    <Badge type="success">Success</Badge>
                    <Button type="success">Simpan</Button>
                </Card>

                {/* Mengggunakan ProductCard Component */}
                <ProductCard
                    image="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
                    title="Sepatu Sport"
                    category="Fashion"
                    price="Rp 450.000"
                    description="Sepatu sport modern dengan desain nyaman dan ringan untuk aktivitas sehari-hari."
                />

                <ProductCard
                    image="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
                    title="Smartphone"
                    category="Elektronik"
                    price="Rp 4.500.000"
                    description="Smartphone dengan performa cepat, kamera jernih, dan baterai tahan lama."
                />

                {/* Mengggunakan Table Component */}
                <Table headers={headers}>
                    {products.map((product, index) => (
                        <tr key={product.id} className="hover:bg-gray-50">
                            <td className="border px-4 py-3">
                                {index + 1}
                            </td>

                            <td className="border px-4 py-3">
                                {product.name}
                            </td>

                            <td className="border px-4 py-3">
                                {product.category}
                            </td>

                            <td className="border px-4 py-3">
                                {product.price}
                            </td>

                            <td className="border px-4 py-3">
                                <button className="bg-blue-600 text-white px-3 py-1 rounded">
                                    Detail
                                </button>
                            </td>
                        </tr>
                    ))}
                </Table>

                {/* Mengggunakan Form Component */}
                <Card>
                    <h2 className="text-xl font-bold mb-4">Form Component</h2>

                    <InputField
                        label="Nama Lengkap"
                        name="nama"
                        placeholder="Masukkan nama lengkap"
                    />

                    <InputField
                        label="Email"
                        name="email"
                        type="email"
                        placeholder="Masukkan email"
                    />

                    <SelectField
                        label="Kategori"
                        name="kategori"
                        options={[
                            { label: "Pilih kategori", value: "" },
                            { label: "Elektronik", value: "elektronik" },
                            { label: "Fashion", value: "fashion" },
                            { label: "Aksesoris", value: "aksesoris" },
                        ]}
                    />

                    <TextArea
                        label="Pesan"
                        name="pesan"
                        placeholder="Tulis pesan kamu"
                    />

                    <Button type="primary">Kirim</Button>
                </Card>

                {/* Mengggunakan Feedback Component */}
                <Card>
                    <h2 className="text-xl font-bold mb-4">Feedback Component</h2>

                    <Alert type="success" title="Berhasil">
                        Data berhasil disimpan.
                    </Alert>

                    <Alert type="warning" title="Perhatian">
                        Pastikan semua form sudah diisi dengan benar.
                    </Alert>

                    <Modal title="Konfirmasi Data">
                        Apakah kamu yakin ingin menyimpan perubahan ini?
                    </Modal>
                </Card>

                {/* Mengggunakan Section Component */}
                <HeroSection
                    title="Belanja Produk Favorit"
                    subtitle="Temukan produk pilihan dengan kualitas terbaik dan harga yang nyaman untuk kebutuhan harian."
                    buttonText="Lihat Produk"
                />

                <FeatureSection features={featureItems} />

                <ProductsSection products={sectionProducts} />

                {/* Mengggunakan Footer Component */}
                <Footer />

            </div>

        </>
    );
}