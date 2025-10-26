export function StatsStrip() {
  const stats = [
    {
      label: "Active Players",
      value: "200+",
      description: "Training across all age groups",
    },
    {
      label: "Years Coaching",
      value: "10+",
      description: "Of excellence in cricket development",
    },
    {
      label: "Success Rate",
      value: "90%",
      description: "Players improving their skills",
    },
  ];

  return (
    <section className="py-16 border-y bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {stats.map((stat, index) => (
          <div key={index} className="space-y-2">
            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-bangladesh-green to-bangladesh-red bg-clip-text text-transparent">
              {stat.value}
            </div>
            <div className="text-lg font-semibold">{stat.label}</div>
            <div className="text-sm text-muted-foreground">{stat.description}</div>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
}
