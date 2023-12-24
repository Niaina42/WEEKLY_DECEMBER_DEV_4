import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { BaseUrl } from "../../../services/http/https";
import useDownloader from "react-use-downloader";

function QrModal({ show, setShow, link }) {
  const { size, elapsed, percentage, download, cancel, error, isInProgress } =
    useDownloader();
  const qrCode = link && link.qrcodes && link.qrcodes[0];

  const handleClose = () => setShow(false);

  return (
    <>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>{link.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-md-12">
              <b>Lien originale:</b> {link.original}
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-12">
              <b>QR code:</b>
              <br />
              <div className="mt-3 text-center">
                <img src={BaseUrl + "/images/" + qrCode.qrcode} />
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={() =>
              download(
                BaseUrl + "/images/" + qrCode.qrcode,
                link.title + ".png"
              )
            }
          >
            Télécharger
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default QrModal;
