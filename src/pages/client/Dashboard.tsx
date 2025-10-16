import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Building2, 
  Plus, 
  FileText, 
  MessageSquare, 
  Bell,
  LogOut,
  User,
  Settings
} from "lucide-react";

const ClientDashboard = () => {
  const [activeTab, setActiveTab] = useState("projects");

  const projects = [
    {
      id: 1,
      title: "بناء فيلا سكنية",
      location: "الرياض",
      category: "بناء",
      budget: "500,000 ريال",
      status: "نشط",
      bidsCount: 12
    },
    {
      id: 2,
      title: "تشطيب شقة",
      location: "جدة",
      category: "تشطيب",
      budget: "80,000 ريال",
      status: "قيد المراجعة",
      bidsCount: 5
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

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">لوحة التحكم</h1>
            <p className="text-muted-foreground">مرحباً بك، إدارة مشاريعك من هنا</p>
          </div>
          <Link to="/client/new-project">
            <Button variant="hero" size="lg">
              <Plus className="ml-2 w-5 h-5" />
              نشر مشروع جديد
            </Button>
          </Link>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-2">
              <FileText className="w-8 h-8 text-primary" />
              <span className="text-3xl font-bold">5</span>
            </div>
            <p className="text-sm text-muted-foreground">إجمالي المشاريع</p>
          </Card>
          <Card className="p-6">
            <div className="flex items-center justify-between mb-2">
              <FileText className="w-8 h-8 text-secondary" />
              <span className="text-3xl font-bold">2</span>
            </div>
            <p className="text-sm text-muted-foreground">مشاريع نشطة</p>
          </Card>
          <Card className="p-6">
            <div className="flex items-center justify-between mb-2">
              <MessageSquare className="w-8 h-8 text-primary" />
              <span className="text-3xl font-bold">17</span>
            </div>
            <p className="text-sm text-muted-foreground">عروض جديدة</p>
          </Card>
          <Card className="p-6">
            <div className="flex items-center justify-between mb-2">
              <User className="w-8 h-8 text-secondary" />
              <span className="text-3xl font-bold">3</span>
            </div>
            <p className="text-sm text-muted-foreground">مشاريع مكتملة</p>
          </Card>
        </div>

        {/* Tabs Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-6">
            <TabsTrigger value="projects">مشاريعي</TabsTrigger>
            <TabsTrigger value="bids">العروض الواردة</TabsTrigger>
            <TabsTrigger value="messages">الرسائل</TabsTrigger>
          </TabsList>

          <TabsContent value="projects" className="space-y-4">
            {projects.map((project) => (
              <Card key={project.id} className="p-6 hover:shadow-lg transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>📍 {project.location}</span>
                      <span>🏗️ {project.category}</span>
                      <span>💰 {project.budget}</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      project.status === "نشط" 
                        ? "bg-primary/10 text-primary" 
                        : "bg-secondary/10 text-secondary"
                    }`}>
                      {project.status}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {project.bidsCount} عرض
                    </span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Button variant="default" size="sm">عرض التفاصيل</Button>
                  <Button variant="outline" size="sm">مشاهدة العروض</Button>
                  <Button variant="ghost" size="sm">تعديل</Button>
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="bids">
            <Card className="p-12 text-center">
              <MessageSquare className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">لا توجد عروض جديدة</h3>
              <p className="text-muted-foreground">
                ستظهر العروض المقدمة على مشاريعك هنا
              </p>
            </Card>
          </TabsContent>

          <TabsContent value="messages">
            <Card className="p-12 text-center">
              <MessageSquare className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">لا توجد رسائل</h3>
              <p className="text-muted-foreground">
                ستظهر محادثاتك مع المقاولين هنا
              </p>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ClientDashboard;
