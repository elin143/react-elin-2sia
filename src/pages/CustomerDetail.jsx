import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import customerData from "../data/customer.json"

export default function CustomerDetail() {
    const { id } = useParams()
    const [customer, setCustomer] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        const foundCustomer = customerData.find(
            (c) => c.customerId === id
        )

        if (!foundCustomer) {
            setError("Customer not found")
            return
        }

        setCustomer(foundCustomer)
    }, [id])

    if (error) return <div className="text-red-600 p-4">{error}</div>
    if (!customer) return <div className="p-4">Loading...</div>

    return (
        <div className="p-6 bg-white rounded-xl shadow-lg max-w-lg mx-auto mt-6">
            <img
                src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                    customer.customerName
                )}&background=FDE2E4&color=D88C9A&size=400`}
                alt={customer.customerName}
                className="rounded-xl mb-4 w-full h-48 object-cover"
            />

            <h2 className="text-2xl font-bold mb-2">
                {customer.customerName}
            </h2>

            <p className="text-gray-600 mb-1">
                Customer ID: {customer.customerId}
            </p>

            <p className="text-gray-600 mb-1">
                Email: {customer.email}
            </p>

            <p className="text-gray-600 mb-1">
                Phone: {customer.phone}
            </p>

            <p className="text-gray-800 font-semibold text-lg">
                Loyalty Status: {customer.loyalty}
            </p>

            <div className="mt-3">
                <span className="bg-[#FDE2E4] text-[#D88C9A] px-3 py-1 rounded-full text-xs font-bold">
                    ⭐ {customer.loyalty}
                </span>
            </div>
        </div>
    )
}