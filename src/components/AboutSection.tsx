const AboutSection = () => {
  return (
    <section id="about" className="py-16 gradient-warm">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-8">
            About Market Diner
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-left">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Since opening our doors, Market Diner has been a cornerstone of the community, 
                serving up classic American comfort food with a commitment to fresh, 
                quality ingredients and made-to-order excellence.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our family-owned diner takes pride in creating an atmosphere where friends 
                and families can gather to enjoy hearty meals, warm hospitality, and the 
                kind of service that makes you feel right at home.
              </p>
              
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">100+</div>
                  <p className="text-sm text-muted-foreground">Menu Items</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">Fresh</div>
                  <p className="text-sm text-muted-foreground">Daily Ingredients</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="card-diner p-6">
                <h3 className="font-heading font-semibold text-xl mb-4 text-primary">
                  Our Promise
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>Fresh ingredients sourced daily from local suppliers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>Made-to-order dishes prepared with care and attention</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>Warm, friendly service that treats every guest like family</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>Classic comfort food that brings people together</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;