import { IoMdSend } from 'react-icons/io';
import styled from 'styled-components';
import { contentCenter } from '../../Styled/typography';

export const Form = styled.form`
    display: flex;
`;

export const Inputbox = styled.textarea.attrs({ placeholder: 'type a question' })`
    resize: none;
    max-height: 2.5rem;
    margin-bottom: 0;
    font-family: inherit;
    border: ${({ theme }) => theme.border.sm};
    box-shadow: none;
    flex: 1;
    border-radius: 1.5rem;
`;

export const SendBtn = styled.button.attrs({ type: 'submit' })`
    background: transparent;
    font-size: 2.5rem;
    align-self: flex-end;
    border: none;
    padding-left: 0.5rem;
    cursor: pointer;
    ${contentCenter};

    &:disabled {
        cursor: default;
        svg {
            color: ${({ theme }) => theme.color.gray};
        }
    }
`;

export const SendIcon = styled(IoMdSend)`
    color: ${({ theme }) => theme.color.primary.main};
`;
