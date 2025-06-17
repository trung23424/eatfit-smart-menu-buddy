
import { useState } from "react";
import { Trophy, Users, Calendar, Target, CheckCircle, Clock, Star, Gift } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const currentChallenge = {
  id: 1,
  title: "EatClean 7 ngày",
  description: "Thử thách ăn uống lành mạnh trong 7 ngày liên tiếp",
  participants: 1247,
  daysLeft: 4,
  currentDay: 4,
  totalDays: 7,
  isJoined: true,
  prize: "Badge đặc biệt + 500 điểm",
  progress: [
    { day: 1, completed: true, title: "Uống đủ 2L nước", date: "13/1" },
    { day: 2, completed: true, title: "Ăn 5 khẩu phần rau củ", date: "14/1" },
    { day: 3, completed: true, title: "Không ăn đồ chiên", date: "15/1" },
    { day: 4, completed: false, title: "Tự nấu ăn tối", date: "16/1", current: true },
    { day: 5, completed: false, title: "Ăn sáng trước 8h", date: "17/1" },
    { day: 6, completed: false, title: "Ghi chép tất cả bữa ăn", date: "18/1" },
    { day: 7, completed: false, title: "Chia sẻ một công thức", date: "19/1" }
  ]
};

const availableChallenges = [
  {
    id: 2,
    title: "Giảm 2kg trong 14 ngày",
    participants: 856,
    duration: "14 ngày",
    difficulty: "Trung bình",
    prize: "Voucher 100k",
    startDate: "20/1",
    isJoined: false
  },
  {
    id: 3,
    title: "Tập thể dục mỗi ngày",
    participants: 432,
    duration: "30 ngày",
    difficulty: "Dễ",
    prize: "Badge Marathon",
    startDate: "22/1",
    isJoined: false
  },
  {
    id: 4,
    title: "Detox 5 ngày",
    participants: 234,
    duration: "5 ngày",
    difficulty: "Khó",
    prize: "Tư vấn miễn phí",
    startDate: "25/1",
    isJoined: false
  }
];

const leaderboard = [
  { rank: 1, name: "Minh Anh", score: 95, avatar: "👩‍🦰", streak: 7 },
  { rank: 2, name: "Tuấn Vũ", score: 88, avatar: "👨‍💼", streak: 6 },
  { rank: 3, name: "Hương Ly", score: 85, avatar: "👩‍🎓", streak: 5 },
  { rank: 4, name: "Bạn", score: 75, avatar: "👤", streak: 3, isUser: true },
  { rank: 5, name: "Nam Khánh", score: 72, avatar: "👨‍💻", streak: 4 }
];

const ChallengePage = () => {
  const [activeTab, setActiveTab] = useState("current");
  const [currentChallengeData, setCurrentChallengeData] = useState(currentChallenge);

  const completedDays = currentChallengeData.progress.filter(p => p.completed).length;
  const progressPercentage = (completedDays / currentChallengeData.totalDays) * 100;

  const markDayComplete = (dayIndex: number) => {
    const updated = { ...currentChallengeData };
    updated.progress[dayIndex].completed = true;
    setCurrentChallengeData(updated);
    console.log(`Day ${dayIndex + 1} marked as complete`);
  };

  const joinChallenge = (challengeId: number) => {
    console.log(`Joining challenge ${challengeId}`);
  };

  return (
    <div className="p-3 space-y-4 pb-20">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-lg font-bold text-gray-800">🏆 Thử thách</h1>
          <p className="text-sm text-gray-500">Cùng nhau xây dựng thói quen tốt</p>
        </div>
        <Button variant="outline" size="sm">
          <Trophy className="h-4 w-4 mr-1" />
          Lịch sử
        </Button>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="current" className="text-xs">Hiện tại</TabsTrigger>
          <TabsTrigger value="available" className="text-xs">Sắp tới</TabsTrigger>
          <TabsTrigger value="leaderboard" className="text-xs">Bảng xếp hạng</TabsTrigger>
        </TabsList>

        <TabsContent value="current" className="mt-4">
          {currentChallengeData.isJoined ? (
            <div className="space-y-4">
              {/* Current Challenge Header */}
              <Card className="gradient-bg text-white">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h2 className="font-bold text-lg">{currentChallengeData.title}</h2>
                      <p className="text-sm text-white/80">{currentChallengeData.description}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold">{currentChallengeData.daysLeft}</p>
                      <p className="text-xs text-white/80">ngày còn lại</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        <span className="text-sm">{currentChallengeData.participants} người tham gia</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Gift className="h-4 w-4" />
                        <span className="text-sm">{currentChallengeData.prize}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Progress Overview */}
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium">Tiến trình của bạn</h3>
                    <span className="text-sm text-gray-500">{completedDays}/{currentChallengeData.totalDays} ngày</span>
                  </div>
                  <Progress value={progressPercentage} className="h-2 mb-2" />
                  <p className="text-xs text-gray-500">
                    {progressPercentage.toFixed(0)}% hoàn thành
                  </p>
                </CardContent>
              </Card>

              {/* Daily Challenges */}
              <div className="space-y-3">
                <h3 className="font-medium text-gray-800">📅 Thử thách hàng ngày</h3>
                {currentChallengeData.progress.map((day, index) => (
                  <Card 
                    key={index} 
                    className={`${
                      day.completed 
                        ? 'bg-green-50 border-green-200' 
                        : day.current 
                          ? 'border-2 border-blue-500 bg-blue-50' 
                          : 'opacity-60'
                    }`}
                  >
                    <CardContent className="p-3">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          day.completed 
                            ? 'bg-green-500 text-white' 
                            : day.current 
                              ? 'bg-blue-500 text-white' 
                              : 'bg-gray-200 text-gray-500'
                        }`}>
                          {day.completed ? (
                            <CheckCircle className="h-4 w-4" />
                          ) : (
                            <span className="text-sm font-bold">{day.day}</span>
                          )}
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h4 className={`text-sm font-medium ${day.completed ? 'line-through text-gray-500' : ''}`}>
                              {day.title}
                            </h4>
                            <span className="text-xs text-gray-500">{day.date}</span>
                          </div>
                          
                          {day.current && !day.completed && (
                            <div className="mt-2">
                              <Button 
                                size="sm" 
                                onClick={() => markDayComplete(index)}
                                className="h-6 text-xs"
                              >
                                <CheckCircle className="h-3 w-3 mr-1" />
                                Hoàn thành
                              </Button>
                            </div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ) : (
            <Card className="text-center py-8">
              <CardContent>
                <div className="text-4xl mb-3">🚀</div>
                <h3 className="font-medium text-gray-800 mb-2">Chưa tham gia thử thách nào</h3>
                <p className="text-sm text-gray-500 mb-4">Khám phá các thử thách sắp tới và tham gia ngay!</p>
                <Button onClick={() => setActiveTab("available")}>
                  Xem thử thách
                </Button>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="available" className="mt-4">
          <div className="space-y-3">
            {availableChallenges.map((challenge) => (
              <Card key={challenge.id} className="card-hover">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="font-medium text-sm mb-1">{challenge.title}</h3>
                      <div className="flex items-center gap-3 text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {challenge.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="h-3 w-3" />
                          {challenge.participants} người
                        </span>
                        <Badge variant="outline" className="text-xs">
                          {challenge.difficulty}
                        </Badge>
                      </div>
                    </div>
                    <Button 
                      size="sm"
                      onClick={() => joinChallenge(challenge.id)}
                      disabled={challenge.isJoined}
                    >
                      {challenge.isJoined ? "Đã tham gia" : "Tham gia"}
                    </Button>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Gift className="h-4 w-4 text-yellow-500" />
                      <span className="text-xs text-gray-600">{challenge.prize}</span>
                    </div>
                    <span className="text-xs text-gray-500">Bắt đầu {challenge.startDate}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="leaderboard" className="mt-4">
          <div className="space-y-3">
            <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200">
              <CardContent className="p-3 text-center">
                <Trophy className="h-6 w-6 text-yellow-500 mx-auto mb-1" />
                <h3 className="font-medium text-sm">Bảng xếp hạng tuần</h3>
                <p className="text-xs text-gray-600">EatClean 7 ngày</p>
              </CardContent>
            </Card>
            
            {leaderboard.map((user) => (
              <Card 
                key={user.rank} 
                className={`card-hover ${user.isUser ? 'border-2 border-blue-500 bg-blue-50' : ''}`}
              >
                <CardContent className="p-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                      user.rank === 1 ? 'bg-yellow-500 text-white' :
                      user.rank === 2 ? 'bg-gray-400 text-white' :
                      user.rank === 3 ? 'bg-orange-500 text-white' :
                      'bg-gray-200 text-gray-700'
                    }`}>
                      {user.rank <= 3 ? (
                        <Trophy className="h-4 w-4" />
                      ) : (
                        user.rank
                      )}
                    </div>
                    
                    <span className="text-lg">{user.avatar}</span>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className={`text-sm font-medium ${user.isUser ? 'text-blue-700' : ''}`}>
                          {user.name}
                          {user.isUser && <Badge className="ml-2 text-xs">Bạn</Badge>}
                        </h4>
                        <div className="text-right">
                          <p className="text-sm font-bold text-green-600">{user.score} điểm</p>
                          <p className="text-xs text-gray-500">{user.streak} ngày liên tiếp</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ChallengePage;
