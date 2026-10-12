export default function Tags({ items }: { items: readonly string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((tag) => (
        <li
          key={tag}
          className="rounded-full border border-border-strong px-[11px] py-[3px] font-mono text-[11.5px] leading-normal text-fg-muted"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}
