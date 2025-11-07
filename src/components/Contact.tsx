import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail, Phone } from "lucide-react";
import { useState } from "react";
import emailjs from '@emailjs/browser';
import { useToast } from "@/components/ui/use-toast";

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
      await emailjs.send(
        'service_0wlw351',
        'template_21cs8qp',
        {
          name: formData.name,
          email: formData.email,
          message: formData.message
        },
        'LSo4YgAAwR0YN_rHk'
      );

      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
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
