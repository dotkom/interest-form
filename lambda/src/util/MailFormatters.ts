import { FormData } from '../../../common/FormData';

export const getFormattedData = (form: FormData, isConfirmMail: boolean) => {
  const { companyName, comments, contactName, contactMail, phone, interests } = form;
  const intro = isConfirmMail
    ? 'Vi vil meddele at deres interesse med følgende data har blitt sendt inn:'
    : 'En bedrift har meldt interesse';
  const interestText = interests.map((interest) => `<li>${interest}</li>`);
  return `
      <p>${intro}</p>
      <p><strong>Bedrift</strong></p>
      <p>Bedriftsnavn: ${companyName}<br><br></p>
      <p><strong>Kontaktperson</strong></p>
      <p>Navn: ${contactName}</p>
      <p>E-post: ${contactMail}</p>
      <p>Telefon: ${phone} <br><br></p>
      <p><strong>Interesser</strong></p>
      <ul>
      ${interestText}
      </ul><br><br>
      <p><strong>Kommentarer</strong></p>
      <p>${comments}</p>
  `;
};
