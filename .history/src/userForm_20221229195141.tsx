export function UserForm() {
  return (
    <>
   
      <h2 style={{textAlign:"center"}}>Bienvenue! Vous pouvez maintenant entrer vos informations!</h2>
   
      <form>
      <div className="container">
  <div className="row">
    <div className="col"><div className="form-group">
          <label htmlFor="exampleInputEmail1">Nom</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          /></div>
    <div className="col"><div className="form-group">
          <label htmlFor="exampleInputPassword1">Prénom</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div></div>
    <div className="w-100"></div>
    <div className="col">col</div>
    <div className="col">col</div>
  </div>
</div>

        
      </form>
    </>
  )
}
