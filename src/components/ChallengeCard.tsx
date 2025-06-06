
import { Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Challenge } from "@/types/community";

interface ChallengeCardProps {
  challenge: Challenge;
  onJoinChallenge: (challengeId: number) => void;
}

const ChallengeCard = ({ challenge, onJoinChallenge }: ChallengeCardProps) => {
  return (
    <Card className="card-hover gradient-bg text-white">
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
              onClick={() => onJoinChallenge(challenge.id)}
            >
              {challenge.isJoined ? "Đã tham gia" : "Tham gia"}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ChallengeCard;
