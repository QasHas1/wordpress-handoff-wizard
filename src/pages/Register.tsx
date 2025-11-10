import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "To Register - Ibn Al-Jazari Institute";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-20">
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <Card className="p-8 md:p-12">
                <h1 className="text-4xl font-bold mb-8 border-b-2 border-primary pb-4">
                  To Register
                </h1>

                <p className="text-lg mb-8">
                  To register for our lessons, please fill either of the forms below:
                </p>

                <div className="space-y-4">
                  <div className="flex items-baseline gap-2">
                    <span>Applying for <strong>Hifdh</strong> Al Qur'an:</span>
                    <Button
                      variant="link"
                      className="text-blue-500 hover:text-blue-600 p-0 h-auto"
                      onClick={() => navigate("/tahfedh/hifthregister")}
                    >
                      form
                    </Button>
                  </div>

                  <div className="flex items-baseline gap-2">
                    <span>Applying for <strong>Tajweed</strong> Lessons:</span>
                    <Button
                      variant="link"
                      className="text-blue-500 hover:text-blue-600 p-0 h-auto"
                      onClick={() => navigate("/courses/tajweed/tajweed-registration")}
                    >
                      form
                    </Button>
                  </div>

                  <div className="flex items-baseline gap-2">
                    <span>Applying for <strong>Tajweed Poem</strong> Lessons:</span>
                    <Button
                      variant="link"
                      className="text-blue-500 hover:text-blue-600 p-0 h-auto"
                      onClick={() => navigate("/courses/tajweed/tajweed-registration")}
                    >
                      form
                    </Button>
                  </div>

                  <div className="flex items-baseline gap-2">
                    <span>Applying for <strong>Qira'at</strong> Courses:</span>
                    <Button
                      variant="link"
                      className="text-blue-500 hover:text-blue-600 p-0 h-auto"
                      onClick={() => navigate("/qiraat/minor-qiraat-registration")}
                    >
                      form
                    </Button>
                  </div>

                  <div className="flex items-baseline gap-2">
                    <span>Applying for <strong>Arabic</strong> Lessons:</span>
                    <Button
                      variant="link"
                      className="text-blue-500 hover:text-blue-600 p-0 h-auto"
                      onClick={() => navigate("/arabic/arabic-registration")}
                    >
                      form
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
