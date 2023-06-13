import React from "react";
import Badge from 'react-bootstrap/Badge';
import DataTable from "react-data-table-component";
import HeaderDetailPengguna from "components/muo/HeaderContent/HeaderDetailPengguna";
import FooterContent from "components/muo/FooterContent/FooterContent";
import AngleSvg from "assets/images/bg-angles.svg";

const TambahPengguna = () => {
    return (
            <>
            <HeaderDetailPengguna title="Tambah Pengguna Baharu" titleBreadcrumb="Senarai Pengguna / Tambah Pengguna Baharu"/>
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
                            onClick={() => console.log("test")}
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
            <FooterContent />
          </>
      );
};

export default TambahPengguna;
