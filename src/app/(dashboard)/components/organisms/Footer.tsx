import { FooterMenu, SocialMediaMenu } from '@/app/(dashboard)/components/molecules'
import { FOOTER_MENUS } from '@/app/(dashboard)/data/footer'

const Footer = () => {
  return (
    <footer className="pt-2 px-8 pb-10">
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
