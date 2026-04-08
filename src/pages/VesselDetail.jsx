import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Anchor,
  Ruler,
  Waves,
  BedDouble,
  Bath,
  Fuel,
  Droplets,
  Gauge,
  Ship,
  Award,
  Cog,
  Palette,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

const images = [
  "https://cdn.callersiq.com/inventory_uploads/attachment-1724943670109438022866d08d36da501.jpg",
  "https://cdn.callersiq.com/inventory_uploads/attachment-1724943667191627881966d08d33ea710.jpg",
  "https://cdn.callersiq.com/inventory_uploads/attachment-17249436726248447766d08d38bd7dc.jpg",
  "https://cdn.callersiq.com/inventory_uploads/attachment-1724943668129407650366d08d348978e.jpg",
];

const specifications = [
  { label: "Length", value: "65 ft", icon: Ruler },
  { label: "Beam", value: "16.8 ft", icon: Anchor },
  { label: "Draft", value: "4.9 ft", icon: Waves },
  { label: "Cabins", value: "3", icon: BedDouble },
  { label: "Heads", value: "2", icon: Bath },
  { label: "Engine", value: "Twin Volvo Penta IPS 1200", icon: Cog },
  { label: "Fuel", value: "660 gal", icon: Fuel },
  { label: "Water", value: "158 gal", icon: Droplets },
  { label: "Max Speed", value: "34 knots", icon: Gauge },
  { label: "Cruise Speed", value: "28 knots", icon: Ship },
];

const highlights = [
  {
    icon: Award,
    title: "Award-Winning Design",
    description:
      "Recipient of multiple international design awards, the Phantom 65 represents the pinnacle of British naval architecture with its sleek, aggressive silhouette and meticulously sculpted hull lines.",
  },
  {
    icon: Cog,
    title: "Advanced IPS Propulsion",
    description:
      "Twin Volvo Penta IPS 1200 pod drives deliver exceptional maneuverability, fuel efficiency, and reduced noise levels, offering a driving experience that redefines on-water performance.",
  },
  {
    icon: Palette,
    title: "Luxury Interior by Alberto Mancini",
    description:
      "World-renowned designer Alberto Mancini brings an unparalleled vision of contemporary elegance, blending premium materials with fluid spatial design throughout every cabin and living area.",
  },
];

export default function VesselDetail() {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className="min-h-screen bg-white">
      {/* Back Navigation */}
      <div className="bg-[#f2f3ff] border-b border-[#c6c6cd]">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 font-label text-sm font-medium text-[#45464c] transition-colors hover:text-[#141b2c]"
          >
            <ArrowLeft className="size-4" />
            Back to Inventory
          </Link>
        </div>
      </div>

      {/* Hero Image Gallery */}
      <section className="bg-[#141b2c]">
        <div className="mx-auto max-w-7xl">
          {/* Main Image */}
          <div className="relative aspect-[16/9] w-full overflow-hidden sm:aspect-[21/9]">
            <img
              src={images[activeImage]}
              alt="2024 Fairline Phantom 65"
              className="h-full w-full object-cover transition-all duration-700 ease-out"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#141b2c]/60 via-transparent to-transparent" />
          </div>

          {/* Thumbnail Strip */}
          <div className="flex gap-2 px-4 py-4 sm:gap-3 sm:px-6 lg:px-8">
            {images.map((img, index) => (
              <button
                key={index}
                onClick={() => setActiveImage(index)}
                className={`relative aspect-[16/10] w-20 flex-shrink-0 overflow-hidden rounded-lg border-2 transition-all duration-300 sm:w-28 lg:w-36 ${
                  activeImage === index
                    ? "border-[#b81c35] opacity-100 shadow-lg shadow-[#b81c35]/20"
                    : "border-transparent opacity-50 hover:opacity-80"
                }`}
              >
                <img
                  src={img}
                  alt={`View ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Vessel Info Panel */}
      <section className="border-b border-[#c6c6cd] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-start">
            {/* Left Column */}
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center rounded-full bg-[#b81c35]/10 px-3 py-1 font-label text-xs font-semibold uppercase tracking-wider text-[#b81c35]">
                  New
                </span>
                <span className="font-label text-xs tracking-wide text-[#45464c]">
                  Stock #22993
                </span>
              </div>
              <h1 className="font-headline text-3xl font-extrabold tracking-tight text-[#141b2c] sm:text-4xl lg:text-5xl">
                2024 Fairline Phantom 65
              </h1>
              <p className="font-headline text-xl font-semibold text-[#45464c] sm:text-2xl">
                Contact for Price
              </p>
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-end">
              <Button
                size="lg"
                className="h-12 rounded-lg bg-[#b81c35] px-8 font-label text-sm font-semibold uppercase tracking-wider text-white shadow-lg shadow-[#b81c35]/25 transition-all hover:bg-[#b81c35]/90 hover:shadow-xl hover:shadow-[#b81c35]/30"
              >
                Request a Quote
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-12 rounded-lg border-[#141b2c] px-8 font-label text-sm font-semibold uppercase tracking-wider text-[#141b2c] transition-all hover:bg-[#141b2c] hover:text-white"
              >
                Schedule Viewing
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications Grid */}
      <section className="border-b border-[#c6c6cd] bg-[#f2f3ff]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="mb-10 font-headline text-2xl font-bold tracking-tight text-[#141b2c] sm:text-3xl">
            Specifications
          </h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5 lg:gap-6">
            {specifications.map((spec) => {
              const Icon = spec.icon;
              return (
                <div
                  key={spec.label}
                  className="group rounded-xl border border-[#c6c6cd] bg-white p-5 transition-all duration-300 hover:border-[#b81c35]/30 hover:shadow-lg"
                >
                  <Icon className="mb-3 size-5 text-[#b81c35]" />
                  <p className="font-label text-xs font-medium uppercase tracking-wider text-[#45464c]">
                    {spec.label}
                  </p>
                  <p className="mt-1 font-headline text-lg font-bold text-[#141b2c]">
                    {spec.value}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="border-b border-[#c6c6cd] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="mb-10 font-headline text-2xl font-bold tracking-tight text-[#141b2c] sm:text-3xl">
            Highlights
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group rounded-2xl border border-[#c6c6cd] bg-[#f2f3ff] p-8 transition-all duration-300 hover:border-[#b81c35]/30 hover:shadow-xl"
                >
                  <div className="mb-5 flex size-12 items-center justify-center rounded-xl bg-[#b81c35]/10">
                    <Icon className="size-6 text-[#b81c35]" />
                  </div>
                  <h3 className="mb-3 font-headline text-lg font-bold text-[#141b2c]">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm leading-relaxed text-[#45464c]">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About This Vessel */}
      <section className="border-b border-[#c6c6cd] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="mb-8 font-headline text-2xl font-bold tracking-tight text-[#141b2c] sm:text-3xl">
            About This Vessel
          </h2>
          <div className="max-w-3xl space-y-5">
            <p className="font-body text-base leading-relaxed text-[#45464c]">
              The 2024 Fairline Phantom 65 is a masterwork of modern yacht
              design, seamlessly blending breathtaking performance with
              world-class luxury. Crafted at Fairline's state-of-the-art
              facility in Oundle, England, this 65-foot express cruiser features
              a deep-V hull engineered for stability and speed in all sea
              conditions. Powered by twin Volvo Penta IPS 1200 pod drives, the
              Phantom 65 delivers an exhilarating top speed of 34 knots while
              maintaining whisper-quiet cabin noise levels and outstanding fuel
              efficiency.
            </p>
            <p className="font-body text-base leading-relaxed text-[#45464c]">
              The interior, conceived by acclaimed Italian designer Alberto
              Mancini, showcases sweeping panoramic windows, hand-stitched
              Italian leather, and rich walnut joinery throughout three spacious
              staterooms and two full heads. The open-plan saloon flows
              effortlessly into the cockpit entertaining area, creating a social
              space that rivals the finest waterfront residences. Whether you
              seek thrilling offshore passages or relaxed coastal cruising, the
              Phantom 65 delivers an ownership experience that is truly without
              compromise.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-[#141b2c]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-10 lg:flex-row lg:justify-between">
            <div className="text-center lg:text-left">
              <h2 className="font-headline text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Interested in this vessel?
              </h2>
              <p className="mt-3 max-w-xl font-body text-base text-white/60">
                Our team of yacht specialists is ready to guide you through
                every step, from initial inquiry to sea trial and delivery.
              </p>
            </div>

            <div className="flex flex-col gap-6 sm:flex-row sm:items-center lg:flex-col lg:items-end">
              <div className="flex items-center gap-3">
                <Phone className="size-5 text-[#b81c35]" />
                <span className="font-label text-sm font-medium text-white">
                  +1 (954) 555-0199
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="size-5 text-[#b81c35]" />
                <span className="font-label text-sm font-medium text-white">
                  sales@strongsyachts.com
                </span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="size-5 text-[#b81c35]" />
                <span className="font-label text-sm font-medium text-white">
                  Fort Lauderdale, FL
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
