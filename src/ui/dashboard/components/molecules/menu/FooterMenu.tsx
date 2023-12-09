import { FooterMenu } from '@modules/dashboard/domain/models/footer.model'
import { FooterMenuItem } from '@ui/dashboard/components/atoms'

const FooterMenu = async ({ menu }: FooterMenuProps) => {
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
