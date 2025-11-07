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
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2">
              Donations انفق ينفق عليك
            </h1>
            <div className="bg-emerald-600 text-white px-6 py-3 rounded-lg inline-block">
              إن أردت النسخة العربية لهذه الرسالة - فتفضل اضغط هنا
            </div>
          </div>

          {/* Mission Statement */}
          <div className="mb-8 text-lg leading-relaxed">
            <p className="mb-4">
              <strong>ASSALAMU ALAYKUM</strong>, Message from Ibn Al Jazari Institute® Birmingham UK: Donation for establishing a permanent headquarters for IJAZA-Institute® to carry out its mission in the best possible way, in preserving the Holy Qur'an and the science of recitations among current and future generations.
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

          {/* Mission Text */}
          <div className="mt-12 text-sm leading-relaxed space-y-4">
            <p>
              <strong>To every lover of Allah and His Messenger ﷺ,</strong><br />
              To everyone who is preserving and defending the religion of Allah and wants it to remain lofty and flourishing until Allah (SWT) decides otherwise,<br />
              To everyone who loves the Qur'an and its sciences, and who wants it to remain pure, clear, and timeless, as if it were revealed only yesterday,<br />
              To those who love the religion that Allah has chosen for His creation,
            </p>
            
            <p>
              This is a message of friendship, a title of love, and a precious gift to those who want to leave a mark that will forever carry their impact and effect in the world of people.
            </p>

            <p>
              In 2002, upon the founding sheikh's arrival in Birmingham from the Arabian East, he reached out to several institutions, offering to teach the Quranic sciences and the study of Qira'at to any who were interested. However, his efforts were met with some reluctance to engage with Qira'at in such depth, often stemming from an unfamiliarity with the discipline. Recognising this gap, he initiated awareness campaigns aimed at reviving the study of Qira'at among British Muslims. While these efforts bore a measure of fruit, there were obstacles that ultimately led him to establish an independent Institute dedicated to preserving and disseminating this vital science within the Muslim community.
            </p>

            <p>
              Thus, small spaces were rented for the Institute's initial operations, teaching a number of students until some were well-versed and could shoulder the burden of conveying the message to those willing to learn. As this foundation grew stronger, the Institute secured a larger facility to accommodate the expanding program and its growing cohort of certified students holding Ijazaat. And thus the Institute's current headquarters were established—a journey that spanned approximately fifteen years.
            </p>

            <p>
              From these humble beginnings, the Institute has certified countless students, many of whom now serve as teachers in their own right, passing on their knowledge to new generations. Many graduates have achieved remarkable distinction: some have become internationally renowned reciters, others serve as imams leading Muslim communities across multiple countries, and still others have founded their own Institutes and centres, not only throughout this city but around the globe.
            </p>

            <p>
              Our mission is to provide exceptional education and comprehensive knowledge that cultivates true students of knowledge—ones who are not only proficient and distinguished in their learning but who also remain deeply committed to their faith, reverent and devoted to it, proud of their heritage, and appreciative of the generations of Muslims who came before them. We seek to develop individuals who understand the sacred responsibility entrusted to them and possess the skills necessary to faithfully transmit this trust to future generations, preserving it without distortion or alteration.
            </p>
          </div>

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