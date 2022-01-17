import styled from 'styled-components';
import Img from '../Img';
import icon from './icon.svg';

const FollowersImg = styled(Img)`
  margin-right: 0.18rem;
`;

function FollowersIcon() {
  return <FollowersImg src={icon} alt="Followers icon" />;
}

export default FollowersIcon;
