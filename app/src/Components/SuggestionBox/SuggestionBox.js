import React from 'react';
import { StyledSuggestionBox, Suggestion } from './styled';

const SuggestionBox = ({ suggestions, submitMessage }) => {
    const submitHandler = (e) => {
        submitMessage(e.target.textContent);
    };
    return (
        <StyledSuggestionBox>
            {suggestions.map((suggestion, index) => (
                <Suggestion offset={index} key={suggestion.id} onClick={submitHandler}>
                    {suggestion.question}
                </Suggestion>
            ))}
        </StyledSuggestionBox>
    );
};

export default SuggestionBox;
