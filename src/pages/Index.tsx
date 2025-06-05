
import Header from "@/components/Header";
import WelcomeSection from "@/components/WelcomeSection";
import GoalSelector from "@/components/GoalSelector";
import MealSuggestions from "@/components/MealSuggestions";
import HealthTracker from "@/components/HealthTracker";
import AIAssistant from "@/components/AIAssistant";
import CommunitySection from "@/components/CommunitySection";
import BottomNavigation from "@/components/BottomNavigation";
import MobileFrame from "@/components/MobileFrame";

const Index = () => {
  return (
    <MobileFrame>
      <div className="min-h-screen bg-gray-50 pb-20 relative">
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
    </MobileFrame>
  );
};

export default Index;
