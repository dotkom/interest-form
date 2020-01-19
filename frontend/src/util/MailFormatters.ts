import { FormData } from 'models/Form/Form';

export const formatFormData = (form: FormData) => {
  const { companyName, comments, contactName, contactMail, phone, interests } = form;
  return `
    <p>
    <b>Bedrift</b><br>
    Bedriftsnavn: ${companyName}
    <b>Kontaktperson</b><br>
    Navn: ${contactName}<br>
    E-post: ${contactMail}<br>
    Telefon: ${phone}<br><br>
    <b>Interesser</b><br>
    <ul>${interests.map((interest) => `<li>${interest}</li>`)}</ul><br><br>
    <b>Kommentar</b><br>
    <p>${comments}</p><br>
    </p>
  `;
};

export const confirmationMail = (form: FormData) => {
  return `<p>Vi vil meddele at deres interesse med følgende data har blitt sendt inn:</p>
  ${formatFormData(form)}
  `;
};
