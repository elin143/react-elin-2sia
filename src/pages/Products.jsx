import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import products from "../data/products.json";

export default function Products(){
    return (
        <div>
            <PageHeader/>
<div className="bg-[#FFFDF9] p-8 rounded-[2.5rem] border-4 border-[#FDF2F8]">
  <PageHeader
    title={
      <div className="space-y-1">
        <h1 className="text-4xl font-black text-[#5C5B7F] tracking-tight">
          Products
        </h1>
        <div className="h-1.5 w-12 bg-[#FDE2E4] rounded-full" /> {/* Aksen garis bawah lembut */}
      </div>
    }
    breadcrumb={
      <nav className="flex items-center space-x-3 text-xs font-bold uppercase tracking-widest">
        <span className="text-[#B8B8D1] hover:text-[#9393B5] transition-colors cursor-pointer">Home</span>
        <div className="w-1 h-1 rounded-full bg-[#E2E2F0]" /> {/* Separator dot yang manis */}
        <span className="text-[#D1D1E9]">Products</span>
      </nav>
    }
  >
    <button className="group flex items-center px-8 py-3.5 font-bold text-[#8B8BAE] bg-[#E2E2F0] hover:bg-[#D4D4F5] rounded-2xl transition-all duration-300 shadow-sm hover:shadow-md active:translate-y-0.5">
      <span className="mr-2 text-xl opacity-70 group-hover:rotate-12 transition-transform">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
      </span>
      Add Products
    </button>
  </PageHeader>
</div>

<div className="bg-[#FFFDF9] p-8 rounded-[2.5rem] border-4 border-[#FDF2F8] shadow-sm">
  
  <PageHeader 
    title={<h1 className="text-3xl font-black text-[#5C5B7F]">Products</h1>} 
    breadcrumb={["Home", "Customer"]} 
  />

  <table className="w-full mt-8 overflow-hidden rounded-2xl border-hidden shadow-[0_0_0_1px_rgba(226,226,240,0.5)]">
  <thead>
    <tr className="bg-[#E2E2F0]/40 text-[#8B8BAE] text-xs uppercase tracking-widest">
      <th className="p-4 font-bold first:rounded-tl-2xl">ID</th>
      <th className="p-4 font-bold">Product</th>
      <th className="p-4 font-bold">Category</th>
      <th className="p-4 font-bold">Brand</th>
      <th className="p-4 font-bold">Price</th>
      <th className="p-4 font-bold">Stock</th>
      <th className="p-4 font-bold last:rounded-tr-2xl">Rating</th>
    </tr>
  </thead>

  <tbody className="bg-white/50">
    {products.map((p) => (
      <tr
        key={p.id}
        className="text-center border-b border-[#FDF2F8] last:border-none hover:bg-[#FDE2E4]/20 transition-colors"
      >
        <td className="p-4 text-[#8B8BAE] font-medium text-sm">
          #{p.id}
        </td>

        <td className="p-4 text-[#5C5B7F] font-bold text-sm">
          <Link to={`/products/${p.id}`} className="text-emerald-400 hover:text-emerald-500">
        {p.name}
    </Link >
        </td>

        <td className="p-4 text-[#9393B5] text-sm">
          {p.category}
        </td>

        <td className="p-4 text-[#9393B5] text-sm">
          {p.brand}
        </td>

        <td className="p-4 text-[#9393B5] text-sm">
          ${p.price}
        </td>

        <td className="p-4 text-[#9393B5] text-sm">
          {p.stock}
        </td>

        <td className="p-4">
          <span className="bg-[#FDE2E4] text-[#D88C9A] px-3 py-1 rounded-full text-xs font-bold">
            ⭐ {p.rating}
          </span>
        </td>
      </tr>
    ))}
  </tbody>
</table>
</div>
        </div>
    )
}