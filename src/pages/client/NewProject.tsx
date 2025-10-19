import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Building2, ArrowRight, Upload, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const NewProject = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [files, setFiles] = useState<File[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "تم نشر المشروع بنجاح",
      description: "سيتم إشعار المقاولين المناسبين",
    });
    setTimeout(() => navigate("/client/dashboard"), 1500);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles([...files, ...Array.from(e.target.files)]);
    }
  };

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
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
            <Link to="/client/dashboard">
              <Button variant="ghost">العودة للوحة التحكم</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">نشر مشروع جديد</h1>
          <p className="text-muted-foreground">املأ البيانات التالية لنشر مشروعك واستقبال العروض</p>
        </div>

        <form onSubmit={handleSubmit}>
          <Card className="p-8">
            <div className="space-y-6">
              {/* Project Title */}
              <div className="space-y-2">
                <Label htmlFor="title">عنوان المشروع *</Label>
                <Input
                  id="title"
                  placeholder="مثال: بناء فيلا سكنية في الرياض"
                  required
                />
              </div>

              {/* Location & Category */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="location">الموقع / المحافظة *</Label>
                  <Select required>
                    <SelectTrigger>
                      <SelectValue placeholder="اختر المحافظة" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="riyadh">الرياض</SelectItem>
                      <SelectItem value="jeddah">جدة</SelectItem>
                      <SelectItem value="dammam">الدمام</SelectItem>
                      <SelectItem value="mecca">مكة المكرمة</SelectItem>
                      <SelectItem value="medina">المدينة المنورة</SelectItem>
                      <SelectItem value="taif">الطائف</SelectItem>
                      <SelectItem value="tabuk">تبوك</SelectItem>
                      <SelectItem value="khobar">الخبر</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">نوع العمل / التخصص *</Label>
                  <Select required>
                    <SelectTrigger>
                      <SelectValue placeholder="اختر التخصص" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="building">بناء</SelectItem>
                      <SelectItem value="finishing">تشطيب</SelectItem>
                      <SelectItem value="painting">دهان</SelectItem>
                      <SelectItem value="carpentry">نجارة</SelectItem>
                      <SelectItem value="electricity">كهرباء</SelectItem>
                      <SelectItem value="plumbing">سباكة</SelectItem>
                      <SelectItem value="maintenance">صيانة</SelectItem>
                      <SelectItem value="landscaping">تنسيق حدائق</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <Label htmlFor="description">وصف المشروع *</Label>
                <Textarea
                  id="description"
                  placeholder="اكتب تفاصيل المشروع، المتطلبات، والمواصفات المطلوبة..."
                  rows={6}
                  required
                />
              </div>

              {/* Budget & Duration */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="budget">الميزانية التقديرية (ريال) *</Label>
                  <Input
                    id="budget"
                    type="number"
                    placeholder="مثال: 500000"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="duration">المدة المتوقعة *</Label>
                  <Select required>
                    <SelectTrigger>
                      <SelectValue placeholder="اختر المدة" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="week">أسبوع</SelectItem>
                      <SelectItem value="2weeks">أسبوعين</SelectItem>
                      <SelectItem value="month">شهر</SelectItem>
                      <SelectItem value="2months">شهرين</SelectItem>
                      <SelectItem value="3months">3 أشهر</SelectItem>
                      <SelectItem value="6months">6 أشهر</SelectItem>
                      <SelectItem value="year">سنة</SelectItem>
                      <SelectItem value="more">أكثر من سنة</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* File Upload */}
              <div className="space-y-2">
                <Label htmlFor="files">المرفقات (اختياري)</Label>
                <div className="border-2 border-dashed rounded-lg p-6 text-center hover:border-primary transition-colors">
                  <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground mb-2">
                    اضغط لرفع الملفات أو اسحبها هنا
                  </p>
                  <p className="text-xs text-muted-foreground mb-4">
                    PDF, صور، مخططات (حتى 10 ميجا)
                  </p>
                  <Input
                    id="files"
                    type="file"
                    multiple
                    onChange={handleFileChange}
                    className="hidden"
                    accept=".pdf,.jpg,.jpeg,.png,.dwg"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => document.getElementById("files")?.click()}
                  >
                    اختر الملفات
                  </Button>
                </div>

                {/* Files List */}
                {files.length > 0 && (
                  <div className="space-y-2 mt-4">
                    {files.map((file, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 bg-muted rounded-lg"
                      >
                        <span className="text-sm">{file.name}</span>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => removeFile(index)}
                        >
                          <X className="w-4 h-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Submit */}
              <div className="flex gap-4 pt-4">
                <Button type="submit" variant="hero" size="lg" className="flex-1">
                  نشر المشروع
                  <ArrowRight className="mr-2 w-5 h-5" />
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="lg"
                  onClick={() => navigate("/client/dashboard")}
                >
                  إلغاء
                </Button>
              </div>
            </div>
          </Card>
        </form>
      </div>
    </div>
  );
};

export default NewProject;