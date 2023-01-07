const AdminCard = (props) => {
  return (
    <div onClick={props.onClick} className="admin-card">
      <h4>{props.title}</h4>
      <p>{props.description}</p>
    </div>
  );
};
export default AdminCard;
