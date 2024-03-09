import "../styles/Contact.css";
import useFaqs from "../hooks/useFaqs";
import Skeleton from "@mui/material/Skeleton";
import Collapse from "@mui/material/Collapse";
import { ContactCard } from "../components/Contact/Index";
import emailIcon from "../assets/Svgs/New message-cuate.svg";
import callIcon from "../assets/Svgs/Calling-cuate.svg";
import locationIcon from "../assets/Svgs/Smart mobility-pana.svg";

const Contact = () => {
  const {
    faqs,
    isFetchingFaqs,
    isFetchingFaqsError,
    handleChangeSelectedFaqIndex,
    isSelectedFaqIndex,
  } = useFaqs();

  return (
    <div className="contact-page">
      <div className="contact-page-header">
        <div className="contact-page-header-text">
          <div className="contact-page-header-text-title">
            Get in touch with our friendly support team
          </div>
          <div className="contact-page-header-text-title-helper">
            We're happy to hear from you. What's on your mind
          </div>
        </div>
      </div>
      <div className="contact-cards-container">
        <div className="contact-cards-container-inner">
          <div className="contact-cards">
            <ContactCard
              value={"info@kriffeonline.com"}
              title={"Our Email"}
              icon={emailIcon}
            />
            <ContactCard
              value={"info@kriffeonline.com"}
              title={"Our Contact"}
              icon={callIcon}
            />
            <ContactCard
              value={"info@kriffeonline.com"}
              title={"Our Location"}
              icon={locationIcon}
            />
          </div>
          <div className="faqs-container">
            <div className="faqs-section-header">
              <div className="faqs-section-title">
                Frequently Asked Questions
              </div>
              <div className="faqs-section-title-helper">
                Find answers to some of our Frequently Asked Questions
              </div>
            </div>

            {isFetchingFaqs ? (
              <div className="faqs">
                {Array.from(Array(2)).map((_, index) => (
                  <Skeleton
                    key={index}
                    className="faq"
                    height={60}
                    variant="rectangular"
                  />
                ))}
              </div>
            ) : isFetchingFaqsError ? (
              <>Something went wrong...</>
            ) : (
              <div className="faqs">
                {faqs.map((faq, index) => (
                  <div
                    onClick={() => handleChangeSelectedFaqIndex(index)}
                    key={index}
                    className="faq"
                  >
                    <div className="faq-header">
                      <div className="faq-question">{faq.question}</div>
                      <div>{isSelectedFaqIndex(index) ? "-" : "+"}</div>
                    </div>
                    <Collapse in={isSelectedFaqIndex(index)}>
                      <div className="faq-answer">{faq.answer}</div>
                    </Collapse>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
