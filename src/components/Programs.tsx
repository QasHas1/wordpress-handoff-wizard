
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const Programs = () => {
  const programs = [
    {
      title: "Islamic Studies Diploma",
      arabicTitle: "دبلوم الدراسات الإسلامية",
      duration: "2 Years",
      level: "Intermediate",
      description: "Comprehensive study of Islamic theology, jurisprudence, and history.",
      subjects: ["Aqeedah", "Fiqh", "Hadith", "Tafseer", "Islamic History"]
    },
    {
      title: "Arabic Language Program",
      arabicTitle: "برنامج اللغة العربية",
      duration: "1 Year",
      level: "All Levels",
      description: "Master classical and modern Arabic language skills.",
      subjects: ["Grammar", "Literature", "Conversation", "Writing", "Poetry"]
    },
    {
      title: "Quranic Studies",
      arabicTitle: "علوم القرآن",
      duration: "3 Years",
      level: "Advanced",
      description: "In-depth study of Quranic sciences and memorization.",
      subjects: ["Tajweed", "Tafseer", "Qira'at", "Memorization", "Sciences of Quran"]
    },
    {
      title: "Hadith Sciences",
      arabicTitle: "علوم الحديث",
      duration: "2 Years",
      level: "Advanced",
      description: "Comprehensive study of Prophetic traditions and their sciences.",
      subjects: ["Hadith Criticism", "Narrator Studies", "Collections", "Methodology"]
    }
  ];

  return (
    <section id="programs" className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-emerald-800 mb-4">Academic Programs</h2>
          <div className="text-2xl text-emerald-700 mb-6 font-semibold">
            البرامج الأكاديمية
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of Islamic education programs designed to provide 
            deep understanding and practical application of Islamic knowledge.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow duration-300 bg-white">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary" className="bg-emerald-100 text-emerald-800">
                    {program.level}
                  </Badge>
                  <span className="text-sm text-gray-500">{program.duration}</span>
                </div>
                <CardTitle className="text-emerald-800 text-2xl">{program.title}</CardTitle>
                <div className="text-lg text-emerald-600 font-semibold">
                  {program.arabicTitle}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{program.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-emerald-800 mb-2">Core Subjects:</h4>
                  <div className="flex flex-wrap gap-2">
                    {program.subjects.map((subject, idx) => (
                      <Badge key={idx} variant="outline" className="border-emerald-200 text-emerald-700">
                        {subject}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button className="w-full bg-emerald-700 hover:bg-emerald-800">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-emerald-700 text-emerald-700 hover:bg-emerald-700 hover:text-white">
            View All Programs
          </Button>
        </div>
      </div>
    </section>
  );
};
