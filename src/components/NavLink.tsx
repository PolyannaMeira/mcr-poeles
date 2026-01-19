import { forwardRef, type HTMLAttributes } from "react";

interface NavLinkProps extends HTMLAttributes<HTMLAnchorElement> {
  href: string;
  isActive?: boolean;
  activeClassName?: string;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ className = "", activeClassName = "", href, isActive, children, ...props }, ref) => {
    const combinedClassName = `${className} ${isActive ? activeClassName : ''}`.trim();
    
    return (
      <a
        ref={ref}
        href={href}
        className={combinedClassName}
        {...props}
      >
        {children}
      </a>
    );
  },
);

NavLink.displayName = "NavLink";

export { NavLink };