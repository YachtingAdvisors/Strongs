import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Anchor, Compass, Ship, Wrench } from "lucide-react";

const heroImg =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBuMIagXq4QbZSLc0R6wkN79zLV6wzS2tY3b_IvcxYeGyBWLapd6l6ZllRLwf5Mhu5M5fkIrkVOPYXo8ISERZqxis3z2l2f3b1mShk_oJROtjZs3Y0ouum5klwZYneYE2GFIx0xvatWoXggDTPMUxl_XtucI5QKOGlMZvbHuEP7eIPRLgeOPIELvdfMkRiL_j_ORzElwAowt5dLfMD0JXPiCbQfwZJ1NgZelzDLzIQQlzuGk7XsRsRW165r_hnTgNaQNnEWXa4DIBk";

const heritageImg =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCVKsa1NuvUI7x_iUzVBfLguWc6gvdcD3rLhETzhChZuoB-vFN8ajh8NdeoWl-3-3gWDwcaZfUH7i673lPiGMFF2VbTygdVMaKxcEcHXFqXybuI0tzyLi-IXTG_jD-WZF6eY2RBRFiMQ_igQqwrIPwi1u_ZjgYZbRtUBxJ3zDMFeOGvbdup5jOI-HDstS4bBzxKqAyDhNW1nb29OeOdAgXIP_m_YhRZ3e5BMcFJ1yHzE3OWhhxbs-KDv83f1H2oeh5pzsLJCxnzT64";

const phantom65Img =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCd4_sK9F-cp4rBp7llRVrAohIKRYnD1dQUo0euIXuoTR1eXwP9_xB3TWEd7etp0i1xjsUTk1u05WPBPj5UZFyf87g1nm4MForPE7Zc2EF1x4i5iuS_sNCsbo-Vwkznebj2HSVHGT0dSNqe-puABiDrrIaK3TplSLwgQz2SFUm6GFVvmgSzqYRIxfmmacOD6KO81hcpR5esvrKQS5VN85kG1Wy3mzHiMMg4TC0HcJBJ9r2rRYX5zVmmaGeGpjGsHRmf-zfqvWkeMYY";

const targa63Img =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDkmf9l3euQKVuLnGlMauWKnUvsFM7OXvtXoR9hiQi0twi8yZTFYArgyE9i2OGy2Ej-NZxaLn6dI6at8g1SGVlglfc_nPFytQPmrw7JbwRtrwHijDMmEPvKVG6Pf18TSKM-fRmXp689_TDKvNsG8FNsXphDup99lrAHVitRMEBckQBBlaxD1W8sCqgEJ7idtkf2z61khxRuz2QjtN0BQfHWNWr5tLtiMs8XCylF-LkLGOxSmmohjnWSodQjXZcbjZ8onCy1wpzAP5I";

const squadron68Img =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDaBb-recNpR1aF8Ie6rS15u4i_4WjeEP164XnHyf2PwgreoAnQbrJV-nphf-wroPJLAUMoWUB6yf3b0zHgta5E4MhC6FrbLM6NOTOjg0KDu0il24O9xCdJqps3_iLv25ljvsy3v58pS7LZ5eBzUGfzLLiNkaTpQ0oFtaID_2zkoVU6_V5xaWCO8RbtknHXXKo4FKGMeptrSO1ngvxeY1MsjTsXx0bAY0Ng0I-XyhKymCd-tiQENlydknruYUgcgqAhCUAcgSBvhf4";

const phantom50Img =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuApDjO62yJBMsUFScYJMe0BLzu-2gVSK2cIL1wMUB5gj04lmc8bCr-ic1vARw-GLdDyi4g6b_N1mrtL9QyRDfkNrr52dstrtRNc0nrsnlJqwiR70CHGiDyDyFpPZU_k0Meo73u2gKxs9hn6Zkr8iT6htlhRuztWX4bqhJHW6LdxDNRc0j0Ouaky-s0Xb7vOomA95Tx4eQMI9uTdn5WzEf26cxMWNBE2ESxfY6iR2DC2lQlGyFourhkFTrKg3kTbTPTtVDQ1cglg2Ac";

export default function Fairline() {
  return (
    <main className="pt-24">
      {/* ── Hero ── */}
      <section className="relative h-[90vh] w-full overflow-hidden">
        <img
          alt="Fairline yacht cutting through open water"
          className="absolute inset-0 w-full h-full object-cover"
          src={heroImg}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-on-primary-fixed/70 via-on-primary-fixed/20 to-transparent" />
        <div className="absolute bottom-20 left-6 md:left-12 max-w-2xl">
          <p className="font-label text-white/60 text-xs uppercase tracking-[0.4em] mb-4">
            Est. 1963 -- Oundle, England
          </p>
          <h1 className="text-white font-headline text-5xl md:text-8xl font-extrabold tracking-tighter leading-tight">
            British <br />Precision.
          </h1>
          <p className="text-white/75 font-body text-lg mt-6 max-w-lg leading-relaxed">
            For over 55 years, Fairline Yachts has been synonymous with
            meticulous British craftsmanship -- designed and hand-built in the
            heart of England.
          </p>
          <Link to="/shop">
            <Button className="mt-10 bg-secondary hover:bg-secondary/90 text-white rounded-none px-8 py-3 font-label text-xs uppercase tracking-widest">
              Explore the Fleet <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* ── Heritage ── */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-white">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
          <div className="md:col-span-5">
            <span className="font-label text-secondary font-bold tracking-[0.3em] uppercase text-xs">
              Heritage
            </span>
            <h2 className="font-headline text-4xl md:text-5xl mt-6 mb-8 text-on-surface leading-tight">
              Where Italian Design Meets British Engineering
            </h2>
            <p className="text-on-surface/70 text-lg leading-relaxed mb-6">
              The partnership between Fairline and world-renowned designer
              Alberto Mancini has redefined the modern motor yacht. Every line,
              every curve, every material is deliberated with obsessive
              precision.
            </p>
            <p className="text-on-surface/70 text-lg leading-relaxed mb-8">
              Built at the Oundle facility in Northamptonshire, each Fairline
              vessel carries forward a legacy of engineering excellence --
              where advanced composites, Volvo IPS propulsion, and hand-finished
              interiors converge into something unmistakably British.
            </p>
            <Link
              to="/shop"
              className="flex gap-3 items-center group cursor-pointer"
            >
              <span className="font-label font-bold text-xs uppercase tracking-widest border-b border-on-surface/20 pb-1 group-hover:border-secondary transition-all text-on-surface">
                View the collection
              </span>
              <ArrowRight className="w-4 h-4 text-secondary" />
            </Link>
          </div>
          <div className="md:col-span-7 relative">
            <div className="aspect-[4/5] md:aspect-[16/10] bg-surface-container-low overflow-hidden rounded-lg">
              <img
                alt="Fairline yacht interior craftsmanship"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                src={heritageImg}
              />
            </div>
            <div className="hidden md:block absolute -bottom-12 -left-12 bg-on-primary-fixed p-8 max-w-xs rounded-lg shadow-2xl">
              <p className="font-headline italic text-xl text-white/90">
                "Bold, sculptural, unmistakable -- design that commands
                attention in any marina."
              </p>
              <p className="mt-4 font-label text-[10px] uppercase tracking-widest text-white/50">
                -- Alberto Mancini, Lead Designer
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Model Range ── */}
      <section className="py-24 md:py-32 bg-surface-container-low">
        <div className="px-6 md:px-12 max-w-screen-2xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-20">
            <div>
              <span className="font-label text-secondary font-bold tracking-[0.3em] uppercase text-xs">
                The Range
              </span>
              <h2 className="font-headline text-4xl md:text-6xl mt-4 text-on-surface">
                Commanding Presence
              </h2>
            </div>
            <div className="hidden md:block text-right max-w-xs">
              <p className="text-on-surface/60 text-sm italic">
                Four distinct lines. One uncompromising standard.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <ModelCard
              className="md:col-span-8"
              h="h-[500px] md:h-[600px]"
              img={phantom65Img}
              title="Phantom 65"
              sub="Flagship Flybridge"
              showBtn
            />
            <ModelCard
              className="md:col-span-4"
              h="h-[500px] md:h-[600px]"
              img={targa63Img}
              title="Targa 63 GTO"
              sub="Open-Top Performance"
            />
            <ModelCard
              className="md:col-span-4"
              h="h-[400px] md:h-[500px]"
              img={squadron68Img}
              title="Squadron 68"
              sub="Flybridge Cruiser"
            />
            <ModelCard
              className="md:col-span-8"
              h="h-[400px] md:h-[500px]"
              img={phantom50Img}
              title="Phantom 50"
              sub="Agile Elegance"
            />
          </div>
        </div>
      </section>

      {/* ── Engineering Excellence ── */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-white">
        <div className="max-w-screen-xl mx-auto text-center mb-16">
          <span className="font-label text-secondary font-bold tracking-[0.3em] uppercase text-xs">
            Engineering
          </span>
          <h2 className="font-headline text-4xl md:text-5xl mt-4 text-on-surface">
            Built Without Compromise
          </h2>
        </div>
        <div className="max-w-screen-xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-y-16 gap-x-8">
          <StatBlock
            icon={<Compass className="w-6 h-6" />}
            value="34 Knots"
            label="Top Speed"
          />
          <StatBlock
            icon={<Anchor className="w-6 h-6" />}
            value="Mancini"
            label="Alberto Mancini Design"
          />
          <StatBlock
            icon={<Wrench className="w-6 h-6" />}
            value="IPS"
            label="Volvo Penta Propulsion"
          />
          <StatBlock
            icon={<Ship className="w-6 h-6" />}
            value="1963"
            label="British Built Since"
          />
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 md:py-32 bg-on-primary-fixed text-white">
        <div className="max-w-screen-md mx-auto text-center px-6 md:px-12">
          <h2 className="font-headline text-4xl md:text-5xl mb-6">
            Explore Fairline at Strong's Marine
          </h2>
          <p className="text-white/50 text-lg mb-12 max-w-md mx-auto leading-relaxed">
            Visit our showroom or browse the current Fairline inventory online.
            British precision, delivered to your dock.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/shop">
              <Button className="bg-secondary hover:bg-secondary/90 text-white rounded-none px-10 py-3 font-label text-xs uppercase tracking-widest">
                Browse Inventory
              </Button>
            </Link>
            <Link to="/vessel/fairline-phantom-65">
              <Button
                variant="outline"
                className="border-white/30 text-white hover:bg-white hover:text-on-primary-fixed rounded-none px-10 py-3 font-label text-xs uppercase tracking-widest"
              >
                Phantom 65 Details
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ── Sub-components ── */

function ModelCard({ className, h, img, title, sub, showBtn }) {
  return (
    <div
      className={`${className} group relative overflow-hidden ${h} rounded-lg`}
    >
      <img
        alt={title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        src={img}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      <div className="absolute bottom-8 md:bottom-10 left-8 md:left-10 text-white">
        <h3 className="font-headline text-3xl md:text-4xl font-bold">
          {title}
        </h3>
        <p className="font-label uppercase tracking-widest text-xs mt-2 opacity-80">
          {sub}
        </p>
        {showBtn && (
          <Link to="/vessel/fairline-phantom-65">
            <button className="mt-8 px-6 py-2 border border-white/30 hover:bg-white hover:text-on-primary-fixed transition-all text-xs uppercase tracking-widest font-bold font-label">
              Explore Model
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}

function StatBlock({ icon, value, label }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-14 h-14 rounded-full border border-on-surface/10 flex items-center justify-center text-secondary mb-4">
        {icon}
      </div>
      <span className="block font-headline text-3xl md:text-4xl text-on-surface font-light">
        {value}
      </span>
      <span className="block font-label text-[10px] uppercase tracking-widest text-on-surface/50 mt-2">
        {label}
      </span>
    </div>
  );
}
