"use client";

import React, { useState } from "react";
import axios from "axios";
import BoxLayout from "@/layout/BoxLayout/BoxLayout";
import { IoMail, IoCall, IoOpenOutline } from "react-icons/io5";

import styles from "./Contact.module.scss";
import Head from "next/head";
import Sidebar from "@/components/Sidebar/Sidebar";

export default function Contact() {
  let [day, mon, date] = Date().split(" ");
  const [formEntries, setFormEntries] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [msgSent, setMsgSent] = useState(false);

  const formSubmitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    let data = {
      ...formEntries,
    };

    let req = await axios({
      url: `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`,
      method: "post",
      headers: {
        Accept: "application/json",
      },
      data,
    });
    console.log(req);
    if (req.status === 200) {
      return setMsgSent(true);
    }
  };

  const resetFormEntries = () => {
    setFormEntries({
      name: "",
      email: "",
      message: "",
    });
    return setMsgSent(false);
  };

  const formEntriesHandler = (
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    let key = e.currentTarget.name;
    let value = e.currentTarget.value;

    setFormEntries((formEntrys) => ({
      ...formEntrys,
      [key]: value,
    }));
  };

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
                    <a key={1} href="tel:+2347016412041">
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
            <section>
              <form
                onSubmit={formSubmitHandler}
                className={!msgSent ? styles.fadeIn : styles.fadeOut}
              >
                <div className={styles.ContactForm}>
                  <div className={styles.ContactFormBlock}>
                    <label>_name:</label>
                    <input
                      placeholder="Ayoola Abdulqudus"
                      name="name"
                      value={formEntries.name}
                      onChange={formEntriesHandler}
                    />
                  </div>
                  <div className={styles.ContactFormBlock}>
                    <label>_email:</label>
                    <input
                      placeholder="qqudusayo@gmail.com"
                      name="email"
                      value={formEntries.email}
                      onChange={formEntriesHandler}
                    />
                  </div>
                  <div className={styles.ContactFormBlock}>
                    <label>_message:</label>
                    <textarea
                      placeholder="Hey! Just checked your website and it looks awesome!"
                      rows={6}
                      name="message"
                      value={formEntries.message}
                      onChange={formEntriesHandler}
                    ></textarea>
                  </div>
                  <button>submit-message</button>
                </div>
              </form>

              <div
                className={[
                  styles.ThankYou,
                  msgSent ? styles.fadeIn : styles.fadeOut,
                ].join(" ")}
              >
                <h2>Thank you! 🤘</h2>
                <p>
                  Your message has been accepted. You will recieve answer really
                  soon!
                </p>
                <button onClick={resetFormEntries}>send-new-message</button>
              </div>
            </section>
            <section>
              <pre className={styles.code}>
                <span className={styles.tr}>
                  <span className={styles.th}></span>
                  <code>
                    <Ln val="const " />
                    <Pr val="button" />
                    <Ln val=" = " />
                    <Pr val="document.querySelector" />
                    <Sy val="(" />
                    <Or val="'#sendBtn'" />
                    <Sy val=");" />
                  </code>
                </span>
                <span className={styles.tr}>
                  <span className={styles.th}></span>
                  <code></code>
                </span>
                <span className={styles.tr}>
                  <span className={styles.th}></span>
                  <code>
                    <Ln val="const " />
                    <Pr val="message" />
                    <Pr val=" = " />
                    <Sy val="{" />
                  </code>
                </span>
                <span className={styles.tr}>
                  <span className={styles.th}></span>
                  <code>
                    <Pr val=" name: " />
                    <Or val={`"${formEntries.name}",`} />
                  </code>
                </span>
                <span className={styles.tr}>
                  <span className={styles.th}></span>
                  <code>
                    <Pr val=" email: " />
                    <Or val={`"${formEntries.email}",`} />
                  </code>
                </span>
                <span className={styles.tr}>
                  <span className={styles.th}></span>
                  <code>
                    <Pr val=" message: " />
                    <Or val={`"${formEntries.message}",`} />
                  </code>
                </span>
                <span className={styles.tr}>
                  <span className={styles.th}></span>
                  <code>
                    <Pr val=" date: " />
                    <Or val={`"${day} ${date} ${mon}"`} />
                  </code>
                </span>
                <span className={styles.tr}>
                  <span className={styles.th}></span>
                  <code>{`}`}</code>
                </span>
                <span className={styles.tr}>
                  <span className={styles.th}></span>
                  <code></code>
                </span>
                <span className={styles.tr}>
                  <span className={styles.th}></span>
                  <code>
                    <Pr val="button" />
                    <Sy val="." />
                    <Pr val="addEventListener" />
                    <Sy val="(" />
                    <Or val="'click'" />
                    <Sy val=", () " />
                    <Ln val="=>" />
                    <Sy val=" {" />
                  </code>
                </span>
                <span className={styles.tr}>
                  <span className={styles.th}></span>
                  <code>
                    <Pr val=" form" />
                    <Sy val="." />
                    <Pr val="send" />
                    <Sy val="(" />
                    <Pr val="message" />
                    <Sy val=");" />
                  </code>
                </span>
                <span className={styles.tr}>
                  <span className={styles.th}></span>
                  <code>
                    <Sy val="})" />
                  </code>
                </span>
              </pre>
            </section>
          </div>
        </BoxLayout>
      </div>
    </>
  );
}

const Pr = ({ val }: { val: string }) => (
  <span className={styles.pr}>{val}</span>
);
const Or = ({ val }: { val: string }) => (
  <span className={styles.or}>{val}</span>
);
const Ln = ({ val }: { val: string }) => (
  <span className={styles.in}>{val}</span>
);
const Sy = ({ val }: { val: string }) => (
  <span className={styles.sy}>{val}</span>
);
