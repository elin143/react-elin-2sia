export default function FeatureSection({ features = [] }) {
    return (
        <section className="grid md:grid-cols-3 gap-4 mb-6">
            {features.map((feature) => (
                <div
                    key={feature.title}
                    className="border border-gray-200 rounded-xl p-5 bg-white shadow-sm"
                >
                    <div className="text-3xl mb-3">
                        {feature.icon}
                    </div>

                    <h3 className="text-lg font-bold mb-2">
                        {feature.title}
                    </h3>

                    <p className="text-gray-600 text-sm">
                        {feature.description}
                    </p>
                </div>
            ))}
        </section>
    );
}
