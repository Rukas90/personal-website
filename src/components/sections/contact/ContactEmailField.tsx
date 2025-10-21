import React from "react"
import useStyling from "src/components/contexts/Styling"
import EmailIcon from "src/components/ui/images/social/EmailIcon"

const ContactEmailField = () => {
  const styles = useStyling()
  return (
    <a href="mailto:rukas.skirkevicius@gmail.com">
      <div className="relative flex items-center max-h-7 gap-4 px-4 py-6 rounded-3xl border-[2px] dark:border-gray-900 border-gray-600 dark:hover:border-gray-800 hover:border-gray-700 transition-colors dark:active:border-teal-400 active:border-red-600">
        <EmailIcon className="w-6 h-6" fill={styles.accentColor.hex} />
        <p className="dark:text-gray-300 text-gray-700 tn:text-base text-sm">
          rukas.skirkevicius@gmail.com
        </p>
      </div>
    </a>
  )
}
export default ContactEmailField
