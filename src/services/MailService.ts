import emailjs from "emailjs-com"

export const SendMail = (form: HTMLFormElement, callback?: (form: HTMLFormElement, isSuccess: boolean, error?: Error) => void) => {
    emailjs.sendForm(
        "service_uoya6nl",
        "template_45442wo",
        form,
        "t9FjWJv-rYftHwo5C")
        .then(() => {
            if (callback) {
                callback(form, true)
            }
        })
        .catch((error: Error) => {
            console.error("Email send error:", error)
            if (callback) {
                callback(form, false, error)
            }
        })
}