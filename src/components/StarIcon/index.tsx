import styled from 'styled-components';
import Img from '../Img';
import icon from './icon.svg';

const StarImg = styled(Img)`
  margin-right: 0.18rem;
`;

function StarIcon() {
  return <StarImg src={icon} alt="Stars icon" />;
}

export default StarIcon;
