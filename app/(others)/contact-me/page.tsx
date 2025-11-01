import BoxLayout from "@/layout/BoxLayout/BoxLayout";
import { IoMail, IoCall, IoOpenOutline } from "react-icons/io5";

import Sidebar from "@/components/Sidebar/Sidebar";
import Head from "@/extras/head";
import { env } from "@/lib/env";
import ContactForm from "./contact-form";
import { CONTACT } from "@/lib/constants";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact - Qudusayo</title>
        <meta name="description" content="Send Qudusayo a message" />
      </Head>
      <div>
        <BoxLayout
          navTitle="contacts"
          sideBar={
            <Sidebar
              contents={[
                {
                  title: "contacts",
                  content: [
                    <a
                      key={0}
                      className="flex items-center gap-2 text-foreground p-2"
                      href={`mailto:${CONTACT.EMAIL}`}
                    >
                      <IoMail fill="#607b96" />
                      <span>{CONTACT.EMAIL}</span>
                    </a>,
                    <a
                      key={1}
                      className="flex items-center gap-2 text-foreground p-2"
                      href={`tel:${CONTACT.PHONE}`}
                    >
                      <IoCall fill="#607b96" />
                      <span>{CONTACT.PHONE}</span>
                    </a>,
                  ],
                },
                {
                  title: "find-me-also-in",
                  content: [
                    ...CONTACT.OTHERS.map((other) => (
                      <a
                        key={other.name}
                        className="flex items-center gap-3 text-foreground p-2"
                        href={other.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <IoOpenOutline fill="#607b96" />
                        <span>{other.name}</span>
                      </a>
                    )),
                  ],
                },
              ]}
            />
          }
        >
          <ContactForm formId={env.FORMSPREE_ID} />
        </BoxLayout>
      </div>
    </>
  );
}
