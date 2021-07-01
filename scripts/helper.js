const closeModal = (id, element) => {
  const modal = document.querySelector(`#${id}`);
  const elementForm = document.querySelector(`#${element}`)
  M.Modal.getInstance(modal).close();
  elementForm.reset();
}
