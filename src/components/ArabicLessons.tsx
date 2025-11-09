import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import arabicBanner from "@/assets/arabic-lessons-banner.jpg";
import grammarEnglish from "@/assets/arabic-grammar-english.jpg";
import grammarArabic from "@/assets/arabic-grammar-arabic.jpg";

export const ArabicLessons = () => {
  const navigate = useNavigate();

  return (
    <section id="arabic" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Arabic</h1>
          
          <div className="space-y-6 text-foreground">
            <h2 className="text-2xl font-semibold">Arabic Lessons:</h2>
            
            <p>
              <strong className="text-green-600">ARABAY1:</strong> Al Arabiyyah Bayna Yadayk – Book1 = Level 1, Part 1 & Part 2, 
              <strong className="text-green-600"> ARABAY2:</strong> Al Arabiyyah Bayna Yadayk – Book2 = Level 2, Part 1 & Part 2, 
              <strong className="text-green-600"> ARABAY3:</strong> Al Arabiyyah Bayna Yadayk – Book3 = Level 3, Part 1 & Part 2, 
              <strong className="text-green-600"> ABBAY4:</strong> Al Arabiyyah Bayna Yadayk – Book4 = Level 3, Part 1 & Part 2
            </p>

            <div className="my-8">
              <img 
                src={arabicBanner} 
                alt="Arabic Lessons - Based on 4 books taught at the Islamic University of Medina"
                className="w-full max-w-3xl mx-auto rounded-lg shadow-lg"
              />
            </div>

            <div className="bg-muted/30 p-6 rounded-lg space-y-4">
              <h3 className="font-semibold text-lg">Books Taught</h3>
              <p>Al Arabiyyah Bayna Yadayk<br/>(Level 1, Part 1 & Part 2)</p>
              <p className="text-sm">Supporting texts<br/>(on morphology, grammar, and vocabulary)</p>
              
              <h3 className="font-semibold text-lg mt-6">Joining Conditions</h3>
              <p>The ability to fluently read the Quran.<br/>
              Discipline and determination to apply oneself to study.<br/>
              Consolidation of the terms and conditions of our Institute*.</p>
              
              <h3 className="font-semibold text-lg mt-6">Price and Duration</h3>
              <p>Fees: Contact us/Prepayment of 3 months in advance.<br/>
              The price of the 2 prescribed books is ~£55.<br/>
              Course duration: one full year, two days a week (Sat & Sun).</p>
              
              <div className="bg-destructive/10 border border-destructive/20 p-4 rounded mt-4">
                <p className="text-sm">
                  This program is held for a <strong>limited</strong> number of students (5 <strong>per class</strong>, ensuring a high quality of teaching and that students can progress swiftly.
                </p>
              </div>
              
              <div className="bg-primary/10 p-4 rounded mt-4">
                <p className="text-sm">
                  For more information, contact the<br/>
                  Ibn Al-Jazari Institute in Birmingham for memorizing the<br/>
                  Noble Qur'an or studying one of Al-Qira'a Sciences<br/>
                  <strong className="text-primary text-xl">+44 7403 135821</strong>
                </p>
              </div>
            </div>

            <p className="mt-8">
              <strong className="text-green-600">ABALESS:</strong> Based on 3 books taught at the Islamic University of Medina, Arabic Course for English Speaking Students + Al-Aajorrouniyaat (grammatical reference texts)/ Tasreef At-Tasreef (book of conjugation) / Al-Muqtafi (A practical book on the Arabic script and dictation)
            </p>

            <p className="mt-6 font-semibold">Short course: (1) Arabic dictation / (2) Arabic Grammar</p>

            <div className="bg-muted/30 p-6 rounded-lg mt-8 space-y-4">
              <p>
                Our Arabic lessons are taught by Arabic speaking teachers, with a large experience of teaching this language in European countries. All our courses will end by a certification, or Idjazah for the student to transmit the knowledge taught in the lesson. These are the actual modules taught in our Institute:
              </p>

              <p>
                <strong className="text-green-600">ARASHO:</strong> short course prementioned.
              </p>

              <p>
                <strong className="text-green-600">ABBAY1:</strong> Al Arabiyyah Bayna Yadayk – Book1 = Level 1, Part 1 & Part 2, 
                <strong className="text-green-600"> ABBAY2:</strong> Al Arabiyyah Bayna Yadayk – Book2 = Level 2, Part 1 & Part 2, 
                <strong className="text-green-600"> ABBAY3:</strong> Al Arabiyyah Bayna Yadayk – Book3 = Level 3, Part 1 & Part 2, 
                <strong className="text-green-600"> ABBAY4:</strong> Al Arabiyyah Bayna Yadayk – Book3 = Level 3, Part 1 & Part 2
              </p>

              <p>
                <strong className="text-green-600">ARAISU:</strong> Based on 3 books taught at the Islamic University of Medina, Arabic Course for English Speaking Students + Al-Aajorrouniyaat (grammatical reference texts)/ Tasreef At-Tasreef (book of conjugation) / Al-Muqtafi (A practical book on the Arabic script and dictation)
              </p>

              <p>
                <strong className="text-green-600">ARILEV:</strong> Introductory levels: In this level students could deeply study the content of the Medina Program (Arabic Course for English Speaking Students volumes 1 to 3), as well as other complimentary booklets written by the scholars of Ibn Al Jazari Institute. So we will split this course in three : 
                <strong className="text-green-600"> ARILEV1:</strong> Arabic Course for English-Speaking Students volumes 1 + Side books, 
                <strong className="text-green-600"> ARILEV2:</strong> Arabic Course for English-Speaking Students volumes 2 + Side books., 
                <strong className="text-green-600"> ARILEV3:</strong> Arabic Course for English-Speaking Students volumes 3 + Side books.
              </p>

              <p>
                <strong className="text-green-600">ARBYLEV1:</strong> Level 1: Arabic for beginners based on Al Arabia Bayna Yadayk Book 1, as well as other complimentary booklets written by the scholars of Ibn Al Jazari Institute.
              </p>

              <p>
                <strong className="text-green-600">ARBYLEV2:</strong> Level 2: Arabic for beginners based on Al Arabia Bayna Yadayk Book 2, as well as other complimentary booklets written by the scholars of Ibn Al Jazari Institute.
              </p>

              <p>
                <strong className="text-green-600">ARBYLEV3:</strong> Level 3: Arabic for beginners based on Al Arabia Bayna Yadayk Book 3, as well as other complimentary booklets written by the scholars of Ibn Al Jazari Institute.
              </p>

              <p>
                <strong className="text-green-600">ARFQUR:</strong> Arabic of the Qur'an Al Kareem.
              </p>

              <p>
                <strong className="text-green-600">ARGRA1:</strong> Lesson mainly in Arabic language, to understand the main grammatically rules. The book "Al Ajoroumiyaat" grouping three main texts of scholars of the Arabic Grammar. Studied in deep with a lot of practices to make the grammar natural and easy to implement. After this level students should be able the understand the necessary concepts of the Arabic sentences and take benefit form text that they may read (Qur'an, Hadith, Stories…). A certification will be given and an Idjazah of the book to reported all the way back to the author.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <img 
                  src={grammarEnglish} 
                  alt="Arabic Grammar Level One - English Leaflet"
                  className="w-full rounded-lg shadow-lg"
                />
                <img 
                  src={grammarArabic} 
                  alt="Arabic Grammar Level One - Arabic Leaflet"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>

              <p>
                <strong className="text-green-600">ARGRA2:</strong> Lesson completely in Arabic language, to take the students to a medium level of the grammar rules, helping them to talk without any grammar mistake. A certification of the lesson will be issued, plus an Idjazah of the book in the programme.
              </p>

              <p>
                <strong className="text-green-600">ARGRA3:</strong> Lesson completely in Arabic language, to take the students to a highest level possible of Arabic language grammar. A certification of the lesson will be issued, plus an Idjazah of the books and poems in the programme.
              </p>
            </div>

            <p className="mt-6">
              Our lessons are taught in small classes, no more than ten students per group (but no less than five at any time).
            </p>

            <p className="mt-4">
              Student registration is now open at this link:{" "}
              <Button
                variant="link"
                className="text-primary hover:text-primary/80 p-0 h-auto underline"
                onClick={() => navigate('/arabic/arabic-registration')}
              >
                Arabic Registration
              </Button>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};