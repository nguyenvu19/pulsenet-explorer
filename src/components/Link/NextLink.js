import Link from 'next/link'

export default function NextLink({ className, href, children, ...props }) {
  const isHttpLink = href?.startsWith('http')
  if (href && isHttpLink) {
    return (
      <a className={className} href={href} {...props}>
        {children}
      </a>
    )
  }
  if (!href && isHttpLink) {
    return (
      <a className={className} {...props}>
        {children}
      </a>
    )
  }
  return (
    <Link href={href} {...props}>
      <a className={className}>{children}</a>
    </Link>
  )
}

NextLink.defaultProps = {
  className: '',
  href: '',
}
