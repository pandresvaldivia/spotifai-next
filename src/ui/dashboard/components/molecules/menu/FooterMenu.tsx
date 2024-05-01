import { FooterMenuProps } from '@modules/dashboard/domain/models/footer.model'
import { FooterMenuItem } from '@ui/dashboard/components/atoms'

const FooterMenu = async ({ menu }: Props) => {
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

type Props = {
  menu: FooterMenuProps
}

export default FooterMenu
