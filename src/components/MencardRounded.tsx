const MencardRounded = ({ imgUrl }: { imgUrl: string }) => {
  return (
    <div className="w-44  rounded-full">
      <img src={imgUrl} alt="img" />
    </div>
  );
};

export default MencardRounded;
