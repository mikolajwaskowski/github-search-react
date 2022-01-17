import styled from 'styled-components';
import A from '../A';
import Img from '../Img';

type Size = 'xs' | 'lg' | 'xl';

const AvatarImg = styled(Img)<{ size: string }>`
  border-radius: 100%;
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  overflow: hidden;
`;

function Avatar(props: { url: string; src: string; size?: Size }) {
  let sizeVal = '';
  switch (props.size) {
    case 'xs':
      sizeVal = '1.18rem';
      break;
    case 'lg':
      sizeVal = '3.53rem';
      break;
    case 'xl':
      sizeVal = '17.4rem';
      break;
    default:
      sizeVal = '2rem';
  }
  return (
    <A href={props.url}>
      <AvatarImg src={props.src} alt="Avatar" size={sizeVal}></AvatarImg>
    </A>
  );
}

export default Avatar;
