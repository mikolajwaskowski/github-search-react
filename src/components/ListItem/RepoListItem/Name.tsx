import styled from 'styled-components';
import A from '../../A';

const NameA = styled(A)`
  display: block;
  margin: 0 0 0.4rem;
  height: 1.42rem;
  overflow: hidden;
`;

function Name(props: { url: string; name: string }) {
  return (
    <NameA href={props.url} target="_blank">
      {props.name}
    </NameA>
  );
}

export default Name;
