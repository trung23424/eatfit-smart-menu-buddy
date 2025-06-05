
import { Crown, Star, Gift, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const premiumFeatures = [
  {
    title: 'Thực đơn theo mùa',
    description: 'Gợi ý món ăn theo nguyên liệu tươi mùa',
    icon: Star,
    premium: true
  },
  {
    title: 'Phân tích tự động',
    description: 'AI phân tích thói quen ăn uống cá nhân',
    icon: Crown,
    premium: true
  },
  {
    title: 'Tư vấn 1:1',
    description: 'Đặt lịch với chuyên gia dinh dưỡng',
    icon: Users,
    premium: true
  }
];

const loyaltyProgram = {
  currentPoints: 1250,
  nextReward: 1500,
  rewardName: 'Voucher giảm giá 20%'
};

const PremiumFeatures = () => {
  return (
    <div className="p-3 space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold text-gray-800">⭐ Tính năng Premium</h3>
        <Button size="sm" className="text-xs bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
          <Crown className="h-3 w-3 mr-1" />
          Nâng cấp
        </Button>
      </div>

      {/* Premium Features */}
      <div className="space-y-2">
        {premiumFeatures.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <Card key={index} className="card-hover border-yellow-200 bg-gradient-to-r from-yellow-50 to-orange-50">
              <CardContent className="p-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                    <Icon className="h-4 w-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-medium text-xs">{feature.title}</h4>
                      <Badge variant="secondary" className="text-xs bg-yellow-100 text-yellow-700">
                        Premium
                      </Badge>
                    </div>
                    <p className="text-xs text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Loyalty Program */}
      <Card className="card-hover bg-gradient-to-r from-purple-50 to-pink-50">
        <CardContent className="p-3 space-y-2">
          <div className="flex items-center gap-2">
            <Gift className="h-4 w-4 text-purple-500" />
            <h4 className="font-medium text-sm">Chương trình tích điểm</h4>
          </div>
          
          <div className="space-y-1">
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-600">Điểm hiện tại</span>
              <span className="text-xs font-medium">{loyaltyProgram.currentPoints} điểm</span>
            </div>
            
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-purple-400 to-pink-400 h-2 rounded-full"
                style={{ width: `${(loyaltyProgram.currentPoints / loyaltyProgram.nextReward) * 100}%` }}
              ></div>
            </div>
            
            <p className="text-xs text-gray-500">
              Còn {loyaltyProgram.nextReward - loyaltyProgram.currentPoints} điểm để nhận {loyaltyProgram.rewardName}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PremiumFeatures;
