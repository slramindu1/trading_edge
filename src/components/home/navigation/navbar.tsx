import { Container, Icons } from "@/components";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";

import Link from "next/link";

const Navbar = async () => {
  return (
    <header className="px-4 h-14 sticky top-0 inset-x-0 w-full bg-background/40 backdrop-blur-lg border-b border-border z-50">
      <Container reverse>
        <div className="flex items-center justify-between h-full mx-auto md:max-w-screen-xl">
          <div className="flex items-start">
            <Link href="/" className="flex items-center gap-2">
              {/* <Icons.logo className="w-8 h-8" /> */}
              <Image
                src="/logos/logo-white.png" // Path to your logo in the public folder
                alt="Trading Edge Logo"
                width={188} // Adjust width as needed
                height={32} // Adjust height as needed
                // Additional styling
              />
              {/* <span className="text-lg font-medium">Trading Edge</span> */}
            </Link>
          </div>
          <nav className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <ul className="flex items-center justify-center gap-8">
              <Link
                href="#customers"
                className="hover:text-foreground/80 text-sm"
              >
                Customers
              </Link>
              <Link
                href="#features"
                className="hover:text-foreground/80 text-sm"
              >
                Features
              </Link>
              <Link
                href="#membership"
                className="hover:text-foreground/80 text-sm"
              >
                Membership
              </Link>
              <Link
                href="#curriculum"
                className="hover:text-foreground/80 text-sm"
              >
                Curriculum
              </Link>
              <Link
                href="#results"
                className="hover:text-foreground/80 text-sm"
              >
                Result
              </Link>
              <Link
                href="#pricing"
                className="hover:text-foreground/80 text-sm"
              >
                Pricing
              </Link>
              <Link href="#faq" className="hover:text-foreground/80 text-sm">
                FAQ
              </Link>
            </ul>
          </nav>
          <div className="flex items-center gap-4">
            <>
              <Link
                href="#"
                className={buttonVariants({ size: "sm", variant: "ghost" })}
              >
                Login
              </Link>
              <Link
                href="#"
                className={buttonVariants({
                  size: "sm",
                  className: "hidden md:flex",
                })}
              >
                Start Now
              </Link>
            </>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
