import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Donations = () => {
  useEffect(() => {
    document.title = "Donations - Ibn Al-Jazari Institute";
  }, []);

  const [selectedAmount, setSelectedAmount] = useState<number | string>(5);
  const [customAmount, setCustomAmount] = useState("");
  const [frequency, setFrequency] = useState("One-time");
  const [email, setEmail] = useState("");
  const [cardholderName, setCardholderName] = useState("");

  const donationAmounts = [5, 10, 20, 50, 100, 500, 10000];
  const frequencies = ["One-time", "Daily", "Weekly", "Monthly", "Annual"];

  const currentDonated = 215;
  const goal = 800000;
  const progressPercentage = (currentDonated / goal) * 100;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Header with Donate Button */}
          <div className="mb-12">
            <Button 
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white mb-4"
              onClick={() => {
                const formSection = document.getElementById('donation-form');
                formSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Donate
            </Button>
            <p className="text-lg text-foreground" dir="rtl">
              بسم الله الرحمان الرحيم
            </p>
          </div>

          {/* Introduction Text */}
          <div className="mb-8 text-foreground leading-relaxed">
            <p className="mb-4">
              Praise be to Allah, Lord of the Worlds, and may blessings and peace be upon our Prophet Muhammad, his family, and all his companions. This is a brief introduction to the Institute, its achievements, projects, and requirements.
            </p>
          </div>

          {/* Introduction Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Introduction</h2>
            <div className="space-y-4 text-foreground leading-relaxed">
              <p>To every lover of Allah and His Messenger ﷺ,</p>
              <p>To everyone who is preserving and defending the religion of Allah and wants it to remain lofty and flourishing until Allah (SWT) decides otherwise,</p>
              <p>To everyone who loves the Qur'an and its sciences, and who wants it to remain pure, clear, and timeless, as if it were revealed only yesterday,</p>
              <p>To those who love the religion that Allah has chosen for His creation,</p>
              <p>This is a message of friendship, a title of love, and a precious gift to those who want to leave a mark that will forever carry their impact and effect in the world of people.</p>
            </div>
          </section>

          {/* The Institute and its History */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">The Institute and its History</h2>
            <div className="space-y-4 text-foreground leading-relaxed">
              <p>
                In 2002, upon the founding sheikh's arrival in Birmingham from the Arabian East, he reached out to several institutions, offering to teach the Quranic sciences and the study of Qira'at to any who were interested. However, his efforts were met with some reluctance to engage with Qira'at in such depth, often stemming from an unfamiliarity with the discipline. Recognising this gap, he initiated awareness campaigns aimed at reviving the study of Qira'at among British Muslims. While these efforts bore a measure of fruit, there were obstacles that ultimately led him to establish an independent Institute dedicated to preserving and disseminating this vital science within the Muslim community.
              </p>
              <p>
                Thus, small spaces were rented for the Institute's initial operations, teaching a number of students until some were well-versed and could shoulder the burden of conveying the message to those willing to learn. As this foundation grew stronger, the Institute secured a larger facility to accommodate the expanding program and its growing cohort of certified students holding Ijazaat. And thus the Institute's current headquarters were established—a journey that spanned approximately fifteen years.
              </p>
              <p>
                From these humble beginnings, the Institute has certified countless students, many of whom now serve as teachers in their own right, passing on their knowledge to new generations. Many graduates have achieved remarkable distinction: some have become internationally renowned reciters, others serve as imams leading Muslim communities across multiple countries, and still others have founded their own Institutes and centres, not only throughout this city but around the globe.
              </p>
            </div>
          </section>

          {/* Vision and Mission */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Vision and Mission</h2>
            <div className="space-y-4 text-foreground leading-relaxed">
              <p>
                Our mission is to provide exceptional education and comprehensive knowledge that cultivates true students of knowledge—ones who are not only proficient and distinguished in their learning but who also remain deeply committed to their faith, reverent and devoted to it, proud of their heritage, and appreciative of the generations of Muslims who came before them. We seek to develop individuals who understand the sacred responsibility entrusted to them and possess the skills necessary to faithfully transmit this trust to future generations, preserving it without distortion or alteration.
              </p>
              <p>
                The Institute specialises in delivering the complete science of Qira'at in all its intricacy, including: memorising the Qur'an and mastering its rules, understanding its meanings, teaching the Arabic language and its sciences, the science of Qur'anic script and rules, the science of punctuation, the science of Tajweed, the science of stopping and starting, and the science of chains of transmission, or Tahr'irat (which is the knowledge and application of Qira'at using methods that lead to the Qur'an). In addition, we explore the science of beginning and finishing in all Qira'at and in the Arabic language, and the sciences that revolve around this art, such as the Qira'at attributed to the books through which the Qur'an was transmitted to us (Al-Taysir by Al-Dani, Tahbir Al-Taysir by Ibn Al-Jazari, Al-Sab'ah by Ibn Mujahid, Al-Kamil by Al-Hudhali...), and auxiliary sciences such as Adab Talib Al-Ilm, Hilyat Talib Al-Ilm, Al-Tibyan fi Adab Hamalat Al-Qur'an, Al-Arba'in Ahadith, and other Islamic books that are beneficial to the sincere student.
              </p>
            </div>
          </section>

          {/* Global Influence */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Global Influence</h2>
            <div className="space-y-4 text-foreground leading-relaxed">
              <p>
                Though the Institute remains rooted in Birmingham—a vibrant, multicultural city—our students have carried their knowledge to every corner of the globe. They have established educational centres across Britain, or they lead their communities in prayer. Some of them have returned to their countries of origin or relocated elsewhere, continuing to spread the message in places such as Palestine and the Land of the Two Holy Mosques, as well as Qatar, Yemen, Libya, Egypt, Somalia, Kenya, Malaysia, Sudan, Algeria, Morocco, Mauritania, the USA, Canada, France, Germany, Belgium, the Netherlands, and others that would only lengthen this list. As always, all praise and thanks are due to Allah.
              </p>
            </div>
          </section>

          {/* Publications */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Publications</h2>
            <div className="space-y-4 text-foreground leading-relaxed">
              <p>
                The Institute has made substantial contributions to clarifying the sciences of Qur'anic recitation, and it has contributed to other Islamic sciences as well. In terms of scholarly output, the Institute has produced an extensive body of literature dedicated to the preservation of the Holy Quran and its related sciences, all developed under the guidance of Sheikh Abd al-Rahman Abu Hamza al-Shihani—reciter, compiler, and recognised authority in the field. Our publications encompass approximately forty-six works, including:
              </p>

              <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">The third preservation / protection of the Holy Qur'an</h3>
              <p className="mb-4">
                Twelve copies of the Quran for reading and teaching according to the major Turuq (methodologies), incorporating all their recognised variants—that is to say: the Qira'at from the ten most-famed traditions, the Turuq of al-Tayyiba, and the Turuq Al-Nashr.
              </p>
              <div className="space-y-2 text-sm">
                <p>• Mushaf Qaloun Min Toroq Al Tayibaa مصحف برواية قالون من طرق الطيبة الكبرى</p>
                <p>• Mushaf Warsh Al Azraq Greater Qiraat Ways - مصحف المهرة الآزرق من طريق الآزرق الطيبة</p>
                <p>• Mushaf Warsh Al Asbahani—from the Greater Qiraat - مصحف المهرة الأزرق من طريق الأصبهاني من طرق الطيبة</p>
                <p>• Mushaf Ibn Katheer مصحف ابن كثير برواية من كل طرقها الكبرى من طرق الطيبة</p>
                <p>• Mushaf Abu Amr Duri and Susi مصحف أبي عمرو - من رواياته الدوري والسوسي</p>
                <p>• Mushaf Ibn Amir from the two Riwayat Hisham and Ibn Thakwan, All Ways مصحف ابن عامر من رواياتهه هشام وابن ذكوان من كل طرق الطيبة</p>
                <p>• Mushaf Aasim Toroq Attaibah الطيبة مصحف عاصم برواية شعبة وحفص من كل طرق الطيبة</p>
                <p>• Mushaf Qira'at Hamza, Riwayat Khalaf, and Riwayat Khallad from all ways possible—cover الطيبة مصحف قراءة حمزة من رواية خلف، وخلاد من كل طرق الطيبة</p>
                <p>• Mushaf Qira'at Al Kisaa'i, Riwayat Abu Al Harith, Riwayat Duri مصحف الكسائي رواية أبو الحارث والدوري من كل طرق الطيبة</p>
                <p>• Mushaf Qiraat Abu Jaafar, Riwayat Abu Al Harith, and Rwayat Ibn Jammaz from all ways possible الطيبة مصحف أبو جعفر برواية أبو وردان وابن جماز من كل طرق الطيبة</p>
                <p>• Mushaf Yaqoub Riwayat Ruwais and Rawh, All Ways possible الطيبة مصحف يعقوب برواية روايس وروح ومن كل طرق الطيبة</p>
                <p>• Mushaf Khalaf Al Aashir العاشر المهرة خلف المهرة خلف من رواياتي الوراق وإدريس الحداد</p>
              </div>

              <p className="mt-6">
                Six copies of the Qur'an for reading and teaching according to the ten well-known and transmitted Nafi'i methods among the Andalusians and the people of the Maghreb, which are now resurgent in many countries around the world. These copies of the Qur'an are:
              </p>
              <div className="space-y-2 text-sm">
                <p>• Mushaf Qaloun Min Toroq Al Ashr Assagheer، الصغير الأنفاعية مصحف برواية قالون من طرق العشر النافعية الصغير</p>
                <p>• Mushaf Warsh Tareeq Al AZRAQ, from 'An-Naafi'iah Riwayat النافعية مصحف برواية ابن يونس عن الأزرق من طرق من العشر النافعية</p>
                <p>• Mushaf Warsh Tareeq ABDESSAMAD AL 'UTAQI, from 'An-Naafi'iah Riwayat مصحف برواية عبدالصمد المحثني عن الأزرق من طريق العشر النافعية</p>
                <p>• Mushaf Riwayat Al ASBAHANI 'An Warsh 'An Naafi' – Turuq An-Nafi'ia من مصحف برواية الأصبهاني عن الأزرق من طريق الأصبهاني من طريق العشر النافعية</p>
                <p>• Mushaf Riwayat Al Ansaari 'An Naafi' برواية: مصحف برواية الأنصاري من نافع</p>
                <p>• Mushaf Riwayat Al Mussaiabi An Naafi' عن من مصحف برواية المسيبي عن نافع</p>
              </div>

              <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Preserving the methods and chains of transmission of the Qur'an and how to recite each of its methods</h3>
              <p>
                Our teachers wrote everything that must be known theoretically and practically to preserve the recitations of the Qur'an with their chains of transmission back to the Prophet of Islam.
              </p>
              <p>
                So they written the Tahrirat of the Fourteen Qira'at, including: Al-Qanun fi Qira'at riwayat Qalun, Al-Marghub fi Tahrirat al-Azraq Abi Ya'qub, Muntaha al-Amani fi riwayat Warsh via al-Asbahani, Al-Athir fi al-Riwayat Ibn Kathir, Al-Dari fi Tahrirat al-Duri, Al-Marghusi fi Tahrirat al-Susi, Al-Humaim fi Tahri'rat Hisham, Al-Dhakwan fi Tahri'rat Ibn Dhakwan, Al-Shu'bah fi Tahri'rat Shu'bah, Al-Nass fi Tahri'rat Hafs, Al-Harmazah fi Tahri'rat Hamzah, Al-Rawa fi Tahri'rat al-Kisa'i, Al-Anwar fi Tahri'rat Abi Ja'far, Al-Rawys fi Tahri'rat Ruwaya, Al-Ruh fi Tahri'rat al-Ikhtiyar fi Tahri'rat Ruwaya, Al-Ruh fi Tahri'rat al-Ikhtiyar fi al-Ikhtiyar fi Tahri'rat al-Aakhr al-Saghir, Usul wa Furshan, and Ifrad wa Jum'a.
              </p>
              <p>
                And among the books of Tajwid: Al-Ijadah fi Tajwid al-Ijazah in five volumes, and Al-Rakhim al-Farid in one volume.
              </p>
              <p>
                And on the science of Tahri'rat and attribution: "Qanun al-Isnad fi Qalun" and "Al-Ma'alim li al-Isnad fi Qira'at Asim."
              </p>
              <p>
                And on the principles of the Ten Qira'at al-Sughra and al-Kubra, and on the 'Additional Four' (Qira'at): "The fundamentals of the four from its four copies of the Qur'an"...
              </p>
              <p>
                And the Institute has a good edition and chain of transmission for Al-Tuhafa, Al-Jazariyyah, and Al-Salsabil, as well as Pearls of Bayan, Al-Nuniyah, Al-Durrah, Al-Tayyiba, Al-Aqila, Fath Al-Karim, Alfiyyah Ibn Malik, the three Ajurrumiyat, and Tahbir Al-Taysir, and he has a commentary on this as well, and Al-Nashr, as well as three volumes on the script of the Qur'an, its punctuation, and the counting of its verses.The
              </p>
            </div>
          </section>

          {/* The Project */}
          <section className="mb-12" id="donation-form">
            <h2 className="text-3xl font-bold text-foreground mb-6">The Project</h2>
            <div className="space-y-4 text-foreground leading-relaxed mb-8">
              <p>
                <strong>Establishing a stable, globally recognised headquarters</strong> that will enable the Institute to continue delivering the Holy Qur'an and its sciences to current and future generations with safety and distinction.
              </p>
              <p>
                <strong>Establishing mechanisms to maintain contact</strong> with the Institute's students around the world, to aid in their mission of conveying the message of Islam and preserving the two revelations.
              </p>
              <p>
                <strong>Securing adequate financial resources</strong>, as current funding shortfalls limit our ability to preserve the message and implement innovative, contemporary methodologies for the transmission and preservation of the Qur'an and its array of associated sciences.
              </p>
              <p>
                <strong>Expanding the Institute's capacity</strong> to accept and accommodate new students. Our current waiting lists, particularly for young applicants, far exceed the Institute's capacity. While students from around the world seek to join us, our limited resources cannot yet accommodate this demand. Presently, many local students face waiting periods of up to four or five years for admission. Additionally, there is growing demand for teaching positions, both from our own graduates and from external parties.
              </p>
              <p>
                In light of these challenges, the Institute envisions establishing a sizeable community centre that would significantly alleviate the burdens currently shouldered by it, from allowing for newer and contemporary technology to be utilised, to expanding our capacity in both student intake and number of qualified teachers. The centre will be owned by either the Institute itself or the Mirath Group as a legacy for future generations of Muslims. The prohibitive cost of rental properties in this densely populated city, combined with our commitment to waiving tuition fees for students with exceptional circumstances, underscores the urgent need for such a facility and the funds required for this endeavour. As ever, Allah is the Grantor of all success.
              </p>
            </div>

            {/* Progress Section */}
            <div className="mb-8">
              <div className="flex items-end gap-8 mb-4">
                <div>
                  <div className="text-4xl font-bold text-foreground">£{currentDonated}</div>
                  <div className="text-sm text-muted-foreground">of £{goal.toLocaleString()} Donated</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary">{progressPercentage.toFixed(2)}%</div>
                  <div className="text-sm text-muted-foreground">of the Goal</div>
                </div>
              </div>
              <Progress value={progressPercentage} className="h-2 mb-4" />
            </div>

            {/* Donation Form */}
            <div className="grid lg:grid-cols-2 gap-12">
            <div>
              {/* Amount Selection */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Donation amount</h3>
                <div className="grid grid-cols-4 gap-2 mb-4">
                  {donationAmounts.map((amount) => (
                    <Button
                      key={amount}
                      variant={selectedAmount === amount ? "default" : "outline"}
                      onClick={() => {
                        setSelectedAmount(amount);
                        setCustomAmount("");
                      }}
                      className="h-12"
                    >
                      £{amount}
                    </Button>
                  ))}
                </div>
                <Button
                  variant={selectedAmount === "other" ? "default" : "outline"}
                  onClick={() => setSelectedAmount("other")}
                  className="h-12 w-32"
                >
                  Other
                </Button>
                {selectedAmount === "other" && (
                  <Input
                    type="number"
                    placeholder="Enter amount"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    className="mt-2 max-w-xs"
                  />
                )}
              </div>

              {/* Frequency Selection */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Donation frequency</h3>
                <div className="grid grid-cols-3 gap-2">
                  {frequencies.map((freq) => (
                    <Button
                      key={freq}
                      variant={frequency === freq ? "default" : "outline"}
                      onClick={() => setFrequency(freq)}
                      className="h-12 text-xs"
                    >
                      {freq}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-4">
                <div>
                  <label className="block font-semibold mb-2">E-mail address</label>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="max-w-md"
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-2">Cardholder's name</label>
                  <Input
                    type="text"
                    value={cardholderName}
                    onChange={(e) => setCardholderName(e.target.value)}
                    className="max-w-md"
                  />
                </div>
              </div>

              {/* Donate Button */}
              <Button 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 mt-6 text-lg"
                onClick={() => alert("Stripe integration will be added when backend is connected")}
              >
                Donate
              </Button>
            </div>

            {/* Banking Information */}
            <div className="space-y-4">
              <h3 className="font-semibold mb-4">Banking Information</h3>
              
              {/* Ibn Al Jazari Institute */}
              <Card className="bg-emerald-100">
                <CardContent className="p-4">
                  <div className="text-sm space-y-1">
                    <div className="font-semibold">بنك العهد</div>
                    <div><strong>Name:</strong> IBN AL JAZARI Institute</div>
                    <div><strong>Account Number:</strong> 89836405</div>
                    <div><strong>Sort Code:</strong> 51-70-32</div>
                    <div><strong>IBAN:</strong> GB53NWBK51703289836405</div>
                    <div><strong>Reference:</strong> IJAZA-I-Project</div>
                  </div>
                </CardContent>
              </Card>

              {/* QASPA */}
              <Card className="bg-blue-100">
                <CardContent className="p-4">
                  <div className="text-sm space-y-1">
                    <div className="font-semibold">بنك الجمعية</div>
                    <div><strong>Qaspa</strong></div>
                  </div>
                </CardContent>
              </Card>

              {/* Qur'an & Sunnah Preservation Association */}
              <Card className="bg-blue-100">
                <CardContent className="p-4">
                  <div className="text-sm space-y-1">
                    <div><strong>Qur'an & Sunnah Preservation Association</strong></div>
                    <div><strong>Sort Code:</strong> 200898</div>
                    <div><strong>Account Number:</strong> 23455513</div>
                    <div><strong>IBAN:</strong> GB87BUKB20089823455513</div>
                    <div><strong>Reference:</strong> IJAZA-I-Project</div>
                    <div className="text-xs">(Qaspa is an unincorporated associations)</div>
                  </div>
                </CardContent>
              </Card>

              {/* Mirath Group */}
              <Card className="bg-blue-100">
                <CardContent className="p-4">
                  <div className="text-sm space-y-1">
                    <div className="font-semibold">مجموعة ميراث</div>
                    <div><strong>Mirath Group Limited</strong></div>
                    <div><strong>Sort Code:</strong> 04-00-03</div>
                    <div><strong>Account Number:</strong> 57788221</div>
                  </div>
                </CardContent>
              </Card>

              {/* International Transfer */}
              <Card className="bg-blue-100">
                <CardContent className="p-4">
                  <div className="text-sm space-y-1">
                    <div><strong>International Transfer:</strong></div>
                    <div><strong>Name:</strong> MIRATH GROUP LIMITED</div>
                    <div><strong>BIC:</strong> MONZGB2L</div>
                    <div><strong>IBAN:</strong> GB89MONZ04000357788221</div>
                    <div><strong>Reference:</strong> IJAZA-I-Project</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          </section>

          {/* Contact Information */}
          <div className="mt-12 p-6 bg-muted rounded-lg">
            <div className="text-sm space-y-2">
              <div className="text-right font-arabic text-lg mb-4">للاتصال بنا: معهد ابن الجزري لحفظ القرآن وتلقي القراءات وعلومها</div>
              <div className="text-right font-arabic">بمدينة برمنجهام بريطانيا</div>
              <div><strong>Ibn Al Jazari Institute®</strong></div>
              <div>Hifth Al Quraan perfectly with Tajweed</div>
              <div>Qiraat and Qiraat Science learning Centre</div>
              <div className="text-right font-arabic">العنوان الحالي:</div>
              <div><strong>69 Withmore Road, Birmingham, B10 0NR, UK</strong></div>
              <div><strong>Tel: (00 44)(0)7403135821</strong></div>
              <div className="text-right font-arabic">موقعنا، برسائلنا:</div>
              <div><strong>Website:</strong> www.ibnaljazariinstitute.com</div>
              <div><strong>Email:</strong> ibnaljazariinstitute@gmail.com</div>
              <div><strong>Contact:</strong> contact@ibnaljazariinstitute.co</div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Donations;