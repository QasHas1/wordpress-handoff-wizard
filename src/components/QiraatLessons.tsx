import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Award } from "lucide-react";

export const QiraatLessons = () => {
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
            <p className="font-semibold text-primary">
              We teach the:
            </p>
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