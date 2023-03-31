function EmployeeRow(props) {
    const {item, onEmpDelete}= props;    
  return (
    <tr className={item.gender === "female" ? "red" : ""}>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.gender}</td>
      <td>{item.designation}</td>
      <td>{item.salary}</td>
      <td><button onClick={()=>{onEmpDelete(item.id)}}>Delete</button></td>
    </tr>
  );
}
export default EmployeeRow;
