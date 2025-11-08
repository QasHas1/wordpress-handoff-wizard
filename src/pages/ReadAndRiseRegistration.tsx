import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const ReadAndRiseRegistration = () => {
  useEffect(() => {
    document.title = "Read-and-Rise Registration - Ibn Al-Jazari Institute";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-20 pb-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl text-center">Read-and-Rise</CardTitle>
              <p className="text-center text-muted-foreground mt-2">
                Ibn Al Jazari Institute™ Registration form:"Read and Rise" Program©
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Name Fields */}
              <div className="space-y-4">
                <div>
                  <Label htmlFor="firstName">Your First Name *</Label>
                  <Input id="firstName" type="text" required />
                </div>
                <div>
                  <Label htmlFor="surname">Your Surname *</Label>
                  <Input id="surname" type="text" required />
                </div>
              </div>

              {/* Gender Selection */}
              <div className="space-y-2">
                <Label>Male or Female:</Label>
                <RadioGroup defaultValue="male">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="male" id="male" />
                    <Label htmlFor="male">Male</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="female" id="female" />
                    <Label htmlFor="female">Female</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="border-t pt-4">
                <p className="text-center text-sm text-muted-foreground">= = = = = =</p>
              </div>

              {/* Age Group */}
              <div className="space-y-2">
                <Label>Age Group? please state:</Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="child" />
                    <Label htmlFor="child">Child</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="teenager" />
                    <Label htmlFor="teenager">Teenager</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="adult" />
                    <Label htmlFor="adult">Adult</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="senior" />
                    <Label htmlFor="senior">Senior</Label>
                  </div>
                </div>
              </div>

              <div className="border-t pt-4">
                <p className="text-center text-sm text-muted-foreground">= = = = = =</p>
              </div>

              {/* Contact Information */}
              <div className="space-y-4">
                <div>
                  <Label htmlFor="telephone">Telephone: *</Label>
                  <Input id="telephone" type="tel" required />
                </div>
                <div>
                  <Label htmlFor="country">Country?:</Label>
                  <Input id="country" type="text" />
                </div>
              </div>

              {/* Email Fields */}
              <div className="space-y-4">
                <div>
                  <Label htmlFor="email">Your Email *</Label>
                  <Input id="email" type="email" required />
                </div>
                <div>
                  <Label htmlFor="confirmEmail">Confirm Email *</Label>
                  <Input id="confirmEmail" type="email" required />
                </div>
              </div>

              {/* Time Zone Info */}
              <div className="bg-muted/50 p-4 rounded-md">
                <p className="text-sm">
                  Ibn Al Jazari Institute is working in the time zone: UTC + 0,
                </p>
              </div>

              {/* Availability Selection */}
              <div className="space-y-4">
                <Label>For all courses, please state the day and times you are available to study with us, (Multiple selections are possible):</Label>
                
                <div>
                  <Label className="font-semibold mb-2 block">Days:</Label>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="monday" />
                      <Label htmlFor="monday">Monday</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="tuesday" />
                      <Label htmlFor="tuesday">Tuesday</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="wednesday" />
                      <Label htmlFor="wednesday">Wednesday</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="thursday" />
                      <Label htmlFor="thursday">Thursday</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="saturday" />
                      <Label htmlFor="saturday">Saturday</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="sunday" />
                      <Label htmlFor="sunday">Sunday</Label>
                    </div>
                  </div>
                </div>

                <div>
                  <Label className="font-semibold mb-2 block">Please choose the preferred time for you to study with us:</Label>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="earlyMorning" />
                      <Label htmlFor="earlyMorning">(Earlier Morning): 4 am - 6 am</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="morning" />
                      <Label htmlFor="morning">(Morning): 6 am -8 am</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="lateMorning1" />
                      <Label htmlFor="lateMorning1">(Late Morning_1): 8 am -10 am</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="lateMorning2" />
                      <Label htmlFor="lateMorning2">(Late Morning_2):10 am -12 pm (noon)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="earlyAfternoon" />
                      <Label htmlFor="earlyAfternoon">(Early afternoon_1): 12 pm - 3pm</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="lateAfternoon" />
                      <Label htmlFor="lateAfternoon">(Late afternoon_2): 3pm - 5pm</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="evening" />
                      <Label htmlFor="evening">(Evening): 5 pm to 7 pm</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="earlyEvening" />
                      <Label htmlFor="earlyEvening">(Early evening_5): 7 to 8:30 pm</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="night" />
                      <Label htmlFor="night">(Night): 9 pm to 12:00, then/or: 12:00 to 4 am</Label>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp Info */}
              <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-md space-y-2">
                <p className="text-sm">
                  <em>If any teachers are available during your chosen time, we will contact you.</em>
                </p>
                <p className="text-sm">
                  <em>Otherwise, we will keep you updated with any new time slot availabilities.</em>
                </p>
                <p className="text-sm">
                  We specifically use WhatsApp to contact students, so please add our number and allow us to contact you through this app.
                </p>
                <p className="text-sm font-semibold">
                  Our number is: (+44) 07403135821 (00447403135821 from outside Uk, but from UK it is: 07403135821)
                </p>
              </div>

              {/* Level Selection for Tajweed */}
              <div className="space-y-2">
                <Label>For Tajweed, Please state your level:</Label>
                <RadioGroup defaultValue="beginner">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="beginner" id="tajweedBeginner" />
                    <Label htmlFor="tajweedBeginner">Beginner</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="intermediate" id="tajweedIntermediate" />
                    <Label htmlFor="tajweedIntermediate">Intermediate</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="higher" id="tajweedHigher" />
                    <Label htmlFor="tajweedHigher">Higher level</Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Level Selection for Arabic */}
              <div className="space-y-2">
                <Label>For Arabic Language, Please state your level:</Label>
                <RadioGroup defaultValue="beginner">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="beginner" id="arabicBeginner" />
                    <Label htmlFor="arabicBeginner">Beginner</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="intermediate" id="arabicIntermediate" />
                    <Label htmlFor="arabicIntermediate">Intermediate</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="higher" id="arabicHigher" />
                    <Label htmlFor="arabicHigher">Higher level</Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Lesson Preference */}
              <div className="space-y-2">
                <Label>I prefer lessons:</Label>
                <RadioGroup defaultValue="onsite">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="onsite" id="onsite" />
                    <Label htmlFor="onsite">On-Site</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="online" id="online" />
                    <Label htmlFor="online">Online</Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Fees */}
              <div className="space-y-2">
                <Label>Lessons' Fees:</Label>
                <RadioGroup defaultValue="yes">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="payYes" />
                    <Label htmlFor="payYes">Yes I will pay for sure (In shaa' Allah)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="payNo" />
                    <Label htmlFor="payNo">Sorry, I cannot pay</Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Comments */}
              <div>
                <Label htmlFor="comments">Any other comments:</Label>
                <Textarea id="comments" rows={6} />
              </div>

              {/* Terms and Conditions */}
              <div className="space-y-2">
                <Label>Please remember to tick the Terms and Conditions*</Label>
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" required />
                  <Label htmlFor="terms">
                    Check here if you accept{" "}
                    <a href="#" className="text-blue-500 hover:underline">
                      these terms
                    </a>
                    .
                  </Label>
                </div>
              </div>

              {/* Submit Button */}
              <Button className="w-full bg-red-500 hover:bg-red-600" size="lg">
                SEND
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ReadAndRiseRegistration;
