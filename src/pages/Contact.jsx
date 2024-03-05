import "../styles/Contact.css";
import useFaqs from "../hooks/useFaqs";
import Skeleton from "@mui/material/Skeleton";
import Collapse from "@mui/material/Collapse";

const ContactCard = () => <div className="contact-card"></div>;

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
            Get In Touch With Us
          </div>
          <div className="contact-page-header-text-title-helper">
            We're happy to hear from you. What's on your mind
          </div>
        </div>
      </div>
      <div className="contact-cards-container">
        <div className="contact-cards-container-inner">
          <div className="contact-cards">
            {Array.from(Array(3)).map((index) => (
              <ContactCard key={index} />
            ))}
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
                {Array.from(Array(2)).map((index) => (
                  <Skeleton
                    key={index}
                    className="faq"
                    height={60}
                    variant="rectangular"
                  />
                ))}
              </div>
            ) : isFetchingFaqsError ? (
              <>Problem completing request...</>
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
                      <div className="faq-answer">
                        <strong>{faq.answer}</strong>
                      </div>
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
