import React from "react";

function AddParty() {
  return (
    <>
      <form>
        <div className="d-flex w-100 h-100 justify-content-center align-items-center">
          <div className="w-50 border bg-light p-5">
            <div>
                <label htmlFor="partyID">PartyID:</label>
              <input type="number" placeholder="Party ID" name="PartyID" className="form-control" />
            </div>
            <div>
                <label htmlFor="PartyName">PartyName:</label>
              <input type="text" placeholder="Party Name" name="PartyName" className="form-control" />
            </div><br />
            <button className="btn btn-info" onClick="submit">Submit</button>
          </div>
        </div>
      </form>
    </>
  );
}

export default AddParty;
