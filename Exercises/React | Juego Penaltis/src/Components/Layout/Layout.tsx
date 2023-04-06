import { useState } from "react";
import { Button } from "./Layout.styles";
import Modal from "../Modal/Modal";

function Layout() {

  const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex items-center justify-center">
        <Button
          onClick={() => setShowModal(true)}
        >
          Play

        </Button>
        {showModal && <Modal onClose = {() => setShowModal(false)}/> }
      </div>
    </div>
  )
}

export default Layout;