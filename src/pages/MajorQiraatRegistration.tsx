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

const MajorQiraatRegistration = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    document.title = "Major Qira'at Registration - Ibn Al-Jazari Institute";
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
    QIRMQ1: false,
    QIRM11: false,
    QIRM121: false,
    QIRM122: false,
    QIRMQ2: false,
    QIRM21: false,
    QIRM22: false,
    QIRMQ3: false,
    QIRM31: false,
    QIRM32: false,
    QIRMQ4: false,
    QIRM41: false,
    QIRM42: false,
    QIRMQ5: false,
    QIRM51: false,
    QIRM52: false,
    QIRMQ6: false,
    QIRM61: false,
    QIRM62: false,
    QIRMQ7: false,
    QIRM71: false,
    QIRM72: false,
    QIRMQ8: false,
    QIRM81: false,
    QIRM82: false,
    QIRMQ9: false,
    QIRM91: false,
    QIRM92: false,
    QIRMQ10: false,
    QIRM101: false,
    QIRM102: false,
    // Grouped courses
    QMGR28: false,
    QMGSAM: false,
    QM1128: false,
    QMGR18: false,
    QMGR710: false,
    QMGRKU: false,
    QMGRA7: false,
    QMGALL: false,
    QMG1212: false,
    QIRMGR1: false,
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
      .filter((key) => key.startsWith("QIRM") || key.startsWith("QM"))
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
        courseType: "Major Qira'at Lessons",
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
        QIRMQ1: false,
        QIRM11: false,
        QIRM121: false,
        QIRM122: false,
        QIRMQ2: false,
        QIRM21: false,
        QIRM22: false,
        QIRMQ3: false,
        QIRM31: false,
        QIRM32: false,
        QIRMQ4: false,
        QIRM41: false,
        QIRM42: false,
        QIRMQ5: false,
        QIRM51: false,
        QIRM52: false,
        QIRMQ6: false,
        QIRM61: false,
        QIRM62: false,
        QIRMQ7: false,
        QIRM71: false,
        QIRM72: false,
        QIRMQ8: false,
        QIRM81: false,
        QIRM82: false,
        QIRMQ9: false,
        QIRM91: false,
        QIRM92: false,
        QIRMQ10: false,
        QIRM101: false,
        QIRM102: false,
        QMGR28: false,
        QMGSAM: false,
        QM1128: false,
        QMGR18: false,
        QMGR710: false,
        QMGRKU: false,
        QMGRA7: false,
        QMGALL: false,
        QMG1212: false,
        QIRMGR1: false,
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
                  <h2 className="text-3xl font-bold mb-4">Major Qiraat Registration</h2>
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
                        { id: "QIRMQ1", label: "QIRMQ1" },
                        { id: "QIRM11", label: "QIRM1.1" },
                        { id: "QIRM121", label: "QIRM121" },
                        { id: "QIRM122", label: "QIRM122" },
                        { id: "QIRMQ2", label: "QIRMQ2" },
                        { id: "QIRM21", label: "QIRM2.1" },
                        { id: "QIRM22", label: "QIRM2.2" },
                        { id: "QIRMQ3", label: "QIRMQ3" },
                        { id: "QIRM31", label: "QIRM3.1" },
                        { id: "QIRM32", label: "QIRM3.2" },
                        { id: "QIRMQ4", label: "QIRMQ4" },
                        { id: "QIRM41", label: "QIRM4.1" },
                        { id: "QIRM42", label: "QIRM4.2" },
                        { id: "QIRMQ5", label: "QIRMQ5" },
                        { id: "QIRM51", label: "QIRM5.1" },
                        { id: "QIRM52", label: "QIRM5.2" },
                        { id: "QIRMQ6", label: "QIRMQ6" },
                        { id: "QIRM61", label: "QIRM6.1" },
                        { id: "QIRM62", label: "QIRM6.2" },
                        { id: "QIRMQ7", label: "QIRMQ7" },
                        { id: "QIRM71", label: "QIRM7.1" },
                        { id: "QIRM72", label: "QIRM7.2" },
                        { id: "QIRMQ8", label: "QIRMQ8" },
                        { id: "QIRM81", label: "QIRM8.1" },
                        { id: "QIRM82", label: "QIRM8.2" },
                        { id: "QIRMQ9", label: "QIRMQ9" },
                        { id: "QIRM91", label: "QIRM9.1" },
                        { id: "QIRM92", label: "QIRM9.2" },
                        { id: "QIRMQ10", label: "QIRMQ10" },
                        { id: "QIRM101", label: "QIRM101" },
                        { id: "QIRM102", label: "QIRM102" },
                        { id: "QMGR28", label: "QMGR2.8" },
                        { id: "QMGSAM", label: "QMGSAM" },
                        { id: "QM1128", label: "QM1.1.28" },
                        { id: "QMGR18", label: "QMGR1.8" },
                        { id: "QMGR710", label: "QMGR710" },
                        { id: "QMGRKU", label: "QMGRKU" },
                        { id: "QMGRA7", label: "QMGRA7" },
                        { id: "QMGALL", label: "QMGALL" },
                        { id: "QMG1212", label: "QMG121.2" },
                        { id: "QIRMGR1", label: "QIRMGR1" },
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

export default MajorQiraatRegistration;
