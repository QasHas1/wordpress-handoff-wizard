import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Award, Users } from "lucide-react";

export const HifthLessons = () => {
  return (
    <section id="hifth" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Hifth Al Qura'an Lessons:</h2>
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Hifth al Qura'an is one of the first tasks of our honoured teachers, even before they decided to create Ibn Al Jazari Institute. Many of our students are leading Taraweeh prayers, Imams or registered with some Islamic universities when Hifth is prerequisited. Some of them participated in many International competitions reaching, for many occasions, good positions. To benefit from our large experience, apply for <strong>Hifth Al Qur'an</strong>: <span className="text-primary cursor-pointer">here</span>
            </p>
          </div>
        </div>

        <Card className="max-w-4xl mx-auto">
          <CardHeader className="text-center">
            <BookOpen className="h-12 w-12 mx-auto mb-4 text-primary" />
            <CardTitle className="text-2xl">Complete Quran Memorization</CardTitle>
            <CardDescription className="text-lg">
              Professional Hifth program with experienced teachers and proven methodology
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="space-y-2">
                <Award className="h-8 w-8 mx-auto text-green-600" />
                <h4 className="font-semibold">Expert Guidance</h4>
                <p className="text-sm text-muted-foreground">Learn from experienced teachers</p>
              </div>
              <div className="space-y-2">
                <Users className="h-8 w-8 mx-auto text-blue-600" />
                <h4 className="font-semibold">Community Leadership</h4>
                <p className="text-sm text-muted-foreground">Many students become Imams</p>
              </div>
              <div className="space-y-2">
                <Award className="h-8 w-8 mx-auto text-purple-600" />
                <h4 className="font-semibold">Competition Success</h4>
                <p className="text-sm text-muted-foreground">Students excel in international competitions</p>
              </div>
            </div>
            
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              Apply for Hifth Al Qur'an
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};