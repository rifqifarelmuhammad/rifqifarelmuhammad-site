import Link from 'next/link'
import { CONTACTS } from './constant'
import toast from 'react-hot-toast'

export const Footer = () => {
  const MAIL = CONTACTS[0]

  const handleMailButton = () => {
    navigator.clipboard.writeText(MAIL.url)
    toast.success('Email successfully copied to Clipboard')
  }

  return (
    <footer id="contacts" className="flex justify-center">
      <div className="max-w-[1440px] w-full flex flex-col gap-4 lg:gap-5 pb-4 lg:pb-5">
        <h3 className="text-white text-center font-bold text-lg">Contact Me</h3>

        <div className="flex flex-row gap-5 justify-center">
          {CONTACTS.map(({ type, Icon, url }) =>
            type === 'MAIL' ? (
              <button onClick={handleMailButton} key={type}>
                <Icon className="text-[#FFF500] w-6 h-6" />
              </button>
            ) : (
              <Link key={type} href={url} target="_blank">
                <Icon className="text-[#FFF500] w-6 h-6" />
              </Link>
            )
          )}
        </div>
      </div>
    </footer>
  )
}
