import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { ShoppingCart } from "lucide-react";
import React, { useState } from "react";

function Login() {
  const [forgotPasswordEmail, setForgetPasswordEmail] = useState("");
  const [showForgotPassowrd, setShowForgotPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    pass: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormLogin = (e) => {
    e.preventDefault();
    console.log("Login", formData);
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    console.log("Forget Password Email", forgotPasswordEmail);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-primary/5 to-primary/10 flex items-center justify-center p-4 relative ">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <ShoppingCart className="h-5 w-5 text-white" />
            </div>
            <span className="text-2xl font-bold tracking-tight">
              POS System Pro
            </span>
          </div>
          <h1 className="font-bold tracking-tight text-xl">
            {showForgotPassowrd ? "Reset Passoword" : "Welcome Back"}
            <p className="text-sm font-light">
              {showForgotPassowrd
                ? "Enter your email to reset instruction"
                : "Sign in to your account to continue"}
            </p>
          </h1>
        </div>
        {!showForgotPassowrd && (
          <div className="bg-card rounded-2xl shadow-2xl p-8">
            <form onSubmit={handleFormLogin} className="space-y-6">
              <div className="space-y-2">
                <Label>Email Address</Label>
                <Input
                  onChange={handleInputChange}
                  placeholder="Enter Your Email"
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                />
              </div>

              <div className="space-y-2">
                <Label>Password</Label>
                <Input
                  onChange={handleInputChange}
                  placeholder="Enter Your Password"
                  type="password"
                  id="pass"
                  name="pass"
                  value={formData.pass}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Checkbox
                    className={
                      "h-4 w-4 text-primary focus:ring-primary border-gray-300"
                    }
                    name="remeber-me"
                    type={"checkbox"}
                  />
                  <Label className={"px-2"}>Remember Me</Label>
                </div>

                <Button
                  type="button"
                  onClick={() => setShowForgotPassword(true)}
                  variant={"ghost"}
                >
                  Forget Password
                </Button>
              </div>

              <div>
                <Button className="w-full py-4 mt-2" type="submit">
                  Login
                </Button>
              </div>
            </form>
            <Separator />
            <div className="mt-4 bg-muted p-4 rounded-lg">
              <p className="text-sm text-muted-foreground text-center">
                <strong>Demo Account</strong>
                <br />
                Email: <span className="font-medium">sayansil@gmail.com</span>
                <br />
                Password: <span className="font-medium">abcd@123</span>
              </p>
            </div>
          </div>
        )}

        {showForgotPassowrd && (
          <div className="bg-card rounded-2xl shadow-2xl p-8">
            <form onSubmit={handleForgotPassword} className="space-y-6">
              <div className="space-y-2">
                <Label>Email Address</Label>
                <Input
                  onChange={(e) => setForgetPasswordEmail(e.target.value)}
                  placeholder="Enter Your Email"
                  type="email"
                  id="forgetPassEmail"
                  name="forgetPassEmail"
                  value={forgotPasswordEmail}
                />
              </div>

              <div className="flex justify-between gap-2 ">
                <Button
                  type="button"
                  onClick={() => setShowForgotPassword(false)}
                  className="py-4 w-1/2"
                >
                  Back to Login
                </Button>

                <Button
                  className="py-4 w-1/2 "
                  variant={"outline"}
                  type="submit"
                >
                  Send Reset Link
                </Button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
