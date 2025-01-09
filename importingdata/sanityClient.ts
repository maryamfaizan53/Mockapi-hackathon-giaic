import sanityClient from '@sanity/client';
import dotenv from 'dotenv';

dotenv.config();

export default sanityClient({
  projectId: "kod2jsrj",
  dataset: "production",
  apiVersion: '2023-01-01', // Use the latest API version or your preferred one
  token: "sk6VlwYifQXcgjPUXxG1QRGScX39jkMT03qf10wFYkopwzD1JDUIHqmsSiO5i30y4YcPcmdRjs4TeNPhzJtLLFmw5jHkCxpv0Uj59HzBzRsUHMI1wvAQ9faeyXbM7oo6R5U386KvOF0nexEeMGxS0opTQ2jj7xZ3xtoVf3ZGgngnCNkc97Xd",
  useCdn: false, // Set to `false` for authenticated requests
});
