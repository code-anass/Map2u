import React from "react";
import Badge from 'react-bootstrap/Badge';
import DataTable from "react-data-table-component";
import HeaderPengguna from "components/muo/HeaderContent/HeaderPengguna";
import FooterContent from "components/muo/FooterContent/FooterContent";
import AngleSvg from "assets/images/bg-angles.svg";

const SenaraiPenggunaBaharu = () => {
  const viewUser = (id) => {
    // open view modal
    document.getElementById("ViewModal").classList.add("show");
    document.getElementById("ViewModal").style.display = "block";
    document.getElementById("ViewModal").style.backgroundColor =
      "rgba(0, 0, 0, 0.5)";
  };

  const closeView = (id) => {
    // close view modal
    document.getElementById("ViewModal").classList.remove("show");
    document.getElementById("ViewModal").style.display = "none";
    document.getElementById("ViewModal").style.backgroundColor =
      "rgba(0, 0, 0, 0)";
  };
    return (
            <>
            <HeaderPengguna title="Senarai Pengguna Baharu" titleBreadcrumb="Senarai Pengguna Baharu"  subtitle="Senarai pengguna Malaysia Urban Observatory (MUO) yang baru mendaftar"/>
            <div
              className="d-flex justify-content-center"
              style={{ marginTop: "-100px" }}
            >
              <div className="card p-3" style={{ width: "98%",backgroundImage:`url(${AngleSvg})`,backgroundSize:"100% auto",backgroundRepeat:"no-repeat",backgroundPosition:"center bottom" }}>
                <DataTable
                  columns={[
                    {
                      name: "#",
                      selector: "id",
                      sortable: true,
                      width:"5%",
                    },
                    {
                      name: "No Kad Pengenalan",
                      selector: "noKp",
                      sortable: true,
                      width:"15%",
                    },
                    {
                      name: "Nama Penuh",
                      selector: "nama",
                      sortable: true,
                      width:"25%",
                    },
                    {
                      name: "E-mel",
                      selector: "email",
                      sortable: true,
                      width:"20%",
                    },
                    {
                      name: "Peranan",
                      selector: "peranan",
                      sortable: true,
                      width:"15%",
                    },
                    {
                      name: "Status",
                      selector: "RoleValue",
                      sortable: true,
                      width:"10%",
                    },
                    {
                      name: "Tindakan",
                    //   selector: "action",
                      sortable: true,
                      cell:(row)=>(
                        <>
                        <i
                            className="bi bi-eye-fill"
                            style={{
                            fontSize: "20px",
                            color: "#0061f2",
                            cursor: "pointer",
                            margin:"5px",
                            }}
                            onClick={() => viewUser(1)}
                        />
                        </>
                      )
                    },
                  ]}
                  data={[
                    {
                      id: "1",
                      noKp:"090102099029",
                      nama:"Firdaus Luqman",
                      email:"asd31@foundtoo.com",
                      peranan: "-None-",
                      RoleValue: 
                        <Badge pill bg="danger">
                            Inactive
                        </Badge>,
                    },
                    {
                      id: "2",
                      noKp:"800815145821",
                      nama:"MUHAMMAD FITRI BIN ABD SAMAH",
                      email:"fitri@ns.gov.my",
                      peranan: "-None-",
                      RoleValue:                         
                        <Badge pill bg="danger">
                            Inactive
                        </Badge>,
                    },
                    {
                      id: "3",
                      noKp:"810222045277",
                      nama:"Hafidz Nasruddin",
                      email:"hafidz@ppj.gov.my",
                      peranan: "-None-",
                      RoleValue: 
                        <Badge pill bg="danger">
                            Inactive
                        </Badge>,
                    },
                  ]}
                  pagination
                  highlightOnHover
                  responsive
                />
              </div>
            </div>
            {/* modal view role */}
            <div
              className="modal fade"
              id="ViewModal"
              tabIndex={-1}
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="viewrole">
                    PENGGUNA: 
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                      onClick={() => closeView()}
                    />
                  </div>
                  <div className="modal-body">
                    <table class="table table-bordered">
                      <tbody>
                        <tr>
                          <th>No Kad Pengenalan</th>
                          <td>010203040506</td>
                        </tr>
                        <tr>
                          <th>Nama Penuh</th>
                          <td>Super Admin</td>
                        </tr>
                        <tr>
                          <th>Peranan Pengguna</th>
                          <td>Super Admin</td>
                        </tr>
                        <tr>
                          <th>E-mel</th>
                          <td>superadmin@gmail.com</td>
                        </tr>
                        <tr>
                          <th>No Telefon</th>
                          <td>0123456789</td>
                        </tr>
                        <tr>
                          <th>Status</th>
                          <td>
                            <Badge pill bg="danger">
                              Inactive
                            </Badge>
                          </td>
                        </tr>
                        <tr>
                          <th>Kategori Pengguna</th>
                          <td>- None -</td>
                        </tr>
                        <tr>
                          <th>Cipta Pada</th>
                          <td>07-06-2022 23:32:10</td>
                        </tr>
                        <tr>
                          <th>Kemaskini Pada</th>
                          <td>18-04-2023 21:54:45</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                      onClick={() => closeView()}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          {/* modal view role */}
            <FooterContent />
          </>
      );
};

export default SenaraiPenggunaBaharu;
