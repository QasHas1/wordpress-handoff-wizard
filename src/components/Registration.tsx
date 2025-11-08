import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

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

              <div>
                <Label htmlFor="availability">Preferred Class Times</Label>
                <Textarea 
                  id="availability" 
                  placeholder="Please specify your preferred days and times for classes"
                  rows={3}
                />
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