import React, { useState, useEffect } from "react";
import { toast, ToastContainer, Flip } from "react-toastify";
import connexion from "../../services/connexion";
import "react-toastify/dist/ReactToastify.css";

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
    <div className="Bloc1">
      <div className="Robin">
        <label htmlFor="">
          Choisir une question
          <select onChange={(event) => updateFaqState(+event.target.value)}>
            <option value={0}>Rafraichir</option>
            {faqs.map((fq) => (
              <option key={fq.id} value={fq.id}>
                {fq.question}
              </option>
            ))}
          </select>
        </label>
      </div>
      <form onSubmit={(event) => postFaq(event)}>
        <label>
          Question
          <input
            type="text"
            required
            minLength={1}
            maxLength={255}
            name="question"
            value={faq.question}
            onChange={(event) =>
              handleFaq(event.target.name, event.target.value)
            }
          />
        </label>

        <label>
          Answer
          <input
            type="text"
            required
            minLength={1}
            maxLength={255}
            name="answer"
            value={faq.answer}
            onChange={(event) =>
              handleFaq(event.target.name, event.target.value)
            }
          />
        </label>
        {!faq.id && <button type="submit">Ajouter</button>}
      </form>
      {faq.id && (
        <>
          <button type="button" onClick={(event) => deleteFaq(event)}>
            Supprimer
          </button>
          <button type="button" onClick={(event) => updateFaq(event)}>
            Modifier
          </button>
        </>
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
