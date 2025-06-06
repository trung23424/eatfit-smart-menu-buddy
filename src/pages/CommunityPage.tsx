
import { Heart, MessageCircle, Share, Trophy, Users, Send, Image } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

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
    challenge: "EatClean 7 ngày",
    isLiked: false
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
    recipe: true,
    isLiked: true
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
    mealPrep: true,
    isLiked: false
  }
];

const challenges = [
  {
    id: 1,
    name: "EatClean 7 ngày",
    participants: 156,
    prize: "Voucher 100k",
    timeLeft: "3 ngày",
    isJoined: false
  },
  {
    id: 2, 
    name: "Giảm 2kg/tháng",
    participants: 89,
    prize: "Tư vấn 1:1",
    timeLeft: "12 ngày",
    isJoined: true
  }
];

const CommunityPage = () => {
  const [posts, setPosts] = useState(communityPosts);
  const [challengeList, setChallengeList] = useState(challenges);
  const [newPost, setNewPost] = useState("");
  const [showPostForm, setShowPostForm] = useState(false);

  const toggleLike = (postId: number) => {
    setPosts(prev => prev.map(post => 
      post.id === postId 
        ? { 
            ...post, 
            isLiked: !post.isLiked,
            likes: post.isLiked ? post.likes - 1 : post.likes + 1
          }
        : post
    ));
    console.log('Toggled like for post:', postId);
  };

  const viewComments = (post: any) => {
    console.log('Viewing comments for post:', post);
    alert(`Bình luận cho bài viết của ${post.user}\n\nTính năng này sẽ hiển thị:\n- Danh sách bình luận\n- Khả năng thêm bình luận mới\n- Phản hồi bình luận`);
  };

  const sharePost = (post: any) => {
    console.log('Sharing post:', post);
    alert(`Chia sẻ bài viết của ${post.user}\n\nBài viết đã được sao chép vào clipboard!\n\nBạn có thể chia sẻ qua:\n- Mạng xã hội\n- Tin nhắn\n- Email`);
  };

  const joinChallenge = (challengeId: number) => {
    setChallengeList(prev => prev.map(challenge => 
      challenge.id === challengeId 
        ? { 
            ...challenge, 
            isJoined: !challenge.isJoined,
            participants: challenge.isJoined 
              ? challenge.participants - 1 
              : challenge.participants + 1
          }
        : challenge
    ));
    console.log('Toggled challenge participation:', challengeId);
  };

  const createPost = () => {
    if (newPost.trim()) {
      const post = {
        id: Date.now(),
        user: "Bạn",
        avatar: "👤",
        time: "Vừa xong",
        content: newPost,
        image: "📝",
        likes: 0,
        comments: 0,
        isLiked: false
      };
      setPosts(prev => [post, ...prev]);
      setNewPost("");
      setShowPostForm(false);
      console.log('New post created:', post);
    }
  };

  const addImage = () => {
    console.log('Adding image to post');
    alert('Thêm hình ảnh\n\nTính năng này sẽ cho phép bạn:\n- Chọn ảnh từ thiết bị\n- Chụp ảnh mới\n- Thêm filter và chỉnh sửa');
  };

  return (
    <div className="p-3 space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-gray-800">Cộng đồng EatFit</h2>
          <p className="text-sm text-gray-600">Chia sẻ hành trình của bạn</p>
        </div>
        <Button 
          size="sm" 
          className="bg-eatfit-green"
          onClick={() => setShowPostForm(!showPostForm)}
        >
          <Share className="h-4 w-4 mr-1" />
          Đăng
        </Button>
      </div>

      {/* Post Form */}
      {showPostForm && (
        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="p-3 space-y-3">
            <textarea
              placeholder="Chia sẻ hành trình healthy của bạn..."
              className="w-full p-2 border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-eatfit-green/50"
              rows={3}
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
            />
            <div className="flex justify-between">
              <Button size="sm" variant="outline" onClick={addImage}>
                <Image className="h-4 w-4 mr-1" />
                Thêm ảnh
              </Button>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" onClick={() => setShowPostForm(false)}>
                  Hủy
                </Button>
                <Button size="sm" onClick={createPost} disabled={!newPost.trim()}>
                  <Send className="h-4 w-4 mr-1" />
                  Đăng
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Active Challenges */}
      <div>
        <h3 className="text-sm font-semibold text-gray-800 mb-2 flex items-center">
          <Trophy className="h-4 w-4 mr-1 text-yellow-500" />
          Thử thách đang diễn ra
        </h3>
        <div className="space-y-2">
          {challengeList.map((challenge) => (
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
                  <div className="flex flex-col items-end gap-2">
                    <div className="text-right">
                      <p className="text-xs text-white/80">Phần thưởng</p>
                      <p className="text-sm font-medium">{challenge.prize}</p>
                    </div>
                    <Button 
                      size="sm" 
                      variant={challenge.isJoined ? "secondary" : "outline"}
                      className="text-xs"
                      onClick={() => joinChallenge(challenge.id)}
                    >
                      {challenge.isJoined ? "Đã tham gia" : "Tham gia"}
                    </Button>
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
          {posts.map((post) => (
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
                  <button 
                    className={`flex items-center space-x-1 transition-colors ${
                      post.isLiked ? 'text-red-500' : 'text-gray-500 hover:text-red-500'
                    }`}
                    onClick={() => toggleLike(post.id)}
                  >
                    <Heart className={`h-4 w-4 ${post.isLiked ? 'fill-current' : ''}`} />
                    <span className="text-xs">{post.likes}</span>
                  </button>
                  <button 
                    className="flex items-center space-x-1 text-gray-500 hover:text-blue-500 transition-colors"
                    onClick={() => viewComments(post)}
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span className="text-xs">{post.comments}</span>
                  </button>
                  <button 
                    className="flex items-center space-x-1 text-gray-500 hover:text-green-500 transition-colors"
                    onClick={() => sharePost(post)}
                  >
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
