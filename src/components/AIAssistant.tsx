
import { MessageCircle, Sparkles, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const suggestions = [
  "Món ăn nào phù hợp với người tiểu đường?",
  "Cách nấu salad quinoa đơn giản?",
  "Thực đơn giảm cân tuần này",
  "Thay thế đường bằng gì tốt nhất?"
];

const AIAssistant = () => {
  return (
    <div className="p-3 space-y-3">
      <div className="flex items-center gap-2">
        <Sparkles className="h-4 w-4 text-eatfit-orange" />
        <h3 className="text-base font-semibold text-gray-800">🤖 Trợ lý dinh dưỡng AI</h3>
      </div>
      
      <Card className="bg-gradient-to-r from-eatfit-light-green to-eatfit-light-orange border-0">
        <CardContent className="p-3 space-y-3">
          <div className="flex items-start gap-2">
            <div className="w-8 h-8 bg-eatfit-green rounded-full flex items-center justify-center float-animation">
              <MessageCircle className="h-4 w-4 text-white" />
            </div>
            <div className="flex-1">
              <h4 className="font-medium text-xs mb-1">Chào bạn! Tôi có thể giúp gì?</h4>
              <p className="text-xs text-gray-600">
                Hỏi tôi về dinh dưỡng, công thức nấu ăn hoặc mẹo sống khỏe
              </p>
            </div>
          </div>
          
          <div className="space-y-1">
            <p className="text-xs font-medium text-gray-700">Câu hỏi gợi ý:</p>
            <div className="space-y-1">
              {suggestions.slice(0, 2).map((suggestion, index) => (
                <Button 
                  key={index}
                  variant="ghost" 
                  className="w-full justify-between text-xs h-6 bg-white/50 hover:bg-white/80"
                >
                  <span className="text-left text-xs">{suggestion}</span>
                  <ArrowRight className="h-2 w-2" />
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AIAssistant;
