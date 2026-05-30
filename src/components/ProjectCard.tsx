type ProjectCardProps = {
  title: string;
  desc: string;
  tags?: string[];
  href?: string;
  repo?: string;
};

export default function ProjectCard({
  title,
  desc,
  tags = [],
  href,
  repo,
}: ProjectCardProps) {
  return (
    <article className="card flex h-full flex-col gap-4">
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

      {(href || repo) && (
        <div className="mt-auto flex flex-wrap gap-3 text-sm font-medium">
          {href && (
            <a href={href} target="_blank" rel="noreferrer">
              View live
            </a>
          )}
          {repo && (
            <a href={repo} target="_blank" rel="noreferrer">
              Source
            </a>
          )}
        </div>
      )}
    </article>
  );
}
