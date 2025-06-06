
import { Send, Image } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface PostFormProps {
  newPost: string;
  setNewPost: (value: string) => void;
  onCreatePost: () => void;
  onCancel: () => void;
  onAddImage: () => void;
}

const PostForm = ({ newPost, setNewPost, onCreatePost, onCancel, onAddImage }: PostFormProps) => {
  return (
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
          <Button size="sm" variant="outline" onClick={onAddImage}>
            <Image className="h-4 w-4 mr-1" />
            Thêm ảnh
          </Button>
          <div className="flex gap-2">
            <Button size="sm" variant="outline" onClick={onCancel}>
              Hủy
            </Button>
            <Button size="sm" onClick={onCreatePost} disabled={!newPost.trim()}>
              <Send className="h-4 w-4 mr-1" />
              Đăng
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PostForm;
