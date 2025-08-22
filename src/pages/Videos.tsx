import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Videos = () => {
  const videos = [
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
      title: "Student Achievement Video 3",
      description: "Another showcase of our students' achievements and educational progress at Ibn Al Jazari Institute."
    },
    {
      id: "KP6MYOIonmM",
      title: "Student Achievement Video 4",
      description: "Continued documentation of our students' journey in Quran studies and Islamic education."
    },
    {
      id: "Sog610YuqBE",
      title: "Student Achievement Video 5",
      description: "More examples of the excellence achieved by our students in their Islamic studies."
    },
    {
      id: "H_z4QOH4PI0",
      title: "Student Achievement Video 6",
      description: "Further evidence of the high standards maintained at Ibn Al Jazari Institute."
    },
    {
      id: "gdpB51V8yso",
      title: "Student Achievement Video 7",
      description: "Additional footage showcasing our educational methodology and student outcomes."
    },
    {
      id: "nfJMZX-zYg8",
      title: "Student Achievement Video 8",
      description: "More demonstrations of our students' proficiency in Quran recitation and memorization."
    },
    {
      id: "Fysb5NQb6Gs",
      title: "Student Achievement Video 9",
      description: "Continuing our documentation of student success stories and achievements."
    },
    {
      id: "kIpT0gU1iTA",
      title: "Student Achievement Video 10",
      description: "Further examples of the quality education provided at our institute."
    },
    {
      id: "1TDvGTqGjiE",
      title: "Student Achievement Video 11",
      description: "More showcases of our students' dedication and accomplishments in Islamic studies."
    },
    {
      id: "ebEzc98qpYE",
      title: "Student Achievement Video 12",
      description: "Additional evidence of the comprehensive education offered at Ibn Al Jazari Institute."
    },
    {
      id: "IynsPn7Iq0o",
      title: "Student Achievement Video 13",
      description: "More documentation of our students' journey in Quran memorization and Islamic scholarship."
    },
    {
      id: "ubFewpqjOXw",
      title: "Student Achievement Video 14",
      description: "Further examples of the academic excellence achieved by our students."
    },
    {
      id: "5NIv6r7diGk",
      title: "Student Achievement Video 15",
      description: "Continued showcase of our educational programs and student achievements."
    },
    {
      id: "A6zoqKEkcv8",
      title: "Student Achievement Video 16",
      description: "Final addition to our collection of student success stories and educational highlights."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Videos</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Here are some videos related to our activity and achievements of our students
            </p>
          </div>

          <div className="grid gap-8 md:gap-12">
            {videos.map((video, index) => (
              <div key={video.id} className="bg-card rounded-lg shadow-lg p-6">
                <div className="aspect-video mb-6">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    className="w-full h-full rounded-lg"
                    allowFullScreen
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  />
                </div>
                
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-foreground">
                    {video.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {video.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
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