import { emailLink, socialLinks } from "../data/links";

function Footer() {
  const links = [...socialLinks, emailLink];

  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-8 sm:flex-row sm:justify-between">
        <p className="text-sm text-zinc-600">
          © {new Date().getFullYear()} Samuel Osoba. All rights reserved.
        </p>

        <ul className="flex items-center gap-2">
          {links.map(({ label, href, icon: Icon }) => {
            const external = href.startsWith("http");
            return (
              <li key={label}>
                <a
                  href={href}
                  {...(external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-accent"
                >
                  <Icon className="h-5 w-5" />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
