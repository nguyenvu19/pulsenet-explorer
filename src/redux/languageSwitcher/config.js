import language from 'config/language.config'

const config = {
  defaultLanguage: language,
  options: [
    {
      languageId: 'english',
      locale: 'en',
      text: 'English',
      icon: '/images/flag/uk.svg',
    },
  ],
}

export function getCurrentLanguage(lang) {
  let selecetedLanguage = config.options[0]
  config.options.forEach((language) => {
    if (language.languageId === lang) {
      selecetedLanguage = language
    }
  })
  return selecetedLanguage
}
export default config
