import styled from '@emotion/styled';
import { theme } from 'constants';

export const FeedbackList = styled.ul`
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const Button = styled.button`
  padding: 8px 16px;
  min-width: 100px;
  font-size: 16px;
  font-weight: 500;
  background-color: ${theme.colors.btnBg};
  color: ${theme.colors.secondaryFont};
  transition: background-color ${theme.transition.transition},
    transform ${theme.transition.transition};

  &:hover {
    background-color: #0000aa;
    transform: scale(1.05);
  }
`;
