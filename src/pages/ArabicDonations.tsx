import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useNavigate } from "react-router-dom";

const ArabicDonations = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    document.title = "التبرعات - معهد ابن الجزري";
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
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2 border-b-2 border-primary inline-block pb-2">
              انفق ينفق عليك Donations
            </h1>
          </div>

          {/* English Version Link */}
          <div className="mb-8">
            <Button 
              className="bg-emerald-600 hover:bg-emerald-700 text-white"
              onClick={() => navigate('/donations')}
            >
              If you want the English version of this message - please click here
            </Button>
          </div>

          {/* Mission Statement */}
          <div className="mb-8 text-lg text-foreground leading-relaxed">
            <p dir="rtl">
              <strong>السلام عليكم ورحمة الله وبركاته</strong>، رسالة من معهد ابن الجزري® برمنغهام المملكة المتحدة: التبرع لإنشاء مقر دائم لمعهد الإجازة® للقيام بمهمته على أفضل وجه ممكن، في الحفاظ على القرآن الكريم وعلم القراءات بين الأجيال الحالية والقادمة.
            </p>
          </div>

          {/* Progress Section */}
          <div className="mb-8">
            <div className="flex items-end gap-8 mb-4">
              <div>
                <div className="text-4xl font-bold text-foreground">£{currentDonated}</div>
                <div className="text-sm text-muted-foreground">من £{goal.toLocaleString()} تبرعات</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary">{progressPercentage.toFixed(2)}%</div>
                <div className="text-sm text-muted-foreground">من الهدف</div>
              </div>
            </div>
            <Progress value={progressPercentage} className="h-2 mb-4" />
          </div>

          {/* Donation Form */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              {/* Amount Selection */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3">مبلغ التبرع</h3>
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
                  آخر
                </Button>
                {selectedAmount === "other" && (
                  <Input
                    type="number"
                    placeholder="أدخل المبلغ"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    className="mt-2 max-w-xs"
                  />
                )}
              </div>

              {/* Frequency Selection */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3">تكرار التبرع</h3>
                <div className="grid grid-cols-3 gap-2">
                  {frequencies.map((freq) => (
                    <Button
                      key={freq}
                      variant={frequency === freq ? "default" : "outline"}
                      onClick={() => setFrequency(freq)}
                      className="h-12 text-xs"
                    >
                      {freq === "One-time" ? "مرة واحدة" :
                       freq === "Daily" ? "يومي" :
                       freq === "Weekly" ? "أسبوعي" :
                       freq === "Monthly" ? "شهري" : "سنوي"}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-4">
                <div>
                  <label className="block font-semibold mb-2">البريد الإلكتروني</label>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="max-w-md"
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-2">اسم حامل البطاقة</label>
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
                onClick={() => alert("سيتم إضافة تكامل Stripe عند توصيل الخادم")}
              >
                تبرع
              </Button>
            </div>

            {/* Banking Information */}
            <div className="space-y-4">
              <h3 className="font-semibold mb-4">المعلومات البنكية</h3>
              
              {/* Ibn Al Jazari Institute */}
              <Card className="bg-emerald-100">
                <CardContent className="p-4">
                  <div className="text-sm space-y-1">
                    <div className="font-semibold">بنك المعهد</div>
                    <div><strong>الاسم:</strong> IBN AL JAZARI Institute</div>
                    <div><strong>رقم الحساب:</strong> 89836405</div>
                    <div><strong>رمز الفرز:</strong> 51-70-32</div>
                    <div><strong>IBAN:</strong> GB53NWBK51703289836405</div>
                    <div><strong>المرجع:</strong> IJAZA-I-Project</div>
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
                    <div><strong>جمعية الحفاظ على القرآن والسنة</strong></div>
                    <div><strong>رمز الفرز:</strong> 200898</div>
                    <div><strong>رقم الحساب:</strong> 23455513</div>
                    <div><strong>IBAN:</strong> GB87BUKB20089823455513</div>
                    <div><strong>المرجع:</strong> IJAZA-I-Project</div>
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
                    <div><strong>رمز الفرز:</strong> 04-00-03</div>
                    <div><strong>رقم الحساب:</strong> 57788221</div>
                  </div>
                </CardContent>
              </Card>

              {/* International Transfer */}
              <Card className="bg-blue-100">
                <CardContent className="p-4">
                  <div className="text-sm space-y-1">
                    <div><strong>التحويل الدولي:</strong></div>
                    <div><strong>الاسم:</strong> MIRATH GROUP LIMITED</div>
                    <div><strong>BIC:</strong> MONZGB2L</div>
                    <div><strong>IBAN:</strong> GB89MONZ04000357788221</div>
                    <div><strong>المرجع:</strong> IJAZA-I-Project</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Bismillah */}
          <div className="mb-8">
            <p className="text-lg text-foreground" dir="rtl">
              بسم الله الرحمان الرحيم
            </p>
          </div>

          {/* Introduction Text */}
          <div className="mb-8 text-foreground leading-relaxed" dir="rtl">
            <p className="mb-4">
              الحمد لله رب العالمين، وصلى الله على نبينا محمد وعلى آله وصحبه أجمعين وبعد، هذه نبذة يسيرة - وتعليم المعهد وإنجازاته ومشاريعه ومتطلباته
            </p>
          </div>

          {/* Introduction Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6" dir="rtl">مقدمة</h2>
            <div className="space-y-4 text-foreground leading-relaxed" dir="rtl">
              <p>إلى كل محب لله ورسوله ﷺ،</p>
              <p>إلى كل من يحرص على دين الله ويريد له البقاء شامخا مزدهرا حتى يقضي الله أمرا كان مفعولا،</p>
              <p>إلى كل من يحب القرآن وعلومه، ويريد له أن يبقى نقيا صافيا خالدا، كأنما نزل بالأمس،</p>
              <p>إلى من يحب الدين الذي ارتضاه الله لخلقه،</p>
              <p>هذا رسالة صداقة، ولقب محبة، وهدية ثمينة لمن يريد أن يترك أثرا يحمل تأثيرهم وأثرهم إلى الأبد في عالم الناس.</p>
            </div>
          </section>

          {/* The Institute and its History */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6" dir="rtl">المعهد وتاريخ إنشائه</h2>
            <div className="space-y-4 text-foreground leading-relaxed" dir="rtl">
              <p>
                حوالي 2002، م، يوم دخول الشيخ المؤسس المعهد، برمنغهام، قادما من المشرق العربي، اتصل ببعض المؤسسات لتقديم خدماته في تعليم علوم القرآن المتصلين بدراسة القرا'ات لمن يهمهم الاستفادة من الدرس. فقوبل بنوع من التردد، كون بعض المؤسسات غير متألف مع مثل هذا المعرفة. فإذ دخل حملة لتوعية برمغهام لإحياء المتصلة.
              </p>
              <p>
                وهكذا في البدء، أماكن صغيرة كانت مستأجرة للدروس الأولى للمعهد، وتعليم عدد محدود من الطلاب إلى أن تمكن بعضهم من الدراسة، فصاروا يحملون عبء نقل الدعوة. وعندما تتطور هذا الأساس، نجح المعهد تأمين مكان أكبر لاستيعاب المكونات المتزايدة، والطلاب المجازين من حفاظ الإجازة. وهكذا أنشئ مقر المعهد الحالي—استغرق ذلك حوالي خمس عشرة سنة.
              </p>
              <p>
                من هذه البدايات المتواضعة، عمل المعهد على تخريج وإجازة عدد لا يحصى من الطلاب، الكثير منهم يعد الآن نواجر في نطاقه، ويقوم بتعليم الأجيال الجديدة. ونجح الكثير منهم نجاحا كبيرا: فبعضهم صار قراء معروفون عالميا، وبعضهم يعمل الآن إماما في كنائس ومجموعة لخاصة في مجموعة البلدان، وغيرهم المؤسس معاهدهم ومراكزهم، ليس في مدينة فقط، بل وحول العالم بأسرة.
              </p>
            </div>
          </section>

          {/* Vision and Mission */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6" dir="rtl">الرؤية والرسالة</h2>
            <div className="space-y-4 text-foreground leading-relaxed" dir="rtl">
              <p>
                تفخيم مهمتنا برعاية وعلم شاملة يعلم حقيقة طلاب المعرفة—منهم الذين ليسوا فقط متقنين ومتميزين في تعليمهم، بل أيضا يلتزمون بإيمانهم ويرتدونه، فخورون بتراثه، ومذكر بالأجيال قبل انتظرنا. نعمل نحو بناء افراد يستطيعون فهم المسؤولية المقدسة الممنوحة لهم ويملكون المهارة الضرورية لنقل هذه النقصان والنظير.
              </p>
              <p>
                فالمعهد متخصص بتسليم علم القرا'ات بكامل طرقه شاملا: حفظ القرآن وتدريس أحكامه، فهم معانيها، تدريس اللغة العربية وفروعها، علم الرسم القرآني، وعلم التوقف والابتداء، وعلم السند والتحرير (الذي هو معرفة وتطبيق القرا'ات بطرق فروعا إلى القرآن). بالإضافة، نستكشف علم الابتداء والفواصل في كل القرا'ات وفي اللغة العربية، والعلوم التي تدور حول هذا الفن مثل القرا'ات المنسوبة لكتب التي نقل من خلالها القرآن (التيسير من الداني، تهذيب التيسير من ابن الجزري، السبعة من ابن مجاهد، الكامل من الهذلي...)، وعلوم مساعدة مثل أدب طالب العلم، حلية طالب العلم، التبيان في آداب حملة القرآن، الأربعين حديثا، وغيرها من الكتب الإسلامية التي تفيد طالب العلم الصادق.
              </p>
            </div>
          </section>

          {/* Global Influence */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6" dir="rtl">طبيعة المعهد حول العالم</h2>
            <div className="space-y-4 text-foreground leading-relaxed" dir="rtl">
              <p>
                رغم أننا كنا نظل متجذرا في برمنجهام—وهي مدينة حيوية متعددة الثقافات—إلا أن طلابنا استطاعوا حمل المعرفة لمن أراد متعلمين في كل أنحاء العالم. وقد أنشؤوا مراكز تعليمية في كل أنحاء بريطانيا، وينظمون المجتمعات في نشر الصلاة. وبعض منهم رجع لبلده الأصلي أو ينتقل لأماكن الأخرى، مستمر في نشر الرسالة في أماكن مثل فلسطين والأرض المقدسة، قطر، اليمن، ليبيا، مصر، الصومال، كينيا، ماليزيا، السودان، الجزائر، المغرب، موريتانيا، الولايات المتحدة، كندا، فرنسا، ألمانيا، بلجيكا، هولندا، وغيرها من القائمة الطويلة. كما دوما، الحمد لله.
              </p>
            </div>
          </section>

          {/* The Project */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6" dir="rtl">المشروع</h2>
            <div className="space-y-4 text-foreground leading-relaxed mb-8" dir="rtl">
              <p>
                <strong>إيجاد مقر مستقر، معترف به على المستوى العالم.</strong> فإنشاء مكانة تمكين المعهد من مواصلة تسليم القرآن الكريم وعلومها للأجيال الحالية والقادمة بسلامة وبامتياز.
              </p>
              <p>
                <strong>بناء آلية للاتصال</strong> بطلاب المعهد حول العالم، لصالح من رسالتهم، في نقل رسالة الإسلام والحفاظ على الوحيين.
              </p>
              <p>
                <strong>إيجاد الإمكانيات المالية</strong> الأمثل تقضي حاليا. فقضايا مواصلة الرسالة وتطبيق طرق سياسات الطرق حديثة، معاصرة على نقل وحفظ القرآن الكريم بمساعدة نطاق الرواية الذي أحوزا متاح من العلوم الإسلامية.
              </p>
              <p>
                <strong>توسيع قدرة المعهد</strong> على قبول واستيعاب طلاب جدد. قوائم الانتظار لدينا الحالية، على وجه الخصوص بعض الطرق للباحثين الشباب، من يفوق قدرة المعهد الحالية، في حين يطلب طلاب من خلال الأرض للانضمام لنا، من الممكن محدود لا يمكنه استيعاب هذا الاحتمال. حاليا، يواجه جيدا الكثير من الطلبة المحليين periods انتظار بما يصل إلى أربع أو خمس سنوات ليتم قبولهم على نسبة. بالإضافة، لم يكن الإيماه الكافي على موجات تدريس، من خرائجنا أم من خارج المتحدين.
              </p>
              <p>
                في ضوء هذه التحدي الحالية، ينوي المعهد في تأسيس مركز لا يحب مجتمع كبير والذي قد يخفف بجد الأبواب التي يكافحها. من استغلال تكنولوجيا أفضل وحديث، إلى توسع قدرتنا في قوى أقصى الطالب العدد من المعلمين المؤهلين. فالمركز سيكون ملوكا إما المعهد نفسه أو مجموعة الميرات كإرث لأجيال القادمة من المسلمين. والثمن الباهظ من عقارات الإيجار في مدينة المكتظة بالسكان، كما أن نتنازل رسوم التعليم بطلاب فاستثناء استثنائي أحوال، اخترض الحاجة الصارخة محكم إلى المنشأة وكذلك الأموال اللازمة لهذا الجهد. كما دوما، الله منح النجاح بجميع الأعمال.
              </p>
            </div>
          </section>

          {/* Contact Information */}
          <div className="mt-12 p-6 bg-muted rounded-lg">
            <div className="text-sm space-y-2">
              <div className="text-right font-arabic text-lg mb-4">للاتصال بنا: معهد ابن الجزري لحفظ القرآن وتلقي القراءات وعلومها</div>
              <div className="text-right font-arabic">بمدينة برمنجهام بريطانيا</div>
              <div><strong>Ibn Al Jazari Institute®</strong></div>
              <div dir="rtl">حفظ القرآن تماما مع التجويد</div>
              <div dir="rtl">قراءة وعلم القراءة مركز التعلم</div>
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

export default ArabicDonations;
