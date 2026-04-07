import frameworkData from "./framework.json";

export default function FrameworkList() {
    return (
        <div className="p-8 min-h-screen bg-gradient-to-br from-rose-50 via-purple-50 to-blue-50">
            {frameworkData.map((item) => (
		            <div 
                        key={item.id} 
                        className="group border border-rose-100 p-5 mb-5 rounded-2xl shadow-sm bg-white/70 backdrop-blur-sm 
                        transition-all duration-300 ease-out 
                        hover:-translate-y-2 hover:shadow-lg hover:bg-white"
                    >
		                <h2 className="text-xl font-semibold text-rose-400 mb-1 transition-colors duration-300 group-hover:text-rose-500">
                            {item.name}
                        </h2>

		                <p className="text-gray-500 transition-colors duration-300 group-hover:text-gray-600">
                            {item.description}
                        </p>

                        <p className="text-gray-500 mt-1 transition-colors duration-300 group-hover:text-gray-600">
                            Developed by:{" "}
                            <span className="font-medium text-rose-300 group-hover:text-rose-400">
                                {item.details.developer}
                            </span>{" "}
                            ({item.details.releaseYear})
                        </p>

                        <a 
                            href={item.details.officialWebsite}
                            className="inline-block mt-2 text-blue-300 font-medium underline underline-offset-2 
                            transition-all duration-300 
                            group-hover:text-blue-400 group-hover:translate-x-1"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Visit Website →
                        </a>

                        <div className="mt-3">
                            {item.tags.map((tag, index) => (
                                <span 
                                    key={index} 
                                    className="bg-rose-100/70 text-gray-500 px-3 py-1 text-xs rounded-full mr-2 inline-block mb-1
                                    transition-all duration-300
                                    group-hover:bg-rose-200/70 group-hover:text-gray-600"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
		            </div>
            ))}
        </div>
    )
}