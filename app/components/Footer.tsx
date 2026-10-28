import Link from "next/link";

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-inner">
                <div className="footer-brand">
                    <Link href="/" className="logo">
                        Shop<span>Nest</span>
                    </Link>

                    <p>
                        Discover everyday essentials and find something
                        you will love.
                    </p>

                    <div className="footer-highlight">
                        <span>✦</span>
                        <p>Good finds. Great prices. Happy living.</p>
                    </div>
                </div>

                <div className="footer-socials">
                    <a
                        href="https://www.instagram.com/"
                        aria-label="Instagram"
                        target="_blank"
                        rel="noreferrer"
                        className="social-instagram"
                    >
                        ig
                    </a>
                    <a
                        href="https://www.facebook.com/"
                        aria-label="Facebook"
                        target="_blank"
                        rel="noreferrer"
                        className="social-facebook"
                    >
                        f
                    </a>
                    <a
                        href="https://www.pinterest.com/"
                        aria-label="Pinterest"
                        target="_blank"
                        rel="noreferrer"
                        className="social-pinterest"
                    >
                        p
                    </a>
                </div>

                <div className="footer-bottom">
                    <p>© 2026 ShopNest. All rights reserved.</p>
                    <span>
                        Made with <span className="footer-heart">♥</span>
                    </span>
                </div>
            </div>
        </footer>
    );
}