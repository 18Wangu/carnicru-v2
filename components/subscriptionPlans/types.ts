export interface PlanCardProps {
  title: string;
  price: string;
  imageSrc: string;
  onChoose: () => void;
}

export interface PortionDetailsProps {
  companionName: string;
  portionAmount: number;
  meatPercentage: number;
  bonePercentage: number;
  organsPercentage: number;
}

export interface SubscriptionPlan {
  title: string;
  price: string;
  imageSrc: string;
  url: string;
}
