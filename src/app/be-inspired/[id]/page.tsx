import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HDImage from "@/components/HDImage";
import { MapPin, Compass, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { MONTHLY_GUIDES } from "@/data/monthly-guides";
import { ACTIVITIES } from "@/data/activities";

export default async function BeInspiredGuidePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  // Find the specific guide across all months
  let activeBlog = null;
  for (const month in MONTHLY_GUIDES) {
    const found = MONTHLY_GUIDES[month].find((guide) => guide.id === id);
    if (found) {
      activeBlog = found;
      break;
    }
  }

  if (!activeBlog) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="flex-1 bg-slate-50 font-sans py-12 px-6 sm:px-12">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          
          <div className="w-full mb-8">
            <Link href="/be-inspired" className="inline-flex items-center gap-1 text-sm font-bold text-tz-blue hover:text-tz-blue-hover transition-colors uppercase tracking-wider">
              <ChevronLeft className="w-4 h-4" /> Back to Guides
            </Link>
          </div>

          <div className="w-full bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden flex flex-col">
            {/* Banner Cover */}
            <div className="relative h-72 sm:h-96 w-full shrink-0">
              <HDImage
                src={activeBlog.img ?? ACTIVITIES.find(a => a.id === activeBlog.activityId)?.images.banner ?? ""}
                alt={activeBlog.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              
              {/* Category overlay */}
              <div className="absolute bottom-8 left-8 right-8 text-white flex flex-col gap-3">
                <span className="text-[10px] font-black tracking-widest text-tz-gold bg-white/15 backdrop-blur-md border border-white/10 py-1.5 px-4 rounded-full uppercase self-start">
                  {activeBlog.badge}
                </span>
                <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight max-w-3xl">
                  {activeBlog.title}
                </h1>
              </div>
            </div>

            {/* Content paragraph */}
            <div className="p-8 sm:p-12 flex-1 font-sans flex flex-col gap-6 text-tz-charcoal">
              <div className="flex items-center gap-2 text-sm font-bold text-tz-blue uppercase tracking-wider border-b border-slate-100 pb-5">
                <MapPin className="w-5 h-5" />
                <span>{activeBlog.location}</span>
              </div>

              <p className="text-base sm:text-lg font-light text-slate-600 leading-relaxed font-sans mt-2">
                {activeBlog.desc}
              </p>
              
              <p className="text-sm sm:text-base font-light text-slate-500 leading-relaxed mt-4 font-sans border-l-4 border-tz-blue pl-4 py-2 bg-slate-50 rounded-r-xl">
                <span className="text-lg mr-2">💡</span>
                <strong>Monthly Travel Guide Tip:</strong> Combine this activity with our certified tour operators.{" "}
                <Link href="/things-to-do" className="text-tz-blue font-bold underline underline-offset-2 hover:text-tz-blue-hover transition-colors">
                  Browse Things To Do
                </Link>{" "}
                to reserve your custom tour package direct.
              </p>

              <div className="mt-10 pt-8 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl w-full sm:w-auto">
                  <div className="w-12 h-12 rounded-full bg-tz-blue/10 flex items-center justify-center text-tz-blue shrink-0">
                    <Compass className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-[11px] font-black text-tz-charcoal uppercase tracking-wider">OFFICIAL TRAVEL BLOG</div>
                    <div className="text-[10px] text-slate-500 font-light font-sans mt-0.5">TTB verified seasonal guides</div>
                  </div>
                </div>
                
                {activeBlog.activityId && (
                  <Link
                    href={`/things-to-do/${activeBlog.activityId}`}
                    className="bg-[#005e7c] hover:bg-tz-blue-hover text-white py-4 px-8 rounded-xl text-sm font-black uppercase tracking-wider transition-all shadow-md active:scale-95 text-center shrink-0 w-full sm:w-auto font-sans flex items-center justify-center gap-2"
                  >
                    Book This Package <ChevronLeft className="w-4 h-4 rotate-180" />
                  </Link>
                )}
              </div>
            </div>
            
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
