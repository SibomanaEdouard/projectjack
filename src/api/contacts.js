import base from './base'

export const getAllContacts = () => base.get('/contacts')

export const getSpecificContact = (id) => base.get(`/contacts/${id}`)

export const updateContact = (id, body) => base.put(`/contacts/${id}`, body)

export const deleteContact = (id) => base.delete(`/contacts/${id}`)

export const createNewContact = (body) => base.post(`/contacts`, body);

