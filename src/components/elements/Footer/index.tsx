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
    <div className="flex justify-center">
      <div className="max-w-[1440px] w-full flex flex-col gap-4 lg:gap-5 pb-4 lg:pb-5">
        <hr className="w-full" />

        <div className="flex flex-row gap-5 lg:gap-6 justify-center">
          {CONTACTS.map(({ type, Icon, url }) =>
            type === 'MAIL' ? (
              <button onClick={handleMailButton}>
                <Icon className="text-[#ffffff]/[0.75] w-7 lg:w-9 h-7 lg:h-9" />
              </button>
            ) : (
              <Link key={type} href={url} target="_blank">
                <Icon className="text-[#ffffff]/[0.75] w-7 lg:w-9 h-7 lg:h-9" />
              </Link>
            )
          )}
        </div>
      </div>
    </div>
  )
}
