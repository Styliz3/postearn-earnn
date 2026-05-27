export default function App() {
  return (
    <main className="page">
      <div className="glow glowOne"></div>
      <div className="glow glowTwo"></div>
      <div className="grid"></div>

      <section className="hero">
        <div className="left">
          <div className="brand">
            <img src="/postearn-logo.png" alt="PostEarn logo" />
            <h1>
              Post<span>Earn</span>
            </h1>
          </div>

          <p className="badge">Community-powered promotion</p>

          <h2>
            Get Paid
            <br />
            <span>to Post</span>
          </h2>

          <p className="bigText">
            Promote games, servers, apps, and projects on TikTok, Instagram,
            and YouTube.
          </p>

          <p className="smallText">
            Join campaigns, create content, submit proof, and earn PayPal
            rewards from approved results.
          </p>

          <div className="buttons">
            <a href="#" className="button primary">Start Earning</a>
            <a href="#" className="button secondary">Create Campaign</a>
          </div>

          <div className="platforms">
            <span>TikTok</span>
            <span>Instagram</span>
            <span>YouTube</span>
          </div>
        </div>

        <div className="right">
          <div className="scene">
            <div className="circle"></div>

            <div className="mainCard">
              <img src="/postearn-logo.png" alt="PostEarn logo" />
              <h3>Promote. Post. Earn.</h3>
              <p>Creator campaigns for users and project owners.</p>

              <div className="stats">
                <div>
                  <small>Status</small>
                  <strong>Active</strong>
                </div>
                <div>
                  <small>Payment</small>
                  <strong>PayPal</strong>
                </div>
                <div>
                  <small>Platforms</small>
                  <strong>3</strong>
                </div>
              </div>
            </div>

            <div className="miniCard card1">
              <strong>Create Content</strong>
              <span>Post about campaigns.</span>
            </div>

            <div className="miniCard card2">
              <strong>Submit Proof</strong>
              <span>Send your post for review.</span>
            </div>

            <div className="miniCard card3">
              <strong>Get Rewarded</strong>
              <span>Approved results can earn.</span>
            </div>

            <div className="social tiktok">T</div>
            <div className="social instagram">IG</div>
            <div className="social youtube">▶</div>
          </div>
        </div>
      </section>
    </main>
  );
}
