import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";

const TenSaghirRegistration = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    document.title = "Ten Saghir Qira'at Registration - Ibn Al-Jazari Institute";
  }, []);

  const [formData, setFormData] = useState({
    firstName: "",
    surname: "",
    telephone: "",
    email: "",
    confirmEmail: "",
    countryCity: "",
    termsAccepted: false,
    // Course codes
    QSA101: false,
    QSA102: false,
    QSA103: false,
    QSA104: false,
    QSA1051: false,
    QSA1052: false,
    QSA106: false,
    QSA107: false,
    QSA108: false,
    QSA109: false,
    QSA10: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (formData.email !== formData.confirmEmail) {
      toast({
        title: "Email mismatch",
        description: "Email and Confirm Email must match",
        variant: "destructive",
      });
      return;
    }

    if (!formData.termsAccepted) {
      toast({
        title: "Terms not accepted",
        description: "Please accept the Terms and Conditions",
        variant: "destructive",
      });
      return;
    }

    // Check if at least one course is selected
    const selectedCourses = Object.keys(formData)
      .filter((key) => key.startsWith("QSA"))
      .filter((key) => formData[key as keyof typeof formData]);

    if (selectedCourses.length === 0) {
      toast({
        title: "No course selected",
        description: "Please select at least one course",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const emailData = {
        firstName: formData.firstName,
        surname: formData.surname,
        telephone: formData.telephone,
        email: formData.email,
        countryCity: formData.countryCity,
        selectedCourses: selectedCourses.join(", "),
        courseType: "Ten Saghir Qira'at Recitations",
      };

      await emailjs.send(
        "service_0wlw351",
        "template_7nu246n",
        emailData,
        "LSo4YgAAwR0YN_rHk"
      );

      toast({
        title: "Registration submitted successfully!",
        description: "We will contact you within 24-48 hours to confirm your registration.",
      });

      // Reset form
      setFormData({
        firstName: "",
        surname: "",
        telephone: "",
        email: "",
        confirmEmail: "",
        countryCity: "",
        termsAccepted: false,
        QSA101: false,
        QSA102: false,
        QSA103: false,
        QSA104: false,
        QSA1051: false,
        QSA1052: false,
        QSA106: false,
        QSA107: false,
        QSA108: false,
        QSA109: false,
        QSA10: false,
      });
    } catch (error) {
      console.error("EmailJS error:", error);
      toast({
        title: "Failed to submit registration",
        description: "Please try again later or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-20">
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <Card className="p-8">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold mb-4">
                    Ten Saghir Qira'at Registration
                  </h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="firstName">Your First Name *</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="surname">Your Surname *</Label>
                    <Input
                      id="surname"
                      name="surname"
                      value={formData.surname}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="telephone">Telephone: *</Label>
                    <Input
                      id="telephone"
                      name="telephone"
                      type="tel"
                      value={formData.telephone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Your Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="confirmEmail">Confirm Email *</Label>
                    <Input
                      id="confirmEmail"
                      name="confirmEmail"
                      type="email"
                      value={formData.confirmEmail}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="countryCity">Country, City:</Label>
                    <Input
                      id="countryCity"
                      name="countryCity"
                      value={formData.countryCity}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="space-y-4 pt-4">
                    <p className="font-medium">Please choose one of the following Levels:</p>
                    
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                      {[
                        { id: "QSA101", label: "QSA101" },
                        { id: "QSA102", label: "QSA102" },
                        { id: "QSA103", label: "QSA103" },
                        { id: "QSA104", label: "QSA104" },
                        { id: "QSA1051", label: "QSA105.1" },
                        { id: "QSA1052", label: "QSA105.2" },
                        { id: "QSA106", label: "QSA106" },
                        { id: "QSA107", label: "QSA107" },
                        { id: "QSA108", label: "QSA108" },
                        { id: "QSA109", label: "QSA109" },
                        { id: "QSA10", label: "QSA10" },
                      ].map((course) => (
                        <div key={course.id} className="flex items-center space-x-2">
                          <Checkbox
                            id={course.id}
                            checked={formData[course.id as keyof typeof formData] as boolean}
                            onCheckedChange={(checked) =>
                              handleCheckboxChange(course.id, checked as boolean)
                            }
                          />
                          <label htmlFor={course.id} className="text-sm cursor-pointer">
                            {course.label}
                          </label>
                        </div>
                      ))}
                    </div>
                    
                    <p className="text-sm text-muted-foreground">
                      These codes are explained on the following page:{" "}
                      <Button
                        type="button"
                        variant="link"
                        className="text-blue-500 hover:text-blue-600 p-0 h-auto"
                        onClick={() => navigate("/courses/qiraat")}
                      >
                        Qiraat
                      </Button>
                    </p>
                  </div>

                  <div className="pt-4">
                    <p className="text-sm mb-2">
                      Please remember to tick the Terms and Conditions*
                    </p>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="termsAccepted"
                        checked={formData.termsAccepted}
                        onCheckedChange={(checked) =>
                          handleCheckboxChange("termsAccepted", checked as boolean)
                        }
                      />
                      <label htmlFor="termsAccepted" className="text-sm cursor-pointer">
                        Check here if you accept{" "}
                        <a
                          href="/terms"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:text-blue-600"
                        >
                          these terms
                        </a>
                        .
                      </label>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button
                      type="submit"
                      size="lg"
                      className="bg-red-500 hover:bg-red-600"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "SENDING..." : "SEND"}
                    </Button>
                  </div>
                </form>
              </Card>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default TenSaghirRegistration;
