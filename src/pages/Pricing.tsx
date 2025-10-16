import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Building2, Check, Star, Zap } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "شهري",
      price: "299",
      period: "شهرياً",
      description: "مناسب للمقاولين المبتدئين",
      features: [
        "تصفح المشاريع بدون حدود",
        "تقديم عروض غير محدودة",
        "الوصول لبيانات العملاء",
        "رسائل مباشرة مع العملاء",
        "إضافة معرض أعمال",
        "الظهور في نتائج البحث",
        "دعم فني عبر البريد"
      ],
      popular: false,
      color: "primary"
    },
    {
      name: "سنوي",
      price: "2,990",
      period: "سنوياً",
      savings: "وفر 598 ريال",
      description: "الأفضل قيمة للمقاولين المحترفين",
      features: [
        "جميع مميزات الخطة الشهرية",
        "أولوية في الظهور بنتائج البحث",
        "شارة \"مقاول محترف\"",
        "تحليلات متقدمة",
        "إشعارات فورية للمشاريع المناسبة",
        "دعم فني ذو أولوية",
        "شهرين مجاناً"
      ],
      popular: true,
      color: "secondary"
    }
  ];

  const trialFeatures = [
    "3 أيام تجربة مجانية كاملة",
    "بدون بطاقة ائتمانية",
    "إلغاء في أي وقت",
    "وصول كامل لجميع المميزات"
  ];

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      {/* Header */}
      <nav className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <Building2 className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold">منصة المقاولات</span>
            </Link>
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

      {/* Hero */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            خطط الاشتراك للمقاولين
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
            اختر الخطة المناسبة لك وابدأ في تلقي مشاريع جديدة
          </p>
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
            <Zap className="w-5 h-5 text-yellow-300" />
            <span className="font-semibold">تجربة مجانية لمدة 3 أيام</span>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`p-8 relative ${
                  plan.popular
                    ? "border-2 border-primary shadow-2xl scale-105"
                    : "border shadow-lg"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 right-1/2 translate-x-1/2">
                    <div className="bg-gradient-primary text-white px-6 py-2 rounded-full font-semibold flex items-center gap-2">
                      <Star className="w-4 h-4 fill-white" />
                      الأكثر شيوعاً
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm mb-6">
                    {plan.description}
                  </p>
                  <div className="mb-4">
                    <span className="text-5xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground mr-2">ريال</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{plan.period}</p>
                  {plan.savings && (
                    <div className="mt-2">
                      <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                        {plan.savings}
                      </span>
                    </div>
                  )}
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        plan.popular ? "text-primary" : "text-secondary"
                      }`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link to="/auth?type=contractor" className="block">
                  <Button
                    variant={plan.popular ? "hero" : "default"}
                    size="lg"
                    className="w-full"
                  >
                    ابدأ التجربة المجانية
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trial Info */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <Card className="p-12 max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <Zap className="w-16 h-16 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">
                جرب المنصة مجاناً لمدة 3 أيام
              </h2>
              <p className="text-xl text-muted-foreground">
                اختبر جميع المميزات قبل الاشتراك
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {trialFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-lg">{feature}</span>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link to="/auth?type=contractor">
                <Button variant="hero" size="lg">
                  ابدأ التجربة المجانية الآن
                </Button>
              </Link>
              <p className="text-sm text-muted-foreground mt-4">
                ستبدأ التجربة فور تفعيل حسابك
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            الأسئلة الشائعة
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "هل يمكنني إلغاء الاشتراك في أي وقت؟",
                a: "نعم، يمكنك إلغاء اشتراكك في أي وقت من لوحة التحكم. لن يتم تحصيل أي رسوم إضافية."
              },
              {
                q: "ماذا يحدث بعد انتهاء التجربة المجانية؟",
                a: "بعد انتهاء الـ 3 أيام، يمكنك اختيار الخطة المناسبة للاستمرار. إذا لم تشترك، سيتم إيقاف تقديم العروض مؤقتاً."
              },
              {
                q: "هل هناك رسوم خفية؟",
                a: "لا، جميع الأسعار شاملة. ما تراه هو ما تدفعه."
              },
              {
                q: "هل يمكن ترقية أو تخفيض الخطة؟",
                a: "نعم، يمكنك تغيير خطتك في أي وقت من إعدادات الاشتراك."
              }
            ].map((faq, index) => (
              <Card key={index} className="p-6">
                <h3 className="font-bold text-lg mb-2">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="opacity-80">© 2024 منصة المقاولات. جميع الحقوق محفوظة.</p>
        </div>
      </footer>
    </div>
  );
};

export default Pricing;
