


function Contact({contacts,deleteContact}) {

 
  return (
    <div>

<div class="container"><br></br>
    <table class="table table-striped shadow"   width="100%" cellspacing="0">
        <thead>
            <tr style={{borderColor:'green'}} >
                <th data-field="name">Name</th>
                <th data-field="name">Email</th>
                <th data-field="price">Phone</th>
                <th>Delete</th>
                
            </tr>
        </thead>
     
        <tbody>
        {contacts.map((contact)=>{
          return (<tr >
            <td >{contact.data.name}</td>
            <td>{contact.data.email}</td>
            <td>{contact.data.phone}</td>
            <td><button type="button" onClick={()=>{deleteContact(contact.id)}} class="btn btn-outline-success btn-sm">Delete</button></td>
          
        </tr>)

        })}
        <br></br>
            
           
        </tbody>
    </table>
</div>

    </div>
  )
}

export default Contact

//<div className='col-4'></div>