import { FeedbackSection, FeedbackTitle } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <FeedbackSection>
      <FeedbackTitle>{title}</FeedbackTitle>
      {children}
    </FeedbackSection>
  );
};

export default Section;
