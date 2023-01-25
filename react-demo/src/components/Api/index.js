import useFetchData from './Api'; //import hook functioned fetch method
import "../demo.css";
 
function Api() {
    const { data } = useFetchData("https://jsonplaceholder.typicode.com/users");  // call fake api

  return (
      <div className='App-header'>
          {data && (
            data.map((user) =>(
                <div  key={user.id}>
                 <table  cellPadding={10} border="1px solid black">
                    <tbody>
                        <tr>
                        <td >
                            {user.name}
                        </td>
                        <td>
                            {user.email}
                        </td>
                        </tr>
                    </tbody>
               
                 </table>
                </div>
            ))
          )}
      </div>
  )
}

export default Api;