import { useEffect, useState } from "react";
import BoxLayout from "@/layout/BoxLayout/BoxLayout";
import { IoCaretForward, IoMail, IoCall, IoOpenOutline } from "react-icons/io5";

import styles from "@/styles/Contact.module.scss";
import sidebarStyles from "@/components/Sidebar/Sidebar.module.scss";
import Head from "next/head";
import Sidebar from "@/components/Sidebar/Sidebar";

export default function contact() {
  return (
    <>
      <Head>
        <title>Qudusayo - Contact</title>
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
                    <a key={0} href="mailto:qqudusayo@gmail.com">
                      <IoMail fill="#607b96" />
                      <span>qqudusayo@gmail.com</span>
                    </a>,
                    <a key={1} href="tel:+2347042467656">
                      <IoCall fill="#607b96" />
                      <span>+2347042467656</span>
                    </a>,
                  ],
                },
                {
                  title: "find-me-also-in",
                  content: [
                    <a
                      key={0}
                      href="http://discordapp.com/users/712416046317043762"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <IoOpenOutline fill="#607b96" />
                      <span>Discord Profile</span>
                    </a>,
                    <a
                      key={1}
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
          <div className={styles.Contact}>
            <form>
              <div className={styles.ContactForm}>
                <div className={styles.ContactFormBlock}>
                  <label>_name:</label>
                  <input placeholder="Ayoola Abdulqudus" />
                </div>
                <div className={styles.ContactFormBlock}>
                  <label>_email:</label>
                  <input placeholder="qqudusayo@gmail.com" />
                </div>
                <div className={styles.ContactFormBlock}>
                  <label>_message:</label>
                  <textarea
                    placeholder="Hey! Just checked your website and it looks awesome!"
                    rows={6}
                  ></textarea>
                </div>
                <button>submit-message</button>
              </div>
            </form>
            <section></section>
          </div>
        </BoxLayout>
      </div>
    </>
  );
}
