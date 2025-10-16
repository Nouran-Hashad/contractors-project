import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Building2, 
  Users, 
  FileText, 
  MessageSquare, 
  Star,
  Search,
  Shield,
  TrendingUp,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

const Home = () => {
  const features = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "نشر المشاريع",
      description: "انشر مشروعك بسهولة واستقبل عروض من أفضل المقاولين"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "مقاولون محترفون",
      description: "وصول سريع لآلاف المقاولين المتخصصين في جميع المجالات"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "تقييمات موثوقة",
      description: "نظام تقييم شفاف لضمان جودة العمل"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "تواصل مباشر",
      description: "راسل المقاولين مباشرة وناقش تفاصيل مشروعك"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "حماية وأمان",
      description: "نضمن حقوق الأطراف جميعاً"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "نمو مستمر",
      description: "انضم لآلاف المشاريع الناجحة"
    }
  ];

  const stats = [
    { number: "5000+", label: "مشروع منجز" },
    { number: "2000+", label: "مقاول محترف" },
    { number: "98%", label: "رضا العملاء" },
    { number: "24/7", label: "دعم فني" }
  ];

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      {/* Header/Navigation */}
      <nav className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Building2 className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                منصة المقاولات
              </span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <Link to="/" className="text-foreground hover:text-primary transition-colors">
                الرئيسية
              </Link>
              <Link to="/projects" className="text-foreground hover:text-primary transition-colors">
                المشاريع
              </Link>
              <Link to="/contractors" className="text-foreground hover:text-primary transition-colors">
                المقاولون
              </Link>
              <Link to="/pricing" className="text-foreground hover:text-primary transition-colors">
                الأسعار
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <Link to="/auth">
                <Button variant="ghost">تسجيل الدخول</Button>
              </Link>
              <Link to="/auth">
                <Button variant="default">ابدأ الآن</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                اربط مشروعك
                <br />
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  بأفضل المقاولين
                </span>
              </h1>
              <p className="text-xl text-muted-foreground">
                منصة شاملة تجمع العملاء والمقاولين المحترفين في مكان واحد. 
                نشر مشروعك واستقبل عروضاً من مقاولين متخصصين خلال دقائق.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/auth?type=client">
                  <Button variant="hero" size="lg" className="w-full sm:w-auto">
                    انشر مشروعك الآن
                    <ArrowRight className="mr-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/auth?type=contractor">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    انضم كمقاول
                  </Button>
                </Link>
              </div>
              <div className="flex items-center gap-8 pt-4">
                {stats.slice(0, 2).map((stat, index) => (
                  <div key={index}>
                    <div className="text-3xl font-bold text-primary">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative hidden md:block">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-square bg-gradient-hero opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Building2 className="w-48 h-48 text-primary opacity-30" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              لماذا تختار منصتنا؟
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              نوفر لك كل ما تحتاجه لإنجاز مشروعك بنجاح
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all border-2 hover:border-primary/50">
                <div className="text-primary mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              كيف تعمل المنصة؟
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            {/* For Clients */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-primary mb-6">للعملاء</h3>
              {[
                "أنشئ حساباً مجانياً",
                "انشر مشروعك بالتفاصيل",
                "استقبل عروضاً من المقاولين",
                "اختر المقاول الأنسب",
                "تواصل وأكمل المشروع",
                "قيّم تجربتك"
              ].map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <div className="pt-2">
                    <p className="text-lg">{step}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* For Contractors */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-secondary mb-6">للمقاولين</h3>
              {[
                "سجل كمقاول محترف",
                "اكمل ملفك الشخصي",
                "جرب المنصة مجاناً لمدة 3 أيام",
                "تصفح المشاريع المتاحة",
                "قدم عروضك على المشاريع",
                "احصل على تقييمات إيجابية"
              ].map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <div className="pt-2">
                    <p className="text-lg">{step}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="p-12 text-center bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-primary/20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              جاهز للبدء؟
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              انضم الآن لآلاف العملاء والمقاولين الذين يثقون بمنصتنا
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/auth?type=client">
                <Button variant="hero" size="lg">
                  ابدأ كعميل
                </Button>
              </Link>
              <Link to="/auth?type=contractor">
                <Button variant="secondary" size="lg">
                  ابدأ كمقاول
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Building2 className="w-6 h-6" />
                <span className="text-xl font-bold">منصة المقاولات</span>
              </div>
              <p className="text-sm opacity-80">
                منصة شاملة لربط العملاء بالمقاولين المحترفين
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">روابط سريعة</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><Link to="/about" className="hover:opacity-100">من نحن</Link></li>
                <li><Link to="/projects" className="hover:opacity-100">المشاريع</Link></li>
                <li><Link to="/contractors" className="hover:opacity-100">المقاولون</Link></li>
                <li><Link to="/pricing" className="hover:opacity-100">الأسعار</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">الدعم</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><Link to="/help" className="hover:opacity-100">مركز المساعدة</Link></li>
                <li><Link to="/contact" className="hover:opacity-100">اتصل بنا</Link></li>
                <li><Link to="/terms" className="hover:opacity-100">الشروط والأحكام</Link></li>
                <li><Link to="/privacy" className="hover:opacity-100">سياسة الخصوصية</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">تواصل معنا</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>info@contractors-platform.com</li>
                <li>+966 XX XXX XXXX</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-sm opacity-80">
            <p>© 2024 منصة المقاولات. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
