const setDataStrg = setItem => {
  const getData = JSON.parse(localStorage.getItem('shoping-cart'));
  let strgArr;
  if(getData){
     const newStrgArr = [...getData, setItem];
     localStorage.setItem('shoping-cart', JSON.stringify(newStrgArr))
  }
  else{
    strgArr = [];
    strgArr.push(setItem);
    localStorage.setItem('shoping-cart', JSON.stringify(strgArr))
  }

}

const loadData = () => {
  const getData = JSON.parse(localStorage.getItem('shoping-cart'));
  return getData
}

const removeItemStrg = itemId => {
  const getData = JSON.parse(localStorage.getItem('shoping-cart'))
  if(getData){
    const dataFilter = getData.filter(elData => elData.id != itemId);
    localStorage.setItem('shoping-cart', JSON.stringify(dataFilter))
  }
}

export { setDataStrg, loadData, removeItemStrg };