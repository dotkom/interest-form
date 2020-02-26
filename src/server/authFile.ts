import fs from 'fs';

export interface GoogleAuthFile {
  type: string;
  project_id: string;
  private_key_id: string;
  private_key: string;
  client_email: string;
  client_id: string;
  auth_uri: string;
  token_uri: string;
  auth_provider_x509_cert_url: string;
  client_x509_cert_url: string;
}

export const AUTH_FILE_PATH = __dirname + '/../../gsuite.json';

export const getAuthFile = async (): Promise<null | GoogleAuthFile> => {
  try {
    const file = await fs.readFileSync(AUTH_FILE_PATH);
    const json: GoogleAuthFile = await JSON.parse(file.toString());
    return json;
  } catch (err) {
    console.error(err);
    return null;
  }
};
