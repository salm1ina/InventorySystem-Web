export function success(res, message, data = null, pagination = null, status = 200) {
  const payload = { success: true, message, data };
  if (pagination) payload.pagination = pagination;
  return res.status(status).json(payload);
}

export function error(res, message, errors = null, status = 400) {
  const payload = { success: false, message };
  if (errors) payload.errors = errors;
  return res.status(status).json(payload);
}