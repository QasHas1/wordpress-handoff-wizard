import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Award, Users, GraduationCap } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const QiraatLessons = () => {
  const minorQiraatCourses = [
    { code: "QIRSQ1", title: "Qiraat Naafi' from two riwayats: Qaloun & Warsh" },
    { code: "QIRS1.1", title: "Qaloun 'an Naafi'" },
    { code: "QIRS1.2", title: "Warsh 'an Naafi'" },
    { code: "QIRSQ2", title: "Qiraat Ibn Katheer from two riwayats Al Bazzi & Qunbul" },
    { code: "QIRS2.1", title: "Riwayat Al Bazzi min Qiraat Ibn Katheer" },
    { code: "QIRS2.2", title: "Riwayat Qunbul min Qiraat Ibn Katheer" },
    { code: "QIRSQ3", title: "Qiraat Abu Amr" },
    { code: "QIRS3.1", title: "Duri by Abu Amr" },
    { code: "QIRS3.2", title: "Susi by Abu Amr" },
    { code: "QIRSQ4", title: "Ibn A'amir" },
    { code: "QIRS4.1", title: "Hisham by Ibn Aamir" },
    { code: "QIRS4.2", title: "Ibn Thakwaan by Ibn Aamir" },
    { code: "QIRSQ5", title: "Qiraat Aasim (Shu'bah and Hafs)" },
    { code: "QIRS5.1", title: "Riwayat Shu'bah 'an Aasim" },
    { code: "QIRS5.2", title: "Riwayat Hafs 'an Aasim" },
    { code: "QIRSQ6", title: "Qiraat Hamza (Khalaf and Khallad)" },
    { code: "QIRS6.1", title: "Riwayat Khalaf 'an Hamza" },
    { code: "QIRS6.2", title: "Riwayat Khallad 'an Hamza" },
    { code: "QIRSQ7", title: "Qiraat Kisaa'i" },
    { code: "QIRS7.1", title: "Qiraat Abi Al Haarith 'an Kisaa'i" },
    { code: "QIRS7.2", title: "Qiraat Ad- Duri 'an Kisaa'i" },
    { code: "QIRSQ8", title: "Qiraat Abu Ja'far" },
    { code: "QIRS8.1", title: "Riwayat Ibn Wardaan 'an Abi Ja'far" },
    { code: "QIRS8.2", title: "Riwayat Ibn Jammaz 'an Abi Ja'far" },
    { code: "QIRSQ9", title: "Qiraat Yaqoub" },
    { code: "QIRS9.1", title: "Riwayat Rowais 'an Yaqoub" },
    { code: "QIRS9.2", title: "Riwayat Rawh 'an Yaqoub" },
    { code: "QIRSQ10", title: "Qiraat Khalaf (the 10th)" },
    { code: "QIRS101", title: "Riwayat Is'haq 'an Khalaf (the 10th)" },
    { code: "QIRS102", title: "Riwayat Idris 'an Khalaf (the 10th)" }
  ];

  const groupedMinorCourses = [
    { code: "QSGR2.8", title: "Qiraat Sughra Grouped QIRSQ2 & QIRSQ8" },
    { code: "QS1.1.28", title: "Qiraat Sughra Grouped QIRS1.1 & QIRSQ2 & QIRSQ8" },
    { code: "QSGR1.8", title: "Qiraat Sughra Grouped Al Madanyian: Madina Qiraat QIRSQ1 & QIRSQ8" },
    { code: "QSGR710", title: "Qiraat Sughra Grouped from Kufi Qiraat QIRSQ7 & QIRSQ10" },
    { code: "QSGRKU", title: "Qiraat Sughra Grouped Kufi Qiraat QIRSQ5, QIRSQ6, QIRSQ7 & QIRSQ10" },
    { code: "QSGRA7", title: "Qiraat Sughra Grouped from All 7 Qiraat" },
    { code: "QSGALL", title: "Qiraat Sughra Grouped from All 10 Qiraat" }
  ];

  const majorQiraatCourses = [
    { code: "QIRMQ1", title: "Qiraat Naafi' from two riwayats: Qalun (87 ways), Al Azraq (36 ways) Al Asbahaani (26 ways)" },
    { code: "QIRM1.1", title: "Qalun 'an Naafi' (All the ways possible)" },
    { code: "QIRM121", title: "Warsh 'an Naafi' Tareeq Al Azraq (All the ways possible)" },
    { code: "QIRM122", title: "Warsh 'an Naafi' Tareeq Asbahaani (All the ways possible)" },
    { code: "QIRMQ2", title: "Qiraat Ibn Katheer from two riwayats Al Bazzi (All the ways possible) & Qunbul (All the ways possible)" },
    { code: "QIRM2.1", title: "Riwayat Al Bazzi min Qiraat Ibn Katheer : Al Bazzi (All the ways possible)" },
    { code: "QIRM2.2", title: "Riwayat Qunbul min Qiraat Ibn Katheer: Qunbul (All the ways possible)" },
    { code: "QIRMQ3", title: "Qiraat Abu Amr (All the ways possible)" },
    { code: "QIRM3.1", title: "Duri by Abu Amr (All the ways possible)" },
    { code: "QIRM3.2", title: "Susi by Abu Amr (All the ways possible)" },
    { code: "QIRMQ4", title: "Ibn A'amir (All the ways possible)" },
    { code: "QIRM4.1", title: "Hisham by Ibn Aamir (All the ways possible)" },
    { code: "QIRM4.2", title: "Ibn Thakwaan by Ibn Aamir (All the ways possible)" },
    { code: "QIRMQ5", title: "Qiraat Aasim (Shu'bah and Hafs) (All the ways possible)" },
    { code: "QIRM5.1", title: "Riwayat Shu'bah 'an Aasim (All the ways possible)" },
    { code: "QIRM5.2", title: "Riwayat Hafs 'an Aasim (All the ways possible)" },
    { code: "QIRMQ6", title: "Qiraat Hamza (Khalaf and Khallad) (All the ways possible)" },
    { code: "QIRM6.1", title: "Riwayat Khalaf 'an Hamza (All the ways possible)" },
    { code: "QIRM6.2", title: "Riwayat Khallad 'an Hamza (All the ways possible)" },
    { code: "QIRMQ7", title: "Qiraat Kisaa'i (All the ways possible)" },
    { code: "QIRM7.1", title: "Qiraat Abi Al Haarith 'an Kisaa'i (All the ways possible)" },
    { code: "QIRM7.2", title: "Qiraat Ad- Duri 'an Kisaa'i (All the ways possible)" },
    { code: "QIRMQ8", title: "Qiraat Abu Ja'far (All the ways possible)" },
    { code: "QIRM8.1", title: "Riwayat Ibn Wardaan 'an Abi Ja'far (All the ways possible)" },
    { code: "QIRM8.2", title: "Riwayat Ibn Jammaz 'an Abi Ja'far (All the ways possible)" },
    { code: "QIRMQ9", title: "Qiraat Yaqoub (All the ways possible)" },
    { code: "QIRM9.1", title: "Riwayat Rowais 'an Yaqoub (All the ways possible)" },
    { code: "QIRM9.2", title: "Riwayat Rawh 'an Yaqoub (All the ways possible)" },
    { code: "QIRMQ10", title: "Qiraat Khalaf (the 10th) (All the ways possible)" },
    { code: "QIRM101", title: "Riwayat Is'haq 'an Khalaf (the 10th) (All the ways possible)" },
    { code: "QIRM102", title: "Riwayat Idris 'an Khalaf (the 10th) (All the ways possible)" }
  ];

  const CourseCard = ({ course, colorClass }: { course: { code: string; title: string }, colorClass: string }) => (
    <Card className="p-4 hover:shadow-md transition-shadow">
      <div className="flex items-center gap-2 mb-2">
        <Badge variant="outline" className={`${colorClass} font-medium`}>
          {course.code}
        </Badge>
      </div>
      <p className="text-sm leading-relaxed">{course.title}</p>
    </Card>
  );

  const navigate = useNavigate();

  return (
    <section id="qiraat" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <BookOpen className="h-16 w-16 mx-auto mb-4 text-primary" />
          <h2 className="text-4xl font-bold mb-4">Qira'at Lessons</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Professional-level Quranic recitation studies with authentic chains of transmission. 
            Many of our graduates have become certified Sheikhs and are leading communities worldwide.
          </p>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="minor" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Minor Qira'at
            </TabsTrigger>
            <TabsTrigger value="major" className="flex items-center gap-2">
              <GraduationCap className="h-4 w-4" />
              Major Qira'at
            </TabsTrigger>
            <TabsTrigger value="advanced" className="flex items-center gap-2">
              <Award className="h-4 w-4" />
              Advanced Studies
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-8">
            <Card className="p-8">
              <CardHeader>
                <CardTitle className="text-2xl text-center">What We Teach</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-lg text-primary">Core Programs:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        10 Qira'at Al Soughrah (20 Riwayat)
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        10 Qira'at Al Koubra (Higher Qiraat: ~1000 ways)
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        Individual Qira'at or Riwayat courses
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold text-lg text-primary">Additional Studies:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        Extra 4 Qira'at beyond the famous 10
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        Classical texts with authenticated chains
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        Complete Qira'at methodology
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="minor" className="space-y-6">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2">Ten Minor Qira'āt Recitations</h3>
              <p className="text-red-600 font-medium">(Please note the course codes for registration)</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {minorQiraatCourses.map((course) => (
                <CourseCard key={course.code} course={course} colorClass="text-emerald-600 border-emerald-600" />
              ))}
            </div>

            <div className="mt-8">
              <h4 className="text-xl font-semibold mb-4 text-emerald-600">Grouped Courses:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {groupedMinorCourses.map((course) => (
                  <CourseCard key={course.code} course={course} colorClass="text-blue-600 border-blue-600" />
                ))}
              </div>
            </div>

            <div className="text-center pt-6">
              <Button 
                size="lg" 
                className="bg-emerald-600 hover:bg-emerald-700"
                onClick={() => navigate('/qiraat/minor-qiraat-registration')}
              >
                Register for Minor Qira'at
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="major" className="space-y-6">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2">Ten Major Qira'āt Recitations</h3>
              <p className="text-red-600 font-medium">(Advanced level - All possible ways)</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {majorQiraatCourses.map((course) => (
                <CourseCard key={course.code} course={course} colorClass="text-purple-600 border-purple-600" />
              ))}
            </div>

            <div className="text-center pt-6">
              <Button 
                size="lg" 
                className="bg-purple-600 hover:bg-purple-700"
                onClick={() => navigate('/qiraat/major-qiraat-registration')}
              >
                Register for Major Qira'at
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="advanced" className="space-y-6">
            <Card className="p-8">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Advanced Qira'at Studies & Certification</CardTitle>
                <CardDescription className="text-lg">
                  Professional level certification with complete chains of transmission
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center space-y-3">
                    <Award className="h-12 w-12 mx-auto text-emerald-600" />
                    <h4 className="font-semibold">Ijazaat Certification</h4>
                    <p className="text-sm text-muted-foreground">
                      Official authorization to teach with authenticated chains
                    </p>
                  </div>
                  <div className="text-center space-y-3">
                    <BookOpen className="h-12 w-12 mx-auto text-blue-600" />
                    <h4 className="font-semibold">Multiple Qira'at Mastery</h4>
                    <p className="text-sm text-muted-foreground">
                      Comprehensive study of various authentic recitation styles
                    </p>
                  </div>
                  <div className="text-center space-y-3">
                    <Users className="h-12 w-12 mx-auto text-purple-600" />
                    <h4 className="font-semibold">Sanad Chain</h4>
                    <p className="text-sm text-muted-foreground">
                      Direct unbroken chain to Prophet Muhammad ﷺ
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4 text-center">
                  <p className="text-muted-foreground">
                    Our graduates have registered with Islamic universities worldwide and participated 
                    in international competitions, achieving distinguished positions.
                  </p>
                  
                  <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                    Learn More About Advanced Programs
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};