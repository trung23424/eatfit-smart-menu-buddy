
import { Heart, MessageSquare, Share2, Trophy } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const communityPosts = [
  {
    id: 1,
    user: {
      name: 'Minh Anh',
      avatar: '/placeholder.svg',
      achievement: 'Giảm 5kg trong 2 tháng'
    },
    content: 'Mình đã thử công thức salad quinoa từ EatFit và thật sự ngon! 🥗',
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=300&h=200&fit=crop',
    likes: 24,
    comments: 8,
    timeAgo: '2h'
  },
  {
    id: 2,
    user: {
      name: 'Tuấn Vũ',
      avatar: '/placeholder.svg',
      achievement: 'Tăng 3kg cơ bắp'
    },
    content: 'Tuần này đã hoàn thành mục tiêu tập luyện! 💪',
    image: null,
    likes: 18,
    comments: 5,
    timeAgo: '4h'
  }
];

const challenges = [
  { name: 'EatClean 7 ngày', participants: 234, daysLeft: 3 },
  { name: 'Giảm 2kg/tuần', participants: 156, daysLeft: 5 }
];

const CommunitySection = () => {
  return (
    <div className="p-3 space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold text-gray-800">🤝 Cộng đồng sống khỏe</h3>
        <Button variant="ghost" size="sm" className="text-eatfit-green text-xs">
          <Trophy className="h-3 w-3 mr-1" />
          Thử thách
        </Button>
      </div>

      {/* Challenges */}
      <div className="space-y-2">
        <h4 className="text-sm font-medium text-gray-700">🏆 Thử thách đang diễn ra</h4>
        {challenges.map((challenge, index) => (
          <Card key={index} className="card-hover bg-gradient-to-r from-blue-50 to-purple-50">
            <CardContent className="p-2">
              <div className="flex items-center justify-between">
                <div>
                  <h5 className="font-medium text-xs">{challenge.name}</h5>
                  <p className="text-xs text-gray-500">{challenge.participants} người tham gia</p>
                </div>
                <div className="text-right">
                  <p className="text-xs font-medium text-purple-600">{challenge.daysLeft} ngày</p>
                  <Button size="sm" className="h-6 text-xs">Tham gia</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {/* Posts */}
      <div className="space-y-2">
        <h4 className="text-sm font-medium text-gray-700">📝 Bài viết mới nhất</h4>
        {communityPosts.map((post) => (
          <Card key={post.id} className="card-hover">
            <CardContent className="p-3 space-y-2">
              <div className="flex items-start gap-2">
                <Avatar className="w-8 h-8">
                  <AvatarImage src={post.user.avatar} />
                  <AvatarFallback className="text-xs">{post.user.name[0]}</AvatarFallback>
                </Avatar>
                
                <div className="flex-1">
                  <div className="flex items-center gap-1">
                    <h4 className="font-medium text-xs">{post.user.name}</h4>
                    <span className="text-xs text-gray-400">• {post.timeAgo}</span>
                  </div>
                  <span className="text-xs bg-eatfit-light-green text-eatfit-green px-1 py-0.5 rounded">
                    {post.user.achievement}
                  </span>
                </div>
              </div>
              
              <p className="text-xs text-gray-700">{post.content}</p>
              
              {post.image && (
                <div className="rounded overflow-hidden">
                  <img 
                    src={post.image} 
                    alt="Post content"
                    className="w-full h-20 object-cover"
                  />
                </div>
              )}
              
              <div className="flex items-center justify-between pt-1 border-t">
                <div className="flex items-center gap-3">
                  <Button variant="ghost" size="sm" className="flex items-center gap-1 text-gray-500 h-6 p-1">
                    <Heart className="h-3 w-3" />
                    <span className="text-xs">{post.likes}</span>
                  </Button>
                  <Button variant="ghost" size="sm" className="flex items-center gap-1 text-gray-500 h-6 p-1">
                    <MessageSquare className="h-3 w-3" />
                    <span className="text-xs">{post.comments}</span>
                  </Button>
                </div>
                <Button variant="ghost" size="sm" className="text-gray-500 h-6 p-1">
                  <Share2 className="h-3 w-3" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CommunitySection;
