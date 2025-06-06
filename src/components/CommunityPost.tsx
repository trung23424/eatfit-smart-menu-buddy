
import { Heart, MessageCircle, Share } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { CommunityPost as CommunityPostType } from "@/types/community";

interface CommunityPostProps {
  post: CommunityPostType;
  onToggleLike: (postId: number) => void;
  onViewComments: (post: CommunityPostType) => void;
  onSharePost: (post: CommunityPostType) => void;
}

const CommunityPost = ({ post, onToggleLike, onViewComments, onSharePost }: CommunityPostProps) => {
  return (
    <Card className="card-hover">
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
            onClick={() => onToggleLike(post.id)}
          >
            <Heart className={`h-4 w-4 ${post.isLiked ? 'fill-current' : ''}`} />
            <span className="text-xs">{post.likes}</span>
          </button>
          <button 
            className="flex items-center space-x-1 text-gray-500 hover:text-blue-500 transition-colors"
            onClick={() => onViewComments(post)}
          >
            <MessageCircle className="h-4 w-4" />
            <span className="text-xs">{post.comments}</span>
          </button>
          <button 
            className="flex items-center space-x-1 text-gray-500 hover:text-green-500 transition-colors"
            onClick={() => onSharePost(post)}
          >
            <Share className="h-4 w-4" />
            <span className="text-xs">Chia sẻ</span>
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CommunityPost;
