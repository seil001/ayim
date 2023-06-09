import React, { useState } from "react";

const DetPsy = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div
        className="create-post"
        style={{
          display: "grid",

          gridColumn: "column",
        }}
      >
        <div>
          <button
            className="createMS"
            style={{
              backgroundColor: "orange",
              color: "wheat",
              borderRadius: "8px",
              width: "300px",
              height: "50px",
              fontSize: "30px",
            }}
            onClick={() => setOpen(!open)}
          >
            Создать пост
          </button>
        </div>
        {open && (
          <form action="/forum/DetPsy/new/" method="POST" id="new-post">
            <div>
              {/* <input type="hidden" />  */}
              <label
                for="inputName"
                className="message-label"
                style={{
                  display: "flex",
                  padding: "5px",
                  color: "wheat",
                  fontSize: "30px",
                }}
              >
                Название*
              </label>
              <input
                type="text"
                className="form-control"
                id="inputName"
                style={{
                  width: "450px",
                  height: "50px",
                  borderRadius: "5px",
                }}
              />
            </div>
            <div className="form-group">
              <label
                for="inputMassage"
                className="message-label"
                style={{
                  display: "flex",
                  margin: "5px",
                  padding: "3px",
                  color: "wheat",
                  fontSize: "30px",
                }}
              >
                Тема*
              </label>
              <textarea
                name="massage"
                id="inputMessage"
                cols="58"
                rows="10"
              ></textarea>
              <div>
                <button
                  className="btn-send"
                  style={{
                    backgroundColor: "orange",
                    color: "wheat",
                    width: "150px",
                    height: "40px",
                    fontSize: "25px",
                    borderRadius: "10px",
                    margin: "10px",
                  }}
                >
                  Отправить
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default DetPsy;
