import styled from "styled-components";

export const BaseSocialIcon = styled.div`
  transform: scale(0.8);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--gray-700);
  color: var(--white);
  cursor: pointer;
  transition: all 0.3s ease-in-out;
`;

export const FacebookSocialIcon = styled(BaseSocialIcon)`
  &:hover {
    background-color: #4267b2;
  }
`;

export const TwitterSocialIcon = styled(BaseSocialIcon)`
  &:hover {
    background-color: #1da1f2;
  }
`;

export const YoutubeSocialIcon = styled(BaseSocialIcon)`
  &:hover {
    background-color: #ff0000;
  }
`;

export const InstagramSocialIcon = styled(BaseSocialIcon)`
  position: relative;
  background: var(--gray-700);
  z-index: 0;

  &::before {
    position: absolute;
    content: "";
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 50%;
    background: linear-gradient(
      45deg,
      #f09433 0%,
      #e6683c 25%,
      #dc2743 50%,
      #cc2366 75%,
      #bc1888 100%
    );
    z-index: -1;
    transition: opacity 0.3s ease-in-out;
    opacity: 0;
  }

  &:hover::before {
    opacity: 1;
  }
`;
