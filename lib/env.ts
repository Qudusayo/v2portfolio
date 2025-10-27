const requiredEnvVars = [
  "NEXT_PUBLIC_CONTENTFUL_SPACE_ID",
  "NEXT_PUBLIC_CONTENTFUL_DELIVERY_TOKEN",
  "NEXT_PUBLIC_FORMSPREE_ID",
] as const;

for (const key of requiredEnvVars) {
  if (!process.env[key]) {
    throw new Error(`❌ Missing required environment variable: ${key}`);
  }
}

export const env = {
  NEXT_PUBLIC_CONTENTFUL_SPACE_ID: process.env
    .NEXT_PUBLIC_CONTENTFUL_SPACE_ID as string,
  NEXT_PUBLIC_CONTENTFUL_DELIVERY_TOKEN: process.env
    .NEXT_PUBLIC_CONTENTFUL_DELIVERY_TOKEN as string,
  NEXT_PUBLIC_FORMSPREE_ID: process.env.NEXT_PUBLIC_FORMSPREE_ID as string,
};
