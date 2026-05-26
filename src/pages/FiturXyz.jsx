import PageHeader from "../components/PageHeader";
import { useLocation } from "react-router-dom";

export default function FiturXyz() {
    const location = useLocation();

    return (
        <div>
            <PageHeader
                title="Fitur XYZ"
                subtitle="Kelola dan pantau seluruh data Fitur XYZ dengan mudah dan efisien."
            />

            {/* Content halaman */}
        </div>
    );
}