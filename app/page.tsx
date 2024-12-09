import { LandingPage } from "@/components/landing/LandingPage";
import PetSimulator from "@/components/petSimulator/PetSimulator";
import { SubscriptionPlans } from "@/components/subscriptionPlans/SubscriptionPlans";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <PetSimulator />
      {/*<PetSimulator />
      <SubscriptionPlans />
      <LandingPage />*/}
    </div>
  );
}
