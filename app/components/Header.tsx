import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="site-header">
      <Link href="/" className="logo" aria-label="ShopNest home">
  <Image
    src="/images/shopnest_Logo.png"
    alt="ShopNest"
    width={100}
    height={100}
    priority
    className="brand-logo"
  />
</Link>

      <nav className="nav-links">
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
        <Link href="/cart">Cart</Link>
      </nav>
    </header>
  );
}