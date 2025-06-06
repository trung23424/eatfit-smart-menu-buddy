
import { Share, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import CommunityPost from "@/components/CommunityPost";
import ChallengeCard from "@/components/ChallengeCard";
import PostForm from "@/components/PostForm";
import { CommunityPost as CommunityPostType, Challenge } from "@/types/community";

const communityPosts: CommunityPostType[] = [
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

const challenges: Challenge[] = [
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
  const [posts, setPosts] = useState<CommunityPostType[]>(communityPosts);
  const [challengeList, setChallengeList] = useState<Challenge[]>(challenges);
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

  const viewComments = (post: CommunityPostType) => {
    console.log('Viewing comments for post:', post);
    alert(`Bình luận cho bài viết của ${post.user}\n\nTính năng này sẽ hiển thị:\n- Danh sách bình luận\n- Khả năng thêm bình luận mới\n- Phản hồi bình luận`);
  };

  const sharePost = (post: CommunityPostType) => {
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
      const post: CommunityPostType = {
        id: Date.now(),
        user: "Bạn",
        avatar: "👤",
        time: "Vừa xong",
        content: newPost,
        image: "📝",
        likes: 0,
        comments: 0,
        isLiked: false,
        challenge: undefined,
        recipe: undefined,
        mealPrep: undefined
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
        <PostForm
          newPost={newPost}
          setNewPost={setNewPost}
          onCreatePost={createPost}
          onCancel={() => setShowPostForm(false)}
          onAddImage={addImage}
        />
      )}

      {/* Active Challenges */}
      <div>
        <h3 className="text-sm font-semibold text-gray-800 mb-2 flex items-center">
          <Trophy className="h-4 w-4 mr-1 text-yellow-500" />
          Thử thách đang diễn ra
        </h3>
        <div className="space-y-2">
          {challengeList.map((challenge) => (
            <ChallengeCard
              key={challenge.id}
              challenge={challenge}
              onJoinChallenge={joinChallenge}
            />
          ))}
        </div>
      </div>

      {/* Community Posts */}
      <div>
        <h3 className="text-sm font-semibold text-gray-800 mb-2">📝 Chia sẻ từ cộng đồng</h3>
        <div className="space-y-3">
          {posts.map((post) => (
            <CommunityPost
              key={post.id}
              post={post}
              onToggleLike={toggleLike}
              onViewComments={viewComments}
              onSharePost={sharePost}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;
