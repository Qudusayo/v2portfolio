export const dynamic = "force-static";

import { simplifyContentfulResponse } from "@/lib/utils";
import React from "react";
import Projects from "./projects";
import { createClient } from "contentful";
import { env } from "@/lib/env";

async function Page() {
  const client = createClient({
    space: env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: env.NEXT_PUBLIC_CONTENTFUL_DELIVERY_TOKEN,
  });

  const entries = await client.getEntries({
    content_type: "personalProjects",
    select: [
      "fields.title",
      "fields.githubUrl",
      "fields.demoUrl",
      "fields.description",
      "fields.preview",
      "fields.categories",
    ],
  });

  const simplifiedEntries = simplifyContentfulResponse(entries);

  return <Projects projects={simplifiedEntries} />;
}

export default Page;
