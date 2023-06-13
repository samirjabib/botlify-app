import SanityClient from 'next-sanity-client';

const client = new SanityClient({
  projectId: 'hhr2h2ag',
  dataset: 'production',
  useCdn: true,
});

export default client;