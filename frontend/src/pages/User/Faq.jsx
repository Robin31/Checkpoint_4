import React, { useState, useEffect } from "react";
import FaqsCard from "../../components/FaqCard/FaqCard";
import connexion from "../../services/connexion";
import "./Faq.scss";

function Faq() {
  const [faqs, setFaqs] = useState([]);

  const getFaq = async () => {
    try {
      const faq = await connexion.get(`/faqs`);
      setFaqs(faq);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getFaq();
  }, []);

  return (
    <div>
      <div className="Bloc1">
        <h1>Foire aux questions</h1>
        <div className="questions">
          {faqs.map((faq) => (
            <FaqsCard key={faq.id} faq={faq} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Faq;
