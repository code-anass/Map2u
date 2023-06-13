import React from "react";
import Chart from "react-apexcharts";
import HeaderContent from "components/muo/HeaderContent/HeaderContent";
import FooterContent from "components/muo/FooterContent/FooterContent";

const DashboardPengguna = () => {
    return (
        <>
          <HeaderContent title="Dashboard Pengguna" titleBreadcrumb="Dashboard Pengguna" />
          <div
            className="d-flex justify-content-center"
            style={{ marginTop: "-100px" }}
          >
            <div className="card p-3" style={{ width: "98%" }}>
              <h6 className="mb-4">
                <span style={{ color: "#0061f2" }}>Monday</span>{" "}
                <span style={{ color: "#8F8F8F" }}>· 15 May 2023</span>
              </h6>
    
              <div className="row">
                <div className="col-md-3">
                  <div
                    className="card p-3"
                    style={{ backgroundColor: "#0061f2", color: "#DFDFDF" }}
                  >
                    <h5>Jumlah Pengguna</h5>
                    <span className="mb-4">
                      <span style={{ fontSize: "40px", color: "#fff" }}>83</span>
                    </span>
                  </div>
                </div>
                <div className="col-md-3">
                  <div
                    className="card p-3"
                    style={{ backgroundColor: "#6900c7", color: "#DFDFDF" }}
                  >
                    <h5>Jumlah Pentadbir Modul</h5>
                    <span className="mb-4">
                      <span style={{ fontSize: "40px", color: "#fff" }}>1</span>
                    </span>
                  </div>
                </div>
                <div className="col-md-3">
                  <div
                    className="card p-3"
                    style={{ backgroundColor: "#00ac69", color: "#DFDFDF" }}
                  >
                    <h5>Jumlah Pengguna Aktif</h5>
                    <span className="mb-4">
                      <span style={{ fontSize: "40px", color: "#fff" }}>28</span>
                    </span>
                  </div>
                </div>
                <div className="col-md-3">
                  <div
                    className="card p-3"
                    style={{ backgroundColor: "#f4a100", color: "#DFDFDF" }}
                  >
                    <h5>Jumlah Pengguna Tidak Aktif</h5>
                    <span className="mb-4">
                      <span style={{ fontSize: "40px", color: "#fff" }}>55</span>
                    </span>
                  </div>
                </div>
              </div>
    
              <div className="row">
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-header">
                      <h6 style={{ color: "#4a4a4a" }}>
                        Jumlah Pengguna (%)
                      </h6>
                    </div>
                    <div className="card-body">
                      <Chart
                        options = {{
                            labels: ['Super Admin', 'Pentadbir', ' Pentadbir Modul', 'Pengguna Berdaftar'],
                            chart: {
                            type: 'donut',
                          },
                          responsive: [{
                            breakpoint: 480,
                            options: {
                              chart: {
                                width: 200
                              },
                              legend: {
                                position: 'right'
                              }
                            }
                          }]
                          }}
                          series={[44, 55, 41, 17]}
                          type="donut"
                          width="100%"
                          height="300px"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <FooterContent />
        </>
      );
};

export default DashboardPengguna;
