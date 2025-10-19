import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Building2, Save } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Settings = () => {
  const { toast } = useToast();

  const handleSave = () => {
    toast({
      title: "تم حفظ التغييرات",
      description: "تم تحديث إعداداتك بنجاح",
    });
  };

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
            <Link to="/contractor/dashboard">
              <Button variant="ghost">لوحة التحكم</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-3xl font-bold mb-6">الإعدادات</h1>

        <Tabs defaultValue="account">
          <TabsList className="mb-6">
            <TabsTrigger value="account">الحساب</TabsTrigger>
            <TabsTrigger value="notifications">الإشعارات</TabsTrigger>
            <TabsTrigger value="privacy">الخصوصية</TabsTrigger>
            <TabsTrigger value="subscription">الاشتراك</TabsTrigger>
          </TabsList>

          <TabsContent value="account">
            <Card className="p-6">
              <h3 className="font-bold text-xl mb-6">معلومات الحساب</h3>
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">الاسم الكامل</Label>
                    <Input id="name" defaultValue="أحمد محمد" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">البريد الإلكتروني</Label>
                    <Input id="email" type="email" defaultValue="ahmed@example.com" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">رقم الجوال</Label>
                    <Input id="phone" defaultValue="+966 50 123 4567" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="city">المدينة</Label>
                    <Input id="city" defaultValue="الرياض" />
                  </div>
                </div>
                <div className="pt-4">
                  <Button onClick={handleSave} variant="hero">
                    <Save className="ml-2 w-4 h-4" />
                    حفظ التغييرات
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="p-6 mt-6">
              <h3 className="font-bold text-xl mb-6">تغيير كلمة المرور</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="current-password">كلمة المرور الحالية</Label>
                  <Input id="current-password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="new-password">كلمة المرور الجديدة</Label>
                  <Input id="new-password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">تأكيد كلمة المرور</Label>
                  <Input id="confirm-password" type="password" />
                </div>
                <Button onClick={handleSave} variant="outline">
                  تحديث كلمة المرور
                </Button>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="notifications">
            <Card className="p-6">
              <h3 className="font-bold text-xl mb-6">إعدادات الإشعارات</h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold">إشعارات البريد الإلكتروني</p>
                    <p className="text-sm text-muted-foreground">استقبال إشعارات عبر البريد</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold">إشعارات المشاريع الجديدة</p>
                    <p className="text-sm text-muted-foreground">عند نشر مشروع مطابق لتخصصك</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold">إشعارات الرسائل</p>
                    <p className="text-sm text-muted-foreground">عند استلام رسالة جديدة</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold">إشعارات العروض</p>
                    <p className="text-sm text-muted-foreground">عند قبول أو رفض عرضك</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold">إشعارات التقييمات</p>
                    <p className="text-sm text-muted-foreground">عند استلام تقييم جديد</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="pt-4">
                  <Button onClick={handleSave} variant="hero">
                    <Save className="ml-2 w-4 h-4" />
                    حفظ التغييرات
                  </Button>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="privacy">
            <Card className="p-6">
              <h3 className="font-bold text-xl mb-6">إعدادات الخصوصية</h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold">إظهار الملف للعامة</p>
                    <p className="text-sm text-muted-foreground">السماح للجميع بمشاهدة ملفك</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold">إظهار رقم الجوال</p>
                    <p className="text-sm text-muted-foreground">عرض رقم جوالك في ملفك العام</p>
                  </div>
                  <Switch />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold">إظهار البريد الإلكتروني</p>
                    <p className="text-sm text-muted-foreground">عرض بريدك في ملفك العام</p>
                  </div>
                  <Switch />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold">إظهار المشاريع المكتملة</p>
                    <p className="text-sm text-muted-foreground">عرض عدد المشاريع المكتملة</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="pt-4">
                  <Button onClick={handleSave} variant="hero">
                    <Save className="ml-2 w-4 h-4" />
                    حفظ التغييرات
                  </Button>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="subscription">
            <Card className="p-6">
              <h3 className="font-bold text-xl mb-6">إدارة الاشتراك</h3>
              <div className="space-y-6">
                <div className="bg-muted p-6 rounded-lg">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="font-bold text-2xl">الباقة الشهرية</p>
                      <p className="text-muted-foreground">نشطة</p>
                    </div>
                    <div className="text-left">
                      <p className="font-bold text-3xl">299 ريال</p>
                      <p className="text-sm text-muted-foreground">شهرياً</p>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <p>📅 تاريخ التجديد: 15 نوفمبر 2024</p>
                    <p>💳 طريقة الدفع: بطاقة ائتمان ****1234</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Link to="/pricing" className="flex-1">
                    <Button variant="outline" className="w-full">
                      تغيير الباقة
                    </Button>
                  </Link>
                  <Button variant="outline" className="flex-1">
                    إلغاء الاشتراك
                  </Button>
                </div>

                <div className="border-t pt-6">
                  <h4 className="font-semibold mb-4">سجل الفواتير</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                      <div>
                        <p className="font-semibold">أكتوبر 2024</p>
                        <p className="text-sm text-muted-foreground">تم الدفع في 15 أكتوبر</p>
                      </div>
                      <div className="text-left">
                        <p className="font-bold">299 ريال</p>
                        <Button variant="ghost" size="sm">تحميل</Button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                      <div>
                        <p className="font-semibold">سبتمبر 2024</p>
                        <p className="text-sm text-muted-foreground">تم الدفع في 15 سبتمبر</p>
                      </div>
                      <div className="text-left">
                        <p className="font-bold">299 ريال</p>
                        <Button variant="ghost" size="sm">تحميل</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Settings;