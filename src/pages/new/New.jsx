import "./New.scss";
import DriveFolderUploadOutlined from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";

const New = ({ inputs, title }) => {
  const [file, setFile] = useState();
  return (
    <div className="new">
      <div className="top">
        <h3>{title}</h3>
      </div>
      <div className="bottom">
        <div className="left">
          <img
            src={
              file
                ? URL.createObjectURL(file)
                : "https://archive.org/download/no-photo-available/no-photo-available.png"
            }
            alt="no image"
          />
        </div>
        <div className="right">
          <form>
            <div className="formInput">
              <label htmlFor="file">
                Image: <DriveFolderUploadOutlined className="icon" />
              </label>
              <input
                type="file"
                id="file"
                style={{ display: "none" }}
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>
            {inputs.map((input) => {
              return (
                <div className="formInput" key={input.id}>
                  <label>{input.label} : </label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              );
            })}
            <button>Save</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default New;
