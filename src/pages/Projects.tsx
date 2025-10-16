import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Building2, Search, Filter, MapPin, Clock, DollarSign } from "lucide-react";

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");

  const projects = [
    {
      id: 1,
      title: "بناء فيلا سكنية فاخرة",
      description: "مطلوب مقاول لبناء فيلا على مساحة 500 متر مربع بمواصفات عالية الجودة",
      location: "الرياض",
      category: "بناء",
      budget: "500,000 - 600,000 ريال",
      duration: "6 أشهر",
      postedDate: "منذ يومين",
      bidsCount: 12,
      clientRating: 4.5
    },
    {
      id: 2,
      title: "تشطيب شقة 200 متر",
      description: "تشطيب كامل لشقة بمساحة 200 متر شامل الدهانات والأرضيات والكهرباء",
      location: "جدة",
      category: "تشطيب",
      budget: "70,000 - 90,000 ريال",
      duration: "3 أشهر",
      postedDate: "منذ 5 ساعات",
      bidsCount: 5,
      clientRating: 5.0
    },
    {
      id: 3,
      title: "صيانة مبنى تجاري",
      description: "صيانة شاملة لمبنى تجاري تشمل إصلاح التسريبات وصيانة المصاعد",
      location: "الدمام",
      category: "صيانة",
      budget: "100,000 - 150,000 ريال",
      duration: "شهرين",
      postedDate: "منذ يوم",
      bidsCount: 8,
      clientRating: 4.8
    },
    {
      id: 4,
      title: "دهان مبنى سكني",
      description: "دهان خارجي وداخلي لمبنى سكني مكون من 3 طوابق",
      location: "مكة المكرمة",
      category: "دهان",
      budget: "45,000 - 55,000 ريال",
      duration: "شهر",
      postedDate: "منذ 3 أيام",
      bidsCount: 15,
      clientRating: 4.2
    },
    {
      id: 5,
      title: "تركيب أنظمة كهربائية",
      description: "تركيب وتوصيل أنظمة كهربائية حديثة لمنزل جديد",
      location: "المدينة المنورة",
      category: "كهرباء",
      budget: "30,000 - 40,000 ريال",
      duration: "أسبوعين",
      postedDate: "منذ 6 ساعات",
      bidsCount: 7,
      clientRating: 4.9
    },
    {
      id: 6,
      title: "أعمال نجارة مخصصة",
      description: "تصميم وتنفيذ أثاث مخصص ومكتبة منزلية",
      location: "الخبر",
      category: "نجارة",
      budget: "25,000 - 35,000 ريال",
      duration: "شهر ونصف",
      postedDate: "منذ 4 أيام",
      bidsCount: 10,
      clientRating: 4.7
    }
  ];

  const categories = [
    { value: "all", label: "جميع التخصصات" },
    { value: "بناء", label: "بناء" },
    { value: "تشطيب", label: "تشطيب" },
    { value: "صيانة", label: "صيانة" },
    { value: "دهان", label: "دهان" },
    { value: "كهرباء", label: "كهرباء" },
    { value: "نجارة", label: "نجارة" }
  ];

  const locations = [
    { value: "all", label: "جميع المناطق" },
    { value: "الرياض", label: "الرياض" },
    { value: "جدة", label: "جدة" },
    { value: "الدمام", label: "الدمام" },
    { value: "مكة المكرمة", label: "مكة المكرمة" },
    { value: "المدينة المنورة", label: "المدينة المنورة" }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || project.category === selectedCategory;
    const matchesLocation = selectedLocation === "all" || project.location === selectedLocation;
    
    return matchesSearch && matchesCategory && matchesLocation;
  });

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

      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              تصفح المشاريع المتاحة
            </h1>
            <p className="text-xl opacity-90">
              ابحث عن مشاريع تناسب تخصصك وقدم عروضك
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <div className="container mx-auto px-4 py-8">
        <Card className="p-6 mb-8">
          <div className="grid md:grid-cols-4 gap-4">
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute right-3 top-3 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="ابحث عن مشاريع..."
                  className="pr-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="التخصص" />
              </SelectTrigger>
              <SelectContent>
                {categories.map(cat => (
                  <SelectItem key={cat.value} value={cat.value}>
                    {cat.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedLocation} onValueChange={setSelectedLocation}>
              <SelectTrigger>
                <SelectValue placeholder="الموقع" />
              </SelectTrigger>
              <SelectContent>
                {locations.map(loc => (
                  <SelectItem key={loc.value} value={loc.value}>
                    {loc.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </Card>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            عرض {filteredProjects.length} من {projects.length} مشروع
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="p-6 hover:shadow-xl transition-all">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                      <p className="text-muted-foreground mb-4">{project.description}</p>
                    </div>
                    <Badge className="bg-primary text-primary-foreground">
                      {project.category}
                    </Badge>
                  </div>

                  <div className="grid md:grid-cols-2 gap-3 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4 text-primary" />
                      <span>المدة: {project.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                      <DollarSign className="w-4 h-4" />
                      <span>{project.budget}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>{project.postedDate}</span>
                      <span>•</span>
                      <span>{project.bidsCount} عرض</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2 md:min-w-[150px]">
                  <Link to={`/project/${project.id}`} className="w-full">
                    <Button variant="default" className="w-full">
                      عرض التفاصيل
                    </Button>
                  </Link>
                  <Link to="/auth?type=contractor" className="w-full">
                    <Button variant="hero" className="w-full">
                      قدم عرضك
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <Card className="p-12 text-center">
            <Search className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">لا توجد مشاريع مطابقة</h3>
            <p className="text-muted-foreground">
              جرب تغيير معايير البحث
            </p>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Projects;
