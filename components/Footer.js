import SocialIcons from "./SocialIcons";

export default function Footer() {
  return (
    <footer className="relative border-t border-line px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 sm:flex-row">
        <p className="font-mono text-xs text-haze">
          © 2026 <strong> Himanshu Ghosh </strong> Built with React &amp; Passion.
        </p>
        <SocialIcons />
      </div>
    </footer>
  );
}
