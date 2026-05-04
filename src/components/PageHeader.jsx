import { useLocation } from "react-router-dom";

const PageHeader = ({
  title,
  breadcrumb,
  children,
}) => {
  const location = useLocation();

  // Ambil nama halaman otomatis dari URL
  const getPageName = () => {
    const path = location.pathname;

    if (path === "/") return "Dashboard";

    return path
      .replace("/", "")
      .split("-")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const pageTitle = title || getPageName();

  const pageBreadcrumb = breadcrumb
    ? Array.isArray(breadcrumb)
      ? breadcrumb.join(" / ")
      : breadcrumb
    : `Home / ${getPageName()}`;

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center">
        
        {/* LEFT */}
        <div>
          <h1 className="text-2xl font-bold text-pink-400 font-serif italic">
            {pageTitle}
          </h1>

          {/* BREADCRUMB */}
          <p className="text-sm text-pink-200 font-medium">
            {pageBreadcrumb}
          </p>
        </div>

        {/* RIGHT ACTION */}
        {children && <div>{children}</div>}
      </div>
    </div>
  );
};

export default PageHeader;