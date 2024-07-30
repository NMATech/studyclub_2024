function Button(props) {
  return (
    <button className="py-[6px] px-[12px] bg-myPrimary rounded-xl text-myBg mt-3 hover:bg-myPrimary/80">
      {props.children}
    </button>
  );
}

export default Button;
