
import { Heart, MessageSquare, Share2, TrendingUp } from "lucide-react";
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
    content: 'Mình đã thử công thức salad quinoa từ EatFit và thật sự ngon! Ai cũng nên thử nhé 🥗',
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=300&h=200&fit=crop',
    likes: 24,
    comments: 8,
    timeAgo: '2 giờ trước'
  },
  {
    id: 2,
    user: {
      name: 'Tuấn Vũ',
      avatar: '/placeholder.svg',
      achievement: 'Tăng 3kg cơ bắp'
    },
    content: 'Tuần này đã hoàn thành mục tiêu tập luyện! Cảm ơn EatFit đã đồng hành cùng mình 💪',
    image: null,
    likes: 18,
    comments: 5,
    timeAgo: '4 giờ trước'
  }
];

const CommunitySection = () => {
  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-800">🤝 Cộng đồng sống khỏe</h3>
        <Button variant="ghost" size="sm" className="text-eatfit-green">
          <TrendingUp className="h-4 w-4 mr-1" />
          Xu hướng
        </Button>
      </div>
      
      <div className="space-y-4">
        {communityPosts.map((post) => (
          <Card key={post.id} className="card-hover">
            <CardContent className="p-4 space-y-3">
              <div className="flex items-start gap-3">
                <Avatar className="w-10 h-10">
                  <AvatarImage src={post.user.avatar} />
                  <AvatarFallback>{post.user.name[0]}</AvatarFallback>
                </Avatar>
                
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h4 className="font-medium text-sm">{post.user.name}</h4>
                    <span className="text-xs bg-eatfit-light-green text-eatfit-green px-2 py-0.5 rounded-full">
                      {post.user.achievement}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500">{post.timeAgo}</p>
                </div>
              </div>
              
              <p className="text-sm text-gray-700">{post.content}</p>
              
              {post.image && (
                <div className="rounded-lg overflow-hidden">
                  <img 
                    src={post.image} 
                    alt="Post content"
                    className="w-full h-32 object-cover"
                  />
                </div>
              )}
              
              <div className="flex items-center justify-between pt-2 border-t">
                <div className="flex items-center gap-4">
                  <Button variant="ghost" size="sm" className="flex items-center gap-1 text-gray-500 h-8">
                    <Heart className="h-4 w-4" />
                    <span className="text-xs">{post.likes}</span>
                  </Button>
                  <Button variant="ghost" size="sm" className="flex items-center gap-1 text-gray-500 h-8">
                    <MessageSquare className="h-4 w-4" />
                    <span className="text-xs">{post.comments}</span>
                  </Button>
                </div>
                <Button variant="ghost" size="sm" className="text-gray-500 h-8">
                  <Share2 className="h-4 w-4" />
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
