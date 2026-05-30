import Image from "next/image";

type ProjectCardProps = {
  title: string;
  desc: string;
  tags?: string[];
  image?: string;
  imageAlt?: string;
  href?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  repo?: string;
};

export default function ProjectCard({
  title,
  desc,
  tags = [],
  image,
  imageAlt,
  href,
  secondaryHref,
  secondaryLabel = "View site",
  repo,
}: ProjectCardProps) {
  return (
    <article className="card flex h-full flex-col gap-4 overflow-hidden p-0">
      {image && (
        <Image
          src={image}
          alt={imageAlt ?? `${title} preview`}
          width={1200}
          height={675}
          className="aspect-[16/9] w-full object-cover"
        />
      )}

      <div className="flex flex-1 flex-col gap-4 p-5">
      <div>
        <h2 className="text-lg font-semibold text-foreground">{title}</h2>
        <p className="mt-2 text-sm text-muted">{desc}</p>
      </div>

      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {(href || secondaryHref || repo) && (
        <div className="mt-auto flex flex-wrap gap-3 text-sm font-medium">
          {href && (
            <a href={href} target="_blank" rel="noreferrer">
              View live
            </a>
          )}
          {secondaryHref && (
            <a href={secondaryHref} target="_blank" rel="noreferrer">
              {secondaryLabel}
            </a>
          )}
          {repo && (
            <a href={repo} target="_blank" rel="noreferrer">
              Source
            </a>
          )}
        </div>
      )}
      </div>
    </article>
  );
}
