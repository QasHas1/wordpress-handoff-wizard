import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Calendar, MapPin, Clock } from "lucide-react";

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Annual Quran Recitation Competition",
      date: "2024-03-15",
      time: "2:00 PM - 6:00 PM",
      location: "Main Institute Hall",
      description: "Join us for our annual Quran recitation competition featuring students from all levels. Prizes will be awarded for excellence in Tajweed and memorization.",
      category: "Competition"
    },
    {
      id: 2,
      title: "Islamic Studies Workshop",
      date: "2024-03-22",
      time: "10:00 AM - 4:00 PM",
      location: "Conference Room A",
      description: "A comprehensive workshop covering various aspects of Islamic studies, including Hadith, Fiqh, and Islamic history.",
      category: "Workshop"
    },
    {
      id: 3,
      title: "Community Iftar Gathering",
      date: "2024-04-05",
      time: "6:30 PM - 9:00 PM",
      location: "Institute Courtyard",
      description: "Join our community for a blessed Iftar gathering during Ramadan. All families welcome.",
      category: "Community"
    }
  ];

  const pastEvents = [
    {
      id: 4,
      title: "International Al Quran Memorisation Assembly 2019",
      date: "2019-07-20",
      description: "Our student Mohamed Abdi won first place in the international Quran competition in Malaysia.",
      videoId: "TJfwBZMHHbs"
    },
    {
      id: 5,
      title: "Student Graduation Ceremony 2023",
      date: "2023-12-15",
      description: "Celebration of our students who completed their Hifth and received Ijazaat in various Qira'at.",
      videoId: "klNuAXYC3CQ"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Events</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Stay updated with our upcoming events and view highlights from past gatherings
            </p>
          </div>

          {/* Upcoming Events */}
          <section className="mb-16">
            <h2 className="text-3xl font-semibold text-foreground mb-8 text-center">
              Upcoming Events
            </h2>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="bg-card rounded-lg shadow-lg p-6 border border-border">
                  <div className="mb-4">
                    <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      {event.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {event.title}
                  </h3>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      {new Date(event.date).toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </div>
                    
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Clock className="w-4 h-4 mr-2" />
                      {event.time}
                    </div>
                    
                    <div className="flex items-center text-muted-foreground text-sm">
                      <MapPin className="w-4 h-4 mr-2" />
                      {event.location}
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-sm">
                    {event.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Past Events */}
          <section>
            <h2 className="text-3xl font-semibold text-foreground mb-8 text-center">
              Past Events
            </h2>
            
            <div className="grid gap-8">
              {pastEvents.map((event) => (
                <div key={event.id} className="bg-card rounded-lg shadow-lg p-6">
                  <div className="grid md:grid-cols-2 gap-6 items-center">
                    <div>
                      <h3 className="text-2xl font-semibold text-foreground mb-2">
                        {event.title}
                      </h3>
                      
                      <div className="flex items-center text-muted-foreground text-sm mb-4">
                        <Calendar className="w-4 h-4 mr-2" />
                        {new Date(event.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </div>
                      
                      <p className="text-muted-foreground">
                        {event.description}
                      </p>
                    </div>
                    
                    {event.videoId && (
                      <div className="aspect-video">
                        <iframe
                          src={`https://www.youtube.com/embed/${event.videoId}`}
                          title={event.title}
                          className="w-full h-full rounded-lg"
                          allowFullScreen
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Events;