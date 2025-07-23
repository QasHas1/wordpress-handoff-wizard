import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export const WhatWeTeach = () => {
  const subjects = [
    {
      title: "Tajweed",
      description: "We supply students with highly experienced knowledge of Tajweed rules and teach them step by step on pronunciations and uses. We guarantee that in an intense course of a few months the student will be able to read the Quran smoothly and well."
    },
    {
      title: "Hifth", 
      description: "By the help of Allah SWT, and with the experience and qualification of our teachers, many of the students that study in our institute have accomplished high standards of Hifth al Quran al Kareem and its Qiraats. Students that attend our institute have won awards in national and international competitions."
    },
    {
      title: "Qiraat",
      description: "Any student that was rewarded with an ijazah in any Qira'ah is in a position to be able to teach that Qira'ah as a qualified sheikh. Many students became worldwide Imams, Head of Imams, Teachers or Qira'at trainers through our teaching. All of our sheikhs have achieved qualified Assaneed and Ijazaat of Al Quran Al Kareem."
    },
    {
      title: "Arabic",
      description: "Our Arabic lessons are taught by Arabic speaking teachers, with a large experience of teaching this language in European countries. All our courses end by a certification, or Idjazah for the student to transmit the knowledge taught in the lesson. By the help of Allah SwT all our students will be confident in themselves to talk, write and read the Arabic, with ease."
    }
  ];

  return (
    <section id="what-we-teach" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">WHAT WE TEACH</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {subjects.map((subject, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <CheckCircle className="h-12 w-12 text-green-600" />
                </div>
                <CardTitle className="text-2xl">{subject.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-center">
                  {subject.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};