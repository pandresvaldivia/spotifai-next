import { FOOTER_MENUS } from '@modules/dashboard/data/footer'
import { FooterMenu, SocialMediaMenu } from '@ui/dashboard/components/molecules'

const Footer = () => {
  return (
    <footer className="px-8 pb-10 pt-20">
      <div className="flex justify-between gap-16">
        <div className="flex flex-wrap gap-8 grow max-w-2xl">
          {FOOTER_MENUS.map((menu) => (
            <FooterMenu key={menu.id} menu={menu} />
          ))}
        </div>
        <SocialMediaMenu />
      </div>
      <hr className="my-8" />
      <div className="flex justify-end text-gray-100">
        <small className="text-sm">© 2023 Spotifai</small>
      </div>
    </footer>
  )
}

export default Footer
