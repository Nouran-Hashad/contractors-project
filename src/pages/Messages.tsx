import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Building2, Search, Send, Paperclip } from "lucide-react";

const Messages = () => {
  const [selectedChat, setSelectedChat] = useState(1);
  const [message, setMessage] = useState("");

  const chats = [
    {
      id: 1,
      name: "أحمد محمد",
      lastMessage: "متى يمكنك البدء في المشروع؟",
      time: "منذ 10 دقائق",
      unread: 2,
      online: true,
      project: "بناء فيلا سكنية"
    },
    {
      id: 2,
      name: "محمد سعيد",
      lastMessage: "شكراً، العرض مناسب جداً",
      time: "منذ ساعة",
      unread: 0,
      online: false,
      project: "تشطيب شقة"
    },
    {
      id: 3,
      name: "عبدالله أحمد",
      lastMessage: "هل يمكن تعديل بعض البنود؟",
      time: "منذ 3 ساعات",
      unread: 1,
      online: true,
      project: "صيانة مبنى"
    }
  ];

  const messages = [
    {
      id: 1,
      sender: "other",
      text: "السلام عليكم، شفت عرضك على مشروع الفيلا",
      time: "10:30 ص"
    },
    {
      id: 2,
      sender: "me",
      text: "وعليكم السلام، أهلاً وسهلاً",
      time: "10:32 ص"
    },
    {
      id: 3,
      sender: "other",
      text: "ممكن تفاصيل أكثر عن خطة العمل؟",
      time: "10:35 ص"
    },
    {
      id: 4,
      sender: "me",
      text: "أكيد، أولاً نبدأ بمرحلة التحضير والحفر، ثم الأساسات، بعدها البناء...",
      time: "10:37 ص"
    },
    {
      id: 5,
      sender: "other",
      text: "ممتاز، متى يمكنك البدء في المشروع؟",
      time: "10:40 ص"
    }
  ];

  const handleSend = () => {
    if (message.trim()) {
      console.log("Sending:", message);
      setMessage("");
    }
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
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">الرسائل</h1>

        <div className="grid lg:grid-cols-3 gap-6 h-[calc(100vh-250px)]">
          {/* Chat List */}
          <Card className="p-4">
            <div className="relative mb-4">
              <Search className="absolute right-3 top-3 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="بحث في المحادثات..."
                className="pr-10"
              />
            </div>

            <ScrollArea className="h-[calc(100%-60px)]">
              <div className="space-y-2">
                {chats.map((chat) => (
                  <div
                    key={chat.id}
                    onClick={() => setSelectedChat(chat.id)}
                    className={`p-4 rounded-lg cursor-pointer transition-colors ${
                      selectedChat === chat.id
                        ? "bg-primary/10 border-2 border-primary"
                        : "hover:bg-muted"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="relative">
                        <Avatar>
                          <AvatarFallback className="bg-secondary text-secondary-foreground">
                            {chat.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        {chat.online && (
                          <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-background rounded-full"></span>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <p className="font-semibold truncate">{chat.name}</p>
                          {chat.unread > 0 && (
                            <Badge className="bg-primary text-primary-foreground">
                              {chat.unread}
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground truncate mb-1">
                          {chat.lastMessage}
                        </p>
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span>{chat.project}</span>
                          <span>{chat.time}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </Card>

          {/* Chat Window */}
          <Card className="lg:col-span-2 flex flex-col">
            {/* Chat Header */}
            <div className="p-4 border-b">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback className="bg-secondary text-secondary-foreground">
                      أ
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-bold">أحمد محمد</p>
                    <p className="text-sm text-muted-foreground">بناء فيلا سكنية</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">عرض المشروع</Button>
              </div>
            </div>

            {/* Messages */}
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[70%] p-3 rounded-lg ${
                        msg.sender === "me"
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted"
                      }`}
                    >
                      <p className="text-sm">{msg.text}</p>
                      <p
                        className={`text-xs mt-1 ${
                          msg.sender === "me" ? "text-primary-foreground/70" : "text-muted-foreground"
                        }`}
                      >
                        {msg.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            {/* Message Input */}
            <div className="p-4 border-t">
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon">
                  <Paperclip className="w-5 h-5" />
                </Button>
                <Input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSend()}
                  placeholder="اكتب رسالتك..."
                  className="flex-1"
                />
                <Button onClick={handleSend} variant="hero">
                  <Send className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Messages;