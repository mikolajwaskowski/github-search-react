import styled from 'styled-components';

const BasicDot = styled.i`
  display: block;
  width: 0.7rem;
  height: 0.7rem;
  border-radius: 100%;
  background: ${(props) => props.color || '#dadada'};
  margin-right: 0.18rem;
`;

const colors: { [key: string]: string } = {
  php: '#505f93',
  js: '#dfcf60',
  assembly: '#6d4c19',
  'common lisp': '#45b58c',
  hcl: '#bdbdbe',
  jupyter: '#d85b1f',
  scss: '#C4568C',
  python: '#37709F',
  java: '#AB7B3F',
};

function LanguageDot(props: { language: string }) {
  const color = colors[props.language.toLowerCase()] || '#dadada';

  return <BasicDot color={color} />;
}

export default LanguageDot;
