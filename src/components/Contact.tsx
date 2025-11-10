import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail, Phone, Clock, Globe, Youtube, Instagram, Twitter, Facebook } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

export const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            message: formData.message
          }
        ]);

      if (error) throw error;

      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error('Error submitting contact form:', error);
      toast({
        title: "Failed to send message",
        description: "Please try again later or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content: "69 Whitmore Road Small Heath, Birmingham, UK",
      isLink: false
    },
    {
      icon: Mail,
      title: "Email",
      content: ["ibnaljazariinstitute@gmail.com", "info@ibnaljazariinstitute.org"],
      isLink: true,
      linkType: "mailto"
    },
    {
      icon: Phone,
      title: "Phone", 
      content: "+44 740 313 5821",
      isLink: true,
      linkType: "tel"
    }
  ];

  const businessHours = [
    { day: "Monday - Thursday", hours: "7:30 am - 7:30 pm" },
    { day: "Friday", hours: "Closed" },
    { day: "Saturday", hours: "8 am - 3:30 pm" },
    { day: "Sunday", hours: "8 am - 4:30 pm" }
  ];

  const socialLinks = [
    { icon: Youtube, url: "https://www.youtube.com/channel/UCzUyAwv-VQhZk4dvwSA8rIg?view_as=subscriber", label: "YouTube" },
    { icon: Instagram, url: "https://www.instagram.com/ibnaljazariinstitute/", label: "Instagram" },
    { icon: Twitter, url: "https://x.com/ibnaljazariinst", label: "Twitter" },
    { icon: Facebook, url: "https://www.facebook.com/IbnAljazariinstitute", label: "Facebook" }
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
              <Card key={index} className="bg-slate-600 border-slate-500 text-white hover:bg-slate-550 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6 text-center">
                  <IconComponent className="h-12 w-12 mx-auto mb-4 text-teal-400" />
                  <h3 className="text-xl font-semibold mb-3">{info.title}</h3>
                  {Array.isArray(info.content) ? (
                    <div className="space-y-1">
                      {info.content.map((item, i) => (
                        info.isLink ? (
                          <a 
                            key={i} 
                            href={`${info.linkType}:${item}`}
                            className="block text-slate-300 hover:text-teal-400 transition-colors duration-300"
                          >
                            {item}
                          </a>
                        ) : (
                          <p key={i} className="text-slate-300">{item}</p>
                        )
                      ))}
                    </div>
                  ) : (
                    info.isLink ? (
                      <a 
                        href={`${info.linkType}:${info.content}`}
                        className="text-slate-300 hover:text-teal-400 transition-colors duration-300"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-slate-300">{info.content}</p>
                    )
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Business Hours and Connect With Us */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Business Hours */}
          <Card className="bg-slate-600 border-slate-500">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Clock className="h-6 w-6 text-teal-400" />
                Business Hours
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {businessHours.map((schedule, index) => (
                <div 
                  key={index} 
                  className="flex justify-between items-center py-2 border-b border-slate-500 last:border-0 hover:bg-slate-550 transition-colors duration-300 px-2 rounded"
                >
                  <span className="text-slate-300 font-medium">{schedule.day}</span>
                  <span className={schedule.hours === "Closed" ? "text-red-400" : "text-teal-400"}>
                    {schedule.hours}
                  </span>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Connect With Us */}
          <Card className="bg-slate-600 border-slate-500">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Globe className="h-6 w-6 text-teal-400" />
                Connect With Us
              </CardTitle>
              <CardDescription className="text-slate-300">
                Follow us on social media for the latest updates and insights
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-4 justify-center">
                {socialLinks.map((social, index) => {
                  const SocialIcon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-slate-700 p-3 rounded-full hover:bg-teal-600 transition-all duration-300 hover:scale-110"
                      aria-label={social.label}
                    >
                      <SocialIcon className="h-6 w-6 text-white" />
                    </a>
                  );
                })}
              </div>
              <div className="border-t border-slate-500 pt-4 space-y-2">
                <div className="flex items-center gap-2 text-slate-300 hover:text-teal-400 transition-colors duration-300">
                  <Mail className="h-4 w-4" />
                  <span className="text-sm">Quick inquiries:</span>
                  <a href="mailto:info@ibnaljazariinstitute.org" className="text-sm hover:underline">
                    info@ibnaljazariinstitute.org
                  </a>
                </div>
                <div className="flex items-center gap-2 text-slate-300 hover:text-teal-400 transition-colors duration-300">
                  <Phone className="h-4 w-4" />
                  <span className="text-sm">Urgent matters:</span>
                  <a href="tel:+447403135821" className="text-sm hover:underline">
                    +44 740 313 5821
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="max-w-2xl mx-auto bg-slate-600 border-slate-500">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-white">Send us a Message</CardTitle>
            <CardDescription className="text-slate-300">
              We'll get back to you as soon as possible
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                  Name
                </label>
                <Input 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="bg-slate-700 border-slate-500 text-white placeholder:text-slate-400"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  Email
                </label>
                <Input 
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="bg-slate-700 border-slate-500 text-white placeholder:text-slate-400"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Message
                </label>
                <Textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5} 
                  placeholder="Tell us more about your inquiry..."
                  className="bg-slate-700 border-slate-500 text-white placeholder:text-slate-400"
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-teal-600 hover:bg-teal-700"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
