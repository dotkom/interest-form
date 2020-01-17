import { FormData } from 'models/Form/Form';

export const getFormattedText = (form: FormData) => {
  const { companyName, comments, contactName, contactMail, phone, interests } = form;
  return `
    <p>
    ${companyName} har meldt interesse<br>
    <b>Kontaktperson</b><br>
    Navn: ${contactName}<br>
    E-post: ${contactMail}<br>
    Telefon: ${phone}<br><br>
    <b>Arrangement</b><br>
    <ul>${interests.map((interest) => `<li>${interest}</li>`)}</ul><br><br>
    <b>Kommentar</b><br>
    <p>${comments}</p><br>
    </p>
  `;
};
