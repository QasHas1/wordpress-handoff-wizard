import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";

interface RegistrationProps {
  courseType: string;
  courses?: string[];
}

export const Registration = ({ courseType, courses = [] }: RegistrationProps) => {
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

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input id="firstName" required />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input id="lastName" required />
                </div>
              </div>

              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input id="email" type="email" required />
              </div>

              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" />
              </div>

              <div>
                <Label htmlFor="age">Age</Label>
                <Input id="age" type="number" min="5" max="100" />
              </div>

              {courses.length > 0 && (
                <div>
                  <Label htmlFor="course">Select Course</Label>
                  <Select>
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
                <Select>
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
                    {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Saturday', 'Sunday'].map((day) => (
                      <div key={day} className="flex items-center space-x-2">
                        <Checkbox id={day} />
                        <label htmlFor={day} className="text-sm cursor-pointer">{day}</label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <Label className="text-base">Please choose the preferred time for you to study with us:</Label>
                  <div className="space-y-2">
                    {[
                      { id: 'earlier-morning', label: '(Earlier Morning): 4 am - 6 am' },
                      { id: 'morning', label: '(Morning): 6 am -8 am' },
                      { id: 'late-morning-1', label: '(Late Morning_1): 8 am -10 am' },
                      { id: 'late-morning-2', label: '(Late Morning_2):10 am -12 pm (noon)' },
                      { id: 'early-afternoon-1', label: '(Early afternoon_1): 12 pm - 3pm' },
                      { id: 'late-afternoon-2', label: '(Late afternoon_2): 3pm - 5pm' },
                      { id: 'evening', label: '(Evening): 5 pm to 7 pm' },
                      { id: 'early-evening-5', label: '(Early evening_5): 7 to 8:30 pm' },
                      { id: 'night', label: '(Night): 9 pm to 12:00, then/or: 12:00 to 4 am' }
                    ].map((timeSlot) => (
                      <div key={timeSlot.id} className="flex items-center space-x-2">
                        <Checkbox id={timeSlot.id} />
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
                  placeholder="What do you hope to achieve through this course?"
                  rows={3}
                />
              </div>

              <div>
                <Label htmlFor="questions">Additional Questions or Comments</Label>
                <Textarea 
                  id="questions" 
                  placeholder="Any specific questions or requirements?"
                  rows={3}
                />
              </div>

              <Separator />

              <div className="text-center">
                <Button type="submit" size="lg" className="w-full md:w-auto px-8">
                  Submit Registration
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