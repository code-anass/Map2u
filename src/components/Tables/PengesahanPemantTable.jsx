import React from "react";
import { Table, Radio, Space } from "antd";

function PengesahanPemantTable() {
  const dataSource = [
    {
      no: "1",
      objektif: "OBJEKTIF 1.1: Pelaksanaan DPN2 Secara Efektif",
      strategi:
        "STRATEGI 1.1.1: Pelaksanaan setiap tindakan yang ditetapkan di dalam DPN2",
      tindakan:
        "TINDAKAN 1.1.1: Mengadakan sebaran DPN2 secara berkala dengan penglibatan agensi pelaksanan dan pihak berkepentingen",
      indikator: "Kualitatif",
      jawapan: "Ya",
      lampiran: "Sistem Laman Web",
    },
    {
      no: "2",
      objektif: "OBJEKTIF 1.1: Pelaksanaan DPN2 Secara Efektif",
      strategi:
        "STRATEGI 1.1.1: Pelaksanaan setiap tindakan yang ditetapkan di dalam DPN2",
      tindakan:
        "TINDAKAN 1.1.1.2: Menyediakan capaian DPN2 di Laman Portal PBT",
      indikator: "Kualitatif",
      jawapan: "Tidak",
      lampiran: "",
    },
  ];
  return (
    <div style={{ marginTop: "20px" }}>
      <table className="">
        <tr>
          <th className="bill">No</th>

          <th>Objektif</th>
          <th>Strategi</th>
          <th>Tindakan</th>
          <th>Kategori Indikator</th>
          <th>Jawapan Pemantauan</th>
          <th>Lampiran</th>
          <th style={{ width: "115px" }}>Pengesahan</th>
          <th style={{ width: "135px" }}>Ulasan</th>
        </tr>
        {dataSource.map((row, key) => {
          return (
            <tr key={key}>
              <td className="bill">{row.no}</td>

              <td>{row.objektif}</td>
              <td>{row.strategi}</td>
              <td>{row.tindakan}</td>
              <td>{row.indikator}</td>
              <td>{row.jawapan}</td>
              <td>{row.lampiran}</td>
              <td>
                <Radio.Group>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <Radio value={1}>Sah</Radio>
                    <Radio value={2}>Tidak Sah</Radio>
                  </div>
                </Radio.Group>
              </td>
              <td>{key == 0 ? <button>Sila Semak semula</button> : null}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default PengesahanPemantTable;
