import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Building2, 
  Star, 
  MapPin,
  Briefcase,
  Phone,
  Mail,
  Calendar,
  Award,
  Settings,
  Edit
} from "lucide-react";

const ContractorProfile = () => {
  const [activeTab, setActiveTab] = useState("portfolio");

  const contractor = {
    name: "مؤسسة البناء الحديث",
    rating: 4.8,
    reviewsCount: 24,
    completedProjects: 45,
    memberSince: "2020",
    location: "الرياض، جدة",
    phone: "+966 50 123 4567",
    email: "info@modernbuild.sa",
    specialties: ["بناء", "تشطيب", "صيانة"],
    description: "مؤسسة متخصصة في أعمال البناء والتشطيب بخبرة تزيد عن 15 عاماً في السوق السعودي. نقدم خدمات متكاملة بأعلى معايير الجودة.",
    services: [
      { name: "بناء فلل سكنية", priceRange: "300,000 - 1,000,000 ريال" },
      { name: "تشطيب شقق", priceRange: "50,000 - 150,000 ريال" },
      { name: "صيانة مباني", priceRange: "10,000 - 100,000 ريال" }
    ]
  };

  const portfolio = [
    {
      id: 1,
      title: "فيلا فاخرة - الرياض",
      image: "/placeholder.svg",
      category: "بناء",
      completedDate: "2024"
    },
    {
      id: 2,
      title: "مجمع سكني - جدة",
      image: "/placeholder.svg",
      category: "بناء",
      completedDate: "2023"
    },
    {
      id: 3,
      title: "تشطيب فيلا - الدمام",
      image: "/placeholder.svg",
      category: "تشطيب",
      completedDate: "2024"
    }
  ];

  const reviews = [
    {
      id: 1,
      client: "عبدالله أحمد",
      rating: 5,
      comment: "عمل ممتاز والتزام تام بالمواعيد. أنصح بالتعامل معهم",
      project: "بناء فيلا سكنية",
      date: "منذ شهر"
    },
    {
      id: 2,
      client: "محمد سعيد",
      rating: 4,
      comment: "جودة عالية وفريق عمل محترف. السعر مناسب",
      project: "تشطيب شقة",
      date: "منذ شهرين"
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
            <div className="flex items-center gap-3">
              <Link to="/contractor/profile/edit">
                <Button variant="outline">
                  <Edit className="ml-2 w-4 h-4" />
                  تعديل الملف
                </Button>
              </Link>
              <Link to="/contractor/dashboard">
                <Button variant="ghost">لوحة التحكم</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Profile Header */}
      <div className="bg-gradient-hero text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="flex items-start gap-6">
            <Avatar className="w-24 h-24 border-4 border-white">
              <AvatarFallback className="bg-secondary text-secondary-foreground text-3xl">
                م
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold mb-2">{contractor.name}</h1>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      <span className="font-bold">{contractor.rating}</span>
                      <span>({contractor.reviewsCount} تقييم)</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Award className="w-5 h-5" />
                      <span>{contractor.completedProjects} مشروع مكتمل</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-5 h-5" />
                      <span>عضو منذ {contractor.memberSince}</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="mb-4 max-w-2xl">{contractor.description}</p>
              <div className="flex flex-wrap gap-2">
                {contractor.specialties.map((specialty, index) => (
                  <Badge key={index} variant="secondary" className="bg-white/20 text-white">
                    {specialty}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="mb-6">
                <TabsTrigger value="portfolio">معرض الأعمال</TabsTrigger>
                <TabsTrigger value="services">الخدمات</TabsTrigger>
                <TabsTrigger value="reviews">التقييمات</TabsTrigger>
              </TabsList>

              <TabsContent value="portfolio" className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  {portfolio.map((item) => (
                    <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-all">
                      <div className="aspect-video bg-muted flex items-center justify-center">
                        <Building2 className="w-16 h-16 text-muted-foreground" />
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold mb-2">{item.title}</h3>
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <Badge variant="outline">{item.category}</Badge>
                          <span>{item.completedDate}</span>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="services" className="space-y-4">
                {contractor.services.map((service, index) => (
                  <Card key={index} className="p-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-bold mb-2">{service.name}</h3>
                        <p className="text-muted-foreground">النطاق السعري</p>
                      </div>
                      <Badge variant="secondary" className="text-lg">
                        {service.priceRange}
                      </Badge>
                    </div>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="reviews" className="space-y-4">
                {reviews.map((review) => (
                  <Card key={review.id} className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <p className="font-bold">{review.client}</p>
                        <p className="text-sm text-muted-foreground">{review.project}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < review.rating
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-muted-foreground"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-2">{review.comment}</p>
                    <p className="text-xs text-muted-foreground">{review.date}</p>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="font-bold mb-4">معلومات الاتصال</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-muted-foreground" />
                  <span className="text-sm">{contractor.location}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-muted-foreground" />
                  <span className="text-sm">{contractor.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-muted-foreground" />
                  <span className="text-sm">{contractor.email}</span>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold mb-4">إحصائيات</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">معدل الاستجابة</span>
                  <span className="font-bold">95%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">وقت الاستجابة</span>
                  <span className="font-bold">ساعة واحدة</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">مشاريع جارية</span>
                  <span className="font-bold">3</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContractorProfile;