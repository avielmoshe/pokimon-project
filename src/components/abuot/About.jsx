import "./About.module.css"
import styles from "./About.module.css";


const About = () => {
    return (
      <div className={styles.container}>
        <header className={styles.header}>
          <h1>About Us</h1>
        </header>
        <main className={styles.content}>
          <section className={styles.intro}>
            <p>
              Welcome to our <span className={styles.highlight}>Pokémon Cards Website</span>, 
              a project born out of our passion for software development and the captivating world of Pokémon. 
              This platform was designed and developed as part of our journey in a Software Development course, 
              where we aimed to combine technical skills with creativity to deliver an engaging experience for fans of all ages.
            </p>
          </section>
          <section className={styles.details}>
            <h2 className="aboutH2">What Makes Our Website Special?</h2>
            <ul>
              <li><strong>Sleek Design:</strong> Built with a modern and responsive interface using advanced CSS styling, ensuring a seamless experience across all devices.</li>
              <li><strong>Interactive Features:</strong> Add cards to your favorites list and create your own personalized collection.</li>
              <li><strong>Performance Optimization:</strong> Smooth animations and optimized loading times for an enjoyable experience.</li>
              <li><strong>Scalability:</strong> A design ready to grow, with plans to expand the collection and features in the future.</li>
            </ul>
          </section>
          <section className={styles.creators}>
            <h2>A Message from the Creators</h2>
            <p>
              This project was lovingly crafted by <span className={styles.highlight}>Maor Shmueli</span> and <span className={styles.highlight}>Aviel Moshe</span>. 
              It's not just a course assignment; it's a reflection of our dedication to learning, improving, and delivering something meaningful to the Pokémon community.
            </p>
            <p className={styles.signature}>Happy Collecting!<br />– Maor & Aviel</p>
          </section>
        </main>
      </div>
    );
  };
export default About;