import { useEffect, useState } from "react";
import BoxLayout from "@/layout/BoxLayout/BoxLayout";
import { IoCaretForward, IoMail, IoCall, IoOpenOutline } from "react-icons/io5";

import styles from "@/styles/Contact.module.scss";
import sidebarStyles from "@/components/Sidebar/Sidebar.module.scss";
import Head from "next/head";

export default function contact() {
  return (
    <>
      <Head>
        <title>Qudusayo - Contact</title>
        <meta name="description" content="Send Qudusayo a message" />
      </Head>
      <div>
        <BoxLayout navTitle="contacts" sideBar={<SideBar />}>
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

const SideBar = () => {
  const [firstDrawerOpen, setFirstDrawerOpen] = useState(true);
  const [secondDrawerOpen, setSecondDrawerOpen] = useState(true);

  useEffect(() => {
    if (window.innerWidth <= 700) {
      setFirstDrawerOpen(false);
      setSecondDrawerOpen(false);
    }
  }, []);

  return (
    <div className={sidebarStyles.SideBar}>
      <nav
        className={[
          sidebarStyles.SideBarDropdown,
          !firstDrawerOpen && sidebarStyles.firstDrawerOpen,
        ].join(" ")}
      >
        <div
          className={sidebarStyles.SideBarDropdownHeader}
          onClick={() =>
            setFirstDrawerOpen((firstDrawerStatus) => !firstDrawerStatus)
          }
        >
          <IoCaretForward
            className={
              firstDrawerOpen
                ? sidebarStyles.DrawerControlOpen
                : sidebarStyles.DrawerControlClose
            }
          />{" "}
          <span>contacts</span>
        </div>
        <ul className={sidebarStyles.SideBarDropdownContent}>
          <li>
            <a href="mailto:qqudusayo@gmail.com">
              <IoMail fill="#607b96" />
              <span>qqudusayo@gmail.com</span>
            </a>
          </li>
          <li>
            <a href="tel:+2347042467656">
              <IoCall fill="#607b96" />
              <span>+2347042467656</span>
            </a>
          </li>
        </ul>
      </nav>
      <nav className={sidebarStyles.SideBarDropdown}>
        <div
          className={sidebarStyles.SideBarDropdownHeader}
          onClick={() =>
            setSecondDrawerOpen((secondDrawerStatus) => !secondDrawerStatus)
          }
        >
          <IoCaretForward
            className={
              secondDrawerOpen
                ? sidebarStyles.DrawerControlOpen
                : sidebarStyles.DrawerControlClose
            }
          />{" "}
          <span>find-me-also-in</span>
        </div>

        {secondDrawerOpen && (
          <ul className={sidebarStyles.SideBarDropdownContent}>
            <li>
              <a
                href="http://discordapp.com/users/712416046317043762"
                target="_blank"
                rel="noreferrer"
              >
                <IoOpenOutline fill="#607b96" />
                <span>Discord Profile</span>
              </a>
            </li>
            <li>
              <a
                href="https://stackoverflow.com/users/11659301/qudusayo"
                target="_blank"
                rel="noreferrer"
              >
                <IoOpenOutline fill="#607b96" />
                <span>Stackoverflow Profile</span>
              </a>
            </li>
          </ul>
        )}
      </nav>
    </div>
  );
};
