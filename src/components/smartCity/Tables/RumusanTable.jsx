import React from "react";
import { Table } from "antd";

function RumusanTable() {
  const dataSource = [
    {
      no: "1",
      prinsip: "Prinsip 1: Tadbir Urus Bandar Yang Baik",
      objektif: "OBJEKTIF 1.1: Pelaksanaan DPN2 Secara Efektif",
      strategi:
        "STRATEGI 1.1.1: Pelaksanaan setiap tindakan yang ditetapkan di dalam DPN2",
      tindakan:
        "TINDAKAN 1.1.1: Mengadakan sebaran DPN2 secara berkala dengan penglibatan agensi pelaksanan dan pihak berkepentingen",
      indikator: "Bilangan sebaran yang dilaksanakan setiap tahun",
      jumlahx: "27",
      julahy: "0",
      formula: "0",
      jumlahPencap: "27",
    },
    {
      no: "2",
      prinsip: "Prinsip 1: Tadbir Urus Bandar Yang Baik",
      objektif: "OBJEKTIF 1.1: Pelaksanaan DPN2 Secara Efektif",
      strategi:
        "STRATEGI 1.1.1: Pelaksanaan setiap tindakan yang ditetapkan di dalam DPN2",
      tindakan:
        "TINDAKAN 1.1.1.2: Menyediakan capaian DPN2 di Laman Portal PBT",
      indikator: "Bilangan PBT yang telah memuatnaik DPN2 di laman portal",
      jumlahx: "77",
      julahy: "102",
      formula: "Jumlah x/y*100",
      jumlahPencap: "75.5%",
    },
  ];
  return (
    <>
      <table>
        <tr>
          <th className="bill">No</th>
          <th>Prinsip</th>
          <th>Objektif</th>
          <th>Strategi</th>
          <th>Tindakan</th>
          <th>Indikator Pemantauan</th>
          <th>Jumlah (x)</th>
          <th>Jumlah Indikator (Y)</th>
          <th>Formula</th>
          <th>Jumlah Pencapaian</th>
        </tr>
        {dataSource.map((row, key) => {
          return (
            <tr key={key}>
              <td className="bill">{row.no}</td>
              <td>{row.prinsip}</td>
              <td>{row.objektif}</td>
              <td>{row.strategi}</td>
              <td>{row.tindakan}</td>
              <td>{row.indikator}</td>
              <td>{row.jumlahx}</td>
              <td>{row.julahy}</td>
              <td>{row.formula}</td>
              <td>{row.jumlahPencap}</td>
            </tr>
          );
        })}
      </table>
    </>
  );
}

export default RumusanTable;
