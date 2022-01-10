import styled from 'styled-components';

export default styled.input`
  border: 1px solid currentColor;
  background: transparent;
  border-radius: 5px;
  color: #D0D7DE;
  font-size: 0.9rem;
  line-height: 1.4;
  padding: 0.4rem 1rem;

  &::placeholder {
    color: inherit;
  }
`;
