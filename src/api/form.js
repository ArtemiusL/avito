import { postRequest } from './request';

const generateFormData = (data) => {
  const formData = new FormData();
  let html = '';
  let checkboxesContent = '';

  Object.keys(data).forEach((key) => {
    if (key === 'Attachments') {
      data[key].forEach((item, index) => {
        formData.append(`file-${index + 1}`, item.content);
      });
    } else if (key === 'TypeService') {
      let serviceContent = '';
      data[key].forEach((item, index) => {
        if (index + 1 === data[key].length) {
          serviceContent += `${item}.`;
        } else {
          serviceContent += `${item}, `;
        }
      });
      checkboxesContent += `<p><b>${key}:</b> ${serviceContent}</p><br>`;
    } else {
      html += `<p><b>${key}:</b> ${data[key]}</p><br>`;
    }
  });

  html += checkboxesContent;

  formData.append('html', html);

  return formData;
};

export const sendFormWorkHere = (data) => {
  const url = '/sendmail';
  const formData = generateFormData(data);
  formData.append('subject', 'APPLICATION');

  return postRequest(url, formData, 'multipart/form-data');
};

export const sendFormHireUs = (data) => {
  const url = '/sendmail';
  const formData = generateFormData(data);
  formData.append('subject', 'REQUEST');

  return postRequest(url, formData, 'multipart/form-data');
};
