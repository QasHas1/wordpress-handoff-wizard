
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users, Award, Globe } from "lucide-react";

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

        <div className="bg-emerald-50 rounded-lg p-8 md:p-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-emerald-800 mb-6">Our Mission</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              To provide authentic Islamic education that nurtures both the mind and soul, producing graduates 
              who are well-versed in Islamic sciences, proficient in Arabic, and committed to serving their 
              communities with knowledge, wisdom, and righteousness.
            </p>
            <div className="text-xl text-emerald-700 font-semibold">
              "وَقُل رَّبِّ زِدْنِي عِلْمًا"
            </div>
            <p className="text-sm text-gray-600 mt-2">
              "And say: My Lord, increase me in knowledge" - Quran 20:114
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
