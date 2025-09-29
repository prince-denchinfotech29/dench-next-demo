// components/footer/QuickLinksSection.tsx

import Link from "next/link";

interface Props {
  title?: string;
}

export default function QuickLinksSection({ title }: Props) {
  return (
    <div>
      <h4 className="footer-title">{title || "Quick Links"}</h4>
      <div className="footer-underline" />
      <ul className="footer-section">
        <li><Link href="/about">About Dench Infotech</Link></li>
        
      </ul>
    </div>
  );
}
