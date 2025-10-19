import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Building2, 
  MapPin, 
  Clock, 
  DollarSign,
  Calendar,
  FileText,
  Star,
  MessageSquare,
  ArrowRight
} from "lucide-react";

const ProjectDetails = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("details");

  // Mock data
  const project = {
    id: 1,
    title: "بناء فيلا سكنية",
    location: "الرياض",
    category: "بناء",
    budget: "500,000 ريال",
    duration: "6 أشهر",
    status: "نشط",
    postedDate: "منذ يومين",
    bidsCount: 12,
    description: `مطلوب مقاول لبناء فيلا سكنية في حي النرجس بالرياض. المساحة 400 متر مربع.

المتطلبات:
- بناء دور أرضي + دور أول
- 5 غرف نوم + 4 حمامات
- مجلس رجال ومجلس نساء
- صالة كبيرة ومطبخ
- حديقة خلفية

المواصفات:
- جودة عالية في التشطيب
- استخدام مواد بناء ممتازة
- الالتزام بالمخططات المعمارية
- ضمان جودة العمل`,
    client: {
      name: "أحمد محمد",
      projectsCount: 3,
      memberSince: "2023"
    }
  };

  const bids = [
    {
      id: 1,
      contractor: {
        name: "مؤسسة البناء الحديث",
        rating: 4.8,
        reviewsCount: 24,
        completedProjects: 45
      },
      price: "480,000 ريال",
      duration: "5 أشهر",
      message: "لدينا خبرة 15 سنة في بناء الفلل السكنية. نقدم ضمان 5 سنوات على جميع الأعمال.",
      postedDate: "منذ ساعة",
      matchScore: 95
    },
    {
      id: 2,
      contractor: {
        name: "شركة الإنشاءات المتطورة",
        rating: 4.6,
        reviewsCount: 18,
        completedProjects: 32
      },
      price: "520,000 ريال",
      duration: "6 أشهر",
      message: "متخصصون في بناء الفلل الفاخرة مع أفضل جودة وأسعار منافسة.",
      postedDate: "منذ 3 ساعات",
      matchScore: 88
    },
    {
      id: 3,
      contractor: {
        name: "مقاولات النخبة",
        rating: 4.9,
        reviewsCount: 31,
        completedProjects: 56
      },
      price: "495,000 ريال",
      duration: "5.5 أشهر",
      message: "نضمن لك أفضل جودة والتزام تام بالمواعيد. فريق عمل محترف ومتميز.",
      postedDate: "منذ 5 ساعات",
      matchScore: 92
    }
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
            <Link to="/projects">
              <Button variant="ghost">العودة للمشاريع</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Project Details */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h1 className="text-3xl font-bold mb-3">{project.title}</h1>
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Building2 className="w-4 h-4" />
                      <span>{project.category}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{project.postedDate}</span>
                    </div>
                  </div>
                </div>
                <Badge className="bg-primary text-primary-foreground">
                  {project.status}
                </Badge>
              </div>

              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="mb-6">
                  <TabsTrigger value="details">التفاصيل</TabsTrigger>
                  <TabsTrigger value="bids">العروض ({bids.length})</TabsTrigger>
                </TabsList>

                <TabsContent value="details" className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-3">وصف المشروع</h3>
                    <p className="text-muted-foreground whitespace-pre-line leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 pt-4">
                    <div className="flex items-center gap-3 p-4 bg-muted rounded-lg">
                      <DollarSign className="w-8 h-8 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">الميزانية</p>
                        <p className="font-bold text-lg">{project.budget}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-muted rounded-lg">
                      <Clock className="w-8 h-8 text-secondary" />
                      <div>
                        <p className="text-sm text-muted-foreground">المدة المتوقعة</p>
                        <p className="font-bold text-lg">{project.duration}</p>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="bids" className="space-y-4">
                  {bids.map((bid) => (
                    <Card key={bid.id} className="p-6 hover:shadow-lg transition-all">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-start gap-4">
                          <Avatar className="w-12 h-12">
                            <AvatarFallback className="bg-primary text-primary-foreground">
                              {bid.contractor.name.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <h4 className="font-bold">{bid.contractor.name}</h4>
                              {bid.matchScore >= 90 && (
                                <Badge className="bg-primary text-primary-foreground">
                                  مطابق {bid.matchScore}%
                                </Badge>
                              )}
                            </div>
                            <div className="flex items-center gap-3 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                                <span>{bid.contractor.rating}</span>
                                <span>({bid.contractor.reviewsCount} تقييم)</span>
                              </div>
                              <span>•</span>
                              <span>{bid.contractor.completedProjects} مشروع مكتمل</span>
                            </div>
                          </div>
                        </div>
                        <span className="text-xs text-muted-foreground">{bid.postedDate}</span>
                      </div>

                      <div className="bg-muted p-4 rounded-lg mb-4">
                        <div className="grid grid-cols-2 gap-4 mb-3">
                          <div>
                            <p className="text-sm text-muted-foreground mb-1">السعر المقترح</p>
                            <p className="font-bold text-lg text-primary">{bid.price}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground mb-1">المدة</p>
                            <p className="font-bold text-lg">{bid.duration}</p>
                          </div>
                        </div>
                        <p className="text-sm">{bid.message}</p>
                      </div>

                      <div className="flex gap-3">
                        <Link to={`/contractor/${bid.id}`} className="flex-1">
                          <Button variant="default" className="w-full">عرض الملف الشخصي</Button>
                        </Link>
                        <Button variant="hero">
                          <MessageSquare className="ml-2 w-4 h-4" />
                          تواصل
                        </Button>
                      </div>
                    </Card>
                  ))}
                </TabsContent>
              </Tabs>
            </Card>
          </div>

          {/* Right Column - Client Info & Actions */}
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="font-bold mb-4">معلومات العميل</h3>
              <div className="flex items-center gap-3 mb-4">
                <Avatar className="w-12 h-12">
                  <AvatarFallback className="bg-secondary text-secondary-foreground">
                    {project.client.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{project.client.name}</p>
                  <p className="text-sm text-muted-foreground">
                    عضو منذ {project.client.memberSince}
                  </p>
                </div>
              </div>
              <div className="pt-4 border-t">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">المشاريع المنشورة</span>
                  <span className="font-semibold">{project.client.projectsCount}</span>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold mb-4">إجراءات سريعة</h3>
              <div className="space-y-3">
                <Link to={`/projects/${id}/submit-bid`} className="block">
                  <Button variant="hero" className="w-full">
                    <ArrowRight className="ml-2 w-5 h-5" />
                    قدم عرضك
                  </Button>
                </Link>
                <Button variant="outline" className="w-full">
                  <MessageSquare className="ml-2 w-5 h-5" />
                  راسل العميل
                </Button>
                <Button variant="outline" className="w-full">
                  <FileText className="ml-2 w-5 h-5" />
                  حفظ المشروع
                </Button>
              </div>
            </Card>

            <Card className="p-6 bg-muted">
              <h3 className="font-bold mb-2">💡 نصيحة</h3>
              <p className="text-sm text-muted-foreground">
                قدم عرضاً تفصيلياً يوضح خبرتك وخطة العمل لزيادة فرص قبول عرضك
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;