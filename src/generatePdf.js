import pdfMake from "pdfmake/build/pdfmake.js";
import pdfFonts from "pdfmake/build/vfs_fonts.js";

function generatePdf(users) {
  pdfMake.vfs = pdfFonts.pdfMake.vfs;

  const reportTitle = [];

  const details = [];

  const footer = [];

  const docDefinitions = {
    pageSize: "A4",
    pageMargins: [15, 50, 15, 40],

    header: [reportTitle],
    content: [details],
    footer: [footer],
  };

  //   pdfMake.createPdf(docDefinitions).download();
  pdfMake.createPdf(docDefinitions).open();
}

export default generatePdf;
