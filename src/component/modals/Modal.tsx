import Modal from "react-bootstrap/Modal";
import styled from "styled-components";
import { RootState } from "../../store";
import { useSelector } from "react-redux";
const BackButton = styled.button<{ $theme?: string }>`
  height: 40px;
  padding: 8px, 12px;
  border-radius: 24px;
  background-color: ${(props) =>
    props.$theme == "light" ? "#E5ECEE !important" : "#0f2e35"};
  color: #96adb3;
  gap: 4px;
`;
function CenteredModal(props: any) {
  const theme = useSelector((state: RootState) => state.theme.theme);
  return (
    <Modal
      {...props}
      className={`centered_modal ${theme == "light" && "light-mode"}`}
      size="lg"
      id={props.id ? "flexible" : ""}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div>
        <div
          className={`d-flex p-2  justify-content-between align-items-center`}
        >
          <p
            className={`flex-grow h-fit text-center ${
              theme == "light" ? "modal_title_light" : "modal_title"
            } `}
          >
            {props.title ? props.title : "Upload document"}
          </p>
          <img
            src={` ${theme == "light" ? "/close-light.svg" : "/close.svg"}`}
            alt=""
            className="cursor-pointer"
            width={26}
            height={26}
            onClick={props.onHide}
          />
        </div>
      </div>
      <Modal.Body>{props.children}</Modal.Body>
      <div className="d-flex gap-2 align-items-end justify-content-end pb-2 px-3">
        {props.onBack && (
          <BackButton
            $theme={theme}
            onClick={props.onBack}
            className="modal_button back_button"
          >
            <div className="d-flex align-items-center">Go back</div>
          </BackButton>
        )}
        <button onClick={props.onContinue} className="modal_button">
          <div className="d-flex align-items-center">
            {props.btnText}
            {props.btnText != "save" && (
              <img
                src={` ${
                  theme == "light" ? "/next-light.svg" : "/nextIcon.svg"
                }`}
                alt=""
              />
            )}
          </div>
        </button>
      </div>
    </Modal>
  );
}

export default CenteredModal;
