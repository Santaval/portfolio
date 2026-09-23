import { Badge } from "@/components/ui/badge";
import BlurFade from "@/components/magicui/blur-fade";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";

interface Props {
  index: number;
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
}

export function ProjectShowcase({
  index,
  title,
  href,
  description,
  dates,
  tags,
  image,
  video,
  links,
}: Props) {
  const reversed = index % 2 === 1;

  return (
    <article className="flex min-h-[100svh] w-full items-center border-t py-16 sm:py-24">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-6 lg:grid-cols-2 lg:gap-16">
        <BlurFade
          inView
          className={cn("flex flex-col gap-5", reversed && "lg:order-2")}
        >
          <div className="flex items-center gap-3">
            <span className="font-sans text-sm tabular-nums text-muted-foreground">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="h-px w-8 bg-border" />
            <time className="font-sans text-xs uppercase tracking-widest text-muted-foreground">
              {dates}
            </time>
          </div>

          <h3 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl">
            {title}
          </h3>

          <Markdown className="prose prose-sm max-w-prose text-pretty font-sans text-muted-foreground dark:prose-invert">
            {description}
          </Markdown>

          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {tags.map((tag) => (
                <Badge
                  className="px-2 py-0.5 text-xs"
                  variant="secondary"
                  key={tag}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          )}

          {links && links.length > 0 && (
            <div className="flex flex-row flex-wrap items-center gap-2 pt-1">
              {links.map((link, idx) => (
                <Link href={link.href} key={idx} target="_blank">
                  <Badge className="flex gap-2 px-3 py-1.5 text-xs">
                    {link.icon}
                    {link.type}
                  </Badge>
                </Link>
              ))}
            </div>
          )}
        </BlurFade>

        <BlurFade
          inView
          delay={0.1}
          className={cn("w-full", reversed && "lg:order-1")}
        >
          <Link
            href={href || "#"}
            target={href ? "_blank" : undefined}
            className="group block overflow-hidden rounded-xl border bg-muted shadow-sm transition-all duration-300 ease-out hover:shadow-xl"
          >
            {video ? (
              <video
                src={video}
                autoPlay
                loop
                muted
                playsInline
                className="pointer-events-none aspect-[16/10] w-full object-cover object-top"
              />
            ) : image ? (
              <Image
                src={image}
                alt={title}
                width={1600}
                height={1000}
                className="aspect-[16/10] w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.02]"
              />
            ) : null}
          </Link>
        </BlurFade>
      </div>
    </article>
  );
}
