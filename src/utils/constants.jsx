import { Configuration } from 'openai';

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
    organization: 'org-A7fKbkj4Fgp4Hf8aSRCuzNe0',
});

export default { configuration };
