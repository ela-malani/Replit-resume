import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Download, Mail, Phone, ChevronDown, ExternalLink } from "lucide-react";
import { SiLinkedin, SiDropbox } from "react-icons/si";
import { FaMicrosoft } from "react-icons/fa";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Patents", href: "#patents" },
  { label: "Connect", href: "#connect" },
];

const workExperience = [
  {
    id: 1,
    company: "Dropbox",
    role: "Staff Product Manager",
    period: "Jan '22 – Nov '25",
    icon: SiDropbox,
    iconColor: "#0061FF",
    areas: [
      {
        title: "Account Security & Identity",
        achievements: [
          { text: "Increased ", bold: "MFA adoption by 40%", suffix: " for paid individuals and teams, strengthening Dropbox's security posture." },
          { text: "Drove ", bold: "40% YoY drop", suffix: " in CX tickets by improving product experience and creating account recovery tools." },
          { text: "Drove ", bold: "34% lift", suffix: " in total sign-ups and sign-ins in Dropbox iOS app by launching a new login module with significant top of funnel improvements." },
          { text: "Uncovered ", bold: "1M+ cost-saving opportunities", suffix: " by leading investigations in unauthorized activity (password sharing, mass account creation)." },
        ],
      },
      {
        title: "Performance, Reliability & Usability Architect",
        achievements: [
          { text: "Drove company-wide strategy on web and mobile that generated ", bold: "$11M+ business impact", suffix: " and reduced ", bold2: "web subscription churn from 6.3% → 5.52%", suffix2: ", through reliability, stability, and monitoring initiatives." },
          { text: "Stabilized, eliminating ", bold: "31K+ weekly crashes", suffix: " and boosting customer trust." },
          { text: "Accelerated high-traffic web pages load times from ", bold: "10+s → 2s", suffix: ", with homepage improvements driving $1.385M GNARR; Web Performance CSAT rose by ", bold2: "7 points to 71", suffix2: "." },
          { text: "Drove ", bold: "3.5% higher paid WAU engagement", suffix: " and ", bold2: "20% faster uploads", suffix2: " on web and mobile." },
          { text: "Achieved ", bold: "26%+ faster batch move/delete operations", suffix: " by optimizing file actions." },
          { text: "Achieved ", bold: "A-grade usability", suffix: " and consistency across all Dropbox Web flows by leading \"UI tenets & Traps\" framework initiative." },
        ],
      },
      {
        title: "Cross Platform Notifications",
        achievements: [
          { text: "Delivered ", bold: "$3.2M+ annualized NNARR", suffix: " by optimizing cross-platform notification channels (email, push, tray prompts, in-product), reducing involuntary churn across individuals, teams, and trials." },
          { text: "Drove ", bold: "13.5% overall engagement lift", suffix: ", +20% surface clicks, and +12.8% CTA engagement by improving notification tray usability and discoverability." },
        ],
      },
      {
        title: "Mobile Platform Lead",
        achievements: [
          { text: "Drove initiatives resulting in ", bold: "$1.8M in cost savings", suffix: " by improving developer efficiency, reducing crashes, optimizing disk space, and saving engineering hours by enabling faster feature development and delivery." },
          { text: "Led a highly technical mobile platform team, reframing engineering culture to think about ", bold: "\"Foundation as a Product\"", suffix: "." },
        ],
      },
    ],
  },
  {
    id: 2,
    company: "Microsoft",
    role: "Senior Product Manager",
    period: "May '16 – Dec '21",
    icon: FaMicrosoft,
    iconColor: "#00A4EF",
    areas: [
      {
        title: "Platform and Developer Experience (0 → 1 product)",
        achievements: [
          { text: "Owned end-to-end developer experience for ", bold: "App Center SDKs", suffix: " (onboarding, APIs, tooling, docs) and ", bold2: "Core Analytics service", suffix2: ", powering ", bold3: "150K+ mobile apps", suffix3: " across native and cross-platform stacks." },
          { text: "Delivered ", bold: "net-new collaboration SDKs", suffix: " (web, desktop, Android, iOS) for 1000s of 1st and 3rd party developers." },
          { text: "Defined and executed strategy for ", bold: "Azure Mobile Apps", suffix: " (auth, data, push), informed by 100s of developer interviews, usage metrics, and revenue data." },
          { text: "Led ", bold: "open-source engagement", suffix: " on GitHub to grow usage and developer adoption of App Center." },
          { text: "Frequent speaker at ", bold: "developer conferences", suffix: "; experienced in building and supporting products across full lifecycle (inception → deprecation)." },
        ],
      },
    ],
  },
  {
    id: 3,
    company: "Microsoft",
    role: "Software Engineer",
    period: "Oct '13 – Apr '16",
    icon: FaMicrosoft,
    iconColor: "#00A4EF",
    areas: [
      {
        title: "Office 365 & Microsoft Graph",
        achievements: [
          { text: "Added API capabilities in ", bold: "Microsoft Graph", suffix: " and custom file type handling capabilities in Office 365 with File Handler Add-ins." },
        ],
      },
    ],
  },
];

export default function Resume() {
  const [openCards, setOpenCards] = useState<Record<number, boolean>>({
    1: true,
    2: true,
    3: true,
  });
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleCard = (id: number) => {
    setOpenCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Ela_Malani_Resume.pdf";
    link.download = "Ela_Malani_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-white">
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
        }`}
        data-testid="nav-sticky"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="text-[0.9375rem] font-medium text-gray-600 hover:text-blue-600 transition-colors"
                  data-testid={`link-nav-${item.label.toLowerCase()}`}
                >
                  {item.label}
                </a>
              ))}
            </div>
            <div className="md:hidden">
            </div>
            <Button
              onClick={handleDownload}
              size="sm"
              className="bg-blue-600 hover:bg-blue-700 text-white transition-colors"
              data-testid="button-download-nav"
            >
              <Download className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline text-[0.9375rem]">Resume</span>
            </Button>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <section id="top" className="mb-16" data-testid="section-hero">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex items-center gap-5">
              <Avatar className="w-28 h-28 border-4 border-gray-100 shadow-lg">
                <AvatarImage src="/ela-profile.jpeg" alt="Ela Malani" />
                <AvatarFallback className="text-2xl bg-blue-100 text-blue-600">EM</AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900" data-testid="text-name">
                  Ela Malani
                </h1>
                <p className="text-lg text-gray-600 mt-1">Staff Product Manager</p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:ela.sharda@gmail.com"
                className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors group"
                data-testid="link-email"
              >
                <Mail className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                <span className="text-[0.9375rem]">ela.sharda@gmail.com</span>
              </a>
              <a
                href="https://www.linkedin.com/in/elamalani/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors group"
                data-testid="link-linkedin"
              >
                <SiLinkedin className="w-5 h-5 text-[#0A66C2] group-hover:text-blue-600 transition-colors" />
                <span className="text-[0.9375rem]">LinkedIn</span>
                <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a
                href="tel:+14256151843"
                className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors group"
                data-testid="link-phone"
              >
                <Phone className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                <span className="text-[0.9375rem]">425.615.1843</span>
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="mb-16" data-testid="section-about">
          <h2 className="text-[1.75rem] font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-blue-600 rounded-full"></span>
            About Me
          </h2>
          <p className="text-gray-700 leading-relaxed text-base">
            Staff Product Manager with <span className="font-semibold text-gray-900">10+ years</span> of experience in <span className="font-semibold">B2B SaaS</span> and <span className="font-semibold">Developer Platforms</span> at Dropbox and
            Microsoft. I specialize in balancing customer needs and technical excellence with business growth—recently
            reducing churn by <span className="font-semibold text-gray-900">$11M</span> through performance, reliability & usability initiatives, increasing MFA adoption by <span className="font-semibold text-gray-900">40%</span>,
            and driving <span className="font-semibold text-gray-900">$3.2M</span> in new revenue via cross-platform notification optimization. Expert in <span className="font-semibold">0 → 1 product launches</span>,
            building and scaling platforms to hundred thousand of developers. Skilled at mentoring PMs and TPMs and
            hiring top talent to elevate product craft.
          </p>
        </section>

        <section id="experience" className="mb-16" data-testid="section-experience">
          <h2 className="text-[1.75rem] font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span className="w-1 h-6 bg-blue-600 rounded-full"></span>
            Work Experience
          </h2>
          <div className="space-y-4">
            {workExperience.map((job) => (
              <Collapsible
                key={job.id}
                open={openCards[job.id]}
                onOpenChange={() => toggleCard(job.id)}
              >
                <Card className="overflow-visible border border-gray-200 hover:border-gray-300 transition-colors">
                  <CollapsibleTrigger asChild>
                    <button
                      className="w-full px-5 py-4 flex items-center justify-between text-left hover-elevate rounded-md"
                      data-testid={`button-expand-${job.company.toLowerCase()}-${job.id}`}
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className="w-10 h-10 rounded-lg flex items-center justify-center"
                          style={{ backgroundColor: `${job.iconColor}15` }}
                        >
                          <job.icon className="w-5 h-5" style={{ color: job.iconColor }} />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">
                            {job.role}
                          </h3>
                          <p className="text-[0.9375rem] text-gray-500">
                            {job.company} <span className="mx-2">•</span> {job.period}
                          </p>
                        </div>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                          openCards[job.id] ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="px-5 pb-5 pt-2 border-t border-gray-100">
                      {job.areas.map((area, areaIndex) => (
                        <div key={areaIndex} className={areaIndex > 0 ? "mt-6" : ""}>
                          <h4 className="text-[1.125rem] font-bold text-blue-700 mb-3 tracking-tight">{area.title}</h4>
                          <ul className="space-y-2.5">
                            {area.achievements.map((achievement, achIndex) => (
                              <li
                                key={achIndex}
                                className="flex items-start gap-2 text-base text-gray-600"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0"></span>
                                <span>
                                  {achievement.text}
                                  <span className="font-semibold text-gray-900">{achievement.bold}</span>
                                  {achievement.suffix}
                                  {achievement.bold2 && <span className="font-semibold text-gray-900">{achievement.bold2}</span>}
                                  {achievement.suffix2}
                                  {achievement.bold3 && <span className="font-semibold text-gray-900">{achievement.bold3}</span>}
                                  {achievement.suffix3}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </CollapsibleContent>
                </Card>
              </Collapsible>
            ))}
          </div>
        </section>

        <section id="patents" className="mb-16" data-testid="section-patents">
          <h2 className="text-[1.75rem] font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-blue-600 rounded-full"></span>
            Patents
          </h2>
          <Card className="p-5 border border-gray-200">
            <div className="flex flex-col gap-1">
              <a
                href="https://patents.justia.com/patent/10025758"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-700 font-medium hover:text-blue-600 transition-colors group"
                data-testid="link-patent"
              >
                Support for non-native file types in web application environment
                <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <span className="text-[0.8125rem] italic text-gray-500">Granted in September 2015</span>
            </div>
          </Card>
        </section>

        <section id="connect" className="mb-8" data-testid="section-connect">
          <h2 className="text-[1.75rem] font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-blue-600 rounded-full"></span>
            Let's Connect
          </h2>
          <Card className="p-6 border border-gray-200 bg-gradient-to-br from-gray-50 to-white">
            <p className="text-gray-700 mb-5 text-base">
              Open to discussing product leadership opportunities and collaborations.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.linkedin.com/in/elamalani/"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-connect-linkedin"
              >
                <Button
                  variant="outline"
                  className="border-blue-200 text-blue-600 hover:bg-blue-50 hover:border-blue-300 transition-colors"
                >
                  <SiLinkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                  <ExternalLink className="w-3 h-3 ml-2" />
                </Button>
              </a>
              <a href="mailto:ela.sharda@gmail.com" data-testid="link-connect-email">
                <Button
                  variant="outline"
                  className="border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-colors"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Email Me
                </Button>
              </a>
            </div>
          </Card>
        </section>
      </main>

      <footer className="border-t border-gray-100 py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[0.9375rem] text-gray-500">
            © {new Date().getFullYear()} Ela Malani. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
