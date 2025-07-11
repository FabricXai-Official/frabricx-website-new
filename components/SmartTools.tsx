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
      <h2 className="text-3xl md:text-4xl font-medium text-center mb-4 text-[#13191d] font-chillax">
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
              bg-[#242a30] border border-gray-700 rounded-xl p-6 text-left 
              hover:shadow-md 
              hover:-translate-y-2 
              hover:bg-gradient-to-r hover:from-[#10295c] hover:to-[#101828]
              transition-transform transition-colors duration-500 ease-in-out
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
            <h3 className="text-lg font-semibold text-[#f2f827] mb-2">
              {tool.title}
            </h3>
            <p className="text-sm text-[#d1d5db]">{tool.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
