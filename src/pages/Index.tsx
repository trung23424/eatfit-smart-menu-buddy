
import { useState } from "react";
import Header from "@/components/Header";
import WelcomeSection from "@/components/WelcomeSection";
import GoalSelector from "@/components/GoalSelector";
import MealSuggestions from "@/components/MealSuggestions";
import HealthTracker from "@/components/HealthTracker";
import AIAssistant from "@/components/AIAssistant";
import CommunitySection from "@/components/CommunitySection";
import BottomNavigation from "@/components/BottomNavigation";
import MobileFrame from "@/components/MobileFrame";
import NutritionTracker from "@/components/NutritionTracker";
import PersonalizedNotifications from "@/components/PersonalizedNotifications";
import ProgressReports from "@/components/ProgressReports";
import PremiumFeatures from "@/components/PremiumFeatures";

// Import các trang mới
import SearchPage from "./SearchPage";
import CalendarPage from "./CalendarPage";
import CommunityPage from "./CommunityPage";
import ProfilePage from "./ProfilePage";

const Index = () => {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'search':
        return <SearchPage />;
      case 'calendar':
        return <CalendarPage />;
      case 'community':
        return <CommunityPage />;
      case 'profile':
        return <ProfilePage />;
      default:
        return (
          <main className="animate-fade-in">
            <WelcomeSection />
            <GoalSelector />
            <MealSuggestions />
            <NutritionTracker />
            <HealthTracker />
            <PersonalizedNotifications />
            <AIAssistant />
            <CommunitySection />
            <ProgressReports />
            <PremiumFeatures />
          </main>
        );
    }
  };

  return (
    <MobileFrame>
      <div className="min-h-screen bg-gray-50 relative">
        <Header />
        
        <div className="pb-16">
          {renderContent()}
        </div>
        
        <BottomNavigation activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
    </MobileFrame>
  );
};

export default Index;
