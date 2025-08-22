import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Events = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Header Section */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-2 border-b-4 border-primary inline-block pb-1">
              Events
            </h1>
          </div>

          {/* Main Updates Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6 border-b-2 border-primary/50 inline-block pb-2">
              QIRAAT, QIRAAT SCIENCES + TAJWEED, HIFTH + ARABIC LESSONS - UPDATES
            </h2>
            
            {/* Institute Logo and Announcement */}
            <div className="bg-card rounded-lg p-8 mb-8 text-center">
              <div className="mb-6">
                <div className="w-48 h-32 mx-auto bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                  IBN AL JAZARI INSTITUTE
                </div>
              </div>
              
              <div className="text-center space-y-4">
                <p className="text-lg font-medium text-foreground" dir="rtl">
                  معهد ابن الجزري - لحفظ القرآن وتلقي القراءات وعلومها - رسالة وهمسة
                </p>
                
                <div className="bg-muted/50 rounded-lg p-6 my-6">
                  <p className="font-semibold text-foreground mb-4">
                    ASSALAMU ALAYKUM. MESSAGE FROM, IbnAljazariInstitute® Birmingham UK.
                  </p>
                  
                  <div className="space-y-3 text-muted-foreground leading-relaxed">
                    <p>The Institute will be relocating due to circumstances beyond our control.</p>
                    <p>We are actively searching for suitable new premises and welcome any suggestions for potential locations from our community.</p>
                    <p>Please be assured that during this transition period, all activities and lessons will continue to operate as scheduled at our current location until further notice.</p>
                  </div>
                  
                  <div className="mt-6 text-sm text-muted-foreground">
                    <p>Thank you for your understanding.</p>
                    <p>Jazakumullahu khayran. Ibn Al Jazari. Administration. Secretary</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Arabic Studies Section */}
            <div className="bg-card rounded-lg p-8 mb-8">
              <div className="text-center mb-6">
                <p className="text-lg text-foreground mb-4" dir="rtl">
                  من قراءات وشرح الكتب المستفادة بالمعهد، قراءة وشرح كتب الأئمة، خاصة الكتب التي ترتبط بكتاب الله تعالى
                </p>
                <p className="text-lg text-foreground mb-4" dir="rtl">
                  لطالبات المعهد فقط، حاليا القراءة المستفيدة مع الشرح المستفيض لكتاب
                </p>
                <p className="text-xl font-semibold text-foreground mb-4" dir="rtl">
                  التبيان في آداب حملة القرآن
                </p>
                <p className="text-lg text-foreground" dir="rtl">
                  والمؤلف، هو الإمام الكبير أبو زكريا محيي الدين يحيى بن شرف النووي (ت ٦٧٦ هـ)
                </p>
              </div>
              
              <div className="text-center space-y-2 text-muted-foreground mb-6">
                <p className="font-semibold">Al-Tibyan fi Adab Hamalat al-Qur'an</p>
                <p>by the great imam Abu Zakariya Muhyi al-Din Yahya ibn Sharaf al-Nawawi (d. 676 AH)</p>
              </div>
              
              <div className="bg-muted/30 rounded-lg p-4 mb-6">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Among the readings and explanations of the books studied in our Institute, the readings and explanations of the books of the imams, especially those related to the Book of Allah Almighty.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                  For female students of the institute only, currently the readings with Isnaad, with a detailed explanation of the book:
                </p>
              </div>
              
              <div className="text-center p-4 bg-muted/20 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  Students of knowledge and sheikhs should be careful to memorise, record what has been missed, clarify what has been heard, record the explanations, and then act in accordance with the knowledge... May Allah - SWT - reward you with goodness.
                </p>
              </div>
            </div>

            {/* Institute Information */}
            <div className="bg-card rounded-lg p-8 mb-8">
              <div className="text-center mb-6">
                <p className="text-lg text-foreground mb-4" dir="rtl">
                  معهد ابن الجزري - لحفظ القرآن وتلقي القراءات وعلومها - رسالة وهمسة
                </p>
                <p className="text-lg text-foreground mb-4" dir="rtl">
                  السلام عليكم ورحمة الله وبركاته
                </p>
                <p className="text-muted-foreground mb-4" dir="rtl">
                  خلال الصيف قد يتغيب بعض الأساتذة، فقبل التوجه للمعهد، يرجاء تأكد مع معلمك أو معلمتك إن كان سيكون بالمعهد أم لا
                </p>
              </div>
              
              <div className="text-center space-y-2 text-muted-foreground">
                <p><strong>IBN AL JAZARI INSTITUTE</strong> - Qiraat/ Hifth/ Arabic Departments, at Ibn Al Jazari Institute</p>
                <p>The Institute will remain open this summer, but, some teachers may be absent. So please, before going to the Institute, check with your teacher whether he or she will be at the institute or not.</p>
              </div>
            </div>

            {/* Books Section */}
            <div className="bg-card rounded-lg p-8 mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
                The following books was published by Ibn Al Jazari Institute scholars (Scholars of Qiraa'at)
              </h3>
              <p className="text-center text-muted-foreground mb-8">
                If you have been told to get this book, or to purchase it, please follow the link below, register, then order. The book will be sent from the USA to your home address.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center space-y-2">
                  <h4 className="font-semibold text-foreground">Tajweed: The Perfection Before Certification</h4>
                  <p className="text-sm text-muted-foreground">(Paperback) - Book 1/1: The Beneficial Introduction to Tajweed and Qiraat.</p>
                  <a href="#" className="text-primary hover:underline">Here.</a>
                </div>
                
                <div className="text-center space-y-2">
                  <h4 className="font-semibold text-foreground">Tajweed: The Perfection Before Certification</h4>
                  <p className="text-sm text-muted-foreground">(PaperBack) - Book 2/1: Articulation points And Characteristics of letters:</p>
                  <a href="#" className="text-primary hover:underline">here</a>
                </div>
                
                <div className="text-center space-y-2">
                  <h4 className="font-semibold text-foreground">Tajweed: The Perfection Before Certification</h4>
                  <p className="text-sm text-muted-foreground">(Paperback) - Book 2: Clarification of the rulings of the Tajweed and how they are scripted in the Qur'an.</p>
                  <a href="#" className="text-primary hover:underline">Here</a>
                </div>
              </div>
              
              <div className="text-center mb-6">
                <p className="text-muted-foreground mb-2">TAJWEED Slides, 500 Tajweed SLIDES just to make</p>
                <p className="text-muted-foreground">Tajweed very easy:</p>
                <a href="#" className="text-primary hover:underline">here.</a>
              </div>
              
              <div className="text-center p-4 bg-muted/20 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  If you are a student in our Institute, and want us to purchase our scholars books for you, please register your interest (by Email, WhatsApp, SMS Message, via Teachers, via Secretary...) we will do the purchase for you, to collect from our office, without extra fees.
                </p>
              </div>
            </div>

            {/* Mus'haf Riwayat Section */}
            <div className="bg-card rounded-lg p-8 mb-8">
              <div className="text-center mb-6">
                <p className="text-muted-foreground mb-6" dir="rtl">
                  نعم الله تعالى نحدث المصاحف التالية، لتكون عونا للقارئ والقارئة، ليتمكن عنا أن يحققها مع ومن سائما في إنجاز بعن قراءاتها وتراءتها، من إجراءاتها أوجراءاتها، للإجازة، قراءة، رواية، وواية. نواية من الطرق العشر الكبرى وسبعة من
                </p>
                <p className="text-muted-foreground mb-6">
                  With the help of Allah Almighty, we provide the following Qur'an Massahif to our students, to help them in accomplishing the Riwayats they want to read. They are for all the ten major Qiraat, from all the ways possible. The Ten Nafi'i Riwaat, Twelve of the major Qiraat and six of the Ten Nafi'i Riwayat (Al Ash As-Sagheer).
                </p>
                <p className="text-sm text-muted-foreground mb-8">
                  Vast amounts knowledge accompany each page to show the proof of each reading from the scientific books of "Imaams of qiraat", so that the student or their teacher will find with them what is necessary to accomplish their tasks. All graduated students receiving our training will be more than confident in transmitting the Qiraat to next generation. Praise be to Allah
                </p>
              </div>
              
              <div className="grid gap-3 text-sm">
                <div className="text-center">
                  <span className="text-blue-600 font-medium">Mus'haf Riwayat Qalun-All Ways</span>
                  <p className="text-xs text-muted-foreground mt-1" dir="rtl">مصحف المهرة برواية قالون من كل طرقها المعتبرة، طرق الطيبة</p>
                </div>
                
                <div className="text-center">
                  <span className="text-blue-600 font-medium">Mus'haf Riwayat Al-Azraq-All Ways</span>
                  <p className="text-xs text-muted-foreground mt-1" dir="rtl">مصحف المهرة برواية الأزرق من كل طرقها المعتبرة، طرق الطيبة</p>
                </div>
                
                <div className="text-center">
                  <span className="text-blue-600 font-medium">Mus'haf Riwayat Al-Asbahani-All Ways</span>
                  <p className="text-xs text-muted-foreground mt-1" dir="rtl">مصحف المهرة برواية الإصبهاني من كل طرقها المعتبرة، طرق الطيبة</p>
                </div>
                
                <div className="text-center">
                  <span className="text-blue-600 font-medium">Mus'haf Qira'at Ibn Katheer, Al Bazzi Wa Qunbul, All Ways</span>
                  <p className="text-xs text-muted-foreground mt-1" dir="rtl">مصحف المهرة بقراءة ابن كثير من رواياتهه البزي وقنبل، من كل طرقها المعتبرة، طرق الطيبة</p>
                </div>
                
                <div className="text-center">
                  <span className="text-blue-600 font-medium">Mus'haf Qira'at Abu-'Amr, Ad-Duri and Susi, All Ways</span>
                  <p className="text-xs text-muted-foreground mt-1" dir="rtl">مصحف المهرة بقراءة أبي عمرو من رواياته الدوري والسوسي، من كل طرقها المعتبرة، طرق الطيبة</p>
                </div>
                
                <div className="text-center">
                  <span className="text-blue-600 font-medium">Mus'haf Qira'at Ibn 'Aamir, Hishaam and Ibn Thakwaan, All Ways</span>
                  <p className="text-xs text-muted-foreground mt-1" dir="rtl">مصحف المهرة بقراءة ابن عامر من رواياته هشام وابن ذكوان، من كل طرقها المعتبرة، طرق الطيبة</p>
                </div>
                
                <div className="text-center">
                  <span className="text-blue-600 font-medium">Mus'haf Qira'at Aasim, the two riwayats together Shu'bah and Hafs, All Ways</span>
                  <p className="text-xs text-muted-foreground mt-1" dir="rtl">مصحف المهرة بقراءة عاصم من رواياته شعبة وحفص، من كل طرقها المعتبرة، طرق الطيبة</p>
                </div>
                
                <div className="text-center">
                  <span className="text-blue-600 font-medium">Mus'haf Qira'at Hamza, two riwayats together, All Ways</span>
                  <p className="text-xs text-muted-foreground mt-1" dir="rtl">مصحف المهرة بقراءة حمزة من رواياته خلف وخلاد، من كل طرقها المعتبرة، طرق الطيبة</p>
                </div>
                
                <div className="text-center">
                  <span className="text-blue-600 font-medium">Mus'haf Qira'at Al Kisaa'i, two riwayats together, All Ways</span>
                  <p className="text-xs text-muted-foreground mt-1" dir="rtl">مصحف المهرة بقراءة الكسائي من رواياته أبو الحارث والدوري، من كل طرقها المعتبرة، طرق الطيبة</p>
                </div>
                
                <div className="text-center">
                  <span className="text-blue-600 font-medium">Mus'haf Qira'at Abu Ja'far, two riwayats together, All Ways</span>
                  <p className="text-xs text-muted-foreground mt-1" dir="rtl">مصحف المهرة بقراءة أبي جعفر من رواياته ابن وردان وابن جمّاز، من كل طرقها المعتبرة، طرق الطيبة</p>
                </div>
                
                <div className="text-center">
                  <span className="text-blue-600 font-medium">Mus'haf Qira'at Ya'qub, two riwayats together, All Ways</span>
                  <p className="text-xs text-muted-foreground mt-1" dir="rtl">مصحف المهرة بقراءة يعقوب من رواياته رويس وروح، من كل طرقها المعتبرة، طرق الطيبة</p>
                </div>
                
                <div className="text-center">
                  <span className="text-blue-600 font-medium">Mus'haf Riwayat Khalaf Al A'ashir, two riwayats together All Ways</span>
                  <p className="text-xs text-muted-foreground mt-1" dir="rtl">مصحف المهرة بقراءة خلف العاشر أو خلف في اختياره، من رواياتي الوراق وإدريس، من كل طرقها المعتبرة، طرق الطيبة</p>
                </div>
                
                <div className="text-center border-t pt-4 mt-4">
                  <span className="text-green-600 font-medium">Mus'haf Riwayat Al-Azraq Nafi'ia ways</span>
                  <p className="text-xs text-muted-foreground mt-1" dir="rtl">مصحف المهرة برواية الأزرق من الطرق العشر النافعية</p>
                </div>
                
                <div className="text-center">
                  <span className="text-green-600 font-medium">Mus'haf Riwayat Abdussamad Nafi'ia ways</span>
                  <p className="text-xs text-muted-foreground mt-1" dir="rtl">مصحف المهرة برواية عبد الصمد المختني من الطرق العشر النافعية</p>
                </div>
                
                <div className="text-center">
                  <span className="text-green-600 font-medium">Mus'haf Riwayat Al-Asbahani Nafi'ia ways</span>
                  <p className="text-xs text-muted-foreground mt-1" dir="rtl">مصحف المهرة برواية الإصبهاني من الطرق العشر النافعية</p>
                </div>
                
                <div className="text-center">
                  <span className="text-green-600 font-medium">Mus'haf Riwayat Qalun Nafi'ia ways All the ways possible, Abu Nasheet, Al Jammal, Al Wasiti, Al Qaadhi</span>
                  <p className="text-xs text-muted-foreground mt-1" dir="rtl">مصحف المهرة برواية قالون من الطرق العشر النافعية: أبو نشيط والجمال والواسطي والقاضي إسماعيل</p>
                </div>
                
                <div className="text-center">
                  <span className="text-green-600 font-medium">Mus'haf Riwayat ISMAIL Al Ansaari, Riwayat Ibn Abdus wa Al Mufassir, from Nafi'ia ways</span>
                  <p className="text-xs text-muted-foreground mt-1" dir="rtl">مصحف المهرة برواية إسماعيل بن جعفر الأنصاري من رواياتي ابن عبدوس والمفسر من الطرق العشر النافعية</p>
                </div>
                
                <div className="text-center">
                  <span className="text-green-600 font-medium">Mus'haf Riwayat IS'HAQ Al MUSAYIABI, riwayat Ibn Al Musayiabi wa Ibn Sa'adaan, from Nafi'ia ways</span>
                  <p className="text-xs text-muted-foreground mt-1" dir="rtl">مصحف المهرة برواية إسحاق بن محمد المسيبي من الطرق العشر النافعية</p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-card rounded-lg p-8 mt-8 text-center">
              <div className="space-y-4">
                <p className="text-lg font-medium text-foreground">
                  We are here to help preserving and protecting Al Qur'an Al Kareem and to read as the Prophet SAWS read it.
                </p>
                <p className="text-lg font-medium text-foreground">
                  We are here to learn and practice Al Qiraat Sciences at any level possible.
                </p>
                
                <div className="mt-8 space-y-2 text-muted-foreground">
                  <p>Djazkillahu khayran</p>
                  <p>Ibn Al Jazari Institute</p>
                  <p>Administration</p>
                  <p>Secretary</p>
                </div>
                
                <div className="mt-6 space-y-2 text-sm text-muted-foreground">
                  <p><strong>Mobile/Telephone Number:</strong> (+44) 07403135821</p>
                  <p><strong>Address:</strong> 69, Whitmore Road, Birmingham,</p>
                  <p>B10 0NR, West Midlands, UK (United Kingdom)</p>
                  <p><strong>Email:</strong> ibnaljazariinstitute@gmail.com</p>
                </div>
                
                <div className="mt-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-green-500 rounded-full text-white mb-2">
                    <span className="text-xl">📱</span>
                  </div>
                  <p className="text-primary">Join our WhatsApp for any Updates</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Events;