export default (status) => {
  switch (status) {
    case 'ENTREGUE':
      return '#DFF0DF';
    case 'PENDENTE':
      return '#F0F0DF';
    case 'RETIRADA':
      return '#BAD2FF';
    case 'CANCELADA':
      return '#FAB0B0';
    default:
      return '#eee';
  }
};
