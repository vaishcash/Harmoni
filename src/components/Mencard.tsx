const Mencard = ({ imgUrl }: { imgUrl: string }) => {
  return (
    <div className="w-64">
      <img src={imgUrl} alt="img" />
    </div>
  );
};

export default Mencard;
