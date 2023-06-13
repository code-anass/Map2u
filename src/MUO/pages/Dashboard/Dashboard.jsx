import React from "react";
import Chart from "react-apexcharts";
import HeaderContent from "components/muo/HeaderContent/HeaderContent";
import FooterContent from "components/muo/FooterContent/FooterContent";

const Dashboard = () => {
  return (
    <>
      <HeaderContent title="Dashboard" titleBreadcrumb="Dashboard" />
      <div
        className="d-flex justify-content-center"
        style={{ marginTop: "-100px" }}
      >
        <div className="card p-3" style={{ width: "98%" }}>
          <h6 className="mb-4">
            <span style={{ color: "#0061f2" }}>Sunday</span>{" "}
            <span style={{ color: "#8F8F8F" }}>· 14 May 2023</span>
          </h6>

          <div className="row">
            <div className="col-md-3">
              <div
                className="card p-3"
                style={{ backgroundColor: "#0061f2", color: "#DFDFDF" }}
              >
                <h5>Sustainable Development Goal (SDGs)</h5>
                <span className="mb-4">
                  <span style={{ fontSize: "40px", color: "#fff" }}>85</span>
                  <span> /100</span>
                </span>
                <div
                  className="progress"
                  style={{
                    height: "10px",
                    background: "rgba(255, 255, 255, 0.5)",
                  }}
                >
                  <div
                    className="progress-bar bg-white"
                    role="progressbar"
                    style={{
                      width: "50%",
                    }}
                    aria-valuenow={50}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div
                className="card p-3"
                style={{ backgroundColor: "#6900c7", color: "#DFDFDF" }}
              >
                <h5>New Urban Agenda (NUA)</h5>
                <span className="mb-4">
                  <span style={{ fontSize: "40px", color: "#fff" }}>95</span>
                  <span> /100</span>
                </span>
                <div
                  className="progress"
                  style={{
                    height: "10px",
                    background: "rgba(255, 255, 255, 0.5)",
                  }}
                >
                  <div
                    className="progress-bar bg-white"
                    role="progressbar"
                    style={{ width: "50%" }}
                    aria-valuenow={50}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div
                className="card p-3"
                style={{ backgroundColor: "#00ac69", color: "#DFDFDF" }}
              >
                <h5>Rancangan Fizikal Negara (RFN)</h5>
                <span className="mb-4">
                  <span style={{ fontSize: "40px", color: "#fff" }}>65</span>
                  <span> /100</span>
                </span>
                <div
                  className="progress"
                  style={{
                    height: "10px",
                    background: "rgba(255, 255, 255, 0.5)",
                  }}
                >
                  <div
                    className="progress-bar bg-white"
                    role="progressbar"
                    style={{ width: "50%" }}
                    aria-valuenow={50}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div
                className="card p-3"
                style={{ backgroundColor: "#f4a100", color: "#DFDFDF" }}
              >
                <h5>Dasar Perbandaran Negara (DPN)</h5>
                <span className="mb-4">
                  <span style={{ fontSize: "40px", color: "#fff" }}>52</span>
                  <span> /100</span>
                </span>
                <div
                  className="progress"
                  style={{
                    height: "10px",
                    background: "rgba(255, 255, 255, 0.5)",
                  }}
                >
                  <div
                    className="progress-bar bg-white"
                    role="progressbar"
                    style={{ width: "50%" }}
                    aria-valuenow={50}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h6 style={{ color: "#4a4a4a" }}>
                    Dasar Perancangan Fizikal Desa Negara (DPFDN)
                  </h6>
                </div>
                <div className="card-body">
                  {/* chart line */}
                  <Chart
                    options={{
                      chart: {
                        id: "basic-bar",
                      },
                      xaxis: {
                        categories: [
                          "2019",
                          "2020",
                          "2021",
                          "2022",
                          "2023",
                          "2024",
                          "2025",
                        ],
                      },
                    }}
                    series={[
                      {
                        name: "series-1",
                        data: [30, 40, 45, 50, 49, 60, 70],
                      },
                    ]}
                    type="line"
                    width="100%"
                    height="300px"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h6 style={{ color: "#4a4a4a" }}>
                    Indeks Komposit Pembangunan (IKP)
                  </h6>
                </div>
                <div className="card-body">
                  <Chart
                    options={{
                      chart: {
                        id: "basic-bar",
                      },
                      xaxis: {
                        categories: [
                          "2019",
                          "2020",
                          "2021",
                          "2022",
                          "2023",
                          "2024",
                          "2025",
                        ],
                      },
                    }}
                    series={[
                      {
                        name: "series-1",
                        data: [30, 40, 45, 50, 49, 60, 70],
                      },
                    ]}
                    type="bar"
                    width="100%"
                    height="300px"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h6 style={{ color: "#4a4a4a" }}>Rancangan Pemajuan (RP)</h6>
                </div>
                <div className="card-body">
                  <div className="mb-3">
                    <div className="d-flex justify-content-between mb-2">
                      <label htmlFor="Sunting">Sunting</label>
                      <span>25%</span>
                    </div>
                    <div className="progress" id="Sunting">
                      <div
                        className="progress-bar bg-danger"
                        role="progressbar"
                        style={{ width: "25%" }}
                        aria-valuenow={25}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="d-flex justify-content-between mb-2">
                      <label htmlFor="Kemaskini">Kemaskini</label>
                      <span>50%</span>
                    </div>
                    <div className="progress" id="Kemaskini">
                      <div
                        className="progress-bar bg-warning"
                        role="progressbar"
                        style={{ width: "50%" }}
                        aria-valuenow={50}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="d-flex justify-content-between mb-2">
                      <label htmlFor="LaporanPercapaian">
                        Laporan Percapaian
                      </label>
                      <span>75%</span>
                    </div>
                    <div className="progress" id="LaporanPercapaian">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "75%" }}
                        aria-valuenow={75}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="d-flex justify-content-between mb-2">
                      <label htmlFor="Cetak">Cetak</label>
                      <span>100%</span>
                    </div>
                    <div className="progress" id="Cetak">
                      <div
                        className="progress-bar bg-success"
                        role="progressbar"
                        style={{ width: "100%" }}
                        aria-valuenow={100}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h6 style={{ color: "#4a4a4a" }}>Pemantauan</h6>
                </div>
                <div className="card-body">
                  {/* Radial Bar Chart */}
                  <Chart
                    options={{
                      chart: {
                        height: 350,
                        type: "radialBar",
                      },
                      plotOptions: {
                        radialBar: {
                          dataLabels: {
                            name: {
                              fontSize: "22px",
                            },
                            value: {
                              fontSize: "16px",
                            },
                            total: {
                              show: true,
                              label: "Total",
                              formatter: function (w) {
                                // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                                return 249;
                              },
                            },
                          },
                        },
                      },
                      labels: [
                        "Team A",
                        "Team B",
                        "Team C",
                        "Team D",
                        "Team E",
                      ],
                    }}
                    series={[44, 55, 67, 83]}
                    type="radialBar"
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

export default Dashboard;
