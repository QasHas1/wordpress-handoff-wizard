import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { GraduationCap, Award, BookOpen, Search } from "lucide-react";
import { useState } from "react";

export const Ijazaat = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Sample data based on the website - in a real app this would come from an API
  const ijazaatData = [
    {
      studentName: "Ibrahim Ahmed",
      arabicName: "إبراهيم أحمد عبد الله",
      certification: "By heart Poem At-Tuhfah: Idjazah with Sanad",
      arabicCertification: "تحفة الاطفال (الإجازة بها غيبا عن ظهر قلب في مجلس واحد)",
      date: "1/9/2019"
    },
    {
      studentName: "Ibrahim Barkhadli",
      arabicName: "إبراهيم برخَدْلي",
      certification: "By heart Poem At-Tuhfah: Idjazah with Sanad",
      arabicCertification: "تحفة الاطفال (الإجازة بها غيبا عن ظهر قلب في مجلس واحد)",
      date: "8/13/2015"
    },
    {
      studentName: "Ibrahim Barkhadli",
      arabicName: "إبراهيم برخَدْلي",
      certification: "By heart Poem Al Jazariyah: Idjazah with Sanad",
      arabicCertification: "الجزرية (الإجازة بها غيبا عن ظهر قلب في مجلس واحد)",
      date: "8/15/2015"
    },
    {
      studentName: "Ibrahim Barkhadli",
      arabicName: "إبراهيم برخَدْلي",
      certification: "Al Quraan Al Kareem by heart: Qiraat Aasim from Ash-Shatibyiah",
      arabicCertification: "بقراءة عاصم من طريق التيسير والشاطبية",
      date: "12/28/2015"
    },
    {
      studentName: "Ibrahim Abdul Rahman Mazyaan",
      arabicName: "إبراهيم عبد الرحمان مزيان",
      certification: "Poem Al Fawaa'id AL-Muhathabah: Idjazah with Sanad",
      arabicCertification: "الفوائد المهذبة حول ... ونظم الإيضاح لرايئة بريق الإصباح",
      date: "10/12/2019"
    }
  ];

  const certificationTypes = [
    {
      icon: BookOpen,
      title: "Qira'at (Recitation)",
      titleArabic: "القراءات",
      description: "Various levels of Quranic recitation certifications"
    },
    {
      icon: GraduationCap,
      title: "Tajweed",
      titleArabic: "التجويد",
      description: "All levels of Quranic pronunciation and rules"
    },
    {
      icon: Award,
      title: "Arabic Language",
      titleArabic: "اللغة العربية",
      description: "Basic texts and books in various Arabic sciences"
    },
    {
      icon: BookOpen,
      title: "Fiqh & Aqeedah",
      titleArabic: "الفقه والعقيدة",
      description: "Islamic jurisprudence and doctrine"
    }
  ];

  const filteredData = ijazaatData.filter(item =>
    item.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.certification.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.arabicName.includes(searchTerm)
  );

  return (
    <section id="ijazaat" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Ijazaat - الإجازات
          </h2>
          <p className="text-xl text-muted-foreground mb-6 max-w-4xl mx-auto">
            Here are some Ijazaat, that our students were honoured with and carried to the world, 
            in order to preserve knowledge for current and subsequent generations, God Almighty willing.
          </p>
          <p className="text-lg text-muted-foreground mb-8 max-w-4xl mx-auto" dir="rtl">
            هنا بعض الإجازات التي تشرف بها طلبتنا وحملوها إلى العالم، لحفظ العلم إلى الأجيال الحالية واللاحقة بإذن الله تعالى.
          </p>
        </div>

        {/* Certification Types */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {certificationTypes.map((type, index) => {
            const IconComponent = type.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <IconComponent className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <CardTitle className="text-lg">{type.title}</CardTitle>
                  <CardDescription className="text-sm font-arabic" dir="rtl">
                    {type.titleArabic}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground text-center">
                    {type.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Description */}
        <Card className="mb-12 bg-muted/50">
          <CardContent className="p-8">
            <div className="space-y-4">
              <p className="text-lg leading-relaxed">
                We did not write all the Ijazaat, as they varied at the Ibn al-Jazari Institute (IJAZA-I), 
                from Qira'at to Tajweed at all levels, to the Arabic language and its basic texts and books 
                in its various sciences, to jurisprudence and doctrine, to the books of the imams, 
                to the books of the sheikhs of the Institute, so we ask God Almighty to grant success 
                to all students and sheikhs.
              </p>
              <p className="text-lg leading-relaxed font-arabic" dir="rtl">
                لم نكتب كل الإجازات، إذ قد تنوعت بمعهد ابن الجزري، فمن القراءات على كل المستويات، 
                إلى التجويد بكل مستواته، إلى اللغة العربية ومنظوماتها الأساسية في مختلف علومها، 
                إلى الفقه والعقيدة وإلى كتب الأئمة، وإلى كتب مشايخ المعهد، فنسأل الله تعالى التوفيق لجميع الطلاب والمشايخ.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Search and Table */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-6 w-6" />
              Certified Students Registry
            </CardTitle>
            <CardDescription>
              A record of students who have received Ijazaat from the institute
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* Search */}
            <div className="flex items-center gap-2 mb-6">
              <Search className="h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by student name or certification..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="max-w-md"
              />
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Student Name</TableHead>
                    <TableHead className="text-right">الاسم الكامل للطالب</TableHead>
                    <TableHead>Certification</TableHead>
                    <TableHead className="text-right">إجازة في</TableHead>
                    <TableHead>Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredData.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{item.studentName}</TableCell>
                      <TableCell className="text-right font-arabic">{item.arabicName}</TableCell>
                      <TableCell className="max-w-xs">
                        <div className="text-sm">{item.certification}</div>
                      </TableCell>
                      <TableCell className="text-right font-arabic max-w-xs">
                        <div className="text-sm">{item.arabicCertification}</div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">{item.date}</Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {filteredData.length === 0 && (
              <div className="text-center py-8 text-muted-foreground">
                No results found for your search.
              </div>
            )}

            <div className="mt-6 text-sm text-muted-foreground">
              Showing {filteredData.length} of 384 total entries
            </div>
          </CardContent>
        </Card>

        {/* Note for Students */}
        <Card className="mt-8 border-amber-200 bg-amber-50/50 dark:border-amber-800 dark:bg-amber-950/20">
          <CardContent className="p-6">
            <h3 className="font-semibold mb-3 text-amber-800 dark:text-amber-200">
              Important Notice for Certified Students
            </h3>
            <div className="space-y-2">
              <p className="text-sm text-amber-700 dark:text-amber-300">
                If anyone wants his name to be removed, for a special reason, from the above list, 
                let us know as soon as possible, and we will delete his name with an apology to him. 
                We ask God Almighty for success for everyone.
              </p>
              <p className="text-sm text-amber-700 dark:text-amber-300 font-arabic" dir="rtl">
                من أراد أن يُحْذَفَ اسمُه، لسبب خاص، من القائمة أعلاه، فليخبرنا عاجلا، 
                وسنحذف اسمه في أسرع وقت مع الاعتذار له. ونسأل الله تعالى التوفيق للجميع.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};