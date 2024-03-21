import React, { useState, ChangeEvent, FormEvent } from 'react';
import styled from 'styled-components';
import { createNewContact } from '../api/contacts';


const ModalContainer = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
`;

const ModalContent = styled.div`
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 30%;
`;

const CloseButton = styled.span`
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;

  &:hover,
  &:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
`;

interface ContactModalProps {
  onClose: () => void;
}

// function ContactModal({ onClose, theme }: ContactModalProps): JSX.Element {
function ContactModal({ onClose}: ContactModalProps): JSX.Element {
  const [name, setName] = useState<string>('');
  const [compaign, setCompaign] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [country, setCountry] = useState<string>('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    try {
      await createNewContact({ contact:name, campaign:compaign,number:phone, country:country });
      setName('');
      setCompaign('');
      setPhone('');
      setCountry('');
      onClose();
    } catch (error) {
      console.error('Error creating contact:', error);
    }
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setName(e.target.value);
  };

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setPhone(e.target.value);
  };

  const handleCompaignChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setCompaign(e.target.value);
  };

  const handleCountryChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setCountry(e.target.value);
  };

  return (
    <ModalContainer>
      <ModalContent>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <h2>Add New Contact</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Full Name
            </label>
            <br />
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              required
              placeholder="Input agent name"
            />
             <br />
          
          <label>
            Contact Number 
            </label>
            <br />
            <input
              type="tel"
              value={phone}
              onChange={handlePhoneChange}
              required
              placeholder="e.g. +250701726280"
            />
             <br />
        
          <label>
            Campaign
            </label>
            <br />
            <input
              type="text"
              value={compaign}
              onChange={handleCompaignChange}
              required
              placeholder="Campaign"
            />
             <br />
          <label>
            Country
            </label>
            <br />
            <input
              type="text"
              value={country}
              onChange={handleCountryChange}
              required
              placeholder="Country"
            />
         
          <button type="submit">Save</button>
        </form>
      </ModalContent>
    </ModalContainer>
  );
}

export default ContactModal;
