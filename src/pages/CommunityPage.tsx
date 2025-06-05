
import { Heart, MessageCircle, Share, Trophy, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const communityPosts = [
  {
    id: 1,
    user: "Minh Anh",
    avatar: "👩‍🦱",
    time: "2 giờ trước",
    content: "Đã hoàn thành thử thách EatClean 7 ngày! Giảm được 1.5kg và cảm thấy năng lượng hơn rất nhiều 💪",
    image: "🥗",
    likes: 24,
    comments: 8,
    challenge: "EatClean 7 ngày"
  },
  {
    id: 2,
    user: "Thanh Tùng", 
    avatar: "👨‍💼",
    time: "4 giờ trước",
    content: "Chia sẻ công thức smoothie xanh siêu nhanh cho bữa sáng bận rộn. Chỉ cần 5 phút!",
    image: "🥤",
    likes: 18,
    comments: 12,
    recipe: true
  },
  {
    id: 3,
    user: "Lan Hương",
    avatar: "👩‍🍳", 
    time: "1 ngày trước",
    content: "Meal prep cuối tuần thành công! Chuẩn bị sẵn 5 bữa trưa healthy cho tuần làm việc",
    image: "🍱",
    likes: 31,
    comments: 6,
    mealPrep: true
  }
];

const challenges = [
  {
    id: 1,
    name: "EatClean 7 ngày",
    participants: 156,
    prize: "Voucher 100k",
    timeLeft: "3 ngày"
  },
  {
    id: 2, 
    name: "Giảm 2kg/tháng",
    participants: 89,
    prize: "Tư vấn 1:1",
    timeLeft: "12 ngày"
  }
];

const CommunityPage = () => {
  return (
    <div className="p-3 space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-gray-800">Cộng đồng EatFit</h2>
          <p className="text-sm text-gray-600">Chia sẻ hành trình của bạn</p>
        </div>
        <Button size="sm" className="bg-eatfit-green">
          <Share className="h-4 w-4 mr-1" />
          Đăng
        </Button>
      </div>

      {/* Active Challenges */}
      <div>
        <h3 className="text-sm font-semibold text-gray-800 mb-2 flex items-center">
          <Trophy className="h-4 w-4 mr-1 text-yellow-500" />
          Thử thách đang diễn ra
        </h3>
        <div className="space-y-2">
          {challenges.map((challenge) => (
            <Card key={challenge.id} className="card-hover gradient-bg text-white">
              <CardContent className="p-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-medium">{challenge.name}</h4>
                    <div className="flex items-center space-x-3 text-xs text-white/80 mt-1">
                      <span className="flex items-center">
                        <Users className="h-3 w-3 mr-1" />
                        {challenge.participants} người tham gia
                      </span>
                      <span>Còn {challenge.timeLeft}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-white/80">Phần thưởng</p>
                    <p className="text-sm font-medium">{challenge.prize}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Community Posts */}
      <div>
        <h3 className="text-sm font-semibold text-gray-800 mb-2">📝 Chia sẻ từ cộng đồng</h3>
        <div className="space-y-3">
          {communityPosts.map((post) => (
            <Card key={post.id} className="card-hover">
              <CardContent className="p-3">
                {/* User Info */}
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-lg">{post.avatar}</span>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <h4 className="text-sm font-medium">{post.user}</h4>
                      {post.challenge && (
                        <span className="text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded-full">
                          {post.challenge}
                        </span>
                      )}
                      {post.recipe && (
                        <span className="text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full">
                          Công thức
                        </span>
                      )}
                      {post.mealPrep && (
                        <span className="text-xs bg-purple-100 text-purple-600 px-2 py-0.5 rounded-full">
                          Meal Prep
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-gray-500">{post.time}</p>
                  </div>
                </div>

                {/* Post Content */}
                <p className="text-sm text-gray-700 mb-2">{post.content}</p>
                
                {/* Post Image */}
                <div className="flex justify-center mb-3">
                  <div className="text-4xl">{post.image}</div>
                </div>

                {/* Actions */}
                <div className="flex items-center space-x-4 pt-2 border-t border-gray-100">
                  <button className="flex items-center space-x-1 text-gray-500 hover:text-red-500 transition-colors">
                    <Heart className="h-4 w-4" />
                    <span className="text-xs">{post.likes}</span>
                  </button>
                  <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-500 transition-colors">
                    <MessageCircle className="h-4 w-4" />
                    <span className="text-xs">{post.comments}</span>
                  </button>
                  <button className="flex items-center space-x-1 text-gray-500 hover:text-green-500 transition-colors">
                    <Share className="h-4 w-4" />
                    <span className="text-xs">Chia sẻ</span>
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;
