import pdfMake from "pdfmake/build/pdfmake";

pdfMake.fonts = {
  Roboto: {
    normal:
      "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Regular.ttf",
    bold: "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Medium.ttf",
    italics:
      "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Italic.ttf",
    bolditalics:
      "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-MediumItalic.ttf",
  },
};

const generatePdfUsers = function (users) {
  const reportTitle = [
    {
      text: "Requests Users:",
      fontSize: 15,
      bold: true,
      margin: [15, 25, 0, 50],
    },
  ];

  const userData = users.map((userItem) => {
    return [
      {
        text: userItem.userName,
        margin: [0, 2, 0, 2],
        fontSize: 9,
      },
      {
        text: userItem.location,
        margin: [0, 2, 0, 2],
        fontSize: 9,
      },
      {
        text: userItem.startDate,
        margin: [0, 2, 0, 2],
        fontSize: 9,
      },
      {
        text: userItem.endDate,
        margin: [0, 2, 0, 2],
        fontSize: 9,
      },
      {
        text: userItem?.observation,
        margin: [0, 2, 0, 2],
        fontSize: 9,
      },
      {
        text: userItem.statusRequest,
        margin: [0, 2, 0, 2],
        fontSize: 9,
      },
    ];
  });

  const details = [
    {
      table: {
        headerRows: 1,
        widths: ["*", "*", "*", "*", "*", "*"],
        body: [
          [
            {
              text: "Name",
              style: "tableHeader",
              fontSize: 10,
              bold: true,
            },
            {
              text: "Location",
              style: "tableHeader",
              fontSize: 10,
              bold: true,
            },
            {
              text: "DateStart",
              style: "tableHeader",
              fontSize: 10,
              bold: true,
            },
            { text: "DateEnd", style: "tableHeader", fontSize: 10, bold: true },
            {
              text: "Observation",
              style: "tableHeader",
              fontSize: 10,
              bold: true,
            },
            {
              text: "Status Request",
              style: "tableHeader",
              fontSize: 10,
              bold: true,
            },
          ],
          ...userData,
        ],
      },
      layout: "headerLineOnly",
    },
  ];

  const footer = (currentPage, pageCount) => {
    return [
      {
        text: currentPage + " / " + pageCount,
        alignment: "right",
        fontSize: 9,
        margin: [0, 10, 20, 0],
      },
    ];
  };

  const docDefinitions = {
    pageSize: "A4",
    pageMargins: [15, 50, 15, 40],

    header: [reportTitle],
    content: [details],
    defaultStyle: {
      font: "Roboto",
    },
    footer: footer,
  };

  pdfMake.createPdf(docDefinitions).open();
};

export default generatePdfUsers;
