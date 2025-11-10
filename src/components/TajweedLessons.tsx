import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const TajweedLessons = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-4xl font-bold mb-8 border-b-2 border-primary pb-2 inline-block">Tajweed</h1>
        
        <div className="space-y-8">
          {/* Introduction */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Tajweed Lessons:</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              In Ibn Al Jazari Institute™ (IJAZA-I) we have a long experience in teaching Tajweed, many of our students are currently teaching others in the community, or around the world, spreading what they have learned from us in this field. Our courses for Tajweed are for all tiers: Beginner, Intermediate, Advanced or Very Advanced.
            </p>
            
            <p className="text-green-600 font-bold text-lg mb-4">
              IADT stands for International Advanced Diploma in Tajweed™:
            </p>
            
            <p className="text-muted-foreground leading-relaxed mb-4">
              To obtain full training, with a diploma proving the student's competence, we have created the <span className="font-bold">"IADT: International Advanced Diploma in Tajweed™ Sciences"</span>: A pioneering initiative that IJAZA-I has developed for international implementation, this is the highest qualification that a student can achieve in the science of Tajweed, alongside application to and practice of Qur'anic recitations, with Ijazaat attributed in six Tajweed Poems, if memorized and understood correctly.
            </p>
            
            <p className="text-muted-foreground leading-relaxed mb-4">
              If one wishes to undertake a comprehensive study of Tajweed, then enrolling to the IADT program will ensure that all aspects of the science are covered in detail. The duration of this course is <span className="font-bold">two years</span>.
            </p>
            
            <p className="text-muted-foreground leading-relaxed mb-4">
              If one truly applies themselves, one would no longer need to study Tajweed following this tutelage, wherever you live or travel. The theoreticals and practicals of Tajweed are with you, benefiting you first, then the entire Ummah through you, and ultimately, the greater benefit in the Hereafter, Allah willing.
            </p>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              To register for the IATD, please follow this link:{" "}
              <a 
                href="#" 
                className="text-primary hover:underline font-semibold"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/courses/tajweed/tajweed-registration');
                }}
              >
                "International Advanced Diploma in Tajweed™ Sciences"
              </a>.
            </p>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              The approved books for teaching this diploma are as follows:
            </p>
          </div>

          {/* All Books Overview Image */}
          <div className="mb-8">
            <img 
              src="https://ibnaljazariinstitute.com/wp-content/uploads/2025/09/IATD-All-Books-scaled.jpg"
              alt="IATD All Books Overview"
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          {/* TAJBEG Section */}
          <div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you do not want to take the course, and instead wish to study individual modules, please select one level from the following:
            </p>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              <span className="text-green-600 font-bold">TAJBEG:</span> (Course for all beginners: <span className="font-bold">Stages of Tajweed</span>) The beginner courses will be following the outline of the First book of Tajweed, published by Sheikh Abu Hamza: <span className="font-bold">"The Perfection Before The Certification, Volume 1 & Volume 2"</span> published in two languages: Arabic and English. It is completed during a sixth month time period (three months for a condensed course) and the aim is for the student to be able to correctly pronounce all letters and read the Qur'an with the correct Tajweed when they are certified, in shaa' Allah.
            </p>

            {/* Book Images - Volume 1 & 2 */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="space-y-4">
                <img 
                  src="https://ibnaljazariinstitute.com/wp-content/uploads/2025/08/ENGLISH_book-Al-idjaadah-1-book-Paperback-01-scaled.jpg"
                  alt="Tajweed Volume 1 English"
                  className="w-full rounded-lg shadow-lg"
                />
                <img 
                  src="https://ibnaljazariinstitute.com/wp-content/uploads/2025/08/ENGLISH_book-Al-idjaadah-2-book-Paperback-01-01-scaled.jpg"
                  alt="Tajweed Volume 2 English"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-4">
                <img 
                  src="https://ibnaljazariinstitute.com/wp-content/uploads/2025/08/ARABIC_book-Al-idjaadah-1st-book-lulu-crown-quarto-PaperBack-22-11-2024-01-scaled.jpg"
                  alt="Tajweed Volume 1 Arabic"
                  className="w-full rounded-lg shadow-lg"
                />
                <img 
                  src="https://ibnaljazariinstitute.com/wp-content/uploads/2025/08/ARABIC_book-Al-idjaadah-2nd-book-lulu-crown-quarto-PaperBack-29-11-2024-scaled.jpg"
                  alt="Tajweed Volume 2 Arabic"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-8">
              This is a permanent lesson in our Institute, just register and we will inform you when the next session will take place.
            </p>

            <p className="text-center mb-4" dir="rtl">
              <span className="leading-relaxed">
                برجاء، عند ملئ الاستمارة، يجب تحديد الوقت المطلوب، لتجنب أي سوء فهم. سنحاتجاتنا برعايتنا لكم بالتوفيق والسداد
              </span>
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6 text-center">
              Please, when filling out the form, specify the required time, to avoid any misunderstanding. Jazzakallahu Khayran & Thank you.
            </p>

            <p className="text-center mb-8" dir="rtl">
              <span className="leading-relaxed text-sm">
                لإتقان التجويد في هذا المستوى، مع الحفظ للمُتُون الواردة فيه، ومعه لبعض أجزاء القرآن، قد يستمر هذا الدرس لمُدة ستة كاملة (وقد تزيد راجع للطالبُة في هذا الفصل، وقدراتهم للتعلم والتطبيقات)
              </span>
            </p>

            <p className="text-muted-foreground leading-relaxed mb-8">
              To master Tajweed at this level, along with memorising the texts Ulamas narrations/poems included in it, and some parts of the Qur'an, this lesson may last for a full year (≈ 100 sessions); this depends on the students in this class and their ability to learn and apply.
            </p>
          </div>

          {/* TAJIN1 Section */}
          <div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <span className="text-green-600 font-bold">TAJIN1:</span> The intermediate course will be following the outline of the Third book of Tajweed, published by Sheikh Abu Hamza: <span className="font-bold">"The Perfection Before The Certification, Volume 3"</span>
            </p>

            <p className="font-bold mb-2">Clarification of the rulings of the Tajweed;</p>
            <p className="font-bold mb-2">Included: Explanation of whole Tuhfat Ul Atfal and what is necessary from some Tajweed poems;</p>
            <p className="font-bold mb-6">How the rules of Tajweed are scripted in the Noble Qur'an</p>

            <p className="text-muted-foreground leading-relaxed mb-8">
              Explanation and practice then Idajazah in Tajweed at this level.
            </p>

            {/* Book Images - Volume 3 */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <img 
                src="https://ibnaljazariinstitute.com/wp-content/uploads/2025/08/ENGLISH_AL_BAYAN-3nd-book-PAPERBACKcover-01-01-scaled.jpg"
                alt="Tajweed Volume 3 English"
                className="w-full rounded-lg shadow-lg"
              />
              <img 
                src="https://ibnaljazariinstitute.com/wp-content/uploads/2025/08/ARABIC_AL_BAYAN-3rd-book-PaperBack_cover-01-scaled.jpg"
                alt="Tajweed Volume 3 Arabic"
                className="w-full rounded-lg shadow-lg"
              />
            </div>

            <p className="text-muted-foreground leading-relaxed mb-6">
              <span className="font-bold">Tajweed: The Perfection Before Certification (Paperback) – Book 3:</span>
            </p>

            <p className="font-bold mb-6">
              Clarification of the rulings of the Tajweed and how they are scripted in the Qur'ān.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4">
              This book is a complete curriculum, for students and teachers of the sciences of Tajweed, to learn the basic rulings of Tajweed and apply them at the highest level in the ten Qur'anic Qira'at and what is attributed to them. It also includes practical explanations of the <span className="font-bold">Tuhfat Ul Atfal</span>, and its application on the possible Qira'āt. Thus the student can read any Qira'ah of the Holy Qur'an without any fear. The compiler has followed a practical method that brings the meanings closer and makes it easier for the teacher and the students to reach the intended benefit of the poem, whether the student is a beginner or an advanced one.
            </p>
          </div>

          {/* TAJIN2 Section */}
          <div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <span className="text-green-600 font-bold">TAJIN2:</span> The intermediate course will be following the outline of the fourt book of Tajweed, published by Sheikh Abu Hamza: <span className="font-bold">"The Perfection Before The Certification, Volume 4"</span>
            </p>

            <p className="font-bold mb-4">Part of The Studied Content:</p>

            <div className="space-y-2 mb-6 text-muted-foreground">
              <p>An in-depth study of the rules of Tajweed, at the intermediate level, covering all the topics presented in Al-Muqaddimah fī-mā 'alā Qāri'ihi 'an Ya'lamah (Al-Muqaddimah Al-Jazariyyah) of</p>
              <p>Imam Ibn Jazari : An essential poem for anyone seeking to master the art of reciting the Quran correctly.</p>
              <p>A detailed analysis of the sections of these texts, exploring the rules of Tajweed and their exceptions, discussing them, and their wider application to Quranic recitations.</p>
              <p>The texts of Al-Jazariyyah are supplemented with supporting references by our sheikhs to fully benefit from the leading scholars of Tajweed and Qura'at.</p>
              <p>A deep clarification of the accuracy of these rules in the Quranic text whilst linking knowledge to practice as established by the author.</p>
              <p>How all the rules of Tajweed studied are scripted in the Noble Qur'an Explanation and practice, then Ijāzah in Tajweed…</p>
            </div>

            {/* Book Images - Volume 4 */}
            <div className="grid grid-cols-2 gap-6 mb-12">
              <img 
                src="https://ibnaljazariinstitute.com/wp-content/uploads/2025/08/ENGLISH_Takreemyiah-3rd-book-PaperBack-01.jpg"
                alt="Tajweed Volume 4 English"
                className="w-full rounded-lg shadow-lg"
              />
              <img 
                src="https://ibnaljazariinstitute.com/wp-content/uploads/2025/09/ARABIC_Muntaha-Al-JAIZAH-AT-TAKREEMIAH-4th-book-No-4-Al-JAZARIA-EXPLAINED-COVER-01-scaled.jpg"
                alt="Tajweed Volume 4 Arabic"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* TAJIN3, TAJADV Section */}
          <div className="mb-12">
            <p className="text-muted-foreground leading-relaxed mb-8">
              <span className="text-green-600 font-bold">TAJIN3, TAJADV:</span> The advanced course will be following the outline of the Fifth book of Tajweed, published by Sheikh Abu Hamza: <span className="font-bold">"The Perfection Before The Certification, Volumes 5"</span>:
            </p>

            {/* Book Images - Volume 5 */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <img 
                src="https://ibnaljazariinstitute.com/wp-content/uploads/2025/08/ENGLISH-Muntahaa-Al-Mureed-5th-book-PaperBack-1-scaled.jpg"
                alt="Tajweed Volume 5 English"
                className="w-full rounded-lg shadow-lg"
              />
              <img 
                src="https://ibnaljazariinstitute.com/wp-content/uploads/2025/09/ARABIC_Muntaha-Al-Mureed-5th-book-No-5-Al-Mufeed-PaperBack_cover-01-scaled.jpg"
                alt="Tajweed Volume 5 Arabic"
                className="w-full rounded-lg shadow-lg"
              />
            </div>

            <p className="text-muted-foreground mb-8">
              Student registration is now open at this link:{" "}
              <a 
                href="#" 
                className="text-primary hover:underline font-semibold"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/courses/tajweed/tajweed-registration');
                }}
              >
                Tajweed Registration
              </a>
            </p>
          </div>

          {/* Tajweed Poems & Books Section */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Tajweed Poems & Books:</h2>
            
            <div className="space-y-4 text-muted-foreground">
              <p>
                <span className="text-green-600 font-bold">TAJPM1:</span> List of three <span className="font-bold">main</span> poems of Tajweed, that are read, memorised and understood. Duration: 3 months. Idjazah Certification + Sanad by the end of course.
              </p>
              
              <p>
                <span className="text-green-600 font-bold">TAJPM2:</span> List of three <span className="font-bold">medium</span> level poems of Tajweed, that are read, memorised, understood. Duration: 3 months. Idjazah Certification + Sanad by the end of course.
              </p>
              
              <p>
                <span className="text-green-600 font-bold">TAJPM3:</span> List of two <span className="font-bold">higher medium</span> level poems of Tajweed, that are read, memorised, understood. Duration: 3 months. Idjazah Certification + Sanad by the end of course.
              </p>
              
              <p>
                <span className="text-green-600 font-bold">TAJPMA:</span> List of three <span className="font-bold">advanced</span> level poems of Tajweed, that are read, memorised, understood. Duration: 3 months. Idjazah Certification + Sanad by the end of course.
              </p>
              
              <p>
                <span className="text-green-600 font-bold">TAJBK1:</span> Read & Study the <span className="font-bold">main</span> level book of Tajweed, by Imaam Addani. Duration: 3 months. Idjazah Certification + Sanad by the end of course.
              </p>
              
              <p>
                <span className="text-green-600 font-bold">TAJBK2:</span> Read & Study the <span className="font-bold">medium</span> level book of Tajweed, by Imaam Ibn Al Jazari. Duration: 3 months. Idjazah Certification + Sanad by the end of course.
              </p>
            </div>

            <p className="text-muted-foreground mt-8">
              Student registration is now open at this link:{" "}
              <a 
                href="#" 
                className="text-primary hover:underline font-semibold"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/courses/tajweed/tajweed-registration');
                }}
              >
                Tajweed Poem Registration
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

