
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
    <div className="p-4 space-y-4">
      <div className="flex items-center gap-2">
        <Sparkles className="h-5 w-5 text-eatfit-orange" />
        <h3 className="text-lg font-semibold text-gray-800">🤖 Trợ lý dinh dưỡng AI</h3>
      </div>
      
      <Card className="bg-gradient-to-r from-eatfit-light-green to-eatfit-light-orange border-0">
        <CardContent className="p-4 space-y-4">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-eatfit-green rounded-full flex items-center justify-center float-animation">
              <MessageCircle className="h-5 w-5 text-white" />
            </div>
            <div className="flex-1">
              <h4 className="font-medium text-sm mb-1">Chào bạn! Tôi có thể giúp gì?</h4>
              <p className="text-xs text-gray-600">
                Hỏi tôi về dinh dưỡng, công thức nấu ăn hoặc mẹo sống khỏe
              </p>
            </div>
          </div>
          
          <div className="space-y-2">
            <p className="text-xs font-medium text-gray-700">Câu hỏi gợi ý:</p>
            <div className="space-y-1">
              {suggestions.slice(0, 2).map((suggestion, index) => (
                <Button 
                  key={index}
                  variant="ghost" 
                  className="w-full justify-between text-xs h-8 bg-white/50 hover:bg-white/80"
                >
                  <span className="text-left">{suggestion}</span>
                  <ArrowRight className="h-3 w-3" />
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
