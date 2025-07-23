
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail, Phone } from "lucide-react";

export const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content: "69 Whitmore Road Small Heath, Birmingham, UK"
    },
    {
      icon: Mail,
      title: "Email",
      content: ["ibnaljazariinstitute@gmail.com", "info@ibnaljazariinstitute.org"]
    },
    {
      icon: Phone,
      title: "Phone", 
      content: "+44 740 313 5821"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-700 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Get in touch with us for more information about our programs and courses
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => {
            const IconComponent = info.icon;
            return (
              <Card key={index} className="bg-slate-600 border-slate-500 text-white hover:bg-slate-550 transition-colors duration-300">
                <CardContent className="p-6 text-center">
                  <IconComponent className="h-12 w-12 mx-auto mb-4 text-teal-400" />
                  <h3 className="text-xl font-semibold mb-3">{info.title}</h3>
                  {Array.isArray(info.content) ? (
                    <div className="space-y-1">
                      {info.content.map((item, i) => (
                        <p key={i} className="text-slate-300">{item}</p>
                      ))}
                    </div>
                  ) : (
                    <p className="text-slate-300">{info.content}</p>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="max-w-2xl mx-auto bg-slate-600 border-slate-500">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-white">Send us a Message</CardTitle>
            <CardDescription className="text-slate-300">
              We'll get back to you as soon as possible
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-slate-300 mb-2">
                    First Name
                  </label>
                  <Input 
                    id="firstName" 
                    placeholder="Your first name"
                    className="bg-slate-700 border-slate-500 text-white placeholder:text-slate-400"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-slate-300 mb-2">
                    Last Name
                  </label>
                  <Input 
                    id="lastName" 
                    placeholder="Your last name"
                    className="bg-slate-700 border-slate-500 text-white placeholder:text-slate-400"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  Email
                </label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="your.email@example.com"
                  className="bg-slate-700 border-slate-500 text-white placeholder:text-slate-400"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                  Subject
                </label>
                <Input 
                  id="subject" 
                  placeholder="What is this about?"
                  className="bg-slate-700 border-slate-500 text-white placeholder:text-slate-400"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Message
                </label>
                <Textarea 
                  id="message" 
                  rows={5} 
                  placeholder="Tell us more about your inquiry..."
                  className="bg-slate-700 border-slate-500 text-white placeholder:text-slate-400"
                />
              </div>
              
              <Button type="submit" size="lg" className="w-full bg-teal-600 hover:bg-teal-700">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
