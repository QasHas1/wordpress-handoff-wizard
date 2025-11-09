import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";

const Terms = () => {
  useEffect(() => {
    document.title = "Terms and Conditions - Ibn Al-Jazari Institute";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-20">
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="p-8 md:p-12">
                <h1 className="text-4xl font-bold mb-8 text-center border-b-2 border-primary pb-4">
                  terms-and-conditions
                </h1>

                <div className="text-center mb-8">
                  <p className="text-lg">
                    Please read and accept these conditions to join IbnAlJazariInstitute®
                  </p>
                </div>

                <div className="space-y-6 text-foreground leading-relaxed">
                  <p className="font-semibold">
                    Hifz Al Qur'an, Tajweed and Qira'at training to be a certified scholar, Qaari' or teacher of Qira'at at a high level of accuracy and perfection (with the help of Allah -SWT-).
                  </p>

                  <p className="font-medium">
                    Rules concerning these Lessons (to be considered, and signed or ticked [online] before joining these courses):
                  </p>

                  <p>
                    I understand what is written on this paper: a paper of the Rules, Terms and Conditions necessary for admission to Ibn Al-Jazari Institute. I bear my responsibility in front of Allah and before the administrations for what I sign on this paper.
                  </p>

                  <p>
                    We (IJAZA: i- Ibn Al Jazari Institute) are not sponsored or funded by any agency or entity; only the student's contributions and engagement ensure the Institute® runs proficiently. Therefore, my tuition fees must be paid on time; so that the institution can continue to serve the community.
                  </p>

                  <p>
                    At the start of any of any of our courses, an <strong>upfront payment is necessary</strong> is required (which is non-refundable), provided the student, or their parents, agree to study with us and the administrative arrangements for their course are completed.
                  </p>

                  <p>
                    If there are any <strong>monthly expenses</strong>, students are requested to pay it in the <strong>first day/first week of the month</strong>: Study costs are paid in the first week of every month, whether the student will complete the month at the institute or not, as long as he is at the starting of the course (in general at the beginning month) at the Institute or online <strong>(even if by a day)</strong>, and he is obligated to pay all month's costs to the Institute (non-refundable).
                  </p>

                  <p>
                    Some lessons have their own rules, which are published with the announcement of those lessons, and I must therefore abide by them if I agree to join those lessons.
                  </p>

                  <p>
                    During the Dars (lesson) with the sheikh/teacher, students are allowed to come <strong>together</strong> to the class, but in some places, only <strong>one-by-one</strong>, and during the allocated time. Students have to <strong>manage this with each other</strong>. Each student will be allocated a time to read his Lesson in front of his/her sheikh/teacher.
                  </p>

                  <p>
                    Those who have not mastered what the sheikh/teacher expected from them, could be advised to <strong>do the work again</strong> without any claim from his/her sheikh/teacher or from the school/Institute.
                  </p>

                  <p>
                    Sometimes, <strong>if the lesson is not prepared well enough</strong>, the student can be advised, by his sheikh/teacher, to prepare well for the next Dars (lesson).
                  </p>

                  <p>
                    <strong>Idjazats</strong> from the sheikhs in the Institute, can only be given to those who accomplished correctly what was expected from them, mainly Idjazats are with a chain of narrators (Sanad). For Al-Quran Al-Kareem, the student must read the whole Quran following the rules taught by the sheikh, by heart from the beginning to the end. Then the student will receive a certificate from his Sheikh with a clear explanation of the skills accomplished and a chain of narrators to the Messenger of Allah (PBUH).
                  </p>

                  <p>
                    <strong>Teachers can have four weeks holidays during the year</strong>, in general, there will be neither no Lessons during their absence, nor refunds.
                  </p>

                  <p>
                    Any absence, for more than <strong>four successive weeks, without paying the necessary fees</strong>, the absentee will see his/her name put in the waiting list, and the Institute may contact the concerned when it is possible to join the Durous (lessons) again.
                  </p>

                  <p>
                    Whoever wants to leave the group of this Dars, must give <strong>prior notice of at least one month</strong>.
                  </p>

                  <p>
                    <strong>Lesson expenses of books, Idjazats</strong>…if they are necessary for the student in this Dars, will be paid for by the student.
                  </p>

                  <p>
                    Seeking Islamic knowledge demands <strong>good discipline</strong>, anyone who is not taking this into consideration will be expelled at any time, and there will be no refunds.
                  </p>

                  <p>
                    <strong>Change of class location:</strong> The Institute rents its current premises. The landlord may request that the space be vacated at any given month. In this case, the administration strives to find a new location. However, periods of disruption may occur, including relocating students, to contact them online or transferring them to another location, which can be a challenge to find a suitable location for the Institute.
                  </p>

                  <p>
                    The IJAZA-Institute assumes no responsibility for <strong>personal items</strong>.
                  </p>

                  <p>
                    The institute's administration may ask students to sign these conditions on a printed sheet to ensure they are complied with.
                  </p>

                  <div className="text-center mt-12 pt-8 border-t">
                    <p className="mb-2">And Allah (SWT) is the guardian of what we say.</p>
                    <p className="font-semibold">
                      (The Prophet, peace be upon him, said: "<strong>The Muslims adhere to their own terms</strong>").
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Terms;
