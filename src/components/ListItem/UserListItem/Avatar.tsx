import styled from 'styled-components';
import A from '../../A';
import Img from '../../Img';

const AvatarImg = styled(Img)`
  border-radius: 100%;
  width: 1.18rem;
  height: 1.18rem;
  overflow: hidden;
`;

function Avatar(props: { url: string; src: string }) {
  return (
    <A href={props.url}>
      <AvatarImg src={props.src} alt="Avatar"></AvatarImg>
    </A>
  );
}

export default Avatar;
