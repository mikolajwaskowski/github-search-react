import styled from 'styled-components';

const SkeletonBase = styled.div`
  position: relative;
  width: 6rem;
  height: 1.5rem;
  margin-bottom: 1rem;
  background: #d5d5d5;
  animation: skeleton-loading 0.6s linear infinite alternate;

  @keyframes skeleton-loading {
    from {
      opacity: 1;
    }
    to {
      opacity: 0.38;
    }
  }
`;

const SkeletonBlock = styled(SkeletonBase)`
  width: 100%;
  height: 9rem;
`;

const SkeletonCircle = styled(SkeletonBase)`
  border-radius: 100%;
  width: 17.4rem;
  height: 17.4rem;
`;

type SkeletonType = 'block' | 'circle' | 'paragraph';

function getArrayOfLength(number: number): any[] {
  return [...Array(number)].map((_, index) => index);
}

function Skeleton(props: { type?: SkeletonType; number?: number }) {
  switch (props.type) {
    case 'block':
      return (
        <>
          {getArrayOfLength(props.number || 1).map((i) => (
            <SkeletonBlock key={i} />
          ))}
        </>
      );

    case 'circle':
      return (
        <>
          {getArrayOfLength(props.number || 1).map((i) => (
            <SkeletonCircle key={i} />
          ))}
        </>
      );

    default:
      return (
        <>
          {getArrayOfLength(props.number || 1).map((i) => (
            <SkeletonBase key={i} />
          ))}
        </>
      );
  }
}

export default Skeleton;
