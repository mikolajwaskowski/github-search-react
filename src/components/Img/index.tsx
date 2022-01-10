function Img(props: { className?: string, src: string, alt: string}) {
  return <img className={props.className} src={props.src} alt={props.alt} />;
}

export default Img;
