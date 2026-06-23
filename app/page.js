export default function Home() {
  return (
    <>
      <header className="header">
        <div className="brand">DevenDesigns</div>
        <nav className="nav">
          <a href="#services">Services</a>
          <a href="#pricing">Pricing</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#order">Order</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero">
        <div>
          <span className="badge">Country + Modern Design</span>
          <h1>Custom Logos & Wallpapers Built Around Your Vision</h1>
          <p>
            DevenDesigns creates clean, bold graphics for businesses, brands,
            sports teams, gaming pages, social media accounts, and personal wallpaper requests.
          </p>
          <div className="buttons">
            <a className="btn" href="#order">Start an Order</a>
            <a className="btn dark" href="#pricing">View Prices</a>
          </div>
        </div>

        <div className="hero-card">
          <h2>What You Can Order</h2>
          <p>✔ Custom logos</p>
          <p>✔ Phone wallpapers</p>
          <p>✔ Desktop wallpapers</p>
          <p>✔ Social media graphics</p>
          <p>✔ Special requests with image uploads</p>
        </div>
      </section>

      <section className="section" id="services">
        <h2>Services</h2>
        <p className="section-intro">
          Choose a custom logo, wallpaper, or full branding design. Every design is made to match your idea and style.
        </p>
        <div className="grid">
          <div className="card">
            <h3>Custom Logos</h3>
            <p>Great for businesses, kennels, sports teams, social media pages, gaming brands, and events.</p>
          </div>
          <div className="card">
            <h3>Wallpapers</h3>
            <p>Phone and desktop wallpapers with names, photos, quotes, memorial designs, sports themes, and more.</p>
          </div>
          <div className="card">
            <h3>Special Requests</h3>
            <p>Customers can send reference pictures or ideas for exactly what they want included.</p>
          </div>
        </div>
      </section>

      <section className="section" id="pricing">
        <h2>Pricing</h2>
        <div className="grid">
          <div className="card">
            <h3>Basic Logo</h3>
            <p>One custom logo concept.</p>
            <div className="price">$20</div>
          </div>
          <div className="card">
            <h3>Premium Logo</h3>
            <p>Multiple ideas plus revisions.</p>
            <div className="price">$40</div>
          </div>
          <div className="card">
            <h3>Wallpaper</h3>
            <p>Custom phone or desktop wallpaper.</p>
            <div className="price">$10+</div>
          </div>
        </div>
      </section>

      <section className="section" id="portfolio">
        <h2>Portfolio</h2>
        <p className="section-intro">Add your finished designs here later. These boxes are placeholders for now.</p>
        <div className="grid">
          <div className="gallery-box">Logo Example Coming Soon</div>
          <div className="gallery-box">Wallpaper Example Coming Soon</div>
          <div className="gallery-box">Brand Design Coming Soon</div>
        </div>
      </section>

      <section className="section">
        <h2>Reviews</h2>
        <div className="grid">
          <div className="card">
            <h3>★★★★★</h3>
            <p>“Fast, clean, and exactly what I asked for.”</p>
          </div>
          <div className="card">
            <h3>★★★★★</h3>
            <p>“Great custom design and easy to work with.”</p>
          </div>
          <div className="card">
            <h3>★★★★★</h3>
            <p>“The wallpaper came out perfect.”</p>
          </div>
        </div>
      </section>

      <section className="section form-section" id="order">
        <h2>Start Your Order</h2>
        <p className="section-intro">
          Fill this out, then email your details or attach reference images. File upload is shown here as a design feature;
          to make it actually send files, connect Formspree, Netlify Forms, or a backend later.
        </p>

        <form>
          <input placeholder="Your name" />
          <input placeholder="Your email" />
          <select>
            <option>Custom Logo</option>
            <option>Wallpaper</option>
            <option>Logo + Wallpaper Bundle</option>
            <option>Special Request</option>
          </select>
          <input placeholder="Business / brand / page name" />
          <input placeholder="Colors you want" />
          <textarea placeholder="Describe your idea in detail"></textarea>
          <input type="file" />
          <button className="submit" type="button">Submit Request</button>
        </form>

        <div className="payment">
          <h3>Payments</h3>
          <p><strong>PayPal:</strong> runninpeteskennels@gmail.com</p>
          <p><strong>Cash App:</strong> $DevenCurtis</p>
          <p>After you submit your request, payment can be completed through PayPal or Cash App.</p>
        </div>
      </section>

      <section className="section" id="contact">
        <h2>Contact</h2>
        <p>Email: <strong>runninpeteskennels@gmail.com</strong></p>
        <p>Live chat can be added later by pasting a free Tawk.to chat widget code into this site.</p>
      </section>

      <footer className="footer">
        <p>© 2026 DevenDesigns. Custom Logos & Wallpapers.</p>
      </footer>
    </>
  );
}
