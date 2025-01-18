import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const sanityClient = createClient({
  projectId: 'rcdw04to', // Replace with your Sanity project ID
  dataset: 'production', // Replace with your dataset name
  apiVersion: '2023-10-01', // Use the latest API version or your configured version
  useCdn: true, // Set to `true` for faster reads; `false` if you need the latest data
});

const builder = imageUrlBuilder(sanityClient);

export const urlFor = (source: any) => builder.image(source);

export default sanityClient;
