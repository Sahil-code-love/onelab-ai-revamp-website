const OurCustomers = () => {
  const customers = [
    { name: "Microsoft", logo: "https://logo.clearbit.com/microsoft.com" },
    { name: "Google", logo: "https://logo.clearbit.com/google.com" },
    { name: "Amazon", logo: "https://logo.clearbit.com/amazon.com" },
    { name: "Apple", logo: "https://logo.clearbit.com/apple.com" },
    { name: "Meta", logo: "https://logo.clearbit.com/meta.com" },
    { name: "Netflix", logo: "https://logo.clearbit.com/netflix.com" },
    { name: "Tesla", logo: "https://logo.clearbit.com/tesla.com" },
    { name: "Uber", logo: "https://logo.clearbit.com/uber.com" },
    { name: "Airbnb", logo: "https://logo.clearbit.com/airbnb.com" },
    { name: "Spotify", logo: "https://logo.clearbit.com/spotify.com" },
    { name: "Adobe", logo: "https://logo.clearbit.com/adobe.com" },
    { name: "Oracle", logo: "https://logo.clearbit.com/oracle.com" },
    { name: "Salesforce", logo: "https://logo.clearbit.com/salesforce.com" },
    { name: "IBM", logo: "https://logo.clearbit.com/ibm.com" },
    { name: "Intel", logo: "https://logo.clearbit.com/intel.com" },
    { name: "NVIDIA", logo: "https://logo.clearbit.com/nvidia.com" }
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
            <div className="flex animate-scroll-right-slower space-x-16 w-fit">
              {[...customers, ...customers].map((customer, index) => (
                <div
                  key={`row1-${index}`}
                  className="flex-shrink-0 h-24 w-48 bg-card border border-border rounded-lg flex flex-col items-center justify-center shadow-sm hover:shadow-md transition-shadow p-4"
                >
                  <img 
                    src={customer.logo} 
                    alt={`${customer.name} logo`}
                    className="h-8 w-auto object-contain mb-2"
                    onError={(e) => {
                      e.currentTarget.src = `https://ui-avatars.com/api/?name=${customer.name}&background=random&color=fff&size=32`;
                    }}
                  />
                  <span className="text-muted-foreground font-medium text-xs text-center">
                    {customer.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Second row - scrolling left */}
          <div className="overflow-hidden">
            <div className="flex animate-scroll-left-slower space-x-16 w-fit">
              {[...customers.reverse(), ...customers.reverse()].map((customer, index) => (
                <div
                  key={`row2-${index}`}
                  className="flex-shrink-0 h-24 w-48 bg-card border border-border rounded-lg flex flex-col items-center justify-center shadow-sm hover:shadow-md transition-shadow p-4"
                >
                  <img 
                    src={customer.logo} 
                    alt={`${customer.name} logo`}
                    className="h-8 w-auto object-contain mb-2"
                    onError={(e) => {
                      e.currentTarget.src = `https://ui-avatars.com/api/?name=${customer.name}&background=random&color=fff&size=32`;
                    }}
                  />
                  <span className="text-muted-foreground font-medium text-xs text-center">
                    {customer.name}
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