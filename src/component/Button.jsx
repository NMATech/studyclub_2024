function Button(props) {
  return (
    <button className="py-[6px] px-[12px] bg-blueSc-400 rounded-xl text-white mt-3 hover:bg-blueSc-400/80">
      {props.children}
    </button>
  );
}

export default Button;
