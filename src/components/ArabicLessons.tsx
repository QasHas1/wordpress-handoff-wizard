import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, GraduationCap } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const ArabicLessons = () => {
  const navigate = useNavigate();
  const arabicCourses = [
    {
      code: "ARILEV",
      title: "Arabic Course for English-Speaking Students",
      description: "Introductory levels: based on specific books to read Al Qur'an with ease. In this level students could deeply study the content of the Medina Program (Arabic Course for English Speaking Students volumes 1 to 3), as well as other complimentary booklets written by the scholars of Ibn Al Jazari Institute.",
      levels: ["ARILEV1", "ARILEV2", "ARILEV3"],
      books: "Volumes 1-3 + Side books"
    },
    {
      code: "ARBYLEV1",
      title: "Arabic for Beginners Level 1",
      description: "Level 1: Arabic for beginners based on Al Arabia Bayna Yadayk Book 1, as well as other complimentary booklets written by the scholars of Ibn Al Jazari Institute.",
      books: "Al Arabia Bayna Yadayk Book 1"
    },
    {
      code: "ARBYLEV2", 
      title: "Arabic for Beginners Level 2",
      description: "Level 2: Arabic for beginners based on Al Arabia Bayna Yadayk Book 2, as well as other complimentary booklets written by the scholars of Ibn Al Jazari Institute.",
      books: "Al Arabia Bayna Yadayk Book 2"
    },
    {
      code: "ARBYLEV3",
      title: "Arabic for Beginners Level 3", 
      description: "Level 3: Arabic for beginners based on Al Arabia Bayna Yadayk Book 3, as well as other complimentary booklets written by the scholars of Ibn Al Jazari Institute.",
      books: "Al Arabia Bayna Yadayk Book 3"
    },
    {
      code: "ARFQUR",
      title: "Arabic of the Qur'an Al Kareem",
      description: "Specialized course focusing on the Arabic language as used in the Quran.",
      books: "Quranic Arabic texts"
    },
    {
      code: "ARGRA1",
      title: "Arabic Grammar Level 1",
      description: "Lesson mainly in Arabic language, to understand the main grammatically rules. A certification will be given and an Idjazah of the book to reported all the way back to the author.",
      books: "Basic grammar texts"
    },
    {
      code: "ARGRA2",
      title: "Arabic Grammar Level 2",
      description: "Lesson completely in Arabic language, to take the students to a medium level of the grammar rules, helping them to talk without any grammar mistake. A certification of the lesson will be issued, plus an Idjazah of the book in the programme.",
      books: "Intermediate grammar texts"
    },
    {
      code: "ARGRA3",
      title: "Arabic Grammar Level 3",
      description: "Lesson completely in Arabic language, to take the students to a highest level possible of Arabic language grammar. A certification of the lesson will be issued, plus an Idjazah of the books and poems in the programme.",
      books: "Advanced grammar texts and poems"
    }
  ];

  return (
    <section id="arabic" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Arabic Lessons:</h2>
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Our Arabic lessons are taught by Arabic speaking teachers, with a large experience of teaching this language in European countries. All our courses end by a certification, or Idjazah for the student to transmit the knowledge taught in the lesson. These are the actual modules taught in our Institute:
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {arabicCourses.map((course) => (
            <Card key={course.code} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="text-green-600 border-green-600">
                    {course.code}
                  </Badge>
                  {course.levels && (
                    <div className="flex gap-1">
                      {course.levels.map((level) => (
                        <Badge key={level} variant="secondary" className="text-xs">
                          {level}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
                <CardTitle className="text-xl">{course.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {course.description}
                </p>
                <div className="flex items-start gap-2 text-sm text-muted-foreground">
                  <BookOpen className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>{course.books}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center">
            <CardContent className="pt-6">
              <Users className="h-12 w-12 mx-auto mb-4 text-blue-600" />
              <h3 className="font-semibold mb-2">Small Classes</h3>
              <p className="text-sm text-muted-foreground">
                Our lessons are taught in small classes, no more than seven students per group.
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="pt-6">
              <GraduationCap className="h-12 w-12 mx-auto mb-4 text-green-600" />
              <h3 className="font-semibold mb-2">Expert Teachers</h3>
              <p className="text-sm text-muted-foreground">
                Taught by Arabic speaking teachers with extensive European teaching experience.
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="pt-6">
              <BookOpen className="h-12 w-12 mx-auto mb-4 text-purple-600" />
              <h3 className="font-semibold mb-2">Certification</h3>
              <p className="text-sm text-muted-foreground">
                All courses end with certification or Idjazah to transmit the knowledge.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <p className="text-muted-foreground mb-4">
            Student registration is now open at this link:
          </p>
          <Button 
            size="lg" 
            className="bg-green-600 hover:bg-green-700"
            onClick={() => navigate('/arabic/arabic-registration')}
          >
            Arabic Registration
          </Button>
        </div>
      </div>
    </section>
  );
};