import ProductCard from "./ProductCard";

export default function ProductsSection({ products = [] }) {
    return (
        <section className="grid md:grid-cols-2 gap-6">
            {products.map((product) => (
                <ProductCard
                    key={product.title}
                    image={product.image}
                    title={product.title}
                    category={product.category}
                    price={product.price}
                    description={product.description}
                />
            ))}
        </section>
    );
}
