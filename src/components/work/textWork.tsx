import { getDictionary } from '@/config/get-dictionary';

export default async function TextWork({
  locale,
}: {
  locale: 'en' | 'pt' | 'fr';
}) {
  const dictionary = await getDictionary(locale);
  const services = Object.values(dictionary.services.service).map(service => {
    return {
      title: service.title,
      link: service.link,
    };
  });

  const textWork = {
    work: dictionary.work.title,
    home: dictionary.header.home.title,
    title: dictionary.work.subtitle,
    service: dictionary.services.title,
    message: dictionary.work.description,
    form: {
      name: dictionary.work.form.name,
      email: dictionary.work.form.email,
      phone: dictionary.work.form.phone,
      phone_contact: dictionary.work.form.phone_contact,
      message: dictionary.work.form.message,
      button: dictionary.work.form.button,
      workspace: dictionary.work.form.workspace,
      age: dictionary.work.form.age,
      file: dictionary.work.form.file,
      street: dictionary.work.form.street,
      number: dictionary.work.form.number,
      city: dictionary.work.form.city,
      state: dictionary.work.form.state,
      country: dictionary.work.form.country,
      zip: dictionary.work.form.zip,
      complement: dictionary.work.form.complement,
      district: dictionary.work.form.district,
    },
    services,
  };

  return textWork;
}
