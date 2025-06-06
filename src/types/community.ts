
export interface CommunityPost {
  id: number;
  user: string;
  avatar: string;
  time: string;
  content: string;
  image: string;
  likes: number;
  comments: number;
  isLiked: boolean;
  challenge?: string;
  recipe?: boolean;
  mealPrep?: boolean;
}

export interface Challenge {
  id: number;
  name: string;
  participants: number;
  prize: string;
  timeLeft: string;
  isJoined: boolean;
}
