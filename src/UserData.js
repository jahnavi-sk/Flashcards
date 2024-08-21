const UserTable = ({users}) =>{
    return(
        <>{
            users.map((curUser,index) => {
                const {word,definition} = curUser;
                return(
                    <tr key={index}>
            <td>{word}</td>
            <td>{definition}</td>
          </tr>
                )
            })
        }
        </>
    )
  }

  export default UserTable;