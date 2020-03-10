import { FormData } from '../../../src/models/Form/Form';

export const getFormattedData = (form: FormData, isConfirmMail: boolean) => {
  const { companyName, comments, contactName, contactMail, phone, interests } = form;
  return `
    <p>
    ${
      isConfirmMail
        ? 'Vi vil meddele at deres interesse med følgende data har blitt sendt inn:'
        : 'En bedrift har meldt interesse'
    }<br>
    <b>Bedrift</b><br>
    Bedriftsnavn: ${companyName}<br><br>
    <b>Kontaktperson</b><br>
    Navn: ${contactName}<br>
    E-post: ${contactMail}<br>
    Telefon: ${phone}<br><br>
    <b>Interesser</b><br><br>
    <ul>${interests.map((interest: string) => `<li>${interest}</li>`).join('\n')}</ul><br><br>
    <b>Kommentar</b><br>
    <p>${comments}</p><br>
    </p>
  `;
};
