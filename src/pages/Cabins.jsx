import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CabinTable from "../features/cabins/CabinTable";
import Button from "../ui/Button";
import { useState } from "react";
import CreateCabinForm from "../features/cabins/CreateCabinForm";
import Modal from "./../ui/Modal";

// import { getCabins } from "./../services/apiCabins";

function Cabins() {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>

        <p>filer / sort</p>
      </Row>
      <Row>
        <CabinTable />
        <Button onClick={() => setShowForm((show) => !show)}>
          {!showForm ? "add new" : "Close"}
        </Button>
        {showForm && (
          <Modal onClose={() => setShowForm(false)}>
            <CreateCabinForm onCloseModal={() => setShowForm(false)} />
          </Modal>
        )}
      </Row>
    </>
  );
}

export default Cabins;
