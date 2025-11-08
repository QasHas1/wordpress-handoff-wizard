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
        {/* Tajweed Lessons */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center">Tajweed</h3>
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

        {/* Read and Rise Program */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4">"Read and Rise" Program</h3>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>
          
          <div className="max-w-5xl mx-auto">
            {/* Hadith Card */}
            <Card className="mb-8 border-primary/20 shadow-lg">
              <CardContent className="p-8">
                <div className="text-center mb-6 text-xl font-arabic leading-relaxed" dir="rtl">
                  قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ: يُقَالُ لِصَاحِبِ الْقُرْآنِ اقْرَأْ وَارْتَقِ وَرَتِّلْ كَمَا كُنْتَ تُرَتِّلُ فِي الدُّنْيَا، فَإِنَّ مَنْزِلَكَ عِنْدَ آخِرِ آيَةٍ تَقْرَؤُهَا
                </div>
                <p className="text-muted-foreground text-center leading-relaxed italic">
                  The Prophet (ﷺ) said, "It will be said to the companion of the Quran [on the Day of Resurrection]: read and rise [in ranks] and recite as you used to recite when you were in the world, for your rank will be at the last verse you recite."
                </p>
              </CardContent>
            </Card>

            {/* Program Overview Card */}
            <Card className="mb-8 hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5">
                <CardTitle className="text-2xl flex items-center gap-2">
                  <BookOpen className="h-6 w-6 text-primary" />
                  Program Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  To ensure that beginner students who find an academic approach challenging can also find benefit, we have launched this program: <span className="text-primary font-semibold">"Iqra' Wartaqi"</span> – "Read and Rise."
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  This program offers recitation correction lessons and complete reading of the Holy Quran from beginning to end, specifically designed for beginners. Students recite the entire Holy Quran under the guidance and evaluation of skilled Quran reciters who are proficient and have mastered its letters.
                </p>
              </CardContent>
            </Card>

            {/* Program Goals Card */}
            <Card className="mb-8 hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5">
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Award className="h-6 w-6 text-primary" />
                  Program Goals
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {[
                    {
                      title: "Master the letters of the Quran",
                      description: "and apply the basic rules of recitation through repeated practice and systematic teaching of the rules."
                    },
                    {
                      title: "Remove fear and difficulty",
                      description: "that may have developed in the minds of some students regarding Quran recitation."
                    },
                    {
                      title: "Make recitation a natural habit",
                      description: "by facilitating the learning process so that it becomes instinctive."
                    },
                    {
                      title: "Instil appreciation for recitation",
                      description: "and establish a close, meaningful relationship with the Book of Allah (SWT)."
                    },
                    {
                      title: "Learn proper starting and stopping points",
                      description: "in a practical, applied manner, ensuring that the meanings of the verses are properly understood and thus greatly rewarded."
                    }
                  ].map((goal, index) => (
                    <div key={index} className="flex gap-3 items-start p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      <div className="mt-1 flex-shrink-0">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                      </div>
                      <div>
                        <span className="font-semibold text-foreground">{goal.title}</span>
                        <span className="text-muted-foreground"> {goal.description}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* How to Join Card */}
            <Card className="border-primary/30 hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5 text-center">
                <CardTitle className="text-2xl">Ready to Begin Your Journey?</CardTitle>
                <CardDescription className="text-base">
                  Join the "Read and Rise" program and start your transformative Quranic learning experience
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8 text-center">
                <Button 
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 h-auto"
                  onClick={() => navigate('/tajweed/read-and-rise')}
                >
                  <BookOpen className="mr-2 h-5 w-5" />
                  Register for Read and Rise Program
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};