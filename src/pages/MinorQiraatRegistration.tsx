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

const MinorQiraatRegistration = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    document.title = "Minor Qira'at Registration - Ibn Al-Jazari Institute";
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
    QIRSQ1: false,
    QIRS11: false,
    QIRS12: false,
    QIRSQ2: false,
    QIRS21: false,
    QIRS22: false,
    QIRSQ3: false,
    QIRS31: false,
    QIRS32: false,
    QIRSQ4: false,
    QIRS41: false,
    QIRS42: false,
    QIRSQ5: false,
    QIRS51: false,
    QIRS52: false,
    QIRSQ6: false,
    QIRS61: false,
    QIRS62: false,
    QIRSQ7: false,
    QIRS71: false,
    QIRS72: false,
    QIRSQ8: false,
    QIRS81: false,
    QIRS82: false,
    QIRSQ9: false,
    QIRS91: false,
    QIRS92: false,
    QIRSQ10: false,
    QIRS101: false,
    QIRS102: false,
    // Grouped courses
    QSGR28: false,
    QS1128: false,
    QSGR18: false,
    QSGR710: false,
    QSGRKU: false,
    QSGRA7: false,
    QSGALL: false,
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
      .filter((key) => key.startsWith("QIRS") || key.startsWith("QS") || key.startsWith("QSGR"))
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
        courseType: "Minor Qira'at Lessons",
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
        QIRSQ1: false,
        QIRS11: false,
        QIRS12: false,
        QIRSQ2: false,
        QIRS21: false,
        QIRS22: false,
        QIRSQ3: false,
        QIRS31: false,
        QIRS32: false,
        QIRSQ4: false,
        QIRS41: false,
        QIRS42: false,
        QIRSQ5: false,
        QIRS51: false,
        QIRS52: false,
        QIRSQ6: false,
        QIRS61: false,
        QIRS62: false,
        QIRSQ7: false,
        QIRS71: false,
        QIRS72: false,
        QIRSQ8: false,
        QIRS81: false,
        QIRS82: false,
        QIRSQ9: false,
        QIRS91: false,
        QIRS92: false,
        QIRSQ10: false,
        QIRS101: false,
        QIRS102: false,
        QSGR28: false,
        QS1128: false,
        QSGR18: false,
        QSGR710: false,
        QSGRKU: false,
        QSGRA7: false,
        QSGALL: false,
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
                  <h2 className="text-3xl font-bold mb-4">Minor Qiraat Registration</h2>
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
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {[
                        { id: "QIRSQ1", label: "QIRSQ1" },
                        { id: "QIRS11", label: "QIRS1.1" },
                        { id: "QIRS12", label: "QIRS1.2" },
                        { id: "QIRSQ2", label: "QIRSQ2" },
                        { id: "QIRS21", label: "QIRS2.1" },
                        { id: "QIRS22", label: "QIRS2.2" },
                        { id: "QIRSQ3", label: "QIRSQ3" },
                        { id: "QIRS31", label: "QIRS3.1" },
                        { id: "QIRS32", label: "QIRS3.2" },
                        { id: "QIRSQ4", label: "QIRSQ4" },
                        { id: "QIRS41", label: "QIRS4.1" },
                        { id: "QIRS42", label: "QIRS4.2" },
                        { id: "QIRSQ5", label: "QIRSQ5" },
                        { id: "QIRS51", label: "QIRS5.1" },
                        { id: "QIRS52", label: "QIRS5.2" },
                        { id: "QIRSQ6", label: "QIRSQ6" },
                        { id: "QIRS61", label: "QIRS6.1" },
                        { id: "QIRS62", label: "QIRS6.2" },
                        { id: "QIRSQ7", label: "QIRSQ7" },
                        { id: "QIRS71", label: "QIRS7.1" },
                        { id: "QIRS72", label: "QIRS7.2" },
                        { id: "QIRSQ8", label: "QIRSQ8" },
                        { id: "QIRS81", label: "QIRS8.1" },
                        { id: "QIRS82", label: "QIRS8.2" },
                        { id: "QIRSQ9", label: "QIRSQ9" },
                        { id: "QIRS91", label: "QIRS9.1" },
                        { id: "QIRS92", label: "QIRS9.2" },
                        { id: "QIRSQ10", label: "QIRSQ10" },
                        { id: "QIRS101", label: "QIRS101" },
                        { id: "QIRS102", label: "QIRS102" },
                        { id: "QSGR28", label: "QSGR2.8" },
                        { id: "QS1128", label: "QS1.1.28" },
                        { id: "QSGR18", label: "QSGR1.8" },
                        { id: "QSGR710", label: "QSGR710" },
                        { id: "QSGRKU", label: "QSGRKU" },
                        { id: "QSGRA7", label: "QSGRA7" },
                        { id: "QSGALL", label: "QSGALL" },
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

export default MinorQiraatRegistration;
