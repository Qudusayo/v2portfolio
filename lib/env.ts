const requiredEnvVars = [
  "CONTENTFUL_SPACE_ID",
  "CONTENTFUL_DELIVERY_TOKEN",
  "FORMSPREE_ID",
] as const;

for (const key of requiredEnvVars) {
  if (!process.env[key]) {
    throw new Error(`❌ Missing required environment variable: ${key}`);
  }
}

export const env = {
  CONTENTFUL_SPACE_ID: process.env
    .CONTENTFUL_SPACE_ID as string,
  CONTENTFUL_DELIVERY_TOKEN: process.env
    .CONTENTFUL_DELIVERY_TOKEN as string,
  FORMSPREE_ID: process.env.FORMSPREE_ID as string,
};
