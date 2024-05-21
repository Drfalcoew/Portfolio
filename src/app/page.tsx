"use client";

import { useState, useEffect } from "react";
import Stepper from "./stepper/stepper";
import Account from "./steps/account";
import Address from "./steps/address";
import Preferences from "./steps/preferences";
import './globals.css';
import CacheService from "../common/CacheService";
import { CircularProgress, Modal } from "@mui/material";

export interface StepProps {
  onNext: () => void;
  onPrev: () => void;
  setCache: (key: string, data: any) => void;
  getCache: (key: string) => any;

  formData?: any;
  setFormData: (data: any) => void;
}

const cacheService = new CacheService();

export default function StepperHome() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<any>({});
  const [loading, setLoading] = useState(false);

  // Load data from cache when component mounts
  useEffect(() => {
      const savedData = cacheService.get('formData');
      if (savedData) {
          setFormData(savedData);
      }
  }, []);
  
  const handleUpdateFormData = (key: string, dataToCache: any) => {
      cacheService.set(key, dataToCache);
      setFormData(dataToCache);
  }

  const getCache = (key: string) => {
    return cacheService.get(key);
  }

  const handleNext = () => {
    if (currentStep === steps.length - 1) {
      // Submit the form if we're on the last step

      setLoading(true);

      const apiUrl = 'https://gla7dxnn3l.execute-api.us-west-1.amazonaws.com/init/pets';
      // const localUrl = 'http://localhost:8080/api/form';

      // get the data from the cache
      const formData = cacheService.get('formData');

      fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      .then(response => {
        if (response.ok) {
          alert('Form submitted successfully! Please check your email for confirmation.');
          setLoading(false);
          return;
        }
        throw new Error('Network response was not ok.');
      })
      .catch(error => {
        setLoading(false);
        alert('There was an error submitting the form. Please try again.');
        console.error('There has been a problem with your fetch operation:', error);
      });
  
      return;
    };
  
    setCurrentStep((prev) => prev + 1);
  }

  const handlePrev = () => {
    if (currentStep === 0) return;
    setCurrentStep((prev) => prev - 1);
  }

  const steps = [
    {component: <Account onNext={handleNext} onPrev={handlePrev} setCache={handleUpdateFormData} getCache={getCache} 
    formData={formData} setFormData={setFormData}/>, label: 'Account'},
    {component: <Address onNext={handleNext} onPrev={handlePrev} setCache={handleUpdateFormData} getCache={getCache} 
    formData={formData} setFormData={setFormData}/>, label: 'Address'},
    {component: <Preferences onNext={handleNext} onPrev={handlePrev} setCache={handleUpdateFormData} getCache={getCache} 
    formData={formData} setFormData={setFormData}/>, label: 'Preferences'}
  ];

  return (
    <main className="form-root">
      <div className="form-container">
        <Modal open={loading} className="loading-modal">
          <CircularProgress />
        </Modal>
        <h1 className="form-header">{steps[currentStep].label}</h1>
          <Stepper step={currentStep}/>
          {steps[currentStep].component}
      </div>
    </main>
  );
}
