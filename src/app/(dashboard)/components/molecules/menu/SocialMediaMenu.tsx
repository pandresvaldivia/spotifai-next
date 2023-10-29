import { GithubIcon, LinkedinIcon, TwitterIcon } from '@icons/solid'

import { SocialMediaMenuItem } from '@/app/(dashboard)/components/atoms'

const SocialMediaMenu = () => {
  return (
    <div className="flex gap-4">
      <SocialMediaMenuItem
        href="https://www.linkedin.com/in/pandresvaldivia/"
        icon={<LinkedinIcon height="16" width="16" />}
      />
      <SocialMediaMenuItem
        href="https://github.com/pandresvaldivia"
        icon={<GithubIcon height="16" width="16" />}
      />
      <SocialMediaMenuItem
        href="https://twitter.com/PandresDev"
        icon={<TwitterIcon height="16" width="16" />}
      />
    </div>
  )
}

export default SocialMediaMenu
