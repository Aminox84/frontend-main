export function UserForm() {
  return (
    <>
   
      <h2 style={{textAlign:"center"}}>Bienvenue! Vous pouvez maintenant entrer vos informations!</h2>
   
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Nom</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
      </form>
    </>
  )
}
