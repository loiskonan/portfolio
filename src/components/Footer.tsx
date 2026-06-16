import { personalInfo } from "../data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 bg-slate-950 border-t border-slate-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-center">
          <p className="text-slate-500 text-sm">
            © {year} {personalInfo.name}. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
