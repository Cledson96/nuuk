import { getDictionary } from '@/config/get-dictionary';

export default async function ContactsItens({
  locale,
}: {
  locale: 'en' | 'pt' | 'fr';
}) {
  const dictionary = await getDictionary(locale);

  const itens = {
    title: dictionary.contact.title,
    name: dictionary.contact.name,
    description: dictionary.contact.description,
    email: dictionary.contact.email,
    message: dictionary.contact.message,
    button: dictionary.contact.button,
  };

  return itens;
}
