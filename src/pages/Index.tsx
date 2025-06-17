
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
import DietarySurvey from "@/components/DietarySurvey";
import PersonalizedMealPlan from "@/components/PersonalizedMealPlan";
import DetailedHealthTracking from "@/components/DetailedHealthTracking";

// Import các trang mới
import SearchPage from "./SearchPage";
import CalendarPage from "./CalendarPage";
import CommunityPage from "./CommunityPage";
import ProfilePage from "./ProfilePage";
import DashboardPage from "./DashboardPage";
import DiaryPage from "./DiaryPage";
import RecipePage from "./RecipePage";
import ChallengePage from "./ChallengePage";

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
      case 'dashboard':
        return <DashboardPage />;
      case 'diary':
        return <DiaryPage />;
      case 'recipe':
        return <RecipePage />;
      case 'challenge':
        return <ChallengePage />;
      default:
        return (
          <main className="animate-fade-in">
            <WelcomeSection />
            <DietarySurvey />
            <PersonalizedMealPlan />
            <GoalSelector />
            <MealSuggestions />
            <NutritionTracker />
            <DetailedHealthTracking />
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
    <MobileFrame 
      bottomNavigation={
        <BottomNavigation activeTab={activeTab} onTabChange={setActiveTab} />
      }
    >
      <div className="min-h-screen bg-gray-50 relative">
        <Header />
        <div>
          {renderContent()}
        </div>
      </div>
    </MobileFrame>
  );
};

export default Index;
