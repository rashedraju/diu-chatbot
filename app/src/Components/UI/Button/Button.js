import styled from 'styled-components';

const Button = styled.button`
    padding: 0.5rem;
    font-size: inherit;
    border-radius: 0.2rem;
    ${({ width = 100, variant, theme, disabled }) => {
        let bg = `background-image: linear-gradient(90deg, ${theme.color.primary.main}, ${theme.color.primary.light})`;
        let color = theme.color.white;
        let border = 'none';
        if (variant === 'outline') {
            bg = theme.color.white;
            color = theme.color.dark;
            border = theme.border.sm;
        }
        return `
            width: ${width}%;
            ${bg};
            color: ${color};
            border: ${border};
            cursor: ${disabled ? 'default' : 'pointer'}
        `;
    }}
`;

export default Button;
