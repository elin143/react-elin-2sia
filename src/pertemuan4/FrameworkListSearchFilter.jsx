import { useState } from "react";
import frameworkData from "./framework.json";

export default function FrameworkListSearchFilter() {
  /** 1. State Objek untuk Search dan Filter **/
  const [dataForm, setDataForm] = useState({
    searchTerm: "",
    selectedTag: "",
  });

  /** 2. Handle perubahan nilai secara dinamis **/
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  /** 3. Logic Filter **/
  const _search = dataForm.searchTerm.toLowerCase();
  
  const filteredFrameworks = frameworkData.filter((framework) => {
    const matchesSearch =
      framework.name.toLowerCase().includes(_search) ||
      framework.description.toLowerCase().includes(_search)||
      framework.details.developer.toLowerCase().includes(_search);

    const matchesTag = dataForm.selectedTag
      ? framework.tags.includes(dataForm.selectedTag)
      : true;

    return matchesSearch && matchesTag;
  });

  const allTags = [
    ...new Set(frameworkData.flatMap((framework) => framework.tags)),
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-purple-50 to-blue-50 p-10">
      <h1 className="text-3xl font-semibold text-center text-rose-400 mb-8 tracking-wide">
        Framework Database
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        <input
          type="text"
          name="searchTerm"
          placeholder="Search framework..."
          className="w-full p-3 border border-rose-200 rounded-xl mb-4 bg-white shadow-sm 
          focus:outline-none focus:ring-2 focus:ring-rose-200"
          onChange={handleChange}
        />

        <select
          name="selectedTag"
          className="w-full p-3 border border-purple-200 rounded-xl mb-4 bg-white shadow-sm
          focus:outline-none focus:ring-2 focus:ring-purple-200"
          onChange={handleChange}
        >
          <option value="">All Tags</option>
          {allTags.map((tag, index) => (
            <option key={index} value={tag}>
              {tag}
            </option>
          ))}
        </select>

        {filteredFrameworks.map((item) => (
          <div
            key={item.id}
            className="relative p-5 rounded-2xl border border-rose-100 
            bg-white shadow-sm 
            hover:shadow-md hover:-translate-y-1
            transition-all duration-300 group"
          >

            <div className="absolute inset-0 rounded-2xl bg-rose-100/30 blur-xl opacity-0 group-hover:opacity-100 transition"></div>

            <h2 className="text-xl font-semibold text-rose-400 mb-2 group-hover:text-rose-500">
              {item.name}
            </h2>

            <p className="text-gray-500 text-sm mb-3">
              {item.description}
            </p>

            <p className="text-gray-400 text-sm mb-2">
              Developed by{" "}
              <span className="text-rose-300 font-medium">
                {item.details.developer}
              </span>
            </p>

            <a
              href={item.details.officialWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 px-4 py-1 text-sm 
              bg-rose-200 text-rose-700 rounded-full 
              hover:bg-rose-300 hover:scale-105
              transition"
            >
              Visit Website
            </a>

            <div className="mt-4 flex flex-wrap gap-2">
              {item.tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-xs px-3 py-1 rounded-full 
                  bg-rose-100 text-gray-500 
                  hover:bg-rose-200 transition"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}