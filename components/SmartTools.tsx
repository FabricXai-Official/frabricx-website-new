import Image from "next/image";

export default function SmartTools() {
  const tools = [
    {
      title: "Automated Buyer Communication",
      description: "AI agents send multilingual, personalized emails and follow-ups.",
      icon: "/icons/mail.svg",
    },
    {
      title: "Real time Production Tracking",
      description: "Live updates on order milestones & progress.",
      icon: "/icons/chart.svg",
    },
    {
      title: "Data-Driven Decision Making",
      description: "Built-in insights to guide better business outcomes.",
      icon: "/icons/bar-chart.svg",
    },
    {
      title: "Scalable & Secure Platform",
      description: "Enterprise-level security and seamless growth.",
      icon: "/icons/shield.svg",
    },
  ];

  return (
    <section className="bg-gradient-to-t from-[#363a3d] to-[#a5adb4] rounded-3xl p-8 md:p-16 text-white shadow-lg">
      <h2 className="text-3xl md:text-4xl font-medium text-center mb-4 text-[#13191d] font-mono">
        Smart Tools for Smarter Operations
      </h2>
      <p className="text-[#13191d] text-center mb-12 max-w-3xl mx-auto">
        Leverage AI-powered solutions designed specifically for the RGM manufacturing industry.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {tools.map((tool, idx) => (
          <div
            key={idx}
            className="
              group relative bg-[#242a30] border border-gray-700 rounded-xl 
              p-6 text-left h-[220px] overflow-hidden
              transition-transform duration-300 ease-in-out hover:scale-105
              hover:bg-gradient-to-r hover:from-[#10295c] hover:to-[#101828]
            "
          >
            <div className="w-14 h-14 rounded-full bg-[#34383b] flex items-center justify-center mb-4">
              <Image
                src={tool.icon}
                alt={`${tool.title} Icon`}
                width={24}
                height={24}
              />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold text-[#f2f827] mb-2">
              {tool.title}
            </h3>

            {/* Description hidden by default, appears smoothly */}
            <p
              className="
                absolute bottom-6 left-6 right-6 text-sm text-[#d1d5db] 
                opacity-0 translate-y-4 
                group-hover:opacity-100 group-hover:translate-y-0
                transition-all duration-300 ease-in-out
              "
            >
              {tool.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
