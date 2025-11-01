"use client";

import React, { useState, useEffect } from "react";
import styles from "./contact-form.module.scss";
import { CONTACT } from "@/lib/constants";

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

function ContactForm({ formId }: { formId: string }) {
  const [dateParts, setDateParts] = useState<{ day: string; mon: string; date: string }>({
    day: "",
    mon: "",
    date: "",
  });

  useEffect(() => {
    const [day, mon, date] = new Date().toString().split(" ");
    setDateParts({ day, mon, date });
  }, []);

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

    let req = await fetch(`https://formspree.io/f/${formId}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
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

    setFormEntries((formEntries) => ({
      ...formEntries,
      [key]: value,
    }));
  };

  return (
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
                type="text"
                required
                minLength={2}
                value={formEntries.name}
                onChange={formEntriesHandler}
              />
            </div>
            <div className={styles.ContactFormBlock}>
              <label>_email:</label>
              <input
                placeholder={CONTACT.EMAIL}
                name="email"
                type="email"
                required
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
                required
                minLength={10}
                value={formEntries.message}
                onChange={formEntriesHandler}
                className="resize-none"
              ></textarea>
            </div>
            <button className="text-base outline-none border-none bg-primary-background text-theme-backdrop py-2 px-4 rounded-[7px] cursor-pointer hover:bg-primary-hover transition-all duration-300">
              submit-message
            </button>
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
            Your message has been accepted. You will receive an answer really
            soon!
          </p>
          <button onClick={resetFormEntries}>send-new-message</button>
        </div>
      </section>
      <section className="py-2">
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
              <Or val={dateParts.day && dateParts.date && dateParts.mon ? `"${dateParts.day} ${dateParts.date} ${dateParts.mon}"` : '""'} />
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
      <section className="border-none !w-8 flex-none !py-2 !hidden md:!block">
        <div className="h-1.5 w-4/6 mx-auto bg-foreground"></div>
      </section>
    </div>
  );
}

export default ContactForm;
