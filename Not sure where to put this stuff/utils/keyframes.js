import { keyframes } from "styled-components";

export const iconEntry = keyframes`
  0%, 50% {
    transform: scale(0)
  }
  90% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

export const numberEntry = keyframes`
  0%{
    transform: scale(0);
  }
  90% {
    transform: scale(0.7);
  }
  100% {
    transform: scale(0.6);
  }
`;

export const numberEntry2 = keyframes`
  0%{
    transform: scale(0.2);

  }
  90% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(0.75);

  }
`;
