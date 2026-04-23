import PageHeader from "../components/PageHeader";
import orders from "../data/orders.json";

export default function Orders() {
    return (
        <div>
            <PageHeader/>
<div className="bg-[#FFFDF9] p-8 rounded-[2.5rem] border-4 border-[#FDF2F8]">
  <PageHeader
    title={
      <div className="space-y-1">
        <h1 className="text-4xl font-black text-[#5C5B7F] tracking-tight">
          Orders
        </h1>
        <div className="h-1.5 w-12 bg-[#FDE2E4] rounded-full" /> {/* Aksen garis bawah lembut */}
      </div>
    }
    breadcrumb={
      <nav className="flex items-center space-x-3 text-xs font-bold uppercase tracking-widest">
        <span className="text-[#B8B8D1] hover:text-[#9393B5] transition-colors cursor-pointer">Home</span>
        <div className="w-1 h-1 rounded-full bg-[#E2E2F0]" /> {/* Separator dot yang manis */}
        <span className="text-[#D1D1E9]">Orders</span>
      </nav>
    }
  >
    <button className="group flex items-center px-8 py-3.5 font-bold text-[#8B8BAE] bg-[#E2E2F0] hover:bg-[#D4D4F5] rounded-2xl transition-all duration-300 shadow-sm hover:shadow-md active:translate-y-0.5">
      <span className="mr-2 text-xl opacity-70 group-hover:rotate-12 transition-transform">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
      </span>
      Add Order
    </button>
  </PageHeader>
</div>
<div className="bg-[#FFFDF9] p-8 rounded-[2.5rem] border-4 border-[#FDF2F8] shadow-sm">
  {/* PageHeader tetap sinkron dengan tema */}
  <PageHeader 
    title={<h1 className="text-3xl font-black text-[#5C5B7F] tracking-tight">Orders</h1>} 
    breadcrumb={["Home", "Orders"]} 
  />

  <div className="mt-8 overflow-hidden rounded-3xl border border-[#E2E2F0]/50 bg-white/30">
    <table className="w-full border-collapse">
      <thead>
        <tr className="bg-[#E2E2F0]/40 text-[#8B8BAE] text-xs uppercase tracking-[0.2em]">
          <th className="p-5 font-bold">Order ID</th>
          <th className="p-5 font-bold">Customer</th>
          <th className="p-5 font-bold">Status</th>
          <th className="p-5 font-bold">Total</th>
          <th className="p-5 font-bold">Date</th>
        </tr>
      </thead>

      <tbody>
        {orders.map((order) => (
          <tr 
            key={order.orderId} 
            className="text-center border-b border-[#FDF2F8] last:border-none hover:bg-[#FDE2E4]/20 transition-all duration-300 group"
          >
            <td className="p-5 text-[#8B8BAE] font-medium text-sm">
              <span className="bg-[#E2E2F0]/60 px-3 py-1 rounded-lg text-[11px] font-bold">
                #{order.orderId}
              </span>
            </td>
            <td className="p-5 text-[#5C5B7F] font-bold text-sm">{order.customerName}</td>
            <td className="p-5">
              <span className="bg-[#FDE2E4] text-[#D88C9A] px-4 py-1 rounded-full text-[11px] font-black uppercase tracking-wider shadow-sm">
                {order.status}
              </span>
            </td>
            <td className="p-5 text-[#5C5B7F] font-semibold text-sm">
              Rp {order.totalPrice.toLocaleString()}
            </td>
            <td className="p-5 text-[#9393B5] text-xs font-medium italic">
              {order.orderDate}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>
        </div>
    )
}