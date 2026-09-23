import BlurFade from "@/components/magicui/blur-fade";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface Activity {
  title: string;
  description: string;
  image: string;
  className?: string;
}

interface Props {
  activities: readonly Activity[];
  delay?: number;
}

export function ActivitiesBento({ activities, delay = 0 }: Props) {
  return (
    <div className="grid grid-flow-dense grid-cols-2 auto-rows-[180px] gap-3 md:grid-cols-3 md:auto-rows-[220px]">
      {activities.map((activity, id) => (
        <BlurFade
          key={activity.title}
          delay={delay + id * 0.05}
          className={cn(
            "group relative overflow-hidden rounded-xl border bg-muted",
            activity.className
          )}
        >
          <Image
            src={activity.image}
            alt={activity.title}
            fill
            sizes="(min-width: 768px) 450px, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-3 text-white">
            <h3 className="text-sm font-semibold leading-tight">
              {activity.title}
            </h3>
            <p className="text-xs text-white/80 line-clamp-2">
              {activity.description}
            </p>
          </div>
        </BlurFade>
      ))}
    </div>
  );
}
