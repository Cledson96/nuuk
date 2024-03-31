import { getDictionary } from '@/config/get-dictionary';

export default async function Contact({
  locale,
}: {
  locale: 'en' | 'pt' | 'fr';
}) {
  const dictionary = await getDictionary(locale);

  const text = {
    contact: dictionary.header.contact,
    home: dictionary.header.home.title,
    localization: dictionary.contact.location,
    number: dictionary.contact.phone,
    email: dictionary.contact.mail,
  };

  return text;
}
