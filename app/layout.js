import '../styles/global.css';

export const metadata = {
  title: 'Flashcard SaaS - Revolutionize Your Learning',
  description: 'The easiest way to create and manage flashcards for your quizzes and study sessions.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="page-container">
          <header>
            <nav>
              <div className="logo">
                <a href="/">Flashcard SaaS</a>
              </div>
              <div className="menu">
                <a href="/features">Features</a>
                <a href="/pricing">Pricing</a>
                <a href="/contact">Contact</a>
                <a href="/sign-in">Sign In</a>
                <a href="/sign-up">Sign Up</a>
              </div>
            </nav>
          </header>
          <main className="content-wrap">{children}</main>
          <footer className="footer">
            <p>&copy; 2024 Flashcard SaaS. All rights reserved.</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
