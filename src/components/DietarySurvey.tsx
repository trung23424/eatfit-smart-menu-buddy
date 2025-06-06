
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Circle, ArrowRight } from "lucide-react";

const surveyQuestions = [
  {
    id: 'goal',
    question: 'Mục tiêu chính của bạn là gì?',
    options: [
      { id: 'weight-loss', label: 'Giảm cân', emoji: '⚖️' },
      { id: 'muscle-gain', label: 'Tăng cơ bắp', emoji: '💪' },
      { id: 'maintain', label: 'Duy trì sức khỏe', emoji: '🎯' },
      { id: 'energy', label: 'Tăng năng lượng', emoji: '⚡' }
    ]
  },
  {
    id: 'diet-type',
    question: 'Bạn có chế độ ăn đặc biệt nào không?',
    options: [
      { id: 'normal', label: 'Ăn bình thường', emoji: '🍽️' },
      { id: 'vegetarian', label: 'Ăn chay', emoji: '🥗' },
      { id: 'vegan', label: 'Thuần chay', emoji: '🌱' },
      { id: 'keto', label: 'Keto', emoji: '🥑' },
      { id: 'low-carb', label: 'Ít carb', emoji: '🥩' }
    ]
  },
  {
    id: 'allergies',
    question: 'Bạn có dị ứng hoặc không thể ăn gì không?',
    options: [
      { id: 'none', label: 'Không có', emoji: '✅' },
      { id: 'dairy', label: 'Sữa và chế phẩm', emoji: '🥛' },
      { id: 'nuts', label: 'Các loại hạt', emoji: '🥜' },
      { id: 'seafood', label: 'Hải sản', emoji: '🦐' },
      { id: 'gluten', label: 'Gluten', emoji: '🌾' }
    ]
  },
  {
    id: 'activity',
    question: 'Mức độ hoạt động của bạn?',
    options: [
      { id: 'sedentary', label: 'Ít vận động', emoji: '🛋️' },
      { id: 'light', label: 'Vận động nhẹ', emoji: '🚶' },
      { id: 'moderate', label: 'Vận động vừa', emoji: '🏃' },
      { id: 'active', label: 'Vận động nhiều', emoji: '🏋️' }
    ]
  }
];

const DietarySurvey = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isCompleted, setIsCompleted] = useState(false);

  const handleAnswer = (questionId: string, answerId: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: answerId }));
  };

  const nextQuestion = () => {
    if (currentQuestion < surveyQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const resetSurvey = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setIsCompleted(false);
  };

  if (isCompleted) {
    return (
      <div className="p-3 space-y-3">
        <Card className="text-center gradient-bg text-white">
          <CardContent className="p-4 space-y-3">
            <div className="text-4xl">🎉</div>
            <h3 className="text-lg font-semibold">Khảo sát hoàn thành!</h3>
            <p className="text-sm text-white/90">
              Chúng tôi đã tạo thực đơn cá nhân phù hợp với bạn
            </p>
            <Button 
              onClick={resetSurvey} 
              variant="secondary" 
              size="sm"
              className="mt-3"
            >
              Làm lại khảo sát
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const question = surveyQuestions[currentQuestion];
  const selectedAnswer = answers[question.id];

  return (
    <div className="p-3 space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold text-gray-800">
          📋 Khảo sát nhu cầu ăn uống
        </h3>
        <Badge variant="secondary">
          {currentQuestion + 1}/{surveyQuestions.length}
        </Badge>
      </div>

      <Card>
        <CardContent className="p-4 space-y-4">
          <h4 className="font-medium text-sm">{question.question}</h4>
          
          <div className="space-y-2">
            {question.options.map((option) => {
              const isSelected = selectedAnswer === option.id;
              
              return (
                <button
                  key={option.id}
                  onClick={() => handleAnswer(question.id, option.id)}
                  className={`w-full flex items-center gap-3 p-3 rounded-lg border transition-colors ${
                    isSelected 
                      ? 'border-eatfit-green bg-green-50' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  {isSelected ? (
                    <CheckCircle className="h-5 w-5 text-eatfit-green" />
                  ) : (
                    <Circle className="h-5 w-5 text-gray-400" />
                  )}
                  <span className="text-lg">{option.emoji}</span>
                  <span className="text-sm font-medium">{option.label}</span>
                </button>
              );
            })}
          </div>

          <Button 
            onClick={nextQuestion}
            disabled={!selectedAnswer}
            className="w-full"
          >
            {currentQuestion === surveyQuestions.length - 1 ? 'Hoàn thành' : 'Tiếp theo'}
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default DietarySurvey;
