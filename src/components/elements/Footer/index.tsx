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
      <div className="max-w-[1440px] w-full flex flex-col gap-8 pb-4">
        <hr className="w-full" />

        <div className="flex flex-row gap-6 justify-center">
          {CONTACTS.map(({ type, Icon, url }) =>
            type === 'MAIL' ? (
              <button onClick={handleMailButton}>
                <Icon className="text-[#ffffff]/[0.75] w-11 h-11" />
              </button>
            ) : (
              <Link key={type} href={url} target="_blank">
                <Icon className="text-[#ffffff]/[0.75] w-11 h-11" />
              </Link>
            )
          )}
        </div>

        <p className="text-center text-[#ffffff]/[0.75] text-lg">
          © 2023 Rifqi Farel Muhammad - All Rights Reserved
        </p>
      </div>
    </div>
  )
}
