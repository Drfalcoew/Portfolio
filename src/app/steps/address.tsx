import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faBuilding, faMapMarkerAlt, faCity, faEnvelope } from '@fortawesome/free-solid-svg-icons'; // Import necessary icons
import './steps.css';
import { StepProps } from '../page';

const Address: React.FC<StepProps> = ({ onNext, onPrev, setCache, getCache }) => {
    const [localFormData, setLocalFormData] = useState<any>({});
    const [visible, setVisible] = useState(false);

    // Load data from cache when component mounts
    useEffect(() => {
        const savedData = getCache('addressFormData');
        if (savedData) {
            setLocalFormData(savedData);
        }

        // Triggering the transition
        setVisible(true);
        
    }, [getCache]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;

        // prevent zipCode from having more than 5 characters
        if (name === 'zipCode' && value.length > 5) {
            return;
        }

        setLocalFormData((prevData: any) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Save data to cache
        setCache('addressFormData', localFormData);

        onNext();
    };

    return (
        <form onSubmit={handleSubmit} className={`contact-form ${visible ? 'active' : ''}`}>
            <div className="contact-form-field-group">
                <div className="contact-form-outer-group">
                    <div className="contact-form-group contact-form-double">
                        <label className="contact-form-label" htmlFor="address1">
                            <FontAwesomeIcon icon={faMapMarkerAlt} /> Address *
                        </label>
                        <input
                            className="contact-form-field"
                            type="text"
                            id="address1"
                            name="address1"
                            value={localFormData.address1 || ''}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="contact-form-group contact-form-double">
                        <label className="contact-form-label" htmlFor="address2">
                            <FontAwesomeIcon icon={faBuilding} /> Apartment, Suite, etc.
                        </label>
                        <input
                            className="contact-form-field"
                            type="text"
                            id="address2"
                            name="address2"
                            value={localFormData.address2 || ''}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="contact-form-outer-group">
                    <div className="contact-form-group contact-form-triple">
                        <label className="contact-form-label" htmlFor="country">
                            <FontAwesomeIcon icon={faAddressCard} /> Country *
                        </label>
                        <select
                            className="contact-form-field contact-form-select"
                            value={localFormData.country || ''}
                            onChange={handleChange}
                            id="country"
                            name="country"
                            required
                        >
                            <option value="">Select a country</option>
                            <option value="US">United States</option>
                            <option value="UK">United Kingdom</option>
                            <option value="Canada">Canada</option>
                            <option value="Australia">Australia</option>
                            <option value="Germany">Germany</option>
                        </select>
                    </div>
                    <div className="contact-form-group contact-form-triple">
                        <label className="contact-form-label" htmlFor="city">
                            <FontAwesomeIcon icon={faCity} /> City *
                        </label>
                        <input
                            className="contact-form-field"
                            type="text"
                            id="city"
                            name="city"
                            value={localFormData.city || ''}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="contact-form-group contact-form-triple">
                        <label className="contact-form-label" htmlFor="zipCode">
                            <FontAwesomeIcon icon={faEnvelope} /> Zipcode *
                        </label>
                        <input
                            className="contact-form-field"
                            type="text"
                            id="zipCode"
                            name="zipCode"
                            value={localFormData.zipCode || ''}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className="contact-form-group">
                    <label className="contact-form-label" htmlFor="company">
                        <FontAwesomeIcon icon={faBuilding} /> Company
                    </label>
                    <input
                        className="contact-form-field contact-form-single"
                        type="text"
                        id="company"
                        name="company"
                        value={localFormData.company || ''}
                        onChange={handleChange}
                    />
                </div>
                <div className="contact-form-group">
                    <label className="contact-form-label" htmlFor="phoneNumber">
                        <FontAwesomeIcon icon={faEnvelope} /> Phone Number *
                    </label>
                    <input
                        className="contact-form-field contact-form-single"
                        type="text"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={localFormData.phoneNumber || ''}
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>
            <div className="form-actions">
                <button className="form-btn" type="submit">
                    {'Next Step ->'}
                </button>
                <button className="form-btn back-btn" onClick={onPrev}>
                    {'<- Back'}
                </button>
            </div>
        </form>
    );
};

export default Address;
