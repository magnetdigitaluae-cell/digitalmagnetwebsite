import { Clock, Search, Target } from "lucide-react";

const items = [
  {
    num: "01",
    title: "Research Project",
    text: "Research uncovers insights, opportunities.",
    icon: Search,
    bg: "/images/bg/bg-service1.png",
    tint: "bg-[#e5f9ff]",
    iconColor: "text-cyan",
    numberBg: "bg-[#e5f9ff] text-cyan",
  },
  {
    num: "02",
    title: "Targeting",
    text: "Targeting connects businesses with ideal customers.",
    icon: Target,
    bg: "/images/bg/bg-service2.png",
    tint: "bg-[#eaf3ff]",
    iconColor: "text-blue",
    numberBg: "bg-[#eaf3ff] text-blue",
  },
  {
    num: "03",
    title: "On Time Delivery",
    text: "On-time delivery builds trust and ensures client satisfaction.",
    icon: Clock,
    bg: "/images/bg/bg-service3.png",
    tint: "bg-[#ffebe6]",
    iconColor: "text-orange",
    numberBg: "bg-[#ffebe6] text-orange",
  },
];

export function FeatureBoxes() {
  return (
    <section className="relative z-10 -mt-16 pb-[70px]">
      <div className="container-site grid gap-6 md:grid-cols-3">
        {items.map((item) => (
          <article
            key={item.title}
            className="relative overflow-hidden rounded-[20px] bg-white p-8 shadow-[8px_8px_30px_rgba(42,67,113,0.08)]"
            style={{
              backgroundImage: `url('${item.bg}')`,
              backgroundPosition: "top right",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div
              className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl ${item.numberBg}`}
            >
              <item.icon className={`h-6 w-6 ${item.iconColor}`} />
            </div>
            <div className="mb-2 font-display text-sm font-bold text-gold-ink">
              {item.num}
            </div>
            <h2 className="text-xl font-bold">{item.title}</h2>
            <p className="mt-2 text-[15px] text-muted">{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
