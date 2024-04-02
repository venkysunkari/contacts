import Contact from "../components/Contact";

function Saved({ contacts, deleteContact }) {
  return (
    <>
      <Contact contacts={contacts} deleteContact={deleteContact} />
    </>
  );
}

export default Saved;
