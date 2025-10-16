import { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building2, User, Mail, Lock, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Auth = () => {
  const [searchParams] = useSearchParams();
  const userType = searchParams.get("type") || "client";
  const { toast } = useToast();
  
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    phone: "",
    confirmPassword: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isLogin && formData.password !== formData.confirmPassword) {
      toast({
        title: "خطأ",
        description: "كلمات المرور غير متطابقة",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: isLogin ? "تم تسجيل الدخول" : "تم إنشاء الحساب",
      description: "جاري توجيهك إلى لوحة التحكم..."
    });

    // In production, this would navigate to dashboard
    setTimeout(() => {
      window.location.href = userType === "contractor" ? "/contractor/dashboard" : "/client/dashboard";
    }, 1500);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4" dir="rtl">
      <Card className="w-full max-w-md p-8 shadow-2xl">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-6">
            <Building2 className="w-8 h-8 text-primary" />
            <span className="text-2xl font-bold">منصة المقاولات</span>
          </Link>
          
          <Tabs value={userType} className="w-full mb-6">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="client" asChild>
                <Link to="/auth?type=client">عميل</Link>
              </TabsTrigger>
              <TabsTrigger value="contractor" asChild>
                <Link to="/auth?type=contractor">مقاول</Link>
              </TabsTrigger>
            </TabsList>
          </Tabs>

          <h2 className="text-3xl font-bold mb-2">
            {isLogin ? "مرحباً بعودتك" : "انضم إلينا"}
          </h2>
          <p className="text-muted-foreground">
            {isLogin 
              ? `سجل دخولك ${userType === "contractor" ? "كمقاول" : "كعميل"}`
              : `أنشئ حساباً جديداً ${userType === "contractor" ? "كمقاول" : "كعميل"}`
            }
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <>
              <div className="space-y-2">
                <Label htmlFor="name">الاسم الكامل</Label>
                <div className="relative">
                  <User className="absolute right-3 top-3 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="name"
                    type="text"
                    placeholder="أدخل اسمك الكامل"
                    className="pr-10"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">رقم الهاتف</Label>
                <div className="relative">
                  <Phone className="absolute right-3 top-3 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="05XXXXXXXX"
                    className="pr-10"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    required
                  />
                </div>
              </div>
            </>
          )}

          <div className="space-y-2">
            <Label htmlFor="email">البريد الإلكتروني</Label>
            <div className="relative">
              <Mail className="absolute right-3 top-3 h-5 w-5 text-muted-foreground" />
              <Input
                id="email"
                type="email"
                placeholder="example@email.com"
                className="pr-10"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">كلمة المرور</Label>
            <div className="relative">
              <Lock className="absolute right-3 top-3 h-5 w-5 text-muted-foreground" />
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                className="pr-10"
                value={formData.password}
                onChange={(e) => handleInputChange("password", e.target.value)}
                required
              />
            </div>
          </div>

          {!isLogin && (
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">تأكيد كلمة المرور</Label>
              <div className="relative">
                <Lock className="absolute right-3 top-3 h-5 w-5 text-muted-foreground" />
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="••••••••"
                  className="pr-10"
                  value={formData.confirmPassword}
                  onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                  required
                />
              </div>
            </div>
          )}

          {isLogin && (
            <div className="text-left">
              <Link to="/forgot-password" className="text-sm text-primary hover:underline">
                نسيت كلمة المرور؟
              </Link>
            </div>
          )}

          <Button type="submit" className="w-full" size="lg" variant="hero">
            {isLogin ? "تسجيل الدخول" : "إنشاء الحساب"}
          </Button>

          {!isLogin && userType === "contractor" && (
            <p className="text-xs text-center text-muted-foreground">
              بالتسجيل، ستحصل على تجربة مجانية لمدة 3 أيام
            </p>
          )}

          <div className="text-center pt-4">
            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="text-sm text-muted-foreground hover:text-primary"
            >
              {isLogin ? "ليس لديك حساب؟ " : "لديك حساب بالفعل؟ "}
              <span className="font-semibold">
                {isLogin ? "سجل الآن" : "سجل دخولك"}
              </span>
            </button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default Auth;
