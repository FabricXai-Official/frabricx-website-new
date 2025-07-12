import Image from "next/image";

export default function SolutionsAndChallenges() {
  const solutions = [
    {
      title: "AI-driven Communication",
      description:
        "Automated, multilingual communication ensures clear and timely information exchange.",
      icon: "/icons/soluiton1.svg",
    },
    {
      title: "Automated Data Entry",
      description:
        "AI-powered data extraction and processing eliminates manual work and errors.",
      icon: "/icons/solution2.svg",
    },
    {
      title: "Predictive Analytics",
      description:
        "Data-driven forecasting helps optimize production planning and resource allocation.",
      icon: "/icons/solution3.svg",
    },
    {
      title: "Live Dashboards",
      description:
        "Real-time visibility into production status and performance metrics.",
      icon: "/icons/solution4.svg",
    },
  ];

  const challenges = [
    {
      title: "Poor Communication Delays Orders",
      description:
        "Miscommunication leads to costly production delays and buyer dissatisfaction.",
      icon: "/icons/challenge1.svg",
    },
    {
      title: "Manual Data Processes",
      description:
        "Time-consuming paperwork and error-prone manual data entry waste resources.",
      icon: "/icons/challenge2.svg",
    },
    {
      title: "Unreliable Forecasting",
      description:
        "Lack of data-driven insights leads to poor planning and resource allocation.",
      icon: "/icons/challenge3.svg",
    },
    {
      title: "No Real-time Status",
      description:
        "Inability to track production progress in real-time creates blind spots.",
      icon: "/icons/challenge4.svg",
    },
  ];

  return (
    <section className="bg-gradient-to-t from-[#13191d] to-[#1e2529] rounded-t-3xl py-16 px-4 md:px-50 text-white font-sans">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#f2f827]">
          Solving RGM Industry's Biggest Challenges
        </h2>
        <p className="text-gray-400 mt-2">
          Transform your RGM operations with AI-powered solutions.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-10 md:gap-20 mb-12">
        {/* Solutions + Buttons */}
        <div className="flex flex-col md:max-w-[500px] w-full">
          <div className="bg-[#34383b] hover:bg-[#2a2d30] rounded-xl p-8 w-full hover:scale-105 transform transition-all duration-300">
            <h3 className="text-2xl font-bold text-[#f2f827] mb-6">Solutions</h3>
            <ul className="space-y-5">
              {solutions.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#1a2025] rounded-full flex items-center justify-center flex-shrink-0">
                    <Image src={item.icon} alt="" width={20} height={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-white">{item.title}</p>
                    <p className="text-sm text-gray-400">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row self-center gap-4 mt-6">
            <button className="bg-[#f2f827] text-black font-semibold px-6 py-3 rounded-2xl hover:brightness-110 transition">
              Request a Demo
            </button>
            <button className="border border-[#f2f827] text-[#f2f827] font-semibold px-6 py-3 rounded-2xl hover:bg-[#f2f827]/10 transition">
              Be an Early Bird
            </button>
          </div>
        </div>

        {/* Challenges */}
        <div className="rounded-xl border border-white hover:bg-[#0f141a] hover:scale-105 transform transition-all duration-300 p-10 flex-1 flex flex-col justify-between md:max-w-[550px] w-full min-h-[500px]">
          <div className="flex flex-col gap-10">
            <h3 className="text-2xl font-bold text-[#f2f827]">Challenges</h3>
            <ul className="flex flex-col gap-8">
              {challenges.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#34383b] rounded-full flex items-center justify-center flex-shrink-0">
                    <Image
                      src={item.icon}
                      alt=""
                      width={20}
                      height={20}
                      className="w-5 h-5 object-contain"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-[#f2f827]">{item.title}</p>
                    <p className="text-sm text-gray-400">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
