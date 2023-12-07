import { FeedbackList, Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
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
};

export default FeedbackOptions;
