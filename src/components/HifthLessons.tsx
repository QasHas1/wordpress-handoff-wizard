import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Award, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const HifthLessons = () => {
  const navigate = useNavigate();
  const hifthCourses = [
    {
      code: "HIFTHBEG",
      title: "Hifth Beginner Course",
      description: "After learning to read the Qur'an properly and taking the main Tajweed lessons, this is the student's first attempt at finishing the whole Qur'an Al-Kareem, to find their place besides the noble righteous scribes (in Heaven, as the Prophet PBUH mentioned). The student must take one Riwayah—one prevalent Riwayah in his country—from its prevalent Target and finish the whole Quran through it. The student agrees with his teacher on a program that he will follow, which can be developed over time, until the student completes and achieves what he wants.",
      level: "Beginner"
    },
    {
      code: "HIFTHINT",
      title: "Hifth Intermediate Course",
      description: "After the first training/educational Khatmah (HIFTHBEG), the student takes a Qirā'ah that includes the Riwayah that he read first, or another Riwayah or Qirā'ah that is different from what he read first, and individually (without grouping more than one Qira'ah), he then memorises through it the entire Holy Qur'an.",
      level: "Intermediate"
    },
    {
      code: "HIFTHADV",
      title: "Hifth Advanced or Very Advanced Course",
      description: "Here, the student is free to choose what he wants to recite by heart, i.e. narrations (Riwayāt), any readings (Qiraāt), and in any combination of them he wants. The important thing is that the student should be familiar with what he wants, knowing the rules of what he wants to read, and we will assist in that.",
      level: "Advanced"
    }
  ];

  return (
    <section id="hifth" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Hifth</h2>
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Tahfeeth (Hifth, Hifz, Hifdh) Al-Quran Al-Kareem is one of our main tasks.
            </p>
            <p>
              Our institute has a long history in Hifth Al Quran and many of our students, both male and female, have participated for many years in national and international competitions and have accomplished achievements worthy of praise, Alhamdulillah.
            </p>
            <p>
              All of our teachers are highly qualified, with Ijazats in Al-Quran Al-Kareem; so we all make sure that what our students memorise from us is the same Qur'an as was recited by Rasul Allah (Salla Allah Alaihi Wasallam).
            </p>
            <p>
              Special arrangements can be made for students with the aim to participate in International Hifth Competitions, as well as those who want to memorise with their family, friends or groups.
            </p>
            <p>
              After Hifth Al Quran, students can improve their memorisation by going further: such as knowing all verses that bear similarities across the Qur'an, as well as methods to fix problems that hinder their Hifth.
            </p>
          </div>
        </div>

        {/* Hifth Course Levels */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Our courses for Hifth accommodate all tiers: 
            <span className="text-green-600"> HIFTHBEG</span>, 
            <span className="text-blue-600"> HIFTHINT</span>, 
            <span className="text-purple-600"> HIFTHADV</span>:
          </h3>
          
          <div className="space-y-8 mb-8">
            {hifthCourses.map((course) => (
              <Card key={course.code} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge 
                      variant="outline" 
                      className={`${
                        course.code === 'HIFTHBEG' ? 'text-green-600 border-green-600' :
                        course.code === 'HIFTHINT' ? 'text-blue-600 border-blue-600' :
                        'text-purple-600 border-purple-600'
                      }`}
                    >
                      {course.code}
                    </Badge>
                    <Badge variant="secondary">{course.level}</Badge>
                  </div>
                  <CardTitle className="text-xl">{course.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {course.description}
                  </p>
                  <div className="mt-4 flex items-center gap-1 text-sm text-muted-foreground">
                    <Award className="h-4 w-4" />
                    Ijazah Certificate Included
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certification Information */}
        <Card className="max-w-4xl mx-auto mb-8">
          <CardHeader className="text-center">
            <BookOpen className="h-12 w-12 mx-auto mb-4 text-primary" />
            <CardTitle className="text-2xl">Ijazah Certification</CardTitle>
            <CardDescription className="text-lg">
              Complete memorization of the Holy Quran with proper Tajweed and Ijazah certification
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center space-y-2">
                <Award className="h-8 w-8 mx-auto text-green-600" />
                <h4 className="font-semibold">Chain of Transmission</h4>
                <p className="text-sm text-muted-foreground">Direct sanad to Prophet Muhammad ﷺ</p>
              </div>
              <div className="text-center space-y-2">
                <BookOpen className="h-8 w-8 mx-auto text-blue-600" />
                <h4 className="font-semibold">Authorization to Teach</h4>
                <p className="text-sm text-muted-foreground">Qualified to transmit the Quran</p>
              </div>
              <div className="text-center space-y-2">
                <Users className="h-8 w-8 mx-auto text-purple-600" />
                <h4 className="font-semibold">International Recognition</h4>
                <p className="text-sm text-muted-foreground">Globally accepted certification</p>
              </div>
            </div>
            
            <div className="bg-muted/50 p-6 rounded-lg mb-6">
              <p className="text-center font-semibold mb-4">
                Whoever completes any of these courses, memorising and reciting the Qur'an in the correct manner, will be awarded an Ijazah, giving him the authorisation to transmit the Qur'an Al-Kareem with a chain of narration going back to the Prophet PBUH.
              </p>
            </div>
            
            <div className="text-center">
              <p className="text-muted-foreground mb-4">
                Student registration for Hifth is now open at this link:
              </p>
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-700"
                onClick={() => navigate('/tahfedh/hifthregister')}
              >
                Hifth Registration
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};