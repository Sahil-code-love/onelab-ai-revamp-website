const OurCustomers = () => {
  const customers = [
    "Microsoft", "Google", "Amazon", "Apple", "Meta", "Netflix", "Tesla", "Uber",
    "Airbnb", "Spotify", "Adobe", "Oracle", "Salesforce", "IBM", "Intel", "NVIDIA"
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-space-grotesk font-bold text-foreground mb-4">
            Our Customers
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Trusted by innovative companies worldwide
          </p>
        </div>

        <div className="space-y-8">
          {/* First row - scrolling right */}
          <div className="overflow-hidden">
            <div className="flex animate-scroll-right space-x-12 w-fit">
              {[...customers, ...customers].map((customer, index) => (
                <div
                  key={`row1-${index}`}
                  className="flex-shrink-0 h-16 w-40 bg-card border border-border rounded-lg flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
                >
                  <span className="text-muted-foreground font-medium text-sm">
                    {customer}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Second row - scrolling left */}
          <div className="overflow-hidden">
            <div className="flex animate-scroll-left space-x-12 w-fit">
              {[...customers.reverse(), ...customers.reverse()].map((customer, index) => (
                <div
                  key={`row2-${index}`}
                  className="flex-shrink-0 h-16 w-40 bg-card border border-border rounded-lg flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
                >
                  <span className="text-muted-foreground font-medium text-sm">
                    {customer}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurCustomers;