import React from "react";
import HeaderContent from "components/muo/HeaderContent/HeaderContent";
import DataTable from "react-data-table-component";
import FooterContent from "components/muo/FooterContent/FooterContent";

const Roles = () => {
  const updateRole = (id) => {
    // open update modal
    document.getElementById("UpdateRoleModal").classList.add("show");
    document.getElementById("UpdateRoleModal").style.display = "block";
    document.getElementById("UpdateRoleModal").style.backgroundColor =
      "rgba(0, 0, 0, 0.5)";
  };

  const closeUpdateRole = () => {
    // close update modal
    document.getElementById("UpdateRoleModal").classList.remove("show");
    document.getElementById("UpdateRoleModal").style.display = "none";
    document.getElementById("UpdateRoleModal").style.backgroundColor =
      "rgba(0, 0, 0, 0)";
  };

  const viewRole = (id) => {
    // open view modal
    document.getElementById("ViewRoleModal").classList.add("show");
    document.getElementById("ViewRoleModal").style.display = "block";
    document.getElementById("ViewRoleModal").style.backgroundColor =
      "rgba(0, 0, 0, 0.5)";
  };

  const closeViewRole = () => {
    // close view modal
    document.getElementById("ViewRoleModal").classList.remove("show");
    document.getElementById("ViewRoleModal").style.display = "none";
    document.getElementById("ViewRoleModal").style.backgroundColor =
      "rgba(0, 0, 0, 0)";
  };

  const deleteRole = () => {
    // open delete modal
    document.getElementById("deleteModal").classList.add("show");
    document.getElementById("deleteModal").style.display = "block";
    document.getElementById("deleteModal").style.backgroundColor =
      "rgba(0, 0, 0, 0.5)";
  };

  const closeDeleteRole = () => {
    // close delete modal
    document.getElementById("deleteModal").classList.remove("show");
    document.getElementById("deleteModal").style.display = "none";
    document.getElementById("deleteModal").style.backgroundColor =
      "rgba(0, 0, 0, 0)";
  };

  return (
    <>
      <HeaderContent
        title="Peranan Pengguna"
        titleBreadcrumb="Peranan Pengguna"
        subtitle="Senarai peranan pengguna"
      />

      <div
        className="d-flex justify-content-center"
        style={{ marginTop: "-100px" }}
      >
        <div className="card p-3" style={{ width: "98%" }}>
          {/* button Add */}
          <div className="d-flex justify-content-start mb-3">
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#NewRoleModal"
            >
              New Role
            </button>
          </div>
          <DataTable
            columns={[
              {
                name: "#",
                selector: "id",
                sortable: true,
              },
              {
                name: "Jenis Peranan",
                selector: "peranan",
                sortable: true,
              },
              {
                name: "Role Value",
                selector: "RoleValue",
                sortable: true,
              },
              {
                name: "Tindakan",
                selector: "action",
                sortable: true,
              },
            ]}
            data={[
              {
                id: "1",
                peranan: "Super Admin",
                RoleValue: "100",
                action: (
                  <div className="d-flex gap-3">
                    <i
                      className="bi bi-eye-fill"
                      style={{
                        fontSize: "20px",
                        color: "orange",
                        cursor: "pointer",
                      }}
                      onClick={() => viewRole(1)}
                    />
                    {/* icon edit */}
                    <i
                      className="bi bi-pencil-fill"
                      style={{
                        fontSize: "20px",
                        color: "#0061f2",
                        cursor: "pointer",
                      }}
                      onClick={() => updateRole(1)}
                    />
                    {/* icon delete */}
                    <i
                      className="bi bi-trash-fill"
                      style={{
                        fontSize: "20px",
                        color: "red",
                        cursor: "pointer",
                      }}
                      onClick={() => deleteRole(1)}
                    />
                  </div>
                ),
              },
              {
                id: "2",
                peranan: "Admin",
                RoleValue: "99",
                action: (
                  <div className="d-flex gap-3">
                    <i
                      className="bi bi-eye-fill"
                      style={{
                        fontSize: "20px",
                        color: "orange",
                        cursor: "pointer",
                      }}
                      onClick={() => console.log("test")}
                    />
                    {/* icon edit */}
                    <i
                      className="bi bi-pencil-fill"
                      style={{
                        fontSize: "20px",
                        color: "#0061f2",
                        cursor: "pointer",
                      }}
                      onClick={() => console.log("test")}
                    />
                    {/* icon delete */}
                    <i
                      className="bi bi-trash-fill"
                      style={{
                        fontSize: "20px",
                        color: "red",
                        cursor: "pointer",
                      }}
                      onClick={() => console.log("test")}
                    />
                  </div>
                ),
              },
              {
                id: "3",
                peranan: "Pengguna Awam",
                RoleValue: "98",
                action: (
                  <div className="d-flex gap-3">
                    <i
                      className="bi bi-eye-fill"
                      style={{
                        fontSize: "20px",
                        color: "orange",
                        cursor: "pointer",
                      }}
                      onClick={() => console.log("test")}
                    />
                    {/* icon edit */}
                    <i
                      className="bi bi-pencil-fill"
                      style={{
                        fontSize: "20px",
                        color: "#0061f2",
                        cursor: "pointer",
                      }}
                      onClick={() => console.log("test")}
                    />
                    {/* icon delete */}
                    <i
                      className="bi bi-trash-fill"
                      style={{
                        fontSize: "20px",
                        color: "red",
                        cursor: "pointer",
                      }}
                      onClick={() => console.log("test")}
                    />
                  </div>
                ),
              },
              {
                id: "4",
                peranan: "Pentadbir Modul",
                RoleValue: "50",
                action: (
                  <div className="d-flex gap-3">
                    <i
                      className="bi bi-eye-fill"
                      style={{
                        fontSize: "20px",
                        color: "orange",
                        cursor: "pointer",
                      }}
                      onClick={() => console.log("test")}
                    />
                    {/* icon edit */}
                    <i
                      className="bi bi-pencil-fill"
                      style={{
                        fontSize: "20px",
                        color: "#0061f2",
                        cursor: "pointer",
                      }}
                      onClick={() => console.log("test")}
                    />
                    {/* icon delete */}
                    <i
                      className="bi bi-trash-fill"
                      style={{
                        fontSize: "20px",
                        color: "red",
                        cursor: "pointer",
                      }}
                      onClick={() => console.log("test")}
                    />
                  </div>
                ),
              },
            ]}
            pagination
            highlightOnHover
            responsive
          />
        </div>
      </div>
      {/* modal new role */}
      <div
        className="modal fade"
        id="NewRoleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="newrole">
                Create New Role
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="RoleName" className="form-label">
                    Role Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="RoleName"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="RoleValue" className="form-label">
                    Role Value
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="RoleValue"
                    aria-describedby="emailHelp"
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save New Role
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* end modal new role */}

      {/* modal update role */}
      <div
        className="modal fade"
        id="UpdateRoleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="updaterole">
                Update Role
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => closeUpdateRole()}
              />
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="RoleName" className="form-label">
                    Role Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="RoleName"
                    aria-describedby="emailHelp"
                    value={"Super Admin"}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="RoleValue" className="form-label">
                    Role Value
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="RoleValue"
                    aria-describedby="emailHelp"
                    value={"100"}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={() => closeUpdateRole()}
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save Update Role
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* end modal update role */}

      {/* modal view role */}
      <div
        className="modal fade"
        id="ViewRoleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="viewrole">
                View Role
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => closeViewRole()}
              />
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="RoleName" className="form-label">
                    Role Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="RoleName"
                    aria-describedby="emailHelp"
                    value={"Super Admin"}
                    disabled
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="RoleValue" className="form-label">
                    Role Value
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="RoleValue"
                    aria-describedby="emailHelp"
                    value={"100"}
                    disabled
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={() => closeViewRole()}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* delete modal */}
      <div
        class="modal fade"
        id="deleteModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header" style={{ borderBottom: "0" }}>
              <h1 class="modal-title fs-5" id="staticBackdropLabel"></h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => closeDeleteRole()}
              ></button>
            </div>
            <div class="modal-body">
              {/* icon warning center */}
              <div class="d-flex justify-content-center">
                <i
                  class="bi bi-exclamation-triangle-fill"
                  style={{
                    fontSize: "80px",
                    color: "red",
                    marginTop: "-70px",
                  }}
                ></i>
              </div>
              <div
                class="d-flex align-items-center justify-content-center"
                style={{ flexDirection: "column" }}
              >
                <h1 class="fs-5">Adakah Anda Pasti?</h1>

                <p class="fs-6">
                  Anda tidak akan dapat mengembalikan tindakan ini!
                </p>
              </div>
            </div>
            <div
              class="modal-footer d-flex justify-content-center"
              style={{ borderTop: "0" }}
            >
              <button
                type="button"
                class="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
      <FooterContent />
    </>
  );
};

export default Roles;
