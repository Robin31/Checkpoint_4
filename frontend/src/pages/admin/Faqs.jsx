import React, { useState, useEffect } from "react";
import { toast, ToastContainer, Flip } from "react-toastify";
import connexion from "../../services/connexion";
import "react-toastify/dist/ReactToastify.css";
import "./Faqs.scss";

const faqModel = {
  id: null,
  question: "",
  answer: "",
};

function Faqs() {
  const [faqs, setFaqs] = useState([]);
  const [faq, setFaq] = useState(faqModel);

  const getFaqs = async () => {
    try {
      const faqsData = await connexion.get("/faqs");
      setFaqs(faqsData);
    } catch (error) {
      toast.error("Une erreur est survenue");
    }
  };

  const postFaq = async (event) => {
    event.preventDefault();
    try {
      const faqData = await connexion.post("/faqs", faq);
      setFaq(faqData.data);
      setFaqs();
    } catch (error) {
      toast.error("Une erreur est survenue");
    }
  };

  const updateFaqState = (id) => {
    if (id === 0) {
      setFaq(faqModel);
    } else {
      setFaq(faqs.find((fq) => fq.id === +id));
    }
  };

  const updateFaq = async (event) => {
    event.preventDefault();
    try {
      await connexion.put(`/faqs/${faq.id}`, faq);
      setFaq(faqModel);
    } catch (error) {
      toast.error("Une erreur est survenue");
    }
  };

  const deleteFaq = async (event) => {
    event.preventDefault();
    try {
      await connexion.delete(`/faqs/${faq.id}`);
      setFaq(faqModel);
      getFaqs();
    } catch (error) {
      toast.error("Une erreur est survenue");
    }
  };

  const handleFaq = (name, value) => {
    setFaq({ ...faq, [name]: value });
  };

  useEffect(() => {
    getFaqs();
  }, []);

  return (
    <div className="faqs__containeru">
      <div className="faqs__header">
        <label htmlFor="" className="faqs__titre">
          Choisir une question
          <select
            className="faqs__select"
            onChange={(event) => updateFaqState(+event.target.value)}
          >
            <option value={0}>Rafraichir</option>
            {faqs.map((fq) => (
              <option key={fq.id} value={fq.id}>
                {fq.question}
              </option>
            ))}
          </select>
        </label>
      </div>
      <form className="faqs__container" onSubmit={(event) => postFaq(event)}>
        <label className="faqs__label">
          <input
            type="text"
            required
            minLength={1}
            maxLength={255}
            name="question"
            placeholder="Question"
            className="faqs__input"
            value={faq.question}
            onChange={(event) =>
              handleFaq(event.target.name, event.target.value)
            }
          />
        </label>

        <label className="faqs__label">
          <input
            type="text"
            required
            minLength={1}
            maxLength={255}
            name="answer"
            placeholder="Réponse"
            className="faqs__input"
            value={faq.answer}
            onChange={(event) =>
              handleFaq(event.target.name, event.target.value)
            }
          />
        </label>
        {!faq.id && (
          <button type="submit" className="faqs__button">
            Ajouter
          </button>
        )}
      </form>
      {faq.id && (
        <div className="faqs__buttons">
          <button
            type="button"
            className="faqs__button"
            onClick={(event) => deleteFaq(event)}
          >
            Supprimer
          </button>
          <button
            type="submit"
            className="faqs__button"
            onClick={(event) => updateFaq(event)}
          >
            Modifier
          </button>
        </div>
      )}

      <ToastContainer
        autoClose={2000}
        position="top-center"
        draggable
        transition={Flip}
        toastClassName="custom-toast"
      />
    </div>
  );
}
export default Faqs;
