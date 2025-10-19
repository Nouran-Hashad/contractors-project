import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Building2, ArrowRight, Upload, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const SubmitBid = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [files, setFiles] = useState<File[]>([]);

  const project = {
    title: "بناء فيلا سكنية",
    location: "الرياض",
    budget: "500,000 ريال"
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "تم تقديم العرض بنجاح",
      description: "سيتم إشعارك عند مراجعة العميل لعرضك",
    });
    setTimeout(() => navigate("/contractor/dashboard"), 1500);
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
            <Link to={`/projects/${id}`}>
              <Button variant="ghost">العودة للمشروع</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">تقديم عرض</h1>
          <p className="text-muted-foreground">املأ البيانات التالية لتقديم عرضك على المشروع</p>
        </div>

        {/* Project Summary */}
        <Card className="p-6 mb-8 bg-muted">
          <h3 className="font-bold mb-3">ملخص المشروع</h3>
          <div className="space-y-2 text-sm">
            <p><span className="font-semibold">العنوان:</span> {project.title}</p>
            <p><span className="font-semibold">الموقع:</span> {project.location}</p>
            <p><span className="font-semibold">الميزانية:</span> {project.budget}</p>
          </div>
        </Card>

        <form onSubmit={handleSubmit}>
          <Card className="p-8">
            <div className="space-y-6">
              {/* Price & Duration */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="price">السعر المقترح (ريال) *</Label>
                  <Input
                    id="price"
                    type="number"
                    placeholder="مثال: 480000"
                    required
                  />
                  <p className="text-xs text-muted-foreground">
                    اقترح سعراً تنافسياً ومناسباً للمشروع
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="duration">المدة المقترحة *</Label>
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
                      <SelectItem value="4months">4 أشهر</SelectItem>
                      <SelectItem value="5months">5 أشهر</SelectItem>
                      <SelectItem value="6months">6 أشهر</SelectItem>
                      <SelectItem value="more">أكثر من 6 أشهر</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Label htmlFor="message">رسالة العرض *</Label>
                <Textarea
                  id="message"
                  placeholder="اكتب رسالة توضح خبرتك في هذا المجال، خطة العمل، وسبب اختيارك لهذا السعر والمدة..."
                  rows={8}
                  required
                />
                <p className="text-xs text-muted-foreground">
                  رسالة مفصلة وواضحة تزيد من فرص قبول عرضك
                </p>
              </div>

              {/* File Upload */}
              <div className="space-y-2">
                <Label htmlFor="files">مرفقات داعمة (اختياري)</Label>
                <div className="border-2 border-dashed rounded-lg p-6 text-center hover:border-primary transition-colors">
                  <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground mb-2">
                    أضف مستندات أو صور لأعمال سابقة مشابهة
                  </p>
                  <p className="text-xs text-muted-foreground mb-4">
                    PDF, صور (حتى 10 ميجا)
                  </p>
                  <Input
                    id="files"
                    type="file"
                    multiple
                    onChange={handleFileChange}
                    className="hidden"
                    accept=".pdf,.jpg,.jpeg,.png"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => document.getElementById("files")?.click()}
                  >
                    اختر الملفات
                  </Button>
                </div>

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

              {/* Terms */}
              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-semibold mb-2">⚠️ شروط تقديم العرض</h4>
                <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                  <li>العرض ملزم لمدة 30 يوم من تاريخ التقديم</li>
                  <li>يجب الالتزام بالسعر والمدة المذكورة في العرض</li>
                  <li>سيتم خصم رسوم عند قبول العرض وبدء العمل</li>
                  <li>احرص على تقديم معلومات دقيقة وواضحة</li>
                </ul>
              </div>

              {/* Submit */}
              <div className="flex gap-4 pt-4">
                <Button type="submit" variant="hero" size="lg" className="flex-1">
                  تقديم العرض
                  <ArrowRight className="mr-2 w-5 h-5" />
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="lg"
                  onClick={() => navigate(`/projects/${id}`)}
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

export default SubmitBid;