import { Component } from 'react';
import { FeedbackList, Button } from './FeedbackOptions.styled';

class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <FeedbackList>
        {options.map((option, index) => {
          return (
            <li key={index}>
              <Button
                type="button"
                onClick={() => {
                  onLeaveFeedback(option);
                }}
              >
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </Button>
            </li>
          );
        })}
      </FeedbackList>
    );
  }
}

export default FeedbackOptions;
