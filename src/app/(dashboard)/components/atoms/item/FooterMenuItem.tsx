import { FooterItem } from '@/app/(dashboard)/layers/domain/footer'

const FooterMenuItem = ({ item }: FooterMenuItemProps) => {
  const { text, url } = item

  return (
    <li className="hover:text-white hover:underline transition-colors">
      <a href={url} target="_blank" rel="noreferrer noopener">
        {text}
      </a>
    </li>
  )
}

type FooterMenuItemProps = {
  item: FooterItem
}

export default FooterMenuItem
