import BoxLayout from "@/layout/BoxLayout/BoxLayout";
import { IoMail, IoCall, IoOpenOutline } from "react-icons/io5";

import Sidebar from "@/components/Sidebar/Sidebar";
import Head from "@/extras/head";
import { env } from "@/lib/env";
import ContactForm from "./contact-form";

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
                      href="mailto:qqudusayo@gmail.com"
                    >
                      <IoMail fill="#607b96" />
                      <span>qqudusayo@gmail.com</span>
                    </a>,
                    <a
                      key={1}
                      className="flex items-center gap-2 text-foreground p-2"
                      href="tel:+2347016412041"
                    >
                      <IoCall fill="#607b96" />
                      <span>+(234)701-6412-041</span>
                    </a>,
                  ],
                },
                {
                  title: "find-me-also-in",
                  content: [
                    <a
                      key={0}
                      className="flex items-center gap-3 text-foreground p-2"
                      href="http://discordapp.com/users/712416046317043762"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <IoOpenOutline fill="#607b96" />
                      <span>Discord Profile</span>
                    </a>,
                    <a
                      key={1}
                      className="flex items-center gap-3 text-foreground p-2"
                      href="https://stackoverflow.com/users/11659301/qudusayo"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <IoOpenOutline fill="#607b96" />
                      <span>Stackoverflow Profile</span>
                    </a>,
                  ],
                },
              ]}
            />
          }
        >
          <ContactForm formId={env.NEXT_PUBLIC_FORMSPREE_ID} />
        </BoxLayout>
      </div>
    </>
  );
}
