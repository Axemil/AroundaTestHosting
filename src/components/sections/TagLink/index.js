
import Link from 'next/link'

const TagLink = ({ to, children, className }) => {
  return (
    <Link href={to}>
      <a className={className} title={children}>
        {children}
      </a>
    </Link>
  )
}

export default TagLink
