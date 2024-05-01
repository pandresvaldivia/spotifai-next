import { FooterItemProps } from '@modules/dashboard/domain/models/footer.model'

const FooterMenuItem = ({ item }: Props) => {
  const { text, url } = item

  return (
    <li className="hover:text-white hover:underline transition-colors">
      <a href={url} target="_blank" rel="noreferrer noopener">
        {text}
      </a>
    </li>
  )
}

type Props = {
  item: FooterItemProps
}

export default FooterMenuItem
