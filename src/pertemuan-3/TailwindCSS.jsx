export default function TailwindCSS (){
    return (
        <div>
            <h1 class ="border m-4"> Belajar Tailwind CSS 4</h1>
            <button className="bg-blue-500 text-white
                                px-4 py-2 mx-4 rounded
                                shadow-lg"> Click Me</button>    
            <Spacing title="Card" content="ABCDEFG"/>  
            <Typography/> 
            <BorderRadius/>
            <BackgroundColors/>
            <FlexboxGrid/>
            <ShadowEffects/>
            <PastelSystemComponent/>
        </div>
    )
}

function Spacing(props){
    return (
        <div className="bg-white shadow-lg p-4 m-4 rounded-lg">
            <h2 className="text-lg font-semibold">{props.title}</h2> 
            <p className="mt-2 text-gray-600">{props.content}.</p>
        </div>
    )
}

function Typography(){
    return (
        <div classname="p-4">
            <h1 className="text-3xl font-bold text-blue-600">Tailwind Typography</h1>
            <p className="text-gray-600 text-lg mt-2">Belajar Tailwind sangat menyenangkan dan cepat!</p>
        </div>
    )
}

function BorderRadius(){
    return (
        <button className="border-3 border-blue-500 text-blue-500 ml-4 px-4 py-2 rounded-l-rg"> Klik Saya </button>
    )
}

function BackgroundColors(){
    return(
        <div className="bg-pink-200 text-white p-6 m-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold">Tailwind Colors</h3>
            <p className="mt-2">Belajar Tailwind itu seru dan fleksibel!</p>
        </div>
    )
}

function FlexboxGrid(){
    return (
        <nav className="flex justify-between bg-gray-800 p-4 text-white">
            <h1 className="text-lg font-bold">MyWebsite</h1>
            <ul className="flex space-x-4">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    )
}

function ShadowEffects(){
    return (
        <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold">Hover me!</h3>
            <p className="text-gray-600 mt-2">Lihat efek bayangan saat hover.</p>
        </div>
    )
}

function PastelSystemComponent() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] p-10 font-sans text-slate-600">
      {/* Container Utama dengan ShadowEffects & BorderRadius */}
      <div className="max-w-5xl mx-auto bg-white/60 backdrop-blur-md border border-white rounded-[3rem] p-12 shadow-[0_32px_64px_-15px_rgba(200,180,220,0.3)]">
        
        {/* Header dengan Typography & Spacing */}
        <header className="mb-16 text-center">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-rg from-purple-300 via-pink-300 to-blue-300 tracking-tight mb-4">
            Pastel Design Tokens
          </h1>
          <p className="text-lg text-slate-400 font-light tracking-wide">
            Implementasi React & Tailwind CSS
          </p>
        </header>

        {/* Grid System (Flexbox & Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Kiri: Typography & Spacing */}
          <div className="space-y-10">
            <section>
              <h2 className="text-xs uppercase tracking-[0.2em] text-pink-400 font-bold mb-6">01. Typography & Spacing</h2>
              <div className="space-y-4">
                <p className="text-3xl font-medium text-slate-700">Display Large</p>
                <p className="text-xl text-slate-500 leading-relaxed">
                  Paragraph text dengan <span className="bg-yellow-100 px-2 py-1 rounded">line-height relaxed</span> untuk kenyamanan membaca maksimal.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xs uppercase tracking-[0.2em] text-blue-400 font-bold mb-6">02. Border Radius</h2>
              <div className="flex items-center gap-6">
                <div className="h-16 w-16 bg-blue-100 rounded-xl border-2 border-blue-200"></div>
                <div className="h-16 w-16 bg-blue-100 rounded-3xl border-2 border-blue-200"></div>
                <div className="h-16 w-16 bg-blue-100 rounded-full border-2 border-blue-200"></div>
              </div>
            </section>
          </div>

          {/* Kanan: BackgroundColors & ShadowEffects */}
          <div className="space-y-10">
            <section>
              <h2 className="text-xs uppercase tracking-[0.2em] text-purple-400 font-bold mb-6">03. Pastel Backgrounds</h2>
              <div className="grid grid-cols-3 gap-4">
                <div className="h-20 rounded-2xl bg-[#FFECF1] hover:scale-105 transition-transform cursor-pointer shadow-sm"></div>
                <div className="h-20 rounded-2xl bg-[#E0F7FA] hover:scale-105 transition-transform cursor-pointer shadow-sm"></div>
                <div className="h-20 rounded-2xl bg-[#F3E5F5] hover:scale-105 transition-transform cursor-pointer shadow-sm"></div>
              </div>
            </section>

            <section>
              <h2 className="text-xs uppercase tracking-[0.2em] text-green-400 font-bold mb-6">04. Shadow Effects</h2>
              <div className="flex gap-8">
                {/* Soft Inner Shadow */}
                <div className="flex-1 h-24 bg-white rounded-2xl shadow-inner border border-slate-50 flex items-center justify-center text-xs text-slate-300">
                  Inner Shadow
                </div>
                {/* Floating Soft Shadow */}
                <div className="flex-1 h-24 bg-white rounded-2xl shadow-[0_15px_30px_-10px_rgba(0,0,0,0.05)] border border-slate-50 flex items-center justify-center text-xs text-slate-400">
                  Floating Shadow
                </div>
              </div>
            </section>
          </div>

        </div>

        {/* Footer: Flexbox Alignment */}
        <footer className="mt-20 pt-8 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-3">
            <span className="h-3 w-3 rounded-full bg-pink-200"></span>
            <span className="h-3 w-3 rounded-full bg-blue-200"></span>
            <span className="h-3 w-3 rounded-full bg-yellow-200"></span>
          </div>
          <button className="bg-slate-800 text-white px-10 py-4 rounded-2xl font-semibold shadow-xl shadow-slate-200 hover:bg-slate-700 active:scale-95 transition-all">
            Get Started
          </button>
        </footer>
      </div>
    </div>
  );
}