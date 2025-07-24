import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Award } from "lucide-react";

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

  return (
    <section id="qiraat" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Qira'at Lessons:</h2>
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              We teach Al Qira'at at the highest level possible, we are proud to have presented many of our students with their Idjazaat or Assaneed to the Messenger of Allah SAWT.
            </p>
            <p>
              Many of our students have moved on to become Sheikhs of Qira'ats themselves or are leading Muslims worldwide in different communities. Some of them received certificates or recommendations to join Official Muslim organisations or universities to finish their studies.
            </p>
            <p>
              Through long years of learning the knowledge of our teachers and their own massive experiences, we are able to make it easier for our students to get to the necessary advanced levels and be in a position to achieve the highest in the science of Qira'at Al Kuraan Al Kareem.
            </p>
            <p className="font-semibold text-primary mb-4">
              We teach the:
            </p>
            <div className="text-left max-w-2xl mx-auto space-y-2 text-base">
              <ul className="list-disc list-inside space-y-1">
                <li>10 Qira'at Al Soughrah (20 Riwayat)</li>
                <li>10 Qira'at Al Koubra (20 Riwayat, Higher Qiraat: all the ways of Kitaab Allah, around 1000 ways)</li>
                <li>Any Qira'at or Riwayat separately.</li>
                <li>The 10 Qira'at Al Sagheer</li>
                <li>The Extra 4 Qira'at (over the well known 10 ones)</li>
                <li>All the books related to Al Qira'at with chain of narrators to their sheikh's authors.</li>
                <li>All related knowledge linked to Qira'at.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Ten Minor Qira'at Lessons */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-6">Ten minor Qira'āt recitations Lessons:</h3>
          <p className="text-red-600 mb-8 text-center font-medium">(Please note the desired codes down for the registration process.)</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {minorQiraatCourses.map((course) => (
              <Card key={course.code} className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline" className="text-green-600 border-green-600">
                    {course.code}
                  </Badge>
                </div>
                <p className="text-sm">{course.title}</p>
              </Card>
            ))}
          </div>

          <div className="mb-8">
            <h4 className="text-xl font-semibold mb-4 text-green-600">Grouped Minor Qira'at Courses:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {groupedMinorCourses.map((course) => (
                <Card key={course.code} className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline" className="text-blue-600 border-blue-600">
                      {course.code}
                    </Badge>
                  </div>
                  <p className="text-sm">{course.title}</p>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center">
            <p className="text-muted-foreground mb-4">
              Student registration is now open at this link:
            </p>
            <Button className="bg-green-500 hover:bg-green-600">
              Minor Qiraat Registration
            </Button>
          </div>
        </div>

        {/* Ten Major Qira'at Lessons */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-6">Ten Major Qira'āt recitations Lessons:</h3>
          <p className="text-red-600 mb-8 text-center font-medium">(Please note the desired codes down for the registration process.)</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {majorQiraatCourses.map((course) => (
              <Card key={course.code} className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline" className="text-purple-600 border-purple-600">
                    {course.code}
                  </Badge>
                </div>
                <p className="text-sm">{course.title}</p>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <p className="text-muted-foreground mb-4">
              Student registration is now open at this link:
            </p>
            <Button className="bg-purple-500 hover:bg-purple-600">
              Major Qiraat Registration
            </Button>
          </div>
        </div>

        {/* This section would continue with the specific Qiraat teachings */}
        <Card className="max-w-4xl mx-auto">
          <CardHeader className="text-center">
            <BookOpen className="h-12 w-12 mx-auto mb-4 text-primary" />
            <CardTitle className="text-2xl">Advanced Qira'at Studies</CardTitle>
            <CardDescription className="text-lg">
              Professional level Quranic recitation with complete chains of transmission
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="space-y-2">
                <Award className="h-8 w-8 mx-auto text-green-600" />
                <h4 className="font-semibold">Ijazaat Certification</h4>
                <p className="text-sm text-muted-foreground">Official authorization to teach</p>
              </div>
              <div className="space-y-2">
                <BookOpen className="h-8 w-8 mx-auto text-blue-600" />
                <h4 className="font-semibold">Multiple Qira'at</h4>
                <p className="text-sm text-muted-foreground">Various authentic recitation styles</p>
              </div>
              <div className="space-y-2">
                <Award className="h-8 w-8 mx-auto text-purple-600" />
                <h4 className="font-semibold">Sanad Chain</h4>
                <p className="text-sm text-muted-foreground">Direct chain to Prophet Muhammad ﷺ</p>
              </div>
            </div>
            
            <p className="text-muted-foreground mb-6">
              Many of our students have registered with some Islamic universities when Hifth is prerequisited. 
              Some of them participated in many International competitions getting good positions.
            </p>
            
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
              Learn More About Qira'at Programs
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};