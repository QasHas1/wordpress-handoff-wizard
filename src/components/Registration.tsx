import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import emailjs from '@emailjs/browser';
import { useToast } from "@/hooks/use-toast";

interface RegistrationProps {
  courseType: string;
  courses?: string[];
}

export const Registration = ({ courseType, courses = [] }: RegistrationProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    age: "",
    course: "",
    experience: "",
    goals: "",
    questions: "",
    // Days
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    saturday: false,
    sunday: false,
    // Time slots
    earlierMorning: false,
    morning: false,
    lateMorning1: false,
    lateMorning2: false,
    earlyAfternoon1: false,
    lateAfternoon2: false,
    evening: false,
    earlyEvening5: false,
    night: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      [name]: checked
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Format days into a list
      const selectedDays = [];
      if (formData.monday) selectedDays.push("Monday");
      if (formData.tuesday) selectedDays.push("Tuesday");
      if (formData.wednesday) selectedDays.push("Wednesday");
      if (formData.thursday) selectedDays.push("Thursday");
      if (formData.saturday) selectedDays.push("Saturday");
      if (formData.sunday) selectedDays.push("Sunday");
      const daysList = selectedDays.length > 0 ? selectedDays.join(", ") : "None selected";

      // Format time slots into a list
      const selectedTimes = [];
      if (formData.earlierMorning) selectedTimes.push("Earlier Morning (4 am - 6 am)");
      if (formData.morning) selectedTimes.push("Morning (6 am - 8 am)");
      if (formData.lateMorning1) selectedTimes.push("Late Morning_1 (8 am - 10 am)");
      if (formData.lateMorning2) selectedTimes.push("Late Morning_2 (10 am - 12 pm)");
      if (formData.earlyAfternoon1) selectedTimes.push("Early Afternoon_1 (12 pm - 3 pm)");
      if (formData.lateAfternoon2) selectedTimes.push("Late Afternoon_2 (3 pm - 5 pm)");
      if (formData.evening) selectedTimes.push("Evening (5 pm - 7 pm)");
      if (formData.earlyEvening5) selectedTimes.push("Early Evening_5 (7 pm - 8:30 pm)");
      if (formData.night) selectedTimes.push("Night (9 pm - 12:00 am, or 12:00 am - 4 am)");
      const timesList = selectedTimes.length > 0 ? selectedTimes.join("\n• ") : "None selected";

      // Prepare data for EmailJS - normalized to use same variable names as all forms
      const emailData = {
        fullName: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phone: formData.phone || "Not provided",
        age: formData.age || "Not provided",
        countryCity: "Not provided",
        courseType: courseType,
        course: formData.course || "Not selected",
        experience: formData.experience || "Not specified",
        daysList: daysList,
        timesList: timesList,
        goals: formData.goals || "Not provided",
        questions: formData.questions || "None",
      };

      await emailjs.send(
        'service_0wlw351',
        'template_7nu246n',
        emailData,
        'LSo4YgAAwR0YN_rHk'
      );

      toast({
        title: "Registration submitted successfully!",
        description: "We will contact you within 24-48 hours to confirm your registration.",
      });

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        age: "",
        course: "",
        experience: "",
        goals: "",
        questions: "",
        monday: false,
        tuesday: false,
        wednesday: false,
        thursday: false,
        saturday: false,
        sunday: false,
        earlierMorning: false,
        morning: false,
        lateMorning1: false,
        lateMorning2: false,
        earlyAfternoon1: false,
        lateAfternoon2: false,
        evening: false,
        earlyEvening5: false,
        night: false,
      });
    } catch (error) {
      console.error('EmailJS error:', error);
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
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Register for {courseType}</h2>
              <p className="text-muted-foreground">
                Fill out the form below to register for our {courseType.toLowerCase()} program
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input 
                    id="firstName" 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input 
                    id="lastName" 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email">Email Address *</Label>
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
                <Label htmlFor="phone">Phone Number</Label>
                <Input 
                  id="phone" 
                  name="phone"
                  type="tel" 
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <Label htmlFor="age">Age</Label>
                <Input 
                  id="age" 
                  name="age"
                  type="number" 
                  min="5" 
                  max="100" 
                  value={formData.age}
                  onChange={handleInputChange}
                />
              </div>

              {courses.length > 0 && (
                <div>
                  <Label htmlFor="course">Select Course</Label>
                  <Select value={formData.course} onValueChange={(value) => handleSelectChange("course", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose a course" />
                    </SelectTrigger>
                    <SelectContent>
                      {courses.map((course, index) => (
                        <SelectItem key={index} value={course}>
                          {course}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}

              <div>
                <Label htmlFor="experience">Previous Experience</Label>
                <Select value={formData.experience} onValueChange={(value) => handleSelectChange("experience", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beginner">Beginner</SelectItem>
                    <SelectItem value="intermediate">Intermediate</SelectItem>
                    <SelectItem value="advanced">Advanced</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium mb-2">Ibn Al Jazari Institute is working in the time zone: UTC + 0,</p>
                  <p className="text-sm mb-4">For all courses, please state the day and times you are available to study with us, (Multiple selections are possible):</p>
                </div>
                
                <div className="space-y-3">
                  <Label className="text-base">Days:</Label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {[
                      { key: 'monday', label: 'Monday' },
                      { key: 'tuesday', label: 'Tuesday' },
                      { key: 'wednesday', label: 'Wednesday' },
                      { key: 'thursday', label: 'Thursday' },
                      { key: 'saturday', label: 'Saturday' },
                      { key: 'sunday', label: 'Sunday' }
                    ].map((day) => (
                      <div key={day.key} className="flex items-center space-x-2">
                        <Checkbox 
                          id={day.key} 
                          checked={formData[day.key as keyof typeof formData] as boolean}
                          onCheckedChange={(checked) => handleCheckboxChange(day.key, checked as boolean)}
                        />
                        <label htmlFor={day.key} className="text-sm cursor-pointer">{day.label}</label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <Label className="text-base">Please choose the preferred time for you to study with us:</Label>
                  <div className="space-y-2">
                    {[
                      { id: 'earlierMorning', label: '(Earlier Morning): 4 am - 6 am' },
                      { id: 'morning', label: '(Morning): 6 am -8 am' },
                      { id: 'lateMorning1', label: '(Late Morning_1): 8 am -10 am' },
                      { id: 'lateMorning2', label: '(Late Morning_2):10 am -12 pm (noon)' },
                      { id: 'earlyAfternoon1', label: '(Early afternoon_1): 12 pm - 3pm' },
                      { id: 'lateAfternoon2', label: '(Late afternoon_2): 3pm - 5pm' },
                      { id: 'evening', label: '(Evening): 5 pm to 7 pm' },
                      { id: 'earlyEvening5', label: '(Early evening_5): 7 to 8:30 pm' },
                      { id: 'night', label: '(Night): 9 pm to 12:00, then/or: 12:00 to 4 am' }
                    ].map((timeSlot) => (
                      <div key={timeSlot.id} className="flex items-center space-x-2">
                        <Checkbox 
                          id={timeSlot.id} 
                          checked={formData[timeSlot.id as keyof typeof formData] as boolean}
                          onCheckedChange={(checked) => handleCheckboxChange(timeSlot.id, checked as boolean)}
                        />
                        <label htmlFor={timeSlot.id} className="text-sm cursor-pointer">{timeSlot.label}</label>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="text-sm text-muted-foreground italic">
                  If any teachers are available during your chosen time, we will contact you. 
                  Otherwise, we will keep you updated with any new time slot availabilities.
                </p>
              </div>

              <div>
                <Label htmlFor="goals">Learning Goals</Label>
                <Textarea 
                  id="goals" 
                  name="goals"
                  value={formData.goals}
                  onChange={handleInputChange}
                  placeholder="What do you hope to achieve through this course?"
                  rows={3}
                />
              </div>

              <div>
                <Label htmlFor="questions">Additional Questions or Comments</Label>
                <Textarea 
                  id="questions" 
                  name="questions"
                  value={formData.questions}
                  onChange={handleInputChange}
                  placeholder="Any specific questions or requirements?"
                  rows={3}
                />
              </div>

              <Separator />

              <div className="text-center">
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full md:w-auto px-8"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Registration"}
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  We will contact you within 24-48 hours to confirm your registration
                </p>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};