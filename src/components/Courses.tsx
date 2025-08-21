import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Clock, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Courses = () => {
  const navigate = useNavigate();
  const tajweedCourses = [
    {
      code: "TAJBEG",
      title: "Beginner Tajweed Course (any beginners lessons: Stages of Tajweed...)",
      description: "The beginner courses will be following the outline of the First book of Tajweed, published by Sheikh Abu Hamza: 'The Perfection Before The Certification, Volume 1 & Volume 2' published, fortunately, in two languages: Arabic and separately in English. It is completed during a sixth month time period (three months for a condensed course) and the student is able to correctly pronounce all letters and read the Qur'an with the correct Tajweed when they are certificated. Result Guaranteed (in shaa' Allah)",
      duration: "6 months (3 months condensed)",
      level: "Beginner"
    },
    {
      code: "TAJIN1",
      title: "Intermediate Tajweed Course Level 1",
      description: "The intermediate course will be following the outline of the Second book of Tajweed, published by Sheikh Abu Hamza: 'The Perfection Before The Certification, Volume 2'. Published, fortunately, in two languages: Arabic and separately in English. Clarification of the rulings of the Tajweed. Included: Explanation of Tuhfatul Atfal, in parallel with other basics Tajweed poems then innovatively how the rules of Tajweed are scripted in the Noble Qur'an. It is completed during a five month time period and the student is able to correctly practice the basics rules of Tajwod to the verses of the Holly Qur'an. When students are confident with the Tajweed rules they will be tested then certificated to practice for themselves or to teach others. Result Guaranteed (in shaa' Allah)",
      duration: "5 months",
      level: "Intermediate"
    },
    {
      code: "TAJIN2",
      title: "Intermediate Tajweed Course Level 2 - Clarification of the rulings of the Tajweed", 
      description: "This book is a complete curriculum, for students and teachers of the sciences of Tajweed, to learn the basic rulings of Tajweed and apply them at the highest level in the ten Qur'anic Qira'at and what is attributed to them. It also includes practical explanations of the Tuhfat Ul Atfal, and its application on the possible Qira'at. Thus the student can read any Qira'ah of the Holy Qur'an without any fear. The compiler has followed a practical method that brings the meanings closer and makes it easier for the teacher and the students to reach the intended benefit of the poem. An in-depth study of the rules of Tajweed, at the intermediate level, covering all the topics presented in Al-Muqaddimah fi-mā 'alā Qāri'hi 'an Ya'lamah ('Al-Muqaddimah Al-Jazariyyah') of Imam Ibn Jazari : An essential poem for anyone seeking to master the art of reciting the Quran correctly.",
      duration: "4 months",
      level: "Intermediate"
    },
    {
      code: "TAJIN3",
      title: "Advanced Intermediate Tajweed Course",
      description: "The intermediate course will be following the outline of the Fourth book of Tajweed, published by Sheikh Abu Hamza: 'The Perfection Before The Certification, Volume 4'. This a professional level of Tajweed: Qualifying students to know the subtleties of the science of Tajweed, and training them to deliver the Qur'an to the next generation with high accuracy.",
      duration: "Variable",
      level: "Advanced Intermediate"
    },
    {
      code: "TAJADV",
      title: "Advanced Tajweed Course",
      description: "The advanced course will be following the outline of the Fifth book of Tajweed, published by Sheikh Abu Hamza: 'The Perfection Before The Certification, Volumes 5'. This a professional level for recapitulation then practicing all Tajweed concepts prementioned.",
      duration: "Variable",
      level: "Advanced"
    }
  ];

  const poemCourses = [
    {
      code: "TAJPM1",
      title: "Main Tajweed Poems",
      description: "List of three main poems of Tajweed, that are read, memorised and understood. Duration: 3 months. Idjazah Certification + Sanad by the end of course.",
      duration: "3 months",
      level: "Main Level"
    },
    {
      code: "TAJPM2",
      title: "Medium Level Tajweed Poems",
      description: "List of three medium level poems of Tajweed, that are read, memorised, understood. Duration: 3 months. Idjazah Certification + Sanad by the end of course.",
      duration: "3 months",
      level: "Medium Level"
    },
    {
      code: "TAJPM3",
      title: "Higher Medium Level Tajweed Poems",
      description: "List of two higher medium level poems of Tajweed, that are read, memorised, understood. Duration: 3 months. Idjazah Certification + Sanad by the end of course.",
      duration: "3 months",
      level: "Higher Medium"
    },
    {
      code: "TAJPMA",
      title: "Advanced Level Tajweed Poems",
      description: "List of three advanced level poems of Tajweed, that are read, memorised, understood. Duration: 3 months. Idjazah Certification + Sanad by the end of course.",
      duration: "3 months",
      level: "Advanced"
    }
  ];

  const bookCourses = [
    {
      code: "TAJBK1",
      title: "Main Level Tajweed Book",
      description: "Read & Study the main level book of Tajweed, by Imad Addani. Duration: 3 months. Idjazah Certification + Sanad by the end of course.",
      duration: "3 months",
      level: "Main Level"
    },
    {
      code: "TAJBK2",
      title: "Medium Level Tajweed Book",
      description: "Read & Study the medium level book of Tajweed, by Imad Ibn Al Jazari. Duration: 3 months. Idjazah Certification + Sanad by the end of course.",
      duration: "3 months",
      level: "Medium Level"
    }
  ];

  return (
    <section id="courses" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Courses</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            In Ibn Al Jazari Institute we have a long experience in teaching Tajweed, many of our students are currently teaching others in the community or around the world. Our courses for Tajweed are for all tiers: Beginner, Intermediate and Advanced:
          </p>
        </div>

        {/* Tajweed Lessons */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center">Tajweed Lessons:</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {tajweedCourses.map((course) => (
              <Card key={course.code} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-green-600 border-green-600">
                      {course.code}
                    </Badge>
                    <Badge variant="secondary">{course.level}</Badge>
                  </div>
                  <CardTitle className="text-xl">{course.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {course.description}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {course.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Award className="h-4 w-4" />
                      Certificate Included
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-4">
              Student registration is now open at this link:
            </p>
            <Button 
              className="bg-blue-500 hover:bg-blue-600"
              onClick={() => navigate('/tajweed/tajweed-registration')}
            >
              Tajweed Registration
            </Button>
          </div>
        </div>

        {/* Tajweed Poems & Books */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center">Tajweed Poems & Books:</h3>
          
          {/* Poems */}
          <div className="mb-12">
            <h4 className="text-2xl font-semibold mb-6 text-center text-green-600">Poems</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {poemCourses.map((course) => (
                <Card key={course.code} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="text-green-600 border-green-600">
                        {course.code}
                      </Badge>
                      <Badge variant="secondary">{course.level}</Badge>
                    </div>
                    <CardTitle className="text-lg">{course.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {course.description}
                    </p>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      {course.duration}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Books */}
          <div className="mb-8">
            <h4 className="text-2xl font-semibold mb-6 text-center text-blue-600">Books</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {bookCourses.map((course) => (
                <Card key={course.code} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="text-blue-600 border-blue-600">
                        {course.code}
                      </Badge>
                      <Badge variant="secondary">{course.level}</Badge>
                    </div>
                    <CardTitle className="text-lg">{course.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {course.description}
                    </p>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      {course.duration}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center">
            <p className="text-muted-foreground mb-4">
              Student registration is now open at this link:
            </p>
            <Button 
              className="bg-blue-500 hover:bg-blue-600"
              onClick={() => navigate('/tajweed/tajweed-registration')}
            >
              Tajweed Poem Registration
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};