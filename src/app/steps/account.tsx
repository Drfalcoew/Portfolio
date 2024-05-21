import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { StepProps } from '../page';
import './steps.css';

const Account: React.FC<StepProps> = ({ onNext, setCache, getCache, formData, setFormData }) => {
    const [localFormData, setLocalFormData] = useState<any>({});
    const [visible, setVisible] = useState(false);

    // Load data from cache when component mounts
    useEffect(() => {
        const savedData = getCache('formData');
        if (savedData) {
            setLocalFormData(savedData);
        }

        // Triggering the transition
        setVisible(true);

    }, [getCache]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setLocalFormData((prevData: any) => ({
            ...prevData,
            [name]: value,
        }));

        setFormData((prevData: any) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (formData.password && formData.password.length < 10) {
            alert('Password must be at least 10 characters long');
            return;
        }

        if (formData.password && formData.password !== formData.confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        // Exclude password fields from caching
        const { password, confirmPassword, ...dataToCache } = localFormData;

        // Save data to cache
        setCache('formData', dataToCache);

        // Save data to parent component
        setFormData(dataToCache);

        onNext();
    };

    return (
        <form onSubmit={handleSubmit} className={`contact-form ${visible ? 'active' : ''}`}>
            <div className="contact-form-field-group">
                <div className="contact-form-outer-group">
                    <div className="contact-form-group contact-form-double">
                        <label className="contact-form-label" htmlFor="firstname">
                            <FontAwesomeIcon icon={faUser} width={12} /> First Name *
                        </label>
                        <input
                            className="contact-form-field"
                            type="text"
                            id="firstname"
                            name="firstname"
                            value={localFormData.firstname || ''}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="contact-form-group">
                        <label className="contact-form-label" htmlFor="lastname">
                            <FontAwesomeIcon icon={faUser} width={12} /> Last Name *
                        </label>
                        <input
                            className="contact-form-field"
                            type="text"
                            id="lastname"
                            name="lastname"
                            value={localFormData.lastname || ''}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className="contact-form-group">
                    <label className="contact-form-label" htmlFor="username">
                        <FontAwesomeIcon icon={faUser} width={12} /> Username *
                    </label>
                    <input
                        className="contact-form-field contact-form-single"
                        type="text"
                        id="username"
                        name="username"
                        value={localFormData.username || ''}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="contact-form-group">
                    <label className="contact-form-label" htmlFor="email">
                        <FontAwesomeIcon icon={faEnvelope} width={12} /> Email *
                    </label>
                    <input
                        className="contact-form-field contact-form-single"
                        type="email"
                        id="email"
                        name="email"
                        value={localFormData.email || ''}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="contact-form-outer-group">
                    <div className="contact-form-group contact-form-double">
                        <label className="contact-form-label" htmlFor="password">
                            <FontAwesomeIcon icon={faLock} width={12} /> Password *
                        </label>
                        <input
                            className="contact-form-field"
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password || ''}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="contact-form-group contact-form-double">
                        <label className="contact-form-label" htmlFor="confirmPassword">
                            <FontAwesomeIcon icon={faLock} width={12} /> Confirm Password *
                        </label>
                        <input
                            className="contact-form-field"
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={formData.confirmPassword || ''}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
            </div>

            <div className="form-actions">
                <button className="form-btn" type="submit">
                    {'Next Step ->'}
                </button>
            </div>
        </form>
    );
};

export default Account;
