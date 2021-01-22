import { GetStaticProps } from "next";
import axios from 'axios';

import { Faq } from 'types';
import FaqItem from 'components/faq-item';

interface Props {
  faq: Faq[];
}

const renderFaq = (faq: Faq, index: number) => (
  <FaqItem 
    index={index}
    key={faq.id}
    faq={faq}
  />
);

export default function FaqPage({ faq }: Props) {
  return (
    <>
      {faq.map(renderFaq)}
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await axios.get('http://localhost:8080/faq');

  return {
    props: {
      faq: response.data
    },
  };
};
