// Since schemas are code, we can programmatically build
// fields to hold translated values. We'll use this array
// of languages to determine which fields to define.
const supportedLanguages = [
  { id: 'es', title: 'Español', isDefault: true },
  { id: 'en', title: 'Ingles' },
]

const baseLanguage = supportedLanguages.find((l) => l.isDefault)

export const localeString = {
  title: 'Localized string',
  name: 'localeString',
  type: 'object',
  // Fieldsets can be used to group object fields.
  // Here we omit a fieldset for the "default language",
  // making it stand out as the main field.
  fieldsets: [
    {
      title: 'Traducciones',
      name: 'translations',
    },
  ],
  // Dynamically define one field per language
  fields: supportedLanguages.map((lang) => ({
    title: lang.title,
    name: lang.id,
    type: 'string',
    fieldset: lang.isDefault ? null : 'translations',
  })),
}

export const localeBody = {
  title: 'Localized body',
  name: 'localeBody',
  type: 'object',
  // Fieldsets can be used to group object fields.
  // Here we omit a fieldset for the "default language",
  // making it stand out as the main field.
  fieldsets: [
    {
      title: 'Traducciones',
      name: 'translations',
    },
  ],
  // Dynamically define one field per language
  fields: supportedLanguages.map((lang) => ({
    title: lang.title,
    name: lang.id,
    type: 'blockContent',
    fieldset: lang.isDefault ? null : 'translations',
  })),
}
