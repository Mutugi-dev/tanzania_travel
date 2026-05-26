import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HDImage from "@/components/HDImage";
import { Calendar, Clock, Tag, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { ARTICLES } from "@/data/news";

export default async function NewsArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const article = ARTICLES.find((a) => a.id === id);

  if (!article) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="flex-1 bg-slate-50 font-sans py-12 px-6 sm:px-12">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          
          <div className="w-full mb-8">
            <Link href="/news" className="inline-flex items-center gap-1 text-sm font-bold text-tz-blue hover:text-tz-blue-hover transition-colors uppercase tracking-wider">
              <ChevronLeft className="w-4 h-4" /> Back to News
            </Link>
          </div>

          <div className="w-full bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden flex flex-col">
            {/* Banner Image */}
            <div className="relative h-72 sm:h-96 w-full shrink-0">
              <HDImage
                src={article.img}
                alt={article.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              
              {/* Category & Title Overlays */}
              <div className="absolute bottom-8 left-8 right-8 text-white flex flex-col gap-3">
                <span className="text-[10px] font-black tracking-widest text-tz-gold bg-white/15 backdrop-blur-md border border-white/10 py-1.5 px-4 rounded-full uppercase self-start">
                  {article.categoryLabel}
                </span>
                <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight max-w-3xl">
                  {article.title}
                </h1>
              </div>
            </div>

            {/* Content Area */}
            <div className="p-8 sm:p-12 flex-1 font-sans flex flex-col gap-6 text-tz-charcoal">
              
              {/* Meta Row */}
              <div className="flex items-center gap-6 text-[11px] font-bold text-slate-400 uppercase tracking-wide border-b border-slate-100 pb-5">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-tz-blue" />
                  <span>{article.date}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-tz-blue" />
                  <span>{article.readTime}</span>
                </div>
              </div>

              {/* Text paragraphs */}
              <div className="flex flex-col gap-5 mt-2">
                {article.fullText.map((p, i) => (
                  <p key={i} className="text-sm sm:text-base font-light text-slate-600 leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>

              <div className="mt-10 pt-8 border-t border-slate-100 flex items-center gap-4 bg-slate-50 p-6 rounded-2xl">
                <div className="w-12 h-12 rounded-full bg-tz-blue/10 flex items-center justify-center text-tz-blue">
                  <Tag className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-black text-tz-charcoal uppercase tracking-wider">OFFICIAL PRESS OFFICE</div>
                  <div className="text-[10px] text-slate-500 font-light mt-0.5">Released directly by the Ministry of Tourism &amp; TTB</div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
