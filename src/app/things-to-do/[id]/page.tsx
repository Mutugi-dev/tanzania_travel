import { ACTIVITIES } from "@/data/activities";
import ActivityDetailsClient from "@/components/ActivityDetailsClient";

export async function generateStaticParams() {
  return ACTIVITIES.map((act) => ({
    id: act.id,
  }));
}

export default async function ActivitySubpage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const activity = ACTIVITIES.find(a => a.id === id);
  return <ActivityDetailsClient activity={activity} />;
}
