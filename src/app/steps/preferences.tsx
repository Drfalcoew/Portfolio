import React, { useState, useEffect } from 'react';
import { StepProps } from '../page';
import './steps.css';

const Preferences: React.FC<StepProps> = ({ onNext, onPrev, setCache, getCache }) => {
    const [formData, setFormData] = useState<any>({});
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const savedData = getCache('preferencesFormData');
        if (savedData) {
            setFormData(savedData);
        }

        setVisible(true);
        
    }, [getCache]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target as HTMLInputElement | HTMLSelectElement;
        const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : false;
        const newValue = type === 'checkbox' ? checked : value;

        setFormData((prevData: any) => ({
            ...prevData,
            [name]: newValue,
        }));

        setCache('preferencesFormData', {
            ...formData, // Include previous form data
            [name]: newValue, // Update or add the changed field
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onNext();
    };

    return (
        <form onSubmit={handleSubmit} className={`contact-form ${visible ? 'active' : ''}`}>
            <div className='contact-form-field-group'>
                <div className='contact-form-group contact-form-checkbox-group'>
                    <input
                        className='contact-form-checkbox'
                        type='checkbox'
                        id='wantsNotifications'
                        name='wantsNotifications'
                        checked={formData.wantsNotifications || false}
                        onChange={handleChange}
                    />
                    <label className='contact-form-label' htmlFor='wantsNotifications'>Send notifications</label>
                </div>

                <div className='contact-form-group contact-form-checkbox-group'>
                    <input
                        className='contact-form-checkbox'
                        type='checkbox'
                        id='shareInformation'
                        name='shareInformation'
                        checked={formData.shareInformation || false}
                        onChange={handleChange}
                    />
                    <label className='contact-form-label' htmlFor='shareInformation'>Share information with related marketers</label>
                </div>

                <div className='contact-form-group'>
                    <label className='contact-form-label' htmlFor='notificationPreferences'>Notification Preferences</label>
                    <select
                        className='contact-form-field contact-form-select'
                        id='notificationPreferences'
                        name='notificationPreferences'
                        value={formData.notificationPreferences || ''}
                        onChange={handleChange}
                        required={formData.wantsNotifications}
                    >
                        <option value=''>Select notification preference</option>
                        <option value='email'>Email</option>
                        <option value='text'>Text</option>
                    </select>
                </div>
            </div>

            <div className="form-actions">
                <button className="form-btn" type='submit'>
                    {'Register'}
                </button>
                <button className="form-btn back-btn" type='button' onClick={onPrev}>
                    {'<- Back'}
                </button>
            </div>
        </form>
    );
}

export default Preferences;
