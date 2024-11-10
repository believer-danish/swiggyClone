export const CategoryItems = ({ ele }) => {
  const { name, price, ratings, id, imageId, defaultPrice, description } =
    ele?.card?.info;
  const [isMore, setIsMore] = useState(true);
  const [des, setDes] = useState(description && description.slice(0, 145));
  const dispatch = useDispatch();

  const handleAddItem = () => {
    dispatch(addItem(ele));
  };
};
