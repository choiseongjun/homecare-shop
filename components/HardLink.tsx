import type { AnchorHTMLAttributes, ReactNode } from "react";

type HardLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  href: string;
  children: ReactNode;
};

export default function HardLink({ href, children, ...props }: HardLinkProps) {
  return <a href={href} {...props}>{children}</a>;
}
