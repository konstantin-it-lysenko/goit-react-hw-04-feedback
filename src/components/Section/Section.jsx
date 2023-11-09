import { Component } from 'react';
import { FeedbackSection, FeedbackTitle } from './Section.styled';

class Section extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <FeedbackSection>
        <FeedbackTitle>{title}</FeedbackTitle>
        {children}
      </FeedbackSection>
    );
  }
}

export default Section;
