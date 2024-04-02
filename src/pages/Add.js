
import Form from "../components/Form";

function Home({ formSub, contacts}) {
  console.log(contacts);
  return (
    <div>
      <div className="container  ">
        <div className="row justify-content-sm-center  my-5">
          <Form formSub={formSub} />
        </div>

        
      </div>
    </div>
  );
}

export default Home;
