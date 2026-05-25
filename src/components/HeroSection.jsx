export default function HeroSection({
    title,
    subtitle,
    buttonText,
}) {
    return (
        <section className="bg-blue-600 text-white rounded-xl p-8 mb-6">
            <h1 className="text-3xl font-bold mb-3">
                {title}
            </h1>

            <p className="text-blue-100 mb-5 max-w-2xl">
                {subtitle}
            </p>

            <button className="bg-white text-blue-600 px-5 py-2 rounded-lg font-semibold">
                {buttonText}
            </button>
        </section>
    );
}
