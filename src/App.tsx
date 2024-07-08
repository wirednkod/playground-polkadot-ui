import { useState } from "react";
import { Button, Modal } from "antd";
import "./App.css";

import {
  AccountProvider,
  ExtensionProvider,
  SelectedAccountType,
} from "@polkadot-ui/react";

function App() {
  const [open, setOpen] = useState<boolean>(false);
  const [modalSelectedAccount, setModalSelectedAccount] =
    useState<SelectedAccountType>(null);

  const [selectedAccount, setSelectedAccount] =
    useState<SelectedAccountType>(null);

  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Open AntD Modal
      </Button>
      <div style={{ width: "500px" }}>
        <ExtensionProvider setSelected={setSelectedAccount}>
          <AccountProvider
            selected={selectedAccount}
            setSelected={setSelectedAccount}
          />
        </ExtensionProvider>
      </div>
      <p className="read-the-docs">
        Extension selected: {selectedAccount?.extension}{" "}
      </p>
      <p className="read-the-docs">Account name: {selectedAccount?.name}</p>
      <p className="read-the-docs">
        Account address: {selectedAccount?.address}
      </p>

      <Modal
        width={600}
        open={open}
        onCancel={() => setOpen(false)}
        footer={<Button onClick={() => setOpen(false)}>Close</Button>}
      >
        <ExtensionProvider setSelected={setModalSelectedAccount}>
          <AccountProvider
            selected={modalSelectedAccount}
            setSelected={setModalSelectedAccount}
          />
        </ExtensionProvider>
        <p className="read-the-docs">
          Extension selected: {modalSelectedAccount?.extension}{" "}
        </p>
        <p className="read-the-docs">
          Account name: {modalSelectedAccount?.name}
        </p>
        <p className="read-the-docs">
          Account address: {modalSelectedAccount?.address}
        </p>
      </Modal>
    </>
  );
}

export default App;
