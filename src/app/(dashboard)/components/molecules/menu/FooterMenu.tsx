import { FooterMenuItem } from '@/app/(dashboard)/components/atoms'
import { FooterMenu } from '@/app/(dashboard)/layers/domain/footer'

const FooterMenu = ({ menu }: FooterMenuProps) => {
  const { title, items } = menu

  return (
    <div className="text-sm grow shrink-0">
      <p className="text-white font-bold mb-2">{title}</p>
      <ul className="flex flex-col gap-2 text-gray-100">
        {items.map((item) => (
          <FooterMenuItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  )
}

type FooterMenuProps = {
  menu: FooterMenu
}

export default FooterMenu
