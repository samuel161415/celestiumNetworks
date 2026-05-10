export function Placeholder({ title, description }: { title: string; description: string }) {
  return (
    <div className="p-4 lg:p-6">
      <div className="rounded-lg border border-border bg-background-lighter p-8 flex flex-col gap-2">
        <h1 className="text-xl font-semibold">{title}</h1>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
