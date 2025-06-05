
import Header from "@/components/Header";
import WelcomeSection from "@/components/WelcomeSection";
import GoalSelector from "@/components/GoalSelector";
import MealSuggestions from "@/components/MealSuggestions";
import HealthTracker from "@/components/HealthTracker";
import AIAssistant from "@/components/AIAssistant";
import CommunitySection from "@/components/CommunitySection";
import BottomNavigation from "@/components/BottomNavigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Header />
      
      <main className="animate-fade-in">
        <WelcomeSection />
        <GoalSelector />
        <MealSuggestions />
        <HealthTracker />
        <AIAssistant />
        <CommunitySection />
      </main>
      
      <BottomNavigation />
    </div>
  );
};

export default Index;
