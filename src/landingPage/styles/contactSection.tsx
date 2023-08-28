import styled from "@emotion/styled";

export const contactSection = () => {
  const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 100%;
    gap: 23px;
  `;

  const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end
    border-radius: 20px;
    border: 1px solid var(--grey, #848484);
    height: inherit;
    padding: 20px 200px;
    gap: 20px;
`;

  return {
    ModalContent,
    InputContainer,
  };
};
