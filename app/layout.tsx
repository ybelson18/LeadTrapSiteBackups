import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { Kalam } from "next/font/google";
import { cn } from "@/lib/utils";
import { ViewTransitions } from "next-view-transitions";
import type { Viewport } from "next";
import { NavBar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "LeadTrap - Social Media Automation | Aceternity Templates",
  description:
    "LeadTrap is an all in on marketing automation platform that handles emails, tasks tracking, social media management and everything in between.",
  openGraph: {
    images: ["https://proactiv-aceternity.vercel.app/banner.png"],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#06b6d4" },
    { media: "(prefers-color-scheme: dark)", color: "#06b6d4" },
  ],
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const kalam = Kalam({
  weight: '400',
  subsets: ["latin"],
  variable: '--font-kalam',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en" className={`${inter.className} ${kalam.variable}`}>
        <head>
          <script dangerouslySetInnerHTML={{
            __html: `
              self.__wrap_n=self.__wrap_n||(self.CSS&&CSS.supports("text-wrap","balance")?1:2);
              self.__wrap_b=(e,l,t)=>{
                let a=null==(t=t||document.querySelector(\`[data-br="\${e}"]\`))?void 0:t.parentElement;
                if(!a)return;
                let r=e=>t.style.maxWidth=e+"px";
                t.style.maxWidth="";
                let d=a.clientWidth,n=a.clientHeight,o=d/2-.25,i=d+.5,s;
                if(d){
                  for(r(o),o=Math.max(t.scrollWidth,o);o+1<i;)
                    r(s=Math.round((o+i)/2)),a.clientHeight===n?i=s:o=s;
                  r(i*l+d*(1-l))
                }
                t.__wrap_o||"undefined"!=typeof ResizeObserver&&(t.__wrap_o=new ResizeObserver(()=>{
                  self.__wrap_b(0,+t.dataset.brr,t)
                })).observe(a)
              };
              self.__wrap_n!=1&&self.__wrap_b(":R577puja:",1);
            `
          }} />
        </head>
        <body
          className={cn(
            inter.className,
            "bg-charcoal antialiased h-full w-full"
          )}
        >
          <NavBar />
          {children}
          <Footer />
        </body>
      </html>
    </ViewTransitions>
  );
}
