import styled from "styled-components";

export const BaseButton = styled.button`
  background-color: var(--secondary-color);
  color: var(--white);
  min-width: 128px;
  max-width: 128px;
  text-align: center;
  padding: 0.625em;
  margin: 0;
  display: inline-block;
  transition: all 0.2s linear;
  font-size: 1.125rem;
  text-transform: capitalize;
  font-weight: 700;
  border: 1px solid var(--secondary-color);
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  &:hover {
    border: 1px solid var(--secondary-color-light);
    background-color: var(--secondary-color-light);
  }

  &.long-btn {
    min-width: 200px;
    max-width: 200px;
    text-transform: uppercase;
  }

  &.full-btn {
    width: 100%;
    margin: 0.75rem 0 1.5rem;
  }

  @media (max-width: 600px) {
    font-size: 1rem;
    padding: 0.5em;
  }
`;

export const ClearButton = styled(BaseButton)`
  background: transparent;
  border: 1px solid var(--secondary-color);
  color: var(--black);

  &:hover {
    background-color: var(--secondary-color);
    color: var(--white);
  }
`;

export const DangerButton = styled(BaseButton)`
  background-color: var(--error);
  border: 1px solid var(--error);
  &:hover {
    border: 1px solid var(--error-hover);
    background-color: var(--error-hover);
  }
`;

export const LoadingSpinner = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 3px solid rgba(195, 195, 195, 0.6);
  border-radius: 50%;
  border-top-color: var(--third-color);
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }

  @media (max-width: 600px) {
    width: 12px;
    height: 12px;
  }
`;
