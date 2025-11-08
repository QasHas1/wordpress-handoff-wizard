import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users, Award, Globe, Rocket, TrendingUp, Building2, BadgeCheck, FileText, Target } from "lucide-react";

export const About = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Authentic Curriculum",
      description: "Comprehensive Islamic education based on the Quran, Sunnah, and the understanding of the Salaf."
    },
    {
      icon: Users,
      title: "Expert Faculty",
      description: "Qualified scholars and educators with deep knowledge in Islamic sciences and Arabic language."
    },
    {
      icon: Award,
      title: "Excellence in Education",
      description: "High standards of academic achievement combined with spiritual and moral development."
    },
    {
      icon: Globe,
      title: "Global Community",
      description: "Students from diverse backgrounds united in seeking authentic Islamic knowledge."
    }
  ];

  const timeline = [
    {
      year: "1991",
      icon: Rocket,
      title: "Foundation and Early Efforts",
      description: "The Ibn Al-Jazari Institute was first established in 1991, driven by a deep desire to preserve and protect the Qur'ān through the authentic transmission of Qirā'āt. Its early focus was on providing structured, one-to-one teaching to help students master fluency and understanding.",
      detail: "First Steps in Qirā'āt Preservation",
      color: "blue"
    },
    {
      year: "2002",
      icon: TrendingUp,
      title: "Move to Birmingham, United Kingdom",
      description: "Upon the founding Sheikh's arrival in Birmingham from the Arabian East, he began reaching out to several institutions to introduce the sciences of Qirā'āt. Facing initial reluctance and unfamiliarity, the Sheikh launched awareness campaigns that revived interest in this sacred discipline among British Muslims.",
      detail: "Bringing Qirā'āt to the UK",
      color: "green"
    },
    {
      year: "2004",
      icon: Building2,
      title: "Establishment of the Institute",
      description: "Recognising the growing demand for serious study, the Sheikh founded an independent institute dedicated to preserving and teaching the sciences of Qirā'āt. What began in small rented spaces soon became a structured educational centre for students of all ages and backgrounds.",
      detail: "A Dedicated Learning Centre",
      color: "purple"
    },
    {
      year: "2010",
      icon: BadgeCheck,
      title: "Expansion and Certification",
      description: "With Allah's blessing, the Institute grew rapidly, attracting dedicated learners and producing certified students with Ijāzāt. Many graduates went on to become teachers, Imams, and reciters in the UK and abroad, spreading the legacy of Qur'ānic preservation worldwide.",
      detail: "Ijāzāt Granted Globally",
      color: "amber"
    },
    {
      year: "2015",
      icon: FileText,
      title: "Publications and Global Reach",
      description: "The Institute contributed to major works in Qirā'āt, including the preservation of numerous printed Mushafs across the recognised methodologies. Students and teachers from the Institute carried this knowledge across continents — from the UK to Europe, Africa, Asia, and the Americas.",
      detail: "International Recognition",
      color: "cyan"
    },
    {
      year: "2024",
      icon: Award,
      title: "Continuing the Mission",
      description: "Today, Ibn Al-Jazari Institute stands as a beacon for Qur'ānic learning and transmission. Its mission remains unchanged: to teach, preserve, and transmit the Qur'ān through the most authentic chains of narration, ensuring that the science of Qirā'āt continues to flourish for generations to come.",
      detail: "Modern Excellence in Tradition",
      color: "emerald"
    },
    {
      year: "Future",
      icon: Target,
      title: "Vision Ahead",
      description: "The Institute continues to expand its reach through modern technology and community development — aspiring to build a permanent educational centre that will serve as a legacy for future generations of students and scholars.",
      detail: "Building for Tomorrow",
      color: "indigo"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-emerald-800 mb-4">About Our Institute</h2>
          <div className="text-2xl text-emerald-700 mb-6 font-semibold">
            عن معهدنا
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ibn Al-Jazari Institute is dedicated to preserving and transmitting authentic Islamic knowledge 
            through comprehensive educational programs that combine traditional scholarship with modern pedagogical methods.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                  <feature.icon className="h-8 w-8 text-emerald-700" />
                </div>
                <CardTitle className="text-emerald-800">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-muted/30 rounded-lg p-8 md:p-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-primary mb-6">Our Mission</h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              To provide authentic Islamic education that nurtures both the mind and soul, producing graduates 
              who are well-versed in Islamic sciences, proficient in Arabic, and committed to serving their 
              communities with knowledge, wisdom, and righteousness.
            </p>
            <div className="text-xl text-primary font-semibold">
              "وَقُل رَّبِّ زِدْنِي عِلْمًا"
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              "And say: My Lord, increase me in knowledge" - Quran 20:114
            </p>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
              <span className="text-primary font-semibold">📍 Our Journey</span>
            </div>
            <h3 className="text-4xl font-bold text-foreground mb-4">Our Growth Story</h3>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              From humble beginnings to a beacon of Qur'ānic learning — discover the key milestones that have shaped 
              our evolution and commitment to authentic Islamic education.
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500 via-emerald-500 to-indigo-500 hidden lg:block" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col lg:flex-row gap-8 items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Card */}
                  <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                    <Card className="relative overflow-hidden border-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card/50 backdrop-blur group">
                      <div className={`absolute inset-0 bg-gradient-to-br opacity-5 group-hover:opacity-10 transition-opacity ${
                        item.color === 'blue' ? 'from-blue-500 to-cyan-500' :
                        item.color === 'green' ? 'from-green-500 to-emerald-500' :
                        item.color === 'purple' ? 'from-purple-500 to-pink-500' :
                        item.color === 'amber' ? 'from-amber-500 to-orange-500' :
                        item.color === 'cyan' ? 'from-cyan-500 to-blue-500' :
                        item.color === 'emerald' ? 'from-emerald-500 to-green-500' :
                        'from-indigo-500 to-purple-500'
                      }`} />
                      <CardHeader>
                        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold mb-3 ${
                          index % 2 === 0 ? 'lg:ml-auto' : 'lg:mr-auto'
                        } ${
                          item.color === 'blue' ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400' :
                          item.color === 'green' ? 'bg-green-500/10 text-green-600 dark:text-green-400' :
                          item.color === 'purple' ? 'bg-purple-500/10 text-purple-600 dark:text-purple-400' :
                          item.color === 'amber' ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400' :
                          item.color === 'cyan' ? 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400' :
                          item.color === 'emerald' ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' :
                          'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400'
                        }`}>
                          <item.icon className="h-4 w-4" />
                          <span>{item.year}</span>
                        </div>
                        <CardTitle className="text-2xl text-foreground">{item.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground leading-relaxed mb-3">
                          {item.description}
                        </p>
                        <div className="flex items-center gap-2 text-sm font-medium text-primary">
                          <Award className="h-4 w-4" />
                          <span>{item.detail}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Center Icon */}
                  <div className="relative z-10 flex-shrink-0 hidden lg:flex">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center border-4 border-background shadow-lg ${
                      item.color === 'blue' ? 'bg-blue-500' :
                      item.color === 'green' ? 'bg-green-500' :
                      item.color === 'purple' ? 'bg-purple-500' :
                      item.color === 'amber' ? 'bg-amber-500' :
                      item.color === 'cyan' ? 'bg-cyan-500' :
                      item.color === 'emerald' ? 'bg-emerald-500' :
                      'bg-indigo-500'
                    }`}>
                      <item.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>

                  {/* Spacer */}
                  <div className="w-full lg:w-5/12 hidden lg:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
