export default (paymentsData:any, sortingType:string, sortingRule:string) => {
  const sortLogic = (a:any, b:any) => {
    if (sortingType === 'customerName') {
      if (a.customer_name.toLowerCase().split(' ').slice(1).filter((a:any) => a !== 'de' && a !== `d'`) > b.customer_name.toLowerCase().split(' ').slice(1).filter((b:any) => b !== 'de' && b !== `d'`))
        return (sortingRule === 'ASC' ? 1 : -1);
      else
        return (sortingRule === 'ASC' ? -1 : 1);
    }
        
    if (sortingType === 'status') {
      if (sortingRule === 'ASC')
        return (sortOrder.indexOf(a.status) - sortOrder.indexOf(b.status))
      return (sortOrder.indexOf(b.status) - sortOrder.indexOf(a.status));
    }
    return;
  
  };
  return paymentsData.sort(sortLogic);
};

const sortOrder = ['default', 'not_started', 'ready', 'in_progress', 'paid'];
