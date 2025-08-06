// app/blogs/page.tsx
"use client";

import Image from "next/image";
import React, { useState, useMemo } from "react";
import { Button } from "flowbite-react";
import { Calendar, Clock, ArrowRight, Tag, Search, Filter, TrendingUp, BookOpen, Shield, Globe, Zap } from "lucide-react";
import Link from "next/link";
import MobileChatButton from "@/components/MobileChatButton";
import BackToHome from "@/components/BackToHome";

const blogPosts = [
  {
    id: 1,
    title: "Supply Chain Insights: Enhancing Efficiency in Bangladesh's RMG Industry",
    subtitle: "Is Bangladesh's RMG Supply Chain Ready for the Next Decade?",
    coverImage: "/blogs-cover/blog1.png",
    category: "Supply Chain",
    readTime: "8 min read",
    date: "March 15, 2024",
    featured: true,
    excerpt: "The Ready-Made Garments (RMG) industry is the lifeblood of Bangladesh's economy, contributing over 80% of total exports and employing nearly 4 million workers. However, inefficiencies in supply chain management (SCM) are hindering growth...",
    content: `
      <p>The Ready-Made Garments (RMG) industry is the lifeblood of Bangladesh's economy, contributing over 80% of total exports and employing nearly 4 million workers. However, inefficiencies in supply chain management (SCM) are hindering growth, raising concerns about sustainability and competitiveness in the global market.</p>
      <p>With global buyers now prioritizing lead time, compliance, and sustainability over just cost, the time has come for the Bangladesh RMG sector to rethink its supply chain strategies.</p>
      <h2>The Current Landscape: Bangladesh's RMG Supply Chain</h2>
      <ul>
              <li>🔹 Lead time for exports from Bangladesh: 90–120 days vs. China (40–50 days), India (50–70 days), and Sri Lanka (19–45 days).</li>
              <li>🔹 Over 70% of raw materials (fabrics, accessories) are imported, increasing delays and costs.</li>
              <li>🔹 Compliance requirements after Rana Plaza & Tazreen Fashion disasters have raised production costs.</li>
            </ul>
      <h2>Key Challenges & Solutions</h2>
      <ul>
        <li>🚨 <strong>Challenge 1:</strong> Long Lead Times<br /><strong>Solution:</strong> Investing in local textile and accessories manufacturing to strengthen backward linkages.</li>
        <li>⚙️ <strong>Challenge 2:</strong> Low Adoption of SCM Technologies<br /><strong>Solution:</strong> Implementing ERP systems, AI-driven demand forecasting, and real-time tracking.</li>
        <li>🔗 <strong>Challenge 3:</strong> Weak Supply Chain Collaboration<br /><strong>Solution:</strong> Data-sharing platforms and collaborative planning to enhance coordination and reduce inefficiencies.</li>
        <li>🛑 <strong>Challenge 4:</strong> Rising Compliance Costs & Safety Concerns<br /><strong>Solution:</strong> Implementing workplace safety programs, automation, and energy-efficient processes.</li>
        <li>🚢 <strong>Challenge 5:</strong> Inefficient Logistics & Port Congestion<br /><strong>Solution:</strong> Expanding inland logistics (rail, river transport) and automating port operations.</li>
        <li>🔄 <strong>Challenge 6:</strong> Lack of Product Innovation & Diversification<br /><strong>Solution:</strong> Encouraging fashion innovation, high-value apparel (sportswear, technical textiles), and sustainable products.</li>
            </ul>
      <h2>Future Outlook: Transforming Bangladesh's SCM for Global Competitiveness</h2>
      <p>The global fashion industry is undergoing rapid digitalization, and buyers are demanding shorter lead times, better compliance, and eco-friendly production. Bangladesh must embrace supply chain transformation to stay competitive.</p>
      <ul>
              <li>✔️ AI and Machine Learning for demand forecasting and automated inventory management.</li>
              <li>✔️ Blockchain for supply chain transparency and ensuring compliance.</li>
              <li>✔️ Green manufacturing initiatives to attract sustainability-focused brands.</li>
              <li>✔️ Smart factories & IoT-enabled production for efficiency improvements.</li>
            </ul>
      <p>By reducing lead times, improving compliance, and integrating technology, Bangladesh's RMG sector can reach its $50 billion export target and sustain long-term global competitiveness.</p>
    `
  },
  {
    id: 2,
    title: "15 Years After the Garib & Garib Factory Fire: How AI Can Revolutionize Fire Safety in Bangladesh's RMG Industry",
    subtitle: "A comprehensive look at fire safety improvements and AI solutions",
    coverImage: "/blogs-cover/blog2.png",
    category: "Safety & Compliance",
    readTime: "12 min read",
    date: "February 26, 2024",
    featured: false,
    excerpt: "On February 26, 2010, a devastating fire broke out at the Garib & Garib Sweater Factory in Gazipur, Bangladesh, claiming the lives of at least 21 workers due to toxic smoke inhalation and the lack of proper emergency exits...",
    content: `
      <h3>Introduction</h3>
      <p>On February 26, 2010, a devastating fire broke out at the Garib & Garib Sweater Factory in Gazipur, Bangladesh, claiming the lives of at least 21 workers due to toxic smoke inhalation and the lack of proper emergency exits. This tragedy was one of many industrial disasters that exposed the fire hazards in garments and the dire need for better textile factory safety regulations.</p>
      <p>Fifteen years later, Bangladesh's Ready-Made Garment (RMG) industry has made significant progress in improving workplace safety, yet fire risks remain a major concern. Advances in AI fire prevention in RMG, IoT-based fire detection, and smart automation now present a game-changing opportunity to prevent such disasters.</p>
      <h3>The Incident: What Happened on February 26, 2010?</h3>
      <ul>
              <li><strong>Location:</strong> Gazipur, Bangladesh</li>
              <li><strong>Casualties:</strong> 21+ workers perished due to smoke inhalation and blocked exits</li>
              <li><strong>Cause:</strong> Electrical short circuit near highly flammable materials</li>
              <li><strong>Safety Failures:</strong> No advanced fire detection systems, blocked stairways and locked exits, lack of worker fire safety training, absence of fire suppression equipment</li>
            </ul>
      <h3>Other Major Industrial Disasters in Bangladesh</h3>
      <ul>
              <li><strong>Tazreen Fashions Fire (2012):</strong> 117 deaths, caused by inadequate fire exits.</li>
              <li><strong>Rana Plaza Collapse (2013):</strong> 1,100+ deaths, a structural failure due to poor factory conditions.</li>
            </ul>
      <h3>Why Did This Happen? (Root Causes)</h3>
      <ul>
              <li>Poor infrastructure & outdated safety systems</li>
              <li>Lack of proper fire detection & suppression systems</li>
              <li>Blocked or insufficient emergency exits</li>
              <li>Weak regulatory enforcement & compliance failures</li>
            </ul>
      <h3>The Aftermath & Industry Reforms</h3>
      <ul>
              <li><strong>Accord on Fire and Building Safety (2013):</strong> 38,000+ factory inspections and enforced safety improvements.</li>
              <li><strong>Alliance for Bangladesh Worker Safety (2013):</strong> Fire safety, emergency training, and compliance enforcement.</li>
              <li><strong>RMG Sustainability Council (2020):</strong> National body ensuring ongoing compliance with safety standards.</li>
            </ul>
      <h3>The Role of AI & Modern Technology</h3>
      <ul>
              <li><strong>AI-Powered Fire Detection & Prevention:</strong> Thermal cameras & IoT sensors detect faults early.</li>
              <li><strong>Smart Fire Suppression Systems:</strong> AI-controlled sprinklers and robotic firefighters.</li>
              <li><strong>AI-Optimized Evacuation & Safety:</strong> Wearable IoT alerts and digital twin simulations.</li>
              <li><strong>AI for Compliance & Training:</strong> CCTV-based audits and VR fire drills.</li>
            </ul>
      <p>To prevent future tragedies, Bangladesh's garment industry must fully integrate AI-powered safety systems, digital twin technology, and smart automation into its fire prevention strategies.</p>
    `
  },
  {
    id: 3,
    title: "Bangladesh's Suspension of Yarn Imports from India: Causes, Implications, and Path Forward",
    subtitle: "Analyzing the impact on textile trade dynamics",
    coverImage: "/blogs-cover/blog3.png",
    category: "Trade & Policy",
    readTime: "10 min read",
    date: "January 20, 2024",
    featured: false,
    excerpt: "Bangladesh's National Board of Revenue (NBR) has suspended the import of yarn from India through land ports effective April 15, 2025. This decision marks a significant shift in the textile trade dynamics...",
    content: `
      <p>Bangladesh's National Board of Revenue (NBR) has suspended the import of yarn from India through land ports effective April 15, 2025. This decision marks a significant shift in the textile trade dynamics between the two neighboring countries and highlights the ongoing tensions between protecting domestic industries and ensuring a competitive manufacturing sector.</p>
      <h3>Motivations Behind the Suspension</h3>
      <p>The primary driver was advocacy from the Bangladesh Textile Mills Association (BTMA), backed by a recommendation from the Trade and Tariff Commission to halt land‑port imports and bolster domestic yarn usage.</p>
      <h3>Price Disparities & Under‑Invoicing Concerns</h3>
      <ul>
              <li>Price gap: 20–25 cents per kilogram favoring imported yarn</li>
              <li>Under‑invoicing at Chattogram Customs House raising evasion concerns</li>
            </ul>
      <h3>Supply Chain Dynamics</h3>
      <p>Indian yarn is warehoused in Kolkata and shipped via land ports, offering speed and cost advantages that undercut local producers.</p>
      <h3>Historical Evolution of Yarn Imports</h3>
      <p>Imports rose to 12.15 lakh tonnes in 2024 (31.45% ↑ from 2023), valued at $3 billion, with January 2025 figures hitting 36,735 M BDT.</p>
      <h3>Impact on SMEs</h3>
      <p>Smaller exporters rely on land‑port flexibility; the ban threatens their supply agility and cost structure.</p>
      <h3>Comparative Quality & Strategic Responses</h3>
      <ul>
              <li>Diversify sources via sea/air—China, Turkey, Uzbekistan</li>
              <li>Invest in domestic infrastructure—power, gas, modern equipment</li>
              <li>Explore vertical integration into spinning capacity</li>
              <li>Leverage automation and digital monitoring for efficiency</li>
            </ul>
      <p>Balancing protection with competitiveness will determine the long‑term success of Bangladesh's textile sector.</p>
    `
  },
  {
    id: 4,
    title: "Financial Impact of Digital Presence and Website Availability on Bangladesh's RMG and Buying House Industries",
    subtitle: "A comprehensive analysis of digital transformation opportunities",
    coverImage: "/blogs-cover/blog4.png",
    category: "Digital Transformation",
    readTime: "15 min read",
    date: "December 10, 2023",
    featured: false,
    excerpt: "The ready-made garments (RMG) sector and buying houses in Bangladesh face significant financial challenges due to limited digital presence and website adoption. With the RMG sector contributing approximately 83% of Bangladesh's total export earnings...",
    content: `
      <p>The ready-made garments (RMG) sector and buying houses in Bangladesh face significant financial challenges due to limited digital presence and website adoption. With the RMG sector contributing approximately 83% of Bangladesh's total export earnings and generating $38.48 billion in 2024, the lack of comprehensive digital transformation presents substantial missed opportunities.</p>
      <h3>Financial Importance of Websites for RMG Factories</h3>
      <h4>Revenue Generation and Market Access</h4>
      <p>Digital marketing and website presence offer significant ROI advantages for textile manufacturers. Studies indicate that digital marketing provides better return on investment compared to traditional advertising methods, with data-driven insights helping track performance and refine strategies.</p>
      <ul>
        <li>Global Market Reach: Access virtual markets worth $308 billion by 2026.</li>
              <li>Direct-to-Consumer Models: Higher profit margins and branding control.</li>
              <li>Enhanced Brand Building: 75% of buyers judge credibility by website quality.</li>
              <li>Cost-Effective Marketing: Up to 200% higher conversion rates, 62% increase in lead gen.</li>
            </ul>
      <h4>Operational Efficiency Benefits</h4>
      <ul>
              <li>Supply Chain Optimization via ERP and real-time tracking.</li>
              <li>Quality Control Enhancement with digital inspection and ML.</li>
              <li>Data-Driven Decision Making using analytics tools.</li>
            </ul>
      <h3>Annual Financial Losses</h3>
      <ul>
        <li>Direct Production Losses: $400 million during labor unrest (≃$1 million/factory).</li>
        <li>Market Share Erosion: $2 billion in shifted orders (5–6% of exports).</li>
              <li>Operational Costs: 50% production cost increase; 40% factories at loss.</li>
            </ul>
      <h3>Financial Impact on Buying Houses</h3>
      <ul>
              <li>High Client Acquisition Costs without websites.</li>
              <li>Lost Business: 24/7 storefront absence reduces opportunities.</li>
              <li>Communication Inefficiencies: No digital collaboration tools.</li>
            </ul>
      <h3>Comparative Analysis: Digital Adoption</h3>
      <p>Bangladesh's digital adoption lags behind Vietnam, India, and China, which leverage advanced e‑commerce, Industry 4.0, and live‑stream commerce to gain market share.</p>
      <h3>Recommendations</h3>
      <ul>
              <li>Immediate Website Development & SEO investment.</li>
              <li>ERP & Analytics Tool Adoption for efficiency.</li>
              <li>Participation in Global B2B Platforms (e.g., Alibaba).</li>
            </ul>
      <p>Digital transformation is no longer optional.</p>
    `
  },
  {
    id: 5,
    title: "Key Strategies for Attracting Top International Buyers in the RMG Sector",
    subtitle: "Comprehensive guide to winning global partnerships",
    coverImage: "/blogs-cover/blog5.png",
    category: "Business Strategy",
    readTime: "18 min read",
    date: "November 25, 2023",
    featured: false,
    excerpt: "In today's fast-evolving global apparel market, standing out to top international buyers is more challenging—and more vital—than ever. Whether you're a seasoned manufacturer or an emerging player in the Ready-Made Garment (RMG) sector...",
    content: `
      <p>In today's fast-evolving global apparel market, standing out to top international buyers is more challenging—and more vital—than ever. Whether you're a seasoned manufacturer or an emerging player in the Ready-Made Garment (RMG) sector, here's how you can make your business irresistible to the world's leading brands.</p>
      <ol>
        <li>
          <strong>Diversify and Upgrade Your Product Portfolio</strong>
          <p>International buyers are looking for more than just basics. Expand your offerings to include value-added, innovative, and sustainable products. Focus on quality enhancements and introduce collections that align with global fashion trends.</p>
      </li>
      <li>
          <strong>Prioritize Sustainability and Compliance</strong>
          <p>Sustainability isn't just a buzzword—it's a business imperative. Invest in eco‑friendly materials, achieve recognized certifications, and ensure ethical labor practices throughout your supply chain. Transparent operations and compliance with international standards build trust and open doors to premium buyers.</p>
      </li>
      <li>
          <strong>Deliver Fast, Reliable, and Flexible Service</strong>
          <p>Buyers value partners who can meet tight deadlines and adapt to changing requirements. Streamline your operations for efficiency, ensure consistent on‑time delivery, and be ready to accommodate last‑minute requests. Reliability is a key differentiator.</p>
      </li>
      <li>
          <strong>Embrace Digital Transformation</strong>
          <p>Digitize your processes to enhance transparency and buyer confidence. Offer real‑time order tracking, digital sampling, and even virtual factory tours. Use digital platforms—especially LinkedIn—to showcase your capabilities and connect directly with decision‑makers.</p>
      </li>
      <li>
          <strong>Build a Strong Global Brand</strong>
          <p>Invest in B2B marketing and create a professional, engaging online presence. Share your success stories, certifications, and unique selling points through targeted content. Participate in international trade fairs and industry events to increase visibility and credibility.</p>
      </li>
      <li>
          <strong>Foster Long-Term Relationships</strong>
          <p>Trust is built over time. Be transparent in your communications, offer stable pricing, and provide exceptional customer service. Collaborate on product development and stay proactive in addressing buyer needs. Long‑term partnerships yield consistent business and growth.</p>
      </li>
      <li>
          <strong>Stay Ahead of Regulatory and Market Trends</strong>
          <p>Understand the latest trade policies, regulatory requirements, and market shifts. Proactively address compliance issues and keep your buyers informed. Being a knowledgeable and reliable partner makes you indispensable.</p>
      </li>
      <li>
          <strong>Invest in Workforce Skills and Infrastructure</strong>
          <p>Highlight your skilled workforce and robust infrastructure. Continuous training and investment in technology not only improve productivity but also assure buyers of your capability to deliver at scale and quality.</p>
      </li>
    </ol>
      <p>Final Thought: Attracting top international buyers requires more than competitive pricing—it demands innovation, reliability, and a commitment to excellence. By focusing on these strategies, RMG manufacturers can position themselves as preferred partners in the global apparel supply chain.</p>
    `
  }
];

const categories = [
  { id: "all", name: "All Posts", icon: BookOpen, count: blogPosts.length },
  { id: "supply-chain", name: "Supply Chain", icon: TrendingUp, count: blogPosts.filter(p => p.category === "Supply Chain").length },
  { id: "safety-compliance", name: "Safety & Compliance", icon: Shield, count: blogPosts.filter(p => p.category === "Safety & Compliance").length },
  { id: "trade-policy", name: "Trade & Policy", icon: Globe, count: blogPosts.filter(p => p.category === "Trade & Policy").length },
  { id: "digital-transformation", name: "Digital Transformation", icon: Zap, count: blogPosts.filter(p => p.category === "Digital Transformation").length },
  { id: "business-strategy", name: "Business Strategy", icon: TrendingUp, count: blogPosts.filter(p => p.category === "Business Strategy").length },
];

export default function BlogsPage() {
  const [selectedPost, setSelectedPost] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = useMemo(() => {
    let filtered = blogPosts;
    
    // Filter by category
    if (selectedCategory !== "all") {
      const categoryMap: { [key: string]: string } = {
        "supply-chain": "Supply Chain",
        "safety-compliance": "Safety & Compliance", 
        "trade-policy": "Trade & Policy",
        "digital-transformation": "Digital Transformation",
        "business-strategy": "Business Strategy"
      };
      filtered = filtered.filter(post => post.category === categoryMap[selectedCategory]);
    }
    
    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    return filtered;
  }, [selectedCategory, searchQuery]);

  const featuredPost = blogPosts.find(post => post.featured);

  return (
    <div className="min-h-screen bg-[#13191D] text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-[#f2f827] via-transparent to-transparent"></div>
          <div className="absolute top-20 right-20 w-72 h-72 bg-[#f2f827] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#f2f827] rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#f2f827]/10 border border-[#f2f827]/30 rounded-full text-[#f2f827] text-sm font-medium mb-6 backdrop-blur-sm">
              <Tag className="w-4 h-4" />
              Industry Insights & Analysis
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-mono font-bold mb-6">
              fabricXai{" "}
              <span className="relative inline-block">
                Blog
                <img
                  src="/icons/highlighter.svg"
                  alt="Highlighter"
                  className="absolute -bottom-2 left-0 w-full h-auto"
                />
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-[#a8b0b7] max-w-3xl mx-auto leading-relaxed">
              Expert insights, industry analysis, and the latest trends in RMG technology and innovation
            </p>
          </div>

          {/* Search and Filter Section */}
          <div className="mb-12">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#a8b0b7] w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-[#1a2025] border border-[#34383B] rounded-xl text-white placeholder-[#a8b0b7] focus:border-[#f2f827] focus:outline-none transition-all duration-300"
                />
              </div>
              
              {/* Category Filter */}
              <div className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-[#a8b0b7]" />
                <span className="text-[#a8b0b7] text-sm">Filter by:</span>
              </div>
            </div>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-[#f2f827] text-[#13191D] shadow-lg shadow-[#f2f827]/25"
                    : "bg-[#1a2025] text-[#a8b0b7] border border-[#34383B] hover:border-[#f2f827]/50 hover:text-white"
                }`}
              >
                <category.icon className="w-4 h-4" />
                {category.name}
                <span className="ml-1 px-2 py-0.5 bg-black/20 rounded-full text-xs">
                  {category.count}
                </span>
              </button>
            ))}
          </div>

          {/* Featured Post */}
          {featuredPost && selectedCategory === "all" && !searchQuery && (
            <div className="mb-16">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-[#f2f827] mb-2">Featured Article</h2>
                <div className="w-24 h-1 bg-[#f2f827] mx-auto rounded-full"></div>
              </div>
              
              <article 
                className="bg-gradient-to-br from-[#1a2025] to-[#0f1418] rounded-3xl overflow-hidden border border-[#34383B] hover:border-[#f2f827]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#f2f827]/10 group cursor-pointer"
                onClick={() => setSelectedPost(featuredPost.id)}
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Cover Image */}
                  <div className="relative h-64 lg:h-full overflow-hidden">
                    <Image
                      src={featuredPost.coverImage}
                      alt={featuredPost.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center px-3 py-1 bg-[#f2f827] text-[#13191D] text-sm font-semibold rounded-full">
                        {featuredPost.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-4 text-sm text-[#a8b0b7] mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {featuredPost.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {featuredPost.readTime}
                      </div>
                    </div>

                    <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-white group-hover:text-[#f2f827] transition-colors duration-300 leading-tight">
                      {featuredPost.title}
                    </h2>
                    
                    <p className="text-[#a8b0b7] text-lg leading-relaxed mb-6">
                      {featuredPost.excerpt}
                    </p>

                    <Button
                      outline
                      className="border-[#f2f827] text-[#f2f827] hover:bg-[#f2f827] hover:text-[#13191D] group-hover:border-white group-hover:text-white transition-all duration-300 w-fit"
                    >
                      Read Featured Article
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </div>
  </div>
</article>
      </div>
          )}

          {/* Results Count */}
          <div className="mb-8">
            <p className="text-[#a8b0b7] text-center">
              Showing {filteredPosts.length} of {blogPosts.length} articles
            </p>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-[#1a2025] rounded-2xl overflow-hidden border border-[#34383B] hover:border-[#f2f827]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#f2f827]/10 group cursor-pointer transform hover:-translate-y-2"
                onClick={() => setSelectedPost(selectedPost === post.id ? null : post.id)}
              >
                {/* Cover Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center px-3 py-1 bg-[#f2f827] text-[#13191D] text-xs font-semibold rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-[#a8b0b7] mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>

                  <h2 className="text-xl font-bold mb-3 text-white group-hover:text-[#f2f827] transition-colors duration-300 leading-tight">
                    {post.title}
                  </h2>
                  
                  <p className="text-[#a8b0b7] text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <Button
                      outline
                      className="border-[#f2f827] text-[#f2f827] hover:bg-[#f2f827] hover:text-[#13191D] group-hover:border-white group-hover:text-white transition-all duration-300"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* No Results */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-[#1a2025] rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-[#a8b0b7]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">No articles found</h3>
              <p className="text-[#a8b0b7] mb-6">
                Try adjusting your search terms or category filter
              </p>
              <Button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                }}
                className="bg-[#f2f827] text-[#13191D] hover:bg-[#e0e626] border-none"
              >
                Clear Filters
              </Button>
            </div>
          )}

          {/* Newsletter Signup */}
          <div className="mt-20 flex justify-center">
            <div className="bg-[#1c1e22] text-white rounded-2xl px-6 py-8 w-[90%] sm:w-[80%] lg:w-[70%] text-center flex flex-col items-center gap-4">
              <h3 className="text-xl sm:text-2xl font-bold">
                Subscribe to Our{" "}
                <span className="text-[#f2f827]">Monthly Insights</span>
              </h3>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-2 w-full">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="px-4 py-2 rounded-md text-black bg-[#d9d9d9] w-full sm:w-80"
                />
                <Button className="w-full sm:w-40">Subscribe</Button>
              </div>

              <p className="text-sm text-[#a8b0b7]">
                Get exclusive trends and tips straight to your inbox — no spam
              </p>

              <div className="text-center text-xs text-[#ffffff] mt-5">
                &ldquo;Read by 500+ garment industry leaders across Bangladesh.&rdquo;
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Article Modal */}
      {selectedPost && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-[#1a2025] rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-[#34383B]">
            <div className="p-6 md:p-8">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-[#f2f827] pr-4">
                  {blogPosts.find(p => p.id === selectedPost)?.title}
                </h2>
                <button
                  onClick={() => setSelectedPost(null)}
                  className="text-[#a8b0b7] hover:text-white text-3xl font-light transition-colors duration-300"
                >
                  ×
                </button>
              </div>
              
              <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden mb-6">
                <Image
                  src={blogPosts.find(p => p.id === selectedPost)?.coverImage || ""}
                  alt="Blog cover"
                  fill
                  className="object-cover"
                />
              </div>

              <div 
                className="prose prose-invert max-w-none prose-headings:text-[#f2f827] prose-p:text-[#a8b0b7] prose-strong:text-white prose-li:text-[#a8b0b7]"
                dangerouslySetInnerHTML={{ 
                  __html: blogPosts.find(p => p.id === selectedPost)?.content || "" 
                }}
              />

              <div className="mt-8 pt-6 border-t border-[#34383B]">
                <p className="font-semibold text-[#f2f827] text-lg">
                  💡 Drop your insights in the comments!
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      <BackToHome />
      <MobileChatButton />
    </div>
  );
}
