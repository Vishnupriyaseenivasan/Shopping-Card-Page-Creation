const Account = () => {
    return(
        <div >
           <center><h1>This is your Account section.</h1></center> 
           <form>
            <div className="account">
            <label>User Name:</label>
            <input type="text"></input><br></br><br></br>
            <label>Password :</label>
            <input type="password"></input><br></br><br></br>
            
            <button className="button">Login</button>
            </div>
            </form>
        </div>
    )
}
export default Account;