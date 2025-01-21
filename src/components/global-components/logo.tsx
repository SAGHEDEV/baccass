const Logo = ({ size }: { size: number }) => {
  return (
    <div
      className={` !m-0 font-semibold text-green cursor-pointer sm:text-[24px]`}
      style={{ fontSize: `${size}px` }}
    >
      Baccass
    </div>
  );
};

export default Logo;
