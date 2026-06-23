export default function Home() {
  return (
    <>
      <header className="header">
        <div className="brand"><div className="logo-mark">DD</div>DevenDesigns</div>
        <nav className="nav">
          <a href="#services">Services</a>
          <a href="#pricing">Pricing</a>
          <a href="#about">About</a>
          <a href="#order">Order</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero">
        <div>
          <span className="badge">Modern Country Design</span>
          <h1>Custom Logos & Wallpapers Built Around Your Vision</h1>
          <p>Clean, bold graphics for businesses, brands, sports teams, gaming pages, social media accounts, memorial designs, and personal wallpaper requests.</p>
          <div className="buttons">
            <a className="btn" href="#order">Start an Order</a>
            <a className="btn dark" href="#pricing">View Prices</a>
          </div>
        </div>
        <div className="hero-card">
          <h2>What You Can Order</h2>
          <p>✓ Custom logos</p>
          <p>✓ Phone wallpapers</p>
          <p>✓ Desktop wallpapers</p>
          <p>✓ Social media graphics</p>
          <p>✓ Special requests with image uploads</p>
        </div>
      </section>

      <section className="section" id="services">
        <h2>Services</h2>
        <p className="section-intro">Choose a custom logo, wallpaper, or full branding design. Every design is made to match your idea and style.</p>
        <div className="grid">
          <div className="card"><h3>Custom Logos</h3><p>Great for businesses, kennels, sports teams, social media pages, gaming brands, and events.</p></div>
          <div className="card"><h3>Wallpapers</h3><p>Phone and desktop wallpapers with names, photos, quotes, memorial designs, sports themes, and more.</p></div>
          <div className="card"><h3>Special Requests</h3><p>Customers can send reference pictures or ideas for exactly what they want included.</p></div>
        </div>
      </section>

      <section className="section why">
        <h2>Why Choose DevenDesigns?</h2>
        <p className="section-intro">A simple, personal design experience with fast communication and custom work made from scratch.</p>
        <div className="grid">
          <div className="card"><h3>Made From Scratch</h3><p>No cookie-cutter designs. Your logo or wallpaper is built around your idea.</p></div>
          <div className="card"><h3>Fast Turnaround</h3><p>Quick communication and efficient delivery for most custom requests.</p></div>
          <div className="card"><h3>Affordable Pricing</h3><p>Professional-looking graphics without expensive agency prices.</p></div>
        </div>
      </section>

      <section className="section about" id="about">
        <h2>About DevenDesigns</h2>
        <p className="section-intro">DevenDesigns specializes in custom logos and wallpapers for businesses, social media pages, sports teams, gaming brands, memorial designs, and personal projects. Every design is built around the customer's vision with attention to detail and direct communication.</p>
      </section>

      <section className="section" id="pricing">
        <h2>Pricing</h2>
        <div className="grid">
          <div className="card"><h3>Basic Logo</h3><p>One custom logo concept.</p><div className="price">$20</div></div>
          <div className="card"><h3>Premium Logo</h3><p>Multiple ideas plus revisions.</p><div className="price">$40</div></div>
          <div className="card"><h3>Custom Wallpaper</h3><p>Phone or desktop wallpaper.</p><div className="price">$10+</div></div>
          <div className="card"><h3>Wallpaper Pack</h3><p>Multiple matching wallpaper designs.</p><div className="price">$25</div></div>
          <div className="card"><h3>Logo + Wallpaper Bundle</h3><p>Logo plus matching wallpaper.</p><div className="price">$50</div></div>
          <div className="card"><h3>Special Request</h3><p>Custom quote depending on project.</p><div className="price">Ask</div></div>
        </div>
      </section>

      <section className="section">
        <h2>Reviews</h2>
        <div className="grid">
          <div className="card"><h3>★★★★★</h3><p>“Fast, clean, and exactly what I asked for.”</p></div>
          <div className="card"><h3>★★★★★</h3><p>“Great custom design and easy to work with.”</p></div>
          <div className="card"><h3>★★★★★</h3><p>“The wallpaper came out perfect.”</p></div>
        </div>
      </section>

      <section className="section form-section" id="order">
        <h2>Start Your Order</h2>
        <p className="section-intro">Send your idea, colors, and any reference images you want used. The form is a starter layout; next we can connect it so submissions go to your email.</p>
        <form
  action="https://formspree.io/f/maqgnvkj"
  method="POST">
<label>Your Name</label>
<input name="name" placeholder="Your name" required />
  <label>Your Email</label>
<input name="email" type="email" placeholder="Your email" required />

<label>Service Needed</label>
<select name="service">
            <option>Custom Logo</option>
            <option>Wallpaper</option>
            <option>Logo + Wallpaper Bundle</option>
            <option>Special Request</option>
          </select>
         <label>Business / Brand</label>
<input name="business" placeholder="Business / brand / page name" />
       <label>Colors Wanted</label>
<input name="colors" placeholder="Colors you want" />
         <label>Project Details</label>
<textarea name="details" placeholder="Describe your idea in detail"></textarea>
          <label>Upload Reference Image</label>
<input name="attachment" type="file" accept="image/*" />
    <input
  type="hidden"
  name="_subject"
  value="New DevenDesigns Order Request"
/>
         <button className="submit" type="submit">
  Submit Request
</button>
        </form>
        <div className="payment">
         <h3>Payments</h3>
<p>Secure payment available through PayPal or Cash App.</p>
    <a
  className="btn"
href="https://paypal.me/Deven806"
  target="_blank"
>
  Pay with PayPal
</a>
          <p><strong>PayPal:</strong> runninpeteskennels@gmail.com</p>
          <p><strong>Cash App:</strong> $DevenCurtis</p>
        </div>
      </section>

      <section className="section" id="contact">
        <h2>Contact</h2>
        <p>Email: <strong>runninpeteskennels@gmail.com</strong></p>
      </section>

      <footer className="footer"><p>© 2026 DevenDesigns. Custom Logos & Wallpapers.</p></footer>
    </>
  );
}
