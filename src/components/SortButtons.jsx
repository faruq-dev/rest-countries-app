const SortButtons = ({sort, sortOrder}) => {
  return (
    <>
      <button className="sort-btn" onClick={sort}>Sort By Population ({sortOrder})</button> 
    </>
  );
};

export default SortButtons;
