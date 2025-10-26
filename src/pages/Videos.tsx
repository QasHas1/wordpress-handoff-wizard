import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Videos = () => {
  const studentAchievements = [
    {
      id: "klNuAXYC3CQ",
      title: "Fajr Prayer Mohammad Jamac",
      description: "Muhammad Abdullah Jami' (Jamac) finished the whole Qur'an Al Kareem by heart in our institute and received an Idjazah in Qira'at Aasim on 29/04/2017. Here he is leading in a local Masjid Masha'allah."
    },
    {
      id: "TJfwBZMHHbs",
      title: "International Al Quran Memorisation Assembly 2019",
      description: "The first winner of the international Quran competition in Malaysia – 2019, Mohamed Abdi, Masha'allah, was one of our students that remained with us for a long period of time."
    },
    {
      id: "lmVtilwfMXw",
      title: "International Al Quran Memorisation Assembly 2019",
      description: "Again this is during the International Al Quran Memorisation Assembly 2019."
    },
    {
      id: "KP6MYOIonmM",
      title: "Student Recitation",
      description: "Our student Mohamed Fareh gave a beautiful recitation here:"
    },
    {
      id: "Sog610YuqBE",
      title: "Student Teaching Journey",
      description: "Here is another student who has taken the path of teaching and has given lessons in a local Masjid, may Allah SWT reward us all, Aameen."
    },
    {
      id: "n3jK69U1ezE",
      title: "Sheikh Imam Abdul Rahman",
      description: "In the following video, Sheikh Imam Abdul Rahman is leading in a local Masjid, he is one of our first students to accomplish an Idjazaat in multiple Qira'at, Mashaa'allah SWT:"
    }
  ];

  const tajweedVideos = [
    {
      id: "H_z4QOH4PI0",
      title: "Tajweed Lesson 1",
      description: "Tajweed lessons with Sheikh Abu Hamzah Al Maghribi."
    },
    {
      id: "gdpB51V8yso",
      title: "Tajweed Lesson 2",
      description: "Tajweed lessons with Sheikh Abu Hamzah Al Maghribi."
    },
    {
      id: "nfJMZX-zYg8",
      title: "Tajweed Lesson 3",
      description: "Tajweed lessons with Sheikh Abu Hamzah Al Maghribi."
    },
    {
      id: "Fysb5NQb6Gs",
      title: "Tajweed Lesson 4",
      description: "Tajweed lessons with Sheikh Abu Hamzah Al Maghribi."
    },
    {
      id: "kIpT0gU1iTA",
      title: "Tajweed Lesson 5",
      description: "Tajweed lessons with Sheikh Abu Hamzah Al Maghribi."
    },
    {
      id: "1TDvGTqGjiE",
      title: "Tajweed Lesson 6",
      description: "Tajweed lessons with Sheikh Abu Hamzah Al Maghribi."
    },
    {
      id: "ebEzc98qpYE",
      title: "Tajweed Lesson 7",
      description: "Tajweed lessons with Sheikh Abu Hamzah Al Maghribi."
    },
    {
      id: "IynsPn7Iq0o",
      title: "Tajweed Lesson 8",
      description: "Tajweed lessons with Sheikh Abu Hamzah Al Maghribi."
    },
    {
      id: "ubFewpqjOXw",
      title: "Tajweed Lesson 9",
      description: "Tajweed lessons with Sheikh Abu Hamzah Al Maghribi."
    },
    {
      id: "5NIv6r7diGk",
      title: "Tajweed Lesson 10",
      description: "Tajweed lessons with Sheikh Abu Hamzah Al Maghribi."
    },
    {
      id: "A6zoqKEkcv8",
      title: "Tajweed Lesson 11",
      description: "Tajweed lessons with Sheikh Abu Hamzah Al Maghribi."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Achievements</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Here are some videos related to our activity and achievements of our students
            </p>
          </div>

          {/* Student Achievements Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Video and Student Achievements</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {studentAchievements.map((video) => (
                <div key={video.id} className="bg-card rounded-lg shadow-lg p-4">
                  <div className="aspect-video mb-4">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.title}
                      className="w-full h-full rounded-lg"
                      allowFullScreen
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">
                      {video.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {video.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Tajweed Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Tajweed with Sheikh Abu Hamzah Al Maghribi</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tajweedVideos.map((video) => (
                <div key={video.id} className="bg-card rounded-lg shadow-lg p-4">
                  <div className="aspect-video mb-4">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.title}
                      className="w-full h-full rounded-lg"
                      allowFullScreen
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">
                      {video.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {video.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="text-center">
            <div className="bg-muted/50 rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                More Videos Coming Soon
              </h3>
              <p className="text-muted-foreground">
                We are continuously updating our video library with more content showcasing 
                our students' achievements and educational activities.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Videos;