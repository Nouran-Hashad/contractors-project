import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  Building2, 
  Search, 
  FileText, 
  MessageSquare, 
  Bell,
  LogOut,
  Settings,
  Star,
  Clock,
  TrendingUp,
  AlertCircle
} from "lucide-react";

const ContractorDashboard = () => {
  const [activeTab, setActiveTab] = useState("projects");

  const availableProjects = [
    {
      id: 1,
      title: "بناء فيلا سكنية",
      location: "الرياض",
      category: "بناء",
      budget: "500,000 ريال",
      duration: "6 أشهر",
      postedDate: "منذ يومين",
      bidsCount: 12,
      matchScore: 95
    },
    {
      id: 2,
      title: "تشطيب شقة 200 متر",
      location: "جدة",
      category: "تشطيب",
      budget: "80,000 ريال",
      duration: "3 أشهر",
      postedDate: "منذ 5 ساعات",
      bidsCount: 5,
      matchScore: 88
    },
    {
      id: 3,
      title: "صيانة مبنى تجاري",
      location: "الدمام",
      category: "صيانة",
      budget: "120,000 ريال",
      duration: "شهرين",
      postedDate: "منذ يوم",
      bidsCount: 8,
      matchScore: 82
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
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon">
                <Bell className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Settings className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <LogOut className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Trial Banner */}
      <div className="bg-gradient-hero text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5" />
              <span className="font-semibold">تجربة مجانية - باقي يومان</span>
            </div>
            <Link to="/pricing">
              <Button variant="outline" size="sm" className="bg-white text-secondary hover:bg-white/90">
                اشترك الآن
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">لوحة التحكم</h1>
          <div className="flex items-center gap-2">
            <p className="text-muted-foreground">مرحباً بك،</p>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <span className="font-semibold">4.8</span>
              <span className="text-sm text-muted-foreground">(24 تقييم)</span>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-2">
              <FileText className="w-8 h-8 text-primary" />
              <span className="text-3xl font-bold">8</span>
            </div>
            <p className="text-sm text-muted-foreground">عروض مقدمة</p>
          </Card>
          <Card className="p-6">
            <div className="flex items-center justify-between mb-2">
              <TrendingUp className="w-8 h-8 text-secondary" />
              <span className="text-3xl font-bold">3</span>
            </div>
            <p className="text-sm text-muted-foreground">مشاريع جارية</p>
          </Card>
          <Card className="p-6">
            <div className="flex items-center justify-between mb-2">
              <MessageSquare className="w-8 h-8 text-primary" />
              <span className="text-3xl font-bold">5</span>
            </div>
            <p className="text-sm text-muted-foreground">رسائل جديدة</p>
          </Card>
          <Card className="p-6">
            <div className="flex items-center justify-between mb-2">
              <Star className="w-8 h-8 text-yellow-500 fill-yellow-500" />
              <span className="text-3xl font-bold">4.8</span>
            </div>
            <p className="text-sm text-muted-foreground">التقييم</p>
          </Card>
        </div>

        {/* Tabs Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-6">
            <TabsTrigger value="projects">المشاريع المتاحة</TabsTrigger>
            <TabsTrigger value="mybids">عروضي</TabsTrigger>
            <TabsTrigger value="active">مشاريعي الجارية</TabsTrigger>
            <TabsTrigger value="messages">الرسائل</TabsTrigger>
          </TabsList>

          <TabsContent value="projects" className="space-y-4">
            <Card className="p-4 mb-4">
              <div className="flex items-center gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute right-3 top-3 w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="ابحث عن مشاريع..."
                    className="w-full pr-10 pl-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <Button variant="outline">فلترة</Button>
              </div>
            </Card>

            {availableProjects.map((project) => (
              <Card key={project.id} className="p-6 hover:shadow-lg transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      {project.matchScore >= 90 && (
                        <Badge className="bg-primary text-primary-foreground">
                          مطابق {project.matchScore}%
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <span>📍 {project.location}</span>
                      <span>🏗️ {project.category}</span>
                      <span>⏱️ {project.duration}</span>
                    </div>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="font-semibold text-primary text-lg">
                        💰 {project.budget}
                      </span>
                      <span className="text-muted-foreground">{project.postedDate}</span>
                      <span className="text-muted-foreground">{project.bidsCount} عرض مقدم</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Button variant="default">عرض التفاصيل</Button>
                  <Button variant="hero">قدم عرضك</Button>
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="mybids">
            <Card className="p-12 text-center">
              <FileText className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">لم تقدم أي عروض بعد</h3>
              <p className="text-muted-foreground mb-4">
                ابدأ بتصفح المشاريع المتاحة وقدم عروضك
              </p>
              <Button onClick={() => setActiveTab("projects")}>
                تصفح المشاريع
              </Button>
            </Card>
          </TabsContent>

          <TabsContent value="active">
            <Card className="p-12 text-center">
              <TrendingUp className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">لا توجد مشاريع جارية</h3>
              <p className="text-muted-foreground">
                ستظهر مشاريعك الجارية هنا
              </p>
            </Card>
          </TabsContent>

          <TabsContent value="messages">
            <Card className="p-12 text-center">
              <MessageSquare className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">لا توجد رسائل</h3>
              <p className="text-muted-foreground">
                ستظهر محادثاتك مع العملاء هنا
              </p>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ContractorDashboard;
