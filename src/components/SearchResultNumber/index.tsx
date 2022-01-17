import styled from 'styled-components';

const Wrapper = styled.h2`
  font-size: 1.23rem;
  margin: 0 0 1.17rem;
`;

function SearchResultNumber(props: { value: number }) {
  return <Wrapper>{props.value.toLocaleString()} results</Wrapper>;
}

export default SearchResultNumber;
