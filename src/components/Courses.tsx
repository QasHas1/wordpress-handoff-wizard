import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Clock, Award, Users, GraduationCap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

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
              onClick={() => navigate('/courses/tajweed/tajweed-registration')}
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
              onClick={() => navigate('/courses/tajweed/tajweed-registration')}
            >
              Tajweed Poem Registration
            </Button>
          </div>
        </div>

        {/* Read and Rise Program */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center">Read and Rise Program</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Hadith */}
            <Card className="md:col-span-2">
              <CardContent className="p-6">
                <div className="text-center mb-3 text-xl font-arabic leading-relaxed" dir="rtl">
                  قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ: يُقَالُ لِصَاحِبِ الْقُرْآنِ اقْرَأْ وَارْتَقِ وَرَتِّلْ كَمَا كُنْتَ تُرَتِّلُ فِي الدُّنْيَا، فَإِنَّ مَنْزِلَكَ عِنْدَ آخِرِ آيَةٍ تَقْرَؤُهَا
                </div>
                <p className="text-muted-foreground text-center leading-relaxed italic">
                  The Prophet (ﷺ) said, "It will be said to the companion of the Quran [on the Day of Resurrection]: read and rise [in ranks] and recite as you used to recite when you were in the world, for your rank will be at the last verse you recite."
                </p>
              </CardContent>
            </Card>

            {/* Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  Program Overview
                </CardTitle>
                <CardDescription>
                  Beginner-friendly recitation correction and complete Quran reading.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  To ensure that beginner students who find an academic approach challenging can also find benefit, we have launched this program: <span className="text-foreground font-semibold">"Iqra' Wartaqi"</span> – "Read and Rise."
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  This program offers recitation correction lessons and complete reading of the Holy Quran from beginning to end, specifically designed for beginners. Students recite the entire Holy Quran under the guidance and evaluation of skilled Quran reciters who are proficient and have mastered its letters.
                </p>
              </CardContent>
            </Card>

            {/* Goals */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  Program Goals
                </CardTitle>
                <CardDescription>Practical outcomes you can expect</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    {
                      title: "Master the letters of the Quran",
                      description:
                        "and apply the basic rules of recitation through repeated practice and systematic teaching of the rules.",
                    },
                    {
                      title: "Remove fear and difficulty",
                      description:
                        "that may have developed in the minds of some students regarding Quran recitation.",
                    },
                    {
                      title: "Make recitation a natural habit",
                      description:
                        "by facilitating the learning process so that it becomes instinctive.",
                    },
                    {
                      title: "Instil appreciation for recitation",
                      description:
                        "and establish a close, meaningful relationship with the Book of Allah (SWT).",
                    },
                    {
                      title: "Learn proper starting and stopping points",
                      description:
                        "in a practical, applied manner, ensuring that the meanings of the verses are properly understood and thus greatly rewarded.",
                    },
                  ].map((goal, index) => (
                    <div
                      key={index}
                      className="flex gap-3 items-start p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                    >
                      <div className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0"></div>
                      <div>
                        <span className="font-semibold text-foreground">{goal.title}</span>
                        <span className="text-muted-foreground"> {goal.description}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-4">
              Student registration is now open at this link:
            </p>
            <Button 
              size="lg"
              className="bg-blue-500 hover:bg-blue-600"
              onClick={() => navigate('/courses/tajweed/read-and-rise')}
            >
              Register for Read and Rise Program
            </Button>
          </div>
        </div>

        {/* Qira'at Lessons Overview Section - Added after Read and Rise */}
        <div className="mb-16 max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Qira'at Lessons:</h2>
          
          <div className="space-y-4 mb-6 text-lg leading-relaxed">
            <p>
              We teach Al Qira'at at the highest level possible, we are proud to have presented many of our students 
              with their Idjazaat or Assaneed to the Messenger of Allah SAWT.
            </p>
            <p>
              Many of our students have moved on to become Sheikhs of Qirā'āts themselves or are leading Muslims 
              worldwide in different communities. Some of them received certificates or recommendations to join Official 
              Muslim organisations or universities to finish their studies.
            </p>
            <p>
              Through long years of learning the knowledge of our teachers and their own massive experiences, 
              we are able to make it easier for our students to get to the necessary advanced levels and be 
              in a position to achieve the highest in the science of Qira'at Al Kuraan Al Kareem.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4">We teach the:</h3>
            <ul className="list-disc list-inside space-y-2 text-lg ml-4">
              <li>10 Qira'at Al Soughrah (20 Riwayat)</li>
              <li>10 Qira'at Al Koubra (20 Riwayat, Higher Qiraat: all the ways of Kitaab Allah, around 1000 ways)</li>
              <li>Any Qirā'āt or Riwayat separately.</li>
              <li>The 10 Qira'at Al Sagheer</li>
              <li>The Extra 4 Qira'at (over the well known 10 ones)</li>
              <li>All the books related to Al Qira'at with chain of narrators to their sheikh's authors.</li>
              <li>All related knowledge linked to Qirā'āt.</li>
            </ul>
          </div>

          {/* Qira'at Course Subsections */}
          <div className="space-y-6 mt-12">
            <div>
              <p className="text-lg mb-2">
                For more information about this, please follow this link:{" "}
                <Link 
                  to="/courses/qiraat" 
                  className="text-blue-600 hover:text-blue-800 underline font-medium"
                >
                  Qiraat
                </Link>
              </p>
              <h3 className="text-3xl font-bold">Ten Minor Qirā'āt recitations Lessons:</h3>
            </div>

            <div>
              <p className="text-lg mb-2">
                For more information about this, please follow this link:{" "}
                <Link 
                  to="/courses/qiraat" 
                  className="text-blue-600 hover:text-blue-800 underline font-medium"
                >
                  Qiraat
                </Link>
              </p>
              <h3 className="text-3xl font-bold">Ten Major Qirā'āt recitations Lessons:</h3>
            </div>

            <div>
              <p className="text-lg mb-2">
                For more information about this, please follow this link:{" "}
                <Link 
                  to="/courses/qiraat" 
                  className="text-blue-600 hover:text-blue-800 underline font-medium"
                >
                  Qiraat
                </Link>
              </p>
              <h3 className="text-3xl font-bold">Ten Sagher Qirā'āt recitations Lessons:</h3>
            </div>

            <div>
              <p className="text-lg mb-2">
                For more information about this, please follow this link:{" "}
                <Link 
                  to="/courses/qiraat" 
                  className="text-blue-600 hover:text-blue-800 underline font-medium"
                >
                  Qiraat
                </Link>
              </p>
              <h3 className="text-3xl font-bold">Extra Four Qirā'āt recitations Lessons:</h3>
            </div>
          </div>
        </div>

        {/* Hifth Al Qura'an Lessons Overview Section - Added after Qira'at */}
        <div className="mb-16 max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Hifth Al Qura'an Lessons:</h2>
          
          <Card className="p-8 hover:shadow-lg transition-shadow duration-300 border-2">
            <CardContent className="p-0">
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Hifth al Qura'an is one of the first tasks of our honoured teachers, even before they decided to create 
                  Ibn Al Jazari Institute. Many of our students are leading Taraweeh prayers, Imams or registered with 
                  some Islamic universities when Hifth is prerequired. Some of them participated in many International 
                  competitions reaching, for many occasions, good positions.
                </p>
                
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4 border-t">
                  <p className="text-lg font-semibold text-foreground">
                    To benefit from our large experience, apply for <span className="text-primary">Hifth Al Qur'an</span>:
                  </p>
                  <Button 
                    asChild
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    <Link to="/courses/hifth">
                      Learn More
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Arabic Lessons Section - Added after Hifth */}
        <div className="mb-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Arabic Lessons:</h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Our Arabic lessons are taught by Arabic speaking teachers, with a large experience of teaching this language in European countries. All our courses end by a certification, or Idjazah for the student to transmit the knowledge taught in the lesson. These are the actual modules taught in our Institute:
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
            {[
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
            ].map((course) => (
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
              className="bg-blue-500 hover:bg-blue-600"
              onClick={() => navigate('/arabic/arabic-registration')}
            >
              Arabic Registration
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
